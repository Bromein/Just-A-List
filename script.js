const input = document.querySelector('input');

const submit = document.querySelector('button');

submit.addEventListener('click', () => addItem());
input.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    addItem()
  }
});
const li = document.querySelectorAll('li');


li.forEach(item => item.addEventListener('click', () => item.classList.toggle('done')));

// grab the input from the input box and create a new li element with it
const addItem = () => {
  if (input.value) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.addEventListener('click', () => li.classList.toggle('done'));
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = '';
  }
}