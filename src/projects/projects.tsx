import privateHome1 from './img/private-home-1.png'
import privateHome2 from './img/private-home-2.png'
import complexNightingaleGrove1 from './img/complex-nightingale-grove-1.jpg'
import complexNightingaleGrove2 from './img/complex-nightingale-grove-2.jpg'

const DESIGN_PROJECTS = [
    {
        name: "Частный дом",
        place: "Высоком vilage",
        square: 280,
        img: [
            privateHome1,
            privateHome2
        ]
    },
    {
        name: "Квартира",
        place: "ЖК Соловьиная роща",
        square: 72,
        img: [
            complexNightingaleGrove1,
            complexNightingaleGrove2
        ]
    },
]

const REAL_OBJECTS = [
    {
        name: "Частный дом",
        place: "Высоком vilage",
        square: 280,
        inf: "Тут какой-то текст о работе. Очень красиво, очень прекрасно, очень замечательно, просто потрясающе. А локация вообще топ. Дорого, но оно того стоит. Сделаю вам такое же и даже лучше.",
        mainImg: privateHome1,
        img: [
            privateHome1,
            privateHome2
        ]
    },
    {
        name: "Квартира",
        place: "ЖК Соловьиная роща",
        square: 72,
        inf: "Тут какой-то текст о работе. Очень красиво, очень прекрасно, очень замечательно, просто потрясающе. А локация вообще топ. Дорого, но оно того стоит. Сделаю вам такое же и даже лучше.",
        mainImg: complexNightingaleGrove1,
        img: [
            complexNightingaleGrove1,
            complexNightingaleGrove2
        ]
    }
]

export { DESIGN_PROJECTS, REAL_OBJECTS };