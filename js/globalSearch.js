import DisplayRecipes from "./DisplayRecipes.js";
import DisplayMenu from './DisplayMenu.js';
class GlobalSearch {
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
        let dispRecipes = new DisplayRecipes();
        let dispMenu = new DisplayMenu();
        search.addEventListener('input', function (evt) {
            let globalInput = search.value;
            if (globalInput.length > 2) {
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
                        if (ing.ingredient.toLowerCase().includes(globalInput.toLowerCase())) {
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
                    newBaseFilteredConcated = [...new Set([...nameResult, ...ingredientsResult, ...descriptionResult])];
                    newBaseFilteredConcated.sort((a, b) => b.name.localeCompare(a.name));
                    dispRecipes.removeMessage();
                    dispRecipes.nbrRecipes(newBaseFilteredConcated);
                    dispRecipes.render(newBaseFilteredConcated);
                    dispMenu.render(newBaseFilteredConcated, globalInput);
                });
            } else {
                dispRecipes.removeMessage();
                recepiesSort = data.sort((a, b) => b.name.localeCompare(a.name));
                dispRecipes.render(recepiesSort);
                dispMenu.render(recepiesSort);
            }
        });
        recepiesSort = data.sort((a, b) => b.name.localeCompare(a.name));
        dispRecipes.render(recepiesSort);
        dispMenu.render(recepiesSort);
    }
}
export default GlobalSearch;