export function getArrayOfKeysAndValues(obj) {
  const newObj = Object.entries(obj);
  return newObj;
}

export function sortedArraysByValuesLength(obj) {
  const newObj = Object.entries((obj));
  return newObj.sort((a, b) => b.length - a.length);

}

// export function sortedKeys(obj) {
//   const newObj = Object.keys((obj));
//   return newObj.sort((a, b) => a.length - b.length);
// }