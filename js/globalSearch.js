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
            if (globalInput.length > 2) {
                nameResult = [];
                descriptionResult = [];
                applianceResult = [];
                ingredientsResult = [];
                ustensilsResult = [];
<<<<<<< HEAD
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
=======
                for (let i = 0; i < data.length; i++) {
                    if (data[i].name.toLowerCase().trim().includes(globalInput.toLowerCase().trim())) {
                        nameResult.push(data[i]);
                    }
                    if (data[i].description.toLowerCase().trim().includes(globalInput.toLowerCase().trim())) {
                        descriptionResult.push(data[i]);
                    }
                    if (data[i].appliance.toLowerCase().trim().includes(globalInput.toLowerCase().trim())) {
                        applianceResult.push(data[i]);
                    }
                    for (let k = 0; k < data[i].ingredients.length; k++) {
                        if (data[i].ingredients[k].ingredient.toLowerCase().trim().includes(globalInput.toLowerCase().trim())) {
                            ingredientsResult.push(data[i]);
                        }
                    }
                    for (let k = 0; k < data[i].ustensils.length; k++) {
                        if (data[i].ustensils[k].toLowerCase().trim().includes(globalInput.toLowerCase().trim())) {
                            ustensilsResult.push(data[i]);
>>>>>>> 874889e46ccb28c1cd322bf9308089de19b95423
                        }
                    });
                    if (elm.appliance.toLowerCase().includes(globalInput.toLowerCase())) {
                        applianceResult.push(elm);
                    }
                    if (elm.name.toLowerCase().includes(globalInput.toLowerCase())) {
                        nameResult.push(elm);
                    }
<<<<<<< HEAD
=======
                }
>>>>>>> 874889e46ccb28c1cd322bf9308089de19b95423
                    newBaseFilteredConcated = [...new Set([...nameResult, ...ingredientsResult, ...descriptionResult, ...applianceResult, ...ustensilsResult])];
                    newBaseFilteredConcated.sort((a, b) => b.name.localeCompare(a.name));
                    new displayRecipes().removeMessage();
                    new displayRecipes().nbrRecipes(newBaseFilteredConcated);
                    new displayRecipes().render(newBaseFilteredConcated);
                    new displayMenu().render(newBaseFilteredConcated, globalInput);
<<<<<<< HEAD
                });
=======
>>>>>>> 874889e46ccb28c1cd322bf9308089de19b95423
            } else {
                new displayRecipes().removeMessage();
                recepiesSort = data.sort((a, b) => b.name.localeCompare(a.name));
                new displayRecipes().render(recepiesSort);
                new displayMenu().render(recepiesSort);
            }
        });
        recepiesSort = data.sort((a, b) => b.name.localeCompare(a.name));
        new displayRecipes().render(recepiesSort);
        new displayMenu().render(recepiesSort);
    }
}
export default globalSearch;
