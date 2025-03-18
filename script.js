const path = window.location.pathname;
const hiddenEllements = document.querySelectorAll('.hidden');
const img = document.querySelector('.toggle');

function highlightCurrentPage() {

    if (path.includes('index.html')) {
        document.getElementById('navwork').classList.add('highlight');
    } else if (path.includes('contact.html')) {
        document.getElementById('navcontact').classList.add('highlight');
    } else if (path.includes('aboutme.html')) {
        document.getElementById('navabout').classList.add('highlight');
    }
}

highlightCurrentPage()



backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add('show');
    } else {
        entry.target.classList.remove('show');
    }
    });
});
hiddenEllements.forEach((el) => observer.observe(el));





document.querySelectorAll("section:nth-of-type(2) div img").forEach((img) => {
    img.addEventListener("click", function () {

        const isActive = this.classList.contains("zoom");

        
        document.querySelectorAll("section:nth-of-type(2) div img").forEach((otherImg) => {
            otherImg.classList.remove("zoom");
            otherImg.nextElementSibling.style.display = "none";
            otherImg.nextElementSibling.classList.remove("show");
        });

        
        if (!isActive) {
            
            const paragraph = this.nextElementSibling;
            paragraph.style.display = "block";
            setTimeout(() => { paragraph.classList.add("show"); }, 10);
            this.classList.add("zoom");
        }
    });
});


