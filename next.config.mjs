/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // آدرس‌های قدیمی سایت (.html) را به آدرس‌های جدید منتقل می‌کند تا سئو و لینک‌های قبلی از بین نرود
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/products/:slug([\\w-]+).html', destination: '/products/:slug', permanent: true },
    ];
  },
};

export default nextConfig;
