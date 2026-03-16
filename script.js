// 1. EFEITO PARALLAX DA ÁRVORE
const tree = document.getElementById('tree1');

document.addEventListener('mousemove', (e) => {
    // Calcula a posição do mouse em relação ao centro da tela
    let x = (window.innerWidth / 2 - e.clientX) / 25;
    let y = (window.innerHeight / 2 - e.clientY) / 25;

    // Move a árvore suavemente (invertendo o valor para o efeito parallax)
    tree.style.transform = `translate(${-x}px, ${-y}px)`;
});

// 2. EFEITO ACORDEÃO (PILARES)
const acc = document.getElementsByClassName("accordion-btn");

for (let i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        panel.style.display = (panel.style.display === "block") ? "none" : "block";
    }
}

// 3. BOTÃO MODO ECO
document.getElementById("btn-interativo").onclick = function() {
    document.body.style.backgroundColor = "#f0fff0";
    alert("🌱 Modo Sustentável Ativado: O equilíbrio entre produção e planeta é o único caminho! [cite: 33]");
};