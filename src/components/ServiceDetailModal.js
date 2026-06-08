import { services } from '../data/servicesData.js';

class ServiceDetailModal extends HTMLElement {
    connectedCallback() {
        this.render();
        this.setupEvents();
    }

    render() {
        this.innerHTML = `
            <div id="detailModal" class="fixed inset-0 z-[110] hidden">
                <div id="detail-backdrop" class="absolute inset-0 bg-black/95 backdrop-blur-sm transition-opacity cursor-pointer"></div>
                <div class="absolute inset-0 flex items-center justify-center p-4">
                    <div class="bg-[#161616] border border-[#2B2B2B] rounded-xl shadow-2xl w-full max-w-5xl h-[90vh] md:h-auto overflow-hidden flex flex-col md:flex-row relative">
                        
                        <button id="close-detail" class="absolute top-4 right-4 z-20 text-white bg-black/50 p-2 rounded-full hover:bg-[#D90429] transition-colors">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>

                        <div class="w-full md:w-1/2 h-64 md:h-auto relative bg-black">
                            <img id="detail-image" src="" alt="" class="w-full h-full object-cover opacity-90">
                            <div class="absolute inset-0 bg-gradient-to-t from-[#161616] to-transparent md:bg-gradient-to-r"></div>
                        </div>

                        <div class="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto max-h-full custom-scrollbar">
                            <span id="detail-subtitle" class="text-[#D90429] font-bold tracking-widest text-xs uppercase mb-2 block"></span>
                            <h2 id="detail-title" class="font-display text-3xl md:text-4xl font-extrabold text-white uppercase mb-6 leading-tight"></h2>

                            <button id="detail-cta" class="w-full py-4 bg-[#00D757] hover:bg-[#00c24e] text-black font-bold rounded uppercase tracking-wider mb-8 flex items-center justify-center gap-2 shadow-lg hover:shadow-green-900/20 transition-all">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                Agendar este Pacote
                            </button>

                            <div class="space-y-4">
                                <h3 class="font-display font-bold text-white uppercase border-l-4 border-[#D90429] pl-3">O que está incluso:</h3>
                                <ul id="detail-list" class="space-y-2 text-sm text-[#A0A0A0]"></ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: #0A0A0A; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #2B2B2B; border-radius: 3px; }
            </style>
        `;
    }

    setupEvents() {
        this.modal = this.querySelector('#detailModal');
        this.currentService = null;
        
        window.addEventListener('open-service-details', (e) => {
            const serviceId = e.detail;
            const service = services.find(s => s.id === serviceId);
            if (service) this.open(service);
        });

        this.querySelector('#close-detail').addEventListener('click', () => this.close());
        this.querySelector('#detail-backdrop').addEventListener('click', () => this.close());

        // === MUDANÇA AQUI: Redirecionar para o Modal de Agendamento ===
        this.querySelector('#detail-cta').addEventListener('click', () => {
            // 1. Fecha o detalhe atual
            this.close();

            // 2. Abre o modal de agendamento geral
            window.dispatchEvent(new CustomEvent('open-modal'));

            // 3. Tenta selecionar o serviço automaticamente no formulário
            if (this.currentService) {
                setTimeout(() => {
                    const select = document.getElementById('input-service');
                    if (select) {
                        select.value = this.currentService.title;
                    }
                }, 100);
            }
        });
    }

    open(service) {
        this.currentService = service;
        
        this.querySelector('#detail-image').src = service.image;
        this.querySelector('#detail-title').innerText = service.title;
        this.querySelector('#detail-subtitle').innerText = service.subtitle;
        
        const listContainer = this.querySelector('#detail-list');
        listContainer.innerHTML = service.description.map(item => `
            <li class="flex items-start gap-3">
                <svg class="w-4 h-4 text-[#D90429] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                ${item}
            </li>
        `).join('');

        this.modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
    
    close() {
        this.modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

customElements.define('app-service-detail-modal', ServiceDetailModal);