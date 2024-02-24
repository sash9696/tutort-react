
//problems in vanilla js
//1. spaghetti code that is hard to maintain

const guestsEl = document.querySelector('.guests');
const guestsPickerEl = document.querySelector('.picker');

guestsEl.addEventListener('click', function(){
    guestsEl.classList.toggle('inactive');
    guestsEl.classList.toggle('active');

});

if(guestsPickerEl.style.display == ' block'){
    guestsPickerEl.style.display = 'none';

    guestsEl.firstElementChild.textContent = 'Add guests';
}else{
    guestsPickerEl.style.display = 'block';

    guestsEl.firstElementChild.textContent = '';
}

//2. Data state is stored in the dom , shared across entire application
//hard to debug

