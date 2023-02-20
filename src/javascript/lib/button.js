import { createElement } from './functions';

export class Button {
  /**
   * @typedef {Object} BtnConfig
   * @property {string} className Основной класс
   * @property {string} addClassName Дополнительный класс
   * @property {string} text Текст кнопки
   */

  /**
   * @param {BtnConfig} config Объект конфигурации. Содержит: Класс, дополнительный класс, текст кнопки
   * @param {Function} callback Функция, которая будет вызвана в момент клика по кнопке
   */
  constructor(config, callback) {
    this.config = {
      className: '',
      addClassName: '',
      text: '',
    };

    this.callback = callback;

    if (config) {
      this.config = Object.assign(this.config, config);
    }

    this.button = createElement('button', this.config.className, this.config.addClassName);
    this.button.innerText = this.config.text;

    if (this.callback) {
      this.button.addEventListener('click', this.callback);
    }
  }

  /**
   * @description Изменяет доступность кнопки
   */
  set disabled(val) {
    this.button.disabled = val;
  }

  /**
   * @returns HTML кнопки
   */
  get element() {
    return this.button;
  }
}
