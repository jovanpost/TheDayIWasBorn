//Getting the data from the NYT API
async function asyncNewUrl(result, i) {
    try {
        if (selectedDate > oldestSection) {

            var response = await fetch("https://api.nytimes.com/svc/search/v2/articlesearch.json?page=" + i + "&fq=section_name:(%22U.S.%22,%20%22world%22)&begin_date=" + result + "&end_date=" + result + "&api-key=UCq3HZgT5UKgQn25AENFERaMjoCdHeCN");
        } else {
            var response = await fetch("https://api.nytimes.com/svc/search/v2/articlesearch.json?page=" + i + "&begin_date=" + result + "&end_date=" + result + "&api-key=UCq3HZgT5UKgQn25AENFERaMjoCdHeCN");

        }

        var data = await response.json();
        news.push(data);
        hits = data.response.meta.hits;

    } catch (error) {
        return error;
    }
}