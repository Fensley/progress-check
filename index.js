const allspan = document.querySelectorAll("span");

allspan.forEach((each, index) =>
  each.addEventListener("click", function () {
    for (let i = 0; i < allspan.length; i++)
      if (i <= index) {
        allspan[i].classList.add("active");
      } else {
        allspan[i].classList.remove("active");
      }
  })
);
