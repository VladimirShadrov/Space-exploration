import { CategoriesItem } from '../lib/categoriesItem';

export class Categories {
  constructor(settings) {
    this.init(settings);
  }
  init(settings) {
    this.category = new DOMParser().parseFromString(this.getCategoryMarkup(settings), 'text/html').body.firstChild;
    this.appendCrumbs(settings);
    this.appendCategorisItem(settings);
  }

  getCategoryMarkup(settings) {
    return `
    <section class="group">
        <div class="container">
          <div class="group__wrapper">
            <div class="group__image-wrapper">
              <img src="${settings.mainImage}" alt="bg"  />
            </div>
            <div class="group__content">
              <div class="bread-crumbs"></div>
              <h2 class="group__title">${settings.title}</h2>
              <p class="grop__text">${settings.text}</p>
              <div class="group__items"></div>
            </div>
          </div>
        </div>
    </section>
    `;
  }

  appendCrumbs(settings) {
    const crumbsWrapper = this.category.querySelector('.bread-crumbs');

    settings.crumbs.forEach((crumb, index, array) => {
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

  appendCategorisItem(settings) {
    const wrapper = this.category.querySelector('.group__items');

    settings.blocks.forEach((block) => wrapper.append(new CategoriesItem(block).element));
  }

  destroy() {
    this.category.remove();
  }

  get element() {
    return this.category;
  }
}
