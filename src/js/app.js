export default function extractArrayWithPowerSkills(obj) {
  const { special } = obj; // извлекаем массив special в одноименную переменную

  // ? Если special нет:
  if (!special) {
    return null;
  }

  // ? Если special есть:
  const arr = [];

  for (const elem of special) {
    const {
      id,
      name,
      icon,
      description = 'Описание недоступно',
    } = elem;

    arr.push({
      id,
      name,
      icon,
      description,
    });
  }

  return arr;
}