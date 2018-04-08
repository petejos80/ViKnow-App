$("document").ready(function() {

var search = "merlot"; //$("#search").val().trim(); THIS IS WHAT THE VARIABLE WILL ACTUALLY BE
var recipe = "yannick-amirault-bourgueil-la-coudraye-loire-2009"; //This will target the clicked button object

var queryURL = "http://api.snooth.com/wines/?q=k&akey=5pgy0fabib7s89ky9l5fx24ha754svspwnata652tn7gdr71&n=100";
var pairingURL = "http://api.snooth.com/wine/?food=1&id=" + recipe + "&akey=5pgy0fabib7s89ky9l5fx24ha754svspwnata652tn7gdr71&n=100";

// Search Call and Responses

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {

    var jsonResponse = JSON.parse(response);

    console.log(JSON.parse(response))
    console.log(response);

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

// TEST AREA 
// =========================================================================================================

// var queryURL = "http://api.snooth.com/wines/?q=" + search + "&akey=5pgy0fabib7s89ky9l5fx24ha754svspwnata652tn7gdr71&n=100";
// Instantiate the Bloodhound suggestion engine

var wine = new Bloodhound({
    datumTokenizer: function (datum) {
        return Bloodhound.tokenizers.whitespace(datum.value);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: {
        url: 'http://api.snooth.com/wines/?q=%QUERY&akey=5pgy0fabib7s89ky9l5fx24ha754svspwnata652tn7gdr71&s=sr',
        filter: function (wine) {
            console.log(wine)
            // Map the remote source JSON array to a JavaScript object array
            return $.map(wine.wines, function (wines) {
                // console.log(wines);
                // console.log(wine);
                return {
                    value: wines.name
                };
            });
        }
    }
});

// Initialize the Bloodhound suggestion engine
wine.initialize();

// Instantiate the Typeahead UI
$('.typeahead').typeahead(null, {
    displayKey: 'value',
    source: wine.ttAdapter()
});

// =========================================================================================================

})


