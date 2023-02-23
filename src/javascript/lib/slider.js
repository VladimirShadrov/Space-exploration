export class Slider {
  /**
   * @description
   * @param {string[]} slides Массив путей к изображениям
   */
  constructor(slides = []) {
    this.slides = slides;
    this.init();
    this.addEventListeners();
    this.direction = 'next';
  }

  /**
   * @description Инициализация элементов слайдера
   */
  init() {
    this.slider = new DOMParser().parseFromString(this.getSliderHtmlString(), 'text/html').body.firstChild;
    this.sliderContainer = this.slider.querySelector('.slider__container');
    this.slidesRow = this.slider.querySelector('.slider__row');
    this.slidesRow.style.width = this.slidesRowWidth;

    this.addSliderItems();
    this.getButtons();
  }

  /**
   * @returns Разметку слайдера в виде строки
   */
  getSliderHtmlString() {
    return `
    <div class="slider">
        <div class="slider__container">
            <div class="slider__row"></div>
        </div>
    </div>
    `;
  }

  /**
   * @description Добаляет слайды в слайдер
   */
  addSliderItems() {
    this.slides.forEach((slide) => {
      const slideItemSrt = `
        <div class="slider__item">
            <img src="${slide}" alt="slide" />
        </div>
        `;
      const slideItem = new DOMParser().parseFromString(slideItemSrt, 'text/html').body.firstChild;
      slideItem.style.width = this.slideWidth;
      this.slidesRow.append(slideItem);
    });
  }

  /**
   * @description Создает кнопки слайдера и добавляет их в разметку
   */
  getButtons() {
    const buttonContainer = this.slider.querySelector('.slider__container');
    const btnPrev = `
    <button class="slider__btn-prev">
        <img src="./images/slider/btn_prev.png" alt="button" />
    </button>    
    `;

    const btnNext = `
    <button class="slider__btn-next">
        <img src="./images/slider/btn_next.png" alt="button" />
    </button>
    `;

    this.prevButton = new DOMParser().parseFromString(btnPrev, 'text/html').body.firstChild;
    this.nextButton = new DOMParser().parseFromString(btnNext, 'text/html').body.firstChild;
    buttonContainer.append(this.prevButton, this.nextButton);
  }

  /**
   * @description Добавляет слушатели событий
   */
  addEventListeners() {
    this.eventListeners.forEach((listener) => {
      listener.targetItem.addEventListener(listener.event, listener.callback.bind(this));
    });
  }

  /**
   * @description Удаляет слушатели событий
   */
  removeEventListeners() {
    this.eventListeners.forEach((listener) => {
      listener.targetItem.removeEventListener(listener.event, listener.callback);
    });
  }

  /**
   * @description Показывает следующий слайд
   */
  showNextSlide() {
    if (this.direction === 'prev') {
      this.direction = 'next';
      this.slidesRow.prepend(this.slidesRow.lastElementChild);
    }
    this.buttonsDisabled = true;
    this.sliderContainer.style = 'justify-content: flex-start';
    this.slidesRow.style = `
        width: ${this.slidesRowWidth};
        transform: translateX(-${this.slideWidth})
    `;
  }

  /**
   * @description Показывает предыдущий слайд
   */
  showPreviousSlide() {
    if (this.direction === 'next') {
      this.direction = 'prev';
      this.slidesRow.append(this.slidesRow.firstElementChild);
    }
    this.buttonsDisabled = true;
    this.sliderContainer.style = 'justify-content: flex-end';
    this.slidesRow.style = `
        width: ${this.slidesRowWidth};
        transform: translateX(${this.slideWidth})
    `;
  }

  /**
   * @description Переставляет слайды и ленту слайдов. Выполняется по окончании анимации
   */
  finishAnimation() {
    this.direction === 'next' ? this.slidesRow.append(this.slidesRow.firstElementChild) : this.slidesRow.prepend(this.slidesRow.lastElementChild);

    this.slidesRow.style = `
      transition: none;
      transform: translateX(0);
      width: ${this.slidesRowWidth};
    `;
    this.buttonsDisabled = false;
    setTimeout(() => (this.slidesRow.style.transition = '0.3s'));
  }

  /**
   * @description Воспроизводит показ следующего слайда в автоматическом режиме с заданным интервалом
   * @param {number} delay Задержка, с которой будет производится смена слайдов
   */
  autoPlay(delay) {
    setInterval(() => this.showNextSlide(), delay);
  }

  /**
   * @description Уничтожает экземпляр компонента и удаляет слушатели событий
   */
  destroy() {
    this.removeEventListeners();
    this.slider.remove();
  }

  /**
   * @description Управляет доступностью кнопок слайдера
   * @param {boolean} value Значение доступности кнопок слайдера
   */
  set buttonsDisabled(value) {
    this.sliderButtons.forEach((button) => (button.disabled = value));
  }

  /**
   * @returns Массив кнопок слайдера
   */
  get sliderButtons() {
    return [this.nextButton, this.prevButton];
  }

  /**
   * @returns Ширина слайда
   */
  get slideWidth() {
    return `${100 / this.slides.length}%`;
  }

  /**
   * @returns Ширина ленты слайдов
   */
  get slidesRowWidth() {
    return `${100 * this.slides.length}%`;
  }

  /**
   * @returns Массив для установки/удаления слушателей событий
   */
  get eventListeners() {
    return [
      {
        targetItem: this.nextButton,
        event: 'click',
        callback: this.showNextSlide,
      },
      {
        targetItem: this.prevButton,
        event: 'click',
        callback: this.showPreviousSlide,
      },
      {
        targetItem: this.slidesRow,
        event: 'transitionend',
        callback: this.finishAnimation,
      },
    ];
  }

  /**
   * @returns HTML разметка слайдера
   */
  get element() {
    return this.slider;
  }
}
