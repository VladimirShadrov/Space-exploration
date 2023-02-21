export class TextField {
  /**
   * @typedef {Object} TextFieldConfig
   * @property {string} className CSS класс текстового поля
   * @property {string} placeholder Текст плейсхолдера
   * @property {string} fieldName Имя поля
   */

  /**
   * @param {TextFieldConfig} options Объект с настройками для текстового поля
   */
  constructor(options) {
    this.options = {
      className: '',
      placeholder: '',
      fieldName: '',
    };

    if (options) {
      this.options = Object.assign(this.options, options);
    }

    this.init();
  }
  /**
   * @description Инициализация элементов
   */
  init() {
    const textField = `<input type="text" class="${this.options.className}" placeholder="${this.options.placeholder}" />`;
    this.textField = new DOMParser().parseFromString(textField, 'text/html').body.firstChild;

    this.textField.addEventListener('input', () => (this.valid ? this.textField.classList.remove('anketa__filter__invalid') : null));
  }

  /**
   * @description Добавляет невалидному полю дополнительный класс
   */
  validate() {
    if (!this.valid) {
      this.textField.classList.add('anketa__filter__invalid');
    }
  }

  /**
   * @returns Возвращает название текстового поля
   */
  get fieldName() {
    return this.options.fieldName;
  }

  /**
   * @returns Возвращает значение текстового поля
   */
  get value() {
    return this.textField.value;
  }

  /**
   * @returns Возвращает значение заполнено поле или нет
   */
  get valid() {
    if (this.value) {
      return true;
    }

    return false;
  }

  /**
   * @returns Возвращает HTML елемент текстового поля
   */
  get element() {
    return this.textField;
  }
}
