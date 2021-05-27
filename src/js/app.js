const button = document.querySelector('.btn');
const popover = document.querySelector('.popover');
let count = 0;
button.addEventListener('click', () => {
  if (!count) {
    popover.classList.remove('dis');
    count = 1;
  } else {
    popover.classList.add('dis');
    count = 0;
  }
});
