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