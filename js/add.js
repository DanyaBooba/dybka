function AddWins(lang) {
    function winHtml({ title, desc, imageFancybox, images }) {
        return `<div class="item--block" id="k-${title.toLowerCase().replaceAll(' ', '-')}">
                <div class="container px-0">
                  <div class="row row-cols-1 row-cols-lg-2 g-2 align-items-center">
                    <h2 class="item--head display-5">«${title}»</h2>
                    <p class="item--desc">${desc}</p>
                  </div>
                </div>
                <div class="row g-0">
                    <div class="col-md-12 col-sm-12">
                        ${images.map(dataImage => {
                            let data = dataImage.split(' ')
                            let image = data[0]
                            let classImg = data[1]
                            return `<a data-fancybox="${imageFancybox}" data-src="${image}">
                            <img src="${image}" class="item--img-${classImg} pointer img-fluid w-100 m-0 p-0" alt="${title}">
                        </a>`
                        }).join('\n')}
                    </div>
                </div>
            </div>`
    }

    const firstRoot = document.getElementById('root-wins-first')
    const elementsRoot = document.getElementById('root-wins-elements')

    let win = winHtml(wins[0])
    firstRoot.insertAdjacentHTML('afterbegin', win)

    for (let i = 1; i < wins.length; i++) {
        let win = winHtml(wins[i])
        elementsRoot.insertAdjacentHTML('beforeend', win)
    }
}

function AddSMI(lang) {
    const root = document.getElementById('')
}

function Add(lang) {
    lang = lang == 'ru' || lang == 'en' ? lang : 'en'
    console.log('debug: ' + lang)
    AddSMI(lang)
    AddWins(lang)
}
