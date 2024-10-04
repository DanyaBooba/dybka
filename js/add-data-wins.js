const wins = [
    {
        title: 'Изобит-2024', desc: 'Конференция в Изобретариуме 3.0, г. Реутов', imageFancybox: 'izob', images: ['/img/izob/izob.jpg once']
    },
    {
        title: 'Студенческая весна', desc: 'Конференция в МГТУ <nobr>им. Н.Э. Баумана</nobr>, кафедры ИУ-9.', imageFancybox: 'baumanka3', images: ['/img/baumanka3/img2.jpg once']
    },
    {
        title: 'Русский Инженер', desc: 'Конференция в МГТУ <nobr>им. Н.Э. Баумана</nobr>, кафедры ИУ-9.', imageFancybox: 'baumanka2', images: ['/img/baumanka2/img1.jpg top', '/img/baumanka2/img2.jpg ', '/img/baumanka2/img3.jpg bottom']
    },
    {
        title: 'Юные техники и изобретатели', desc: 'Конференция, награждение в Государственной думе, 15 сентября.', imageFancybox: 'gosduma', images: ['/img/gosduma/img1.jpg top', '/img/gosduma/img2.jpg bottom']
    },
    {
        title: 'Радио-Поиск', desc: 'Конкурс радиолюбителей в г. Москве, 22 апреля.', imageFancybox: 'radiopoisk', images: ['/img/radiopoisk/cap.jpeg top', '/img/radiopoisk/img1.jpeg ', '/img/radiopoisk/img2.jpeg bottom']
    },
    {
        title: 'Будущее сильной России – в высоких технологиях', desc: 'Конференция, проводимая в сотрудничестве с Radar MMS, г. Санкт-Петербург.', imageFancybox: 'radarmms_2', images: ['/img/futurerussia/cap.jpg top', '/img/futurerussia/img1.jpg ', '/img/futurerussia/img2.jpg bottom']
    },
    {
        title: 'Шаг в будущее', desc: 'Олимпиада института МГТУ им. Н.Э. Баумана.', imageFancybox: 'baumanka', images: ['/img/baumanka/cap.jpg top', '/img/baumanka/img1.jpg ', '/img/baumanka/img2.jpg bottom']
    },
    {
        title: 'Будущее начинается сегодня', desc: 'Конкурс от института МАИ, принимаю участие второй раз.', imageFancybox: 'mai3', images: ['/img/mai3/img1.jpg top', '/img/mai3/img2.jpg ', '/img/mai3/img3.jpg bottom']
    },
    {
        title: 'Будущее Петербурга – в творчестве юных', desc: 'Кейс-фестиваль на базе Radar MMS, г. Санкт-Петербург.', imageFancybox: 'radarmms', images: ['/img/radarmms/cap.jpg top', '/img/radarmms/img1.jpg ', '/img/radarmms/img2.jpg bottom']
    },
    {
        title: 'Бионика-2022', desc: 'Конференция от МГТУ им. Н.Э. Баумана.', imageFancybox: 'bionika', images: ['/img/bionika/cap.jpg top', '/img/bionika/img1.jpg ', '/img/bionika/img2.jpg bottom']
    },
    {
        title: 'Я — конструктор будущего', desc: 'Конкурс от Московского Авиационного Института.', imageFancybox: 'mai2', images: ['/img/mai2/cap.jpg once']
    },
    {
        title: 'Ученые будущего', desc: 'Конкурс от Московского Государственного Университета.', imageFancybox: 'mgy', images: ['/img/mgy/img1.jpg top', '/img/mgy/img2.jpg bottom']
    },
    {
        title: 'Разведка боем', desc: 'Стартап программа в Сколково.', imageFancybox: 'skolkovo', images: ['/img/skolkovo/2.jpg top', '/img/skolkovo/3.jpg ', '/img/skolkovo/4.jpg ', '/img/skolkovo/5.jpg bottom']
    },
    {
        title: 'Startup House Universities', desc: 'Конкурс от института «Иннополис», г. Казань.', imageFancybox: 'innopolis', images: ['/img/innopolis/1.jpg top', '/img/innopolis/2.jpg ', '/img/innopolis/3.jpg bottom']
    },
    {
        title: 'НТИ Олимпиада', desc: 'Награждение финалистов в офисе 1C.', imageFancybox: '1c', images: ['/img/1c/1.jpg once']
    },
    {
        title: 'Будущее начинается сегодня', desc: 'Конкурс от Московского Авиационного Института.', imageFancybox: 'mai1', images: ['/img/mai/2.jpg once']
    },
]

const winsEn = [
    {
        title: 'Isobit 2024', desc: 'Conference in Isobretarium 3.0, Reutov, Russia', imageFancybox: 'izob', images: ['/img/izob/izob.jpg once']
    },
    {
        title: 'Student Spring', desc: 'Conference in MSTU <nobr>im. N.E. Bauman</nobr>, Department of IS-9.', imageFancybox: 'baumanka3', images: ['/img/baumanka3/img2.jpg once']
    },
    {
        title: 'Russian Engineer', desc: 'Conference in MSTU <nobr>im. N.E. Bauman</nobr>, Department of IS-9.', imageFancybox: 'baumanka2', images: ['/img/baumanka2/img1.jpg top', '/img/baumanka2/img2.jpg ', '/img/baumanka2/img3.jpg bottom']
    },
    {
        title: 'Young technicians and inventors', desc: 'Conference, awards ceremony at the State Duma, Sept. 15.', imageFancybox: 'gosduma', images: ['/img/gosduma/img1.jpg top', '/img/gosduma/img2.jpg bottom']
    },
    {
        title: 'Radio Search', desc: 'Amateur radio contest in Moscow, April 22.', imageFancybox: 'radiopoisk', images: ['/img/radiopoisk/cap.jpeg top', '/img/radiopoisk/img1.jpeg ', '/img/radiopoisk/img2.jpeg bottom']
    },
    {
        title: 'The future of a strong Russia lies in high technology', desc: 'Conference held in cooperation with Radar MMS, St. Petersburg.', imageFancybox: 'radarmms_2', images: ['/img/futurerussia/cap.jpg top', '/img/futurerussia/img1.jpg ', '/img/futurerussia/img2.jpg bottom']
    },
    {
        title: 'Step into the future', desc: 'Olympiad of the Bauman Moscow State Technical University Institute.', imageFancybox: 'baumanka', images: ['/img/baumanka/cap.jpg top', '/img/baumanka/img1.jpg ', '/img/baumanka/img2.jpg bottom']
    },
    {
        title: 'The future starts today', desc: 'The contest is from MAI Institute, I take part for the second time.', imageFancybox: 'mai3', images: ['/img/mai3/img1.jpg top', '/img/mai3/img2.jpg ', '/img/mai3/img3.jpg bottom']
    },
    {
        title: 'The future of St. Petersburg is in the creativity of young people', desc: 'Case-festival based on Radar MMS, St. Petersburg.', imageFancybox: 'radarmms', images: ['/img/radarmms/cap.jpg top', '/img/radarmms/img1.jpg ', '/img/radarmms/img2.jpg bottom']
    },
    {
        title: 'Bionics-2022', desc: 'Conference from Bauman Moscow State Technical University.', imageFancybox: 'bionika', images: ['/img/bionika/cap.jpg top', '/img/bionika/img1.jpg ', '/img/bionika/img2.jpg bottom']
    },
    {
        title: 'I am the designer of the future', desc: 'Competition from the Moscow Aviation Institute.', imageFancybox: 'mai2', images: ['/img/mai2/cap.jpg once']
    },
    {
        title: 'Scientists of the future', desc: 'Competition from Moscow State University.', imageFancybox: 'mgy', images: ['/img/mgy/img1.jpg top', '/img/mgy/img2.jpg bottom']
    },
    {
        title: 'Combat reconnaissance', desc: 'Startup program at Skolkovo.', imageFancybox: 'skolkovo', images: ['/img/skolkovo/2.jpg top', '/img/skolkovo/3.jpg ', '/img/skolkovo/4.jpg ', '/img/skolkovo/5.jpg bottom']
    },
    {
        title: 'Startup House Universities', desc: 'Competition from Innopolis Institute, Kazan.', imageFancybox: 'innopolis', images: ['/img/innopolis/1.jpg top', '/img/innopolis/2.jpg ', '/img/innopolis/3.jpg bottom']
    },
    {
        title: 'NTI Olympiad', desc: 'Awarding of finalists in 1C office.', imageFancybox: '1c', images: ['/img/1c/1.jpg once']
    },
    {
        title: 'The future starts today', desc: 'Awarding of finalists in 1C office.', imageFancybox: 'mai1', images: ['/img/mai/2.jpg once']
    },
]
