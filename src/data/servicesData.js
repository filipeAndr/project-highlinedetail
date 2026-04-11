// src/data/servicesData.js

export const services = [
    {
        id: "Bronze",
        title: "Pacote Bronze",
        subtitle: "Limpeza Rápida & Eficiente",
        price: { hatch: "320,00", sedan: "360,00", suv: "480,00", camionete: "600,00", luxo: "760,00" },
        image: "./src/assets/img/fig4.png", // Troque pela foto do Fast
        description: [
            "Limpeza Simples",
            "Aromatizante",
            "Sanitização",
            "Selante de pneus"    
        ]
    },
    {
        id: "prata",
        title: "Pacote Prata",
        subtitle: "O campeão de vendas",
        price: { hatch: "350,00", sedan: "405,00", suv: "545,00", camionete: "680,00", luxo: "880,00" },
        image: "./src/assets/img/fig2.png", // Troque pela foto do produto azul (Vonixx)
        description: [
            "Limpeza Simples",
            "Aromatizante",
            "Sanitização",
            "Selante de pneus",
            "Enceramento de pintura"
        ]
    },
    {
        id: "ouro",
        title: "Pacote Ouro",
        subtitle: "Correção e Brilho",
        price: { hatch: "850,00", sedan: "1110,00", suv: "1370,00", camionete: "1670,00", luxo: "2380,00" },
        image: "./src/assets/img/fig1.png", // Troque pela foto da politriz
        description: [
            "Limpeza Detalhada",
            "Aromatizante",
            "Sanitização",
            "Selante de pneus",
            "Selante de pintura",
            "Hidratação de Plásticos",
            "Hidratação de Couros"
        ]
    }
];