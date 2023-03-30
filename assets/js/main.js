/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
            slidesPerView: 2,
            spaceBetween: -56,
        },
    },
});

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    grabCursor: true,
    spaceBetween: 24,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactProject = document.getElementById('contact-project'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // Check if the field has a value
    if (contactProject.value === '') {
        // Add and remove color
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        // Show message	
        contactMessage.textContent = 'Write all the input fields 📩'
    } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_c5b1d9d', 'template_i3l9sqi', '#contact-form', 'OqPxT_JHgQ_ZThJGW')
            .then(() => {
                // Show message and add color
                contactMessage.classList.add('color-blue')
                contactMessage.textContent = 'Mensagem enviada ✅'

                // Remove message after five seconds
                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 5000)
            }, (error) => {
                alert('OOPS! POR ALGUM MOTIVO FALHOU...', error)
            })

        // To clear the input field
        contactName.value = ''
        contactProject.value = ''
    }
}

contactForm.addEventListener('submit', sendEmail)

/* comment1 */
const comment1Form = document.getElementById('comment1-form'),
    comment1Name = document.getElementById('comment1-name'),
    comment1Number = document.getElementById('comment1-number'),
    comment1Project = document.getElementById('comment1-project'),
    comment1Message = document.getElementById('comment1-message')

const sendComment1 = (e) => {
    e.preventDefault()

    // Check if the field has a value
    if (comment1Name.value === '' || comment1Project.value === '' || comment1Number.value === '') {
        // Add and remove color
        comment1Message.classList.remove('color-blue')
        comment1Message.classList.add('color-red')

        // Show message	
        comment1Message.textContent = 'escreva todos os campos de entrada 📩'
    } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_c5b1d9d', 'template_1rsv4tj', '#comment1-form', 'OqPxT_JHgQ_ZThJGW')
            .then(() => {
                // Show message and add color
                comment1Message.classList.add('color-blue')
                comment1Message.textContent = 'Mensagem enviada ✅'

                // Remove message after five seconds
                setTimeout(() => {
                    comment1Message.textContent = ''
                }, 5000)
            }, (error) => {
                alert('OOPS! POR ALGUM MOTIVO FALHOU...', error)
            })

        // To clear the input field
        comment1Name.value = ''
        comment1Number.value = ''
        comment1Project.value = ''
    }
}

comment1Form.addEventListener('submit', sendComment1)

/* comment-2 */
const comment2Form = document.getElementById('comment2-form'),
    comment2Name = document.getElementById('comment2-name'),
    comment2Number = document.getElementById('comment2-number'),
    comment2Project = document.getElementById('comment2-project'),
    comment2Message = document.getElementById('comment2-message')

const sendComment2 = (e) => {
    e.preventDefault()

    // Check if the field has a value
    if (comment2Name.value === '' || comment2Project.value === '' || comment2Number.value === '') {
        // Add and remove color
        comment2Message.classList.remove('color-blue')
        comment2Message.classList.add('color-red')

        // Show message	
        comment2Message.textContent = 'escreva todos os campos de entrada 📩'
    } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_c5b1d9d', 'template_1rsv4tj', '#comment2-form', 'OqPxT_JHgQ_ZThJGW')
            .then(() => {
                // Show message and add color
                comment2Message.classList.add('color-blue')
                comment2Message.textContent = 'Mensagem enviada ✅'

                // Remove message after five seconds
                setTimeout(() => {
                    comment2Message.textContent = ''
                }, 5000)
            }, (error) => {
                alert('OOPS! POR ALGUM MOTIVO FALHOU...', error)
            })

        // To clear the input field
        comment2Name.value = ''
        comment2Number.value = ''
        comment2Project.value = ''
    }
}

comment2Form.addEventListener('submit', sendComment2)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
        // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') :
        scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
        // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
        // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') :
        header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home__data, .projects__container, .testimonial__container, .footer__container, .download__container`)
sr.reveal(`.home__info div`, { delay: 600, origin: 'bottom', interval: 100 })
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, { origin: 'left' })
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, { origin: 'right' })
sr.reveal(`.qualification__content, .services__card`, { interval: 100 })