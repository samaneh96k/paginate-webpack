import _, { range } from "lodash";

import { paginate } from "./paginate.js";
import "./style.css";
import img1 from "./images/1663156590-yrt07PRfUaHM6QdL.png";
import img2 from "./images/1663584046-mciSjd1g9jIwcWd4.jpg";
import img3 from "./images/1663757482-82n7T1vl3Zro3Q9M.jpg";
import img4 from "./images/1664704905-GjA0BDfLU1VG8DhO.jpg";
import img5 from "./images/1665215065-axMwwcjSK4Wzoj1s.jpg";
import img6 from "./images/1665482030-op6A1XSLXuRxn3oy.jpg";
import img7 from "./images/1665812625-TrRu29JlS4KzEQ3l.jpg";
import img8 from "./images/1665901158-teyFepPHHlOjr1RP.jpg";

const gallery = document.getElementById("gallery");
const paginationEl = document.getElementById("pagination");

const images = [img1, img2, img3, img4, img5, img6, img7, img8];
let imagesPage=[];
const totalCourse = images.length;
const perPage = 2;
const pageCount = Math.ceil(totalCourse / perPage);
let currentPage = 1;
const pages = range(1, pageCount + 1);

//create page number
function pagination() {
  pages.forEach(page => {
    const liElm = document.createElement("li");
    const linkElm = document.createElement("a");
    linkElm.innerHTML = page;
    liElm.appendChild(linkElm);
    linkElm.onclick = () => onChangePage(parseInt(page));

    paginationEl.appendChild(liElm);
  });
}

function onChangePage(page) {
  imagesPage = [];
  currentPage = page;
  updatePage();
}

const updatePage = () => {

  imagesPage = paginate(images, currentPage, perPage);
  console.log(imagesPage,"gg")
  galleryGenerator();
};

function galleryGenerator() {
  gallery.innerHTML = "";

  imagesPage.forEach(item => {
    const imgElm = document.createElement("img");
    imgElm.src = item;
    gallery.appendChild(imgElm);
  });
}

updatePage()
pagination();
