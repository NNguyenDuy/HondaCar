// Menu Navbar Respontive
let menubar = document.querySelector('#menu-bar');
let navbar = document.querySelector('.nav-bar');
menubar.addEventListener('click', toggleBar);

function toggleBar() {
  navbar.classList.toggle('active');
}

// Header scroll
window.onscroll = () => {
  let header = document.querySelector(".header");
  let activeMovePage = document.querySelector(".active-move-page");
  let sticky = header.offsetTop;
  const divElement = document.createElement('div');
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    activeMovePage.classList.add("MovePage");
  } else {
    header.classList.remove("sticky");
    activeMovePage.classList.remove("MovePage");
  }
}

// Header user
let userNav = document.querySelector(".nav-bar-account");
document.querySelectorAll(".user-active").forEach(function (element) {
  element.addEventListener("click", hihi);
});

function hihi() {
  userNav.style.opacity = "1";
  userNav.style.display = "block";
}

document.getElementById("button-user").onclick = () => {
  userNav.style.opacity = "0";
  userNav.style.display = "none";
};

// Choose car
let sizeC = 2, localC = 0;
const images = document.querySelectorAll(".st3-car img");
document.querySelector("#choose-carR").onclick = () => {
  if (sizeC < 5) {
    localC += 49;
    sizeC += 1;
    if (sizeC != 5) {
      images.forEach((img) => {
        img.style.transform = `translateX(-${localC}rem)`;
      });
    }
    changeSAO(sizeC, '-');
  }
};

document.querySelector("#choose-carL").onclick = () => {
  if (sizeC >= 2) {
    localC -= 49;
    sizeC -= 1;
    images.forEach((img) => {
      img.style.transform = `translateX(-${localC}rem)`;
    });
    changeSAO(sizeC, '+');
  }
};

function changeSAO(value, operator) {
  document.getElementById(`imgcar${value}`).style.opacity = "1";
  document.getElementById(`imgcar${value}`).style.width = "40rem";
  document.getElementById(`imgcar${eval(value + operator + 1)}`).style.opacity = "0.5";
  document.getElementById(`imgcar${eval(value + operator + 1)}`).style.width = "36rem";
}




