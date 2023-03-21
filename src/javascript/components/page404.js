export class Page404 {
  constructor() {
    this.init();
  }
  init() {
    this.layout = new DOMParser().parseFromString(this.getPageMarkup, 'text/html').body.firstElementChild;
  }
  getPageMarkup() {
    return `
    <div class="page404">
        <h1 class="page404__title">Такой страницы не существует</h1>
    </div>
    `;
  }
  destroy() {
    this.layout.remove();
  }
  get element() {
    return this.layout;
  }
}
