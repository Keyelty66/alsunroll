import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import { HomeFooter } from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { products } from '@/data/products';
import { site } from '@/lib/site';

const title = 'آلسان | تولیدکننده تیغه و تجهیزات کرکره برقی آلومینیومی';
const description =
  'آلسان، عرضه‌کننده تیغه‌های آلومینیومی و تجهیزات کرکره برقی؛ مشاهده محصولات و دریافت مشاوره برای انتخاب تجهیزات مناسب.';
const shortTitle = 'آلسان | تیغه و تجهیزات کرکره برقی آلومینیومی';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['آلسان', 'ALSUN', 'تیغه آلومینیومی', 'کرکره برقی', 'موتور ساید', 'موتور تیوبلار', 'ریل آلومینیومی'],
  authors: [{ name: 'آلسان' }],
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: shortTitle,
    description: 'تیغه‌های آلومینیومی و تجهیزات کرکره برقی آلسان؛ انتخابی دقیق برای پروژه‌های ساختمانی و تجاری.',
    images: [site.logo],
    url: '/',
    locale: 'fa_IR',
    siteName: site.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: shortTitle,
    description: 'تیغه‌های آلومینیومی و تجهیزات کرکره برقی آلسان.',
    images: [site.logo],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.url,
  logo: `${site.url}${site.logo}`,
  description: site.description,
  address: { '@type': 'PostalAddress', streetAddress: site.address, addressCountry: 'IR' },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: site.phone,
    contactType: 'customer service',
    areaServed: 'IR',
    availableLanguage: 'Persian',
  },
};

const features = [
  { title: 'تنوع محصول', text: 'تیغه، موتور و قطعات جانبی در یک مجموعه' },
  { title: 'انتخاب فنی', text: 'کمک به انتخاب قطعه متناسب با پروژه' },
  { title: 'تمرکز بر کیفیت', text: 'ارائه محصولات با مشخصات فنی شفاف' },
];

const services = [
  { icon: '⚙', title: 'مشاوره انتخاب محصول', text: 'راهنمایی برای انتخاب تیغه، موتور و قطعات متناسب با نوع پروژه.' },
  { icon: '◈', title: 'سبد کامل تجهیزات', text: 'تیغه‌های آلومینیومی، موتورها و قطعات جانبی در یک مجموعه.' },
  { icon: '◎', title: 'تأمین قطعات', text: 'قطعات جانبی موردنیاز برای نصب و راه‌اندازی کرکره برقی.' },
  { icon: '✦', title: 'مشخصات فنی شفاف', text: 'اطلاعات محصول به‌صورت منظم در صفحات اختصاصی محصولات ارائه شده است.' },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      <Header variant="home" />

      {/* Hero */}
      <section className="hero" id="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-badge">تیغه و تجهیزات کرکره برقی آلومینیومی</span>

            <h1>
              راهکارهای دقیق <span>کرکره برقی</span> برای پروژه شما
            </h1>

            <p>
              مجموعه‌ای از تیغه‌های آلومینیومی و تجهیزات کرکره برقی برای پروژه‌های ساختمانی، فروشگاهی و صنعتی؛ با
              تمرکز بر کیفیت، دوام و انتخاب درست قطعات.
            </p>

            <div className="hero-buttons">
              <Link href="/#products" className="btn btn-primary">
                مشاهده محصولات
                <span>←</span>
              </Link>
              <Link href="/#about" className="btn btn-secondary">
                درباره شرکت
              </Link>
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-image-box">
              <Image
                src="/images/hero-image.png"
                alt="تیغه آلومینیومی آلسان"
                width={1254}
                height={1254}
                sizes="(max-width: 900px) 90vw, 560px"
                priority
              />
            </div>

            <div className="hero-card">
              <strong>+۱۰</strong>
              <span>سال سابقه</span>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div className="container about-container">
          <div className="about-image">
            <div className="about-image-box">
              <Image
                src="/images/about.jpg"
                alt="درباره شرکت"
                width={853}
                height={853}
                sizes="(max-width: 900px) 90vw, 560px"
              />
            </div>

            <div className="about-card">
              <strong>+{products.length.toLocaleString('fa-IR')}</strong>
              <span>محصول در کاتالوگ</span>
            </div>
          </div>

          <div className="about-content">
            <span className="section-badge">درباره ما</span>

            <h2>
              تخصص در <span>تجهیزات کرکره برقی</span> و قطعات جانبی
            </h2>

            <p>
              آلسان مجموعه‌ای از تیغه‌های آلومینیومی و قطعات موردنیاز کرکره برقی را در یک سبد محصولی یکپارچه ارائه
              می‌کند تا انتخاب و تأمین تجهیزات برای پروژه‌های شما ساده‌تر و دقیق‌تر باشد.
            </p>

            <div className="about-features">
              {features.map((f) => (
                <div className="feature-item" key={f.title}>
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>{f.title}</h4>
                    <p>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">خدمات ما</span>
            <h2>
              خدماتی که <span>ارائه می‌دهیم</span>
            </h2>
            <p>
              از انتخاب محصول تا تأمین تجهیزات موردنیاز، آلسان تلاش می‌کند مسیر تهیه قطعات کرکره برقی را برای شما
              ساده و شفاف کند.
            </p>
          </div>

          <div className="services-grid">
            {services.map((s) => (
              <div className="service-card" key={s.title}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="products" id="products">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">محصولات ما</span>
            <h2>
              محصولاتی که <span>ارائه می‌دهیم</span>
            </h2>
            <p>
              از تیغه‌های آلومینیومی تا موتور و قطعات نصب؛ محصولات را بر اساس نوع کاربرد و نیاز پروژه بررسی کنید.
            </p>
          </div>

          <div className="products-grid">
            {products.map((p) => (
              <Link href={`/products/${p.slug}`} className="product-card" key={p.slug}>
                <div className="product-image">
                  <Image
                    src={`/images/${p.card.image}`}
                    alt={p.card.alt}
                    width={p.card.size[0]}
                    height={p.card.size[1]}
                    sizes="(max-width: 600px) 90vw, (max-width: 1050px) 45vw, 320px"
                  />
                </div>
                <div className="product-info">
                  <h3>{p.card.title}</h3>
                  <p>{p.card.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">تماس با ما</span>
            <h2>
              در ارتباط <span>باشید</span>
            </h2>
            <p>
              برای دریافت اطلاعات محصول یا مطرح کردن درخواست همکاری، پیام خود را ارسال کنید تا با شما در ارتباط
              باشیم.
            </p>
          </div>

          <div className="contact-info">
            <a href={`tel:${site.phone}`} className="contact-info-item" dir="ltr">
              <span className="contact-info-label">تلفن تماس</span>
              <strong>{site.phoneDisplay}</strong>
            </a>
            <div className="contact-info-item">
              <span className="contact-info-label">آدرس</span>
              <strong>{site.address}</strong>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <HomeFooter />
    </>
  );
}
