import displayRecipes from "./displayRecipes.js";

class displayTags {
    render(data) {
        let dropIngredientsLista = document.querySelectorAll('.dropdown_ingredients-list a');
        let tagIngredients = document.querySelector('.tagIngredients');
        let underIngredients = document.querySelector('.underSearch_ingredientsTags');
        dropIngredientsLista.forEach(elm => {
            elm.addEventListener("click", function (event) {
                underIngredients.style.display = 'flex';
                tagIngredients.innerHTML = event.target.innerHTML;
                stockTags(data, tagIngredients.innerHTML);
            });
        });
        let dropApplianceLista = document.querySelectorAll('.dropdown_appliance-list a');
        let tagAppliance = document.querySelector('.tagAppliance');
        let underAppliance = document.querySelector('.underSearch_applianceTags');
        dropApplianceLista.forEach(elm => {
            elm.addEventListener("click", function (event) {
                underAppliance.style.display = 'flex';
                tagAppliance.innerHTML = event.target.innerHTML;
                stockTags(data, tagAppliance.innerHTML);
            });
        });
        let dropUstensilsLista = document.querySelectorAll('.dropdown_ustensils-list a');
        let tagUstensils = document.querySelector('.tagUstensils');
        let underUstensils = document.querySelector('.underSearch_ustensilsTags');
        dropUstensilsLista.forEach(elm => {
            elm.addEventListener("click", function (event) {
                underUstensils.style.display = 'flex';
                tagUstensils.innerHTML = event.target.innerHTML;
                stockTags(data, tagUstensils.innerHTML);
            });
        });
        this.closeTag();
    }
    closeTag() {
        let tagIcon = document.querySelector('.tagIcon');
        let underIngredients = document.querySelector('.underSearch_ingredientsTags');
        let tagAcon = document.querySelector('.tagAcon');
        let underAppliance = document.querySelector('.underSearch_applianceTags');
        let tagUcon = document.querySelector('.tagUcon');
        let underUstensils = document.querySelector('.underSearch_ustensilsTags');
        tagIcon.addEventListener('click', function (event) {
            underIngredients.style.display = 'none';
            tagIcon.style.displayTags = 'none';
        });
        tagAcon.addEventListener('click', function (event) {
            underAppliance.style.display = 'none';
            tagAcon.style.displayTags = 'none';
        });
        tagUcon.addEventListener('click', function (event) {
            underUstensils.style.display = 'none';
            tagUcon.style.displayTags = 'none';
        });
    }
}
let stockTags = function (data, tab) {
    let allTab = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].appliance.toLowerCase().includes(tab.toLowerCase())) {
            allTab.push(data[i]);
        }
        for (let j = 0; j < data[i].ingredients.length; j++) {
            if (data[i].ingredients[j].ingredient.toLowerCase().includes(tab.toLowerCase())) {
                allTab.push(data[i]);
            }
        }
        for (let h = 0; h < data[i].ustensils.length; h++) {
            if (data[i].ustensils[h].toLowerCase().includes(tab.toLowerCase())) {
                allTab.push(data[i]);
            }
        }
    }
    //allTab = [...new Set([...ingredientsTab, ...applianceTab, ...ustensilsTab])];
    new displayRecipes().render(allTab);
};
let getTags = function () {
    let tagIngredients = document.querySelector('.tagIngredients');
    let tagAppliance = document.querySelector('.tagAppliance');
    let tagUstensils = document.querySelector('.tagUstensils');
    window.onchange = function(){
        console.log('Hello');
    };
};
export default displayTags;