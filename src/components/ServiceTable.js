class AppServiceTable extends HTMLElement {
    connectedCallback() {
        this.render();
        this.setupEvents();
    }

    render() {
        // Abaixo temos os dados para gerar as linhas da tabela/cards
        const servicesData = [
            { name: "Hidratação de Couro", prices: ["40", "50", "60", "70", "100"] },
            { name: "Enceramento", prices: ["30", "45", "65", "80", "120"] },
            { name: "Limpeza de Ar Condicionado", prices: ["30", "40", "50", "60", "100"] },
            { name: "Verniz de Motor", prices: ["40", "50", "80", "100", "180"] },
            { name: "Selante de Pintura", prices: ["50", "70", "90", "110", "180"] },
            { name: "Hidratação de Plásticos", prices: ["40", "50", "60", "70", "100"] },
            { name: "Cristalização de Vidros", prices: ["75", "90", "120", "150", "250"] },
            { name: "Higienização de Couros", prices: ["80", "120", "150", "180", "220"] },
            { name: "Limpeza Simples", prices: ["80", "90", "120", "150", "190"] },
            { name: "Limpeza de Motor", prices: ["100", "120", "150", "180", "250"] },
            { name: "Limpeza Detalhada", prices: ["120", "160", "200", "250", "350"] },
            { name: "Higienização de Tecidos", prices: ["150", "170", "190", "220", "280"] },
            { name: "Limpeza de Chassi", prices: ["150", "180", "220", "280", "350"] },
            { name: "Polimento de Farol", prices: ["150", "200", "300", "380", "550"] },
            { name: "Vitrificação de Plásticos", prices: ["150", "280", "400", "580", "720"] },
            { name: "Vitrificação de Farol", prices: ["180", "220", "380", "450", "800"] },
            { name: "Polimento Comercial", prices: ["350", "500", "650", "800", "1200"] },
            { name: "Polimento Técnico", prices: ["500", "700", "950", "1300", "1900"] },
            { name: "Preparação pra Venda", prices: ["550", "800", "1200", "1800", "2500"] },
            { name: "Vitrificação de Pintura", prices: ["800", "1300", "1800", "2500", "3200"], highlight: false }
        ];

        // Função interna para montar as linhas dinamicamente no novo layout responsivo
        const renderRows = () => {
            return servicesData.map(service => {
                const textColor = service.highlight ? 'text-[#D90429] font-bold group-hover:text-red-500' : 'text-[#A0A0A0] group-hover:text-white';
                
                return `
                <div class="group border-b border-[#2B2B2B] hover:bg-[#1a1a1a] transition-colors p-5 md:p-0 md:flex items-center">
                    <div class="md:w-1/3 md:px-6 md:py-4 text-white font-bold md:font-medium text-lg md:text-sm mb-4 md:mb-0">
                        ${service.name}
                    </div>

                    <div class="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:flex gap-2 md:gap-0">
                        <div class="bg-[#0A0A0A] md:bg-transparent rounded p-3 md:p-4 flex justify-between md:justify-center items-center md:flex-1 md:border-l md:border-[#2B2B2B]">
                            <span class="text-[10px] font-bold text-[#D90429] uppercase md:hidden">Hatch</span>
                            <span class="text-sm transition-colors ${textColor}">R$ ${service.prices[0]}</span>
                        </div>
                        <div class="bg-[#0A0A0A] md:bg-transparent rounded p-3 md:p-4 flex justify-between md:justify-center items-center md:flex-1 md:border-l md:border-[#2B2B2B]">
                            <span class="text-[10px] font-bold text-[#D90429] uppercase md:hidden">Sedan</span>
                            <span class="text-sm transition-colors ${textColor}">R$ ${service.prices[1]}</span>
                        </div>
                        <div class="bg-[#0A0A0A] md:bg-transparent rounded p-3 md:p-4 flex justify-between md:justify-center items-center md:flex-1 md:border-l md:border-[#2B2B2B]">
                            <span class="text-[10px] font-bold text-[#D90429] uppercase md:hidden">SUV</span>
                            <span class="text-sm transition-colors ${textColor}">R$ ${service.prices[2]}</span>
                        </div>
                        <div class="bg-[#0A0A0A] md:bg-transparent rounded p-3 md:p-4 flex justify-between md:justify-center items-center md:flex-1 md:border-l md:border-[#2B2B2B]">
                            <span class="text-[10px] font-bold text-[#D90429] uppercase md:hidden">Camionete</span>
                            <span class="text-sm transition-colors ${textColor}">R$ ${service.prices[3]}</span>
                        </div>
                        <div class="bg-[#0A0A0A] md:bg-transparent rounded p-3 md:p-4 flex justify-between md:justify-center items-center md:flex-1 md:border-l md:border-[#2B2B2B]">
                            <span class="text-[10px] font-bold text-[#D90429] uppercase md:hidden">Luxo</span>
                            <span class="text-sm transition-colors ${textColor}">R$ ${service.prices[4]}</span>
                        </div>
                    </div>
                </div>
                `;
            }).join('');
        };

        this.innerHTML = `
            <section id="servicos-individuais" class="py-20 bg-[#0A0A0A]">
                <div class="container mx-auto px-6 max-w-6xl">
                    
                    <div class="text-center mb-12">
                        <h2 class="font-bold font-display text-3xl md:text-4xl font-extrabold text-white uppercase tracking-wider mb-4">
                            Serviços <span class="text-[#D90429]">Individuais</span>
                        </h2>
                        <p class="text-[#A0A0A0] max-w-2xl mx-auto text-sm md:text-base">
                            Precisa de um cuidado específico? Confira nossa tabela detalhada de serviços avulsos de acordo com a categoria do seu veículo.
                        </p>
                    </div>

                    <div class="bg-[#161616] border border-[#2B2B2B] rounded-xl overflow-hidden shadow-2xl">
                        
                        <div class="hidden md:flex bg-[#D90429] text-white text-xs uppercase tracking-widest font-bold">
                            <div class="w-1/3 px-6 py-4">Serviço</div>
                            <div class="w-2/3 flex">
                                <div class="flex-1 py-4 text-center border-l border-red-800/30">Hatch</div>
                                <div class="flex-1 py-4 text-center border-l border-red-800/30">Sedan</div>
                                <div class="flex-1 py-4 text-center border-l border-red-800/30">SUV</div>
                                <div class="flex-1 py-4 text-center border-l border-red-800/30">Camionete</div>
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
        // Dispara o evento global para abrir o modal de agendamento (Intacto)
        const btn = this.querySelector('#btn-agendar-avulso');
        if (btn) {
            btn.addEventListener('click', () => {
                window.dispatchEvent(new CustomEvent('open-modal'));
            });
        }
    }
}

// Registra o componente para poder ser usado no HTML
customElements.define('app-service-table', AppServiceTable);