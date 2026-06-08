class AppVideoSection extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {

        const videoUrlWEBM = "./src/assets/video/video-institucional.webm";
        const videoUrlMP4 = "./src/assets/video/video-institucional.mp4";

        this.innerHTML = `
            <section id="video-institucional" class="py-24 bg-[#050505] border-t border-[#161616] relative overflow-hidden">
                
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-[#D90429] opacity-[0.02] blur-[100px] rounded-full pointer-events-none"></div>

                <div class="container mx-auto px-6 max-w-5xl relative z-10">
                    
                    <div class="text-center mb-12 md:mb-16">
                        <div class="inline-block border border-[#D90429] text-[#D90429] text-[10px] md:text-xs font-bold tracking-[0.2em] px-4 py-2 mb-6 uppercase rounded-sm">
                            A Arte do Detalhamento
                        </div>
                        <h2 class="font-bold font-display text-3xl md:text-4xl lg:text-5xl text-white uppercase tracking-wider mb-6">
                            Conheça a <span class="text-[#D90429]">Highline</span>
                        </h2>
                        <p class="text-[#A0A0A0] max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                            Mais do que estética, uma verdadeira paixão por máquinas. Assista ao nosso vídeo e entenda o nível de exigência, tecnologia e perfeição que aplicamos em cada projeto.
                        </p>
                    </div>

                    <div class="group relative mx-auto w-full rounded-2xl overflow-hidden border border-[#2B2B2B] hover:border-[#D90429]/50 transition-all duration-500 shadow-2xl hover:shadow-[0_0_50px_rgba(217,4,41,0.15)] bg-[#0A0A0A]">
                        
                        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0A0A0A] via-[#D90429] to-[#0A0A0A] opacity-50 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>

                        <div class="relative w-full aspect-video">
                            
                            <video controls class="absolute top-0 left-0 w-full h-full object-cover outline-none bg-black">
                                <source src="${videoUrlWEBM}" type="video/webm">
                                <source src="${videoUrlMP4}" type="video/mp4">
                                <p class="text-white p-4">Seu navegador não suporta a tag de vídeo.</p>
                            </video>

                        </div>
                    </div>

                </div>
            </section>
        `;
    }
}

customElements.define('app-video-section', AppVideoSection);