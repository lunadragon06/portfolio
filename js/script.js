const hamburgerMenu = document.querySelector('.ham-menu');
const dropdown = document.querySelector('.drop-menu');
const dropdownMenu = document.querySelectorAll('.drop-menu div');
const dropDownLinks = document.querySelectorAll('.drop-menu div a');

hamburgerMenu.addEventListener('click',() => {
  dropdown.classList.toggle('drop-down');
  hamburgerMenu.children[0].classList.toggle('top');
  hamburgerMenu.children[1].classList.toggle('mid');
  hamburgerMenu.children[2].classList.toggle('bottom');
});

dropdownMenu.forEach(li => {
    li.addEventListener('mouseover', (e) => {
    li.style.backgroundImage = "linear-gradient(to right,#EBF5F8,#58A29F)";
    li.children[0].style.color = "white";
  });
    li.addEventListener('mouseleave', (e) => {
    li.style.backgroundImage = "linear-gradient(to right,#EBF5F8,#EBF5F8)";
    li.children[0].style.color = "#58A29F";
  });

});