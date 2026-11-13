document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Efeito de Máquina de Escrever no Título Principal
    const titleElement = document.getElementById("typing-title");
    const titleText = "Como Será a Minha Vida";
    let index = 0;

    function typeWriter() {
        if (index < titleText.length) {
            titleElement.innerHTML += titleText.charAt(index);
            index++;
            setTimeout(typeWriter, 90); // Velocidade da digitação
        }
    }
    typeWriter();

    // 2. Animação de Revelação ao Rolar a Página (Intersection Observer)
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.2 // Dispara a animação quando 20% do cartão aparece na tela
    });

    cards.forEach((card) => {
        observer.observe(card);
    });

    // 3. Barra de Progresso de Leitura no Topo
    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        document.getElementById("progressBar").style.width = scrollPercent + "%";
    });
});