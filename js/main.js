// Header nav
document.getElementById("verhicles-car").onclick = function () {
  let vehicles = document.getElementById("vehicles-info").style.opacity;
  if (vehicles == 1) {

    document.getElementById("vehicles-info").style.opacity = 0;
    document.getElementById("vehicles-info").style.visibility = "hidden";
  }
  else {
    document.getElementById("vehicles-info").style.opacity = 1;
    document.getElementById("vehicles-info").style.visibility = "visible";
  }
}

// Main-banner
let changeBannerLeft = document.querySelector('.swiper-arrow-icon-left');
let changeBannerRight = document.querySelector('.swiper-arrow-icon-right');
let banner = document.querySelector('.main-banner');
let topBanner = document.querySelector('.top-main');
let textBanner = document.querySelectorAll('.text-banner-content');
let numberBn = 1;

changeBannerLeft.onclick = function () {
  numberBn++;

  // Ẩn text banner sau khi đổi slide
  if (numberBn >= 2) {
    for (let i = 0; i < textBanner.length; i++) {
      textBanner[i].style.display = 'none';
    }
  } else {
    for (let i = 0; i < textBanner.length; i++) {
      textBanner[i].style.display = 'block';
    }
  }

  // Chèn video vào banner
  if (numberBn == 3) {
    let video = document.createElement('video');
    video.src = 'https://nnguyenduy.github.io/HondaCar/images/banner-video.mp4';
    video.autoplay = true;
    video.loop = true;
    video.style.objectFit = 'cover'; // hoặc '100%'
    video.style.width = '100vw'; // hoặc '100%'
    video.style.height = '100vh'; // hoặc '100%'
    banner.appendChild(video);
    numberBn = 0;
  } else {
    banner.style.backgroundImage = `url('https://nnguyenduy.github.io/HondaCar/images/banner${numberBn}-index.avif')`;
    // Xóa video khi quay lại slide đầu tiên
    if (banner.children.length > 1) {
      banner.removeChild(banner.children[1]);
    }
  }
};
