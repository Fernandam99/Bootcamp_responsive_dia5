// Cargar DOM 
document.addEventListener('DOMContentLoaded', function() {
    // desplazamiento enlaces internos
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Actualizar la URL sin recargar la página
                history.pushState(null, null, targetId);
            }
        });
    });
    
    // efecto tarjetas de conceptos
    const conceptCards = document.querySelectorAll('.concept-card');
    
    function checkScroll() {
        conceptCards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Iniciar con tarjetas ocultas
    conceptCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
    
    // Comprobar al cargar y al hacer scroll
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Comprobar al cargar la página

    // Sistema de citas aleatorias
    const quotes = [
        {
            text: "Dios ha muerto. Dios sigue muerto. Y nosotros lo hemos matado.",
            source: "La gaya ciencia"
        },
        {
            text: "El individuo ha luchado siempre para no ser absorbido por la tribu. Si lo intentas, a menudo estarás solo, y a veces asustado. Pero ningún precio es demasiado alto por el privilegio de ser uno mismo.",
            source: "Más allá del bien y del mal"
        },
        {
            text: "Quien tiene un porqué para vivir puede soportar casi cualquier cómo.",
            source: "El ocaso de los ídolos"
        },
        {
            text: "No hay hechos, sólo interpretaciones.",
            source: "Fragmentos póstumos"
        },
        {
            text: "Quien con monstruos lucha cuide de no convertirse a su vez en monstruo. Cuando miras largo tiempo a un abismo, el abismo también mira dentro de ti.",
            source: "Más allá del bien y del mal"
        }
    ];
    
    const quoteButton = document.createElement('button');
    quoteButton.textContent = 'Mostrar otra cita';
    quoteButton.className = 'quote-button';
    quoteButton.style.cssText = `
        display: block;
        margin: 2rem auto;
        padding: 0.8rem 1.5rem;
        background: var(--accent-color);
        color: var(--primary-color);
        border: none;
        border-radius: 25px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
    `;
    
    quoteButton.addEventListener('mouseover', () => {
        quoteButton.style.transform = 'translateY(-2px)';
        quoteButton.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    });
    
    quoteButton.addEventListener('mouseout', () => {
        quoteButton.style.transform = 'translateY(0)';
        quoteButton.style.boxShadow = 'none';
    });
    
    // Insertar el botón después de citas
    const quotesContainer = document.querySelector('.quotes-container');
    quotesContainer.parentNode.insertBefore(quoteButton, quotesContainer.nextSibling);
    
    quoteButton.addEventListener('click', function() {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        
        // Crear una nueva tarjeta de cita
        const newQuoteCard = document.createElement('div');
        newQuoteCard.className = 'quote-card';
        newQuoteCard.innerHTML = `
            <p>${randomQuote.text}</p>
            <div class="quote-author">- Friedrich Nietzsche, <em>${randomQuote.source}</em></div>
        `;
        
        // efecto para la nueva tarjeta
        newQuoteCard.style.opacity = '0';
        newQuoteCard.style.transform = 'translateY(20px)';
        newQuoteCard.style.transition = 'all 0.5s ease-out';
        
        // reemplazo tarjeta cita
        const firstQuote = quotesContainer.querySelector('.quote-card');
        quotesContainer.insertBefore(newQuoteCard, firstQuote);
        firstQuote.remove();
        
        // Forzar el reflow para activar transición
        void newQuoteCard.offsetWidth;
        
        newQuoteCard.style.opacity = '1';
        newQuoteCard.style.transform = 'translateY(0)';
    });
    
    
    // accesibilidad del menú
    const menuItems = document.querySelectorAll('.header-nav a, .nav-list a');
    
    menuItems.forEach(item => {
        item.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--accent-color)';
            this.style.outlineOffset = '3px';
        });
        
        item.addEventListener('blur', function() {
            this.style.outline = '';
        });
    });
});