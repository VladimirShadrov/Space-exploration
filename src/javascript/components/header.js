import { Button } from '../lib/button';
import { Anketa } from './anketa';

export class Header {
  /**
   * @typedef {Object} ButtonsObj
   * @property {string} className Класс CSS для кнопки
   * @property {string} addClassName Дополнительный класс CSS для кнопки
   * @property {string} text Текст на кнопке
   */

  /**
   * @typedef {Object} MenuItemsArr
   * @property {string} title Текс элемента меню
   * @property {string} name Имя элемента меню
   * @property {string} linkName Ссылка для атрибура href
   */

  /**
   * @typedef {Object} HeaderOptions
   * @property {MenuItemsArr} menuItems Массив элементов меню десктоп
   * @property {MenuItemsArr} mobileMenuItems Массив элементов мобильного меню
   * @property {string} logoIconLink Ссылка на изображение для логотипа
   * @property {string} logoHref Ссылка для атрибура href
   * @property {string} title Заголовок Header
   * @property {ButtonsObj} buttonSettings Объект с настройками для кнопки
   */

  /**
   * @param {HeaderOptions} options
   */
  constructor(options) {
    this.options = {
      menuItems: [],
      mobileMenuItems: [],
      logoIconLink: '',
      logoHref: '/#',
      title: '',
      buttonSettings: {},
    };

    if (options) {
      this.options = Object.assign(this.options, options);
    }

    this.button = new Button(this.options.buttonSettings);

    this.init();
  }

  /**
   * @description Инициализация элементов, установка слушателей событий
   */
  init() {
    this.header = new DOMParser().parseFromString(this.getHeaderHtmlString(this.options), 'text/html').body.firstChild;

    const headerButton = this.header.querySelector('.header__btn');
    headerButton.append(new Button(this.options.buttonSettings, this.fillQuestionnaire).element);

    const mobileHeaderButton = this.header.querySelector('.mobile-header__btn');
    mobileHeaderButton.append(new Button(this.options.buttonSettings).element);

    this.addMenuItems();

    this.mobileMenu = this.header.querySelector('.mobile-menu');
    this.mobileMenuShowButton = this.header.querySelector('.mobile-header__menu');
    this.mobileMenuShowButton.addEventListener('click', this.showMobileMenu.bind(this));

    this.mobileMenuHideButton = this.header.querySelector('.mobile-menu__close');
    this.mobileMenuHideButton.addEventListener('click', this.hideMobileMenu.bind(this));
  }

  /**
   * @returns Разметка компонента в строковом формате
   */
  getHeaderHtmlString() {
    return `
    <header class="header">
        <div class="container">
            <div class="header__content-wrapper">
            <div class="header__wrapper">
                <div class="header__logo">
                <a href="${this.options.logoHref}" class="header__logo-link">
                    <img src="${this.options.logoIconLink}" alt="logo" />
                </a>
                </div>
                <div class="header__title">${this.options.title}</div>
                <div class="header__btn">  </div>
                
            </div>
            <div class="menu"></div>
            </div>
        </div>
        <div class="mobile-header">
            <div class="mobile-header__menu">
                <div class="mobile-menu__line"></div>
            </div>
            <div class="mobile-header__title">${this.options.title}</div>
            <div class="mobile-header__btn">  </div>
            <div class="mobile-menu mobile-menu__hidden">
                <div class="mobile-menu__head">
                    <div class="mobile-menu__close"></div>
                </div>
            <div class="mobile-menu__content"></div>
          </div>
        </div>
      </header>
    `;
  }

  /**
   * @description Добавляет элементы десктопного и мобильного меню
   */
  addMenuItems() {
    const mainMenuContainter = this.header.querySelector('.menu');
    const mobileMenuContainter = this.header.querySelector('.mobile-menu__content');

    this.options.menuItems.forEach((item) => {
      const menuItem = new DOMParser().parseFromString(`<a href="${item.linkName}" class="menu__item" >${item.title}</a>`, 'text/html').body
        .firstChild;

      mainMenuContainter.append(menuItem);
    });

    this.options.mobileMenuItems.forEach((item) => {
      const menuItem = new DOMParser().parseFromString(`<a href="${item.linkName}" class="mobile-menu__item" >${item.title}</a>`, 'text/html').body
        .firstChild;

      mobileMenuContainter.append(menuItem);
      menuItem.addEventListener('click', this.hideMobileMenu.bind(this));
    });
  }

  /**
   * @description Скрывает мобильное меню
   */
  hideMobileMenu() {
    this.mobileMenu.classList.add('mobile-menu__hidden');
  }

  /**
   * @description Отображает мобильное меню
   */
  showMobileMenu() {
    this.mobileMenu.classList.remove('mobile-menu__hidden');
  }

  /**
   * @description Инициализация и отображение заявки в отряд космонавтов
   */
  fillQuestionnaire() {
    new Anketa();
  }

  /**
   * @returns Возвращает разметку компонента
   */
  get element() {
    return this.header;
  }
}
