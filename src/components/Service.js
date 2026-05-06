import './ServiceDetailModal.js';
import { services } from '../data/servicesData.js';
import { createServiceCard } from './ServiceCard.js';

class AppServices extends HTMLElement {
    connectedCallback() {
        
        this.render();
        this.createServiceCards();
        this.setupEvents();
        
    }

    render() {
        this.innerHTML = `

            <section id="servicos" class="py-20 bg-[#161616] border-y border-[#2B2B2B]">
                <div class=" container mx-auto px-6 text-center mb-12">
                    <h2 class="font-bold font-display text-3xl md:text-4xl font-extrabold text-white uppercase tracking-wider mb-4">
                        Nosso <span class="text-[#D90429]">Serviço</span>
                    </h2>
                    <p class="text-[#A0A0A0] max-w-2xl mx-auto text-sm md:text-base pb-10">
                        Soluções exclusivas em estética automotiva de alto padrão para quem não aceita menos que a perfeição. Do detalhamento minucioso à proteção extrema, devolvemos o brilho de zero km ao seu veículo.
                    </p>

                    <div id="services-grid" class="w-full px-4"></div>
                </div>
            </section>
        `;
    }

    createServiceCards() {
        const grid = document.getElementById('services-grid');
        if (grid) {
            grid.innerHTML = services.map(service => createServiceCard(service)).join('');
        }

    }
}


customElements.define('app-services', AppServices);