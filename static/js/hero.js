function navBackgroundColor() {
  const nav = document.querySelector('#nav')
  const alpha = (window.scrollY || window.pageYOffset) / 128
  nav.style.backgroundColor = `rgb(34, 34, 34, ${alpha})`
}
window.addEventListener('DOMContentLoaded', navBackgroundColor)
window.addEventListener('scroll', navBackgroundColor)