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


// Sơn
const colorOptions = document.querySelectorAll('.color-option');
const carPreview = document.querySelector('.car-preview');

colorOptions.forEach(colorOption => {
  colorOption.addEventListener('click', () => {
    const selectedColor = colorOption.getAttribute('data-color');
    carPreview.style.backgroundColor = selectedColor;
  });
});

//Son
const motors = [];

// Ảnh xe 1
const motor0 = [];
motor0.push({ Info: "The owner of a white car is usually an extremely orderly person, who values ​​order and honesty both in personal and professional life.", imgURL: "./color_xe/1.png" });

//Ảnh xe 2
const motor1 = [];
motor0.push({ Info: "Gray is often associated with formality, wisdom and understanding; Therefore, users of gray cars are often said to be pragmatic, conservative, elegant and self-contained.", imgURL: "./color_xe/2.png" });

// Ảnh xe 3
const motor2 = [];
motor0.push({ Info: "Driving a black car often sends out a message in the perception that the owner is a powerful and confident person who can control their own world well.", imgURL: "./color_xe/3.png" });

//Ảnh xe 4
const motor3 = [];
motor0.push({ Info: "Strong personality, ambitious, full of passion and inspiration. This is the type of person who likes to do things quickly, is enthusiastic at work and often focuses on personal interests.", imgURL: "./color_xe/4.png" });

motors.push(motor0);
motors.push(motor1);
motors.push(motor2);
motors.push(motor3);

function pickColor(i, j) {
  document.getElementById("Color").src = motors[i][j].imgURL;
  document.getElementById("Info").innerHTML = motors[i][j].Info;
}

// Trường
document.getElementById('searchInput').addEventListener('input', function () {
  var searchValue = this.value.toLowerCase();
  var productItems = document.getElementsByClassName('Card');

  for (var i = 0; i < productItems.length; i++) {
    var productItem = productItems[i];
    var productName = productItem.querySelector('.Card_model-name').innerText.toLowerCase();
    var productPrice = productItem.querySelector('.Card_Number').innerText.toLowerCase();

    if (productName.indexOf(searchValue) > -1 || productPrice.indexOf(searchValue) > -1) {
      productItem.style.display = 'block';
    } else {
      productItem.style.display = 'none';
    }
  }
});

