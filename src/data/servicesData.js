// src/data/servicesData.js

export const services = [
    {
        id: "fast",
        title: "Pacote Fast",
        subtitle: "Limpeza Rápida & Eficiente",
        price: { hatch: "79,90", suv: "99,90" },
        image: "./src/assets/img/fig4.png", // Troque pela foto do Fast
        description: [
            "Lavagem externa técnica",
            "Aspiração interna completa",
            "Limpeza de vidros",
            "Pretinho nos pneus",
            "Cera líquida protetora"    
        ]
    },
    {
        id: "premium",
        title: "Pacote Premium",
        subtitle: "O campeão de vendas",
        price: { hatch: "299,90", suv: "499,90" },
        image: "./src/assets/img/fig2.png", // Troque pela foto do produto azul (Vonixx)
        description: [
            "Todos os itens do Pacote Fast",
            "Descontaminação de pintura (básica)",
            "Aplicação de selante sintético",
            "Hidratação de plásticos externos",
            "Limpeza técnica de caixa de rodas"
        ]
    },
    {
        id: "signature",
        title: "Pacote Signature",
        subtitle: "Correção e Brilho",
        price: { hatch: "649,90", suv: "999,90" },
        image: "./src/assets/img/fig1.png", // Troque pela foto da politriz
        description: [
            "Lavagem Detalhada completa",
            "Descontaminação ferrosa",
            "Polimento Comercial (1 etapa)",
            "Proteção de pintura por até 6 meses",
            "Higienização interna superficial"
        ]
    },
    {
        id: "highline",
        title: "Pacote Highline",
        subtitle: "O Estado da Arte (Full Detail)",
        price: { hatch: "1.999,90", suv: "2.499,90" },
        image:"./src/assets/img/fig3.png", // Foto do V-Paint
        // Lista copiada exatamente da sua imagem de referência
        description: [
            "Limpeza externa detalhada",
            "Higienização interna a vapor",
            "Aromatizante e sanitizante",
            "Selante de pneu",
            "Tratamento de plásticos",
            "Tratamento de couro",
            "Descontaminação de pintura",
            "Polimento técnico",
            "Vitrificação",
            "Limpeza e proteção de motor",
            "Limpeza e proteção de chassi",
            "Limpeza e proteção de rodas e caixas de rodas"
        ]
    }
];