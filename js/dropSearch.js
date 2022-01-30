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
  // Declare variables
  let input, filter,a, i, txtValue, a2;
  input = document.querySelector('.ingredientSearch');
  filter = input.value.toLowerCase();
  a = document.querySelectorAll('.dropdown_ingredients-list a');
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < a.length; i++) {
    a2 = a[i];
    txtValue = a2.innerText;
    if (txtValue.toLowerCase().trim().includes(filter.toLowerCase().trim())) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
};
const applianceSearch = () => {
  // Declare variables
  let inputA, filterA, applianceResult, i, txtValueA, applianceResult2;
  inputA = document.querySelector('.applianceSearch');
  filterA = inputA.value.toLowerCase();
  applianceResult = document.querySelectorAll('.dropdown_appliance-list a');
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < applianceResult.length; i++) {
    applianceResult2 = applianceResult[i];
    txtValueA = applianceResult2.innerText || applianceResult2.textContent;
    if (txtValueA.toLowerCase().includes(filterA.toLowerCase())) {
      applianceResult[i].style.display = "";
    } else {
      applianceResult[i].style.display = "none";
    }
  }
};
const ustensilsSearch = () => {
  // Declare variables
  let inputU, filterU, ustensilsResult, i, txtValueU, ustensilsResult2;
  inputU = document.querySelector('.ustensilSearch');
  filterU = inputU.value.toLowerCase();
  ustensilsResult = document.querySelectorAll('.dropdown_ustensils-list a');
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < ustensilsResult.length; i++) {
    ustensilsResult2 = ustensilsResult[i];
    txtValueU = ustensilsResult2.innerText || ustensilsResult2.textContent;
    if (txtValueU.toLowerCase().includes(filterU.toLowerCase())) {
      ustensilsResult[i].style.display = "";
    } else {
      ustensilsResult[i].style.display = "none";
    }
  }
};

export default dropSearch;
