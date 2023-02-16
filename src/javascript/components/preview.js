import { Slider } from '../lib/slider';

export class Preview {
  /**
   * @description Объект с настройками для компонентов Preview и Slider
   * @param {Object} settings
   */

  constructor(settings) {
    this.init(settings);
  }
  init(settings) {
    this.preview = new DOMParser().parseFromString(this.getPreviewHtml(settings), 'text/html').body.firstChild;
    this.appendSlider(settings.slider.slides);
  }

  getPreviewHtml(settings) {
    return `
        <div class="preview">
          <div class="container">
            <div class="preview__container">
              <div class="preview__header">${settings.theme}</div>
              <div class="preview__wrapper">
                <div class="preview__title-wrapper">
                  <h3 class="preview__title">${settings.slogan}</h3>
                  <span class="preview__title-author">${settings.sloganAuthor}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        `;
  }

  appendSlider(slides) {
    const sliderContainer = this.preview.querySelector('.preview__wrapper');
    this.slider = new Slider(slides).element;
    sliderContainer.prepend(this.slider);
  }

  destroy() {
    this.slider.remove();
    this.preview.remove();
  }

  get element() {
    return this.preview;
  }
}
