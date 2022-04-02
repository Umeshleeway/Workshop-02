const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
  `<img src="./img/rampro.avif" alt="" />`
  title.innerHTML = 'About represent of  God Rama'
  excerpt.innerHTML =
    'Rama symbolizes a model of reason, right action, and desirable virtues'
  profile_img.innerHTML =
    `<img src="./img/ram.jpg" alt="" />`
  name.innerHTML = 'Ram'
  date.innerHTML = 'Oct 18, 2000'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}