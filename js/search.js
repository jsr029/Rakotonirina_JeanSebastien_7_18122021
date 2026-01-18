function normalize(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function searchRecipes(query, selectedTags) {
  if (!recipes.length) return [];

  const q = normalize(query);
  const useText = q.length >= 3;

  return recipes.filter(r => {

    if (useText) {
      if (normalize(r.name).includes(q)) return true;
      if (normalize(r.description).includes(q)) return true;
      if (r.ingredients.some(i => normalize(i.ingredient).includes(q))) return true;
      return false;
    }

    // Tags → intersection stricte
    for (const tag of selectedTags.ingredients) {
      if (!r.ingredients.some(i => normalize(i.ingredient) === tag)) return false;
    }
    for (const tag of selectedTags.appliances) {
      if (normalize(r.appliance) !== tag) return false;
    }
    for (const tag of selectedTags.ustensils) {
      if (!r.ustensils.some(u => normalize(u) === tag)) return false;
    }

    return true;
  });
}

function getSuggestions(filtered, selected) {
  const ing = new Set();
  const app = new Set();
  const ust = new Set();

  filtered.forEach(r => {
    r.ingredients.forEach(i => {
      const n = normalize(i.ingredient);
      if (!selected.ingredients.has(n)) ing.add(i.ingredient);
    });
    const a = normalize(r.appliance);
    if (!selected.appliances.has(a)) app.add(r.appliance);
    r.ustensils.forEach(u => {
      const n = normalize(u);
      if (!selected.ustensils.has(n)) ust.add(u);
    });
  });

  return {
    ingredients: [...ing].sort((a,b)=>a.localeCompare(b)),
    appliances:  [...app].sort((a,b)=>a.localeCompare(b)),
    ustensils:   [...ust].sort((a,b)=>a.localeCompare(b))
  };
}