import { Button } from '../lib/button';

export class Modal {
  constructor() {
    this.init();
    this.addDefautlButton();
    this.addListeners();
  }
  init() {
    this.modal = new DOMParser().parseFromString(this.getModalMarkup(), 'text/html').body.firstChild;
    this.title = this.modal.querySelector('.modal__title');
    this.content = this.modal.querySelector('.modal__content');
    this.actions = this.modal.querySelector('.modal__actions');
    this.closeIconBtn = this.modal.querySelector('.modal__close');
    this.show();
  }

  addListeners() {
    this.closeIconBtn.addEventListener('click', this.hide.bind(this));
    // this.modal.addEventListener('click', this.hide.bind(this));
  }

  getModalMarkup() {
    return `
        <div class="modal hidden">
           <div class="modal__wrapper">
             <div class="modal__header">
               <div class="modal__title">Анкета в космонавты</div>
               <div class="modal__close"></div>
             </div>
             <div class="modal__content"></div>
             <div class="modal__actions"></div>
           </div>
         </div>
        `;
  }

  addDefautlButton() {
    const actionButton = new Button({ className: 'button', addClassName: 'yellow-button', text: 'Закрыть' }, this.hide.bind(this));
    this.actions.append(actionButton.element);
  }

  show() {
    document.body.append(this.modal);
    setTimeout(() => this.modal.classList.remove('hidden'), 0);
  }

  hide(event) {
    // event.isTrusted = false;
    console.log(event.currentTarget);
    event.stopPropagation();
    this.modal.classList.add('hidden');
    setTimeout(() => this.modal.remove(), 300);
  }

  get element() {
    return this.modal;
  }
}
