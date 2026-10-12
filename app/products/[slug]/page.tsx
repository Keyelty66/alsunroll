import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import { ProductFooter } from '@/components/Footer';
import { products } from '@/data/products';
import { site } from '@/lib/site';

type Params = { slug: string };

// فقط محصولاتی که در data/products.ts تعریف شده‌اند؛ بقیه 404 می‌شوند
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: { absolute: product.seo.title },
    description: product.seo.description,
    robots: { index: true, follow: true },
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      type: 'website',
      title: product.seo.title,
      description: product.seo.description,
      url: `/products/${product.slug}`,
      images: [`/images/${product.image}`],
      locale: 'fa_IR',
      siteName: site.name,
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <>
      <Header variant="product" />

      <main className="product-detail">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">خانه</Link>
            <span>/</span>
            <Link href="/#products">محصولات</Link>
            <span>/</span>
            <span>{product.breadcrumb}</span>
          </div>

          <div className="product-detail-grid">
            <div className="product-detail-image">
              <Image
                src={`/images/${product.image}`}
                alt={product.imageAlt}
                width={product.imageSize[0]}
                height={product.imageSize[1]}
                sizes="(max-width: 900px) 92vw, 600px"
                priority
              />
            </div>

            <div className="product-detail-info">
              <span className="section-badge">{product.badge}</span>
              <h1>{product.h1}</h1>
              <p>{product.description}</p>

              <div className="product-detail-highlights">
                {product.highlights.map((h) => (
                  <div className="product-highlight" key={h.title}>
                    <strong>{h.title}</strong>
                    <span>{h.text}</span>
                  </div>
                ))}
              </div>

              <Link href="/#contact" className="btn btn-primary">
                درخواست استعلام قیمت
                <span>←</span>
              </Link>
            </div>
          </div>

          <div className="specs-box">
            <h2>{product.specsTitle}</h2>
            {product.specs ? (
              <table className="specs-table">
                <tbody>
                  {product.specs.map(([label, value]) => (
                    <tr key={label}>
                      <td>{label}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="product-note">{product.note}</p>
            )}
          </div>
        </div>
      </main>

      <ProductFooter />
    </>
  );
}
