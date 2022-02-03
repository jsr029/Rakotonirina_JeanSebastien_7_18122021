import displayRecipes from "./displayRecipes.js";
import displayMenu from './displayMenu.js';
class globalSearch {
    render(data) {
        let search = document.querySelector(".globalSearch");
        let nameResult = [];
        let ingredientsResult = [];
        let descriptionResult = [];
        let applianceResult = [];
        let ustensilsResult = [];
        let newBaseFilteredConcated = [];
        let recepiesSort = [];
        let baseModified = [];
        search.addEventListener('input', function (evt) {
            let globalInput = search.value;
            if (globalInput.length > 3)
                nameResult = [];
            descriptionResult = [];
            applianceResult = [];
            ingredientsResult = [];
            ustensilsResult = [];
            baseModified = data.map(item => {
                const base = {};
                base.id = item.id;
                base.name = item.name;
                base.servings = item.servings;
                base.time = item.time;
                base.appliance = item.appliance;
                base.ustensils = item.ustensils;
                base.description = item.description;
                base.ingredients = item.ingredients.map(it => {
                    const ing = {};
                    ing.ingredient = it.ingredient;
                    ing.unit = it.unit ? it.unit : '';
                    ing.quantity = it.quantity;
                    return ing;
                });
                return base;
            });
            baseModified.forEach(elm => {
                elm.ingredients.filter(function (ing) {
                    if (ing.ingredient.toLowerCase().trim().includes(globalInput.toLowerCase().trim())) {
                        ingredientsResult.push(elm);
                    }
                });
                elm.ustensils.filter(function (ust) {
                    if (ust.toLowerCase().includes(globalInput.toLowerCase())) {
                        ustensilsResult.push(elm);
                    }
                });
                if (elm.appliance.toLowerCase().includes(globalInput.toLowerCase())) {
                    applianceResult.push(elm);
                }
                if (elm.name.toLowerCase().includes(globalInput.toLowerCase())) {
                    nameResult.push(elm);
                }
                let recipes = document.querySelector('.recipes');
                if (newBaseFilteredConcated.length > 0 && globalInput.length > 0)
                    recipes.innerHTML = '« Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc...';
                });
            newBaseFilteredConcated = [...new Set([...nameResult, ...ingredientsResult, ...descriptionResult, ...applianceResult, ...ustensilsResult])];
            newBaseFilteredConcated.sort((a, b) => b.name.localeCompare(a.name));
            new displayRecipes().render(newBaseFilteredConcated);
            new displayMenu().render(newBaseFilteredConcated);
        });
        recepiesSort = data.sort((a, b) => b.name.localeCompare(a.name));
        new displayRecipes().render(recepiesSort);
        new displayMenu().render(recepiesSort);
    }
}
export default globalSearch;