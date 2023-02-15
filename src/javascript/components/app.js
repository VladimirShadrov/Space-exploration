import { createElement } from '../lib/functions';
import { Footer } from './footer';
import { footerSettings } from '../data/data';

export class App {
  constructor() {
    this.app = document.querySelector('#app');
    this.init();
  }
  init() {
    const content = createElement('div', 'content');

    this.app.append(content, new Footer(footerSettings).element);
  }

  get element() {
    return this.app;
  }
}
