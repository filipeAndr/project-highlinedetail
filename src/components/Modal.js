class AppModal extends HTMLElement {
    connectedCallback() {
        this.render();
        this.setupElements();
        this.setupEvents();
        this.restrictDates();
    }

    render() {
        this.innerHTML = `
            <div id="bookingModal" class="fixed inset-0 z-[100] hidden">
                <div id="modal-backdrop" class="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity cursor-pointer"></div>
                
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#161616] border border-[#2B2B2B] rounded-lg shadow-2xl p-8 w-full max-w-md mx-4 h-[90vh] overflow-y-auto custom-scrollbar">
                    
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="font-display text-2xl font-bold text-white uppercase">
                            Agendar <span class="text-[#D90429]">Serviço</span>
                        </h3>
                        <button id="close-btn" class="text-[#A0A0A0] hover:text-white text-3xl leading-none">&times;</button>
                    </div>

                    <form id="bookingForm">
                        <div class="space-y-4">
                            <div>
                                <label class="block text-xs font-bold text-[#A0A0A0] uppercase mb-1">Seu Nome</label>
                                <input type="text" id="input-name" class="w-full bg-[#0A0A0A] border border-[#2B2B2B] rounded p-3 text-white focus:border-[#D90429] focus:outline-none" placeholder="Ex: João Silva" required>
                            </div>

                            <div>
                                <label class="block text-xs font-bold text-[#A0A0A0] uppercase mb-1">Data de Nascimento</label>
                                <input type="date" id="input-birth" class="w-full bg-[#0A0A0A] border border-[#2B2B2B] rounded p-3 text-white focus:border-[#D90429] focus:outline-none" required>
                            </div>

                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-xs font-bold text-[#A0A0A0] uppercase mb-1">Modelo do Carro</label>
                                    <input type="text" id="input-car" class="w-full bg-[#0A0A0A] border border-[#2B2B2B] rounded p-3 text-white focus:border-[#D90429] focus:outline-none" placeholder="Ex: BMW 320i" required>
                                </div>
                                
                                <div>
                                    <label class="block text-xs font-bold text-[#A0A0A0] uppercase mb-1">Nível de Sujeira</label>
                                    <select id="input-dirt" class="w-full bg-[#0A0A0A] border border-[#2B2B2B] rounded p-3 text-white focus:border-[#D90429] focus:outline-none">
                                        <option value="Leve">Leve (Poeira)</option>
                                        <option value="Médio">Médio (Chuva/Terra)</option>
                                        <option value="Pesado">Pesado (Barro/Lama)</option>
                                        <option value="Extremo">Extremo (Mofo/Pelos)</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div>
                                <label class="block text-xs font-bold text-[#A0A0A0] uppercase mb-1">Serviço Principal</label>
                                <select id="input-service" class="w-full bg-[#0A0A0A] border border-[#2B2B2B] rounded p-3 text-white focus:border-[#D90429] focus:outline-none">
                                    <option value="" disabled selected>Escolha um plano...</option>
                                    <option value="Pacote Bronze">Pacote Bronze</option>
                                    <option value="Pacote Prata">Pacote Prata</option>
                                    <option value="Pacote Ouro">Pacote Ouro</option>
                                    <option value="Plano Individual">Serviços Individuais (Avulsos)</option>
                                </select>
                            </div>

                            <div id="individual-services-container" class="hidden bg-[#0A0A0A] border border-[#2B2B2B] rounded p-4 mt-2">
                                <label class="block text-xs font-bold text-[#A0A0A0] uppercase mb-3 border-b border-[#2B2B2B] pb-2">Selecione os Serviços (Pode marcar vários)</label>
                                
                                <div class="grid grid-cols-1 gap-3 max-h-40 overflow-y-auto custom-scrollbar">
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Enceramento para 3 meses" class="mr-3 w-4 h-4 accent-[#D90429]"> Enceramento para 3 meses
                                    </label>
                                    
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Limpeza de Ar Condicionado" class="mr-3 w-4 h-4 accent-[#D90429]"> Limpeza de Ar Condicionado
                                    </label>
                                    
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Verniz de Motor" class="mr-3 w-4 h-4 accent-[#D90429]"> Verniz de Motor
                                    </label>
                                    
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Selante de Pintura 8 meses" class="mr-3 w-4 h-4 accent-[#D90429]"> Selante de Pintura 8 meses
                                    </label>
                                    
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Hidratação de Plásticos" class="mr-3 w-4 h-4 accent-[#D90429]"> Hidratação de Plásticos
                                    </label>
                                    
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Cristalização de Vidros" class="mr-3 w-4 h-4 accent-[#D90429]"> Cristalização de Vidros
                                    </label>
                                    
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Higienização de Couros" class="mr-3 w-4 h-4 accent-[#D90429]"> Higienização de Couros
                                    </label>
                                    
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Limpeza Simples" class="mr-3 w-4 h-4 accent-[#D90429]"> Limpeza Simples
                                    </label>
                                    
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Limpeza de Motor" class="mr-3 w-4 h-4 accent-[#D90429]"> Limpeza de Motor
                                    </label>
                                    
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Limpeza Detalhada" class="mr-3 w-4 h-4 accent-[#D90429]"> Limpeza Detalhada
                                    </label>
                                    
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Higienização de Tecidos" class="mr-3 w-4 h-4 accent-[#D90429]"> Higienização de Tecidos
                                    </label>
                                    
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Limpeza de Chassi" class="mr-3 w-4 h-4 accent-[#D90429]"> Limpeza de Chassi
                                    </label>
                                    
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Polimento de Farol" class="mr-3 w-4 h-4 accent-[#D90429]"> Polimento de Farol
                                    </label>
                                    
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Vitrificação de Plásticos 1 ano" class="mr-3 w-4 h-4 accent-[#D90429]"> Vitrificação de Plásticos 1 ano
                                    </label>
                                    
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Vitrificação de Farol" class="mr-3 w-4 h-4 accent-[#D90429]"> Vitrificação de Farol
                                    </label>
                                    
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Polimento Comercial" class="mr-3 w-4 h-4 accent-[#D90429]"> Polimento Comercial
                                    </label>
                                    
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Polimento Técnico" class="mr-3 w-4 h-4 accent-[#D90429]"> Polimento Técnico
                                    </label>
                                    
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Preparação pra Venda" class="mr-3 w-4 h-4 accent-[#D90429]"> Preparação pra Venda
                                    </label>
                                    
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Vitrificação de Pintura 5 anos" class="mr-3 w-4 h-4 accent-[#D90429]"> Vitrificação de Pintura 5 anos
                                    </label>
                                    
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Hidratação de Plásticos" class="mr-3 w-4 h-4 accent-[#D90429]"> Hidratação de Plásticos
                                    </label>
                                    
                                    <label class="flex items-center text-sm text-white hover:text-[#D90429] cursor-pointer transition-colors">
                                        <input type="checkbox" value="Hidratação de Couro" class="mr-3 w-4 h-4 accent-[#D90429]"> Hidratação de Couro
                                    </label>
                                </div>
                            </div>

                            <div class="grid grid-cols-2 gap-4 mt-4">
                                <div>
                                    <label class="block text-xs font-bold text-[#A0A0A0] uppercase mb-1">Data do Serviço</label>
                                    <input type="date" id="input-date" class="w-full bg-[#0A0A0A] border border-[#2B2B2B] rounded p-3 text-white focus:border-[#D90429] focus:outline-none" required>
                                </div>
                                <div>
                                    <label class="block text-xs font-bold text-[#A0A0A0] uppercase mb-1">Horário</label>
                                    <select id="input-time" class="w-full bg-[#0A0A0A] border border-[#2B2B2B] rounded p-3 text-white focus:border-[#D90429] focus:outline-none" required>
                                        <option value="" disabled selected>Selecione...</option>
                                        <option value="08:00">08:00</option>
                                        <option value="09:00">09:00</option>
                                        <option value="10:00">10:00</option>
                                        <option value="11:00">11:00</option>
                                        <option value="13:00">13:00</option>
                                        <option value="14:00">14:00</option>
                                        <option value="15:00">15:00</option>
                                        <option value="16:00">16:00</option>
                                        <option value="17:00">17:00</option>
                                    </select>
                                </div>
                            </div>
                            
                        </div>

                        <button type="submit" id="submit-btn" class="w-full mt-8 bg-[#D90429] text-white font-bold py-4 rounded hover:bg-[#B00220] transition-all uppercase tracking-wider btn-glow disabled:opacity-50 disabled:cursor-not-allowed">
                            Confirmar Agendamento
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
        this.dateInput = this.querySelector('#input-date');
        this.timeInput = this.querySelector('#input-time');
        this.submitBtn = this.querySelector('#submit-btn');
        this.birthInput = this.querySelector('#input-birth');
        this.dirtInput = this.querySelector('#input-dirt');
        this.serviceInput = this.querySelector('#input-service');
        this.individualContainer = this.querySelector('#individual-services-container');
    }

    setupEvents() {
        window.addEventListener('open-modal', () => this.open());
        this.querySelector('#close-btn').addEventListener('click', () => this.close());
        this.querySelector('#modal-backdrop').addEventListener('click', () => this.close());
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));

        // Evento que mostra/esconde a lista de serviços individuais
        this.serviceInput.addEventListener('change', (e) => {
            if (e.target.value === 'Plano Individual') {
                this.individualContainer.classList.remove('hidden');
            } else {
                this.individualContainer.classList.add('hidden');
            }
        });
    }

    restrictDates() {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        
        const todayString = `${yyyy}-${mm}-${dd}`;
        this.dateInput.min = todayString;
        this.birthInput.max = todayString;
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const mainService = this.serviceInput.value;
        let finalServiceString = mainService;

        // VALIDAÇÃO: Se escolheu "Plano Individual", tem que ter marcado pelo menos um checkbox
        if (mainService === 'Plano Individual') {
            const checkedBoxes = this.querySelectorAll('#individual-services-container input[type="checkbox"]:checked');
            
            if (checkedBoxes.length === 0) {
                alert("Por favor, selecione pelo menos um serviço individual na lista.");
                return; // Interrompe o envio
            }

            // Pega o valor de todas as caixas marcadas e junta com uma vírgula
            const selectedServicesArray = Array.from(checkedBoxes).map(checkbox => checkbox.value);
            finalServiceString = "Avulsos (" + selectedServicesArray.join(' + ') + ")";
        }

        const data = {
            name: this.querySelector('#input-name').value,
            birthDate: this.birthInput.value, 
            car: this.querySelector('#input-car').value,
            dirtLevel: this.dirtInput.value, 
            service: finalServiceString, // Variável processada
            date: this.dateInput.value,
            time: this.timeInput.value
        };

        if (!data.time) {
            alert("Por favor, selecione um horário válido.");
            return;
        }

        this.submitBtn.innerText = "Processando...";
        this.submitBtn.disabled = true;

        // Formatação da Data do Serviço
        const serviceDateObj = new Date(data.date);
        const serviceDateFormatted = new Date(serviceDateObj.valueOf() + serviceDateObj.getTimezoneOffset() * 60000).toLocaleDateString('pt-BR');
        
        // Formatação da Data de Nascimento
        let birthFormatted = data.birthDate;
        if (birthFormatted) {
            const bDate = new Date(birthFormatted);
            birthFormatted = new Date(bDate.valueOf() + bDate.getTimezoneOffset() * 60000).toLocaleDateString('pt-BR');
        }

        // Montagem Dinâmica da Mensagem do WhatsApp
        let message = `NOVO AGENDAMENTO SITE %0A%0A`;
        message += `*Nome:* ${data.name}%0A`;
        message += `*Nasc:* ${birthFormatted}%0A`;
        message += `*Veículo:* ${data.car}%0A`;
        message += `*Sujeira:* ${data.dirtLevel}%0A`;
        
        // Se for pacote mostra "Pacote", se for individual mostra "Serviços Avulsos: X + Y + Z"
        if (mainService === 'Plano Individual') {
            message += `*Serviços:* ${data.service}%0A`;
        } else {
            message += `*Pacote:* ${data.service}%0A`;
        }

        message += `*Data:* ${serviceDateFormatted}%0A`;
        message += `*Horário:* ${data.time}`;
        
        const whatsappOficina = "556792820395";
        window.open(`https://wa.me/${whatsappOficina}?text=${message}`, '_blank');
        
        // Restaura o modal após enviar
        this.close();
        this.form.reset(); 
        
        // Reseta o estado do container individual caso feche e abra de novo
        this.individualContainer.classList.add('hidden');
        
        this.submitBtn.innerText = "CONFIRMAR AGENDAMENTO";
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