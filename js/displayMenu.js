import displayTags from "./displayTags.js";

class displayMenu {
    render(data) {
        let dropIList = document.querySelector('.dropdown_ingredients-list');
        let boxIMenu = [];
        let uniqboxIMenu = [];
        let ingredientsTab = [];

        let baseI = [];
        let baseU = [];
        let baseA = [];
        /**Appliance */
        let dropAList = document.querySelector('.dropdown_appliance-list');
        let globalSearchA = document.querySelector('.globalSearch');
        let boxAMenu = [];
        let uniqboxAMenu = [];
        let applianceTab = [];
        /**Appliance end */
        /**Ustensils */
        let dropUList = document.querySelector('.dropdown_ustensils-list');
        let boxUMenu = [];
        let uniqboxUMenu = [];
        let ustensilsTab = [];
        /**Ustensils end */
        for (let i = 0; i < data.length; i++) {
            applianceTab.push(data[i].appliance.trim());
            baseA.push(data[i]);
            for (let j = 0; j < data[i].ingredients.length; j++) {
                ingredientsTab.push(data[i].ingredients[j].ingredient.trim());
                baseI.push(data[i]);
            }
            for (let j = 0; j < data[i].ustensils.length; j++) {
                ustensilsTab.push(data[i].ustensils[j].trim());
                baseU.push(data[i]);
            }
        }
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
       /**Appliance end */
        dropUList.innerHTML = boxUMenu.join('');
        uniqboxUMenu = [...new Set(ustensilsTab)];
        uniqboxUMenu.sort();
        uniqboxUMenu.forEach(elm => {
            boxUMenu.push(`<a href="javascript:void(0)">${elm}</a>`);
        });
        dropUList.innerHTML = boxUMenu.join('');
        let baseTab = [...new Set([...baseU, ...baseI, ...baseA])];
        new displayTags().render(baseTab);
    }

}
export default displayMenu;