import {
    getResource
} from '../services/services';

function cards() {
    // Используем классы для карточек

    class MenuCard {
        constructor(src, alt, title, descr, link, link1, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.link = link;
            this.link1 = link1;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const element = document.createElement('div');

            if (this.classes.length === 0) {
                this.element = 'list__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                <img class="list__item-img" src=${this.src} alt=${this.alt}>
                <h3 class="list__item-subtitle">${this.title}</h3>
                <div class="list__item-descr">
                    ${this.descr}
                </div>
                <div class="list__item-divider"></div>
                <div class="list__item-links">
                    <a class="list__item-link" href="${this.link1}" target="_blank">${this.link}</a>
                </div>
            `;
            this.parent.append(element);
        }
    }


    getResource('http://localhost:3000/list')
        .then(data => {
            data.forEach(({
                img,
                altimg,
                title,
                descr,
                link,
                link1
            }) => {
                new MenuCard(img, altimg, title, descr, link, link1, '.list .container').render();
            });
        });
}

export default cards;