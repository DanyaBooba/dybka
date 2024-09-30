const wins = [
    {
        title: 'Заголовок 1', desc: 'Описание', imageFancybox: '123', images: ['/img/baumanka3/img2.jpg', '123']
    },
    {
        title: 'Заголовок 2', desc: 'Описание', imageFancybox: '123', images: ['/img/baumanka3/img2.jpg', '123']
    }
]

const smi = [

]

function AddWins() {
    function winHtml({ id, title, desc, imageFancybox, images }) {
        return `<div class="item--block" id="k${id}">
                <div class="container px-0">
                  <div class="row row-cols-1 row-cols-lg-2 g-2 align-items-center">
                    <h2 class="item--head display-5">${title}</h2>
                    <p class="item--desc">${desc}</p>
                  </div>
                </div>
                <div class="row g-0">
                    <div class="col-md-12 col-sm-12">
                        ${images.map(image => `<a data-fancybox="${imageFancybox}" data-src="${image}">
                            <img src="${image}" class="item--img-top pointer img-fluid w-100 m-0 p-0" alt="${title}">
                        </a>`).join('\n') }
                    </div>
                </div>
            </div>`
    }

    const firstRoot = document.getElementById('root-wins-first')
    const elementsRoot = document.getElementById('root-wins-elements')

    let win = winHtml(wins[wins.length - 1])
    firstRoot.insertAdjacentHTML('afterbegin', win)

    for (let i = wins.length - 2; i >= 0; i--) {
        let win = winHtml(wins[i])
        console.log(win)
    }
}

function AddSMI() {
    const root = document.getElementById('')
}

AddWins()
