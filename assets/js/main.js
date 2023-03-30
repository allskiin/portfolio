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
    if (contactName.value === '' || contactProject.value === '') {
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
      commentName = document.getElementById('comment-name'),
    comment1Project = document.getElementById('comment1-project'),
    comment1Message = document.getElementById('comment1-message')

const sendComment1 = (e) => {
    e.preventDefault()

    // Check if the field has a value
    if (comment1Name.value === ''||comment1Project.value === '') {
        // Add and remove color
        comment1Message.classList.remove('color-blue')
        comment1Message.classList.add('color-red')

        // Show message	
        comment1Message.textContent = 'Write all the input fields 📩'
    } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_c5b1d9d', 'template_i3l9sqi', '#comment1-form', 'OqPxT_JHgQ_ZThJGW')
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
        comment1Project.value = ''
    }
}

comment1Form.addEventListener('submit', sendComment1)

/* comment-2 */
const comment2Form = document.getElementById('comment2-form'),
      commentName = document.getElementById('comment-name'),
    comment2Project = document.getElementById('comment2-project'),
    comment2Message = document.getElementById('comment2-message')

const sendComment2 = (e) => {
    e.preventDefault()

    // Check if the field has a value
    if (comment2Name.value === ''||comment2Project.value === '') {
        // Add and remove color
        comment2Message.classList.remove('color-blue')
        comment2Message.classList.add('color-red')

        // Show message	
        comment2Message.textContent = 'Write all the input fields 📩'
    } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_c5b1d9d', 'template_i3l9sqi', '#comment2-form', 'OqPxT_JHgQ_ZThJGW')
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
        comment2Project.value = ''
    }
}

comment2Form.addEventListener('submit', sendComment2)

/* comment-3 */
const comment3Form = document.getElementById('comment3-form'),
      commentName = document.getElementById('comment-name'),
    comment3Project = document.getElementById('comment3-project'),
    comment3Message = document.getElementById('comment3-message')

const sendComment3 = (e) => {
    e.preventDefault()

    // Check if the field has a value
    if (comment3Name.value === ''||comment3Project.value === '') {
        // Add and remove color
        comment3Message.classList.remove('color-blue')
        comment3Message.classList.add('color-red')

        // Show message	
        comment3Message.textContent = 'Write all the input fields 📩'
    } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_c5b1d9d', 'template_i3l9sqi', '#comment3-form', 'OqPxT_JHgQ_ZThJGW')
            .then(() => {
                // Show message and add color
                comment3Message.classList.add('color-blue')
                comment3Message.textContent = 'Mensagem enviada ✅'

                // Remove message after five seconds
                setTimeout(() => {
                    comment3Message.textContent = ''
                }, 5000)
            }, (error) => {
                alert('OOPS! POR ALGUM MOTIVO FALHOU...', error)
            })

        // To clear the input field
        comment3Project.value = ''
    }
}

comment3Form.addEventListener('submit', sendComment3)

/* comment-4 */
const comment4Form = document.getElementById('comment4-form'),
      commentName = document.getElementById('comment-name'),
    comment4Project = document.getElementById('comment4-project'),
    comment4Message = document.getElementById('comment4-message')

const sendComment4 = (e) => {
    e.preventDefault()

    // Check if the field has a value
    if (comment4Name.value === ''||comment4Project.value === '') {
        // Add and remove color
        comment4Message.classList.remove('color-blue')
        comment4Message.classList.add('color-red')

        // Show message	
        comment4Message.textContent = 'Write all the input fields 📩'
    } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_c5b1d9d', 'template_i3l9sqi', '#comment4-form', 'OqPxT_JHgQ_ZThJGW')
            .then(() => {
                // Show message and add color
                comment4Message.classList.add('color-blue')
                comment4Message.textContent = 'Mensagem enviada ✅'

                // Remove message after five seconds
                setTimeout(() => {
                    comment4Message.textContent = ''
                }, 5000)
            }, (error) => {
                alert('OOPS! POR ALGUM MOTIVO FALHOU...', error)
            })

        // To clear the input field
        comment4Project.value = ''
    }
}

comment4Form.addEventListener('submit', sendComment4)

/* comment-5 */
const comment5Form = document.getElementById('comment5-form'),
      commentName = document.getElementById('comment-name'),
    comment5Project = document.getElementById('comment5-project'),
    comment5Message = document.getElementById('comment5-message')

const sendComment5 = (e) => {
    e.preventDefault()

    // Check if the field has a value
    if (comment5Name.value === ''||comment5Project.value === '') {
        // Add and remove color
        comment5Message.classList.remove('color-blue')
        comment5Message.classList.add('color-red')

        // Show message	
        comment5Message.textContent = 'Write all the input fields 📩'
    } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_c5b1d9d', 'template_i3l9sqi', '#comment5-form', 'OqPxT_JHgQ_ZThJGW')
            .then(() => {
                // Show message and add color
                comment5Message.classList.add('color-blue')
                comment5Message.textContent = 'Mensagem enviada ✅'

                // Remove message after five seconds
                setTimeout(() => {
                    comment5Message.textContent = ''
                }, 5000)
            }, (error) => {
                alert('OOPS! POR ALGUM MOTIVO FALHOU...', error)
            })

        // To clear the input field
        comment5Project.value = ''
    }
}

comment5Form.addEventListener('submit', sendComment5)

/* comment-6 */
const comment6Form = document.getElementById('comment6-form'),
      commentName = document.getElementById('comment-name'),
    comment6Project = document.getElementById('comment6-project'),
    comment6Message = document.getElementById('comment6-message')

const sendComment6 = (e) => {
    e.preventDefault()

    // Check if the field has a value
    if (comment6Name.value === ''||comment6Project.value === '') {
        // Add and remove color
        comment6Message.classList.remove('color-blue')
        comment6Message.classList.add('color-red')

        // Show message	
        comment6Message.textContent = 'Write all the input fields 📩'
    } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_c5b1d9d', 'template_i3l9sqi', '#comment6-form', 'OqPxT_JHgQ_ZThJGW')
            .then(() => {
                // Show message and add color
                comment6Message.classList.add('color-blue')
                comment6Message.textContent = 'Mensagem enviada ✅'

                // Remove message after five seconds
                setTimeout(() => {
                    comment6Message.textContent = ''
                }, 5000)
            }, (error) => {
                alert('OOPS! POR ALGUM MOTIVO FALHOU...', error)
            })

        // To clear the input field
        comment6Project.value = ''
    }
}

comment6Form.addEventListener('submit', sendComment6)

/* comment-7 */
const comment7Form = document.getElementById('comment7-form'),
      commentName = document.getElementById('comment-name'),
    comment7Project = document.getElementById('comment7-project'),
    comment7Message = document.getElementById('comment7-message')

const sendComment7 = (e) => {
    e.preventDefault()

    // Check if the field has a value
    if (comment7Name.value === ''||comment7Project.value === '') {
        // Add and remove color
        comment7Message.classList.remove('color-blue')
        comment7Message.classList.add('color-red')

        // Show message	
        comment7Message.textContent = 'Write all the input fields 📩'
    } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_c5b1d9d', 'template_i3l9sqi', '#comment7-form', 'OqPxT_JHgQ_ZThJGW')
            .then(() => {
                // Show message and add color
                comment7Message.classList.add('color-blue')
                comment7Message.textContent = 'Mensagem enviada ✅'

                // Remove message after five seconds
                setTimeout(() => {
                    comment7Message.textContent = ''
                }, 5000)
            }, (error) => {
                alert('OOPS! POR ALGUM MOTIVO FALHOU...', error)
            })

        // To clear the input field
        comment7Project.value = ''
    }
}

comment7Form.addEventListener('submit', sendComment7)

/* comment-8 */
const comment8Form = document.getElementById('comment8-form'),
      commentName = document.getElementById('comment-name'),
    comment8Project = document.getElementById('comment8-project'),
    comment8Message = document.getElementById('comment8-message')

const sendComment8 = (e) => {
    e.preventDefault()

    // Check if the field has a value
    if (comment8Name.value === ''||comment8Project.value === '') {
        // Add and remove color
        comment8Message.classList.remove('color-blue')
        comment8Message.classList.add('color-red')

        // Show message	
        comment8Message.textContent = 'Write all the input fields 📩'
    } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_c5b1d9d', 'template_i3l9sqi', '#comment8-form', 'OqPxT_JHgQ_ZThJGW')
            .then(() => {
                // Show message and add color
                comment8Message.classList.add('color-blue')
                comment8Message.textContent = 'Mensagem enviada ✅'

                // Remove message after five seconds
                setTimeout(() => {
                    comment8Message.textContent = ''
                }, 5000)
            }, (error) => {
                alert('OOPS! POR ALGUM MOTIVO FALHOU...', error)
            })

        // To clear the input field
        comment8Project.value = ''
    }
}

comment8Form.addEventListener('submit', sendComment8)

/* comment-9 */
const comment9Form = document.getElementById('comment9-form'),
      commentName = document.getElementById('comment-name'),
    comment9Project = document.getElementById('comment9-project'),
    comment9Message = document.getElementById('comment9-message')

const sendComment9 = (e) => {
    e.preventDefault()

    // Check if the field has a value
    if (comment9Name.value === ''||comment9Project.value === '') {
        // Add and remove color
        comment9Message.classList.remove('color-blue')
        comment9Message.classList.add('color-red')

        // Show message	
        comment9Message.textContent = 'Write all the input fields 📩'
    } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_c5b1d9d', 'template_i3l9sqi', '#comment9-form', 'OqPxT_JHgQ_ZThJGW')
            .then(() => {
                // Show message and add color
                comment9Message.classList.add('color-blue')
                comment9Message.textContent = 'Mensagem enviada ✅'

                // Remove message after five seconds
                setTimeout(() => {
                    comment9Message.textContent = ''
                }, 5000)
            }, (error) => {
                alert('OOPS! POR ALGUM MOTIVO FALHOU...', error)
            })

        // To clear the input field
        comment9Project.value = ''
    }
}

comment9Form.addEventListener('submit', sendComment9)

/* comment-10 */
const comment10Form = document.getElementById('comment10-form'),
      commentName = document.getElementById('comment-name'),
    comment10Project = document.getElementById('comment10-project'),
    comment10Message = document.getElementById('comment10-message')

const sendComment10 = (e) => {
    e.preventDefault()

    // Check if the field has a value
    if (comment10Name.value === ''||comment10Project.value === '') {
        // Add and remove color
        comment10Message.classList.remove('color-blue')
        comment10Message.classList.add('color-red')

        // Show message	
        comment10Message.textContent = 'Write all the input fields 📩'
    } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_c5b1d9d', 'template_i3l9sqi', '#comment10-form', 'OqPxT_JHgQ_ZThJGW')
            .then(() => {
                // Show message and add color
                comment10Message.classList.add('color-blue')
                comment10Message.textContent = 'Mensagem enviada ✅'

                // Remove message after five seconds
                setTimeout(() => {
                    comment10Message.textContent = ''
                }, 5000)
            }, (error) => {
                alert('OOPS! POR ALGUM MOTIVO FALHOU...', error)
            })

        // To clear the input field
        comment10Project.value = ''
    }
}

comment10Form.addEventListener('submit', sendComment10)

/* comment-11 */
const comment11Form = document.getElementById('comment11-form'),
      commentName = document.getElementById('comment-name'),
    comment11Project = document.getElementById('comment11-project'),
    comment11Message = document.getElementById('comment11-message')

const sendComment11 = (e) => {
    e.preventDefault()

    // Check if the field has a value
    if (comment11Name.value === ''||comment11Project.value === '') {
        // Add and remove color
        comment11Message.classList.remove('color-blue')
        comment11Message.classList.add('color-red')

        // Show message	
        comment11Message.textContent = 'Write all the input fields 📩'
    } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_c5b1d9d', 'template_i3l9sqi', '#comment11-form', 'OqPxT_JHgQ_ZThJGW')
            .then(() => {
                // Show message and add color
                comment11Message.classList.add('color-blue')
                comment11Message.textContent = 'Mensagem enviada ✅'

                // Remove message after five seconds
                setTimeout(() => {
                    comment11Message.textContent = ''
                }, 5000)
            }, (error) => {
                alert('OOPS! POR ALGUM MOTIVO FALHOU...', error)
            })

        // To clear the input field
        comment11Project.value = ''
    }
}

comment11Form.addEventListener('submit', sendComment11)

/* comment-12 */
const comment12Form = document.getElementById('comment12-form'),
      commentName = document.getElementById('comment-name'),
    comment12Project = document.getElementById('comment12-project'),
    comment12Message = document.getElementById('comment12-message')

const sendComment12 = (e) => {
    e.preventDefault()

    // Check if the field has a value
    if (comment12Name.value === ''||comment12Project.value === '') {
        // Add and remove color
        comment12Message.classList.remove('color-blue')
        comment12Message.classList.add('color-red')

        // Show message	
        comment12Message.textContent = 'Write all the input fields 📩'
    } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_c5b1d9d', 'template_i3l9sqi', '#comment12-form', 'OqPxT_JHgQ_ZThJGW')
            .then(() => {
                // Show message and add color
                comment12Message.classList.add('color-blue')
                comment12Message.textContent = 'Mensagem enviada ✅'

                // Remove message after five seconds
                setTimeout(() => {
                    comment12Message.textContent = ''
                }, 5000)
            }, (error) => {
                alert('OOPS! POR ALGUM MOTIVO FALHOU...', error)
            })

        // To clear the input field
        comment12Project.value = ''
    }
}

comment12Form.addEventListener('submit', sendComment12)

/* comment-13 */
const comment13Form = document.getElementById('comment13-form'),
      commentName = document.getElementById('comment-name'),
    comment13Project = document.getElementById('comment13-project'),
    comment13Message = document.getElementById('comment13-message')

const sendComment13 = (e) => {
    e.preventDefault()

    // Check if the field has a value
    if (comment13Name.value === ''||comment13Project.value === '') {
        // Add and remove color
        comment13Message.classList.remove('color-blue')
        comment13Message.classList.add('color-red')

        // Show message	
        comment13Message.textContent = 'Write all the input fields 📩'
    } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_c5b1d9d', 'template_i3l9sqi', '#comment13-form', 'OqPxT_JHgQ_ZThJGW')
            .then(() => {
                // Show message and add color
                comment13Message.classList.add('color-blue')
                comment13Message.textContent = 'Mensagem enviada ✅'

                // Remove message after five seconds
                setTimeout(() => {
                    comment13Message.textContent = ''
                }, 5000)
            }, (error) => {
                alert('OOPS! POR ALGUM MOTIVO FALHOU...', error)
            })

        // To clear the input field
        comment13Project.value = ''
    }
}

comment13Form.addEventListener('submit', sendComment13)
    /* comment-14 */
const comment14Form = document.getElementById('comment14-form'),
      commentName = document.getElementById('comment-name'),
    comment14Project = document.getElementById('comment14-project'),
    comment14Message = document.getElementById('comment14-message')

const sendComment14 = (e) => {
    e.preventDefault()

    // Check if the field has a value
    if (comment14Name.value === ''||comment14Project.value === '') {
        // Add and remove color
        comment14Message.classList.remove('color-blue')
        comment14Message.classList.add('color-red')

        // Show message	
        comment14Message.textContent = 'Write all the input fields 📩'
    } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_c5b1d9d', 'template_i3l9sqi', '#comment14-form', 'OqPxT_JHgQ_ZThJGW')
            .then(() => {
                // Show message and add color
                comment14Message.classList.add('color-blue')
                comment14Message.textContent = 'Mensagem enviada ✅'

                // Remove message after five seconds
                setTimeout(() => {
                    comment14Message.textContent = ''
                }, 5000)
            }, (error) => {
                alert('OOPS! POR ALGUM MOTIVO FALHOU...', error)
            })

        // To clear the input field
        comment14Project.value = ''
    }
}

comment14Form.addEventListener('submit', sendComment14)

/* comment-15 */
const comment15Form = document.getElementById('comment15-form'),
      commentName = document.getElementById('comment-name'),
    comment15Project = document.getElementById('comment15-project'),
    comment15Message = document.getElementById('comment15-message')

const sendComment15 = (e) => {
    e.preventDefault()

    // Check if the field has a value
    if (comment15Name.value === ''|| comment15Project.value === '') {
        // Add and remove color
        comment15Message.classList.remove('color-blue')
        comment15Message.classList.add('color-red')

        // Show message	
        comment15Message.textContent = 'Write all the input fields 📩'
    } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_c5b1d9d', 'template_i3l9sqi', '#comment15-form', 'OqPxT_JHgQ_ZThJGW')
            .then(() => {
                // Show message and add color
                comment15Message.classList.add('color-blue')
                comment15Message.textContent = 'Mensagem enviada ✅'

                // Remove message after five seconds
                setTimeout(() => {
                    comment15Message.textContent = ''
                }, 5000)
            }, (error) => {
                alert('OOPS! POR ALGUM MOTIVO FALHOU...', error)
            })

        // To clear the input field
        comment15Project.value = ''
    }
}

comment15Form.addEventListener('submit', sendComment15)

/* comment-16 */
const comment16Form = document.getElementById('comment16-form'),
      commentName = document.getElementById('comment-name'),
    comment16Project = document.getElementById('comment16-project'),
    comment16Message = document.getElementById('comment16-message')

const sendComment16 = (e) => {
    e.preventDefault()

    // Check if the field has a value
    if (comment16Name.value === ''||comment16Project.value === '') {
        // Add and remove color
        comment16Message.classList.remove('color-blue')
        comment16Message.classList.add('color-red')

        // Show message	
        comment16Message.textContent = 'Write all the input fields 📩'
    } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_c5b1d9d', 'template_i3l9sqi', '#comment16-form', 'OqPxT_JHgQ_ZThJGW')
            .then(() => {
                // Show message and add color
                comment16Message.classList.add('color-blue')
                comment16Message.textContent = 'Mensagem enviada ✅'

                // Remove message after five seconds
                setTimeout(() => {
                    comment16Message.textContent = ''
                }, 5000)
            }, (error) => {
                alert('OOPS! POR ALGUM MOTIVO FALHOU...', error)
            })

        // To clear the input field
        comment16Project.value = ''
    }
}

comment16Form.addEventListener('submit', sendComment16)

/* comment-17 */
const comment17Form = document.getElementById('comment17-form'),
      commentName = document.getElementById('comment-name'),
    comment17Project = document.getElementById('comment17-project'),
    comment17Message = document.getElementById('comment17-message')

const sendComment17 = (e) => {
    e.preventDefault()

    // Check if the field has a value
    if (comment17Name.value === ''|| comment17Project.value === '') {
        // Add and remove color
        comment17Message.classList.remove('color-blue')
        comment17Message.classList.add('color-red')

        // Show message	
        comment17Message.textContent = 'Write all the input fields 📩'
    } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_c5b1d9d', 'template_i3l9sqi', '#comment17-form', 'OqPxT_JHgQ_ZThJGW')
            .then(() => {
                // Show message and add color
                comment17Message.classList.add('color-blue')
                comment17Message.textContent = 'Mensagem enviada ✅'

                // Remove message after five seconds
                setTimeout(() => {
                    comment17Message.textContent = ''
                }, 5000)
            }, (error) => {
                alert('OOPS! POR ALGUM MOTIVO FALHOU...', error)
            })

        // To clear the input field
        comment17Project.value = ''
    }
}

comment17Form.addEventListener('submit', sendComment17)

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
