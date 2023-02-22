export class Slider {
  /**
   * @description
   * @param {Array} slides компонент "Слайдер"
   */
  constructor(slides = []) {
    this.init(slides);
    this.addListeners();
    this.direction = 'next';
    // this.slidesRow.style.width = 100 * slides.length + '%';
  }

  init(slides) {
    this.slider = new DOMParser().parseFromString(this.getSliderHtmlString(), 'text/html').body.firstChild;
    this.sliderContainer = this.slider.querySelector('.slider__container');

    this.slidesRow = this.slider.querySelector('.slider__row');
    this.slidesRow.style.width = `${100 * slides.length}%`;

    this.getSliderItems(slides);
    this.getButtons();
    this.autoPlay();
  }

  getSliderHtmlString() {
    return `
    <div class="slider">
        <div class="slider__container">
            <div class="slider__row"></div>
        </div>
    </div>

    `;
  }

  getSliderItems(slides) {
    slides.forEach((slide, index, array) => {
      const slideItemSrt = `
        <div class="slider__item">
            <img src="${slide}" alt="slide" />
        </div>
        `;
      this.slideWidth = `${100 / array.length}%`;
      const slideItem = new DOMParser().parseFromString(slideItemSrt, 'text/html').body.firstChild;
      slideItem.style.width = this.slideWidth;
      this.slidesRow.append(slideItem);
    });
  }

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

  addListeners() {
    this.nextButton.addEventListener('click', this.showNextSlide.bind(this));
    this.prevButton.addEventListener('click', this.showPreviousSlide.bind(this));
    this.slidesRow.addEventListener('transitionend', this.finishAnimation.bind(this));
  }

  showNextSlide() {
    if (this.direction === 'prev') {
      this.direction = 'next';
      this.slidesRow.prepend(this.slidesRow.lastElementChild);
    }
    this.sliderContainer.style = 'justify-content: flex-start';
    this.slidesRow.style = `
        width: 500%;
        transform: translateX(-${this.slideWidth})
    `;
  }

  showPreviousSlide() {
    if (this.direction === 'next') {
      this.direction = 'prev';
      this.slidesRow.append(this.slidesRow.firstElementChild);
    }
    this.sliderContainer.style = 'justify-content: flex-end';
    this.slidesRow.style = `
        width: 500%;
        transform: translateX(${this.slideWidth})
    `;
  }

  finishAnimation() {
    this.direction === 'next' ? this.slidesRow.append(this.slidesRow.firstElementChild) : this.slidesRow.prepend(this.slidesRow.lastElementChild);

    this.slidesRow.style = `
      transition: none;
      transform: translateX(0);
      width: 500%;
    `;
    setTimeout(() => (this.slidesRow.style.transition = '0.3s'));
  }

  autoPlay() {
    setInterval(() => this.showNextSlide(), 5000);
  }

  destroy() {
    this.slider.remove();
  }

  get element() {
    return this.slider;
  }
}
