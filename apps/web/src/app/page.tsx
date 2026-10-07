'use client';

import { useMemo, useState } from 'react';

const services = [
  {
    id: 'restaurant',
    title: { kz: 'Restoran', qq: 'Restoran', ru: 'Ресторан' },
    description: {
      kz: 'Taza ta’maq penen üйге jetkerme',
      qq: 'Jańa aşlar men úyge jetkeriw',
      ru: 'Свежая еда и доставка домой',
    },
    action: { kz: 'Sıpatta', qq: 'Sarıw', ru: 'Заказать' },
  },
  {
    id: 'cafe',
    title: { kz: 'Kafe', qq: 'Kafe', ru: 'Кафе' },
    description: {
      kz: 'Qahwa, desert penen tez qostan',
      qq: 'Qahwa, desertler men tez soraw',
      ru: 'Кофе, десерты и быстрые перекусы',
    },
    action: { kz: 'Kafeni qaraw', qq: 'Kafeni kóriw', ru: 'Открыть кафе' },
  },
  {
    id: 'taxi',
    title: { kz: 'Taksi', qq: 'Taksi', ru: 'Такси' },
    description: {
      kz: 'Jıldam sürý ushin',
      qq: 'Jıldam jetiw ushın',
      ru: 'Быстрые поездки по городу',
    },
    action: { kz: 'Sürme', qq: 'Taksi bron', ru: 'Заказать такси' },
  },
];

const languageOptions = [
  { code: 'kz', label: 'Қазақша' },
  { code: 'qq', label: 'Qaraqalpaqsha' },
  { code: 'ru', label: 'Русский' },
];

const text = {
  kz: {
    brand: 'Tamga Zakaz',
    nav1: 'Xizmatlar',
    nav2: 'Biz haqımızda',
    nav3: 'Bağlanıs',
    badge: '3 tez 1 platforma',
    heroTitle: 'Aş, qahwa hám qaladağı sürý – birde bir appte.',
    heroDesc:
      'Tamga Zakaz restoran, kafe hám taksi xizmatların birlestirip, tez jaqynlaşa beretugın köp tilde platforma jaratadı.',
    ctaPrimary: 'Qazir sipat',
    ctaSecondary: 'Taksi bron',
    statsTitle1: 'Aylıq buyurtpa',
    statsTitle2: 'Restoran hám kafe',
    statsTitle3: '24/7 taksi',
    catalog: 'Katalog',
    cart: 'Savat',
    orders: 'Buyurtpalar',
  },
  qq: {
    brand: 'Tamga Zakaz',
    nav1: 'Xizmatlar',
    nav2: 'Biz barısımızda',
    nav3: 'Baylanıslı',
    badge: '3te 1 platforma',
    heroTitle: 'Aş, qahwa hám shıgaydağı jol – bir appta.',
    heroDesc:
      'Tamga Zakaz restoran, kafe hám taksi xizmatların birlestirip, tez jaqınlawğa tayarlangan köp tilde platforma.',
    ctaPrimary: 'Házir buyır',
    ctaSecondary: 'Taksi bron',
    statsTitle1: 'Aylıq buyırma',
    statsTitle2: 'Restoran hám kafe',
    statsTitle3: '24/7 taksi',
    catalog: 'Katalog',
    cart: 'Savat',
    orders: 'Buyırmalar',
  },
  ru: {
    brand: 'Tamga Zakaz',
    nav1: 'Услуги',
    nav2: 'О нас',
    nav3: 'Контакты',
    badge: '3 в 1 сервис',
    heroTitle: 'Еда, кофе и поездки — в одном приложении.',
    heroDesc:
      'Tamga Zakaz объединяет рестораны, кафе и такси в одной многоязычной платформе для быстрых заказов и удобных поездок.',
    ctaPrimary: 'Заказать сейчас',
    ctaSecondary: 'Заказать такси',
    statsTitle1: 'Заказов в месяц',
    statsTitle2: 'Ресторанов и кафе',
    statsTitle3: 'Такси 24/7',
    catalog: 'Каталог',
    cart: 'Корзина',
    orders: 'Заказы',
  },
};

export default function HomePage() {
  const [lang, setLang] = useState<'kz' | 'qq' | 'ru'>('kz');

  const current = text[lang];

  const stats = useMemo(
    () => [
      { value: '10k+', label: current.statsTitle1 },
      { value: '120+', label: current.statsTitle2 },
      { value: '24/7', label: current.statsTitle3 },
    ],
    [current]
  );

  return (
    <main className="page-shell">
      <nav className="topbar">
        <div className="brand">{current.brand}</div>
        <div className="nav-links">
          <a href="#services">{current.nav1}</a>
          <a href="#about">{current.nav2}</a>
          <a href="#contact">{current.nav3}</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">{current.badge}</span>
          <h1>{current.heroTitle}</h1>
          <p>{current.heroDesc}</p>

          <div className="cta-row">
            <button className="primary">{current.ctaPrimary}</button>
            <button className="secondary">{current.ctaSecondary}</button>
          </div>

          <div className="language-row">
            {languageOptions.map((option) => (
              <button
                key={option.code}
                type="button"
                className={lang === option.code ? 'lang-pill active' : 'lang-pill'}
                onClick={() => setLang(option.code as 'kz' | 'qq' | 'ru')}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="services">
        {services.map((service) => (
          <article key={service.id} className="service-card">
            <span className="mini-label">{service.title[lang]}</span>
            <h2>{service.title[lang]}</h2>
            <p>{service.description[lang]}</p>
            <button type="button">{service.action[lang]}</button>
          </article>
        ))}
      </section>

      <section className="quick-links">
        <a href="/catalog" className="quick-panel">{current.catalog}</a>
        <a href="/cart" className="quick-panel">{current.cart}</a>
        <a href="/orders" className="quick-panel">{current.orders}</a>
      </section>

      <section id="about" className="stats">
        {stats.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>
    </main>
  );
}
