// src/js/tailwind.config.js
tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    red: '#D90429',      // Vermelho Destaque
                    darkRed: '#B00220',  // Hover
                    black: '#0A0A0A',    // Fundo Principal
                    surface: '#161616',  // Cards
                    border: '#2B2B2B',   // Bordas Metálicas
                    text: '#F4F4F9',     // Texto Principal
                    muted: '#A0A0A0'     // Texto Secundário
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Montserrat', 'sans-serif'],
            },
            backgroundImage: {
                'carbon': "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
            }
        }
    }
}