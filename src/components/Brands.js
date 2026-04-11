class AppBrands extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        // LISTA DE MARCAS: Adicione os caminhos das suas imagens aqui.
        // Dica: Imagens PNG com fundo transparente funcionam melhor.
        const brands = [
            { name: "AlcancePro", src: "./src/assets/parceiros/alcancePro.png" },
            { name: "Cadillac", src: "./src/assets/parceiros/cadillac.png" },
            { name: "Carpro", src: "./src/assets/parceiros/carPro.png" },
            { name: "EasyTech", src: "./src/assets/parceiros/easytech.png" },
            { name: "KCX", src: "./src/assets/parceiros/kcx.jpeg" },
            { name: "NobreCar", src: "./src/assets/parceiros/nobrecar.png" },
            { name: "Soft99", src: "./src/assets/parceiros/soft99.png" },
            { name: "Sonax", src: "./src/assets/parceiros/sonax.png" },
            { name: "Swissvax", src: "./src/assets/parceiros/swissvax.png" },
            { name: "TP", src: "./src/assets/parceiros/tp.png" },
            { name: "Vonixx", src: "./src/assets/parceiros/vonixx.png" }
        ];

        const brandsHTML = brands.map(brand => `
            <div class="group bg-[#121212] border border-[#2B2B2B] hover:border-[#D90429] aspect-square flex items-center justify-center p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(217,4,41,0.15)] cursor-pointer">
                <img src="${brand.src}" alt="${brand.name}" class="max-h-32 md:max-h-32 w-auto object-contain brightness-150 drop-shadow-[0_10px_25px_rgba(217,4,41,0.8)] group-hover:opacity-100 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500 transform group-hover:scale-110">
            </div>
        `).join('');

        this.innerHTML = `
            <section id="parceiros" class="py-20 bg-[#0A0A0A] border-y border-[#161616] overflow-hidden">
                <div class="container mx-auto px-6 max-w-7xl">
                    
                    <div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        
                        <div class="w-full lg:w-5/12 flex flex-col items-start text-left">
                            
                            <div class="inline-block border border-[#D90429] text-[#D90429] text-[10px] font-bold tracking-[0.2em] px-4 py-1 mb-8 uppercase">
                                Ecossistema Técnico
                            </div>
                            
                            <h2 class="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-[1.1] mb-6 tracking-tight">
                                Alianças <br>
                                <span class="text-[#D90429]">Estratégicas</span> <br>
                                Oficiais
                            </h2>
                            
                            <p class="text-[#888888] text-sm md:text-base leading-relaxed mb-8 max-w-md font-medium">
                                A excelência nunca é alcançada isoladamente. Fizemos parcerias exclusivas com as marcas mais prestigiadas do mundo automotivo e pioneiros da engenharia química para garantir que cada milímetro do seu veículo receba um cuidado intransigente.
                            </p>
                            
                            <div class="w-16 h-1 bg-[#D90429]"></div>
                        </div>

                        <div class="w-full lg:w-7/12">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                                ${brandsHTML}
                            </div>
                        </div>

                    </div>
                    
                </div>
            </section>
        `;
    }
}

customElements.define('app-brands', AppBrands);