export const palette = {
  orange: '#f77a26',
  navy: '#253048',
  green: '#c2ccc3',
  red: '#e73f1e',
  black: '#1a1a1a',
  yellow: '#eeff41',
  cream: '#f8ede7',
  grey: '#eeeeee',
  white: '#ffffff'
}

const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`
}
