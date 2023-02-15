import { createElement } from '../lib/functions';
import { Footer } from './footer';
import { footerSettings } from '../data/data';
import { Content } from './content';
import { Header } from './header';
import { headerSettings } from '../data/data';

export class App {
  constructor() {
    this.app = document.querySelector('#app');
    this.init();
  }
  init() {
    this.app.append(new Header(headerSettings).element, new Content().element, new Footer(footerSettings).element);
  }

  get element() {
    return this.app;
  }
}
