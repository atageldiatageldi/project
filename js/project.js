const slides = document.querySelectorAll(".item");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;
const intervalTime = 3000;
let slideInterval;


// barde acyk duran slaydyn indeksi bilen forEach - daki slaydyn indeksi gabat gelse gorkezyar 
function showSlide(index)
{
    slides.forEach((slide,i) => 
    {
        slide.classList.toggle("active", i == index);
        dots[i].classList.toggle("active", i == index);
    });
    document.querySelector(".slides").style.transform = `translateX(-${index * 100}%)`;
}

// her gezek barde loop bolup inniki slayda gecyar
function nextSlide(){
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// her 3 sekundan automatiki inniki slayda gecyar
function startAutoSlide()
{
    slideInterval = setInterval(nextSlide,intervalTime);
}

// autoslide ocurmek
function stopAutoSlide()
{
    clearInterval(slideInterval);
}

// indicatorlary isletmek
dots.forEach((dot,i) => {
    dot.addEventListener("click",() => {
        stopAutoSlide();
        showSlide(index);
        startAutoSlide();
    });
});



