let recipes = [];

async function loadRecipes() {
  try {
    const res = await fetch('json/recipes.json');
    if (!res.ok) throw new Error('Erreur réseau');
    recipes = await res.json();
    return recipes;
  } catch (err) {
    console.error('Chargement recettes échoué', err);
    document.querySelector('.recipes-grid').innerHTML = '<p style="color:red;text-align:center">Erreur chargement données</p>';
    return [];
  }
}