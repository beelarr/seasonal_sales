/**
 * Created by beelarr on 7/27/17.
 */

    var Store_Items = (function (){
            let items = []
            let categories = []

            return {
                load_items: function () {
                    var loader = new XMLHttpRequest();
                    loader.addEventListener('load', function () {
                        items = JSON.parse(this.responseText);
                        item_loader(items);
                    });
                    loader.open('GET', 'products.json')
                    loader.send();
                },

                load_categories: function () {
                    var cat_loader = new XMLHttpRequest();
                    cat_loader.addEventListener('load', function () {
                        categories = JSON.parse(this.responseText);
                        category_loader(categories);
                    });
                    cat_loader.open('GET', categories.json);
                    cat_loader.send();

                }
            }
        })()



function item_loader(items) {
        // console.log(items)
        console.log(items.products)
        // console.log(items.products[0])
        // console.log(items.products[0].name)

    items.products.forEach((index)=>{
            console.log(index)
            console.log(index.name)

    document.querySelector('.products').innerHTML += index.name


    })




}

function category_loader() {
    let winter = document.querySelector('#winter')
    let autumn = document.querySelector('#autumn')
    let spring = document.querySelector('#spring')
    let select = document.querySelector('option')

    console.log(winter.value)


}

Store_Items.load_items(item_loader);
Store_Items.load_categories(category_loader);