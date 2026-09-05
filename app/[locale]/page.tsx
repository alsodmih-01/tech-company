import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage'); // استدعاء أداة الترجمة

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col relative overflow-hidden">
      
      {/* القسم الرئيسي */}
      <main className="flex flex-col items-center justify-center text-center px-4 relative z-10 pt-32 pb-16">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] -z-10"></div>

        <span className="px-5 py-2 rounded-full border border-cyan-400/20 bg-slate-900/50 text-cyan-300 text-sm font-semibold mb-8 backdrop-blur-sm">
          {t('hero.badge')}
        </span>
        
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-white mt-4">
          {t('hero.title_part1')} <br />
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            {t('hero.title_part2')}
          </span>
        </h1>
        
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-medium mx-auto">
          {t('hero.description')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 rounded-xl bg-cyan-500 text-slate-950 font-bold text-lg shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-105 transition-transform">
            {t('hero.start_button')}
          </button>
          <button className="px-8 py-4 rounded-xl bg-slate-900/50 backdrop-blur-md border border-white/10 text-white font-bold text-lg hover:border-cyan-500/50 transition-colors">
            {t('hero.explore_button')}
          </button>
        </div>
      </main>

      {/* قسم الخدمات (Bento Grid) */}
      <section id="services" className="w-full max-w-7xl mx-auto px-6 py-16 relative z-10">
        
        <div className="text-start md:text-right mb-12 rtl:md:text-right ltr:md:text-left rtl:text-right ltr:text-left">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {t('services.header_part1')} <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">{t('services.header_part2')}</span>
          </h2>
          <p className="text-slate-400 text-lg">{t('services.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          
          {/* البطاقة 1 (ERP) */}
          <div className="md:col-span-2 bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-indigo-500/50 transition-all duration-500 text-start rtl:text-right ltr:text-left">
            <div className="absolute -top-24 -right-24 rtl:-right-24 ltr:-left-24 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <h3 className="text-3xl font-bold text-white mb-4 relative z-10">{t('services.erp.title')}</h3>
            <p className="text-slate-400 max-w-md relative z-10 text-lg leading-relaxed">
              {t('services.erp.desc')}
            </p>
            <div className="absolute bottom-8 left-8 rtl:left-8 ltr:right-8 w-12 h-12 rounded-full border border-indigo-400/30 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 rtl:-rotate-45 ltr:rotate-45"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </div>
          </div>

          {/* البطاقة 2 (الذكاء الاصطناعي) */}
          <div className="md:col-span-1 bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-500 flex flex-col justify-between text-start rtl:text-right ltr:text-left">
            <div className="absolute -top-24 -right-24 rtl:-right-24 ltr:-left-24 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{t('services.ai.title')}</h3>
              <p className="text-slate-400 relative z-10">{t('services.ai.desc')}</p>
            </div>
            <div className="w-12 h-12 rounded-full border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300 self-end rtl:self-end ltr:self-start">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 rtl:-rotate-45 ltr:rotate-45"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </div>
          </div>

          {/* البطاقة 3 (تطبيقات الجوال) */}
          <div className="md:col-span-1 bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-blue-500/50 transition-all duration-500 flex flex-col justify-between text-start rtl:text-right ltr:text-left">
            <div className="absolute -top-24 -right-24 rtl:-right-24 ltr:-left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{t('services.mobile.title')}</h3>
              <p className="text-slate-400 relative z-10">{t('services.mobile.desc')}</p>
            </div>
            <div className="w-12 h-12 rounded-full border border-blue-400/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 self-end rtl:self-end ltr:self-start">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 rtl:-rotate-45 ltr:rotate-45"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </div>
          </div>

          {/* البطاقة 4 (تطوير الويب والسحابة) */}
          <div className="md:col-span-2 bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-purple-500/50 transition-all duration-500 text-start rtl:text-right ltr:text-left">
            <div className="absolute -top-24 -right-24 rtl:-right-24 ltr:-left-24 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <h3 className="text-3xl font-bold text-white mb-4 relative z-10">{t('services.web.title')}</h3>
            <p className="text-slate-400 max-w-md relative z-10 text-lg leading-relaxed">
              {t('services.web.desc')}
            </p>
            <div className="absolute bottom-8 left-8 rtl:left-8 ltr:right-8 w-12 h-12 rounded-full border border-purple-400/30 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 rtl:-rotate-45 ltr:rotate-45">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}