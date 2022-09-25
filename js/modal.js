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
        password.focus();
    } else {
        login.focus();
    }
});

modalButtonClose.addEventListener('click', function() {
    modal.classList.remove('modal-show');
});

form.addEventListener('submit', function(evt) {
    if (!login.value || !password.value) {
        evt.preventDefault();
    } else {
        localStorage.setItem('login', login.value);
    }
});
window.addEventListener('keydown', function(evt) {
    if (evt.key === 'Escape') {
        modal.classList.remove('modal-show');
    }
});

