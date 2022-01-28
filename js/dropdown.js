class dropdown {
    render() {
        const iconeIngredients = document.querySelector('.dropdown_ingredients .fa-angle-up');
        iconeIngredients.addEventListener('click', openIDrop);
        const iconeAppliance = document.querySelector('.dropdown_appliance .fa-angle-up');
        iconeAppliance.addEventListener('click', openADrop);
        const iconeUstensils = document.querySelector('.dropdown_ustensils .fa-angle-up');
        iconeUstensils.addEventListener('click', openUDrop);
    }
}
let openIDrop = function (iClicked) {
    let iClickedClassName = iClicked.target.className;
    let iClickedClassNameSplit = iClickedClassName.split(' ')[1];
    const dropIngredients = document.querySelector('.dropdown_ingredients-input .ingredientSearch');
    const dropIngredientsBloc = document.querySelector('.dropdown_ingredients-input');
    const dropIH2span = document.querySelector('.dropdown_ingredients h2 span');
    const dropIH2 = document.querySelector('.dropdown_ingredients h2');
    if (iClickedClassNameSplit == 'fa-angle-up') {
        dropIngredients.style.display = 'block';
        dropIngredients.style.minWidth = '270px';
        iClicked.target.classList.remove('fa-angle-up');
        iClicked.target.classList.add('fa-angle-down');
        dropIH2span.style.display = 'none';
        dropIngredientsBloc.appendChild(iClicked.target);
    }
    else if(iClickedClassNameSplit == 'fa-angle-down'){
        dropIngredients.style.display = 'none';
        dropIngredients.style.minWidth = '200px';
        iClicked.target.classList.remove('fa-angle-down');
        iClicked.target.classList.add('fa-angle-up');
        dropIH2span.style.display = 'block';
        dropIH2.appendChild(iClicked.target);
    }
};
let openADrop = function (aClicked) {
    let aClickedClassName = aClicked.target.className;
    let aClickedClassNameSplit = aClickedClassName.split(' ')[1];
    const dropAppliance = document.querySelector('.dropdown_appliance-input .applianceSearch');
    const dropApplianceBloc = document.querySelector('.dropdown_appliance-input');
    const dropAH2span = document.querySelector('.dropdown_appliance h2 span');
    const dropAH2 = document.querySelector('.dropdown_appliance h2');
    if (aClickedClassNameSplit == 'fa-angle-up') {
        dropAppliance.style.display = 'block';
        aClicked.target.classList.remove('fa-angle-up');
        aClicked.target.classList.add('fa-angle-down');
        dropAH2span.style.display = 'none';
        dropApplianceBloc.appendChild(aClicked.target);
    }
    else if(aClickedClassNameSplit == 'fa-angle-down'){
        dropAppliance.style.display = 'none';
        aClicked.target.classList.remove('fa-angle-down');
        aClicked.target.classList.add('fa-angle-up');
        dropAH2span.style.display = 'block';
        dropAH2.appendChild(aClicked.target);
    }
};
let openUDrop = function (uClicked) {
    let uClickedClassName = uClicked.target.className;
    let uClickedClassNameSplit = uClickedClassName.split(' ')[1];
    const dropUstensils = document.querySelector('.dropdown_ustensils-input .ustensilSearch');
    const dropUstensilsBloc = document.querySelector('.dropdown_ustensils-input');
    const dropUH2span = document.querySelector('.dropdown_ustensils h2 span');
    const dropUH2 = document.querySelector('.dropdown_ustensils h2');
    if (uClickedClassNameSplit == 'fa-angle-up') {
        dropUstensils.style.display = 'block';
        uClicked.target.classList.remove('fa-angle-up');
        uClicked.target.classList.add('fa-angle-down');
        dropUH2span.style.display = 'none';
        dropUstensilsBloc.appendChild(uClicked.target);
    }
    else if(uClickedClassNameSplit == 'fa-angle-down'){
        dropUstensils.style.display = 'none';
        uClicked.target.classList.remove('fa-angle-down');
        uClicked.target.classList.add('fa-angle-up');
        dropUH2span.style.display = 'block';
        dropUH2.appendChild(uClicked.target);
    }
};

export default dropdown;