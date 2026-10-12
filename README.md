# آلسان (ALSUN) — Next.js

نسخهٔ Next.js (App Router + TypeScript) سایت آلسان. ظاهر سایت همان `style.css` قبلی است و تغییر نکرده.

## اجرا

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

نیازمندی: Node.js 18.18 یا بالاتر.

## ساختار

```
app/
  layout.tsx              html (fa/rtl)، فونت پیدا، تنظیمات پایهٔ متادیتا
  page.tsx                صفحهٔ اصلی (Hero، درباره، خدمات، محصولات، تماس) + JSON-LD
  products/[slug]/page.tsx  قالب مشترک ۱۴ صفحهٔ محصول (استاتیک)
  sitemap.ts, robots.ts   جایگزین sitemap.xml و robots.txt
  not-found.tsx           صفحهٔ ۴۰۴
  globals.css             همان style.css قبلی
components/               Header (منوی موبایل + اسکرول‌اسپای)، Footer، ContactForm
data/products.ts          اطلاعات همهٔ محصولات
lib/site.ts               تلفن، آدرس، دامنه، آدرس فرم
public/images/            تصاویر
```

## افزودن / ویرایش محصول

فقط یک آیتم در `data/products.ts` اضافه یا ویرایش کنید و تصویرش را در `public/images/` بگذارید.
صفحهٔ محصول، کارت صفحهٔ اصلی، sitemap و متادیتا خودکار ساخته می‌شوند.
(اگر `specs` نداشته باشد، به‌جای جدول، `note` نمایش داده می‌شود.)

## نکته‌ها

- آدرس صفحات محصول از `/products/tigheh-80.html` به `/products/tigheh-80` تغییر کرده؛ آدرس‌های قدیمی در `next.config.mjs` با ریدایرکت ۳۰۱ به آدرس جدید می‌روند.
- نام چند تصویر اصلاح شد (حذف پسوند تکراری مثل `.png.png`) و نام دو تصویر تاج که جابه‌جا بود درست شد: `crown-octagon.png` (هشت‌ضلعی) و `crown-round.png` (گرد).
- فرم تماس مثل قبل به Formspree ارسال می‌شود (`lib/site.ts`).
