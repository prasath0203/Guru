let menuDropdownLinks = document.querySelectorAll('.menu-dropdown-item');
let navButton = document.querySelector('#navButton');
let menuItems = document.querySelectorAll('.menu-item');

menuDropdownLinks.forEach(function(item){
    item.onclick = toggleDropdown;
});

menuItems.forEach(function(item)
{
    item.onclick = changeSection;

});

navButton.onclick = function(){
    let nav = document.querySelector('nav');


    if(nav.classList.contains('showNav')){
        nav.className = "closeNav";
        toggleHamburgerMenu();
        toggleCloseBtn();
    }else{
        nav.className = "showNav";
        toggleHamburgerMenu();
        toggleCloseBtn();
    }



}

function changeSection(){

    let activeArticle = document.querySelector('.active-article');
    let newArticleId = this.getAttribute('href');
    let newArticle = document.querySelector(newArticleId);
    activeArticle.classList.remove('active-article');
    activeArticle.hidden = true;
    newArticle.classList.add('active-article');
    newArticle.hidden = false;
    
}












function toggleDropdown(){
    let listNumber = this.dataset.list;
    let ul = document.querySelector('#sublist-'+ listNumber);
    let arrow = document.querySelector('#sublist-' +listNumber + '-arrow');

    if(ul.hidden){
        ul.hidden = false;
        arrow.innerText = "arrow_drop_up"

    }else{
        ul.hidden = true;
        arrow.innerText = "arrow_drop_down"
    }
}


function toggleHamburgerMenu(){
    let menu = document.querySelector('.close-btn');

    if(menu.hidden) {
        menu.hidden = false;
    }else{
        menu.hidden = true;
    }

}

function toggleCloseBtn(){
    let closeBtn = document.querySelector('.close-btn');

    if(closeBtn.hidden) {
        closeBtn.hidden = false;
    }else{
        closeBtn.hidden = true;
    }



}








