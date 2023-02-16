import { Preview } from './preview';

export class MainPage {
  /**
   * @description Объект с настройками для компонентов Preview и Categories
   * @param {Object} settings
   */
  constructor(settings) {
    this.page = document.createDocumentFragment();
    this.preview = new Preview(settings.previewSettings);
    this.categories = [];

    this.page.appendChild(this.preview.element);
  }

  destroy() {
    this.preview.destroy();
  }

  get element() {
    return this.page;
  }
}
