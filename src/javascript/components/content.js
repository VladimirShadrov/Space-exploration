import { createElement } from '../lib/functions';
import { mainPageSettings } from '../data/data';
import { MainPage } from './mainPage';

export class Content {
  constructor() {
    const settings = mainPageSettings;
    this.init(settings);
  }
  init(settings) {
    this.content = createElement('div', 'content');
    this.mainPage = new MainPage(settings);

    this.content.append(this.mainPage.element);
  }

  get element() {
    return this.content;
  }
}
