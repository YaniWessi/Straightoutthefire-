export const reduceArray = ( arrVals, arrKey, initVal ) => arrVals.reduce( ( accumulator, cur ) => accumulator + cur[arrKey], initVal );


export const getUniqueKeys = (arrVals, objKey) => 
  [...new Set(arrVals.map((item) => item[objKey]))]


export const filterArray = (arrVals, filterKey, filterCondition) => arrVals.filter((item) => item[filterKey] === filterCondition);

export const findArrayObject = (arrVals, filterKey, filterCondition) => arrVals.find((item) => item[filterKey] === filterCondition);