function navTo(sectionId) {
    const section = document.getElementById(sectionId)
    if(section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav')

    if(window.scrollY > 0) {
        nav.classList.add('scroll')
    } else {
        nav.classList.remove('scroll')
    }

const cards = document.querySelectorAll('#s2 .card')

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('visible')
                }, index * 200)
            });
        } else {
            cards.forEach(card => {
                card.classList.remove('visible')
            });
        }
    })  
}, { threshold: 0.2 })

observer.observe(document.querySelector('#s2')) 




})





