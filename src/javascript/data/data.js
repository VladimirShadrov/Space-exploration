export const footerSettings = {
  text: 'Шадрова Ольга Владимировна, класс 11 "В", ГБОУ школа №2009',
};

export const headerSettings = {
  menuItems: [
    {
      title: 'Космонавты',
      name: 'spacers',
      linkName: '/#spacers',
    },
    {
      title: 'Ракеты',
      name: 'rockets',
      linkName: '/#rockets',
    },
    {
      title: 'Влияние на организм',
      name: 'effect',
      linkName: '/#effect',
    },
  ],
  mobileMenuItems: [
    {
      title: 'Главная',
      name: 'main',
      linkName: '/#',
    },
    {
      title: 'Космонавты',
      name: 'spacers',
      linkName: '/#spacers',
    },
    {
      title: 'Ракеты',
      name: 'rockets',
      linkName: '/#rockets',
    },
    {
      title: 'Влияние на организм',
      name: 'effect',
      linkName: '/#effect',
    },
  ],
  logoIconLink: './images/logo.jpg" alt="logo"',
  logoHref: '/#',
  title: 'Ольга Шадрова',
  buttonSettings: {
    className: 'button',
    addClassName: 'yellow-button',
    text: 'Cтать космонавтом',
  },
};

export const mainPageData = {
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
      link: '/#spacers',
      buttonText: 'Узнать подробнее',
    },
    {
      image: './images/category/category_rocket.jpg',
      title: 'Космические аппараты',
      text: [
        'Человек - земное существо, но сколько веков и тысячелетий бы не прошло, его все так же манит небесная даль звезд и планет, и в прошлом веке наконец многовековая мечта осуществилась: с помощью технологий мы не только запустили научно-исследовательское оборудование в далекие космические дали, но и сами смогли высадиться за пределами планеты Земля, успешно "погуляв" по Луне и вернувшись обратно.',
      ],
      link: '/#rockets',
      buttonText: 'Узнать подробнее',
    },
    {
      image: './images/category/category_experiments.jpg',
      title: 'Влияние космического пространства на организм человека',
      text: [
        'Тема космического пространства и возможности жизни в нём никогда не потеряет своей актуальности, ведь космос - это неизвестность, которая таит в себе много нового, разгадка которого может вывести человечество на новый уровень развития.',
        'Однако человеку, изъявившему желание полететь в космос, во время полёта и после приземления на Землю предстоит столкнуться с множеством трудностей.',
      ],
      link: '/#effect',
      buttonText: 'Узнать подробнее',
    },
  ],
};

export const categoriesPageData = {
  spacers: {
    mainImage: './images/group/panorama1.jpg',
    crumbs: [
      { title: 'Главная', link: '/#' },
      { title: 'Космонавты', link: null },
    ],
    title: 'Космонавты',
    text: 'Среди всех достижений человечества, вызывающих гордость, особое место занимают подвиги российских космонавтов. Для многих поколений космонавты были человеческим идеалом – героями, покорителями местности, о которой нам мало что известно, смелыми и мужественными. До сих пор в школьных сочинениях дети пишут, что мечтают стать космонавтами.',
    blocks: [
      {
        id: 'spacers/gagarin',
        image: './images/group/spacers/gagarin/gagarin1.jpg',
        title: 'Юрий Алексеевич Гагарин',
        description: 'Первый человек в космосе',
        link: '/#spacers/gagarin',
      },
      {
        id: 'spacers/titov',
        image: './images/group/spacers/titov/titov3.jpg',
        title: 'Герман Степанович Титов',
        description: 'Первый человек, совершивший длительный космический полет',
        link: '/#spacers/titov',
      },
      {
        id: 'spacers/leonov',
        image: './images/group/spacers/leonov/leonov4.jpg',
        title: 'Алексей Архипович Леонов',
        description: 'Первый человек в открытом космосе',
        link: '/#spacers/leonov',
      },
      {
        image: './images/group/spacers/savitskaya/savitskaya1.jpg',
        title: 'Светлана Евгеньевна Савицкая',
        description: 'Первая женщина, вышедшая в открытый космос',
        link: '/#spacers/savitskaya',
      },
    ],
  },
  rockets: {
    mainImage: './images/group/panorama2.jpg',
    crumbs: [
      { title: 'Главная', link: '/#' },
      { title: 'Космические аппараты', link: null },
    ],
    title: 'Космические аппараты',
    text: 'В нaстoящee врeмя нaшa стрaнa являeтся oдним из лидeрoв нayчнo-тeхничeскoгo прoгрeссa блaгoдaря пoстoяннoмy внeдрeнию сoврeмeнных тeхнoлoгий рaкeтнo-кoсмичeскoй oтрaсли. Дoстижeния СССР, Рoссийскoй Фeдeрaции в кoсмичeскoй oтрaсли впeчaтляют. Нaши инoстрaнныe кoллeги дaвнo признaли бoльшиe зaслyги Рoссии в oблaсти oсвoeния кoсмoсa. С yвeрeннoстью мoжнo скaзaть, чтo oтeчeствeннaя кoсмичeскaя oтрaсль являeтся в мирe oднoй из сaмых рaзвитых и мoщных.',
    blocks: [
      {
        image: './images/group/rockets/souz/souz1.jpg',
        title: 'Ракета-носитель "Союз"⁠⁠',
        description: 'Ракета среднего класса',
        link: '/#rockets/souz',
      },
      {
        image: './images/group/rockets/proton/proton1.jpg',
        title: 'Ракета-носитель "Протон"',
        description: 'Ракета тяжелого класса',
        link: '/#rockets/proton',
      },
      {
        image: './images/group/rockets/buran/buran1.jpg',
        title: 'Космический корабль "Буран"',
        description: 'Многоразовый космический корабль',
        link: '/#rockets/buran',
      },
    ],
  },
  effect: {
    mainImage: './images/group/panorama3.jpg',
    crumbs: [
      { title: 'Главная', link: '/#' },
      { title: 'Влияние на организм', link: null },
    ],
    title: 'Влияние космического пространства на организм человека',
    text: 'Космическое пространство таит в себе много опасностей, которые способны повлиять не только на физическое, но и на психическое состояние человека. К таким опасностям относятся: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-	Космическое излучение; <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-	Проблемы с психикой; <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-	Космический грибок; <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Микрогравитация; <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Проблемы с иммунитетом; <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Ухудшение зрения; <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Мышечная атрофия; <br /><br /> и многие другие.',
    blocks: [
      {
        image: './images/group/impact/blood/blood2.jpg',
        title: 'Кровеносная система',
        description: 'Уменьшение объёма крови',
        link: '/#effect/blood',
      },
      {
        image: './images/group/impact/bones/bones4.jpg',
        title: 'Опорно-двигательный аппарат',
        description: 'Кости теряют свою плотность',
        link: '/#effect/bones',
      },
      {
        image: './images/group/impact/endocrine/endocrine1.jpg',
        title: 'Эндокринная система',
        description: 'Опасность анемии',
        link: '/#effect/endocrine',
      },
      {
        image: './images/group/impact/nervous/nervous2.jpg',
        title: 'Нервная система',
        description: 'Влияние на психику',
        link: '/#effect/nervous',
      },
      {
        image: './images/group/impact/respiratory/respiratory1.jpg',
        title: 'Респираторная система',
        description: 'Уменьшение объема легких',
        link: '/#effect/respiratory',
      },
      {
        image: './images/group/impact/adaptation/adaptation5.jpg',
        title: 'Адаптация после полета',
        description: 'С какими трудностями сталкиваются космонавты после возвращения на Землю',
        link: '/#effect/adaptation',
      },
    ],
  },
};

export const detailPageData = [
  {
    id: 'spacers/gagarin',
    crumbs: [
      { link: '/#', title: 'Главная' },
      { link: '/#spacers', title: 'Космонавты' },
      {
        link: null,
        title: 'Гагарин',
      },
    ],
    title: 'Юрий Алексеевич Гагарин',
    text: [
      'Гагарин – первый космонавт СССР и мира, ставший символом развития советской авиации и науки в целом, человек, навсегда вписавший свое имя в историю исследования космического пространства.',
      'Имя Юрия Гагарина с детства знакомо всем россиянам. Он первым из всех живущих на Земле людей побывал в космосе. Прославленный летчик-космонавт стал легендой и образцом для подражания не только для советских граждан, но и для многих жителей других стран мира. После полета в космос Гагарин активно занимался международной общественной деятельностью.',
    ],
    image: './images/group/spacers/gagarin/gagarin7.jpg',
    btnText: 'Галерея',
    slides: [
      './images/group/spacers/gagarin/gagarin1.jpg',
      './images/group/spacers/gagarin/gagarin2.jpg',
      './images/group/spacers/gagarin/gagarin3.jpg',
      './images/group/spacers/gagarin/gagarin4.jpg',
      './images/group/spacers/gagarin/gagarin5.jpg',
      './images/group/spacers/gagarin/gagarin6.jpg',
      './images/group/spacers/gagarin/gagarin7.jpg',
      './images/group/spacers/gagarin/gagarin8.jpg',
      './images/group/spacers/gagarin/gagarin9.jpg',
      './images/group/spacers/gagarin/gagarin10.jpg',
      './images/group/spacers/gagarin/gagarin11.jpg',
    ],
  },
  {
    id: 'spacers/titov',
    crumbs: [
      { link: '/#', title: 'Главная' },
      { link: '/#spacers', title: 'Космонавты' },
      {
        link: null,
        title: 'Титов',
      },
    ],
    title: 'Герман Степанович Титов',
    text: [
      'Герман Титов – известный космонавт, дублер Юрия Гагарина. Первый человек, пробывший в космосе больше суток. Самый молодой из всех космонавтов в истории мировой космонавтики. На момент старта ему было всего 25 лет. В 1961 году стал Героем Советского Союза. Доцент, доктор военных наук.',
      'Говорят, что в памяти остаются только первые. Неправда. Во всяком случае, когда речь идет о Германе Титове – втором человеке после Гагарина, полетевшем к звездам. Несмотря на то, что он стал вторым, его имя навсегда впечатано в историю развития космонавтики.',
      'Все люди ищут свое место в жизни, он не стал исключением. С ранних лет его приучили к мысли, что гарантом успеха является напряженная работа, будь то учеба или добывание обычного куска хлеба. Герман всегда рассчитывал только на свои силы, верил исключительно в себя, а не в счастливое стечение обстоятельств. И если ему сопутствовала удача, то это не от большого везения, а в результате упорного труда. Он принадлежал к тем людям, которых считали одержимыми.',
    ],
    image: './images/group/spacers/titov/titov1.jpg',
    btnText: 'Галерея',
    slides: [
      './images/group/spacers/titov/titov1.jpg',
      './images/group/spacers/titov/titov2.jpg',
      './images/group/spacers/titov/titov3.jpg',
      './images/group/spacers/titov/titov4.jpg',
      './images/group/spacers/titov/titov5.jpg',
      './images/group/spacers/titov/titov6.jpg',
      './images/group/spacers/titov/titov7.jpg',
    ],
  },
  {
    id: 'spacers/leonov',
    crumbs: [
      { link: '/#', title: 'Главная' },
      { link: '/#spacers', title: 'Космонавты' },
      {
        link: null,
        title: 'Леонов',
      },
    ],
    title: 'Алексей Архипович Леонов',
    text: [
      'Алексей Леонов – летчик-космонавт Советского Союза №11. Впервые совершил выход в космическое пространство. Два раза удостоен звания Герой Советского Союза, имел звание генерал-майора авиации.',
      'Имя Алексея Леонова уже давно не на слуху. Многим оно ничего не говорит, так как космонавтикой интересуются единицы. Уже давно забыли, что он был в числе первых космонавтов СССР, не говоря уже о том, чем его полет отличался от полетов его коллег. Но, по мнению людей компетентных в этом вопросе, вклад Леонова в развитие космонавтики не менее важен, чем достижение Гагарина. Ведь он стал первым, кто покинул космический корабль и вышел в открытый космос. Помимо этого Леонов был творческим человеком, поэтому смог оценить красоту планеты Земля «со стороны».',
    ],
    image: './images/group/spacers/leonov/leonov7.jpg',
    btnText: 'Галерея',
    slides: [
      './images/group/spacers/leonov/leonov1.jpg',
      './images/group/spacers/leonov/leonov2.jpg',
      './images/group/spacers/leonov/leonov3.jpg',
      './images/group/spacers/leonov/leonov4.jpg',
      './images/group/spacers/leonov/leonov5.jpg',
      './images/group/spacers/leonov/leonov6.jpg',
      './images/group/spacers/leonov/leonov7.jpg',
      './images/group/spacers/leonov/leonov8.jpg',
    ],
  },
  {
    id: 'spacers/savitskaya',
    crumbs: [
      { link: '/#', title: 'Главная' },
      { link: '/#spacers', title: 'Космонавты' },
      {
        link: null,
        title: 'Савицкая',
      },
    ],
    title: 'Светлана Евгеньевна Савицкая',
    text: [
      'Светлана Савицкая – известный советский космонавт, летчик-испытатель, общественный деятель, педагог. Имеет научную степень кандидата технических наук, звание полковника ВВС СССР. Она единственная женщина в СССР, кто удостоился стать дважды Героем Советского Союза.',
      'Ее имя навсегда вписано в историю космонавтики, ее биография – пример для подражания не только для женщин, но и для многих мужчин. Вторая женщина-космонавт Светлана Савицкая, «маршальская дочка», первая в мире среди женщин, кто побывал в открытом космосе. Она стала достойным продолжателем Валентины Терешковой, «девушки из народа», 53-м космонавтом Советского Союза и 111-м в истории мировой космонавтики.',
    ],
    image: './images/group/spacers/savitskaya/savitskaya4.jpg',
    btnText: 'Галерея',
    slides: [
      './images/group/spacers/savitskaya/savitskaya1.jpg',
      './images/group/spacers/savitskaya/savitskaya2.jpg',
      './images/group/spacers/savitskaya/savitskaya3.jpg',
      './images/group/spacers/savitskaya/savitskaya4.jpg',
      './images/group/spacers/savitskaya/savitskaya5.jpg',
      './images/group/spacers/savitskaya/savitskaya6.jpg',
      './images/group/spacers/savitskaya/savitskaya7.jpg',
      './images/group/spacers/savitskaya/savitskaya8.jpg',
      './images/group/spacers/savitskaya/savitskaya9.jpg',
      './images/group/spacers/savitskaya/savitskaya10.jpg',
    ],
  },
  {
    id: 'rockets/souz',
    crumbs: [
      { link: '/#', title: 'Главная' },
      { link: '/#rockets', title: 'Космические аппараты' },
      {
        link: null,
        title: 'Союз',
      },
    ],
    title: 'Ракета-носитель "Союз"',
    text: [
      'Ракета-носитель «Союз-ФГ» — ракета среднего класса, разработана и производится в РКЦ «Прогресс» (г. Самара). Она предназначена для выведения на околоземную орбиту автоматических космических аппаратов социально-экономического, научно-исследовательского и специального назначения.',
      'Ракеты-носители «Союз» в сочетании с разгонным блоком «Фрегат» предназначены для запусков космических аппаратов на околоземные орбиты различных высот и наклонений, включая геопереходные и геостационарную, а также отлетные траектории.',
    ],
    image: './images/group/rockets/souz/souz1.jpg',
    btnText: 'Галерея',
    slides: [
      './images/group/rockets/souz/souz1.jpg',
      './images/group/rockets/souz/souz2.jpg',
      './images/group/rockets/souz/souz3.jpg',
      './images/group/rockets/souz/souz4.jpg',
    ],
  },
  {
    id: 'rockets/proton',
    crumbs: [
      { link: '/#', title: 'Главная' },
      { link: '/#rockets', title: 'Космические аппараты' },
      {
        link: null,
        title: 'Протон',
      },
    ],
    title: 'Ракета-носитель "Протон"',
    text: [
      '«Протон» (УР-500 — Универсальная ракета, «Протон-К», «Протон-М») — одноразовая ракета-носитель (РН) тяжёлого класса, предназначенная для выведения автоматических космических аппаратов на орбиту Земли и далее в космическое пространство. Cпособна выводить на геостационарную орбиту (ГСО) грузы до 3,3 т. ',
      'РН «Протон» явилась средством выведения всех советских и российских орбитальных станций «Салют-ДОС» и «Алмаз», модулей станций «Мир» и МКС, планировавшихся пилотируемых космических кораблей ТКС и Л-1/«Зонд» (советской лунно-облётной программы), а также тяжёлых ИСЗ различного назначения и межпланетных станций. ',
    ],
    image: './images/group/rockets/proton/proton2.jpg',
    btnText: 'Галерея',
    slides: [
      './images/group/rockets/proton/proton1.jpg',
      './images/group/rockets/proton/proton2.jpg',
      './images/group/rockets/proton/proton3.jpg',
      './images/group/rockets/proton/proton4.jpg',
      './images/group/rockets/proton/proton5.jpg',
    ],
  },
  {
    id: 'rockets/buran',
    crumbs: [
      { link: '/#', title: 'Главная' },
      { link: '/#rockets', title: 'Космические аппараты' },
      {
        link: null,
        title: 'Буран',
      },
    ],
    title: 'Космический корабль "Буран"',
    text: [
      '«Буран» — многоразовый космический корабль, способный как доставлять различные грузы на орбиту, так и возвращать их на Землю. Специалисты считают, что ракетоплан гипотетически мог спасти «Мир»: в его грузовой отсек спокойно поместился бы любой модуль советской орбитальной станции, затопленной в 2001 году. В том же отсеке конструкторы предлагали для пилотируемых испытательных полётов разместить спускаемый аппарат «Союза». В случае нештатной ситуации это позволило бы экипажу «эвакуироваться» с орбиты.',
    ],
    image: './images/group/rockets/buran/buran3.jpg',
    btnText: 'Галерея',
    slides: [
      './images/group/rockets/buran/buran1.jpg',
      './images/group/rockets/buran/buran2.jpg',
      './images/group/rockets/buran/buran3.jpg',
      './images/group/rockets/buran/buran4.jpg',
      './images/group/rockets/buran/buran5.jpg',
    ],
  },
  {
    id: 'effect/blood',
    crumbs: [
      { link: '/#', title: 'Главная' },
      { link: '/#effect', title: 'Влияние на организм' },
      {
        link: null,
        title: 'Кровеностная система',
      },
    ],
    title: 'Воздействие на кровеносную систему',
    text: [
      'Система кровообращения приспособлена к земной гравитации. Сердце расположено высоко по отношению к остальным органам, чтобы лучше снабжать кровью верхнюю часть тела и, конечно же, мозг. Но больше крови всё равно поступает в нижнюю часть тела и меньше — в верхнюю.',
      'В условиях микрогравитации всё тело получает кровь (и остальные жидкости) в равном количестве. Из-за этого ноги становятся худее, а голова увеличивается в размерах. Это сбивает с толку организм: мозг получает сигналы об избытке жидкости в верхней части тела, и поэтому почки начинают активно удалять жидкость из организма, и человек не испытывает чувство жажды.',
      'Такое поведение тела может привести к обезвоживанию, если космонавт не заставляет себя пить, даже когда ему этого не хочется.',
    ],
    image: './images/group/impact/blood/blood5.jpg',
    btnText: 'Галерея',
    slides: [
      './images/group/impact/blood/blood1.jpg',
      './images/group/impact/blood/blood2.jpg',
      './images/group/impact/blood/blood3.jpg',
      './images/group/impact/blood/blood4.jpg',
      './images/group/impact/blood/blood5.jpg',
    ],
  },
  {
    id: 'effect/bones',
    crumbs: [
      { link: '/#', title: 'Главная' },
      { link: '/#effect', title: 'Влияние на организм' },
      {
        link: null,
        title: 'Опорно-двигательный аппарат',
      },
    ],
    title: 'Воздействие на опорно-двигательный аппарат',
    text: [
      'Кости теряют свою плотность. Это явление связано с тем, что нахождение в невесомости с каждым месяцем уменьшает плотность костей космонавта на 1% из-за вымывания кальция. Это увеличивает вероятность перелома по возвращении на Землю.',
    ],
    image: './images/group/impact/bones/bones5.jpg',
    btnText: 'Галерея',
    slides: [
      './images/group/impact/bones/bones1.jpg',
      './images/group/impact/bones/bones2.jpg',
      './images/group/impact/bones/bones3.jpg',
      './images/group/impact/bones/bones4.jpg',
      './images/group/impact/bones/bones5.jpg',
    ],
  },
  {
    id: 'effect/endocrine',
    crumbs: [
      { link: '/#', title: 'Главная' },
      { link: '/#effect', title: 'Влияние на организм' },
      {
        link: null,
        title: 'Энокринная система',
      },
    ],
    title: 'Воздействие на эндокринную систему',
    text: [
      'Исследование гормональных изменений во время космического полёта — очень сложный процесс. Эндокринологам сложно отличить влияние микрогравитации от влияния стресса во время взлёта, пребывания на орбите и посадки. Хотя кое-что об эндокринной системе во время пребывания в космосе известно. ',
      'Например, по-другому работает гормон эритропоэтин, из-за чего у космонавтов чаще, чем у обычных людей, наблюдается анемия. Гормоны, связанные с положительными эмоциональными реакциями вроде допамина, почему-то активизируются. А из-за снижения физических нагрузок падает и чувствительность к инсулину, что может привести к непредсказуемым последствиям.',
    ],
    image: './images/group/impact/endocrine/endocrine5.jpg',
    btnText: 'Галерея',
    slides: [
      './images/group/impact/endocrine/endocrine1.jpg',
      './images/group/impact/endocrine/endocrine2.jpg',
      './images/group/impact/endocrine/endocrine3.jpg',
      './images/group/impact/endocrine/endocrine4.jpg',
      './images/group/impact/endocrine/endocrine5.jpg',
    ],
  },
  {
    id: 'effect/nervous',
    crumbs: [
      { link: '/#', title: 'Главная' },
      { link: '/#effect', title: 'Влияние на организм' },
      {
        link: null,
        title: 'Нервная система',
      },
    ],
    title: 'Воздействие на нервную систему',
    text: [
      'Одна из проблем, с которыми сталкивается космонавт, — это то, что на орбите нет разделения на день и ночь. Космонавты видят рассвет и закат по несколько раз за день. В итоге у них нарушается работа циркадных ритмов, что может привести к постоянному ощущению усталости и дискомфорта.',
      'Ещё одно испытание для нервной системы — условия микрогравитации. Мозг человека должен управлять конечностями в среде, где вертикальная ось тела больше не доминирует. На орбите становится сложнее делать хватательные движения: в невесомости легче промахнуться мимо нужного предмета, и это тоже вводит мозг в заблуждение. Мышцы двигаются по-новому и посылают в мозг сигналы, которые он не знает, как интерпретировать.',
      'В итоге центральная нервная система адаптируется к новым условиям, но на это может потребоваться до шести месяцев.',
    ],
    image: './images/group/impact/nervous/nervous5.jpg',
    btnText: 'Галерея',
    slides: [
      './images/group/impact/nervous/nervous1.jpg',
      './images/group/impact/nervous/nervous2.jpg',
      './images/group/impact/nervous/nervous3.jpg',
      './images/group/impact/nervous/nervous4.jpg',
      './images/group/impact/nervous/nervous5.jpg',
      './images/group/impact/nervous/nervous6.jpg',
    ],
  },
  {
    id: 'effect/respiratory',
    crumbs: [
      { link: '/#', title: 'Главная' },
      { link: '/#effect', title: 'Влияние на организм' },
      {
        link: null,
        title: 'Респираторная система',
      },
    ],
    title: 'Воздействие на респираторную систему',
    text: [
      'Закаченный внутрь МКС воздух помогает космонавтам дышать без помощи каких-либо устройств, но человек дышит на орбите всё равно не так, как на Земле. Основная проблема заключается в изменении кровообращения — целостность дыхательного процесса нарушается из-за неустойчивости движения крови в невесомости. Это приводит к тому, что респираторная система пропускает меньшие потоки воздуха, хотя это и не влияет на жизнеспособность организма. Из-за этого в количественном выражении уменьшается брюшной охват, но это не приводит к изменению паттернов дыхания.',
    ],
    image: './images/group/impact/respiratory/respiratory3.jpg',
    btnText: 'Галерея',
    slides: [
      './images/group/impact/respiratory/respiratory1.jpg',
      './images/group/impact/respiratory/respiratory2.jpg',
      './images/group/impact/respiratory/respiratory3.jpg',
      './images/group/impact/respiratory/respiratory4.jpg',
      './images/group/impact/respiratory/respiratory5.jpg',
    ],
  },
  {
    id: 'effect/adaptation',
    crumbs: [
      { link: '/#', title: 'Главная' },
      { link: '/#effect', title: 'Влияние на организм' },
      {
        link: null,
        title: 'Адаптация',
      },
    ],
    title: 'Жизнь после нахождения в космическом пространстве',
    text: [
      'Синдром космической адаптации — так называется состояние, которое испытывает человек как при привыкании к невесомости, так и после возвращения на Землю. Обычно он длится несколько суток и по симптомам напоминает морскую болезнь: слабость, тошнота, головокружение, потеря аппетита. Такие ощущения вызваны перестройкой организма — адаптацией вестибулярного аппарата и органов чувств, перераспределением крови внутри кровеносной системы.',
      'Помимо навыков ходьбы, прибывшему на Землю космонавту приходится вновь учиться обращаться с предметами, которые больше не зависают в пространстве, а под действием гравитации падают вниз, пользоваться туалетом и ванной, есть обычную пищу и удерживать ее в желудке.',
      'В настоящее время разработаны и опробованы эффективные технологии послеполетной реабилитации космонавтов. Это позволило ограничить длительность реабилитационного периода после длительного космического полета двумя-тремя неделями.',
    ],
    image: './images/group/impact/adaptation/adaptation2.jpg',
    btnText: 'Галерея',
    slides: [
      './images/group/impact/adaptation/adaptation1.jpg',
      './images/group/impact/adaptation/adaptation2.jpg',
      './images/group/impact/adaptation/adaptation3.jpg',
      './images/group/impact/adaptation/adaptation4.jpg',
      './images/group/impact/adaptation/adaptation5.jpg',
    ],
  },
];
