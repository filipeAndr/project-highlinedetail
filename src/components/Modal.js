import { getTakenSlots, saveAppointment } from '../js/firebase-config.js';

class AppModal extends HTMLElement {
    connectedCallback() {
        this.render();
        this.setupElements();
        this.setupEvents();
        this.setupPhoneMask();
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

                            <div>
                                <label class="block text-xs font-bold text-[#A0A0A0] uppercase mb-1">Seu WhatsApp</label>
                                <input type="tel" id="input-phone" class="w-full bg-[#0A0A0A] border border-[#2B2B2B] rounded p-3 text-white focus:border-[#D90429] focus:outline-none" placeholder="(00) 00000-0000" maxlength="15" required>
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
                                    <select id="input-time" class="w-full bg-[#0A0A0A] border border-[#2B2B2B] rounded p-3 text-white focus:border-[#D90429] focus:outline-none disabled:opacity-50" disabled>
                                        <option value="">Selecione a data...</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div id="loading-msg" class="hidden text-xs text-[#D90429] text-center font-bold animate-pulse">
                                Verificando disponibilidade...
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
        this.phoneInput = this.querySelector('#input-phone');
        this.dateInput = this.querySelector('#input-date');
        this.timeInput = this.querySelector('#input-time');
        this.loadingMsg = this.querySelector('#loading-msg');
        this.submitBtn = this.querySelector('#submit-btn');
        
        // Novos Elementos
        this.birthInput = this.querySelector('#input-birth');
        this.dirtInput = this.querySelector('#input-dirt');
        
        this.availableSlots = ["08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
    }

    setupEvents() {
        window.addEventListener('open-modal', () => this.open());
        this.querySelector('#close-btn').addEventListener('click', () => this.close());
        this.querySelector('#modal-backdrop').addEventListener('click', () => this.close());
        this.dateInput.addEventListener('change', (e) => this.checkAvailability(e.target.value));
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    restrictDates() {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        
        const todayString = `${yyyy}-${mm}-${dd}`;
        this.dateInput.min = todayString;
        
        // Opcional: Restringir data de nascimento para evitar datas futuras
        this.birthInput.max = todayString;
    }

    setupPhoneMask() {
        this.phoneInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, "");
            if (value.length > 11) value = value.slice(0, 11);
            if (value.length > 2) value = `(${value.substring(0,2)}) ${value.substring(2)}`;
            if (value.length > 7) value = `${value.substring(0,10)}-${value.substring(10)}`;
            e.target.value = value;
        });
    }

    async checkAvailability(date) {
        if (!date) return;
        const todayStr = this.dateInput.min;
        if (date < todayStr) {
            alert("Por favor, escolha uma data futura.");
            this.dateInput.value = "";
            return;
        }

        this.timeInput.disabled = true;
        this.timeInput.innerHTML = '<option>Carregando...</option>';
        this.loadingMsg.classList.remove('hidden');

        try {
            const takenSlots = await getTakenSlots(date);
            const freeSlots = this.availableSlots.filter(slot => !takenSlots.includes(slot));

            this.timeInput.innerHTML = '';
            
            if (freeSlots.length === 0) {
                this.timeInput.innerHTML = '<option value="">Dia Lotado</option>';
            } else {
                freeSlots.forEach(slot => {
                    const option = document.createElement('option');
                    option.value = slot;
                    option.innerText = slot;
                    this.timeInput.appendChild(option);
                });
                this.timeInput.disabled = false;
            }
        } catch (error) {
            console.error(error);
            this.timeInput.innerHTML = '<option value="">Erro</option>';
        } finally {
            this.loadingMsg.classList.add('hidden');
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        const data = {
            name: this.querySelector('#input-name').value,
            birthDate: this.querySelector('#input-birth').value, 
            phone: this.querySelector('#input-phone').value,
            car: this.querySelector('#input-car').value,
            dirtLevel: this.querySelector('#input-dirt').value, 
            service: this.querySelector('#input-service').value,
            date: this.dateInput.value,
            time: this.timeInput.value
        };

        if (!data.time || data.time === "Dia Lotado") {
            alert("Por favor, selecione um horário válido.");
            return;
        }

        this.submitBtn.innerText = "Processando...";
        this.submitBtn.disabled = true;

        try {
            // Salva no Firebase
            await saveAppointment(data);

            // Formatação de Datas
            const serviceDateObj = new Date(data.date);
            const serviceDateFormatted = new Date(serviceDateObj.valueOf() + serviceDateObj.getTimezoneOffset() * 60000).toLocaleDateString('pt-BR');
            
            // Formatando Data de Nascimento para o WhatsApp (DD/MM/AAAA)
            let birthFormatted = data.birthDate;
            if (birthFormatted) {
                const bDate = new Date(birthFormatted);
                birthFormatted = new Date(bDate.valueOf() + bDate.getTimezoneOffset() * 60000).toLocaleDateString('pt-BR');
            }

            // Mensagem atualizada
            const message = `NOVO AGENDAMENTO (SITE)%0A%0A Nome: ${data.name}%0A Nasc: ${birthFormatted}%0A WhatsApp: ${data.phone}%0A Carro: ${data.car}%0A Sujeira: ${data.dirtLevel}%0A Serviço: ${data.service}%0A Data: ${serviceDateFormatted}%0A Horário: ${data.time}`;
            
            const whatsappOficina = "556792820395";
            window.open(`https://wa.me/${whatsappOficina}?text=${message}`, '_blank');
            
            this.close();
            this.form.reset(); 

        } catch (error) {
            alert("Erro ao realizar agendamento. Tente novamente.");
            console.error(error);
        } finally {
            this.submitBtn.innerText = "CONFIRMAR AGENDAMENTO";
            this.submitBtn.disabled = false;
        }
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