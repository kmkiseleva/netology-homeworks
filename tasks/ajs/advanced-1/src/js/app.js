export default function orderByProps(obj, propsForOrder) {
  const orderedPartArray = [];
  const defaultSortedArray = [];

  for (const prop of propsForOrder) {
    if (prop in obj) {
      orderedPartArray.push({
        key: prop,
        value: obj[prop],
      });
    }
  }

  for (const key in obj) {
    if (!propsForOrder.includes(key)) {
      defaultSortedArray.push({
        key,
        value: obj[key],
      });
      defaultSortedArray.sort((a, b) => a.key.localeCompare(b.key));
    }
  }

  return [...orderedPartArray, ...defaultSortedArray];
}
