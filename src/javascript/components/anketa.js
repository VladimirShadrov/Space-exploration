import { TextField } from '../lib/testField';
import { Button } from '../lib/button';
import { Modal } from './modal';

export class Anketa {
  constructor() {
    this.init();
  }
  /**
   * @description Инициализация элементов
   */
  init() {
    this.anketa = new DOMParser().parseFromString(this.getAnketaMarkup(), 'text/html').body.firstChild;
    this.addFilters(this.filterOptions);
    this.addButton();
    this.modal = new Modal('Заявка в космонавты', this.element);
  }

  /**
   * @returns Разметка анкеты
   */
  getAnketaMarkup() {
    return `
    <div class="anketa">
     <div class="anketa__content">
       <div class="anketa__image-wrapper">
         <img src="./images/anketa.jpg" alt="image" />
       </div>
       <div class="anketa__filters-wrapper">
          <h3 class="anketa__title">Заполните все поля!</h3>
          <div class="anketa__filters">
   
          <div class="anketa__buttons-wrapper"></div>
       </div>
     </div>
   </div>
`;
  }

  /**
   * @returns Разметка поздравления о приеме анкеты
   */
  getResultMarkup() {
    return `
       <div class="anketa">
         <div class="anketa__content">
           <div class="anketa__result" >
             <h3 class="anketa__result-title">${this.filters.firstName.value}, подзравляем!</h3>
             <p class="anketa__result-text">
               Ваша заявка на поступление в отряд космонавтов принята. В ближайшее время мы рассмотрим Вашу кандидатуру и о результатах
               сообщим в школу №${this.filters.school.value}.
             </p>
           </div>
         </div>
       </div>
    `;
  }

  addFilters(filterArr) {
    const filtersContainer = this.anketa.querySelector('.anketa__filters');
    this.filters = {};

    filterArr.forEach((filter) => {
      this.filters[filter.fieldName] = new TextField(filter);
      filtersContainer.prepend(this.filters[filter.fieldName].element);
    });
  }

  /**
   * @description Добавляет кнопку приемя заявки
   */
  addButton() {
    const buttonContainer = this.anketa.querySelector('.anketa__buttons-wrapper');
    const btnConfig = {
      className: 'button',
      addClassName: 'yellow-button',
      text: 'Подать заявку',
    };
    this.button = new Button(btnConfig, this.acceptAnketa.bind(this));
    buttonContainer.append(this.button.element);
  }

  /**
   * @description Проводит валидация полей блока фильтров, и в случае успеха выводит сообщение о приеме заявки
   */
  acceptAnketa() {
    Object.values(this.filters).forEach((filter) => {
      filter.validate();
    });

    if (Object.values(this.filters).every((filter) => filter.valid)) {
      const result = new DOMParser().parseFromString(this.getResultMarkup(), 'text/html').body.firstChild;

      this.modal.addContent(result);
    }
  }

  /**
   * @returns Возвращает массив с настройками полей блока фильтров
   */
  get filterOptions() {
    return [
      {
        className: 'anketa__filter',
        placeholder: 'Класс',
        fieldName: 'class',
      },
      {
        className: 'anketa__filter',
        placeholder: 'Номер школы',
        fieldName: 'school',
      },
      {
        className: 'anketa__filter',
        placeholder: 'Имя',
        fieldName: 'firstName',
      },
      {
        className: 'anketa__filter',
        placeholder: 'Фамилия',
        fieldName: 'lastName',
      },
    ];
  }

  /**
   * @returns HTML анкеты
   */
  get element() {
    return this.anketa;
  }
}
