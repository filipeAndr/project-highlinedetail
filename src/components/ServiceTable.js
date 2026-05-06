class AppServiceTable extends HTMLElement {
    connectedCallback() {
        this.render();
        this.setupEvents();
    }

    render() {
        // Dados atualizados conforme a nova planilha em 3 categorias
        const servicesData = [
            { name: "Limpeza Simples", prices: ["90,00", "120,00", "150,00"] },
            { name: "Limpeza Detalhada", prices: ["140,00", "180,00", "250,00"] },
            { name: "Higienização Interna", prices: ["300,00", "450,00", "800,00"] },
            { name: "Impermeabilização de Tecidos", prices: ["220,00", "350,00", "540,00"] },
            { name: "Hidratante de Plásticos", prices: ["30,00", "45,00", "80,00"] },
            { name: "Hidratante de Couros", prices: ["30,00", "45,00", "80,00"] },
            { name: "Vitrificação de Couros", prices: ["150,00", "200,00", "320,00"] },
            { name: "Vitrificação de Plásticos", prices: ["150,00", "200,00", "320,00"] },
            { name: "Limpeza e Proteção de Chassi", prices: ["120,00", "160,00", "250,00"] },
            { name: "Limpeza e Proteção de Motor", prices: ["120,00", "160,00", "250,00"] },
            { name: "Cristalização de Vidros", prices: ["60,00", "90,00", "150,00"] },
            { name: "Polimento de Farol", prices: ["200,00", "200,00", "400,00"] },
            { name: "Restauração de Farol", prices: ["450,00", "450,00", "800,00"] },
            { name: "Polimento Comercial & Vitrificação", prices: ["700,00", "950,00", "1.500,00"] },
            { name: "Polimento Técnico & Vitrificação", prices: ["1.250,00", "1.600,00", "2.150,00"], highlight: false }
        ];

        // Função interna para montar as linhas em 3 colunas de preços
        const renderRows = () => {
            return servicesData.map(service => {
                const textColor = service.highlight ? 'text-[#D90429] font-bold group-hover:text-red-500' : 'text-[#A0A0A0] group-hover:text-white';
                
                return `
                <div class="group border-b border-[#2B2B2B] hover:bg-[#1a1a1a] transition-colors p-5 md:p-0 md:flex items-center">
                    <div class="md:w-2/5 md:px-6 md:py-4 text-white font-bold md:font-medium text-lg md:text-sm mb-4 md:mb-0">
                        ${service.name}
                    </div>

                    <!-- Layout alterado para 3 blocos -->
                    <div class="md:w-3/5 grid grid-cols-1 sm:grid-cols-3 md:flex gap-2 md:gap-0">
                        <div class="bg-[#0A0A0A] md:bg-transparent rounded p-3 md:p-4 flex justify-between md:justify-center items-center md:flex-1 md:border-l md:border-[#2B2B2B]">
                            <span class="text-[10px] font-bold text-[#D90429] uppercase md:hidden">Hatch/Sedan</span>
                            <span class="text-sm transition-colors ${textColor}">R$ ${service.prices[0]}</span>
                        </div>
                        <div class="bg-[#0A0A0A] md:bg-transparent rounded p-3 md:p-4 flex justify-between md:justify-center items-center md:flex-1 md:border-l md:border-[#2B2B2B]">
                            <span class="text-[10px] font-bold text-[#D90429] uppercase md:hidden">SUV/Camionete</span>
                            <span class="text-sm transition-colors ${textColor}">R$ ${service.prices[1]}</span>
                        </div>
                        <div class="bg-[#0A0A0A] md:bg-transparent rounded p-3 md:p-4 flex justify-between md:justify-center items-center md:flex-1 md:border-l md:border-[#2B2B2B]">
                            <span class="text-[10px] font-bold text-[#D90429] uppercase md:hidden">Luxo</span>
                            <span class="text-sm transition-colors ${textColor}">R$ ${service.prices[2]}</span>
                        </div>
                    </div>
                </div>
                `;
            }).join('');
        };

        this.innerHTML = `
            <section id="servicos-individuais" class="py-20 bg-[#0A0A0A]">
                <div class="container mx-auto px-6 max-w-5xl">
                    
                    <div class="text-center mb-12">
                        <h2 class="font-bold font-display text-3xl md:text-4xl font-extrabold text-white uppercase tracking-wider mb-4">
                            Tabela de <span class="text-[#D90429]">Serviços</span>
                        </h2>
                        <p class="text-[#A0A0A0] max-w-2xl mx-auto text-sm md:text-base">
                            Precisa de um cuidado específico? Confira nossa tabela detalhada de serviços avulsos de acordo com a categoria do seu veículo.
                        </p>
                    </div>

                    <div class="bg-[#161616] border border-[#2B2B2B] rounded-xl overflow-hidden shadow-2xl">
                        
                        <!-- Cabeçalho ajustado para 3 categorias de veículos -->
                        <div class="hidden md:flex bg-[#D90429] text-white text-xs uppercase tracking-widest font-bold">
                            <div class="w-2/5 px-6 py-4">Serviço</div>
                            <div class="w-3/5 flex">
                                <div class="flex-1 py-4 text-center border-l border-red-800/30">Hatch / Sedan</div>
                                <div class="flex-1 py-4 text-center border-l border-red-800/30">SUV / Camionete</div>
                                <div class="flex-1 py-4 text-center border-l border-red-800/30">Luxo</div>
                            </div>
                        </div>

                        <div class="flex flex-col">
                            ${renderRows()}
                        </div>
                        
                        <div class="bg-[#0A0A0A] p-6 text-center border-t border-[#2B2B2B]">
                            <button id="btn-agendar-avulso" class="px-8 py-3 bg-[#D90429] text-white font-bold rounded uppercase tracking-wider hover:bg-red-700 transition-colors btn-glow w-full md:w-auto">
                                Agendar Serviço Individual
                            </button>
                        </div>

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

customElements.define('app-service-table', AppServiceTable);