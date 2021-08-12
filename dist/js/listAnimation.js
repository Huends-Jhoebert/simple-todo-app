export function showHide(idName) {
   // ! if checkbox is check show the delete button
   if (document.querySelector(`#${idName}`).checked) {
      var getBtn = (document.querySelector(
         `#${idName}`
      ).parentNode.parentNode.childNodes[2].style.display = "inline");
   } else if (document.querySelector(`#${idName}`).checked == false) {
      // ! else hide the button
      var getBtn = (document.querySelector(
         `#${idName}`
      ).parentNode.parentNode.childNodes[2].style.display = "none");
   }
}
