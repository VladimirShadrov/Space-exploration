import { createElement } from '../lib/functions';
import { Button } from '../lib/button';

export class Header {
  constructor(settings) {
    // this.header = createElement('header', 'header');
    this.button = new Button(settings.buttonSettings);

    this.init(settings);
  }
  init(settings) {
    this.header = new DOMParser().parseFromString(this.getHeaderHtmlString(settings), 'text/html').body.firstChild;

    const headerButton = this.header.querySelector('.header__btn');
    headerButton.append(new Button(settings.buttonSettings).element);

    const mobileHeaderButton = this.header.querySelector('.mobile-header__btn');
    mobileHeaderButton.append(new Button(settings.buttonSettings).element);

    this.addMenuItems(settings);
  }

  getHeaderHtmlString(settings) {
    return `
    <header class="header">
        <div class="container">
            <div class="header__content-wrapper">
            <div class="header__wrapper">
                <div class="header__logo">
                <a href="${settings.logoHref}" class="header__logo-link">
                    <img src="${settings.logoIconLink}" alt="logo" />
                </a>
                </div>
                <div class="header__title">${settings.title}</div>
                <div class="header__btn">  </div>
                
            </div>
            <div class="menu"></div>
            </div>
        </div>
        <div class="mobile-header">
            <div class="mobile-header__menu">
                <div class="mobile-menu__line"></div>
            </div>
            <div class="mobile-header__title">${settings.title}</div>
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

  addMenuItems(config) {
    const mainMenuContainter = this.header.querySelector('.menu');
    const mobileMenuContainter = this.header.querySelector('.mobile-menu__content');

    config.menuItems.forEach((item) => {
      const menuItem = new DOMParser().parseFromString(`<a href="${item.linkName}" class="menu__item" >${item.title}</a>`, 'text/html').body
        .firstChild;

      mainMenuContainter.append(menuItem);
    });

    config.menuItems.forEach((item) => {
      const menuItem = new DOMParser().parseFromString(`<a href="${item.linkName}" class="mobile-menu__item" >${item.title}</a>`, 'text/html').body
        .firstChild;

      mobileMenuContainter.append(menuItem);
    });
  }

  get element() {
    return this.header;
  }
}
