import displayRecipes from "./displayRecipes.js";
import displayMenu from './displayMenu.js';
class globalSearch{
    render(recipes){
        let search = document.querySelector(".globalSearch");
        let nameResult = [];
        let ingredientsResult = [];
        let descriptionResult = [];
        let applianceResult = [];
        let ustensilsResult = [];
        let newBaseFilteredConcated = [];
        var recepiesSort = [];
        search.addEventListener('input', function (evt) {
            let globalInput = search.value;
                if(globalInput.length > 2){
                nameResult = [];
                descriptionResult = [];
                applianceResult = [];
                ingredientsResult = [];
                ustensilsResult = [];
                for (let i = 0; i < recipes.length; i++) {
                    if (recipes[i].name.toLowerCase().trim().includes(globalInput.toLowerCase().trim())) {
                        nameResult.push(recipes[i]);
                    }
                    if (recipes[i].description.toLowerCase().trim().includes(globalInput.toLowerCase().trim())) {
                        descriptionResult.push(recipes[i]);
                    }
                    if (recipes[i].appliance.toLowerCase().trim().includes(globalInput.toLowerCase().trim())) {
                        applianceResult.push(recipes[i]);
                    }
                    for (let k = 0; k < recipes[i].ingredients.length; k++) {
                        if (recipes[i].ingredients[k].ingredient.toLowerCase().trim().includes(globalInput.toLowerCase().trim())) {
                            ingredientsResult.push(recipes[i]);
                        }
                    }
                    for (let k = 0; k < recipes[i].ustensils.length; k++) {
                        if (recipes[i].ustensils[k].toLowerCase().trim().includes(globalInput.toLowerCase().trim())) {
                            ustensilsResult.push(recipes[i]);
                        }
                    }
                }
            newBaseFilteredConcated = [...new Set([...nameResult, ...ingredientsResult, ...applianceResult, ...ustensilsResult])];
            newBaseFilteredConcated.sort((a, b) => b.name.localeCompare(a.name));
                    new displayRecipes().removeMessage();
                    new displayRecipes().nbrRecipes(newBaseFilteredConcated);
                    new displayRecipes().render(newBaseFilteredConcated);
                    new displayMenu().render(newBaseFilteredConcated, globalInput);
        });
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
