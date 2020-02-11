export const canAddValue = (items, value) => items.indexOf(value) === -1;

export const arrayWithValueAdded = (items, value) => [...items, value];

export const removeItem = (item, array) => {
  const newArray = array.filter(value => value !== item);
  return newArray;
};

export const getMinimumAmount = n => {
  const min = Math.pow(n, 2);
  if (n > 3) {
    return min - 1;
  }
  return min;
};

export const getRandomizedCopyOfArray = array => {
  const arrayCopy = [...array];
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
  }
  return arrayCopy;
};

export const insertFreeSpace = array => {
  const indexOfCenter = array.length / 2;
  return [
    ...array.slice(0, indexOfCenter),
    'FREE',
    ...array.slice(indexOfCenter),
  ];
};

export const createObject = value => {
  const obj = {
    value: value,
    marked: false,
  };
  return obj;
};

export const createArrayOfObjects = array => array.map(e => createObject(e));

export const getNewBingoArray = (array, size) => {
  // randomize the array
  const randomized = getRandomizedCopyOfArray(array);
  const min = getMinimumAmount(size);
  let result = randomized;
  if (randomized.length > min) {
    // take only first min items
    result = randomized.slice(0, min);
  }
  if (size > 3) {
    // insert free space
    result = insertFreeSpace(randomized);
  }
  return createArrayOfObjects(result);
};

export const getUpdatedCard = (index, array) => {
  const copy = [...array];
  const newObj = {
    value: copy[index].value,
    marked: !copy[index].marked,
  };
  copy[index] = newObj;
  return copy;
};

export const delay = () => new Promise(resolve => setTimeout(resolve, 2000));
