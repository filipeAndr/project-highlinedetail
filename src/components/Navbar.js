class AppNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav id="navbar" class="fixed w-full z-50 transition-all duration-300 py-4 border-b border-transparent">
                <div class="container mx-auto px-6 flex justify-between items-center">
                    <a href="#" class="font-display text-2xl font-bold tracking-wider italic text-white">
                        HIGHLINE<span class="text-brand-red">DETAIL</span>
                    </a>

                    <div class="hidden md:flex space-x-8 text-sm font-medium text-white">
                        <a href="#home" class="hover:text-brand-red transition-colors">HOME</a>
                        <a href="#servicos" class="hover:text-brand-red transition-colors">SERVIÇOS</a>
                        <a href="#sobre" class="hover:text-brand-red transition-colors">A OFICINA</a>
                    </div>

                    <button id="nav-cta" class="hidden md:block px-6 py-2 border border-brand-red text-brand-red font-bold rounded hover:bg-brand-red hover:text-white transition-all btn-glow uppercase text-sm tracking-wide">
                        Agendar Agora
                    </button>

                    <button class="md:hidden text-white text-2xl">
                        &#9776;
                    </button>
                </div>
            </nav>
        `;

        this.setupScrollEffect();
        this.setupEvents();
    }

    setupScrollEffect() {
        const nav = this.querySelector('nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                // Estado "Scrolled": Fundo escuro + Blur
                nav.classList.add('bg-brand-black/90', 'backdrop-blur-md', 'shadow-lg', 'border-brand-border');
                nav.classList.remove('border-transparent', 'py-4');
                nav.classList.add('py-2'); // Fica mais compacto ao rolar
            } else {
                // Estado "Topo": Transparente
                nav.classList.remove('bg-brand-black/90', 'backdrop-blur-md', 'shadow-lg', 'border-brand-border', 'py-2');
                nav.classList.add('border-transparent', 'py-4');
            }
        });
    }

    setupEvents() {
        // Dispara evento global para abrir o modal
        const btn = this.querySelector('#nav-cta');
        if(btn) {
            btn.addEventListener('click', () => {
                window.dispatchEvent(new CustomEvent('open-modal'));
            });
        }
    }
}

customElements.define('app-navbar', AppNavbar);