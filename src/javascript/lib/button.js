import { createElement } from './functions';

export class Button {
  /**
   * @param {Object} config Объект конфигурации. Содержит: Класс, дополнительный класс, текст кнопки
   * @param {Function} callback Функция, которая будет вызвана в момент клика по кнопке
   */
  constructor(config, callback = {}) {
    this.button = createElement('button', config.className, config.addClassName);
    this.button.innerText = config.text;

    if (callback) {
      this.button.addEventListener('click', callback);
    }
  }
  get element() {
    return this.button;
  }
}
