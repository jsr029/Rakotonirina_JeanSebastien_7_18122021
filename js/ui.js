function refreshRecipesDisplay(filtered) {
    const grid = document.querySelector('.recipes-grid');
    grig ? grid.innerHTML = '':'';

    if (filtered.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1 / -1; text-align:center; padding:40px;">Aucune recette ne correspond à votre recherche</p>';
    } else {
        filtered.forEach(recipe => {
            const article = document.createElement('article');
            article.innerHTML = `
                <div class="img-placeholder"></div>
                <div class="content">
                    <h3>
                        <span>${recipe.name}</span>
                        <span class="time"><i class="far fa-clock"></i> ${recipe.time} min</span>
                    </h3>
                    <p class="description">${recipe.description}</p>
                    <ul class="ingredients-list">
                        ${recipe.ingredients.map(i => `
                            <li>${i.ingredient}${i.quantity ? ` : ${i.quantity}` : ''}${i.unit ? ` ${i.unit}` : ''}</li>
                        `).join('')}
                    </ul>
                </div>
            `;
            grid.appendChild(article);
        });
    }

    document.querySelector('.recipes-count').textContent = `${filtered.length} recette${filtered.length !== 1 ? 's' : ''}`;
}

function updateAll() {
    const filtered = searchRecipes(
        document.querySelector('.globalSearch').value,
        selectedTags
    );

    refreshRecipesDisplay(filtered);
    refreshTagsDisplay();

    const suggestions = getSuggestions(filtered, selectedTags);

    refreshDropdown('ingredients', suggestions.ingredients);
    refreshDropdown('appliances',  suggestions.appliances);
    refreshDropdown('ustensils',   suggestions.ustensils);
}