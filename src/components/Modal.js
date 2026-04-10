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
                                <label class="block text-xs font-bold text-[#A0A0A0] uppercase mb-1">Serviço</label>
                                <select id="input-service" class="w-full bg-[#0A0A0A] border border-[#2B2B2B] rounded p-3 text-white focus:border-[#D90429] focus:outline-none">
                                    <option value="Pacote Fast">Pacote Fast (Lavagem)</option>
                                    <option value="Pacote Premium">Pacote Premium (Cera)</option>
                                    <option value="Pacote Signature">Pacote Signature (Polimento)</option>
                                    <option value="Pacote Highline">Pacote Highline (Full Detail)</option>
                                </select>
                            </div>

                            <div class="grid grid-cols-2 gap-4">
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
    }

    setupEvents() {
        window.addEventListener('open-modal', () => this.open());
        this.querySelector('#close-btn').addEventListener('click', () => this.close());
        this.querySelector('#modal-backdrop').addEventListener('click', () => this.close());
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
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
        
        const data = {
            name: this.querySelector('#input-name').value,
            birthDate: this.querySelector('#input-birth').value, 
            car: this.querySelector('#input-car').value,
            dirtLevel: this.querySelector('#input-dirt').value, 
            service: this.querySelector('#input-service').value,
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

        // Montagem da Mensagem do WhatsApp
        const message = `NOVO AGENDAMENTO (SITE)%0A%0A Nome: ${data.name}%0A Nasc: ${birthFormatted}%0A Carro: ${data.car}%0A Sujeira: ${data.dirtLevel}%0A Serviço: ${data.service}%0A Data: ${serviceDateFormatted}%0A Horário: ${data.time}`;
        
        const whatsappOficina = "556792820395";
        window.open(`https://wa.me/${whatsappOficina}?text=${message}`, '_blank');
        
        // Restaura o modal após enviar
        this.close();
        this.form.reset(); 
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