/**
 *Programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
*/


let pageSections = document.querySelectorAll("section");
let parentUL = document.querySelector(".navbar__list");
pageSections.forEach((el, ind) => {
    let infoAt = el.getAttribute("data-nav");
    let listIt = document.createElement("li");
    listIt.innerHTML = `<a href="#section${ind+1}">${infoAt}</a> `
    parentUL.appendChild(listIt);

})
