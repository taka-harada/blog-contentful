export const breakpoints = {
  sm: 414,
  md: 808,
  lg: 1024,
  xl: 1280,
}

export const mediaQueries = key => {
  return style => `@media (max-width: ${breakpoints[key]}px) { ${style} }`
}