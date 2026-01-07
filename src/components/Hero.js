class AppHero extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="home" class="relative h-screen flex items-center justify-center overflow-hidden">
                <div class="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1920&auto=format&fit=crop" 
                         alt="Carro Esportivo" 
                         class="w-full h-full object-cover opacity-60">
                    <div class="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent"></div>
                </div>

                <div class="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
                    <h2 class="text-brand-red font-bold tracking-widest text-sm mb-4 uppercase animate-fade-in-up">
                        Estética Automotiva de Alto Padrão
                    </h2>
                    
                    <h1 class="font-display text-5xl md:text-7xl font-extrabold uppercase leading-tight mb-6 text-glow text-white">
                        O seu carro <br> novo de novo
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