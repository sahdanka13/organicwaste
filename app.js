let menu_sec = document.getElementById("menu_sec");
let left_arrow = document.getElementById("left_arrow");
let right_arrow = document.getElementById("right_arrow");

right_arrow.addEventListener("click", () => {
  menu_sec.scrollLeft += 115;
});

left_arrow.addEventListener("click", () => {
  menu_sec.scrollLeft -= 115;
});

let videos = document.getElementsByTagName("video")[0];
let plays = document.getElementsByClassName("play")[0];
let pauses = document.getElementsByClassName("pause")[0];
let screens = document.getElementsByClassName("screen")[0];

plays.addEventListener("click", () => {
  videos.play();
  plays.style.display = "none";
  screens.style.display = "none";
  pauses.style.display = "flex";
});
pauses.addEventListener("click", () => {
  videos.pause();
  plays.style.display = "flex";
  screens.style.display = "flex";
  pauses.style.display = "none";
});
videos.addEventListener("ended", () => {
  plays.style.display = "flex";
  screens.style.display = "flex";
  pauses.style.display = "none";
});

const dataload = () => {
  const sec_title = document.getElementById("sec_title");
  const h6_dot = document.getElementsByTagName("h6");

  setTimeout(() => {
    sec_title.innerHTML = " INDONESIA <br>BSF <br>SUPPLIER";
    h6_dot[1].classList.add("head_dots_main");
    h6_dot[2].classList.remove("head_dots_main");
    h6_dot[3].classList.remove("head_dots_main");
    h6_dot[4].classList.remove("head_dots_main");
  }, 0000);
  setTimeout(() => {
    sec_title.innerHTML = " INDONESIA <br>MAGGOT <br>SUPPLIER";
    h6_dot[1].classList.remove("head_dots_main");
    h6_dot[2].classList.add("head_dots_main");
    h6_dot[3].classList.remove("head_dots_main");
    h6_dot[4].classList.remove("head_dots_main");
  }, 1500);
  setTimeout(() => {
    sec_title.innerHTML = " INDONESIA <br>LARVA <br>SUPPLIER";
    h6_dot[1].classList.remove("head_dots_main");
    h6_dot[2].classList.remove("head_dots_main");
    h6_dot[3].classList.add("head_dots_main");
    h6_dot[4].classList.remove("head_dots_main");
  }, 2950);
};

setInterval(dataload, 5500);

dataload();

const menu_icon = document.getElementById("menu_icon");
const nav_ul_list = document.getElementById("nav_ul_list");

menu_icon.addEventListener("click", () => {
  menu_icon.classList.toggle("humburger");
  nav_ul_list.classList.toggle("menu_ul_list_java");
});
