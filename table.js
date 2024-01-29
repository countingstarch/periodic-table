const elementElements = document.querySelectorAll('.element');

const colour = document.querySelectorAll('.colour');
const obj = {
    'c': ['property', 'block', 'phase', 'custom']
}

const classify = (pre, fix) => {
    for (i of elementElements) {
        for (n of obj[pre]) {
            i.classList.remove(`${pre}-${n}`)
        }; i.classList.add(`${pre}-${fix}`);
    };
};

colour[0].addEventListener('change', () => classify('c', 'property'));
colour[1].addEventListener('change', () => classify('c', 'block'));
colour[2].addEventListener('change', () => classify('c', 'phase'));
colour[3].addEventListener('change', () => classify('c', 'custom'));
