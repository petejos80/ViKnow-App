$("document").ready(function() {
    //var recip = "yannick-amirault-bourgueil-la-coudraye-loire-2009"; //This will target the clicked button object
    // var wineCode2;
    
    var wineNameArray = [];
    var wineVarietalArray = [];
    var wineVintageArray = [];
    var wineRegionArray = [];
    var wineImageURLArray = [];
    var wineCodeArray = [];
    var winePairingCodeArray = [];
    // Search Call and Response
    $("#search").keypress(function(e) {
        var search = $("#search").val().trim();
        var queryURL = "http://api.snooth.com/wines/?q=" + search + "&akey=5pgy0fabib7s89ky9l5fx24ha754svspwnata652tn7gdr71&n=10";
        
        if(e.which === 13 && $("#search").val().trim() != "")  {
            event.preventDefault();
           console.log(search)
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response) {
                var jsonResponse = JSON.parse(response);
                //console.log(JSON.parse(response))
                for(i = 0; i < jsonResponse.wines.length; i++) {
                    var wines = jsonResponse.wines[i];
                    var wineName = jsonResponse.wines[i].name;
                    $(".row").append("<p> Wine Name: " + wineName + "</p>");
        
                    var wineVarietal = jsonResponse.wines[i].varietal;
                    $(".row").append("<p> Varietal: " + wineVarietal + "</p>");
        
                    var wineVintage = jsonResponse.wines[i].vintage;
                    $(".row").append("<p> Vintage: " + wineVintage + "</p>");
        
                    var wineRegion = jsonResponse.wines[i].region;
                    var wineImageURL = jsonResponse.wines[i].image;
        
                    var wineImage = $("<img src='"+ wineImageURL +"'>");
                    wineImage.addClass("wineImage");
                    $(".row").append(wineImage);
        
                    var wineCode = jsonResponse.wines[i].code;
        
                    wineNameArray.push(wineName);
                    wineVarietalArray.push(wineVarietal);
                    wineVintageArray.push(wineVintage);
                    wineRegionArray.push(wineRegion);
                    wineImageURLArray.push(wineImageURL);
                    wineCodeArray.push(wineCode);
                   
                    console.log("#"+i +": " + wineName)


                    // wineCode2 = wineCode;
                    // console.log("#" + i +": "+"variable wineCode2 = " + wineCode2)









                }
              for (k=0; k<wineCodeArray.length; k++) {
                  console.log("Wine #" +k + "---------------------------------------------------------------------------------")
                  console.log("Name: " + wineNameArray[k]);
                  console.log("Varietal: " + wineVarietalArray[k]);
                  console.log("Vintage: " + wineVintageArray[k]);
                  console.log("Region: " + wineRegionArray[k]);
                  console.log("ImageURL: " + wineImageURLArray[k]);
                  console.log("Code: " + wineCodeArray[k]);
              }
               
            })
        }
    })
    //console.log(wineCode2)
    // Recipe Call and Response
$("#search").keypress(function(e) {





    
})

console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
for (m=0; m < wineCodeArray.length; m++) {}
    var pairingURL = "http://api.snooth.com/wine/?food=1&id=" + wineCodeArray[m] + "&akey=5pgy0fabib7s89ky9l5fx24ha754svspwnata652tn7gdr71";
    console.log(m+" - " + pairingURL)




    //  $.ajax({
    //       url: pairingURL,
    //       method: "GET"
    //   }).then(function(pairingResponse) {
    //       var jsonPairingResponse = JSON.parse(pairingResponse);
    //      // console.log(JSON.parse(pairingResponse))
    //       for(i = 0; i < jsonPairingResponse.wines.length; i++) {
    //           var wineDescription = jsonPairingResponse.wines[i].wm_notes;
    //          // console.log(wineDescription)
    //           for(j = 0; j < jsonPairingResponse.wines[i].recipes.length; j++) {
    //               var recipeName = jsonPairingResponse.wines[i].recipes[j].name;
    //               var recipeURL = jsonPairingResponse.wines[i].recipes[j].source_link;
    //               var recipeImageURL = jsonPairingResponse.wines[i].recipes[j].image;
    //             // console.log(recipeName);
    //             // console.log(recipeURL);
    //             // console.log(recipeImageURL);
    //           }
            
    //       }
    //   })
    })