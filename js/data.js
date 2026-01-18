let recipes = [];

async function loadRecipes() {
    try {
        const response = await fetch('json/recipes.json');
        if (!response.ok) throw new Error("Erreur réseau");
        recipes = await response.json();
        console.log(`Chargement OK → ${recipes.length} recettes`);
        return recipes;
    } catch (err) {
        console.error("Erreur chargement recettes", err);
        const grid = document.querySelector('.recipes-grid');
        if (grid) grid.innerHTML = '<p style="color:red; text-align:center; padding:40px;">Erreur de chargement des recettes</p>';
        return [];
    }
}