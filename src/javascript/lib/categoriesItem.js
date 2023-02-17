export class CategoriesItem {
  constructor(settings) {
    this.init(settings);
  }
  init(settings) {
    this.item = new DOMParser().parseFromString(this.getItemMarkupHtml(settings), 'text/html').body.firstChild;
  }

  getItemMarkupHtml(settings) {
    return `
    <div class="group__item">
        <div class="group__item-image">
          <img src="${settings.image}" alt="kosmo" />
        </div>
        <div class="group__item-content">
          <a href="${settings.link}" class="group__item-title">${settings.title}</a>
          <p class="group__item-description">${settings.description}</p>
        </div>
    </div>
    `;
  }

  destroy() {
    this.item.remove();
  }

  get element() {
    return this.item;
  }
}
