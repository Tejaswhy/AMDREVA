import React, { useState } from 'react';

export default function HomePage({ setPage }) {
  const [expandedCard1, setExpandedCard1] = useState(false);
  const [expandedCard2, setExpandedCard2] = useState(false);

  return (
    <div className="bg-background min-h-screen pb-32">
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 h-16 bg-white/70 backdrop-blur-lg border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-fixed shadow-sm">
            <img alt="User Profile" className="w-full h-full object-cover" data-alt="Close-up portrait of a smiling woman with clear skin and natural lighting, representing health and vitality" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBthCSSn5T61LlYy_9zhKG_Y-0Mj3MQ_0ewNrbU4VCPC9WZEEvpy3PyHRQeaPIz3rQ2YVE8kbk-yeDlf9ZYdux7cKLB7V0ajS4zWw2fEIQySlMKltOGNBwWNSt22QNC7PkLVA-OjMOU7IN6Xa7Kp4z3H0mU5gTtEYVX-kbulJpk5stOJrJqERGg3H1FsLxtIC5hznnT9K1qrMUb_OkIK78t9xD54xKKSEH_YMEY8yvjmYg2CdoqRZhgXmEc6DWEOeN5ZlViqbjjozAH"/>
          </div>
          <span className="text-lg font-bold text-emerald-900 tracking-tight font-['Space_Grotesk']">Vitality AI</span>
        </div>
        <button 
          onClick={() => alert("Settings clicked")}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-emerald-50/50 transition-colors active:scale-95 duration-200"
        >
          <span className="material-symbols-outlined text-emerald-800">settings</span>
        </button>
      </header>

      <main className="pt-20 px-6 space-y-8">
        {/* Health Dashboard Section */}
        <section className="glass-panel rounded-[32px] p-6 shadow-[0_8px_32px_rgba(45,90,67,0.05)]" id="health-dashboard">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="font-h2 text-h2 text-primary">Daily Status</h2>
              <p className="text-on-surface-variant font-body-md">Your body is performing at its peak.</p>
            </div>
            <span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-label-caps uppercase">Vitality High</span>
          </div>
          <div className="flex flex-col items-center justify-center py-4">
            <div className="relative w-48 h-48 flex items-center justify-center">
              <svg className="w-full h-full">
                <circle className="text-surface-container-highest" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="12"></circle>
                <circle className="text-primary progress-ring" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeDasharray="552.9" strokeDashoffset="165.8" strokeLinecap="round" strokeWidth="12"></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-h1 text-primary">7/10</span>
                <span className="text-label-caps text-on-surface-variant">Health Score</span>
              </div>
            </div>
            <div className="mt-8 w-full grid grid-cols-7 gap-2">
              <div className="flex flex-col items-center gap-2">
                <div className="w-2 h-12 bg-surface-container-highest rounded-full relative overflow-hidden">
                  <div className="absolute bottom-0 w-full bg-primary-fixed-dim h-3/4"></div>
                </div>
                <span className="text-[10px] font-label-caps text-on-surface-variant">M</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-2 h-12 bg-surface-container-highest rounded-full relative overflow-hidden">
                  <div className="absolute bottom-0 w-full bg-primary-fixed-dim h-1/2"></div>
                </div>
                <span className="text-[10px] font-label-caps text-on-surface-variant">T</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-2 h-12 bg-surface-container-highest rounded-full relative overflow-hidden">
                  <div className="absolute bottom-0 w-full bg-primary-fixed-dim h-5/6"></div>
                </div>
                <span className="text-[10px] font-label-caps text-on-surface-variant">W</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-2 h-12 bg-surface-container-highest rounded-full relative overflow-hidden">
                  <div className="absolute bottom-0 w-full bg-primary h-full"></div>
                </div>
                <span className="text-[10px] font-label-caps text-on-surface-variant font-bold">T</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-2 h-12 bg-surface-container-highest rounded-full"></div>
                <span className="text-[10px] font-label-caps text-on-surface-variant">F</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-2 h-12 bg-surface-container-highest rounded-full"></div>
                <span className="text-[10px] font-label-caps text-on-surface-variant">S</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-2 h-12 bg-surface-container-highest rounded-full"></div>
                <span className="text-[10px] font-label-caps text-on-surface-variant">S</span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Nutrition Hub */}
        <section className="relative py-8" id="nutrition-hub">
          <div className="text-center mb-8">
            <h2 className="font-h2 text-h2 text-primary">Nutrition Hub</h2>
            <p className="text-on-surface-variant font-body-md">Visualize your cellular fuel.</p>
          </div>
          <div className="relative mx-auto w-72 h-72">
            <div className="absolute inset-0 rounded-full bg-primary-fixed/20 animate-pulse"></div>
            <div className="absolute inset-8 rounded-full glass-panel flex flex-col items-center justify-center text-center p-6 z-10 shadow-xl border-white/50">
              <span className="material-symbols-outlined text-primary mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
              <p className="text-label-caps text-primary leading-tight">Type or scan your food...</p>
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 flex flex-col items-center">
              <div className="bg-[#FFEDD5] text-[#9A3412] px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-sm">Carbs</div>
              <div className="w-1 h-6 bg-[#FED7AA] mt-1"></div>
            </div>
            <div className="absolute top-1/4 right-0 translate-x-4 flex items-center">
              <div className="h-1 w-6 bg-[#BCEECF]"></div>
              <div className="bg-[#E7F9EE] text-[#14422D] px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-sm ml-1">Protein</div>
            </div>
            <div className="absolute bottom-1/4 right-0 translate-x-4 flex items-center">
              <div className="h-1 w-6 bg-[#E9D5FF]"></div>
              <div className="bg-[#F5F3FF] text-[#5B21B6] px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-sm ml-1">Fats</div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 flex flex-col items-center">
              <div className="w-1 h-6 bg-[#D1FAE5] mb-1"></div>
              <div className="bg-[#ECFDF5] text-[#065F46] px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-sm">Fiber</div>
            </div>
            <div className="absolute bottom-1/4 left-0 -translate-x-4 flex items-center">
              <div className="bg-[#FCE7F3] text-[#9D174D] px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-sm mr-1">Vitamins</div>
              <div className="h-1 w-6 bg-[#FBCFE8]"></div>
            </div>
            <div className="absolute top-1/4 left-0 -translate-x-4 flex items-center">
              <div className="bg-[#E0F2FE] text-[#075985] px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-sm mr-1">Minerals</div>
              <div className="h-1 w-6 bg-[#BAE6FD]"></div>
            </div>
          </div>
        </section>

        {/* AI Smart Swaps */}
        <section className="space-y-6" id="smart-swaps">
          <div className="flex items-center justify-between">
            <h2 className="font-h2 text-h2 text-primary">Recommended for you</h2>
            <span className="text-primary font-label-caps flex items-center gap-1">View all <span className="material-symbols-outlined text-sm">arrow_forward_ios</span></span>
          </div>
          <div className="space-y-4">
            {/* Card 1 */}
            <div className="glass-panel rounded-[24px] overflow-hidden shadow-sm group">
              <div className="relative h-48 overflow-hidden">
                <img alt="Quinoa Salad" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Vibrant quinoa salad with colorful vegetables, avocado slices, and fresh herbs in a white bowl on a light stone surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQrnDgqxxJpZwJ8XcmoKKS9uYquaHd6JcznWdorKFoy4-Hl0TwbRpN9fAYuLTaavovalDHHZfXYuWw2QwvC7YN5qklKNpVSM43gaUV1jAPxNGFSEVhiL3Iu6ZliiukckMDF7l6h3vFmTc417QDp3Sehk1KeaREJ7qifaLEg8UPM2g3wLv_ygUZEmKTO_XmZD6LdtZVvmZ82csxtKIzopXE389QzHG5DjDBehWBGzh1H-nWyBvOsXokRRtGrCQ48YTJ7xJQ6O35iDac"/>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-sm font-bold text-primary">9.2</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-h2 text-lg text-primary">Quinoa Power Bowl</h3>
                    <div className="flex gap-2 mt-1">
                      <span className="text-[10px] bg-secondary-container/30 text-on-secondary-container px-2 py-0.5 rounded-full font-label-caps">High Protein</span>
                      <span className="text-[10px] bg-secondary-container/30 text-on-secondary-container px-2 py-0.5 rounded-full font-label-caps">Heart Healthy</span>
                    </div>
                  </div>
                  <button onClick={() => setExpandedCard1(!expandedCard1)} className="text-primary-container p-2 rounded-full hover:bg-primary-fixed/30 transition-colors">
                    <span className="material-symbols-outlined">{expandedCard1 ? "expand_less" : "expand_more"}</span>
                  </button>
                </div>
                <p className="text-sm text-on-surface-variant mb-4 font-body-md italic border-l-2 border-primary-fixed pl-3">"This swap increases your fiber by 12g compared to your usual white rice."</p>
                {expandedCard1 && (
                  <div className="text-sm text-on-surface-variant mb-4 font-body-md">
                    Additional nutritional information: 450 calories, 18g protein, 12g fiber.
                  </div>
                )}
                <div className="flex gap-3">
                  <button onClick={() => alert("Meal swapped!")} className="flex-1 bg-primary text-on-primary py-3 rounded-xl font-label-caps flex items-center justify-center gap-2 active:scale-95 transition-all">
                    <span className="material-symbols-outlined text-sm">swap_horiz</span>
                    Swap Meal
                  </button>
                  <button onClick={() => alert("Added to meal!")} className="flex-1 border border-primary text-primary py-3 rounded-xl font-label-caps flex items-center justify-center gap-2 hover:bg-primary-fixed/10 active:scale-95 transition-all">
                    <span className="material-symbols-outlined text-sm">add</span>
                    Add to Meal
                  </button>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="glass-panel rounded-[24px] overflow-hidden shadow-sm group">
              <div className="relative h-48 overflow-hidden">
                <img alt="Baked Sweet Potato" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Roasted sweet potato halves topped with creamy yogurt, chickpeas, and fresh parsley, steaming slightly on a rustic wooden board" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBqpKrHpCv-MYe347JeTKm-yIJz7kmCqA2pbVay3uo9ypTd1UruGASTya6DhHij1Fb49bV89qEYjzfp1BV1fLPd5Ss61MMoPZisJIKvDqDLvpRf8-bEZvyxPbyh0ZtrtFr7ZmNntlnFJXP5uNH2x7a4dtlhKc-U2zkmjkv_FcdD9ETZTfN5o5szpNS01Zn3BqOIuzNbGMwTahdST9-Qe3Qz2BzzAjzpRsAKJVsgB_QN-bWkU6LM6BXJQK_rExnSqIbw1nf8DBFUxH4"/>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-sm font-bold text-primary">8.8</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-h2 text-lg text-primary">Stuffed Sweet Potato</h3>
                    <div className="flex gap-2 mt-1">
                      <span className="text-[10px] bg-secondary-container/30 text-on-secondary-container px-2 py-0.5 rounded-full font-label-caps">Vitamins A+C</span>
                      <span className="text-[10px] bg-secondary-container/30 text-on-secondary-container px-2 py-0.5 rounded-full font-label-caps">Energy Boost</span>
                    </div>
                  </div>
                  <button onClick={() => setExpandedCard2(!expandedCard2)} className="text-primary-container p-2 rounded-full hover:bg-primary-fixed/30 transition-colors">
                    <span className="material-symbols-outlined">{expandedCard2 ? "expand_less" : "expand_more"}</span>
                  </button>
                </div>
                <p className="text-sm text-on-surface-variant mb-4 font-body-md italic border-l-2 border-primary-fixed pl-3">"Perfect for recovery. Rich in complex carbs to replenish your glycogen."</p>
                {expandedCard2 && (
                  <div className="text-sm text-on-surface-variant mb-4 font-body-md">
                    Additional nutritional information: 320 calories, 8g protein, 7g fiber.
                  </div>
                )}
                <div className="flex gap-3">
                  <button onClick={() => alert("Meal swapped!")} className="flex-1 bg-primary text-on-primary py-3 rounded-xl font-label-caps flex items-center justify-center gap-2 active:scale-95 transition-all">
                    <span className="material-symbols-outlined text-sm">swap_horiz</span>
                    Swap Meal
                  </button>
                  <button onClick={() => alert("Added to meal!")} className="flex-1 border border-primary text-primary py-3 rounded-xl font-label-caps flex items-center justify-center gap-2 hover:bg-primary-fixed/10 active:scale-95 transition-all">
                    <span className="material-symbols-outlined text-sm">add</span>
                    Add to Meal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
