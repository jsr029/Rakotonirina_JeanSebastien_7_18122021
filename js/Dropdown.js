// Dropdown.js (version simplifiée et sans récursion infinie)

class Dropdown {
  constructor() {
    this.dropdowns = [
      { 
        container: '.dropdown_ingredients',
        input: '.ingredientSearch',
        list: '.dropdown_ingredients-list',
        h2: '.dropdown_ingredients h2',
        icon: '.dropdown_ingredients h2 i',
        title: 'Ingrédients'
      },
      { 
        container: '.dropdown_appliance',
        input: '.applianceSearch',
        list: '.dropdown_appliance-list',
        h2: '.dropdown_appliance h2',
        icon: '.dropdown_appliance h2 i',
        title: 'Appareil'
      },
      { 
        container: '.dropdown_ustensils',
        input: '.ustensilSearch',
        list: '.dropdown_ustensils-list',
        h2: '.dropdown_ustensils h2',
        icon: '.dropdown_ustensils h2 i',
        title: 'Ustensiles'
      }
    ];
  }

  render() {
    document.querySelector('.dropdown').addEventListener('click', (e) => {
      const icon = e.target.closest('h2 i');
      if (!icon) return;

      const container = icon.closest('.dropdown_ingredients, .dropdown_appliance, .dropdown_ustensils');
      if (!container) return;

      this.toggleDropdown(container);
    });
  }

  toggleDropdown(clickedContainer) {
    const isOpen = clickedContainer.querySelector('i').classList.contains('fa-angle-up');

    // Fermer TOUS les dropdowns d'abord
    this.closeAllDropdowns();

    // Puis ouvrir celui qu'on vient de cliquer (si il n'était pas déjà ouvert)
    if (!isOpen) {
      const input = clickedContainer.querySelector('input');
      const list = clickedContainer.querySelector('[class$="-list"]');
      const h2 = clickedContainer.querySelector('h2');
      const span = h2.querySelector('span');
      const icon = h2.querySelector('i');

      input.style.display = 'block';
      list.style.display = 'grid';
      h2.style.display = 'flex'; // ou flex selon ton design

      icon.classList.remove('fa-angle-down');
      icon.classList.add('fa-angle-up');
    }
  }

  closeAllDropdowns() {
    this.dropdowns.forEach(d => {
      const container = document.querySelector(d.container);
      const input = container.querySelector('input');
      const list = container.querySelector('[class$="-list"]');
      const h2 = container.querySelector('h2');
      const span = h2.querySelector('span');
      const icon = h2.querySelector('i');

      //input.style.display = 'none';
      list.style.display = 'none';
      h2.style.display = 'flex';
      span.style.display = 'none';
      icon.classList.remove('fa-angle-up');
      icon.classList.add('fa-angle-down');
    });
  }
}

export default Dropdown;
