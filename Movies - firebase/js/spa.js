"use strict";

/*function toggleUi(actionId){
  let actions = document.querySelectorAll(".action");
  this.classList.toggle("show");
  clear();
}*/



function clear() {
// reset input fields
document.querySelector('#title').value = "";
document.querySelector('#year').value = "";
document.querySelector('#director').value = "";
document.querySelector('#length').value = "";
document.querySelector('#img').value = "";
document.querySelector('#status').value = "";
}

function hideUi(){
  let actions = document.querySelectorAll(".action");
  for (let action of actions){
  action.classList.remove("show");
  }
}

// hide all pages
function hideAllPages() {
  let pages = document.querySelectorAll(".page");
  for (let page of pages) {
    page.style.display = "none";
  }
}

// show page or tab
function showPage(pageId) {
  hideAllPages();
  document.querySelector(`#${pageId}`).style.display = "block";
  setActiveTab(pageId);
}

// sets active tabbar/ menu item
function setActiveTab(pageId) {
  let pages = document.querySelectorAll(".tabbar a");
  for (let page of pages) {
    if (`#${pageId}` === page.getAttribute("href")) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }
  }
}

// navigate to a new view/page by changing href
function navigateTo(pageId) {
  location.href = `#${pageId}`;
}

// set default page or given page by the hash url
// function is called 'onhashchange'
function pageChange() {
  let page = "movies";
  if (location.hash) {
    page = location.hash.slice(1);
  }
  showPage(page);
  hideUi();
}

pageChange(); // called by default when the app is loaded for the first time

let links = document.querySelectorAll("#toogleui");

for (let item of links) {
  item.onclick = function(){
  	document.getElementById(this.getAttribute("data-selector") ).classList.toggle("show");
  }
}

let moviedelete = document.querySelector("#deletemovie");


moviedelete.onclick = function(){
    
    let deletemovies = document.querySelectorAll("#delete-movie");
    
    deletemovies.forEach(function(element){
      element.classList.toggle("show");
    });
  }
