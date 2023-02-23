export class CategoriesItem {
  /**
   * @typedef {Object} DataObj
   * @property {string} id ИД компонента
   * @property {string} image Ссылка на изображение
   * @property {string} title Заголовок компонента
   * @property {string} description Краткий текст с описанием
   * @property {string} link Ссылка, которая будет отображена в адесной строке браузера
   */

  /**
   * @param {DataObj} options Объект с настройками для компонента
   */
  constructor(options) {
    this.options = {
      id: '',
      image: '',
      title: '',
      description: '',
      link: '',
    };

    if (options) {
      this.options = Object.assign(this.options, options);
    }
    this.init();
  }

  /**
   * @description Инициализация элементов компонента
   */
  init() {
    this.item = new DOMParser().parseFromString(this.getItemMarkupHtml(), 'text/html').body.firstChild;
  }

  /**
   * @returns Разметка компонента в виде строки
   */
  getItemMarkupHtml() {
    return `
    <div class="group__item">
        <div class="group__item-image">
          <img src="${this.options.image}" alt="kosmo" />
        </div>
        <div class="group__item-content">
          <a href="${this.options.link}" class="group__item-title">${this.options.title}</a>
          <p class="group__item-description">${this.options.description}</p>
        </div>
    </div>
    `;
  }

  /**
   * @description Уничтожение компонента
   */
  destroy() {
    this.item.remove();
  }

  /**
   * @returns HTML разметка компонента
   */
  get element() {
    return this.item;
  }
}
