# Friedrich Nietzsche - Web Responsive  

![Preview del sitio](_img/Nietzche.jpg.webp)  

Un sitio web responsive dedicado al filósofo Friedrich Nietzsche, diseñado como proyecto academico para aprender diseño web adaptable.  

## 📋 Tabla de contenidos  
- [Características](#-características-principales)  
- [Estructura](#-estructura-del-proyecto)  
- [Tecnologías](#-tecnologías)  
- [Diseño Responsive](#-diseño-responsive)  
- [Autor](#-autor)  
 
## 🌟 Características principales  

✅ **Diseño 100% responsive** (móvil, tablet, desktop)  
✅ **Efectos interactivos**:  
   - Scroll suave entre secciones  
   - Tarjetas con animaciones al aparecer  
   - Sistema de citas aleatorias  
✅ **Organización visual**:  
   - Biografía en línea de tiempo  
   - Conceptos filosóficos en cards  
✅ **Buenas prácticas**:  
   - Variables CSS para consistencia  
   - Tipografía fluida con `clamp()`  
   - Semántica HTML5  

## 🗂 Estructura del proyecto  
```
nietzsche-responsive/
├── _css/
│ └── style.css # Estilos principales
├── _img/
│ └── Nietzche.jpg.webp # Imagen principal
├── _js/
│ └── script.js # Funcionalidades interactivas
├── index.html # Página principal
└── README.md # Documentación
```

## 💻 Tecnologías  

| Tecnología | Uso |  
|------------|-----|  
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | Estructura semántica |  
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | Diseño responsive |  
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Interactividad |  

## 📱 Diseño Responsive  

### Breakpoints clave:  
```css
/* Mobile First (default) */
.main-container { grid-template-columns: 1fr; }

/* Tablet (≥768px) */
@media (min-width: 768px) {
  .concepts-grid { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop (≥1024px) */
@media (min-width: 1024px) {
  .main-container { 
    grid-template-columns: 1fr 1fr 300px;
    grid-template-areas: 
      "header header header"
      "hero hero hero"
      "nav nav nav"
      "main main aside";
  }
}
```
## Técnicas destacadas:
- CSS Grid para layout principal

- Flexbox para componentes internos

- Unidades relativas (rem, vw, %)

- Imágenes adaptables con max-width: 100%

## 👨‍🎓 Autor
**Nombre:** Maria Fernanda Moreno Acosta
**Ficha:** 3147235