document.addEventListener('DOMContentLoaded', () => {
    
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navIcon = navToggle.querySelector('i');
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            navMenu.classList.add('active');
            navIcon.classList.remove('ri-menu-4-line');
            navIcon.classList.add('ri-close-line');
            document.body.style.overflow = 'hidden';
        } else {
            navMenu.classList.remove('active');
            navIcon.classList.add('ri-menu-4-line');
            navIcon.classList.remove('ri-close-line');
            document.body.style.overflow = '';
        }
    }

    navToggle.addEventListener('click', toggleMenu);


    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) toggleMenu();
        });
    });


    
    const observerOptions = {
        threshold: 0.15, 
        rootMargin: "0px"
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in');
    animatedElements.forEach(el => scrollObserver.observe(el));



    const accordionItems = document.querySelectorAll('.accordion__item');

    accordionItems.forEach(item => {
        const trigger = item.querySelector('.accordion__trigger');
        const content = item.querySelector('.accordion__content');

        trigger.addEventListener('click', () => {
           
            accordionItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion__content').style.height = 0;
                }
            });

          
            const isActive = item.classList.contains('active');
            
            if (!isActive) {
                item.classList.add('active');
                content.style.height = content.scrollHeight + 'px';
            } else {
                item.classList.remove('active');
                content.style.height = 0;
            }
        });
    });


    const mediaContainers = document.querySelectorAll('.cases__media');

    mediaContainers.forEach(container => {
        const video = container.querySelector('video');
        
        if (video) {
            container.addEventListener('mouseenter', () => {
                video.play().catch(error => {
                  
                    console.log("Autoplay prevented:", error);
                });
            });

            container.addEventListener('mouseleave', () => {
                video.pause();
            });
        }
    });

});

Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

// Shery.imageMasker(".hero-video" , {
//   mouseFollower: true,
//   text: "Watch the full video",
//   duration: 1,
// });