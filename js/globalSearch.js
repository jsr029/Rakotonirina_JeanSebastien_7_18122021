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
                for (let i = 0; i < data.length; i++) {
                    if (data[i].name.toLowerCase().includes(globalInput.toLowerCase())) {
                        nameResult.push(data[i]);
                    }
                    if (data[i].description.toLowerCase().includes(globalInput.toLowerCase())) {
                        descriptionResult.push(data[i]);
                    }
                    if (data[i].appliance.toLowerCase().includes(globalInput.toLowerCase())) {
                        applianceResult.push(data[i]);
                    }
                    for (let k = 0; k < data[i].ingredients.length; k++) {
                        if (data[i].ingredients[k].ingredient.toLowerCase().includes(globalInput.toLowerCase())) {
                            ingredientsResult.push(data[i]);
                        }
                    }
                    for (let k = 0; k < data[i].ustensils.length; k++) {
                        if (data[i].ustensils[k].toLowerCase().includes(globalInput.toLowerCase())) {
                            ustensilsResult.push(data[i]);
                        }
                    }
                }
                newBaseFilteredConcated = [...new Set([...nameResult, ...ingredientsResult, ...descriptionResult, ...applianceResult, ...ustensilsResult])];
                newBaseFilteredConcated.sort((a, b) => b.name.localeCompare(a.name));
                new displayRecipes().removeMessage();
                new displayRecipes().nbrRecipes(newBaseFilteredConcated);
                new displayRecipes().render(newBaseFilteredConcated);
                new displayMenu().render(newBaseFilteredConcated, globalInput);
            } else {
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