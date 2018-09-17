const recommendationsData = {
    "_v": "15.6",
    "_type": "product_search_result",
    "count": 25,
    "hits": [

        {
            "_type": "product_search_hit",
            "currency": "GBP",
            "image": {
                "_type": "image",
                "alt": "GREEN LEOPARD ASYMMETRIC DRESS Green Print",
                "link": "https://www.warehouse.co.uk/on/demandware.static/-/Sites-WAREHOUSE/default/dw3f7660d4/images/hi-res/warehouse_03305824_1.jpg",
                "title": "GREEN LEOPARD ASYMMETRIC DRESS Green Print"
            },
            "link": "https://www.warehouse.co.uk/s/Sites-Warehouse-UK-Site/dw/shop/v15_6/products/0330582406?refine=cgid%3Ddresses",
            "price": 65,
            "prices": {
                "Original-1501": 65,
                "Now-1501": 65
            },
            "product_id": "0330582406",
            "product_name": "GREEN LEOPARD ASYMMETRIC DRESS",
            "product_type": {
                "_type": "product_type",
                "variant": true
            }
        },

        {
            "_type": "product_search_hit",
            "currency": "GBP",
            "image": {
                "_type": "image",
                "alt": "CHECK MIDI SHIRT DRESS Navy",
                "link": "https://www.warehouse.co.uk/on/demandware.static/-/Sites-WAREHOUSE/default/dwce82c99f/images/hi-res/warehouse_03274336_1.jpg",
                "title": "CHECK MIDI SHIRT DRESS Navy"
            },
            "link": "https://www.warehouse.co.uk/s/Sites-Warehouse-UK-Site/dw/shop/v15_6/products/0327433608?refine=cgid%3Ddresses",
            "price": 46,
            "prices": {
                "Original-1501": 46,
                "Now-1501": 46
            },
            "product_id": "0327433608",
            "product_name": "CHECK MIDI SHIRT DRESS",
            "product_type": {
                "_type": "product_type",
                "variant": true
            }
        }
    ]
}

function showRecommendations(recommendationsDivId) {
    // recommendations div id passed in as string
    let recommendationsElement = $(recommendationsDivId);
    console.log(recommendationsElement);
    let recommendationsArray = recommendationsData['hits'];

    for (let recommendationNumber = 0; recommendationNumber < recommendationsArray.length; recommendationNumber++) {
        recommendationsElement.append('<div class="col-sm">' +
            `<img src=${recommendationsArray[recommendationNumber].image.link} class="img-fluid" alt=${recommendationsArray[recommendationNumber].image.alt}>` +
            `<div class="product_name">${recommendationsArray[recommendationNumber].product_name}</div>` +
            `<div class="price">${recommendationsArray[recommendationNumber].price}</div>` +
            '</div>');
        //
    }
}

$(document).ready(function () {
    showRecommendations("#recommendations");
});