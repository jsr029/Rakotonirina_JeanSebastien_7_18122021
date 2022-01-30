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
                if(globalInput.length > 3)
                nameResult = [];
                descriptionResult = [];
                applianceResult = [];
                ingredientsResult = [];
                ustensilsResult = [];
                for (let i = 0; i < recipes.length; i++) {
                    if (recipes[i].name.toLowerCase().includes(globalInput.toLowerCase())) {
                        nameResult.push(recipes[i]);
                    }
                    if (recipes[i].description.toLowerCase().includes(globalInput.toLowerCase())) {
                        descriptionResult.push(recipes[i]);
                    }
                    if (recipes[i].appliance.toLowerCase().includes(globalInput.toLowerCase())) {
                        applianceResult.push(recipes[i]);
                    }
                    for (let k = 0; k < recipes[i].ingredients.length; k++) {
                        if (recipes[i].ingredients[k].ingredient.toLowerCase().includes(globalInput.toLowerCase())) {
                            ingredientsResult.push(recipes[i]);
                        }
                    }
                    for (let k = 0; k < recipes[i].ustensils.length; k++) {
                        if (recipes[i].ustensils[k].toLowerCase().includes(globalInput.toLowerCase())) {
                            ustensilsResult.push(recipes[i]);
                        }
                    }
                }
            newBaseFilteredConcated = [...new Set([...nameResult, ...ingredientsResult, ...descriptionResult])];
            newBaseFilteredConcated.sort((a, b) => b.name.localeCompare(a.name));
            new displayRecipes().render(newBaseFilteredConcated);
            new displayMenu().render(newBaseFilteredConcated);
        });
        //Affiche les recettes par ordre alphabetique
        recepiesSort = recipes.sort((a, b) => b.name.localeCompare(a.name));
        new displayRecipes().render(recepiesSort);
        new displayMenu().render(recepiesSort);
    }
}
export default globalSearch;