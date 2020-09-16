(function () {
    'use strict';

    const foodList = $('#foodList');
    const url = "json/recipes.json";
    const h2 = $('#foodItemInfo h2');
    const img = $('#foodItemInfo img');
    const ingredients = $('#ingredients')

    fetch(url)
        .then(r => {
            if (!r.ok) {
                throw new Error(`${r.status} ${r.statusText}`);
            }
            return r.json();
        })
        .then(json => {
            foodList.append('Choose a recipe: ')
            json.forEach(element => {
                foodList.append(`<input type="radio" name="recipes" value="${element.URL}"> <label>${element.Name}</label>`);
            });

            $('input[name=recipes]').click((event) => {
                h2.empty();
                ingredients.empty();
                fetch(event.target.value)
                    .then(r => {
                        if (!r.ok) {
                            throw new Error(`${r.status} ${r.statusText}`);
                        }
                        return r.json();
                    })
                    .then(json => {
                        h2.append(json.Name);
                        img.attr('src', json.Image)
                        json.Ingredients.forEach((ingredient) => {
                            ingredients.append(ingredient + '<br>');
                        })
                    })
                    .catch(e => ingredients.append("We've got an error!", e));
            });
        })
        .catch(e => foodList.append("We've got an error!", e));




}());