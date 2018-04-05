$("document").ready(function() {


var search = "merlot"; //$("#search").val().trim();
var recipe = "yannick-amirault-bourgueil-la-coudraye-loire-2009"; //This will target the clicked button object

var queryURL = "http://api.snooth.com/wines/?q=" + search + "&akey=5pgy0fabib7s89ky9l5fx24ha754svspwnata652tn7gdr71";
var pairingURL = "http://api.snooth.com/wine/?food=1&id=" + recipe + "&akey=5pgy0fabib7s89ky9l5fx24ha754svspwnata652tn7gdr71";

// Search Call and Response

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {

    var jsonResponse = JSON.parse(response);

    console.log(JSON.parse(response))

    for(i = 0; i < jsonResponse.wines.length; i++) {
    // for(i = 0; i < 3; i++) {
        var wines = jsonResponse.wines[i];
        var wineName = jsonResponse.wines[i].name;
        var wineVarietal = jsonResponse.wines[i].varietal;
        var wineVintage = jsonResponse.wines[i].vintage;
        var wineRegion  = jsonResponse.wines[i].region;
        var wineImageURL = jsonResponse.wines[i].image;
// ----------------------------------------------------------------------------------------------------------
        // dynamically create a table row to hold wine contect for each wine result returned by API
        var wineRow = $("<table>");
            var tr = $("<tr id='wine-row' class='hoverable'>");
                var td1 = $("<td id='wine-image' class='center-align'>");
                    var img = $("<img id='image-style' class='center-align'>");
                    img.attr("src", wineImageURL);
                td1.append(img);

                var td2b = $("<td id='wine-info-body'>");
                    var ul2b = $("<ul>");
                        var li1 = $("<li id='wine-name'>").text(wineName);
                        var li2 = $("<li id='wine-varietal'>").text(wineVarietal);
                        var li3 = $("<li id='wine-vintage'>").text(wineVintage);
                    ul2b.append(li1);
                    ul2b.append(li2);
                    ul2b.append(li3);
                td2b.append(ul2b);

                var td3 = $("<td id='wine-pairings'>")
                    var ul3 = $("<ul>");
                        var listHeader = $("<li id='recommended-recipes'>").text("Recommeded Recipes:");
                        var listRecipe = $("<li id='recipe'>").text("Insert Recipe Name");
                    ul3.append(listHeader);
                    ul3.append(listRecipe);
                td3.append(ul3);
            tr.append(td1);
            tr.append(td2b);
            tr.append(td3);
        wineRow.append(tr);
        $("#main").append(wineRow);
        $("#main").append($("<br>"));

// ----------------------------------------------------------------------------------------------------------
        var wineCode = jsonResponse.wines[i].code;


    console.log(wineName)
    console.log(wineVarietal)
    console.log(wineVintage)
    console.log(wineRegion)
    console.log(wineImageURL)
    console.log(wineCode)
    }

})

// Recipe Call and Response

$.ajax({
    url: pairingURL,
    method: "GET"
}).then(function(pairingResponse) {

    var jsonPairingResponse = JSON.parse(pairingResponse);

    console.log(JSON.parse(pairingResponse))

    for(i = 0; i < jsonPairingResponse.wines.length; i++) {
        var wineDescription = jsonPairingResponse.wines[i].wm_notes;

        console.log(wineDescription)

        for(j = 0; j < jsonPairingResponse.wines[i].recipes.length; j++) {
            var recipeName = jsonPairingResponse.wines[i].recipes[j].name;
            var recipeURL = jsonPairingResponse.wines[i].recipes[j].source_link;
            var recipeImageURL = jsonPairingResponse.wines[i].recipes[j].image;

            console.log(recipeName);
            console.log(recipeURL);
            console.log(recipeImageURL);

        }

        


    }

})









})