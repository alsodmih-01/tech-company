import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
```[cite: 3]

---

### 2. ملف `layout.tsx` النهائي
هذا هو الكود المحدث والمنظم لملف التخطيط الأساسي مع دعم اللغات واتجاه الصفحة (`rtl` / `ltr`)[cite: 2]:

```typescript
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import Navbar from "../../components/Navbar";

const cairo = Cairo({ 
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "600", "700", "900"]
});

export const metadata: Metadata = {
  title: "نظم تك | للحلول التكنولوجية والرقمية",
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={direction} className="scroll-smooth">
      <body className={`${cairo.className} bg-slate-950 text-white antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```[cite: 2]

---

### ⚠️ تنبيه مهم جداً (مفتاح حل مشكلة التصميم):
تحقق من ملف **`app/globals.css`** وتأكد أنه يحتوي في السطور الأولى على استدعاءات Tailwind الأساسية بحسب إصدار مشروعك:

إذا كنت تستخدم Tailwind v3، تأكد من وجود هذه الأسطر في أعلى `globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;