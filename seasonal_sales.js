/**
 * Created by beelarr on 7/27/17.
 */
{
    var store_items = {};
    let items = [];
    let categories = [];


        store_items.load_items = function () {
            var loader = new XMLHttpRequest();
            loader.addEventListener('load', function () {
                items = JSON.parse(this.responseText);
                item_loader(items);
            });
            loader.open('GET', 'products.json');
            loader.send();
        },

        store_items.load_categories = function () {
            var cat_loader = new XMLHttpRequest();
            cat_loader.addEventListener('load', function () {
                categories = JSON.parse(this.responseText);
                category_loader(categories);
            });
            cat_loader.open('GET', 'categories.json');
            cat_loader.send();
        }

    }

    var product_info  = [];
    var one = 'Apparel';
    var two = 'Furniture';
    var three = 'Household';

function item_loader(items) {
   items.products.forEach((index)=>{
       document.querySelector('.products').innerHTML += `<h3>${index.name}</h3><h5>${index.price}</h5> `;
       product_info.push(index)

   })
}


function category_loader(categories) {
    let select = document.querySelector('select').value;
    let select_btn = document.querySelector('select');

    let winter_math = 1 - categories.categories[0].discount;
    let autumn_math = 1 -categories.categories[1].discount;
    let spring_math = 1 - categories.categories[2].discount;

    let winter_season = categories.categories[0].season_discount;
    let autumn_season = categories.categories[1].season_discount;

    select_btn.addEventListener('change', ()=>{
        product_info.forEach((index)=>{
            if(select === winter_season && index.category_id === 1){
                document.querySelector('h5').innerHTML = (index.price * winter_math).toFixed(2)
            }else if (select === autumn_season && index.category_id === 2){
                document.querySelector('h5').innerHTML = (index.price * autumn_math).toFixed(2)
            }else{document.querySelector('h5').innerHTML = (index.price * spring_math).toFixed(2)}
        })
    })
}
store_items.load_items(item_loader);
store_items.load_categories(category_loader);