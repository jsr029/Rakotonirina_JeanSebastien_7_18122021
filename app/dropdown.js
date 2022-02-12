let iconeIngredients = document.querySelector('.dropdown_ingredients .fa-angle-down');
iconeIngredients.addEventListener('click', openIDrop);
let iconeAppliance = document.querySelector('.dropdown_appliance .fa-angle-down');
iconeAppliance.addEventListener('click', openADrop);
let iconeUstensils = document.querySelector('.dropdown_ustensils .fa-angle-down');
iconeUstensils.addEventListener('click', openUDrop);

function openIDrop(iEvent) {
    let iEventClassName = iEvent.target.className;
    let iEventClassNameSplit = iEventClassName.split(' ')[1];
    let dropIngredients = document.querySelector('.dropdown_ingredients-input .ingredientSearch');
    let dropIngredientsBloc = document.querySelector('.dropdown_ingredients-input');
    let dropIH2span = document.querySelector('.dropdown_ingredients h2 span');
    let dropIH2 = document.querySelector('.dropdown_ingredients h2');
    let ingredientsList = document.querySelector('.dropdown_ingredients-list');
    let ustensilsList = document.querySelector('.dropdown_ustensils-list');
    let globalInput = document.querySelector('.globalSearch');
    /**Appliance */
    let dropAH2 = document.querySelector('.dropdown_appliance h2');
    let dropAH2span = document.querySelector('.dropdown_appliance h2 span');
    let aEvent = document.querySelector('.dropdown_appliance-input i');
    let dropAppliance = document.querySelector('.dropdown_appliance-input .applianceSearch');
    let applianceList = document.querySelector('.dropdown_appliance-list');
    let dropAH2i = document.querySelector('.dropdown_appliance h2 i');
    /**Appliance End */
    /**Ustensils */
    let dropUstensils = document.querySelector('.dropdown_ustensils-input .ustensilSearch');
    let uEvent = document.querySelector('.dropdown_ustensils-input i');
    let dropUH2i = document.querySelector('.dropdown_ustensils h2 i');
    let dropUH2 = document.querySelector('.dropdown_ustensils h2');
    let dropUH2span = document.querySelector('.dropdown_ustensils h2 span');
    /**Ustensils end */
    if (iEventClassNameSplit == 'fa-angle-down') {
        dropIngredients.style.display = 'block';
        dropIngredients.style.minWidth = '270px';
        ingredientsList.style.display = 'grid';
        iEvent.target.classList.remove('fa-angle-down');
        iEvent.target.classList.add('fa-angle-up');
        dropIH2span.style.display = 'none';
        dropIH2.style.display = 'none';
        dropIngredientsBloc.appendChild(iEvent.target);
        /**Appliance */
        dropAppliance.style.display = 'none';
        applianceList.style.display = 'none';
        if (aEvent) {
            aEvent.className = 'fa fa-angle-down';
            dropAH2.appendChild(aEvent);
        } else if (!aEvent) {
            dropAH2i.className = 'fa fa-angle-down';
        }
        dropAH2span.style.display = 'block';
        /**Appliance end */
        /**Ustensils */
        dropUstensils.style.display = 'none';
        ustensilsList.style.display = 'none';
        if (uEvent) {
            uEvent.className = 'fa fa-angle-down';
            dropUH2.appendChild(uEvent);
        } else if (!uEvent) {
            dropUH2i.className = 'fa fa-angle-down';
        }
        dropUH2span.style.display = 'block';
        dropAH2.style.display = 'flex';
        dropAH2span.style.display = 'block';
        /**Ustensils end */
        dropUH2.style.display = 'flex';
        dropUH2span.style.display = 'block';
    } else if (iEventClassNameSplit == 'fa-angle-up') {
        dropIngredients.style.display = 'none';
        dropIngredients.style.minWidth = '200px';
        ingredientsList.style.display = 'none';
        iEvent.target.classList.remove('fa-angle-up');
        iEvent.target.classList.add('fa-angle-down');
        dropUH2.style.display = 'flex';
        dropUH2span.style.display = 'block';
        dropAH2.style.display = 'flex';
        dropAH2span.style.display = 'block';
        dropIH2span.style.display = 'block';
        dropIH2.style.display = 'flex';
        dropIH2.appendChild(iEvent.target);
    }
}
function openADrop (aEvent) {
    let aEventClassName = aEvent.target.className;
    let aEventClassNameSplit = aEventClassName.split(' ')[1];
    let dropAppliance = document.querySelector('.container .dropdown_appliance-input .applianceSearch');
    let dropApplianceBloc = document.querySelector('.dropdown_appliance-input');
    let dropAH2span = document.querySelector('.dropdown_appliance h2 span');
    let dropAH2 = document.querySelector('.dropdown_appliance h2');
    let applianceList = document.querySelector('.dropdown_appliance-list');
    let globalInput = document.querySelector('.globalSearch');
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
    let uEvent = document.querySelector('.dropdown_ustensils-input i');
    let dropUstensils = document.querySelector('.dropdown_ustensils-input .ustensilSearch');
    let ustensilsList = document.querySelector('.dropdown_ustensils-list');
    let dropUH2i = document.querySelector('.dropdown_ustensils h2 i');
    /**Ustensils end */
    if (aEventClassNameSplit == 'fa-angle-down') {
        dropAppliance.style.display = 'block';
        applianceList.style.display = 'grid';
        aEvent.target.classList.remove('fa-angle-down');
        aEvent.target.classList.add('fa-angle-up');
        dropAH2span.style.display = 'none';
        dropAH2.style.display = 'none';
        dropApplianceBloc.appendChild(aEvent.target);
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
        if (uEvent) {
            uEvent.className = 'fa fa-angle-down';
            dropUH2.appendChild(uEvent);
        } else if (!uEvent) {
            dropUH2i.className = 'fa fa-angle-down';
        }
        dropUH2span.style.display = 'block';
        dropUH2.style.display = 'flex';
        dropUH2span.style.display = 'block';
        /**Ustensils end */
    } else if (aEventClassNameSplit == 'fa-angle-up') {
        dropAppliance.style.display = 'none';
        applianceList.style.display = 'none';
        aEvent.target.classList.remove('fa-angle-up');
        aEvent.target.classList.add('fa-angle-down');
        dropUH2.style.display = 'flex';
        dropUH2span.style.display = 'block';
        dropAH2.style.display = 'flex';
        dropAH2span.style.display = 'block';
        dropAH2.appendChild(aEvent.target);
    }
}
function openUDrop(uEvent) {
    let uEventClassName = uEvent.target.className;
    let uEventClassNameSplit = uEventClassName.split(' ')[1];
    let dropUstensils = document.querySelector('.dropdown_ustensils-input .ustensilSearch');
    let dropUstensilsBloc = document.querySelector('.dropdown_ustensils-input');
    let dropUH2span = document.querySelector('.dropdown_ustensils h2 span');
    let dropUH2 = document.querySelector('.dropdown_ustensils h2');
    let ustensilsList = document.querySelector('.dropdown_ustensils-list');
    let globalInput = document.querySelector('.globalSearch');
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
    let aEvent = document.querySelector('.dropdown_appliance-input i');
    let dropAppliance = document.querySelector('.dropdown_appliance-input .applianceSearch');
    let applianceList = document.querySelector('.dropdown_appliance-list');
    let dropAH2i = document.querySelector('.dropdown_appliance h2 i');
    /**Appliance End */
    if (uEventClassNameSplit == 'fa-angle-down') {
        dropUstensils.style.display = 'block';
        ustensilsList.style.display = 'grid';
        uEvent.target.classList.remove('fa-angle-down');
        uEvent.target.classList.add('fa-angle-up');
        dropUH2span.style.display = 'none';
        dropUstensilsBloc.appendChild(uEvent.target);
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
        if (aEvent) {
            aEvent.className = 'fa fa-angle-down';
            dropAH2.appendChild(aEvent);
        } else if (!aEvent) {
            dropAH2i.className = 'fa fa-angle-down';
        }
        dropAH2span.style.display = 'block';
        dropAH2.style.display = 'flex';
        dropAH2span.style.display = 'block';
        dropUH2.style.display = 'none';
        dropUH2span.style.display = 'none';
        /**Appliance end */
    } else if (uEventClassNameSplit == 'fa-angle-up') {
        dropUstensils.style.display = 'none';
        uEvent.target.classList.remove('fa-angle-up');
        uEvent.target.classList.add('fa-angle-down');
        dropUH2.style.display = 'flex';
        dropUH2span.style.display = 'block';
        dropAH2.style.display = 'flex';
        dropAH2span.style.display = 'block';
        dropUH2span.style.display = 'block';
        dropUH2.appendChild(uEvent.target);
        ustensilsList.style.display = 'none';
    }
}