let nextButton = document.getElementById('nextButton');
let prevButton = document.getElementById('prevButton');
let article0 = document.getElementById('article-0');
let article1 = document.getElementById('article-1');
let clickNext = true;

nextButton.addEventListener('click', nextArticle);
prevButton.addEventListener('click', prevArticle);

function nextArticle(){
    if (clickNext){
        article1.style.display= "flex";
        article0.style.display = "none";
        clickNext = false;
    }
}

function prevArticle(){
    if (clickNext===false){
        article1.removeAttribute('style');
        article0.removeAttribute('style');
        clickNext = true;
    }
}