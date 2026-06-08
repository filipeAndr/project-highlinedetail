export function createServiceCard(service) {
    return `
        <div class="group bg-[#121212] rounded-xl border border-[#2B2B2B] hover:border-[#D90429]/50 transition-all duration-500 overflow-hidden flex flex-col md:flex-row max-w-5xl mx-auto w-full hover:shadow-[0_0_30px_rgba(217,4,41,0.1)] relative">
            
            <!-- 1. Imagem (Metade Esquerda no PC, Topo no Celular) -->
            <div class="w-full md:w-1/2 h-64 md:h-auto min-h-[300px] overflow-hidden relative">
                <img src="${service.image}" alt="${service.title}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100">
                
                <!-- Gradiente adaptativo: de baixo pra cima no celular, da direita pra esquerda no PC -->
                <div class="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#121212] via-[#121212]/40 to-transparent"></div>
                
                <!-- Linha animada -->
                <div class="absolute bottom-0 left-0 w-0 h-1 bg-[#D90429] transition-all duration-500 group-hover:w-full z-10"></div>
            </div>

            <!-- 2. Conteúdo (Metade Direita no PC, Base no Celular) -->
            <div class="w-full md:w-1/2 p-8 md:p-12 flex flex-col flex-grow relative z-20 justify-center">
                
                <div class="mb-4">
                    <!-- Badge de exclusividade para preencher bem o espaço -->
                    <div class="inline-block border border-[#D90429] text-[#D90429] text-[10px] font-bold tracking-[0.2em] px-3 py-1 mb-4 uppercase rounded-sm">
                        Pacote Premium Exclusivo
                    </div>
                    
                    <h3 class="font-display text-3xl md:text-4xl font-black uppercase text-white tracking-wide mb-2 transition-colors duration-300 group-hover:text-[#D90429]">
                        ${service.title}
                    </h3>
                    <p class="text-xs text-[#888888] font-bold uppercase tracking-[0.2em]">
                        ${service.subtitle}
                    </p>
                </div>

                <div class="flex-grow min-h-[1rem] md:min-h-[2rem]"></div>

                

                <!-- O botão foi ajustado para chamar o modal com mais peso -->
                <button onclick="openServiceDetails('${service.id}')" class="w-full py-5 bg-transparent border border-[#333] text-white hover:border-[#D90429] hover:bg-[#D90429] font-bold rounded flex justify-center items-center gap-3 uppercase text-sm tracking-widest transition-all duration-300">
                    <span>Mais Informações e Agendamento</span>
                    <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </button>
                
            </div>
        </div>
    `;
}

window.openServiceDetails = (serviceId) => {
    const event = new CustomEvent('open-service-details', { detail: serviceId });
    window.dispatchEvent(event);
};