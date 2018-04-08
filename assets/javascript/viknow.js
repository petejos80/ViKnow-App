
$("document").ready(function () {
    $("#search").focus();


    // =========================================================================================================
    // AUTO-COMPLETE SEARCH SUGGESTIONS

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
    // CALL SNOOTH API AND STORE RESPONSE IN ARRAYS

    var wineNameArray = []; // wineNameArray.push(wineCodeArrayTwo[x].name)
    var wineVarietalArray = []; // wineVarietalArray.push(wineCodeArrayTwo[x].varietal)
    var wineVintageArray = []; // wineVintageArray.push(wineCodeArrayTwo[x].vintage)
    var wineRegionArray = []; // wineRegionArray.push(wineCodeArrayTwo[x].region)
    var wineImageURLArray = []; // wineImageURLArray.push(wineCodeArrayTwo[x].image);
    var wineCodeArray = [];
    var wineCodeArrayTwo = [];
    var wineNotesArray = []; //wineNotesArray.push(wineCodeArrayTwo[x].wm_notes)
    var winePairingCodeArray = []; // winePairingCodeArray.push(wineCodeArrayTwo[x].code); - example: baus-family-vineyards-knights-valley-merlot-2007 
    var recipeName1Array = []; // recipeName1Array.push(wineCodeArrayTwo[x].recipes[0].name); --OR-- recipeName1Array.push("No Recipes Found");
    var recipeName2Array = []; // recipeName2Array.push(wineCodeArrayTwo[x].recipes[1].name); --OR-- recipeName2Array.push("No Recipes Found");
    var recipeName3Array = []; // recipeName3Array.push(wineCodeArrayTwo[x].recipes[2].name); --OR-- recipeName3Array.push("No Recipes Found");
    var recipeURL1Array = []; // recipeURL1Array.push(wineCodeArrayTwo[x].recipes[0].source_link); --OR-- recipeImageURL1Array.push("No Recipes Found");
    var recipeURL2Array = []; // recipeURL2Array.push(wineCodeArrayTwo[x].recipes[1].source_link); --OR-- recipeImageURL2Array.push("No Recipes Found");
    var recipeURL3Array = []; // recipeURL3Array.push(wineCodeArrayTwo[x].recipes[2].source_link); --OR-- recipeImageURL3Array.push("No Recipes Found");
    var recipeImageURL1Array = []; // recipeImageURL1Array.push(wineCodeArrayTwo[x].recipes[0].image); --OR-- recipeImageURL1Array.push("No Recipes Found");
    var recipeImageURL2Array = []; // recipeImageURL2Array.push(wineCodeArrayTwo[x].recipes[1].image); --OR-- recipeImageURL2Array.push("No Recipes Found");
    var recipeImageURL3Array = []; // recipeImageURL3Array.push(wineCodeArrayTwo[x].recipes[2].image); --OR-- recipeImageURL3Array.push("No Recipes Found");

    // Search Call and Response
    $("#search").keypress(function (e) {
        // empty previous results before displaying new results
        $("#main").text("");

        var search = $("#search").val().trim();
        var queryURL = "http://api.snooth.com/wines/?q=" + search + "&akey=5pgy0fabib7s89ky9l5fx24ha754svspwnata652tn7gdr71&n=25";

        if (e.which === 13 && $("#search").val().trim() != "") {
            event.preventDefault();
            wineNameArray.length = 0;
            wineVarietalArray.length = 0;
            wineVintageArray.length = 0;
            wineRegionArray.length = 0;
            wineImageURLArray.length = 0;
            wineCodeArray.length = 0;
            wineCodeArrayTwo.length = 0;
            wineNotesArray.length = 0;
            winePairingCodeArray.length = 0;
            recipeName1Array.length = 0;
            recipeName2Array.length = 0;
            recipeName3Array.length = 0;
            recipeURL1Array.length = 0;
            recipeURL2Array.length = 0;
            recipeURL3Array.length = 0;
            recipeImageURL1Array.length = 0;
            recipeImageURL2Array.length = 0;
            recipeImageURL3Array.length = 0;
            console.log(search)
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                var jsonResponse = JSON.parse(response);
                //console.log(JSON.parse(response))
                for (i = 0; i < jsonResponse.wines.length; i++) {
                    var wines = jsonResponse.wines[i];
                    var wineCode = jsonResponse.wines[i].code;
                    wineCodeArray.push(wineCode);
                    // console.log("#" + i + ": " + wineName)
                }

                // Recipe Call and Response
                for (m = 0; m < wineCodeArray.length; m++) {
                    var pairingURL = "http://api.snooth.com/wine/?food=1&id=" + wineCodeArray[m] + "&akey=5pgy0fabib7s89ky9l5fx24ha754svspwnata652tn7gdr71";
                    $.ajax({
                        url: pairingURL,
                        method: "GET"
                    }).then(function (pairingResponse) {
                        var jsonPairingResponse = JSON.parse(pairingResponse);
                        var wineDescription = jsonPairingResponse.wines[0].wm_notes;

                        wineCodeArrayTwo.push(jsonPairingResponse.wines[0]);
                    })
                }

                setTimeout(function () {
                    $("#search").val("");
                    $("#search").focus();
                    for (x = 0; x < wineCodeArrayTwo.length; x++) {
                        // console.log(wineCodeArrayTwo[x]);
                        console.log(wineCodeArrayTwo[x].name);
                        winePairingCodeArray.push(wineCodeArrayTwo[x].code);
                        wineImageURLArray.push(wineCodeArrayTwo[x].image);
                        wineNameArray.push(wineCodeArrayTwo[x].name)
                        wineVarietalArray.push(wineCodeArrayTwo[x].varietal)
                        wineVintageArray.push(wineCodeArrayTwo[x].vintage)
                        wineNotesArray.push(wineCodeArrayTwo[x].wm_notes)
                        wineRegionArray.push(wineCodeArrayTwo[x].region)

                        if (($.type(wineCodeArrayTwo[x].recipes[0])) == "object") {
                            recipeName1Array.push(wineCodeArrayTwo[x].recipes[0].name);
                            recipeImageURL1Array.push(wineCodeArrayTwo[x].recipes[0].image);
                            recipeURL1Array.push(wineCodeArrayTwo[x].recipes[0].source_link);
                        } else if (($.type(wineCodeArrayTwo[x].recipes[0])) == "undefined") {
                            recipeName1Array.push("No Recipes Found");
                            recipeImageURL1Array.push("No Recipes Found");
                            recipeURL1Array.push("No Recipes Found")
                        }

                        if (($.type(wineCodeArrayTwo[x].recipes[1])) == "object") {
                            recipeName2Array.push(wineCodeArrayTwo[x].recipes[1].name);
                            recipeImageURL2Array.push(wineCodeArrayTwo[x].recipes[1].image);
                            recipeURL2Array.push(wineCodeArrayTwo[x].recipes[1].source_link);
                        } else if (($.type(wineCodeArrayTwo[x].recipes[1])) == "undefined") {
                            recipeName2Array.push("");
                            recipeImageURL2Array.push("");
                            recipeURL2Array.push("")
                        }

                        if (($.type(wineCodeArrayTwo[x].recipes[2])) == "object") {
                            recipeName3Array.push(wineCodeArrayTwo[x].recipes[2].name);
                            recipeImageURL3Array.push(wineCodeArrayTwo[x].recipes[2].image);
                            recipeURL3Array.push(wineCodeArrayTwo[x].recipes[2].source_link);
                        } else if (($.type(wineCodeArrayTwo[x].recipes[2])) == "undefined") {
                            recipeName3Array.push("");
                            recipeImageURL3Array.push("");
                            recipeURL3Array.push("")
                        }
                    }

                    console.log(wineNameArray);
                    console.log(recipeName1Array);
                    console.log(recipeImageURL1Array);
                    console.log(recipeURL1Array);
                    console.log(recipeName2Array);
                    console.log(recipeImageURL2Array);
                    console.log(recipeURL2Array);
                    console.log(recipeName3Array);
                    console.log(recipeImageURL3Array);
                    console.log(recipeURL3Array);
                    console.log(wineImageURLArray);
                    console.log(wineVarietalArray);
                    console.log(wineNotesArray);
                    console.log(wineCodeArrayTwo);
                    console.log(wineCodeArrayTwo.length)

            // ----------------------------------------------------------------------------------------------------------
                    // dynamically create a table row to hold wine conteNt for each wine result returned by API
                    for (index=0; index<winePairingCodeArray.length; index++) {
                        $('.collapsible').collapsible();
                        $('.modal').modal();
                        $('.tooltipped').tooltip({delay: 50});

                        var wineRow = $("<table class='collapsible' data-collapsible='accordion'>");
                            var tr = $("<tr id='wine-row' class='hoverable collapsible-header'>");
                                var td1 = $("<td id='wine-image' class='center-align'>");
                                    var img = $("<img id='image-style' class='center-align'>");
                                    img.attr("src", (wineImageURLArray[index]));
                                td1.append(img);

                                var td2b = $("<td id='wine-info-body'>");
                                    var ul2b = $("<ul>");
                                        var li1 = $("<li id='wine-name'>").text(wineNameArray[index]);
                                        var li2 = $("<li id='wine-varietal'>").text(wineVarietalArray[index]);
                                        var li3 = $("<li id='wine-vintage'>").text(wineVintageArray[index]);
                                        var li4 = $("<li id='more-info-btn'>").append($("<button class='modal-trigger btn' href='#modal1' id='" + index + "'>").text("More Info"))
                                    ul2b.append(li1);
                                    ul2b.append($("<br>"));
                                    ul2b.append(li2);
                                    ul2b.append(li3);
                                    ul2b.append($("<br>"));
                                    ul2b.append(li4);
                                    

                                td2b.append(ul2b);

                                var td3 = $("<td id='wine-pairings'>")
                                    var ul3 = $("<ul>");
                                        var listRecipe = $("<li id='recipe'>")
                                        var listHeader = $("<li id='recommended-recipes'>").text("Recommeded Recipes:");
                                        console.log(recipeName1Array[index])
                                        listRecipe.append("<a class='tooltipped' data-position='bottom' data-delay='50' html='true' data-tooltip=" + recipeName1Array[index] + "><img width='30%' height='auto' src=" + recipeImageURL1Array[index] + "></a>");
                                        listRecipe.append("<img width='30%' height='auto' src=" + recipeImageURL2Array[index] + ">");
                                        listRecipe.append("<img width='30%' height='auto' src=" + recipeImageURL3Array[index] + ">");
                                    ul3.append(listHeader);
                                    ul3.append($("<br>"))
                                    ul3.append(listRecipe);
                                td3.append(ul3);
                            tr.append(td1);
                            tr.append(td2b);
                            tr.append(td3);
                            var trbody = $("<tr class='collapsible-body'>");
                            var pbody = $("<p>").text("testing")
                            trbody.append(pbody)
                        wineRow.append(tr);
                        wineRow.append(trbody);
                        $("#main").append(wineRow);
                        $("#main").append($("<br>"));
                    }
            // ----------------------------------------------------------------------------------------------------------
                    // More Info Button click event
                    $(".modal-trigger").on("click", function() {
                        var valId = $(this).attr("id");
                        console.log(valId)
                        $(".modalh").text(wineNameArray[valId])
                        $(".modalp").text(wineNotesArray[valId])

                    });


                }, 1500);



                // .then(function(response) {  ------------------ ending bracket              
            })

            //  if(e.which === 13 && $("#search").val().trim() != "") {  --------------- ending bracket            
        }

        //  $("#search").keypress(function(e) {   -------------------------------  ending brackets       
    })

    // $("document").ready(function() {  --------------------- ending bracket
})

