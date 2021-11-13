export const mapArrayObjectsByIndexes = (objectsArray, keyName='id') => {
  const objectMap = {};

  objectsArray.map((obj) => {
    objectMap[obj[keyName]] = obj;
  });

  return objectMap;
};

export const groupArrayElementsById = (objectsArray, keyName='id') => {
  const objectMap = {};

  objectsArray.map((obj) => {
    if (objectMap[obj[keyName]]) {
      objectMap[obj[keyName]].push(obj);
    } else {
      objectMap[obj[keyName]] = [obj];
    }
  });

  return objectMap;
};
