/*--================================================== PAGE GALERIE ================================================--*/
/*Evaluation: Sujet Garage - ECF DWWM (1)*/
/*Giet FRANCK Graduate Développeur PHP/Symfony Promo BECQUEREL*/
/*code passé au validator w3c, code valide: oui*/

function classToggle() {
  const navs = document.querySelectorAll(".Navbar__Items");

  navs.forEach((nav) => nav.classList.toggle("Navbar__ToggleShow"));
}

document
  .querySelector(".Navbar__Link-toggle")
  .addEventListener("click", classToggle);

/*------------------------------------------------------------------------------------------------------------------*/
/*
  function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  
  document.querySelector('.Navbar__Link-toggle')
    .addEventL
    */
/*
 */
