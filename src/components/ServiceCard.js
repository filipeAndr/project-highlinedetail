export function createServiceCard(service) {
    return `
        <div class="group bg-[#161616] rounded-xl border border-[#2B2B2B] hover:border-[#D90429] transition-all duration-300 overflow-hidden flex flex-col h-full">
            
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
                    <button onclick="directToWhatsapp('${service.title}', '${service.price.hatch}')" class="w-full py-3 bg-[#00D757] hover:bg-[#00c24e] text-black font-bold rounded uppercase text-sm tracking-wide flex items-center justify-center gap-2 transition-colors shadow-lg hover:shadow-green-900/20">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                        Pedir no WhatsApp
                    </button>
                    
                    <button onclick="openServiceDetails('${service.id}')" class="w-full py-3 border border-[#D90429] text-[#D90429] hover:bg-[#D90429] hover:text-white font-bold rounded uppercase text-sm tracking-wide transition-all">
                        Mais Informações
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Funções globais auxiliares
window.directToWhatsapp = (title, price) => {
    const phoneNumber = "55679992820395"; 
    const text = `Olá! Vi no site o *${title}* (a partir de R$ ${price}) e gostaria de agendar um horário.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
};

window.openServiceDetails = (serviceId) => {
    const event = new CustomEvent('open-service-details', { detail: serviceId });
    window.dispatchEvent(event);
};