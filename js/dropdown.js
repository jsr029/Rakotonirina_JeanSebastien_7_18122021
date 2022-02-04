
class dropdown {
    render() {
        let iconeIngredients = document.querySelector('.dropdown_ingredients .fa-angle-down');
        iconeIngredients.addEventListener('click', openIDrop);
        let iconeAppliance = document.querySelector('.dropdown_appliance .fa-angle-down');
        iconeAppliance.addEventListener('click', openADrop);
        let iconeUstensils = document.querySelector('.dropdown_ustensils .fa-angle-down');
        iconeUstensils.addEventListener('click', openUDrop);
    }
}
let openIDrop = function (iClicked) {
    let iClickedClassName = iClicked.target.className;
    let iClickedClassNameSplit = iClickedClassName.split(' ')[1];
    let dropIngredients = document.querySelector('.dropdown_ingredients-input .ingredientSearch');
    let dropIngredientsBloc = document.querySelector('.dropdown_ingredients-input');
    let dropIH2span = document.querySelector('.dropdown_ingredients h2 span');
    let dropIH2 = document.querySelector('.dropdown_ingredients h2');
    let ingredientsList = document.querySelector('.dropdown_ingredients-list');
    let ustensilsList = document.querySelector('.dropdown_ustensils-list');
    /**Appliance */
    let dropAH2 = document.querySelector('.dropdown_appliance h2');
    let dropAH2span = document.querySelector('.dropdown_appliance h2 span');
    let aClicked = document.querySelector('.dropdown_appliance-input i');
    let dropAppliance = document.querySelector('.dropdown_appliance-input .applianceSearch');
    let applianceList = document.querySelector('.dropdown_appliance-list');
    let dropAH2i = document.querySelector('.dropdown_appliance h2 i');
    /**Appliance End */
    /**Ustensils */
    let dropUstensils = document.querySelector('.dropdown_ustensils-input .ustensilSearch');
    let uClicked = document.querySelector('.dropdown_ustensils-input i');
    let dropUH2i = document.querySelector('.dropdown_ustensils h2 i');
    let dropUH2 = document.querySelector('.dropdown_ustensils h2');
    let dropUH2span = document.querySelector('.dropdown_ustensils h2 span');
    /**Ustensils end */
    if (iClickedClassNameSplit == 'fa-angle-down') {
        dropIngredients.style.display = 'block';
        dropIngredients.style.minWidth = '270px';
        ingredientsList.style.display = 'grid';
        iClicked.target.classList.remove('fa-angle-down');
        iClicked.target.classList.add('fa-angle-up');
        dropIH2span.style.display = 'none';
        dropIH2.style.display = 'none';
        dropIngredientsBloc.appendChild(iClicked.target);
        /**Appliance */
        dropAppliance.style.display = 'none';
        applianceList.style.display = 'none';
        if (aClicked) {
            aClicked.className = 'fa fa-angle-down';
            dropAH2.appendChild(aClicked);
        } else if (!aClicked) {
            dropAH2i.className = 'fa fa-angle-down';
        }
        dropAH2span.style.display = 'block';
        /**Appliance end */
        /**Ustensils */
        dropUstensils.style.display = 'none';
        ustensilsList.style.display = 'none';
        if (uClicked) {
            uClicked.className = 'fa fa-angle-down';
            dropUH2.appendChild(uClicked);
        } else if (!uClicked) {
            dropUH2i.className = 'fa fa-angle-down';
        }
        dropUH2span.style.display = 'block';
        dropAH2.style.display = 'flex';
        dropAH2span.style.display = 'block';
        /**Ustensils end */
        dropUH2.style.display = 'flex';
        dropUH2span.style.display = 'block';
    } else if (iClickedClassNameSplit == 'fa-angle-up') {
        dropIngredients.style.display = 'none';
        dropIngredients.style.minWidth = '200px';
        ingredientsList.style.display = 'none';
        iClicked.target.classList.remove('fa-angle-up');
        iClicked.target.classList.add('fa-angle-down');
        dropUH2.style.display = 'flex';
        dropUH2span.style.display = 'block';
        dropAH2.style.display = 'flex';
        dropAH2span.style.display = 'block';
        dropIH2span.style.display = 'block';
        dropIH2.style.display = 'flex';
        dropIH2.appendChild(iClicked.target);
    }
};
let openADrop = function (aClicked) {
    let aClickedClassName = aClicked.target.className;
    let aClickedClassNameSplit = aClickedClassName.split(' ')[1];
    let dropAppliance = document.querySelector('.container .dropdown_appliance-input .applianceSearch');
    let dropApplianceBloc = document.querySelector('.dropdown_appliance-input');
    let dropAH2span = document.querySelector('.dropdown_appliance h2 span');
    let dropAH2 = document.querySelector('.dropdown_appliance h2');
    let applianceList = document.querySelector('.dropdown_appliance-list');
    /**Ingredients */
    let dropIH2 = document.querySelector('.dropdown_ingredients h2');
    let dropIH2span = document.querySelector('.dropdown_ingredients h2 span');
    let iClicked = document.querySelector('.dropdown_ingredients-input i');
    let dropIngredients = document.querySelector('.dropdown_ingredients-input .ingredientSearch');
    let ingredientsList = document.querySelector('.dropdown_ingredients-list');
    let dropIH2i = document.querySelector('.dropdown_ingredients h2 i');
    /**Ingredients end */
    /**Ustensils */
    let dropUH2 = document.querySelector('.dropdown_ustensils h2');
    let dropUH2span = document.querySelector('.dropdown_ustensils h2 span');
    let uClicked = document.querySelector('.dropdown_ustensils-input i');
    let dropUstensils = document.querySelector('.dropdown_ustensils-input .ustensilSearch');
    let ustensilsList = document.querySelector('.dropdown_ustensils-list');
    let dropUH2i = document.querySelector('.dropdown_ustensils h2 i');
    /**Ustensils end */
    if (aClickedClassNameSplit == 'fa-angle-down') {
        dropAppliance.style.display = 'block';
        applianceList.style.display = 'grid';
        aClicked.target.classList.remove('fa-angle-down');
        aClicked.target.classList.add('fa-angle-up');
        dropAH2span.style.display = 'none';
        dropAH2.style.display = 'none';
        dropApplianceBloc.appendChild(aClicked.target);
        /**Ingredients */
        dropIngredients.style.display = 'none';
        ingredientsList.style.display = 'none';
        dropIH2.style.display = 'none';
        if (iClicked) {
            iClicked.className = 'fa fa-angle-down';
            dropIH2.style.display = 'flex';
            dropIH2.appendChild(iClicked);
        } else if (!iClicked) {
            dropIH2.style.display = 'flex';
            dropIH2i.className = 'fa fa-angle-down';
        }
        dropIH2span.style.display = 'block';
        /**Ingredients end */
        /**Ustensils */
        dropUstensils.style.display = 'none';
        ustensilsList.style.display = 'none';
        if (uClicked) {
            uClicked.className = 'fa fa-angle-down';
            dropUH2.appendChild(uClicked);
        } else if (!uClicked) {
            dropUH2i.className = 'fa fa-angle-down';
        }
        dropUH2span.style.display = 'block';
        dropUH2.style.display = 'flex';
        dropUH2span.style.display = 'block';
        /**Ustensils end */
    } else if (aClickedClassNameSplit == 'fa-angle-up') {
        dropAppliance.style.display = 'none';
        applianceList.style.display = 'none';
        aClicked.target.classList.remove('fa-angle-up');
        aClicked.target.classList.add('fa-angle-down');
        dropUH2.style.display = 'flex';
        dropUH2span.style.display = 'block';
       dropAH2.style.display = 'flex';
        dropAH2span.style.display = 'block';
        dropAH2.appendChild(aClicked.target);
    }
};
let openUDrop = function (uClicked) {
    let uClickedClassName = uClicked.target.className;
    let uClickedClassNameSplit = uClickedClassName.split(' ')[1];
    let dropUstensils = document.querySelector('.dropdown_ustensils-input .ustensilSearch');
    let dropUstensilsBloc = document.querySelector('.dropdown_ustensils-input');
    let dropUH2span = document.querySelector('.dropdown_ustensils h2 span');
    let dropUH2 = document.querySelector('.dropdown_ustensils h2');
    let ustensilsList = document.querySelector('.dropdown_ustensils-list');
    /**Ingredients */
    let dropIH2 = document.querySelector('.dropdown_ingredients h2');
    let dropIH2span = document.querySelector('.dropdown_ingredients h2 span');
    let iClicked = document.querySelector('.dropdown_ingredients-input i');
    let dropIngredients = document.querySelector('.dropdown_ingredients-input .ingredientSearch');
    let ingredientsList = document.querySelector('.dropdown_ingredients-list');
    let dropIH2i = document.querySelector('.dropdown_ingredients h2 i');
    /**Ingredients end */
    /**Appliance */
    let dropAH2 = document.querySelector('.dropdown_appliance h2');
    let dropAH2span = document.querySelector('.dropdown_appliance h2 span');
    let aClicked = document.querySelector('.dropdown_appliance-input i');
    let dropAppliance = document.querySelector('.dropdown_appliance-input .applianceSearch');
    let applianceList = document.querySelector('.dropdown_appliance-list');
    let dropAH2i = document.querySelector('.dropdown_appliance h2 i');
    /**Appliance End */
    if (uClickedClassNameSplit == 'fa-angle-down') {
        dropUstensils.style.display = 'block';
        ustensilsList.style.display = 'grid';
        uClicked.target.classList.remove('fa-angle-down');
        uClicked.target.classList.add('fa-angle-up');
        dropUH2span.style.display = 'none';
        dropUstensilsBloc.appendChild(uClicked.target);
        /**Ingredients */
        dropIngredients.style.display = 'none';
        ingredientsList.style.display = 'none';
        if (iClicked) {
            iClicked.className = 'fa fa-angle-down';
            dropIH2.style.display = 'flex';
            dropIH2.appendChild(iClicked);
        } else if (!iClicked) {
            dropIH2.style.display = 'flex';
            dropIH2i.className = 'fa fa-angle-down';
        }
        dropIH2span.style.display = 'block';
        /**Ingredients end */
        /**Appliance */
        dropAppliance.style.display = 'none';
        applianceList.style.display = 'none';
        if (aClicked) {
            aClicked.className = 'fa fa-angle-down';
            dropAH2.appendChild(aClicked);
        } else if (!aClicked) {
            dropAH2i.className = 'fa fa-angle-down';
        }
        dropAH2span.style.display = 'block';
        dropAH2.style.display = 'flex';
        dropAH2span.style.display = 'block';
        dropUH2.style.display = 'none';
        dropUH2span.style.display = 'none';
        /**Appliance end */
    } else if (uClickedClassNameSplit == 'fa-angle-up') {
        dropUstensils.style.display = 'none';
        uClicked.target.classList.remove('fa-angle-up');
        uClicked.target.classList.add('fa-angle-down');
        dropUH2.style.display = 'flex';
        dropUH2span.style.display = 'block';
        dropAH2.style.display = 'flex';
        dropAH2span.style.display = 'block';
        dropUH2span.style.display = 'block';
        dropUH2.appendChild(uClicked.target);
        ustensilsList.style.display = 'none';
    }
};

export default dropdown;