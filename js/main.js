// js/main.js – version robuste

document.addEventListener('DOMContentLoaded', () => {
    // Vérification existence des fonctions critiques
    if (typeof loadRecipes !== 'function') {
        console.error("loadRecipes n'est PAS défini → vérifie l'ordre des scripts !");
        document.querySelector('.recipes-grid').innerHTML = '<p style="color:red">Erreur : scripts mal chargés (data.js manquant ?)</p>';
        return;
    }

    if (typeof updateAll !== 'function') {
        console.error("updateAll n'est PAS défini");
        return;
    }

    // Lancement normal
    loadRecipes().then(() => {
        if (recipes.length === 0) {
            console.warn("Aucune recette chargée");
            return;
        }

        initDropdowns();
        updateAll();

        const globalInput = document.querySelector('.globalSearch');
        let debounceTimer;

        globalInput.addEventListener('input', () => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(updateAll, 300);
        });

        console.log(`Prêt – ${recipes.length} recettes chargées`);
    });
});