export class Slider {
  /**
   * @description
   * @param {Array} slides компонент "Слайдер"
   */
  constructor(slides = []) {
    this.init(slides);
  }

  init(slides) {
    this.slider = new DOMParser().parseFromString(this.getSliderHtmlString(), 'text/html').body.firstChild;
    this.getSliderItems(slides);
    this.getButtons();
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
    const slidesRow = this.slider.querySelector('.slider__row');
    slides.forEach((slide) => {
      const slideItem = `
        <div class="slider__item">
            <img src="${slide}" alt="slide" />
        </div>
        `;
      slidesRow.append(new DOMParser().parseFromString(slideItem, 'text/html').body.firstChild);
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

  destroy() {
    this.slider.remove();
  }

  get element() {
    return this.slider;
  }
}
