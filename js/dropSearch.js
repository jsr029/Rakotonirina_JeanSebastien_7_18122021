function dropSearch() {
  let inputIngredients = document.querySelector('.dropdown_ingredients-input');
  inputIngredients.addEventListener('input', function (evt) {
    ingredientsSearch();
  });
  let inputAppliance = document.querySelector('.dropdown_appliance-input');
  inputAppliance.addEventListener('input', function (evt) {
    applianceSearch();
  });
  let inputUstensils = document.querySelector('.dropdown_ustensils-input');
  inputUstensils.addEventListener('input', function (evt) {
    ustensilsSearch();
  });
}
const ingredientsSearch = () => {
  let ingredientsLista = document.querySelectorAll('.dropdown_ingredients-list a');
  let inputI = document.querySelector('.ingredientSearch');
  ingredientsLista.forEach(elm => {
    if (elm.innerHTML.toLowerCase().includes(inputI.value.toLowerCase())) {
      elm.style.display = '';
    } else {
      elm.style.display = 'none';
    }
  });
};
const applianceSearch = () => {
  let applianceLista = document.querySelectorAll('.dropdown_appliance-list a');
  let inputI = document.querySelector('.applianceSearch');
  applianceLista.forEach(elm => {
    if (elm.innerHTML.toLowerCase().includes(inputI.value.toLowerCase())) {
      elm.style.display = '';
    } else {
      elm.style.display = 'none';
    }
  });
};
const ustensilsSearch = () => {
  let ustensilsLista = document.querySelectorAll('.dropdown_ustensils-list a');
  let inputI = document.querySelector('.ustensilSearch');
  ustensilsLista.forEach(elm => {
    if (elm.innerHTML.toLowerCase().includes(inputI.value.toLowerCase())) {
      elm.style.display = '';
    } else {
      elm.style.display = 'none';
    }
  });
};

export default dropSearch;