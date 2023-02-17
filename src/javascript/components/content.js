import { createElement } from '../lib/functions';
import { mainPageSettings } from '../data/data';
import { categoriesSettings } from '../data/data';
import { MainPage } from './mainPage';
import { Categories } from './categories';

export class Content {
  constructor() {
    const settings = {
      mainPageSettings,
      categoriesSettings,
    };
    this.init(settings);

    // setTimeout(() => this.mainPage.destroy(), 3000);
  }
  init(settings) {
    this.content = createElement('div', 'content');
    this.mainPage = new MainPage(settings.mainPageSettings);
    this.categories = new Categories(settings.categoriesSettings.effect);

    this.content.append(this.categories.element);
  }

  get element() {
    return this.content;
  }
}
