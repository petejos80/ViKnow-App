$("document").ready(function() {

var search = "merlot"; //$("#search").val().trim(); THIS IS WHAT THE VARIABLE WILL ACTUALLY BE
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

        var wines = jsonResponse.wines[i];
        var wineName = jsonResponse.wines[i].name;
        var wineVarietal = jsonResponse.wines[i].varietal;
        var wineVintage = jsonResponse.wines[i].vintage;
        var wineRegion  = jsonResponse.wines[i].region;
        var wineImageURL = jsonResponse.wines[i].image;
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