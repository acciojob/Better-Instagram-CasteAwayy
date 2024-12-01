const images = document.querySelectorAll(".image");
var source = null;
var sourceElement = null;
images.forEach((image) => {
  image.addEventListener("dragstart", (e) => {
    console.log("get the source");
    console.log(getComputedStyle(e.target).backgroundImage);
    source = getComputedStyle(e.target).backgroundImage;
    sourceElement = e.target;
  });

  image.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  image.addEventListener("drop", (e) => {
    e.preventDefault();
    console.log("drop");
    sourceElement.style.backgroundImage = getComputedStyle(
      e.target
    ).backgroundImage;
    e.target.style.backgroundImage = source;
  });
});
