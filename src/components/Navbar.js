class AppNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav id="navbar" class="fixed w-full z-50 transition-all duration-300 py-4 border-b border-transparent bg-transparent">
                <div class="container mx-auto px-6 flex justify-between items-center relative">
                    
                    <a href="#" class="font-display text-2xl font-bold tracking-wider italic text-white">
                        HIGHLINE 
                        <span class="text-[#D90429]">DETAIL</span>
                    </a>

                    <div class="hidden md:flex space-x-8 text-sm font-medium text-white">
                        <a href="#home" class="hover:text-[#D90429] transition-colors">HOME</a>
                        <a href="#sobre" class="hover:text-[#D90429] transition-colors">A OFICINA</a>
                        <a href="#pacote" class="hover:text-[#D90429] transition-colors">PACOTE</a>
                        <a href="#servicos-individuais" class="hover:text-[#D90429] transition-colors">SERVIÇOS</a>
                        <a href="#parceiros" class="hover:text-[#D90429] transition-colors">PARCEIROS</a>
                        
                    </div>

                    <button id="nav-cta" class="hidden md:block px-6 py-2 border border-[#D90429] text-[#D90429] font-bold rounded hover:bg-[#D90429] hover:text-white transition-all btn-glow uppercase text-sm tracking-wide">
                        Agendar Agora
                    </button>

                    <button id="mobile-menu-btn" class="md:hidden text-white text-2xl focus:outline-none">
                        &#9776;
                    </button>
                </div>

                <div id="mobile-menu" class="hidden md:hidden absolute top-full left-0 w-full bg-[#161616] border-b border-[#2B2B2B] shadow-2xl">
                    <div class="flex flex-col p-6 space-y-4 text-center">
                        <a href="#home" class="mobile-link text-white font-medium hover:text-[#D90429] py-2 border-b border-[#2B2B2B]">HOME</a>
                        <a href="#sobre" class="mobile-link text-white font-medium hover:text-[#D90429] py-2 border-b border-[#2B2B2B]">A OFICINA</a>
                        <a href="#pacote" class="mobile-link text-white font-medium hover:text-[#D90429] py-2 border-b border-[#2B2B2B]">PACOTE</a>
                        <a href="#servicos-individuais" class="mobile-link text-white font-medium hover:text-[#D90429] py-2 border-b border-[#2B2B2B]">SERVIÇOS</a>
                        <a href="#parceiros" class="mobile-link text-white font-medium hover:text-[#D90429] py-2 border-b border-[#2B2B2B]">PARCEIROS</a>
                        
                        <button id="mobile-cta" class="w-full mt-4 px-6 py-3 bg-[#D90429] text-white font-bold rounded uppercase tracking-wide hover:bg-red-700">
                            Agendar Agora
                        </button>
                    </div>
                </div>
            </nav>
        `;

        this.setupScrollEffect();
        this.setupEvents();
        this.setupMobileMenu(); // Nova função iniciada
    }

    setupScrollEffect() {
        const nav = this.querySelector('nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                // Ajustei as cores para hex direto (#161616) para garantir compatibilidade se a classe customizada falhar
                nav.classList.add('bg-[#161616]/95', 'backdrop-blur-md', 'shadow-lg', 'border-[#2B2B2B]');
                nav.classList.remove('border-transparent', 'py-4', 'bg-transparent');
                nav.classList.add('py-2'); 
            } else {
                nav.classList.remove('bg-[#161616]/95', 'backdrop-blur-md', 'shadow-lg', 'border-[#2B2B2B]', 'py-2');
                nav.classList.add('border-transparent', 'py-4', 'bg-transparent');
            }
        });
    }

    setupEvents() {
        // CTA Desktop
        const btnDesktop = this.querySelector('#nav-cta');
        if(btnDesktop) {
            btnDesktop.addEventListener('click', () => {
                window.dispatchEvent(new CustomEvent('open-modal'));
            });
        }

        // CTA Mobile (Novo)
        const btnMobile = this.querySelector('#mobile-cta');
        if(btnMobile) {
            btnMobile.addEventListener('click', () => {
                // Fecha o menu antes de abrir o modal
                const menu = this.querySelector('#mobile-menu');
                menu.classList.add('hidden');
                window.dispatchEvent(new CustomEvent('open-modal'));
            });
        }
    }

    
    setupMobileMenu() {
        const btn = this.querySelector('#mobile-menu-btn');
        const menu = this.querySelector('#mobile-menu');
        const links = this.querySelectorAll('.mobile-link');

        if (btn && menu) {
            // Toggle (Abrir/Fechar)
            btn.addEventListener('click', () => {
                menu.classList.toggle('hidden');
            });

            // Fechar ao clicar em um link
            links.forEach(link => {
                link.addEventListener('click', () => {
                    menu.classList.add('hidden');
                });
            });
        }
    }
}

customElements.define('app-navbar', AppNavbar);