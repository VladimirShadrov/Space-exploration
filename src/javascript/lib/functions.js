/**
 * @description Возвращает HTML элемент
 * @param {string} tagName Тег HTML, который необходимо создать
 * @param {string} className Класс, который нужно добавить элементу
 * @param {string} additionalClass Дополнительный класс, который нужно добавить элементу
 * @returns
 */
export function createElement(tagName, className = '', additionalClass = '') {
  const element = document.createElement(tagName);

  if (className) {
    element.classList.add(className);
  }

  if (additionalClass) {
    element.classList.add(additionalClass);
  }

  return element;
}
