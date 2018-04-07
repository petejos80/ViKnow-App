
// create div to hold row
var wineRow = $("<table>");

    var tr = $("<tr class='hoverable' style='background-color: white;'>");
        var td = $("<td class='center-align' id='wine-image' style='width: 25%;'>");
            var img = $("<img>")
            img.attr("src", wineImageURL);
        td.append(img)

    tr.append(td)
wineRow.append(tr)
$("#main").append(wineRow)


var wineName = jsonResponse.wines[i].name;
// $(".row").append("<p> Wine Name: " + wineName + "</p>");

var wineVarietal = jsonResponse.wines[i].varietal;
// $(".row").append("<p> Varietal: " + wineVarietal + "</p>");

var wineVintage = jsonResponse.wines[i].vintage;
// $(".row").append("<p> Vintage: " + wineVintage + "</p>");

var wineRegion = jsonResponse.wines[i].region;
var wineImageURL = jsonResponse.wines[i].image;

var wineImage = $("<img src='" + wineImageURL + "'>");
wineImage.addClass("wineImage");


// Just a test function the check for Objects or Undefined
arrayChecker.push($.type(jsonPairingResponse.wines[0].recipes[1]));
if (($.type(jsonPairingResponse.wines[0].recipes[2])) == "object") {
    objectOne.push("OBJECT")
};

if (($.type(jsonPairingResponse.wines[0].recipes[2])) == "undefined") {
    objectOne.push("UNDEFINED")
};





//   console.log("RECIPE-NAME-ARRAY");
setTimeout(function() {
    // console.log ("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
    //   console.log("recipeArray#0");
    //   console.log(recipeName1Array[0]);  
    //   console.log("recipeArray#1");
    //   console.log(recipeName1Array[1]);  
    //   console.log("recipeArray#2");
    //   console.log(recipeName1Array[2]);  
    //   console.log("recipeArray#3");
    //   console.log(recipeName1Array[3]);  
    //   console.log("recipeArray#4");
    //   console.log(recipeName1Array[4]);  
    //   console.log("recipeArray#5");
    //   console.log(recipeName1Array[5]);  
    //   console.log("recipeArray#6");
    //   console.log(recipeName1Array[6]);  
    //   console.log("recipeArray#7");
    //   console.log(recipeName1Array[7]);  
    //   console.log("recipeArray#8");
    //   console.log(recipeName1Array[8]);  
    //   console.log("recipeArray#9");
    //   console.log(recipeName1Array[9]);  
    //   console.log("recipeArray#10");
    //   console.log(recipeName1Array[10]);  
    //   console.log("recipeArray#11");
    //   console.log(recipeName1Array[11]);  
    //   console.log("recipeArray#12");
    //   console.log(recipeName1Array[12]);  
    //   console.log("recipeArray#13");
    //   console.log(recipeName1Array[13]);  
    //   if (recipeImageURL1Array[13] == undefined) {
    //       console.log("yes, number 13 is undefined, good job buddy")
    //   }
    //   console.log("recipeArray#14");
    //   console.log(recipeName1Array[14]);  
    //   console.log ("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
      
      console.log("RECIPE-NAME-ARRAY");
        console.log(recipeName1Array);  
        // console.log(recipeName2Array);  
        // console.log(recipeName3Array);  
        // console.log("RECIPE-NAME-ARRAY");
        
        // console.log("RECIPE-URL-ARRAY");
        // console.log(recipeURL1Array);  
        // console.log(recipeURL2Array);  
        // console.log(recipeURL3Array);  
        // console.log("RECIPE-URL-ARRAY");
        
        // console.log("RECIPE-IMAGE-URL-ARRAY");
        // console.log(recipeImageURL1Array);  
        // console.log(recipeImageURL2Array);  
        // console.log(recipeImageURL3Array);  
        // console.log("RECIPE-IMAGE-URL-ARRAY");
  
    },1500);
        // console.log("json pairing response loop, how many looopsS??????????????????????????????????????????????");
                // console.log(jsonPairingResponse.wines.length)
                // console.log("json pairing response loop, wm_noteswm_noteswm_noteswm_noteswm_noteswm_noteswm_noteswm_noteswm_noteswm_notes?");
                // console.log("#"+m+" :" + wineDescription);
            //    console.log("WINE DESCRIPTION " + wineDescription)
                // for(j = 0; j < jsonPairingResponse.wines[i].recipes.length; j++) {



                // if (jsonPairingResponse.wines[k].recipes.length === 0 || jsonPairingResponse.wines[k].recipes.length === 1) {}
                                    // console.log("RECIPE LENGTH INDEED DOES =0 or 1")
                              

                                // for (j = 0; j < 3; j++) {
                                //     var recipeName = jsonPairingResponse.wines[k].recipes[j].name;
                                //     var recipeURL = jsonPairingResponse.wines[k].recipes[j].source_link;
                                //     var recipeImageURL = jsonPairingResponse.wines[k].recipes[j].image;
                                //     if (j === 0) {

                                //         // console.log(jsonPairingResponse.wines[k].recipes.length + " = ARRAY LENGTH OF WINES.RECIPES.NAME")
                                //         // if (jsonPairingResponse.wines[k].recipes.length < 3) {
                                //         if (jsonPairingResponse.wines[k].recipes.length = 3) {
                                //             // console.log($.type(jsonPairingResponse.wines[0].recipes));
                                //             recipeName1Array.push(recipeName);
                                //             recipeURL1Array.push(recipeURL);
                                //             recipeImageURL1Array.push(recipeImageURL);
                                //         } else {
                                //             // ($.type(jsonPairingResponse.wines[k].recipes) != "array"  || (jsonPairingResponse.wines[k].recipes.length < 3) ) {
                                //             // console.log($.type(jsonPairingResponse.wines[k].recipes));
                                //             recipeName1Array.push("NULL");
                                //             recipeURL1Array.push("NULL");
                                //             recipeImageURL1Array.push("NULL");
                                //         }
                                //     }

                                //     if (j === 1) {
                                //         // console.log(jsonPairingResponse.wines[k].recipes.length + " = ARRAY LENGTH OF WINES.RECIPES.NAME")
                                //         if (jsonPairingResponse.wines[k].recipes.length < 3) {
                                //             recipeName2Array.push("NULL");
                                //             recipeURL2Array.push("NULL");
                                //             recipeImageURL2Array.push("NULL");
                                //         } else if (jsonPairingResponse.wines[k].recipes.length = 3) {
                                //             recipeName2Array.push(recipeName);
                                //             recipeURL2Array.push(recipeURL);
                                //             recipeImageURL2Array.push(recipeImageURL);
                                //         }
                                //     }

                                //     if (j === 2) {
                                //         // console.log(jsonPairingResponse.wines[k].recipes.length + " = ARRAY LENGTH OF WINES.RECIPES.NAME")
                                //         if (jsonPairingResponse.wines[k].recipes.length < 3) {
                                //             recipeName3Array.push("NULL");
                                //             recipeURL3Array.push("NULL");
                                //             recipeImageURL3Array.push("NULL");
                                //         } else if (jsonPairingResponse.wines[k].recipes.length = 3) {
                                //             recipeName3Array.push(recipeName);
                                //             recipeURL3Array.push(recipeURL);
                                //             recipeImageURL3Array.push(recipeImageURL);
                                //         }
                                //     }
                                // }