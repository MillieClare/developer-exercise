function showRecommendations(recommendationsDivId, recommendationsData, maxRecommendations) {
    // recommendations div id passed in as string
    let recommendationsElement = $(recommendationsDivId);
    
    let recommendationsArray = recommendationsData['hits'].filter(recommendation => {
        return recommendation.hasOwnProperty('image');
    }).slice(0, maxRecommendations);

   for(let recommendation of recommendationsArray){
        recommendationsElement.append('<div class="col-sm">' +
            `<img src=${recommendation.image.link} class="img-fluid" alt=${recommendation.image.alt}>` +
            `<div class="product_name">${recommendation.product_name}</div>` +
            `<div class="price">${recommendation.price}</div>` +
            '</div>');
    }
}

$(document).ready(function () {
    $.getJSON("data/recommendations.json", function(recommendationsJSON){
        showRecommendations("#recommendations", recommendationsJSON, 5);
    });
});