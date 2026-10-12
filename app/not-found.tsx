import Link from 'next/link';
import Header from '@/components/Header';
import { ProductFooter } from '@/components/Footer';

export const metadata = {
  title: 'صفحه پیدا نشد | آلسان',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Header variant="product" />
      <main className="product-detail">
        <div className="container" style={{ textAlign: 'center', padding: '80px 0' }}>
          <h1>صفحه موردنظر پیدا نشد</h1>
          <p style={{ margin: '16px 0 32px' }}>ممکن است آدرس تغییر کرده یا صفحه حذف شده باشد.</p>
          <Link href="/" className="btn btn-primary">
            بازگشت به صفحه اصلی
            <span>←</span>
          </Link>
        </div>
      </main>
      <ProductFooter />
    </>
  );
}
