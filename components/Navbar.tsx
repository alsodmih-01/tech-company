"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '../i18n/routing';

export default function Navbar() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // دالة ذكية للتبديل بين اللغتين مع الحفاظ على نفس الصفحة
  const toggleLanguage = () => {
    const nextLocale = locale === 'ar' ? 'en' : 'ar';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <nav className="w-full border-b border-white/5 bg-slate-950/80 backdrop-blur-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* الشعار */}
        <div className="text-2xl font-black text-white">
          نظم <span className="text-cyan-400">تك</span>
        </div>

        {/* زر الترجمة الفخم */}
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-5 py-2 rounded-full border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 text-slate-300 font-semibold bg-slate-900/50"
        >
          {/* أيقونة الترجمة */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.24.035 3.32.094m-3.32-.094V3m0 2.621c.84.025 1.67.062 2.49.11M14.25 10.5a48.243 48.243 0 0 1-5.11 4.5m-3.11 1.77A48.069 48.069 0 0 1 3 13.5m10.87-3a48.18 48.18 0 0 1-5.11-4.5" />
          </svg>
          
          {/* النص يتغير بناءً على اللغة الحالية */}
          {locale === 'ar' ? 'English' : 'العربية'}
        </button>
      </div>
    </nav>
  );
}