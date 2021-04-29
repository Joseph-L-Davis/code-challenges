export function getArrayOfKeysAndValues(obj) {
  const newObj = Object.entries(obj);
  return newObj;
}

export function sortedArraysByValuesLength(obj) {
  const ageObj = Object.entries(obj);
  return ageObj.sort((a, b) => {
    if (b[0].length > a[0].length) return 1;
    if (b[0].length < a[0].length) return -1;
    return 0;
  });
}

