import { CategoriesItem } from '../lib/categoriesItem';

export class Categories {
  /**
   * @typedef {Object} CrumbsObj
   * @property {string} title Заголовок "Хлебной крошки"
   * @property {string | null} link Ссылка, которая будет отображена в адесной строке браузера
   */

  /**
   * @typedef {Object} BlocksObj
   * @property {string} id ИД компонента
   * @property {string} image Ссылка на изображение
   * @property {string} title Заголовок компонента
   * @property {string} description Краткий текст с описанием
   * @property {string} link Ссылка, которая будет отображена в адесной строке браузера
   */

  /**
   * @typedef {Object} CategoriesObj
   * @property {string} mainImage Главное изображение на странице
   * @property {CrumbsObj[]} crumbs Массив с настройками для "Хлебных крошек"
   * @property {string} title Заголовок страницы
   * @property {string} text Текстовый контент
   * @property {BlocksObj[]} blocks Массив с настройками для блоков с персонами
   */

  /**
   * @param {CategoriesObj} options
   */
  constructor(options) {
    this.options = {
      mainImage: '',
      crumbs: [],
      title: '',
      text: '',
      blocks: [],
    };

    if (options) {
      this.options = Object.assign(this.options, options);
    }
    this.init();
  }
  /**
   * @description Инициализация компонента
   */
  init() {
    this.category = new DOMParser().parseFromString(this.getCategoryMarkup(), 'text/html').body.firstChild;
    this.appendCrumbs(this.options.crumbs);
    this.appendCategorisItem(this.options.blocks);
  }

  /**
   * @returns Разметка компонента в виде строки
   */
  getCategoryMarkup() {
    return `
    <section class="group">
        <div class="container">
          <div class="group__wrapper">
            <div class="group__image-wrapper">
              <img src="${this.options.mainImage}" alt="bg"  />
            </div>
            <div class="group__content">
              <div class="bread-crumbs"></div>
              <h2 class="group__title">${this.options.title}</h2>
              <p class="grop__text">${this.options.text}</p>
              <div class="group__items"></div>
            </div>
          </div>
        </div>
    </section>
    `;
  }

  /**
   * @description Добавляет "Хлебные крошки" на страницу
   * @param {CrumbsObj[]} settings Массив объектов для отрисовки хлебных крошек
   */
  appendCrumbs(settings) {
    const crumbsWrapper = this.category.querySelector('.bread-crumbs');

    settings.forEach((crumb, index, array) => {
      if (index !== array.length - 1) {
        const crumbElem = `
            <a href="${crumb.link}" class="bread-crumbs__item white-color">${crumb.title}</a>
            `;
        crumbsWrapper.append(new DOMParser().parseFromString(crumbElem, 'text/html').body.firstChild);
      } else {
        const crumbElem = `
        <span class="bread-crumbs__item white-color">${crumb.title}</span>
        `;
        crumbsWrapper.append(new DOMParser().parseFromString(crumbElem, 'text/html').body.firstChild);
      }
    });
  }

  /**
   * @description Добавляет блоки с персонами
   * @param {BlocksObj[]} settings Массив для отрисовки блоков с персонами
   */
  appendCategorisItem(settings) {
    const wrapper = this.category.querySelector('.group__items');

    settings.forEach((block) => wrapper.append(new CategoriesItem(block).element));
  }

  /**
   * @description Уничтожает компонент
   */
  destroy() {
    this.category.remove();
  }

  /**
   * @returns HTML разметка компонента
   */
  get element() {
    return this.category;
  }
}
