(function (){ //same as document.addEventListener("DOMContentLoaded")
    
    //same as document.querySelector("#navbarToggle").addEventListener("blur")
    $("#navbarToggle").blur(function (event){
        var screenWidth = window.innerWidth;
        if(screenWidth < 768){
            $("#navbarTogglerDemo01").collapse('hide');
        }
    });
});

(function (global) {
    var dc = {};
    var homeHtml = "snippets/home-snippets.html";

    // var allCategoriesUrl = 
    //     "http://davids-restaurant.herokuapp.com/categories.json";
    // var categoriesTitleHtml = "snippets/categories-title-snippet.html";
    // var categoryHtml = "snippets/category-snippet.html";
    //menuItemsUrl = "http://david-restaurant.herokuapp.com/menu_items.json?category=";
    //menuItemHtml = "snippets/menu-item.html";


    var insertHtml = function(selector, html){
        var targetElement = document.querySelector(selector);
        targetElement.innerHTML = html;
    };

    var showLoading = function(selector){
        var html = "<div class='text-center'>";
        html += "<img src='images/loading2.gif'></div>";
        insertHtml(selector, html);
    };

    


    document.addEventListener("DOMContentLoaded", function(event){
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            homeHtml, function (responseText){
                document.querySelector("#main-content").innerHTML = responseText;
            }, false);
    });

    // var insertProperty = function(string, propName, propValue){
    //     var propToReplace = "{{" + propName +"}}";
    //     string = string.replace(new RegExp(propToReplace, "g"), propValue);
    //     return string;
    // }
    //Load the menu categories view
    // dc.loadMenuCategories = function(){
    //     showLoading("#main-content");
    //     $ajaxUtils.sendGetRequest(
    //         allCategoriesUrl, buildAndShowCategoriesHTML
    //     );
    // };

    //Load the menu items view
    // dc.loadMenuItems = function(categoryShort){
    //     showLoading("#main-content");
    //     $ajaxUtils.sendGetRequest(
    //         menuItemsUrl + categoryShort,
    //         buildAndShowMenuItemsHTML
    //     );
    // };

    //builds html for the categories page based on the data
    // function buildAndShowCategoriesHTML(categories){
    //     $ajaxUtils.sendGetRequest(
    //         categoriesTitleHtml, function(categoriesTitleHtml){
    //             $ajaxUtils.sendGetRequest(
    //                 categoryHtml,
    //                 function(categoryHtml){
    //                     var categoriesViewHtml =
    //                         buildCategoriesViewHtml(categories, categoriesTitleHtml, categoryHtml);
    //                         insertHtml("#main-content".  categoriesViewHtml);
    //                 }, false);
    //         },false);
    // }

    // function buildCategoriesViewHtml(categories, categoriesTitleHtml, categoryHtml){
    //     var finalHtml = categoriesTitleHtml;
    //     finalHtml += "<section class='row'>";

    //     for(var i=0; i<categories.length; i++){
    //         var html = categoryHtml;
    //         var name = "" + categories[i].name;
    //         html = insertProperty(html, "name", name);
    //         html = insertProperty(html, "short_name", short_namme);
    //         finalHtml += html;
    //     }

    //     finalHtml += "</section>";
    //     return finalHtml;
    // }

    // function buildAndShowMenuItemsHTML(categoryMenuItems){
    //     $ajaxUtils.sendGetRequest(menuItemsTitleHtml, 
    //         function(menuItemsTitleHtml){
    //             $ajaxUtils.sendGetRequest(
    //                 menuItemsTitleHtml, 
    //                 function(menuItemHtml){
    //                     var menuItemsViewHtml = 
    //                         buildMenuItemsViewHtml(categoryMenuItems, menuItemsTitleHtml, menuItemHtml);
    //                         insertHtml("#main-content", menuItemsViewHtml);
    //                 },false);
    //     }, false);
    // }

    // function buildMenuItemsViewHtml(categoryMenuItems, menuItemsTitleHtml, menuItemHtml){
    //     menuItemsTitleHtml = 
    //         insertProperty(menuItemsTitleHtml, "name", categoryMenuItems.category.name);
    //     menuItemsTitleHtml = 
    //         insertProperty(menuItemsTitleHtml, "special_instructions", categoryMenuItems.category.special_instructions);
    //     var finalHtml = menuItemsTitleHtml;
    //     finalHtml += "<section class='row'>";
        
    //     var menuItems = categoryMenuItems.menu_items;
    //     var catShortName = categoryMenuItems.category.short_name;
    //     for(var i=0; i<menuItems.length; i++){
    //         var html = menuItemHtml;
    //         html = insertProperty(html, "short_name", menuItems[i].short_name);
    //         html = insertProperty(html, "catShortName", catShortName);
    //         html = insertItemPrice(html, "price_small", menuItems[i].price_small);
    //         html = insertItemPortionName(html, "small_portio_name", menuItems[i].small_portion_name);
    //         html = insertItemPrice(html, "price_large", menuItems[i].price_large);
    //         html = insertItemPortionName(html, "large_portion_name", menuItems[i].large_portion_name);
    //         html = insertProperty(html, "name", menuItems[i].name);
    //         html = insertPropert(html, "description", menuItems[i].description);

    //         //add clearfix after every second menu item
    //         if(i % 2!= 0){
    //             html += 
    //                 "<div class='clearfix visivle-lg-block visible-md-block'></div>";
    //         }
    //         finalHtml += html;
    //     }
    //     finalHtml += "</section>";
    //     return finalHtml;
    // }

    // function insertItemPrice(html, pricePropName, value){
    //     if(!priceValue){
    //         return insertProperty(html, pricePropName, "");
    //     }
    //     priceValue = "$" + priceValue.toFixed(2);
    //     html = insertProperty(html, pricePropName, priceValue);
    //     return html;
    // }

    // function insertItemPortionName(html, portionPropName, portionValue){
    //     if(!portionValue){
    //         return insertProperty(html, portionPropName, "");
    //     }
    //     html = insertProperty(html, portionPropName, portionValue);
    //     return html;
    // }

    global.$dc = dc;
})(window);