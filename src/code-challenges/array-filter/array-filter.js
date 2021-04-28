export function fiveAndGreaterOnly(arr) {
  return arr.filter(num => num >= 5);
}

export function evensOnly(arr) {
  return arr.filter(num => (num % 2 === 0));
}

export function fiveCharactersOrFewerOnly(arr) {
  return arr.filter(str => (str.length < 6));
}

export function peopleWhoBelongToTheIlluminati(arr){
  return arr.filter(str => {
    if (str.member === true) {
      return str;
    }
  });
}

export function ofAge(arr) {
  return arr.filter(str => {
    if (str.age > 18) {
      return str;
    }
  });
}