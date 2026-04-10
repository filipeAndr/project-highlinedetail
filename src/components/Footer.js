// src/components/Footer.js
class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="bg-[#161616] border-t border-[#2B2B2B] pt-16 pb-8 text-sm text-[#A0A0A0]">
                <div class="container mx-auto px-6">
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        
                        <div>
                            <h4 class="text-white font-display font-bold uppercase tracking-wider mb-6 border-l-4 border-[#D90429] pl-3">
                                Pagamento
                            </h4>
                            <ul class="space-y-4">
                                <li class="flex items-center gap-3">
                                    <svg class="w-5 h-5 text-[#D90429]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                    <span>Dinheiro</span>
                                </li>
                                <li class="flex items-center gap-3">
                                    <svg class="w-5 h-5 text-[#D90429]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                                    <span>Cartão de Crédito/Débito</span>
                                </li>
                                <li class="flex items-center gap-3">
                                    <svg class="w-5 h-5 text-[#D90429]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                                    <span>Link de Pagamento</span>
                                </li>
                                <li class="flex items-center gap-3">
                                    <svg class="w-5 h-5 text-[#D90429]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                    <span>Pix</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 class="text-white font-display font-bold uppercase tracking-wider mb-6 border-l-4 border-[#D90429] pl-3">
                                Atendimento
                            </h4>
                            <ul class="space-y-4">
                                <li class="grid items-start gap-3">
                                    <svg class="w-5 h-5 text-[#D90429] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                    <div>
                                        <strong class="text-white block"> Nossa garagem </strong>
                                        <p class="text-xs mt-1 leading-relaxed">O serviço é realizado na nossa garagem no centro de campo grande, venha conhecer!</p>
                                    </div>
                                    <svg class="w-5 h-5 text-[#D90429] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                    <div>
                                        <strong class="text-white block">Domicílio (Delivery)</strong>
                                        <p class="text-xs mt-1 leading-relaxed">O serviço é realizado na sua garagem ou através do sistema Leva e Traz.</p>
                                    </div>
                                    
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 class="text-white font-display font-bold uppercase tracking-wider mb-6 border-l-4 border-[#D90429] pl-3">
                                Contato
                            </h4>
                            <ul class="space-y-4">
                                <li class="flex items-center gap-3">
                                    <svg class="w-5 h-5 text-[#D90429]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    <a href="mailto:highlinedetailcg@gmail.com" class="hover:text-white transition-colors">highlinedetailcg@gmail.com</a>
                                </li>
                                <li class="flex items-center gap-3">
                                    <svg class="w-5 h-5 text-[#D90429]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    <a href="https://wa.me/55679992820395" class="hover:text-white transition-colors">+55 67 99928-20395</a>
                                </li>
                                <li class="flex items-start gap-3">
                                    <svg class="w-5 h-5 text-[#D90429] mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    <a href="https://www.google.com/maps/place/R.+Padre+Jo%C3%A3o+Crippa,+1998+-+Centro,+Campo+Grande+-+MS,+79002-390/@-20.455695,-54.6139421,17z/data=!3m1!4b1!4m6!3m5!1s0x9486e627bb28f21f:0x3cbd4ae62918ff02!8m2!3d-20.4557!4d-54.6113672!16s%2Fg%2F11nnt08q0l?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" class="hover:text-white transition-colors leading-relaxed">
                                        R. Padre João Cripa, 1998 <br>
                                        Monte Castelo, Centro <br>
                                        Campo Grande - MS
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 class="text-white font-display font-bold uppercase tracking-wider mb-6 border-l-4 border-[#D90429] pl-3">
                                Segurança
                            </h4>
                            <div class="flex flex-col gap-4">
                                <div class="flex items-center gap-3 bg-[#0A0A0A] p-3 rounded border border-[#2B2B2B]">
                                    <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                    <div>
                                        <p class="text-white font-bold text-xs">SITE SEGURO</p>
                                        <p class="text-[10px]">Certificado SSL 256 bits</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-3 bg-[#0A0A0A] p-3 rounded border border-[#2B2B2B]">
                                    <svg class="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path></svg>
                                    <div>
                                        <p class="text-white font-bold text-xs">GOOGLE</p>
                                        <p class="text-[10px]">Safe Browsing</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="border-t border-[#2B2B2B] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p class="text-xs">&copy; 2026 Highline Detail. Todos os direitos reservados.</p>
                        
                        <div class="flex items-center gap-4 bg-[#0A0A0A] px-4 py-2 rounded-full border border-[#2B2B2B]">
                            <span class="text-xs font-bold text-white"> Criado por Filipe Andrade | Contato:</span>
                            
                            <a href="https://instagram.com/andr.filipe_/" target="_blank" class="text-[#A0A0A0] hover:text-[#D90429] transition-colors">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                            </a>

                            <a href="https://github.com/filipeAndr" target="_blank" class="text-[#A0A0A0] hover:text-[#D90429] transition-colors">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                            </a>
                        </div>
                    </div>

                </div>
            </footer>
        `;
    }
}

customElements.define('app-footer', AppFooter);