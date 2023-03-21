import { createElement } from '../lib/functions';
import { mainPageData } from '../data/data';
import { categoriesPageData } from '../data/data';
import { detailPageData } from '../data/data';
import { Page404 } from './page404';

import { routes } from '../router/routes';
import { router } from '../router/router';

export class Content {
  constructor() {
    const settings = {
      mainPageData,
      categoriesPageData,
      detailPageData,
    };
    this.routes = routes;

    this.init(settings);
  }
  init(settings) {
    this.content = createElement('div', 'content');

    this.pageData;
    this.detailsData;
    this.id = null;
    this.activePage;

    this.start(settings);
  }

  start(settings) {
    if (this.routes) {
      this.initRoutes(settings);
    }
  }

  initRoutes(settings) {
    window.addEventListener('hashchange', this.renderRoute.bind(this, settings));
    this.renderRoute(settings);
  }

  renderRoute(settings) {
    const url = router.getUrl();
    const route = routes.find((rout) => rout.path === url);

    if (this.activePage) {
      this.activePage.destroy();
    }

    if (route) {
      window.scrollTo(0, 0);

      switch (url) {
        case '':
          this.pageData = settings.mainPageData;
          this.appendHtml(route, this.pageData);
          break;
        case 'spacers':
        case 'rockets':
        case 'effect':
          this.pageData = settings.categoriesPageData[url];
          this.appendHtml(route, this.pageData);
          break;
        default:
          const detailData = settings.detailPageData.find((block) => block.id === url);
          this.appendHtml(route, detailData);
          break;
      }
    } else {
      this.show404page();
    }
  }

  appendHtml(route, data) {
    this.activePage = new route.component(data);
    this.content.append(this.activePage.element);
  }

  show404page() {
    this.activePage = new Page404();
    this.content.innerHTML = '';
    this.content.append(this.activePage.element);
  }

  get element() {
    return this.content;
  }
}
