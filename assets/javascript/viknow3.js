$("document").ready(function () {

    var search = "pinot grigio"; //$("#search").val().trim(); THIS IS WHAT THE VARIABLE WILL ACTUALLY BE
    var recipe = ""; //This will target the clicked button object

    var queryURL = "http://api.snooth.com/wines/?q=" + search + "&akey=5pgy0fabib7s89ky9l5fx24ha754svspwnata652tn7gdr71&n=10";
    var pairingURL = "http://api.snooth.com/wine/?food=1&id=" + recipe + "&akey=5pgy0fabib7s89ky9l5fx24ha754svspwnata652tn7gdr71&n=10";
    var wineCodesArray =[];
    // Search Call and Response
    
    $.ajax({
        url: queryURL, 
        method: "GET"
    }).then(function (response) {
        
        var jsonResponse = JSON.parse(response);
        
        // console.log("#############")
        // console.log(JSON.parse(response))
        // console.log("#############")
        
        for (i = 0; i < jsonResponse.wines.length; i++) {
            
            
            // wineCodesArray.push(i);
            var wines = jsonResponse.wines[i];
            var wineName = jsonResponse.wines[i].name;
            var wineVarietal = jsonResponse.wines[i].varietal;
            var wineVintage = jsonResponse.wines[i].vintage;
            var wineRegion = jsonResponse.wines[i].region;
            var wineImageURL = jsonResponse.wines[i].image;
            var wineCode = jsonResponse.wines[i].code;
            
            console.log("#" + (i) +" Name: " + wineName);
            // console.log("#" + (i+1) +" Name: " + wineCode);
           

            function foo() {
                wineCodesArray.push(wineCode); 
            }
            foo();
            // console.log("#" + (i+1) +"Varietal: " + wineVarietal)
            // console.log("#" + (i+1) +"Vintage: " + wineVintage)
            // console.log("#" + (i+1) +"Region: " + wineRegion)
            // console.log("#" + (i+1) +"Image URL: " + wineImageURL)
            // console.log("#" + (i+1) +"Code: " + wineCode)

           
           //  I moved the AJAX inside of the [i] Loop to grab the recipes for the current search results.
           //  Use the current [i] wineCode value to create the recipe search 
          

        //    var pairingURL = "http://api.snooth.com/wine/?food=1&id=" + wineCode + "&akey=5pgy0fabib7s89ky9l5fx24ha754svspwnata652tn7gdr71";
          

        //     $.ajax({
        //         url: pairingURL,
        //         method: "GET"
        //     }).then(function (pairingResponse) {
        
        //         jsonPairingResponse = JSON.parse(pairingResponse);

        //         // wine/recipe separator
        //         console.log(i + " ###########################################################################################################")
        //         // console.log(JSON.parse(pairingResponse))
        //         // console.log(jsonPairingResponse)
        //         console.log(jsonPairingResponse.wines[0].name)
        //         // console.log(jsonPairingResponse.wines.length)

        //         // Loop through number of available recipes (Some of the wines contain 0 recipes)
        //         console.log("number of recipes = " + jsonPairingResponse.wines[0].recipes.length)
        //         for ( let m = 0; m < jsonPairingResponse.wines[0].recipes.length; m++) {
        //             console.log(jsonPairingResponse.wines[0].recipes[m].name)
        //         }
               
        //     })
    
        }

    })
//     wineCodesArray.push(1);
//     wineCodesArray.push(wineCode);
console.log("####wineCodesArray#######")
console.log(wineCodesArray);
console.log("####wineCodesArray#######")
})