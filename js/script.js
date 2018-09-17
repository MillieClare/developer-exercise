function showRecommendations(recommendationsDivId, recommendationsData, maxRecommendations) {
    // recommendations div id passed in as string
    let recommendationsElement = $(recommendationsDivId);
    let content = '';
    let recommendationsArray = recommendationsData['hits'].filter(recommendation => {
        return recommendation.hasOwnProperty('image');
    }).slice(0, maxRecommendations);

    // heading for recommendation section
    content += '<div class="row">';
    content += '<div class="col-sm">';
    content += '<div class="recommendations_heading">If you like this, you might be into these</div>';
    content += '<div class="horizontal_break"><hr></div>';
    content += '</div></div>';

    // recommendations
    content += '<div class="row">';
    for (let recommendation of recommendationsArray) {
        content += '<div class="col-sm">' +
            `<a href=${recommendation.link}><img src=${recommendation.image.link} class="img-fluid" alt=${recommendation.image.alt}></a>` +
            `<div class="product_name">${recommendation.product_name}</div>` +
            `<div class="price">${new Intl.NumberFormat('en-UK', { style: 'currency', currency: recommendation.currency }).format(recommendation.price)}</div>` +
            '</div>';
    }
    content += '</div>';
    recommendationsElement.append(content);
}

$(document).ready(function () {
    $.getJSON("data/recommendations.json", function (recommendationsJSON) {
        showRecommendations("#recommendations", recommendationsJSON, 5);
    });
});