class AppHero extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="home" class="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-zinc-900">
    
                <img src="./src/assets/img/logo-highlinedetail-removebg.png" 
                    alt="logo da highline detail" 
                    class="absolute inset-0 w-full h-full object-cover" style="filter: blur(10px); background-size: contain;">
                    
                <div class="absolute inset-0 bg-black bg-opacity-70"></div>

                <div class="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6 w-full">
                    
                    <h2 class="text-brand-red font-bold tracking-widest text-sm mb-4 uppercase animate-fade-in-up">
                        Estética Automotiva de Alto Padrão
                    </h2>

                    <h1 class="font-display text-4xl md:text-7xl font-extrabold uppercase leading-tight mb-6 text-glow text-white">
                        Tudo que tem <br> lata motor e roda <br> <span class="text-brand-red">merece cuidado</span>
                    </h1>
                    
                    <p class="text-brand-muted text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                        Especialistas em detalhamento, limpeza, vitrificação e proteção de pintura. 
                        Tecnologia de ponta para um acabamento impecável.
                    </p>
                    
                    <div class="flex flex-col md:flex-row gap-4 justify-center">
                        <button id="hero-cta" class="px-8 py-4 bg-brand-red text-white font-bold rounded text-lg hover:bg-brand-darkRed transition-all btn-glow uppercase">
                            Agendar Serviço
                        </button>
                        
                        <a href="#servicos" class="px-8 py-4 bg-transparent border border-gray-600 text-white font-bold rounded text-lg hover:border-white transition-all uppercase">
                            Ver Catálogo
                        </a>
                    </div>
                    
                </div>
            </section>
        `;
        
        this.setupEvents();
    }

    setupEvents() {
        // Dispara o mesmo evento global 'open-modal'
        const btn = this.querySelector('#hero-cta');
        if(btn) {
            btn.addEventListener('click', () => {
                window.dispatchEvent(new CustomEvent('open-modal'));
            });
        }
    }
}

customElements.define('app-hero', AppHero);