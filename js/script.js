/*=============== Image Auto Loader ===============*/
const imageUrls = ['img/project1_img/ebook2.png', 'img/project1_img/ebook3.png', 'img/project1_img/ebook4.png'];

let index = 0;
function changeImage() {
    document.getElementById('image1').src = imageUrls[index];
    index = (index + 1) % imageUrls.length;
}

setInterval(changeImage, 3000);


const imageUrl = ['img/project2_img/mustad2.png', 'img/project2_img/mustad3.png', 'img/project2_img/mustad4.png', 'img/project2_img/mustad5.png', 'img/project2_img/mustad6.png', 'img/project2_img/mustad7.png', 'img/project2_img/mustad8.png', 'img/project2_img/mustad9.png', 'img/project2_img/mustad10.png', 'img/project2_img/mustad11.png', 'img/project2_img/mustad12.png', 'img/project2_img/mustad13.png'];

let indexs = 0;
function changeImages() {
    document.getElementById('image2').src = imageUrl[indexs];
    indexs = (indexs + 1) % imageUrl.length;
}

setInterval(changeImages, 3000);
/*=============== View More and Hide Feature ===============*/
function myFunction() {
    var dots = document.getElementById("dots");
    var project5 = document.querySelectorAll(".project5");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      project5.style.display = "block";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      project5.style.display == "inline";
    }
  }




