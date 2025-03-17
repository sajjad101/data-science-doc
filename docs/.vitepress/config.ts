import { defineConfig } from 'vitepress'


export default defineConfig({
    title: 'Mes documents </>',
    description: 'بهترین مستندات فارسی با VitePress',
    themeConfig: {
        sidebar: [
            {
              text: 'Introduction',
              collapsible: false, // امکان جمع و باز شدن دسته
              items: [
                { text: 'Plan général', link: '/index' },
                // { text: 'نصب و راه‌اندازی', link: '/guide/installation' }
              ]
            },
            // {
            //   text: 'هوش مصنوعی در صنعت', // دسته بعدی
            //   collapsible: true,
            //   items: [
            //     { text: 'تحلیل پیش‌بینی‌کننده', link: '/ai/predictive-analytics' },
            //     { text: 'بهینه‌سازی تولید', link: '/ai/ai-driven-manufacturing' },
            //     { text: 'سیستم پیشنهاد‌دهنده', link: '/ai/recommendation-systems' },
            //     { text: 'پردازش زبان طبیعی', link: '/ai/nlp' },
            //     { text: 'تحلیل بازار', link: '/ai/market-analysis' }
            //   ]
            // },
            // {
            //   text: 'مدیریت و تصمیم‌گیری', // یک دسته دیگر
            //   collapsible: true,
            //   items: [
            //     { text: 'سیستم‌های مدیریت هوشمند', link: '/management/smart-systems' },
            //     { text: 'اتخاذ تصمیمات هوشمند', link: '/management/decision-making' }
            //   ]
            // }
          ]
      }
})
