class AppServiceGrid extends HTMLElement {
    connectedCallback() {
        this.render();
        this.setupEvents();
    }

    render() {
        // Agora temos apenas a lista limpa com os nomes dos serviços
        const services = [
            "Limpeza Simples",
            "Limpeza Detalhada",
            "Higienização Interna",
            "Impermeabilização de Tecidos",
            "Hidratação de Plásticos",
            "Hidratação de Couros",
            "Vitrificação de Couros",
            "Vitrificação de Plásticos",
            "Limpeza e Proteção de Chassi",
            "Limpeza e Proteção de Motor",
            "Cristalização de Vidros",
            "Polimento de Farol",
            "Restauração de Farol",
            "Polimento Comercial & Vitrificação de 1 ano",
            "Polimento Técnico & Vitrificação de 5 anos"
        ];

        // Cria a grade de cards elegantes
        const renderItems = () => {
            return services.map(service => `
                <div class="group bg-[#161616] border border-[#2B2B2B] hover:border-[#D90429] rounded-xl p-5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_5px_20px_rgba(217,4,41,0.1)] cursor-default">
                    <!-- Ícone de Check -->
                    <div class="flex-shrink-0 w-8 h-8 rounded-full bg-[#0A0A0A] border border-[#2B2B2B] group-hover:border-[#D90429] flex items-center justify-center transition-colors">
                        <svg class="w-4 h-4 text-[#D90429]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <!-- Nome do Serviço -->
                    <span class="text-[#A0A0A0] group-hover:text-white font-medium text-xs md:text-sm uppercase tracking-wide transition-colors">
                        ${service}
                    </span>
                </div>
            `).join('');
        };

        this.innerHTML = `
            <section id="servicos-individuais" class="py-20 bg-[#0A0A0A]">
                <div class="container mx-auto px-6 max-w-6xl">
                    
                    <!-- Cabeçalho da Sessão -->
                    <div class="text-center mb-16">
                        <div class="inline-block border border-[#D90429] text-[#D90429] text-[10px] md:text-xs font-bold tracking-[0.2em] px-4 py-2 mb-6 uppercase rounded-sm">
                            Catálogo de Cuidados
                        </div>
                        <h2 class="font-bold font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-wider mb-6">
                            Serviços <span class="text-[#D90429]">Avulsos</span>
                        </h2>
                        <p class="text-[#A0A0A0] max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                            Além dos nossos pacotes premium, oferecemos uma gama completa de serviços individuais focados na restauração, proteção e manutenção de cada detalhe do seu veículo.
                        </p>
                    </div>

                    <!-- Grid de Serviços (3 colunas no PC, 2 no Tablet, 1 no Celular) -->
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                        ${renderItems()}
                    </div>
                    
                    <!-- Botão de Ação -->
                    <div class="text-center">
                        <button id="btn-agendar-avulso" class="inline-flex items-center justify-center gap-3 w-full md:w-auto px-10 py-4 bg-[#D90429] text-white font-bold rounded uppercase tracking-widest text-sm hover:bg-red-700 transition-all hover:-translate-y-1 btn-glow shadow-lg">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            Solicitar Orçamento
                        </button>
                    </div>

                </div>
            </section>
        `;
    }

    setupEvents() {
        const btn = this.querySelector('#btn-agendar-avulso');
        if (btn) {
            btn.addEventListener('click', () => {
                window.dispatchEvent(new CustomEvent('open-modal'));
            });
        }
    }
}

customElements.define('app-service-grid', AppServiceGrid);