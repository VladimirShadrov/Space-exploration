import { createElement } from '../lib/functions';

export class Content {
  constructor() {
    this.init();
  }
  init() {
    this.content = createElement('div', 'content');
  }

  get element() {
    return this.content;
  }
}
