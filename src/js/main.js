// src/js/main.js

// 1. Importar componentes
import '../components/Navbar.js';
import '../components/Hero.js';
import '../components/Modal.js';
import '../components/Footer.js';
import '../components/ServiceDetailModal.js';
import '../components/About.js';
import '../components/ServiceTable.js';
import '../components/Service.js'; 
import '../components/Brands.js';
import '../components/Maintenance.js'; 

document.addEventListener('DOMContentLoaded', () => {


    window.addEventListener('open-modal', () => {

        if (window.toggleModal) {
            window.toggleModal(true);
        } else {
            console.warn("Função toggleModal não encontrada. O modal já foi implementado?");
        }
    });

});