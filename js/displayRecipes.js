class displayRecipes {
    render(data) {
        console.log(data);
        data.sort(function(a, b){
            if(b.name < a.name) { return -1; }
            if(b.name > a.name) { return 1; }
            return 0;
        });
                const recipesHtml = document.querySelector('.recipes');
        //const ingredientsHtml = document.querySelector('.recipes_bloc-titre');
        let boxRecipes;
        for(let element of data){
            boxRecipes = `
            <article class="recipes_bloc">
                <div class="recipes_bloc-img">
                </div>
                <div class="recipes_bloc-titre">
                    <h2>
                    <span>${element.name}</span>
                    <span><i class="far fa-clock"></i>
                    ${element.time}min</span>
                    </h2>
                </div>
                <div class="recipes_bloc-description">
                ${element.description}
                </div>
                <div class="recipes_bloc-ingredients">
                <ul>
            `;
            recipesHtml.insertAdjacentHTML("afterbegin", boxRecipes);
            const ingredientsHtml = document.querySelector('.recipes_bloc-ingredients ul');
            for(let elm of element.ingredients){
                let boxIngredients = `
                <li>    
                    ${elm.ingredient+" : "}  
                    ${elm.quantity?elm.quantity:''}
                    ${elm.unit?elm.unit:''}
                </li>
                `;
               ingredientsHtml.insertAdjacentHTML("beforeend", boxIngredients);
            }
                let boxEnd = `
                </ul>
                </div>            
                </article>
                `;
                recipesHtml.insertAdjacentHTML("beforeend", boxEnd);
            }
    }
}
export default displayRecipes;