function showImage(element) {
  const largeImage = document.getElementById("largeImage");
  const largeImageContainer = document.getElementById("largeImageContainer");
  largeImage.src = element.src;
  largeImageContainer.style.display = "flex";
}

document.getElementById("largeImageContainer").onclick = function () {
  this.style.display = "none";
};
