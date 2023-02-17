export const footerSettings = {
  text: 'Шадрова Ольга Владимировна, класс 11 "В", ГБОУ школа №2009',
};

export const headerSettings = {
  menuItems: [
    {
      title: 'Космонавты',
      name: 'spacers',
      linkName: '/spacers',
    },
    {
      title: 'Ракеты',
      name: 'rockets',
      linkName: '/rockets',
    },
    {
      title: 'Влияние на организм',
      name: 'effect',
      linkName: '/effect',
    },
  ],
  logoIconLink: './images/logo.jpg" alt="logo"',
  logoHref: '/',
  title: 'Ольга Шадрова',
  buttonSettings: {
    className: 'button',
    addClassName: 'yellow-button',
    text: 'Cтать космонавтом',
  },
};

export const mainPageSettings = {
  previewSettings: {
    slider: {
      slides: [
        './images/slider/slider_item1.jpg',
        './images/slider/slider_item2.jpg',
        './images/slider/slider_item3.jpg',
        './images/slider/slider_item4.jpg',
        './images/slider/slider_item5.jpg',
      ],
    },
    theme: 'Влияние космического пространства на организм человека',
    slogan: 'Космонавтика имеет безграничное будущее, и ее перспективы беспредельны, как сама Вселенная.',
    sloganAuthor: 'С.П. Королев',
  },
  tematicBlock: [
    {
      image: './images/category/category_kosmo.jpg',
      title: 'Российские и советские космонавты',
      text: [
        'Юрий Гагарин – «Кедр», Алексей Леонов – «Алмаз», Сергей Крикалев – «Базальт», Светлана Савицкая – «Памир-2». Кто из детей хотя бы раз не мечтал стать космонавтом и с орбиты подать собственные позывные, которые услышит весь мир? Кому не хотелось хотя бы однажды, надев скафандр, оказаться в сверкающей бездне открытого космоса?',
        'Но какой бы романтичной ни казалась профессия космонавт, она требует очень серьезной подготовки: долгого обучения, изматывающих физических тренировок, психологического напряжения. Только выдержав все подготовительные этапы, человек может стать покорителем космоса – сильным духом и здоровьем, для которого не существует границ в пространстве и времени.',
      ],
      link: '/spacers',
      buttonText: 'Узнать подробнее',
    },
    {
      image: './images/category/category_rocket.jpg',
      title: 'Космические аппараты',
      text: [
        'Не очень длинный текст про ракеты. Не очень длинный текст про ракеты. Не очень длинный текст про ракеты',
        'Не очень длинный текст про ракеты',
      ],
      link: '/rockets',
      buttonText: 'Узнать подробнее',
    },
    {
      image: './images/category/category_experiments.jpg',
      title: 'Влияние космического пространства на организм человека',
      text: ['Не очень длинный текст про влияние космоса на организм', 'Не очень длинный текст про влияние космоса на организм'],
      link: '/effect',
      buttonText: 'Узнать подробнее',
    },
  ],
};
