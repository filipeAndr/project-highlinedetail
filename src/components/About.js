// src/components/About.js
class AppAbout extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="sobre" class="py-24 bg-[#0A0A0A] relative overflow-hidden">
                
                <div class="absolute top-0 right-0 w-1/3 h-full bg-[#D90429] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

                <div class="container mx-auto px-6 relative z-10">
                    <div class="flex flex-col lg:flex-row items-center gap-16">
                        
                        <div class="w-full lg:w-1/2">
                            <div class="relative rounded-lg p-2 border border-[#2B2B2B]">
                                <div class="absolute inset-0 bg-[#D90429] blur opacity-20"></div> <img src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1000&auto=format&fit=crop" 
                                     alt="Equipe Highline Detail" 
                                     class="relative w-full h-[400px] object-cover rounded shadow-2xl grayscale hover:grayscale-0 transition-all duration-500">
                                
                                <div class="absolute -bottom-6 -right-6 bg-[#161616] p-6 rounded border border-[#2B2B2B] shadow-xl hidden md:block">
                                    <p class="text-[#D90429] font-bold text-3xl font-display">100%</p>
                                    <p class="text-xs text-white uppercase tracking-wider">Foco no Detalhe</p>
                                </div>
                            </div>
                        </div>

                        <div class="w-full lg:w-1/2">
                            <h3 class="text-[#D90429] font-bold tracking-widest text-sm uppercase mb-2">Quem Somos</h3>
                            <h2 class="font-display text-3xl md:text-4xl font-extrabold text-white uppercase mb-6">
                                Paixão e Técnica <br> em Cada Serviço
                            </h2>
                            
                            <div class="space-y-6 text-[#A0A0A0] leading-relaxed text-lg">
                                <p>
                                    Na <strong class="text-white">Highline Detail</strong>, somos apaixonados por carros e dedicados a oferecer o cuidado que seu veículo merece. Unimos <span class="text-white">tecnologia, técnica e atenção aos detalhes</span> para entregar resultados impecáveis em cada serviço.
                                </p>
                                <p>
                                    Nosso objetivo vai além da aparência: queremos que você tenha <strong class="text-white">orgulho do seu automóvel</strong> e sinta confiança em cada atendimento!
                                </p>
                                <p>
                                    Valorizamos a transparência, o respeito e a satisfação de cada cliente. Aqui você encontra dedicação e resultados que fazem a diferença.
                                </p>
                            </div>

                            <div class="grid grid-cols-3 gap-4 mt-10 border-t border-[#2B2B2B] pt-8">
                                <div class="text-center">
                                    <div class="w-10 h-10 mx-auto mb-3 rounded-full bg-[#161616] border border-[#2B2B2B] flex items-center justify-center text-[#D90429]">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </div>
                                    <p class="text-xs font-bold text-white uppercase">Transparência</p>
                                </div>
                                <div class="text-center">
                                    <div class="w-10 h-10 mx-auto mb-3 rounded-full bg-[#161616] border border-[#2B2B2B] flex items-center justify-center text-[#D90429]">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
                                    </div>
                                    <p class="text-xs font-bold text-white uppercase">Respeito</p>
                                </div>
                                <div class="text-center">
                                    <div class="w-10 h-10 mx-auto mb-3 rounded-full bg-[#161616] border border-[#2B2B2B] flex items-center justify-center text-[#D90429]">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                                    </div>
                                    <p class="text-xs font-bold text-white uppercase">Qualidade</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('app-about', AppAbout);