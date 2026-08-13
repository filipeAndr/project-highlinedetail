class AppModal extends HTMLElement {
    connectedCallback() {
        this.render();
        this.setupElements();
        this.setupEvents();
    }

    render() {
        this.innerHTML = `
            <div id="bookingModal" class="fixed inset-0 z-[100] hidden">
                <div id="modal-backdrop" class="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity cursor-pointer"></div>
                
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#161616] border border-[#2B2B2B] rounded-lg shadow-2xl p-8 w-full max-w-md mx-4 h-auto max-h-[90vh] flex flex-col">
                    
                    <div class="flex justify-between items-center mb-6 flex-shrink-0">
                        <h3 class="font-display text-2xl font-bold text-white uppercase">
                            Agendar <span class="text-[#D90429]">Serviço</span>
                        </h3>
                        <button id="close-btn" class="text-[#A0A0A0] hover:text-white text-3xl leading-none">&times;</button>
                    </div>

                    <form id="bookingForm" class="flex-grow overflow-y-auto custom-scrollbar pr-2">
                        <div class="space-y-4">
                            <div>
                                <label class="block text-xs font-bold text-[#A0A0A0] uppercase mb-1">Seu Nome</label>
                                <input type="text" id="input-name" class="w-full bg-[#0A0A0A] border border-[#2B2B2B] rounded p-3 text-white focus:border-[#D90429] focus:outline-none" placeholder="Ex: João Silva" required>
                            </div>

                            <div>
                                <label class="block text-xs font-bold text-[#A0A0A0] uppercase mb-1">Modelo do Carro</label>
                                <input type="text" id="input-car" class="w-full bg-[#0A0A0A] border border-[#2B2B2B] rounded p-3 text-white focus:border-[#D90429] focus:outline-none" placeholder="Ex: BMW 320i" required>
                            </div>
                            
                            <!-- Container de Serviços já visível por padrão -->
                            <div class="bg-[#0A0A0A] border border-[#2B2B2B] rounded p-4 mt-2">
                                <label class="block text-xs font-bold text-[#A0A0A0] uppercase mb-3 border-b border-[#2B2B2B] pb-2">Selecione os Serviços</label>
                                
                                <div class="grid grid-cols-1 gap-3" id="services-list">
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Limpeza Simples" class="mr-3 w-4 h-4 accent-[#D90429]"> Limpeza Simples
                                    </label>
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Limpeza Detalhada" class="mr-3 w-4 h-4 accent-[#D90429]"> Limpeza Detalhada
                                    </label>
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Higienização Interna" class="mr-3 w-4 h-4 accent-[#D90429]"> Higienização Interna
                                    </label>
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Impermeabilização de Tecidos" class="mr-3 w-4 h-4 accent-[#D90429]"> Impermeabilização de Tecidos
                                    </label>
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Hidratante de Plásticos" class="mr-3 w-4 h-4 accent-[#D90429]"> Hidratante de Plásticos
                                    </label>
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Hidratante de Couros" class="mr-3 w-4 h-4 accent-[#D90429]"> Hidratante de Couros
                                    </label>
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Vitrificação de Couros" class="mr-3 w-4 h-4 accent-[#D90429]"> Vitrificação de Couros
                                    </label>
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Vitrificação de Plásticos" class="mr-3 w-4 h-4 accent-[#D90429]"> Vitrificação de Plásticos
                                    </label>
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Limpeza e Proteção de Chassi" class="mr-3 w-4 h-4 accent-[#D90429]"> Limpeza e Proteção de Chassi
                                    </label>
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Limpeza e Proteção de Motor" class="mr-3 w-4 h-4 accent-[#D90429]"> Limpeza e Proteção de Motor
                                    </label>
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Cristalização de Vidros" class="mr-3 w-4 h-4 accent-[#D90429]"> Cristalização de Vidros
                                    </label>
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Polimento de Farol" class="mr-3 w-4 h-4 accent-[#D90429]"> Polimento de Farol
                                    </label>
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Restauração de Farol" class="mr-3 w-4 h-4 accent-[#D90429]"> Restauração de Farol
                                    </label>
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Polimento Comercial & Vitrificação" class="mr-3 w-4 h-4 accent-[#D90429]"> Polimento Comercial & Vitrificação de 1 ano
                                    </label>
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Polimento Técnico & Vitrificação" class="mr-3 w-4 h-4 accent-[#D90429]"> Polimento Técnico & Vitrificação de 5 anos
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button type="submit" id="submit-btn" class="w-full mt-6 mb-2 bg-[#D90429] text-white font-bold py-4 rounded hover:bg-[#B00220] transition-all uppercase tracking-wider btn-glow disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0">
                            Solicitar Orçamento
                        </button>
                    </form>
                </div>
            </div>
            <style>
                .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: #0A0A0A; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #2B2B2B; border-radius: 3px; }
            </style>
        `;
    }

    setupElements() {
        this.modal = this.querySelector('#bookingModal');
        this.form = this.querySelector('#bookingForm');
        this.submitBtn = this.querySelector('#submit-btn');
    }

    setupEvents() {
        window.addEventListener('open-modal', () => this.open());
        this.querySelector('#close-btn').addEventListener('click', () => this.close());
        this.querySelector('#modal-backdrop').addEventListener('click', () => this.close());
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    handleSubmit(e) {
        e.preventDefault();
        
        // Pega todos os checkboxes marcados dentro do container de serviços
        const checkedBoxes = this.querySelectorAll('#services-list input[type="checkbox"]:checked');
        
        if (checkedBoxes.length === 0) {
            alert("Por favor, selecione pelo menos um serviço na lista.");
            return; 
        }

        // Transforma a lista de checkboxes em uma string separada por " + "
        const selectedServicesArray = Array.from(checkedBoxes).map(checkbox => checkbox.value);
        const finalServiceString = selectedServicesArray.join(' + ');

        const data = {
            name: this.querySelector('#input-name').value,
            car: this.querySelector('#input-car').value,
            service: finalServiceString 
        };

        this.submitBtn.innerText = "Processando...";
        this.submitBtn.disabled = true;

        let message = `NOVO ORÇAMENTO SITE %0A%0A`;
        message += `*Nome:* ${data.name}%0A`;
        message += `*Veículo:* ${data.car}%0A`;
        message += `*Serviços:* ${data.service}`;
        
        const whatsappOficina = "556792820395";
        window.open(`https://wa.me/${whatsappOficina}?text=${message}`, '_blank');
        
        this.close();
        this.form.reset(); 
        
        this.submitBtn.innerText = "SOLICITAR ORÇAMENTO";
        this.submitBtn.disabled = false;
    }
    
    open() {
        this.modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

customElements.define('app-modal', AppModal);