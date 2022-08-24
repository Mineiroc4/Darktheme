const chk = document.getElementById('chk')
chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})

const item = document.getElementsByClassName('item')
item.addEventListener('click', () => {
  document.body.classList.toggle('dark')
  // fazer um foreach para acessar os items
})

const container = document.getElementsByClassName('container')
item.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})
