const STORAGE_KEY = 'theme'

export function loadTheme() {
  return localStorage.getItem(STORAGE_KEY) !== 'light'
}

export function saveTheme(isDark) {
  localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light')
}

export function toggleTheme(isDark, elements) {
  elements.forEach(el => {
    el.classList.toggle('darkmode', isDark)
    el.classList.toggle('lightmode', !isDark)
  })
}