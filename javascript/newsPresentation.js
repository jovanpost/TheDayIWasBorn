
//Rendering the news from the arrays onto the website
function NewsPresentation() {
    if (getNewsFromFrontPage.length >= 1) {

        for (var i = 0; i < getNewsFromFrontPage.length; i++) {
            var theHeadline = document.createElement("h3");
            theHeadline.innerHTML = getNewsFromFrontPage[i].headline.main;
            theHeadline.classList.add("h3style");
    
            var para = document.createElement("p");
            para.innerHTML = getNewsFromFrontPage[i].lead_paragraph;
    
            var readMore = document.createElement("button");
            readMore.classList.add("readMoreStyle");
            var readMoreLink = document.createElement("a");
            $('a').attr('target', '_blank');
            readMore.appendChild(readMoreLink);
            readMoreLink.innerHTML = "Read more";
            readMoreLink.href = getNewsFromFrontPage[i].web_url;
    
            $(dynamicTop).append(theHeadline, para, readMore);
    
            loadMore = document.createElement("button");
            loadMore.setAttribute("id", "loadMore");
            loadMoreLink = document.createElement("a");
            loadMore.appendChild(loadMoreLink);
            loadMoreLink.innerHTML = "Load more news...";
    
    
    
    
            $(dynamicTop).append(theHeadline, para, readMore);
    
    
        }
    
        $(dynamicTop).append(loadMore);
    
    
        loadMore.addEventListener('click', function (event) {
            event.preventDefault();
            $(dynamicAll).show();
            $(loadMore).hide();
    
    
    
        })
    
        for (var i = 0; i < getNewsFromNotFrontPage.length; i++) {
            var newDiv = document.createElement("div");
            newDiv.classList.add("newDivstyle");
    
            var theHeadline = document.createElement("h3");
            theHeadline.innerHTML = getNewsFromNotFrontPage[i].headline.main;
            theHeadline.classList.add("h3style");
    
            var para = document.createElement("p");
            para.innerHTML = getNewsFromNotFrontPage[i].lead_paragraph;
    
            var readMore = document.createElement("button");
            var readMoreLink = document.createElement("a");
            $('a').attr('target', '_blank');
            readMore.appendChild(readMoreLink);
            readMoreLink.innerHTML = "Read more";
            readMoreLink.href = getNewsFromNotFrontPage[i].web_url;
    
            dynamicAll = document.getElementById("dynamicAll")
    
  
    
            $(".spinner").hide();
    
            $(newDiv).append(theHeadline, para, readMore);
    
    
    
            $(dynamicAll).append(newDiv);
    
        }
    
    } else {
        for (var i = 0; i < getNewsFromNotFrontPage.length; i++) {
            var newDiv = document.createElement("div");
            newDiv.classList.add("newDivstyle");
    
            var theHeadline = document.createElement("h3");
            theHeadline.innerHTML = getNewsFromNotFrontPage[i].headline.main;
            theHeadline.classList.add("h3style");
    
            var para = document.createElement("p");
            para.innerHTML = getNewsFromNotFrontPage[i].lead_paragraph;
    
            var readMore = document.createElement("button");
            var readMoreLink = document.createElement("a");
            $('a').attr('target', '_blank');
            readMore.appendChild(readMoreLink);
            readMoreLink.innerHTML = "Read more";
            readMoreLink.href = getNewsFromNotFrontPage[i].web_url;
    
            dynamicAll = document.getElementById("dynamicAll")
    
   
    
            $(".spinner").hide();
    
            $(newDiv).append(theHeadline, para, readMore);
    
    
    
            $(dynamicAll).append(newDiv);
    
            $(dynamicAll).show();
    
    
        }
    }
}