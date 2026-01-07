// src/js/firebase-config.js

// Importando direto do CDN para funcionar no navegador
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Sua configuração
const firebaseConfig = {
  apiKey: "AIzaSyBtgNRnh3Y46vRPYP7PBkBdETYFCCd-H-I",
  authDomain: "highlinedetailapp.firebaseapp.com",
  projectId: "highlinedetailapp",
  storageBucket: "highlinedetailapp.firebasestorage.app",
  messagingSenderId: "485100752320",
  appId: "1:485100752320:web:4ea88511f3e2d284930c25",
  measurementId: "G-S5QSY36NY6"
};

// Inicializa o App e o Banco
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// === FUNÇÕES ÚTEIS PARA O AGENDAMENTO ===

/**
 * Verifica quais horários já estão ocupados em uma data específica
 * @param {string} dateString - Data no formato YYYY-MM-DD
 * @returns {Promise<Array>} - Lista de horários ocupados (ex: ['10:00', '14:00'])
 */
export async function getTakenSlots(dateString) {
    const appointmentsRef = collection(db, "appointments");
    // Consulta: "Me dê todos os agendamentos ONDE a data é igual a X"
    const q = query(appointmentsRef, where("date", "==", dateString));
    
    const querySnapshot = await getDocs(q);
    const takenSlots = [];
    
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.time) {
            takenSlots.push(data.time);
        }
    });
    
    return takenSlots;
}

/**
 * Salva um novo agendamento no banco de dados
 */
export async function saveAppointment(data) {
    try {
        const docRef = await addDoc(collection(db, "appointments"), {
            name: data.name,
            birthDate: data.birthDate || "Não informado", 
            car: data.car,
            dirtLevel: data.dirtLevel || "Médio", 
            service: data.service,
            date: data.date,
            time: data.time,
            phone: data.phone || "Não informado",
            createdAt: new Date().toISOString()
        });
        console.log("Agendamento salvo com ID: ", docRef.id);
        return docRef.id;
    } catch (e) {
        console.error("Erro ao agendar: ", e);
        throw e;
    }
}