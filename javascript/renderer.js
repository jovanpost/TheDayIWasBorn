//Event handler for the "Go back in time!" button - here the process starts
button.addEventListener('click', async function (event) {
//Clearing the page from previous data - if any, and showing the loading spinner
    event.preventDefault();
    $("#dynamicTop").html("");
    $("#dynamicAll").html("");
    $(dynamicAll).hide();
    $("#dynamicOld").html("");
    $(dynamicOld).hide();
    $(dynamicNews).show();
    $("#next").hide();
    $(".spinner").show();
//Getting the values from the date picker
    yyyy = document.getElementById("year").value;
    mm = document.getElementById("month").value;
    if (mm <= 9) {
        mm = "0" + mm
    }

    dd = document.getElementById("day").value;

    result = yyyy + mm + dd;
    selectedDate = new Date(mm + "/" + dd + "/" + yyyy);

//Awaits for meta data from the repository and loops to get all the news articles for that date (10 articles per page)
    await asyncNewUrl(result, 0);
// If there are less than 50 articles, than it gets all the articles, else it gets only the first 50 articles
    if (hits <= 50) {
        for (var index = 1; index <= hits / 10; index++) {
            await asyncNewUrl(result, index);
        }
    } else {
        for (var index = 1; index <= 5; index++) {
            await asyncNewUrl(result, index);
        }
    }

    await checkForFrontpage();
    var dynamicTop = document.getElementById("dynamicTop")

//Check if the selected date is today or an older date, and respond to the request

//First response for date greater than today
    if (selectedDate > today) {
        $(loadMore).hide();
        $(dynamicNews).hide();
        $(dynamicOld).show();


        var dynamicOldH2 = document.createElement("h2");
        dynamicOldH2.innerHTML = "Are you a time traveler?"
        var dynamicOldP = document.createElement("p");
        dynamicOldP.innerHTML = "Unfortunately, we can't predict the future, so we can't show you any news for this date. Please select another date."

        $(dynamicOld).append(dynamicOldH2, dynamicOldP);
    }
//Second response for date older than the oldest living person in the world
    else if (selectedDate < oldestPerson) {

        $(loadMore).hide();
        $(dynamicNews).hide();
        $(dynamicOld).show();


        var dynamicOldP = document.createElement("p");
        dynamicOldP.innerHTML = "Kane Tanaka (born 2 January 1903) from Japan is the world's verified oldest living person."
        var dynamicOldImg = document.createElement("img");
        dynamicOldImg.setAttribute("id", "dynamicOldImg");
        dynamicOldImg.src = "images/kane-tanaka.jpg";
        var dynamicOldP2 = document.createElement("p");
        dynamicOldP2.innerHTML = "So, there's no way that you were born on the selected date... but, if you still want to see what happened on this date...<br>";


        oldLoadMore = document.createElement("button");
        oldLoadMore.setAttribute("id", "oldLoadMore");
        var oldLoadMoreLink = document.createElement("a");
        oldLoadMore.appendChild(oldLoadMoreLink);
        oldLoadMore.innerHTML = "Load the news from this day";

        $(dynamicOld).append(dynamicOldP, dynamicOldImg, dynamicOldP2, oldLoadMore);


        oldLoadMore.addEventListener('click', function (event) {
            event.preventDefault();
            $(dynamicNews).show();
            $(dynamicOld).hide();
        })

        NewsPresentation();




    }
//Response for regular date within range
    else {
        NewsPresentation();
        $("#next").show();
    }



})

//Next button event handler - it increments the year for 1 and simulates click on the first button and the process starts once
nextButton.addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo(0, 0);
    var inDate = document.getElementById("year").value;
    var dt = new Date(Date.parse(inDate));
    dt.setFullYear(dt.getFullYear() + 1);
    var check = dt.getFullYear()
    document.getElementById("year").value = check;
    getNewsFromFrontPage.length = 0;
    getNewsFromNotFrontPage.length = 0;
    news.length = 0;
    button.click();
})