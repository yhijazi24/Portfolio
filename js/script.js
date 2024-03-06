window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = '#a2161adb';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

/*=============== Hamburger Menu ===============*/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav__link");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});
function closeHamburgerMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

navLinks.forEach((link) => {
    link.addEventListener("click", () => {

        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
            closeHamburgerMenu();
        }
    });
   
});


/*=============== Image Auto Loader ===============*/
const imageUrls0 = ['img/project1_img/ebook2.png', 'img/project1_img/ebook3.png', 'img/project1_img/ebook4.png'];

let index0 = 0;
function changeImages0() {
    document.getElementById('image1').src = imageUrls0[index0];
    index0 = (index0 + 1) % imageUrls0.length;
}

setInterval(changeImages0, 3000);


const imageUrls1 = ['img/project2_img/mustad2.png', 'img/project2_img/mustad3.png', 'img/project2_img/mustad4.png', 'img/project2_img/mustad5.png', 'img/project2_img/mustad6.png', 'img/project2_img/mustad7.png', 'img/project2_img/mustad8.png', 'img/project2_img/mustad9.png', 'img/project2_img/mustad10.png', 'img/project2_img/mustad11.png', 'img/project2_img/mustad12.png', 'img/project2_img/mustad13.png'];

let index1 = 0;
function changeImages1() {
    document.getElementById('image2').src = imageUrls1[index1];
    index1 = (index1 + 1) % imageUrls1.length;
}
setInterval(changeImages1, 3000);

const imageUrls2 = ['img/project3_img/portfolio2.PNG', 'img/project3_img/portfolio3.PNG', 'img/project3_img/portfolio4.PNG'];

let index2 = 0;
function changeImages2() {
    document.getElementById('image3').src = imageUrls2[index2];
    index2 = (index2 + 1) % imageUrls2.length;
}

setInterval(changeImages2, 3000);

const imageUrls3 = ['img/project5__img/init1.PNG', 'img/project5__img/init2.PNG', 'img/project5__img/init3.PNG', 'img/project5__img/init4.PNG'];

let index3 = 0;
function changeImages3() {
    document.getElementById('image5').src = imageUrls3[index3];
    index3 = (index3 + 1) % imageUrls3.length;
}

setInterval(changeImages3, 3000);

/*=============== View More and Hide Feature ===============*/
document.addEventListener("DOMContentLoaded", function () {
    const Btn = document.getElementById('myBtn');
    const hideBtn = document.getElementById('hideBtn');
    const project = document.querySelectorAll('.project__view');
    const viewButtonContainer = document.querySelector('.projects__home');


    project.forEach((view, index) => {
        if (index >= project.length - 2) {
            view.style.display = 'none';
        }
    });

    Btn.addEventListener('click', function () {
        project.forEach((view, index) => {
            if (index >= project.length - 2) {
                view.style.display = 'block';
                hideBtn.style.display = 'block'
            }
        });

        Btn.style.display = 'none';
    });


    hideBtn.addEventListener('click', function () {
        project.forEach((view, index) => {
            if (index >= project.length - 2) {
                view.style.display = 'none';
            }
        });
        viewButtonContainer.removeChild(hideBtn);
        Btn.style.display = 'block';
    });
});

/*=============== SHOW SCROLL UP ===============*/
document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }
    scrollToTopBtn.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});


