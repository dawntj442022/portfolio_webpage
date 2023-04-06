const categories = document.querySelectorAll(".category");

categories.forEach((category) => {
  category.addEventListener("click", () => {
    category.classList.toggle("active");
    categories.forEach((c) => {
      if (c !== category) {
        c.classList.remove("active");
      }
    });
  });
});
