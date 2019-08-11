// Initializing variables
var button = document.getElementById("getNews")
var yyyy
var mm
var dd
var result
var selectedDate
var url
var hits = 0;
var firstTime = true;
var nextButton = document.getElementById("nextButton")
var dynamicAll
var loadMore
var loadMoreLink
var dynamicOld = document.getElementById("dynamicOld");
var oldestPerson = new Date("01/02/1903");
var oldestSection = new Date("06/1/1980");
var news = [];
var today = new Date();

