let slides = [];
let currentIndex = 0;

function Slide(tipoGlobal, titulo, descricao, midias = []) {
    const slide = document.createElement("div");
    slide.className = "slide";

    const mediaBox = document.createElement("div");
    mediaBox.className = "media-box multi";

    midias.forEach(({ tipo, src }) => {
        if (tipo.toLowerCase() === "vídeo" || tipo.toLowerCase() === "video") {
        const video = document.createElement("video");
        video.src = src;
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        mediaBox.appendChild(video);
        } else if (tipo.toLowerCase() === "imagem" || tipo.toLowerCase() === "image") {
        const img = document.createElement("img");
        img.src = src;
        mediaBox.appendChild(img);
        }
    });

    const textBox = document.createElement("div");
    textBox.className = "text-box";

    const h2 = document.createElement("h2");
    h2.textContent = titulo;

    const p = document.createElement("p");
    p.textContent = descricao;

    const btn = document.createElement("button");
    btn.className = "btn btn-outline-light next-btn";
    btn.style.fontSize = "2.2rem"; 
    btn.style.padding = "10px 20px";
    btn.textContent = "Próximo";
    btn.onclick = nextSlide;

    textBox.appendChild(h2);
    textBox.appendChild(p);
    textBox.appendChild(btn);

    slide.appendChild(mediaBox);
    slide.appendChild(textBox);

    document.getElementById("carousel-container").appendChild(slide);
    slides.push(slide);
    updateIndicators();
    showSlide(slides.length - 1);
    }  

function showSlide(index) {
slides.forEach((s, i) => {
    s.classList.remove("active");
    if (i === index) s.classList.add("active");
});
currentIndex = index;
updateIndicators();
}

function nextSlide() {
const next = (currentIndex + 1) % slides.length;
showSlide(next);
}

function updateIndicators() {
const bar = document.getElementById("indicator-bar");
bar.innerHTML = "";
for (let i = 0; i < slides.length; i++) {
    const span = document.createElement("span");
    span.textContent = "-";
    span.className = i === currentIndex ? "active-indicator" : "";
    bar.appendChild(span);
}
}
