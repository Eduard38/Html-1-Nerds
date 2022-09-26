const modal = document.querySelector('.modal');
const form = modal.querySelector('form');
const modalButtonOpen = document.querySelector('.contacts-button');
const modalButtonClose = document.querySelector('.button-close');
const login = modal.querySelector('[name=login]');
const mail = modal.querySelector('[name=mail]');
var isStorageSupport = true;
const storage = '';

try {
    storage = localStorage.getItem('login');
} catch(err) {
    isStorageSupport = false;
}

modalButtonOpen.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.add('modal-show');
    if (storage) {
        login.value = storage;
        mail.focus();
    } else {
        login.focus();
    }
});

modalButtonClose.addEventListener('click', function() {
    modal.classList.remove('modal-show');
    modal.classList.remove('modal-error');
});

form.addEventListener('submit', function(evt) {
    if (!login.value || !mail.value) {
        evt.preventDefault();
        modal.classList.add('modal-error');
    } else {
        localStorage.setItem('login', login.value);
    }
});
window.addEventListener('keydown', function(evt) {
    if (evt.key === 'Escape') {
        modal.classList.remove('modal-show');
    }
});

