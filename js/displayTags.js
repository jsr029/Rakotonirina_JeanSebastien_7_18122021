import DisplayRecipes from "./DisplayRecipes.js";
import DisplayMenu from "./DisplayMenu.js";
import recipes from "./recipes.js";
import displayRecipes from "./DisplayRecipes.js";

class DisplayTags {
    render(data) {
        let dropIngredientsLista = document.querySelectorAll('.dropdown_ingredients-list a');
        let tagIngredients = document.querySelector('.tagIngredients');
        let underIngredients = document.querySelector('.underSearch_ingredientsTags');
        /**Ingredients */
        let dropIH2 = document.querySelector('.dropdown_ingredients h2');
        let dropIH2span = document.querySelector('.dropdown_ingredients h2 span');
        let iClicked = document.querySelector('.dropdown_ingredients-input i');
        let dropIngredients = document.querySelector('.dropdown_ingredients-input .ingredientSearch');
        let ingredientsList = document.querySelector('.dropdown_ingredients-list');
        let dropIH2i = document.querySelector('.dropdown_ingredients h2 i');
        /**Ingredients End */
        /**Ustensils */
        let dropUH2 = document.querySelector('.dropdown_ustensils h2');
        let dropUH2span = document.querySelector('.dropdown_ustensils h2 span');
        let uClicked = document.querySelector('.dropdown_ustensils-input i');
        let dropUstensils = document.querySelector('.dropdown_ustensils-input .ustensilSearch');
        let ustensilsList = document.querySelector('.dropdown_ustensils-list');
        let dropUH2i = document.querySelector('.dropdown_ustensils h2 i');
        /**Ustensils end */
        /**Appliance */
        let dropAH2 = document.querySelector('.dropdown_appliance h2');
        let dropAH2span = document.querySelector('.dropdown_appliance h2 span');
        let aClicked = document.querySelector('.dropdown_appliance-input i');
        let dropAppliance = document.querySelector('.dropdown_appliance-input .applianceSearch');
        let applianceList = document.querySelector('.dropdown_appliance-list');
        let dropAH2i = document.querySelector('.dropdown_appliance h2 i');
        /**Appliance End */
        let underAppliance = document.querySelector('.underSearch_applianceTags');
        let underUstensils = document.querySelector('.underSearch_ustensilsTags');
        let tagI = underIngredients.childNodes[1].innerHTML;
        let tagA = underAppliance.childNodes[1].innerHTML;
        let tagU = underUstensils.childNodes[1].innerHTML;

        let lessI = [];
        let lessA = [];
        let lessU = [];
        let allLess = [];

        let displayR = new DisplayRecipes();
        let displayM = new DisplayMenu();

        data.forEach(elm => {
            elm.ingredients.filter(function (ing) {
                if (ing.ingredient.toLowerCase().includes(tagI.toLowerCase())) {
                    lessI.push(elm);
                }
            });
            elm.ustensils.filter(function (ust) {
                if (ust.toLowerCase().includes(tagU.toLowerCase())) {
                    lessU.push(elm);
                }
            });
            if (elm.appliance.toLowerCase().includes(tagA.toLowerCase())) {
                lessA.push(elm);
            }
            allLess = [...new Set([...lessI, ...lessA, ...lessU])];
            allLess.sort();
        });
        dropIngredientsLista.forEach(elm => {
            elm.addEventListener("click", function (event) {
                underIngredients.style.display = 'flex';
                tagIngredients.innerHTML = event.target.innerHTML;
                stockTags(data, tagIngredients.innerHTML);
                /**Ingredients */
                dropIngredients.style.display = 'none';
                ingredientsList.style.display = 'none';
                dropIH2.style.display = 'none';
                if (iClicked) {
                    iClicked.className = 'fa fa-angle-up';
                    dropIH2.appendChild(iClicked);
                    dropIH2.style.display = 'flex';
                } else if (!iClicked) {
                    dropIH2.style.display = 'flex';
                    dropIH2i.className = 'fa fa-angle-down';
                }
                dropIH2span.style.display = 'block';
                /**Ingredients end */
            });
        });
        let dropApplianceLista = document.querySelectorAll('.dropdown_appliance-list a');
        let tagAppliance = document.querySelector('.tagAppliance');
        dropApplianceLista.forEach(elm => {
            elm.addEventListener("click", function (event) {
                underAppliance.style.display = 'flex';
                tagAppliance.innerHTML = event.target.innerHTML;
                stockTags(data, tagAppliance.innerHTML);
                /**Appliance */
                dropAppliance.style.display = 'none';
                applianceList.style.display = 'none';
                dropAH2.style.display = 'none';
                if (aClicked) {
                    aClicked.className = 'fa fa-angle-up';
                    dropAH2.appendChild(aClicked);
                    dropAH2.style.display = 'flex';
                } else if (!aClicked) {
                    dropAH2.style.display = 'flex';
                    dropAH2i.className = 'fa fa-angle-down';
                }
                dropAH2span.style.display = 'block';
                /**Appliance end */
            });
        });
        let dropUstensilsLista = document.querySelectorAll('.dropdown_ustensils-list a');
        let tagUstensils = document.querySelector('.tagUstensils');
        dropUstensilsLista.forEach(elm => {
            elm.addEventListener("click", function (event) {
                underUstensils.style.display = 'flex';
                tagUstensils.innerHTML = event.target.innerHTML;
                stockTags(data, tagUstensils.innerHTML);
                /**Ustensils */
                dropUstensils.style.display = 'none';
                ustensilsList.style.display = 'none';
                dropUH2.style.display = 'none';
                if (uClicked) {
                    uClicked.className = 'fa fa-angle-down';
                    dropUH2.appendChild(uClicked);
                    dropUH2.style.display = 'flex';
                } else if (!uClicked) {
                    dropUH2.style.display = 'flex';
                    dropUH2i.className = 'fa fa-angle-down';
                }
                dropUH2span.style.display = 'block';
                /**Ustensils end */
            });
        });
        this.closeTag(recipes);
    }
    closeTag(data) {
        let tagIcon = document.querySelector('.tagIcon');
        let underIngredients = document.querySelector('.underSearch_ingredientsTags');
        let tagAcon = document.querySelector('.tagAcon');
        let underAppliance = document.querySelector('.underSearch_applianceTags');
        let tagUcon = document.querySelector('.tagUcon');
        let underUstensils = document.querySelector('.underSearch_ustensilsTags');
        /**Ingredients */
        let dropIH2 = document.querySelector('.dropdown_ingredients h2');
        let dropIH2span = document.querySelector('.dropdown_ingredients h2 span');
        let iClicked = document.querySelector('.dropdown_ingredients-input i');
        let dropIngredients = document.querySelector('.dropdown_ingredients-input .ingredientSearch');
        let ingredientsList = document.querySelector('.dropdown_ingredients-list');
        let dropIH2i = document.querySelector('.dropdown_ingredients h2 i');
        /**Ingredients End */
        /**Ustensils */
        let dropUH2 = document.querySelector('.dropdown_ustensils h2');
        let dropUH2span = document.querySelector('.dropdown_ustensils h2 span');
        let uClicked = document.querySelector('.dropdown_ustensils-input i');
        let dropUstensils = document.querySelector('.dropdown_ustensils-input .ustensilSearch');
        let ustensilsList = document.querySelector('.dropdown_ustensils-list');
        let dropUH2i = document.querySelector('.dropdown_ustensils h2 i');
        /**Ustensils end */
        /**Appliance */
        let dropAH2 = document.querySelector('.dropdown_appliance h2');
        let dropAH2span = document.querySelector('.dropdown_appliance h2 span');
        let aClicked = document.querySelector('.dropdown_appliance-input i');
        let dropAppliance = document.querySelector('.dropdown_appliance-input .applianceSearch');
        let applianceList = document.querySelector('.dropdown_appliance-list');
        let dropAH2i = document.querySelector('.dropdown_appliance h2 i');
        /**Appliance End */
        let tagI = underIngredients.childNodes[1].innerHTML;
        let tagA = underAppliance.childNodes[1].innerHTML;
        let tagU = underUstensils.childNodes[1].innerHTML;

        let lessI = [];
        let lessA = [];
        let lessU = [];
        let allLess = [];

        let displayR = new DisplayRecipes();
        let displayM = new DisplayMenu();

        data.forEach(elm => {
            elm.ingredients.filter(function (ing) {
                if (ing.ingredient.toLowerCase().includes(tagI.toLowerCase())) {
                    lessI.push(elm);
                }
            });
            elm.ustensils.filter(function (ust) {
                if (ust.toLowerCase().includes(tagU.toLowerCase())) {
                    lessU.push(elm);
                }
            });
            if (elm.appliance.toLowerCase().includes(tagA.toLowerCase())) {
                lessA.push(elm);
            }
            allLess = [...new Set([...lessI, ...lessA, ...lessU])];
            allLess.sort();
        });
        tagIcon.addEventListener('click', function (event) {
            event.preventDefault();
            console.log('Hello');
            underIngredients.style.display = 'none';
            tagIcon.style.displayTags = 'none';
            /**Ingredients */
            dropIngredients.style.display = 'none';
            ingredientsList.style.display = 'none';
            dropIH2.style.display = 'none';
            if (iClicked) {
                iClicked.className = 'fa fa-angle-up';
                dropIH2.style.display = 'flex';
                dropIH2.appendChild(iClicked);
            } else if (!iClicked) {
                dropIH2.style.display = 'flex';
                dropIH2i.className = 'fa fa-angle-up';
            }
            dropIH2span.style.display = 'block';
            /**Ingredients end */
            //location.reload();
            displayR.render(allLess);
            displayM.render(allLess);
        });
        tagAcon.addEventListener('click', function (event) {
            event.preventDefault();
            underAppliance.style.display = 'none';
            tagAcon.style.displayTags = 'none';
            /**Appliance */
            dropAppliance.style.display = 'none';
            applianceList.style.display = 'none';
            if (aClicked) {
                aClicked.className = 'fa fa-angle-up';
                dropAH2.appendChild(aClicked);
            } else if (!aClicked) {
                dropAH2i.className = 'fa fa-angle-up';
            }
            dropAH2span.style.display = 'block';
            /**Appliance end */
            //location.reload();
            displayR.render(allLess);
            displayM.render(allLess);
        });
        tagUcon.addEventListener('click', function (event) {
            event.preventDefault();
            underUstensils.style.display = 'none';
            tagUcon.style.displayTags = 'none';
            /**Ustensils */
            dropUstensils.style.display = 'none';
            ustensilsList.style.display = 'none';
            if (uClicked) {
                uClicked.className = 'fa fa-angle-up';
                dropUH2.appendChild(uClicked);
            } else if (!uClicked) {
                dropUH2i.className = 'fa fa-angle-up';
            }
            dropUH2span.style.display = 'block';
            /**Ustensils end */
            //location.reload();
            displayR.render(allLess);
            displayM.render(allLess);
        });
        /*   allLess = [...new Set([...lessI, ...lessA, ...lessU])];
           new DisplayRecipes().render(allLess);
           new DisplayMenu().render(allLess);*/
    }
}
let stockTags = function (data, tab) {
    let underIngredients = document.querySelector('.underSearch_ingredientsTags');
    let underAppliance = document.querySelector('.underSearch_applianceTags');
    let underUstensils = document.querySelector('.underSearch_ustensilsTags');
    let tagI = underIngredients.childNodes[1].innerHTML;
    let tagA = underAppliance.childNodes[1].innerHTML;
    let tagU = underUstensils.childNodes[1].innerHTML;
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
    new DisplayRecipes().render(allTab);
    new DisplayMenu().render(allTab);
};
export default DisplayTags;