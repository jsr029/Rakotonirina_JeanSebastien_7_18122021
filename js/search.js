function normalize(str) {
    return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}

function searchRecipes(query, selectedTags) {
    if (!recipes.length) return [];

    const normalizedQuery = normalize(query);
    const useTextSearch = normalizedQuery.length >= 3;

    return recipes.filter(recipe => {
        // Filtre texte global (nom, description, ingrédients)
        if (useTextSearch) {
            const nameOk   = normalize(recipe.name).includes(normalizedQuery);
            const descOk   = normalize(recipe.description).includes(normalizedQuery);
            const ingOk    = recipe.ingredients.some(i => normalize(i.ingredient).includes(normalizedQuery));

            if (!nameOk && !descOk && !ingOk) return false;
        }

        // Filtre tags → TOUS les tags sélectionnés doivent matcher
        for (const tag of selectedTags.ingredients) {
            if (!recipe.ingredients.some(i => normalize(i.ingredient) === tag)) return false;
        }

        for (const tag of selectedTags.appliances) {
            if (normalize(recipe.appliance) !== tag) return false;
        }

        for (const tag of selectedTags.ustensils) {
            if (!recipe.ustensils.some(u => normalize(u) === tag)) return false;
        }

        return true;
    });
}

function getSuggestions(filteredRecipes, selectedTags) {
    const ingredients = new Set();
    const appliances  = new Set();
    const ustensils   = new Set();

    filteredRecipes.forEach(recipe => {
        recipe.ingredients.forEach(ing => {
            const norm = normalize(ing.ingredient);
            if (!selectedTags.ingredients.has(norm)) ingredients.add(ing.ingredient);
        });

        const appNorm = normalize(recipe.appliance);
        if (!selectedTags.appliances.has(appNorm)) appliances.add(recipe.appliance);

        recipe.ustensils.forEach(ust => {
            const norm = normalize(ust);
            if (!selectedTags.ustensils.has(norm)) ustensils.add(ust);
        });
    });

    return {
        ingredients: [...ingredients].sort((a,b) => a.localeCompare(b)),
        appliances:  [...appliances] .sort((a,b) => a.localeCompare(b)),
        ustensils:   [...ustensils]  .sort((a,b) => a.localeCompare(b))
    };
}