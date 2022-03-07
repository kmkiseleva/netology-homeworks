export default function getArray(object) {
  const {
    special: [...rest],
  } = object;

  return rest.map((item) => {
    const { description = 'Описание недоступно', ...data } = item;
    return { ...data, description };
  });
}
