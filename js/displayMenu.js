class displayMenu {
    render(data) {
        let dropIList = document.querySelector('.dropdown_ingredients-list');
        let boxIMenu=[];
        let uniqboxIMenu = [];
        data.forEach(element => {
            element.ingredients.forEach(elm => {
                element.ingredients.sort(function (a, b) {
                    if (a.ingredient < b.ingredient) {
                        return -1;
                    }
                    if (a.ingredient > b.ingredient) {
                        return 1;
                    }
                    return 0;
                });
                boxIMenu.push(`<a href="#">${elm.ingredient}</a>`);
            });
            uniqboxIMenu = [...new Set(boxIMenu)];
            dropIList.innerHTML = uniqboxIMenu;
        });
    }
}
export default displayMenu;