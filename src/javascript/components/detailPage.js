import { Modal } from './modal';
import { Slider } from '../lib/slider';
import { Button } from '../lib/button';

export class DetailPage {
  /**
   * @typedef {Object} CrumbsData
   * @property {string} link Ссылка, которая будет отображена в адресной строке браузера
   * @property {string} title Название хлебной крошки
   */

  /**
   * @typedef {Object} PageOptons
   * @property {string} id ID компонента
   * @property {CrumbsData[]} crumbs Массив объектов для настройки хлебных крошек
   * @property {string} title Заголовок страницы
   * @property {string[]} text Массив с текстом для отображения на странице
   * @property {string} image Ссылка на картинку для страницы
   * @property {string} btnText Текст кнопки
   * @property {string[]} slides Массив ссылок на изображения для слайдера
   */

  /**
   * @param {PageOptons} options Объект с настройками для страницы
   */
  constructor(options) {
    this.options = {
      id: '',
      crumbs: [],
      title: '',
      text: [],
      image: '',
      btnText: '',
      slides: [],
    };

    if (options) {
      this.options = Object.assign(this.options, options);
    }
    this.init();
  }
  /**
   * @description Инициализация элементов страницы
   */
  init() {
    this.page = new DOMParser().parseFromString(this.getPageMarkup(), 'text/html').body.firstChild;
    this.addBreadCrumbs(this.options.crumbs);
    this.addTextToPage(this.options.text);
    this.addGaleryButton();
  }

  /**
   * @returns Разметка страницы в строковом формате
   */
  getPageMarkup() {
    return `
    <section class="detail">
        <div class="container">
          <div class="detail__wrapper">
            <div class="bread-crumbs"></div>
            <h2 class="detail__title">${this.options.title}</h2>
            <div class="detail__text-wrapper"></div>
            <div class="detail__image-wrapper">
              <img src="${this.options.image}" alt="image" />
            </div>
            <div class="detail__buttons"></div>
          </div>
        </div>
    </section>
    `;
  }

  /**
   * @description Добавляет элементы навигации "Хлебные крошки"
   * @param {CrumbsData[]} data Массив настроек для отрисовки "Хлебных крошек"
   */
  addBreadCrumbs(data) {
    const crumbsWrapper = this.page.querySelector('.bread-crumbs');

    data.forEach((crumb, index, array) => {
      if (index !== array.length - 1) {
        const crumbItem = `<a href="${crumb.link}" class="bread-crumbs__item black-color">${crumb.title}</a>`;
        crumbsWrapper.append(new DOMParser().parseFromString(crumbItem, 'text/html').body.firstChild);
      } else {
        const crumbItem = `<span class="bread-crumbs__item">${crumb.title}</span>`;
        crumbsWrapper.append(new DOMParser().parseFromString(crumbItem, 'text/html').body.firstChild);
      }
    });
  }

  /**
   * @description Добавляет текст на страницу
   * @param {string[]} data Массив для отрисовки параграфов с текстом
   */
  addTextToPage(data) {
    const textWrapper = this.page.querySelector('.detail__text-wrapper');

    data.forEach((item) => {
      const paragraph = `<p class="detail__text">${item}</p>`;
      textWrapper.append(new DOMParser().parseFromString(paragraph, 'text/html').body.firstChild);
    });
  }

  /**
   * @description Добавляет кнопку открытия окна "Галерея"
   */
  addGaleryButton() {
    const buttonWrapper = this.page.querySelector('.detail__buttons');
    this.galeryButton = new Button(
      {
        className: 'button',
        addClassName: 'yellow-button',
        text: this.options.btnText,
      },
      this.showSlides.bind(this)
    );
    buttonWrapper.append(this.galeryButton.element);
  }

  /**
   * @description Открывает окно со слайдером
   */
  showSlides() {
    new Modal(this.options.title, new Slider(this.options.slides).element);
  }

  /**
   * @description уничтожает компонент сраницы
   */
  destroy() {
    this.page.remove();
  }

  /**
   * @returns HTML разметка страницы
   */
  get element() {
    return this.page;
  }
}
