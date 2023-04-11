export const toggleButton = (
  compareTarget,
  propertyValue1,
  propertyValue2,
  applyTarget,
  className1,
  className2
) => {
  if (compareTarget.type === propertyValue1) {
    compareTarget.type = propertyValue2;
    applyTarget.classList.replace(className1, className2);
  } else {
    compareTarget.type = propertyValue1;
    applyTarget.classList.replace(className2, className1);
  }
};
