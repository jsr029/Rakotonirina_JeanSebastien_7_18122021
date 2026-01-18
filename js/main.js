document.addEventListener('DOMContentLoaded', async () => {
    await loadRecipes();

    if (recipes.length === 0) return;

    // Initialisation
    initDropdowns();
    updateAll(); // affichage initial

    // Recherche globale
    const globalInput = document.querySelector('.globalSearch');
    let debounceTimer;

    globalInput.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(updateAll, 300);
    });

    // Pour les tests rapides (optionnel)
    console.log(`Projet chargé – ${recipes.length} recettes disponibles`);
});