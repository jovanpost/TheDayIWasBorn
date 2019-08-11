//Array to store the news articles from the front page
var getNewsFromFrontPage = [];
//Array to store the news articles from all the other pages
var getNewsFromNotFrontPage = [];

//Checks if the news articles are from the front page or the other pages
async function checkForFrontpage() {
    for (var index = 0; index < news.length; index++) {
        for (var j = 0; j < news[index].response.docs.length; j++) {

            if (news[index].response.docs[j].print_page == 1) {
                getNewsFromFrontPage.push(news[index].response.docs[j]);
            } else {
                getNewsFromNotFrontPage.push(news[index].response.docs[j]);
            }
        }

    }

}
