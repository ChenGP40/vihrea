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

function toLunch() {
    location.href="menus/lunch.html";
    location.reload;
}
function toDinner() {
    location.href="menus/dinner.html";
    location.reload;
}
function toBrunch() {
    location.href="menus/brunch.html";
    location.reload;
}
function toDessert() {
    location.href="menus/dessert.html";
    location.reload;
}
function toVegetarian() {
    location.href="menus/vegetarian.html";
    location.reload;
}
function toVegan() {
    location.href="menus/vegan.html";
    location.reload;
}
