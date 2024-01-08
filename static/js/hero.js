function navBackgroundColor() {
  const nav = document.querySelector('#nav')
  const alpha = (window.scrollY || window.pageYOffset) / 128
  nav.style.backgroundColor = `rgb(34, 34, 34, ${alpha})`
  nav.style.boxShadow = `0 0 1rem rgb(17, 17, 17, ${alpha})`
}
window.addEventListener('DOMContentLoaded', navBackgroundColor)
window.addEventListener('scroll', navBackgroundColor)