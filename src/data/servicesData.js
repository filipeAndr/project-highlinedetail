// src/data/servicesData.js

export const services = [
    {
        id: "fast",
        title: "Pacote Fast",
        subtitle: "Limpeza Rápida & Eficiente",
        price: { hatch: "119,90", suv: "159,90" },
        image: "./src/assets/img/fig4.png", // Troque pela foto do Fast
        description: [
            "Lavagem externa técnica",
            "Aspiração interna",
            "Limpeza de vidros",
            "Selante de pneus",
            "Selante de pintura"    
        ]
    },
    {
        id: "premium",
        title: "Pacote Premium",
        subtitle: "O campeão de vendas",
        price: { hatch: "229,90", suv: "379,90" },
        image: "./src/assets/img/fig2.png", // Troque pela foto do produto azul (Vonixx)
        description: [
            "Todos os itens do Pacote Fast",
            "Descontaminação de pintura e vidros",
            "Aplicação de selante sintético",
            "Hidratação de plásticos externos",
            "Limpeza técnica de caixa de rodas",
            "Cristalização de vidros",
            "Aromatizante e sanitizante"
        ]
    },
    {
        id: "signature",
        title: "Pacote Signature",
        subtitle: "Correção e Brilho",
        price: { hatch: "599,90", suv: "799,90" },
        image: "./src/assets/img/fig1.png", // Troque pela foto da politriz
        description: [
            "Todos os itens do Pacote Premium",
            "Limpeza externa detalhada",
            "Limpeza interna detalhada",
            "Descontaminação de pintura e vidros",
            "Polimento",
            "Tratamento de plásticos e Couro",
            "Cristalização de vidros",
        ]
    },
    {
        id: "highline",
        title: "Pacote Highline",
        subtitle: "O Estado da Arte (Full Detail)",
        price: { hatch: "1.399,90", suv: "1.999,90" },
        image:"./src/assets/img/fig3.png", // Foto do V-Paint
        // Lista copiada exatamente da sua imagem de referência
        description: [
            "Todos os itens do Pacote Signature",
            "Higienização interna a vapor",
            "Polimento técnico",
            "Vitrificação",
            "Limpeza e proteção de motor",
            "Limpeza e proteção de rodas e caixas de rodas"
        ]
    }
];