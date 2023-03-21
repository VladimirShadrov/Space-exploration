export class Page404 {
  constructor() {
    this.init();
  }
  init() {
    const markup = `
    <div class="page404">
        <h1 class="page404__title">Такой страницы не существует</h1>
    </div>
    `;
    this.layout = new DOMParser().parseFromString(markup, 'text/html').body.firstChild;
  }
  destroy() {
    this.layout.remove();
  }
  get element() {
    return this.layout;
  }
}
