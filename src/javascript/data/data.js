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
      title: 'Воздействие на организм',
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
};
