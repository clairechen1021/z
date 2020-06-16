const es = (selector) => {
    let elements = document.querySelectorAll(selector)
    if (elements.length === 0) {
        let s = `选择器 ${selector} 获取错误`
        alert(s)
        return null
    } else {
        return elements
    }
}

const childHide = (element, target) => {
    let arrow = element.querySelector('.dropdown-arrow')
    let t = target
    element.addEventListener('mouseleave', function () {
        target.classList.remove('hover')
        arrow.classList.remove('hover')
    })
}

const childShow = (element, target) => {
    let arrow = element.querySelector('.dropdown-arrow')
    let t = target
    element.addEventListener('mouseover', function (e) {
        target.classList.add('hover')
        arrow.classList.add('hover')
    })
}

const navEvent = () =>  {
    let uls = es('.dropdown-menu')
    for (let i = 0; i < uls.length; i++) {
        let ul = uls[i]
        let parent = ul.closest('.dropdown')
        childShow(parent, ul)
        childHide(parent, ul)
    }
}
const __main = () => {
    navEvent()
    // debounce(navEvent, 1000)
}
__main()