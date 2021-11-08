export const MEDIAS = {
  forMobileResolution:`@media (max-width: ${600}px)`,
  forTabletResolution:`@media (max-width: ${960}px)`,
  forHdResolution:`@media (max-width: ${1280}px)`,
  forCustomResolution: size => `@media (max-width: ${size}px)`
};