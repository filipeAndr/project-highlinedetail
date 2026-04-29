class AppMaintenance extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        // O número de WhatsApp que estávamos usando no Modal
        const whatsappNumber = "556792820395";
        const message = "Olá! Acessei o site e vi que estão em atualização. Gostaria de informações para agendar um serviço.";
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        this.innerHTML = `
            <section class="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0A0A0A]">
                
                <img src="./src/assets/img/logo-highlinedetail-removebg.png" 
                     alt="Fundo Highline Detail" 
                     class="absolute inset-0 w-full h-full object-cover opacity-10 grayscale">
                     
                <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-[#0A0A0A]/90 to-[#0A0A0A]"></div>

                <div class="relative z-10 flex flex-col justify-center items-center text-center text-white px-6 w-full max-w-3xl mx-auto">
                    
                    <div class="inline-block border border-[#D90429] text-[#D90429] text-[10px] md:text-xs font-bold tracking-[0.2em] px-4 py-2 mb-8 uppercase animate-pulse">
                        Sistema em Atualização
                    </div>
                    
                    <h1 class="font-display text-4xl md:text-6xl font-black uppercase leading-[1.1] mb-6 tracking-tight text-glow">
                        Elevando nosso <br>
                        <span class="text-[#D90429]">Padrão de Excelência</span>
                    </h1>
                    
                    <p class="text-[#A0A0A0] text-base md:text-lg mb-10 leading-relaxed font-medium">
                        Estamos preparando uma nova experiência digital para você. Nossa estética automotiva de alto padrão continua funcionando normalmente. Fale com nossa equipe e agende seu horário.
                    </p>
                    
                    <a href="${whatsappLink}" target="_blank" class="flex items-center gap-3 px-8 py-4 bg-[#D90429] text-white font-bold rounded hover:bg-red-700 transition-all duration-300 uppercase tracking-wider btn-glow hover:-translate-y-1">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                        </svg>
                        Falar com Atendimento
                    </a>
                </div>
            </section>
        `;
    }
}

customElements.define('app-maintenance', AppMaintenance);