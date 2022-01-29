class displayMenu {
    render(data) {
        let dropIList = document.querySelector('.dropdown_ingredients-list');
        let globalSearch = document.querySelector('.globalSearch');
        let boxIMenu = [];
        let uniqboxIMenu = [];
        let ingredientsTabSort = [];
        let ingredientsTab = [];
        let dropAList = document.querySelector('.dropdown_appliance-list');
        let globalSearchA = document.querySelector('.globalSearch');
        let boxAMenu = [];
        let uniqboxAMenu = [];
        let applianceTabSort = [];
        let applianceTab = [];
        for (let i = 0; i < data.length; i++) {
                applianceTab.push(data[i].appliance.toLowerCase());
            for (let j = 0; j < data[i].ingredients.length; j++)
                    ingredientsTab.push(data[i].ingredients[j].ingredient.toLowerCase());
                  }
        uniqboxIMenu = [...new Set(ingredientsTab)];
        uniqboxIMenu.sort();
        uniqboxIMenu.forEach(elm => {
            boxIMenu.push(`<a href="javascript:void(0)">${elm}</a>`);
        });
        dropIList.innerHTML = boxIMenu.join('');
        uniqboxIMenu = [...new Set(ingredientsTab)];
        uniqboxIMenu.sort();
        uniqboxIMenu.forEach(elm => {
            boxIMenu.push(`<a href="javascript:void(0)">${elm}</a>`);
        });
        dropIList.innerHTML = boxIMenu.join('');
        /** Appliance */
        uniqboxAMenu = [...new Set(applianceTab)];
        uniqboxAMenu.sort();
        uniqboxAMenu.forEach(elm => {
            boxAMenu.push(`<a href="javascript:void(0)">${elm}</a>`);
        });
        dropAList.innerHTML = boxAMenu.join('');
    }

}
export default displayMenu;