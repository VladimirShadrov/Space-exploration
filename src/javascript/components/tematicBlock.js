export class TematicBlock {
  /**
   * @typedef {Object} TematicBlockObj
   * @property {string} image Ссылка на картинку
   * @property {string} title Заголовок
   * @property {string[]} text Массив для создания параграфов с текстом
   * @property {string} link Ссылка, которая будет отображена с адресной строке браузера
   * @property {string} buttonText Текст для кнопки блока
   */

  /**
   * @param {TematicBlockObj} options
   */
  constructor(options) {
    this.options = {
      image: '',
      title: '',
      text: [],
      link: '',
      buttonText: '',
    };

    if (options) {
      this.options = Object.assign(this.options, options);
    }
    this.init(this.options);
  }

  /**
   * @description Инициализация элементов страницы
   */
  init(settings) {
    this.block = new DOMParser().parseFromString(this.getBlockHtmlString(), 'text/html').body.firstChild;
    this.addTextToBlock(settings);
  }

  /**
   * @returns Разметка страницы в строковом формате
   */
  getBlockHtmlString() {
    return `
    <section class="category">
    <div class="container">
      <div class="category__wrapper">
        <div class="category__content-wrapper">
          <div class="category__left">
            <div class="category__image">
              <img src="${this.options.image}" alt="category_image" />
            </div>
          </div>
          <div class="category__right">
            <div class="category__title-wrapper">
              <h2 class="category__title">${this.options.title}</h2>
            </div>
            <div class="category__text-wrapper">
            </div>
            <div class="category__buttons-wrapper">
            <a href="${this.options.link}" class="link-button link-button__yellow">${this.options.buttonText}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
  }

  /**
   * @description Добавляет текст в компонент
   * @param {string[]} data Массив для отрисовки параграфов с текстом
   */
  addTextToBlock(settings) {
    const textWrapper = this.block.querySelector('.category__text-wrapper');

    settings.text.forEach((paragraph) => {
      const textMarkup = `<p class="category__text">${paragraph}</p>`;
      textWrapper.append(new DOMParser().parseFromString(textMarkup, 'text/html').body.firstChild);
    });
  }

  /**
   * @description уничтожает экземпляр компонента сраницы
   */
  destroy() {
    this.block.remove();
  }

  /**
   * @returns HTML разметка страницы
   */
  get element() {
    return this.block;
  }
}
