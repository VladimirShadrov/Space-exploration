import { Button } from '../lib/button';

export class Modal {
  /**
   * @param {string} title Заголовок модального окна
   * @param {HTMLElement} content Контент модального окна
   */
  constructor(title = '', content = null) {
    this.title = title;
    this.content = content;
    this.init();
    this.addDefautlButton();
    this.addListeners();
  }
  /**
   * @description Инициализация элементов модального окна
   */
  init() {
    this.modal = new DOMParser().parseFromString(this.getModalMarkup(), 'text/html').body.firstChild;
    this.titleContainer = this.modal.querySelector('.modal__title');
    this.contentContainer = this.modal.querySelector('.modal__content');
    this.actions = this.modal.querySelector('.modal__actions');
    this.closeIconBtn = this.modal.querySelector('.modal__close');
    this.show();

    if (this.title) {
      this.addTitle(this.title);
    }

    if (this.content) {
      this.addContent(this.content);
    }
  }

  /**
   * @description Добавляет слушатели событий
   */
  addListeners() {
    this.closeIconBtn.addEventListener('click', this.hide.bind(this));
  }

  /**
   * @returns Возвращает разметку модального окна
   */
  getModalMarkup() {
    return `
        <div class="modal hidden">
           <div class="modal__wrapper">
             <div class="modal__header">
               <div class="modal__title"></div>
               <div class="modal__close"></div>
             </div>
             <div class="modal__content"></div>
             <div class="modal__actions"></div>
           </div>
         </div>
        `;
  }

  /**
   * @description Добавляет кнопку по-умолчанию "Закрыть"
   */
  addDefautlButton() {
    const actionButton = new Button({ className: 'button', addClassName: 'yellow-button', text: 'Закрыть' }, this.hide.bind(this));
    this.actions.append(actionButton.element);
  }

  /**
   * @description Встраивает модальное окно в DOM дерево и отображает его
   */
  show() {
    document.body.append(this.modal);
    setTimeout(() => this.modal.classList.remove('hidden'), 0);
  }

  /**
   * @description Удаляет окно из DOM дерева
   */
  hide() {
    this.modal.classList.add('hidden');
    setTimeout(() => this.modal.remove(), 300);
  }

  /**
   * @description Добавляет заголовок модального окна
   * @param {string} title Заголовок
   */
  addTitle(title) {
    if (title) {
      this.titleContainer.innerText = title;
    } else {
      this.titleContainer.innerText = '';
    }
  }

  /**
   * @description Добавляет контент
   * @param {HTMLElement} content Контент, который нужно добавить в окно
   */
  addContent(content) {
    if (content && content instanceof HTMLElement) {
      this.contentContainer.innerHTML = '';
      this.contentContainer.append(content);
    }
  }

  /**
   * @description Возвращает разметку модального окна
   */
  get element() {
    return this.modal;
  }
}
