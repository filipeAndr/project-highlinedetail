// src/js/main.js

// 1. Importar componentes
import '../components/Navbar.js';
import '../components/Hero.js';
import '../components/Modal.js';
import '../components/Footer.js';
import '../components/ServiceDetailModal.js';
import '../components/About.js';
import { services } from '../data/servicesData.js';
import { createServiceCard } from '../components/ServiceCard.js';

document.addEventListener('DOMContentLoaded', () => {
    
    // 2. Renderizar Serviços (Grid)
    const grid = document.getElementById('services-grid');
    if (grid) {
        grid.innerHTML = services.map(service => createServiceCard(service)).join('');
    }

    // 3. Ouvinte de Evento Global para abrir o Modal
    // (Isso conecta os botões da Navbar e do Hero ao Modal)
    window.addEventListener('open-modal', () => {
        // Se você ainda não moveu a lógica do modal para um componente,
        // mas a função toggleModal existe no escopo global (window), chame-a:
        if (window.toggleModal) {
            window.toggleModal(true);
        } else {
            console.warn("Função toggleModal não encontrada. O modal já foi implementado?");
        }
    });

});