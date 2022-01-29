class dropdown {
    render() {
        let iconeIngredients = document.querySelector('.dropdown_ingredients .fa-angle-up');
        iconeIngredients.addEventListener('click', openIDrop);
        let iconeAppliance = document.querySelector('.dropdown_appliance .fa-angle-up');
        iconeAppliance.addEventListener('click', openADrop);
        let iconeUstensils = document.querySelector('.dropdown_ustensils .fa-angle-up');
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
    /**Appliance */
    let dropAH2 = document.querySelector('.dropdown_appliance h2');
    let dropAH2span = document.querySelector('.dropdown_appliance h2 span');
    let aClicked = document.querySelector('.dropdown_appliance-input i');
    let dropAppliance = document.querySelector('.dropdown_appliance-input .applianceSearch');
    let applianceList = document.querySelector('.dropdown_appliance-list');
    let dropAH2i = document.querySelector('.dropdown_appliance h2 i');
    /**Appliance End */
    if (iClickedClassNameSplit == 'fa-angle-up') {
        dropIngredients.style.display = 'block';
        dropIngredients.style.minWidth = '270px';
        ingredientsList.style.display = 'grid';
        iClicked.target.classList.remove('fa-angle-up');
        iClicked.target.classList.add('fa-angle-down');
        dropIH2span.style.display = 'none';
        dropIngredientsBloc.appendChild(iClicked.target);
        
        dropAppliance.style.display = 'none';
        applianceList.style.display = 'none';
        if(aClicked){
            aClicked.className = 'fa fa-angle-up';
            dropAH2.appendChild(aClicked);
        }
        else if(!aClicked){
            dropAH2i.className = 'fa fa-angle-up';
        }
        dropAH2span.style.display = 'block';
    } else if (iClickedClassNameSplit == 'fa-angle-down') {
        dropIngredients.style.display = 'none';
        dropIngredients.style.minWidth = '200px';
        ingredientsList.style.display = 'none';
        iClicked.target.classList.remove('fa-angle-down');
        iClicked.target.classList.add('fa-angle-up');
        dropIH2span.style.display = 'block';
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
    if (aClickedClassNameSplit == 'fa-angle-up') {
        dropAppliance.style.display = 'block';
        applianceList.style.display = 'grid';
        aClicked.target.classList.remove('fa-angle-up');
        aClicked.target.classList.add('fa-angle-down');
        dropAH2span.style.display = 'none';
        dropApplianceBloc.appendChild(aClicked.target);
        /**Ingredients */
        dropIngredients.style.display = 'none';
        ingredientsList.style.display = 'none';
        if(iClicked){
            iClicked.className = 'fa fa-angle-up';
            dropIH2.appendChild(iClicked);
        }
        else if(!iClicked){
            dropIH2i.className = 'fa fa-angle-up';
        }
        dropIH2span.style.display = 'block';
        /**Ingredients end */
    } else if (aClickedClassNameSplit == 'fa-angle-down') {
        dropAppliance.style.display = 'none';
        applianceList.style.display = 'none';
        aClicked.target.classList.remove('fa-angle-down');
        aClicked.target.classList.add('fa-angle-up');
        dropAH2span.style.display = 'block';
        dropAH2.appendChild(aClicked.target);
    }
};
let openUDrop = function (uClicked) {
    if (uClickedClassNameSplit == 'fa-angle-up') {
        dropUstensils.style.display = 'block';
        uClicked.target.classList.remove('fa-angle-up');
        uClicked.target.classList.add('fa-angle-down');
        dropUH2span.style.display = 'none';
        dropUstensilsBloc.appendChild(uClicked.target);
    } else if (uClickedClassNameSplit == 'fa-angle-down') {
        dropUstensils.style.display = 'none';
        uClicked.target.classList.remove('fa-angle-down');
        uClicked.target.classList.add('fa-angle-up');
        dropUH2span.style.display = 'block';
        dropUH2.appendChild(uClicked.target);
    }
};

export default dropdown;