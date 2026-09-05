import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // التأكد من أن اللغة المطلوبة مدعومة، وإلا سيتم استخدام اللغة الافتراضية
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    // جلب ملفات الترجمة من مجلد messages
    messages: (await import(`../messages/${locale}.json`)).default
  };
});