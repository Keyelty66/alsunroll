'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const NAV = [
  { id: 'hero', label: 'خانه', href: '/' },
  { id: 'about', label: 'درباره ما', href: '/#about' },
  { id: 'services', label: 'خدمات', href: '/#services' },
  { id: 'products', label: 'محصولات', href: '/#products' },
  { id: 'contact', label: 'تماس با ما', href: '/#contact' },
] as const;

type Props = { variant?: 'home' | 'product' };

export default function Header({ variant = 'home' }: Props) {
  const isProduct = variant === 'product';
  const [open, setOpen] = useState(false);
  // در صفحه محصول، «محصولات» همیشه فعال است؛ در صفحه اصلی بر اساس اسکرول تغییر می‌کند
  const [active, setActive] = useState<string>(isProduct ? 'products' : 'hero');

  // هایلایت شدن لینک منو بر اساس سکشنی که در دید کاربر است (فقط صفحه اصلی)
  useEffect(() => {
    if (isProduct) return;
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isProduct]);

  const logo = (
    <Image
      src="/images/alsun-logo.png"
      alt="آلسان"
      width={1328}
      height={658}
      className="logo-img"
      priority
    />
  );

  return (
    <header className={isProduct ? 'header product-header' : 'header'}>
      <div className="container header-container">
        {isProduct ? (
          <Link href="/" className="product-site-logo" aria-label="آلسان">
            {logo}
          </Link>
        ) : (
          logo
        )}

        <nav className={open ? 'nav active' : 'nav'} aria-label="ناوبری اصلی">
          {NAV.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={active === item.id ? 'nav-link active' : 'nav-link'}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {isProduct && (
          <Link href="/#contact" className="product-header-cta">
            استعلام قیمت
          </Link>
        )}

        <button
          type="button"
          className="menu-btn"
          id="menuBtn"
          aria-label="باز کردن منو"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}
