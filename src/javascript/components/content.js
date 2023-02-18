import { createElement } from '../lib/functions';
import { mainPageSettings } from '../data/data';
import { categoriesSettings } from '../data/data';
import { MainPage } from './mainPage';
import { Categories } from './categories';
import { DetailPage } from './detailPage';

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
    this.categoriesPage = new Categories(settings.categoriesSettings.effect);
    this.detailsPage = new DetailPage(settings.categoriesSettings.spacers.blocks[3].details);

    this.content.append(this.detailsPage.element);
  }

  get element() {
    return this.content;
  }
}
