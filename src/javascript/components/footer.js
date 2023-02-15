import { createElement } from '../lib/functions';

export class Footer {
  /**
   * @param {Object} settings Объект с настройками
   */
  constructor(settings) {
    this.defs = {
      text: '',
    };
    if (settings) {
      this.defs = Object.assign(this.defs, settings);
    }

    this.init();
  }
  init() {
    this.layout = createElement('footer', 'footer');
    const container = createElement('div', 'container');
    const content = createElement('div', 'footer__content');

    if (this.defs.text) {
      content.innerText = this.defs.text;
    }

    container.append(content);
    this.layout.append(container);
  }

  get element() {
    return this.layout;
  }
}
