const checkboxs = document.querySelectorAll(".checkbox");
console.log(checkboxs);
function handleCheckbox(e) {
  console.log(e.target);
  console.log(e.target.classList);
  const classList = e.target.classList;
  if (classList.length === 2) {
    classList.remove("check");
  } else {
    classList.add("check");
  }
}
checkboxs.forEach((checkbox) => {
  checkbox.addEventListener("click", handleCheckbox);
});
