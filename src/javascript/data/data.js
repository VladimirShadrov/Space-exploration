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

export const categoriesSettings = {
  spacers: {
    mainImage: './images/group/panorama1.jpg',
    crumbs: [
      { title: 'Главная', link: '' },
      { title: 'Космонавты', link: null },
    ],
    title: 'Космонавты',
    text: 'На этой странице можно узнать о знаменитых космонавтах',
    blocks: [
      {
        image: './images/group/spacers/gagarin/gagarin1.jpg',
        title: 'Юрий Алексеевич Гагарин',
        description: 'Первый человек в космосе',
        link: '/spacers/gagarin',
      },
      {
        image: './images/group/spacers/titov/titov3.jpg',
        title: 'Герман Степанович Титов',
        description: 'Первый человек, совершивший длительный космический полет',
        link: '/spacers/titov',
      },
      {
        image: './images/group/spacers/leonov/leonov4.jpg',
        title: 'Алексей Архипович Леонов',
        description: 'Первый человек в открытом космосе',
        link: '/spacers/leonov',
      },
      {
        image: './images/group/spacers/savitskaya/savitskaya1.jpg',
        title: 'Светлана Евгеньевна Савицкая',
        description: 'Первая женщина, вышедшая в открытый космос',
        link: '/spacers/savitskaya',
      },
    ],
    details: {},
  },
  rockets: {
    mainImage: './images/group/panorama2.jpg',
    crumbs: [
      { title: 'Главная', link: '' },
      { title: 'Космические аппараты', link: null },
    ],
    title: 'Космические аппараты',
    text: 'На этой странице можно узнать о космических аппаратах',
    blocks: [
      {
        image: './images/group/spacers/gagarin/gagarin1.jpg',
        title: 'Юрий Алексеевич Гагарин',
        description: 'Первый человек в космосе',
        link: '/spacers/gagarin',
      },
      {
        image: './images/group/spacers/titov/titov3.jpg',
        title: 'Герман Степанович Титов',
        description: 'Первый человек, совершивший длительный космический полет',
        link: '/spacers/titov',
      },
      {
        image: './images/group/spacers/leonov/leonov4.jpg',
        title: 'Алексей Архипович Леонов',
        description: 'Первый человек в открытом космосе',
        link: '/spacers/leonov',
      },
      {
        image: './images/group/spacers/savitskaya/savitskaya1.jpg',
        title: 'Светлана Евгеньевна Савицкая',
        description: 'Первая женщина, вышедшая в открытый космос',
        link: '/spacers/savitskaya',
      },
    ],
    details: {},
  },
  effect: {
    mainImage: './images/group/panorama3.jpg',
    crumbs: [
      { title: 'Главная', link: '' },
      { title: 'Влияние на организм', link: null },
    ],
    title: 'Влияние космического пространства на организм человека',
    text: 'На этой странице можно узнать о влиянии космического пространства на организм человека',
    blocks: [
      {
        image: './images/group/spacers/gagarin/gagarin1.jpg',
        title: 'Юрий Алексеевич Гагарин',
        description: 'Первый человек в космосе',
        link: '/spacers/gagarin',
      },
      {
        image: './images/group/spacers/titov/titov3.jpg',
        title: 'Герман Степанович Титов',
        description: 'Первый человек, совершивший длительный космический полет',
        link: '/spacers/gagarin',
      },
      {
        image: './images/group/spacers/leonov/leonov4.jpg',
        title: 'Алексей Архипович Леонов',
        description: 'Первый человек в открытом космосе',
        link: '/spacers/gagarin',
      },
      {
        image: './images/group/spacers/savitskaya/savitskaya1.jpg',
        title: 'Светлана Евгеньевна Савицкая',
        description: 'Первая женщина, вышедшая в открытый космос',
        link: '/spacers/gagarin',
      },
    ],
    details: {},
  },
};
