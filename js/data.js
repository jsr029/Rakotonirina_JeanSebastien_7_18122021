let recipes = [];

async function loadRecipes() {
    try {
        const response = await fetch('./json/recipes.json');
        if (!response.ok) throw new Error("Erreur réseau");
        recipes = await response.json();
        return recipes;
    } catch (err) {
        console.error("Impossible de charger les recettes", err);
        document.querySelector('.recipes-grid').innerHTML = '<p style="color:red; text-align:center;">Erreur de chargement des données</p>';
        return [];
    }
}