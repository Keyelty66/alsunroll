import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';

function WhiteLogo() {
  return (
    <Image
      src="/images/alsun-logo-white.png"
      alt="آلسان"
      width={1328}
      height={658}
      className="footer-logo-img"
    />
  );
}

/** فوتر کامل صفحه اصلی */
export function HomeFooter() {
  return (
    <footer className="footer">
      {/* CTA Banner */}
      <div className="footer-cta">
        <div className="container footer-cta-inner">
          <div className="footer-cta-text">
            برای پروژه‌تان به تجهیزات کرکره برقی نیاز دارید؟
            <p>محصولات را بررسی کنید و درخواست خود را برای آلسان ارسال کنید.</p>
          </div>
          <Link href="/#contact" className="btn btn-primary">
            تماس با ما
            <span>←</span>
          </Link>
        </div>
      </div>

      <div className="container footer-container">
        <div className="footer-col footer-about">
          <WhiteLogo />
          <p>آلسان؛ مجموعه‌ای برای تأمین تیغه‌های آلومینیومی و تجهیزات کرکره برقی.</p>
          <div className="footer-socials">
            <a href="#" aria-label="اینستاگرام">◎</a>
            <a href="#" aria-label="تلگرام">✈</a>
            <a href="#" aria-label="لینکدین">in</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>لینک‌های سریع</h4>
          <ul>
            <li><Link href="/#hero">خانه</Link></li>
            <li><Link href="/#about">درباره ما</Link></li>
            <li><Link href="/#services">خدمات</Link></li>
            <li><Link href="/#products">محصولات</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>خدمات</h4>
          <ul>
            <li><a href="#">مشاوره تخصصی</a></li>
            <li><a href="#">طراحی و اجرا</a></li>
            <li><a href="#">پشتیبانی و نگهداری</a></li>
            <li><a href="#">تضمین کیفیت</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>تماس با ما</h4>
          <ul className="footer-contact">
            <li><a href={`tel:${site.phone}`} dir="ltr">{site.phoneDisplay}</a></li>
            <li>{site.address}</li>
            <li>پاسخ‌گویی به درخواست‌های خرید و همکاری</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>تمامی حقوق این وب‌سایت متعلق به آلسان است © ۱۴۰۵</span>
          <span className="footer-bottom-links">
            <a href="#">حریم خصوصی</a>
            <a href="#">قوانین و مقررات</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

/** فوتر ساده صفحات محصول */
export function ProductFooter() {
  return (
    <footer className="footer product-footer">
      <div className="container footer-container">
        <div className="footer-col footer-about">
          <WhiteLogo />
          <p>آلسان؛ مجموعه‌ای برای تأمین تیغه‌های آلومینیومی و تجهیزات کرکره برقی.</p>
        </div>

        <div className="footer-col">
          <h4>لینک‌های سریع</h4>
          <ul>
            <li><Link href="/">خانه</Link></li>
            <li><Link href="/#about">درباره ما</Link></li>
            <li><Link href="/#services">خدمات</Link></li>
            <li><Link href="/#products">محصولات</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>محصولات</h4>
          <ul>
            <li><Link href="/#products">تیغه‌های آلومینیومی</Link></li>
            <li><Link href="/#products">موتور و تجهیزات</Link></li>
            <li><Link href="/#products">قطعات جانبی</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>ارتباط با آلسان</h4>
          <ul className="footer-contact">
            <li><a href={`tel:${site.phone}`} dir="ltr">{site.phoneDisplay}</a></li>
            <li>{site.address}</li>
          </ul>
          <Link href="/#contact" className="footer-product-link">
            درخواست استعلام قیمت ←
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>تمامی حقوق این وب‌سایت متعلق به آلسان است © ۱۴۰۵</span>
          <span className="footer-bottom-links">
            <Link href="/">صفحه اصلی</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
