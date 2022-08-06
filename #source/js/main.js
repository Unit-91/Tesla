var footerRow = document.querySelector('.footer__row')
var footerText = document.querySelector('.footer__text')
var footerImg = document.querySelector('.footer__img')

function footerRowChildsSwitch(parent, firstChild, secondChild) {
    document.addEventListener('DOMContentLoaded', () => {
        if (window.innerWidth < 1196) {
            parent.appendChild(firstChild)
        }
    })
    window.addEventListener('resize', () => {
        if (window.innerWidth < 1196) {
            parent.appendChild(firstChild)
        }
        else {
            parent.appendChild(secondChild)
        }
    })
}

footerRowChildsSwitch(footerRow, footerText, footerImg)