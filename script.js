const dragSource = document.querySelectorAll(".container>*");

var source = null;
var sourceElement = null;

dragSource.forEach((element) => {
  element.addEventListener("dragstart", (e) => {
    sourceElement = e.target; //soucrce ele
    source = e.target.src; // source img
    console.log(e.target.parentElement);
    console.log(e.target.src);
  });

  element.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("dragover start");
  });

  element.addEventListener("drop", (e) => {
    e.preventDefault();
    console.log("drop");
    const targetElement = e.target.parentElement;
    const targetImageSrc = e.target.src;
    e.target.src = source;
    sourceElement.src = targetImageSrc;

    console.log(e.target.parentElement);
    console.log();
    [
      sourceElement.parentElement.children[0].textContent,
      e.target.parentElement.children[0].textContent,
    ] = [
      e.target.parentElement.children[0].textContent,
      sourceElement.parentElement.children[0].textContent,
    ];
  });
});
