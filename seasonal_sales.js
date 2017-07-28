/**
 * Created by beelarr on 7/27/17.
 */
{
    var store_items = {}
    let items = []
    let categories = []


        store_items.load_items = function () {
            var loader = new XMLHttpRequest();
            loader.addEventListener('load', function () {
                items = JSON.parse(this.responseText);
                item_loader(items);
            });
            loader.open('GET', 'products.json')
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


    var product_info  = []
    var one = 'Apparel'
    var two = 'Furniture'
    var three = 'Household'

function item_loader(items) {
        // console.log(items)
        // console.log(items.products)
        // console.log(items.products[0])
        // console.log(items.products[0].name)


    items.products.forEach((index)=>{
            // console.log(index.name)

    document.querySelector('.products').innerHTML += `<h3>${index.name}</h3><h5>${index.price}</h5> `

    product_info.push(index)



    })
}

function category_loader(categories) {
    // let Winter = document.querySelector('#Winter').value
    // let Autumn = document.querySelector('#Autumn').value
    // let Spring = document.querySelector('#Spring').value
    let select = document.querySelector('select').value
    let select_btn = document.querySelector('select')
    // console.log(select)
    // console.log(categories.categories[0].discount)

    let winter_math = 1 - categories.categories[0].discount;
    let autumn_math = 1 -categories.categories[1].discount
    let spring_math = 1 - categories.categories[2].discount
console.log(spring_math)
    let winter_season = categories.categories[0].season_discount;
    let autumn_season = categories.categories[1].season_discount
    let spring_season = categories.categories[1].season_discount
    // console.log(product_info)

    select_btn.addEventListener('change', ()=>{
        product_info.forEach((index)=>{
            // console.log(select)
            // console.log(winter_season)
            // console.log(index.category_id)
            // console.log(index)

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