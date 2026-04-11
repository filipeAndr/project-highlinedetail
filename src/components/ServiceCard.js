export function createServiceCard(service) {
    return `
        <div class="group bg-[#121212] rounded-xl border border-[#2B2B2B] hover:border-[#D90429]/50 transition-all duration-500 overflow-hidden flex flex-col h-full hover:shadow-[0_0_30px_rgba(217,4,41,0.1)] relative">
            
            <div class="h-56 overflow-hidden relative">
                <img src="${service.image}" alt="${service.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100">
                
                <div class="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent"></div>
                
                <div class="absolute bottom-0 left-0 w-0 h-1 bg-[#D90429] transition-all duration-500 group-hover:w-full z-10"></div>
            </div>

            <div class="p-6 md:p-8 flex flex-col flex-grow relative z-20 -mt-6">
                
                <div class="mb-2">
                    <h3 class="font-display text-2xl font-black uppercase text-white tracking-wide mb-1 transition-colors duration-300 group-hover:text-[#D90429]">
                        ${service.title}
                    </h3>
                    <p class="text-[10px] text-[#888888] font-bold uppercase tracking-[0.2em]">
                        ${service.subtitle}
                    </p>
                </div>

                <div class="flex-grow"></div>

                <div class="mt-8 mb-6 pt-6 border-t border-[#2B2B2B]/60">
                    <span class="block text-[10px] font-bold text-[#A0A0A0] uppercase tracking-widest mb-1">
                        A partir de
                    </span>
                    <div class=" items-center gap-1">
                        <span class="text-[#D90429] font-bold text-lg mt-1">R$</span>
                        <span class="text-4xl font-black text-white tracking-tighter">${service.price.hatch}</span>
                    </div>
                </div>

                <button onclick="openServiceDetails('${service.id}')" class="w-full py-4 bg-transparent border border-[#333] text-white hover:border-[#D90429] hover:bg-[#D90429] font-bold rounded flex justify-center items-center gap-3 uppercase text-xs tracking-widest transition-all duration-300">
                    <span>Mais Informações</span>
                    <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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