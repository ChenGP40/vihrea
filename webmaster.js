function triggerDropdown1() {
    let nav1 = document.getElementById("1");
    let nav2 = document.getElementById("2");
    let nav3 = document.getElementById("3");
    nav1.classList.add("show");
    nav2.classList.remove("show");
    nav3.classList.remove("show");
}
function triggerDropdown2() {
    let nav1 = document.getElementById("1");
    let nav2 = document.getElementById("2");
    let nav3 = document.getElementById("3");
    nav1.classList.remove("show");
    nav2.classList.add("show");
    nav3.classList.remove("show");
}
function triggerDropdown3() {
    let nav1 = document.getElementById("1");
    let nav2 = document.getElementById("2");
    let nav3 = document.getElementById("3");
    nav1.classList.remove("show");
    nav2.classList.remove("show");
    nav3.classList.add("show");
}
function closeDropdowns() {
    let nav1 = document.getElementById("1");
    let nav2 = document.getElementById("2");
    let nav3 = document.getElementById("3");
    nav1.classList.remove("show");
    nav2.classList.remove("show");
    nav3.classList.remove("show");
}
function explore() {
    location.href="#explore";
    location.reload;
}
function toDatabase() {
    location.href="./info.html";
    location.reload;
}
function modalPopup() {
    setTimeout(modalTrigger, 1000);

}
function modalTrigger() {
    let modal = document.getElementById("newsletterModal");
    let overlay = document.getElementById("newsletterOverlay");
    modal.classList.add("show");
    overlay.classList.add("show");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    modalAnimation();
    disableScroll();
}
function closeModal() {
    let modal = document.getElementById("newsletterModal");
    let overlay = document.getElementById("newsletterOverlay");
    modal.classList.remove("show");
    overlay.classList.remove("show");
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    enableScroll();
}
function disableScroll() {
    document.body.classList.
    add("ScrollLock");
}
function enableScroll() {
    document.body.classList
    .remove("ScrollLock");
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 20;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  }
  window.addEventListener("load", reveal);
  window.addEventListener("scroll", reveal);

window.onscroll = function() {scrollHeader()};

function scrollHeader() {
if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("scrollHeader").className = "changeHeader";
} else {
    document.getElementById("scrollHeader").className = "";
}
}

function toBrunch() {
    location.href="our-menus.html#brunch";
    location.reload;
}
function toLunch() {
    location.href="our-menus.html#lunch";
    location.reload;
}
function toDinner() {
    location.href="our-menus.html#dinner";
    location.reload;
}
function toDessert() {
    location.href="our-menus.html#dessert";
    location.reload;
}
function toVegetarian() {
    location.href="our-dishes.html#vegetarian";
    location.reload;
}
function toVegan() {
    location.href="our-dishes.html#vegan";
    location.reload;
}

// Changing between subpages (side navigation)
const brunch = document.getElementById("brunch");
const lunch = document.getElementById("lunch");
const dinner = document.getElementById("dinner");
const dessert = document.getElementById("dessert");

const brunchTop = document.getElementById("brunchTrigger");
const lunchTop = document.getElementById("lunchTrigger");
const dinnerTop = document.getElementById("dinnerTrigger");
const dessertTop = document.getElementById("dessertTrigger");

const body = document.getElementById("body");
const cursorChange = document.getElementById("cursorChange");
const reservationForm = document.getElementById("reservationForm");

let allClasses = [brunch, lunch, dinner, dessert];
let allClasses2 = [brunchTop, lunchTop, dinnerTop, dessertTop];

var submitHash = ""

function hideAll() {
allClasses.forEach(function(el) {
    el.classList.add("hidden");
})
allClasses2.forEach(function(el) {
    el.classList.remove("highlightedMenu");
})
}

document.getElementById("brunchTrigger").addEventListener("click", () => {hideAll(); triggerBrunch();})
function triggerBrunch() {
    brunch.classList.remove("hidden");
    brunchTop.classList.add("highlightedMenu");
    window.location.hash = "#brunch"
}
document.getElementById("lunchTrigger").addEventListener("click", () => {hideAll(); triggerLunch();})
function triggerLunch() {
    lunch.classList.remove("hidden");
    lunchTop.classList.add("highlightedMenu");
    window.location.hash = "#lunch"
}
document.getElementById("dinnerTrigger").addEventListener("click", () => {hideAll(); triggerDinner();})
function triggerDinner() {
    dinner.classList.remove("hidden");
    dinnerTop.classList.add("highlightedMenu");
    window.location.hash = "#dinner"
}
document.getElementById("dessertTrigger").addEventListener("click", () => {hideAll(); triggerDessert();})
function triggerDessert() {
    dessert.classList.remove("hidden");
    dessertTop.classList.add("highlightedMenu");
    window.location.hash = "#dessert"
}

window.addEventListener("load", () => {subpageChanger();})
function subpageChanger() {
    let hash = window.location.hash;
    if(hash == "") {
        triggerBrunch();
    } else if(hash == "#brunch") {
        triggerBrunch();
    } else if(hash == "#lunch") {
        triggerLunch();
    } else if(hash == "#dinner") {
        triggerDinner();
    } else {
        triggerDessert();
    } 
}



function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function loadNextForm() {
    body.classList.add("cursorWait");
    cursorChange.classList.add("cursorWait");
    await delay(3000);
    reservationForm.classList.remove("hidden");
    body.classList.remove("cursorWait");
    cursorChange.classList.remove("cursorWait");
}



