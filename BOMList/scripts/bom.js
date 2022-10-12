// alert('success')
const ulist = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const inputItem = input.value;
  input.value = '';

  const list = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');

  list.appendChild(listText);
  listText.textContent = inputItem;
  list.appendChild(listBtn);
  listBtn.textContent = '❌';
  ulist.append(list);

  listBtn.addEventListener('click' , () => {
    ulist.removeChild(list);
  });
  input.focus();
});