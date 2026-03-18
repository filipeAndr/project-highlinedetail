export function createServiceCard(service) {
    return `
        <div id="services" class="group bg-[#161616] rounded-xl border border-[#2B2B2B] hover:border-[#D90429] transition-all duration-300 overflow-hidden flex flex-col h-full">
            
            <div class="h-48 overflow-hidden relative">
                <img src="${service.image}" alt="${service.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-[#161616] to-transparent opacity-60"></div>
            </div>

            <div class="p-6 flex flex-col flex-grow">
                <h3 class="font-display text-xl font-bold uppercase text-white mb-1">${service.title}</h3>
                <p class="text-xs text-[#A0A0A0] uppercase tracking-wider mb-4">${service.subtitle}</p>
                
                <div class="mt-auto mb-6">
                    <span class="block text-sm font-bold text-white uppercase tracking-wider mb-1 opacity-90">
                        A partir de
                    </span>
                    <div class="text-3xl font-extrabold text-white">R$ ${service.price.hatch}</div>
                </div>

                <div class="space-y-3">
                    
                    <button onclick="openServiceDetails('${service.id}')" class="w-full py-3 border border-[#D90429] text-[#D90429] hover:bg-[#D90429] hover:text-white font-bold rounded uppercase text-sm tracking-wide transition-all">
                        Mais Informações
                    </button>

                </div>
            </div>
        </div>
    `;
}

window.openServiceDetails = (serviceId) => {
    const event = new CustomEvent('open-service-details', { detail: serviceId });
    window.dispatchEvent(event);
};