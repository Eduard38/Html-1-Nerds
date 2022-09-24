var modal = document.querySelector('.modal');
var modalButtonOpen = document.querySelector('.contacts-button');
var modalButtonClose = document.querySelector('.button-close');
modalButtonOpen.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.add('modal-show');
});
modalButtonClose.addEventListener('click', function() {
    modal.classList.remove('modal-show');
});

// document.addEventListener('click', function() {
//     modal.classList.remove('modal-show');
// });
