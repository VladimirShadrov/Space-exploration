export class DetailPage {
  constructor(data) {
    this.init(data);
  }
  init(data) {
    this.page = new DOMParser().parseFromString(this.getPageMarkup(data), 'text/html').body.firstChild;
    this.getBreadCrumbs(data.crumbs);
    this.getPageText(data.text);
  }

  getPageMarkup(data) {
    return `
    <section class="detail">
        <div class="container">
          <div class="detail__wrapper">
            <div class="bread-crumbs"></div>
            <h2 class="detail__title">${data.title}</h2>
            <div class="detail__text-wrapper"></div>
            <div class="detail__image-wrapper">
              <img src="${data.image}" alt="image" />
            </div>
            <div class="detail__buttons">
              <button class="button yellow-button">${data.btnText}</button>
            </div>
          </div>
        </div>
    </section>
    `;
  }

  getBreadCrumbs(data) {
    const crumbsWrapper = this.page.querySelector('.bread-crumbs');

    data.forEach((crumb, index, array) => {
      if (index !== array.length - 1) {
        const crumbItem = `<a href="${crumb.link}" class="bread-crumbs__item black-color">${crumb.title}</a>`;
        crumbsWrapper.append(new DOMParser().parseFromString(crumbItem, 'text/html').body.firstChild);
      } else {
        const crumbItem = `<span class="bread-crumbs__item">${crumb.title}</span>`;
        crumbsWrapper.append(new DOMParser().parseFromString(crumbItem, 'text/html').body.firstChild);
      }
    });
  }

  getPageText(data) {
    const textWrapper = this.page.querySelector('.detail__text-wrapper');

    data.forEach((item) => {
      const paragraph = `<p class="detail__text">${item}</p>`;
      textWrapper.append(new DOMParser().parseFromString(paragraph, 'text/html').body.firstChild);
    });
  }

  destroy() {
    this.page.remove();
  }

  get element() {
    return this.page;
  }
}
