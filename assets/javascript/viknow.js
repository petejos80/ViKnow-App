$("document").ready(function() {

var x = "merlot"; //$("#search").val().trim(); THIS IS WHAT THE VARIABLE WILL ACTUALLY BE

var queryURL = "http://api.snooth.com/wines/?q=" + x + "&akey=5pgy0fabib7s89ky9l5fx24ha754svspwnata652tn7gdr71&q=";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {

    var jsonResponse = JSON.parse(response);

    console.log(JSON.parse(response))

    for(i = 0; i < jsonResponse.wines.length; i++) {

        var wines = jsonResponse.wines[i];
        var wineName = jsonResponse.wines[i].name;
        var wineVarietal = jsonResponse.wines[i].varietal;
        var wineVintage = jsonResponse.wines[i].vintage;
        var wineRegion  = jsonResponse.wines[i].region;
        var wineDescription = jsonResponse.wines[i].wm_notes;
        var wineImageURL = jsonResponse.wines[i].image;
        var wineCode = jsonResponse.wines[i].code;
        //var recipeName = jsonResponse.wines[i].recipes;
        //var recipeURL = jsonResponse.wines[i].image
        //var recipeImageURL

    console.log(wineName)
    console.log(wineVarietal)
    console.log(wineVintage)
    console.log(wineRegion)
    console.log(wineDescription)
    console.log(wineImageURL)
    console.log(wineCode)
    }

})










})