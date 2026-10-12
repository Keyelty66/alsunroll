export type Product = {
  slug: string;
  /** اطلاعات کارت در لیست محصولات صفحه اصلی */
  card: {
    title: string;
    subtitle: string;
    image: string;
    alt: string;
    size: [number, number];
  };
  seo: { title: string; description: string };
  badge: string;
  h1: string;
  breadcrumb: string;
  image: string;
  imageAlt: string;
  imageSize: [number, number];
  description: string;
  highlights: { title: string; text: string }[];
  specsTitle: string;
  /** ردیف‌های جدول مشخصات فنی: [عنوان، مقدار] */
  specs?: string[][];
  /** متن جایگزین وقتی جدول مشخصات ندارد */
  note?: string;
};
