import { Slider } from '../lib/slider';

export class Preview {
  /**
   * @typedef {Object} SliderObj
   * @property {string[]} slides Массив путей к изображениям
   */

  /**
   * @typedef {Object} PreviewOptionsObj
   * @property {SliderObj} slider Объект с настройками для слайдера
   * @property {string} theme Тема курсовой работы
   * @property {string} slogan Слоган
   * @property {string} sloganAuthor Автор слогана
   */

  /**
   * @description Объект с настройками для компонентов Preview и Slider
   * @param {PreviewOptionsObj} options
   */

  constructor(options) {
    this.options = {
      slider: {},
      theme: '',
      slogan: '',
      sloganAuthor: '',
    };
    if (options) {
      this.options = Object.assign(this.options, options);
    }
    this.init();
  }

  /**
   * @description Инициализация элементов страницы
   */
  init() {
    this.preview = new DOMParser().parseFromString(this.getPreviewHtml(), 'text/html').body.firstChild;
    this.appendSlider(this.options.slider.slides);
  }

  /**
   * @returns Разметка страницы в строковом формате
   */
  getPreviewHtml() {
    return `
        <div class="preview">
          <div class="container">
            <div class="preview__container">
              <div class="preview__header">${this.options.theme}</div>
              <div class="preview__wrapper">
                <div class="preview__title-wrapper">
                  <h3 class="preview__title">${this.options.slogan}</h3>
                  <span class="preview__title-author">${this.options.sloganAuthor}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        `;
  }

  /**
   * @description Добавляет слайдер на страницу
   * @param {SliderObj} slides Массив с путями к изображениям для слайдера
   */
  appendSlider(slides) {
    const sliderContainer = this.preview.querySelector('.preview__wrapper');
    this.slider = new Slider(slides);
    sliderContainer.prepend(this.slider.element);
    this.slider.autoPlay(5000);
  }

  /**
   * @description уничтожает экземпляр компонента сраницы
   */
  destroy() {
    this.slider.destroy();
    this.preview.remove();
  }

  /**
   * @returns HTML разметка страницы
   */
  get element() {
    return this.preview;
  }
}
