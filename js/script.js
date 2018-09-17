function showRecommendations(recommendationsDivId, recommendationsData) {
    // recommendations div id passed in as string
    let recommendationsElement = $(recommendationsDivId);
    console.log(recommendationsElement);
    let recommendationsArray = recommendationsData['hits'].filter(recommendation => {
        return recommendation.hasOwnProperty('image');
    }).slice(0,5);

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
    $.getJSON("data/recommendations.json", function(recommendationsJSON){
        showRecommendations("#recommendations", recommendationsJSON);
    });
});