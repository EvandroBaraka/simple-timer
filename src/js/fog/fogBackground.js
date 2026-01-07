import { fogThemes } from './fogConfig.js'

let vantaEffect = null

export function initFog(isDark) {
  if (vantaEffect) vantaEffect.destroy()

  const theme = isDark ? fogThemes.dark : fogThemes.light

  vantaEffect = VANTA.FOG({
    el: '#body-fog',
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200,
    minWidth: 200,
    ...theme
  })
}