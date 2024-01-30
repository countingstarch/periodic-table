const meta = fetch('./element-data.json')
    .then((res) => res.json())
    .then((data) => {
        main(data);
    });

const main = (data) => {
    const elementElements = document.querySelectorAll('.element');

    const colour = document.querySelectorAll('.colour');

    const obj = {
        'colour': ['property', 'block', 'phase', 'custom']
    };

    const classify = (pre, fix) => {
        for (i of elementElements) {
            for (n of obj[pre]) {
                i.classList.remove(`${pre}-${n}`);
            }; i.classList.add(`${pre}-${fix}`);
        };
    }; for (i in obj) {
        for (j of obj[i].filter((val) => val != 'custom')) {
            for (e of elementElements) {
                e.classList.add(`${j}-${data[e.id][j]}`);
            };
        };
    };

    colour[0].addEventListener('change', () => classify('colour', 'property'));
    colour[1].addEventListener('change', () => classify('colour', 'block'));
    colour[2].addEventListener('change', () => classify('colour', 'phase'));
    colour[3].addEventListener('change', () => classify('colour', 'custom'));

    // default colour scheme
    colour.forEach(classify('colour', 'property'));
};
