const meta = fetch('./elements.json')
    .then((res) => res.json())
    .then((data) => {
        main(data)
    })

const main = (data) => {
    const elements = data
    const tablecells = document.querySelectorAll("td");
    for (i of tablecells) {
        if (i.id) {
            const obj = elements[i.id]
            const btn = document.createElement('button');
            const a = document.createElement("div"); a.classList.add('atomnum');
            const b = document.createElement("div"); b.classList.add('symbol');
            const c = document.createElement("div"); c.classList.add('elemname');
            const d = document.createElement("div"); d.classList.add('atomass');

            a.textContent = obj.num;
            b.textContent = Object.keys(elements)[Object.keys(elements).indexOf(i.id)];
            c.textContent = obj.name;
            d.textContent = obj.mass;

            btn.append(a, b, c, d);
            i.append(btn)

            if (elements[i.id].num > 103) {
                btn.setAttribute('tabindex', '5')
            } else if (elements[i.id].num > 88) {
                btn.setAttribute('tabindex', '4')
            } else if (elements[i.id].num > 71) {
                btn.setAttribute('tabindex', '3')
            } else if (elements[i.id].num > 56) {
                btn.setAttribute('tabindex', '2')
            } else { btn.setAttribute('tabindex', '1') }
        }
    }
}