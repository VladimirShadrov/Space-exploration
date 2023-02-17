export class TematicBlock {
  constructor(settings) {
    this.init(settings);
  }
  init(settings) {
    this.block = new DOMParser().parseFromString(this.getBlockHtmlString(settings), 'text/html').body.firstChild;
    this.addTextToBlock(settings);
  }

  getBlockHtmlString(settings) {
    return `
    <section class="category">
    <div class="container">
      <div class="category__wrapper">
        <div class="category__content-wrapper">
          <div class="category__left">
            <div class="category__image">
              <img src="${settings.image}" alt="category_image" />
            </div>
          </div>
          <div class="category__right">
            <div class="category__title-wrapper">
              <h2 class="category__title">${settings.title}</h2>
            </div>
            <div class="category__text-wrapper">
            </div>
            <div class="category__buttons-wrapper">
            <a href="${settings.link}" class="link-button link-button__yellow">${settings.buttonText}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
  }

  addTextToBlock(settings) {
    const textWrapper = this.block.querySelector('.category__text-wrapper');

    settings.text.forEach((paragraph) => {
      const textMarkup = `<p class="category__text">${paragraph}</p>`;
      textWrapper.append(new DOMParser().parseFromString(textMarkup, 'text/html').body.firstChild);
    });
  }

  destroy() {
    this.block.remove();
  }

  get element() {
    return this.block;
  }
}
