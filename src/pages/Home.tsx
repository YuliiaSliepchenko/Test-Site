/**
 * Home.tsx
 * Landing page for a performance marketing agency. Implements hero, services, channels,
 * social marketing, stats, cases, process timeline, contact form, and footer.
 * Uses Tailwind CSS and placeholder images via sider.ai/autoimage.
 */

import { Mail, Phone, ArrowRight, CheckCircle2, Users, TrendingUp, BadgeCheck, ChevronRight } from "lucide-react"
import { useState } from "react"

/** Section wrapper to keep consistent spacing and max width */
function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
}: {
  /** Anchor id for in-page navigation */
  id?: string
  /** Section title */
  title?: string
  /** Optional subtitle under the title */
  subtitle?: string
  /** Section content */
  children: React.ReactNode
  /** Additional class names */
  className?: string
}) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        {title && (
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-white">{title}</h2>
            {subtitle ? (
              <p className="mt-3 text-slate-300">{subtitle}</p>
            ) : null}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

/** Top header with brand, nav and primary CTA */
function Header() {
  const nav = [
    { label: "Послуги", href: "#services" },
    { label: "Канали", href: "#channels" },
    { label: "Кейси", href: "#cases" },
    { label: "Етапи", href: "#process" },
    { label: "Контакти", href: "#contact" },
  ]
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-slate-900/70">
      <div className="container mx-auto max-w-7xl px-4 h-16 md:h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded bg-gradient-to-br from-violet-500 to-emerald-400" />
          <span className="font-semibold tracking-wider text-white">LUDI.DIGITAL</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-slate-300 hover:text-white transition-colors text-sm"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-md bg-white text-slate-900 px-4 py-2 text-sm font-medium hover:bg-slate-200 transition-colors"
        >
          Почати проєкт <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  )
}

/** Hero section with main message, CTAs and partner badges */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900" />
      <div className="container mx-auto max-w-7xl px-4 pt-16 md:pt-24 pb-12 md:pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
              Performance Marketing
              <span className="inline-flex items-center gap-1 text-emerald-300">
                <BadgeCheck className="h-3.5 w-3.5" /> trusted
              </span>
            </div>
            <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-white">
              Розвиваємо продажі через аналітику, креативи та масштабування
            </h1>
            <p className="mt-4 text-slate-300">
              Таргетована, контекстна та медійна реклама. SMM, Influencer та TikTok — усе, що потрібно для зростання у 2025.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-400 text-slate-950 px-5 py-3 font-medium hover:bg-emerald-300 transition-colors"
              >
                Запустити рекламу <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#cases"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 px-5 py-3 text-white hover:bg-white/10 transition-colors"
              >
                Подивитись кейси <ChevronRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-slate-200">
                <img src="https://pub-cdn.sider.ai/u/U0X7H8OYN76/web-coder/68a46a037b28bae4980a1dde/resource/4f12aae5-939e-41fe-a365-76505ad94bc7.jpg" className="object-cover h-4 w-4" />
                Meta Business Partner
              </div>
              <div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-slate-200">
                <img src="https://pub-cdn.sider.ai/u/U0X7H8OYN76/web-coder/68a46a037b28bae4980a1dde/resource/5dac2499-790f-4669-b709-7be09a805360.jpg" className="object-cover h-4 w-4" />
                Google Partner
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 h-72 w-72 rounded-full blur-3xl bg-emerald-400/20" />
            <div className="rounded-xl border border-white/10 overflow-hidden shadow-2xl shadow-emerald-500/10">
              <img
                src="https://pub-cdn.sider.ai/u/U0X7H8OYN76/web-coder/68a46a037b28bae4980a1dde/resource/102d4290-2208-489f-b47a-15c93ff6274f.jpg"
                className="object-cover h-[340px] w-full"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <img src="https://pub-cdn.sider.ai/u/U0X7H8OYN76/web-coder/68a46a037b28bae4980a1dde/resource/d7e30967-4ed3-41ee-bcde-6ac4f6de3a98.jpg" className="object-cover h-24 w-full rounded-lg border border-white/10" />
              <img src="https://pub-cdn.sider.ai/u/U0X7H8OYN76/web-coder/68a46a037b28bae4980a1dde/resource/a0f6e2ce-003c-4909-b0d9-7ac94049b6d8.jpg" className="object-cover h-24 w-full rounded-lg border border-white/10" />
              <img src="https://pub-cdn.sider.ai/u/U0X7H8OYN76/web-coder/68a46a037b28bae4980a1dde/resource/cb102313-2181-4464-a28c-9d4ab4491518.jpg" className="object-cover h-24 w-full rounded-lg border border-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Logos/partners strip */
function Partners() {
  const items = [
    { name: "DAN.IT", src: "https://pub-cdn.sider.ai/u/U0X7H8OYN76/web-coder/68a46a037b28bae4980a1dde/resource/044e4459-65d2-4d8b-a090-c7fdf84323f3.jpg" },
    { name: "FARFI", src: "https://pub-cdn.sider.ai/u/U0X7H8OYN76/web-coder/68a46a037b28bae4980a1dde/resource/2cca3441-80df-48e6-a6b6-7fcb2fb872a3.jpg" },
    { name: "FOODZ", src: "https://pub-cdn.sider.ai/u/U0X7H8OYN76/web-coder/68a46a037b28bae4980a1dde/resource/19f6d4ae-be8e-4069-96ff-1cd527fddfd3.jpg" },
    { name: "GELIUS", src: "https://pub-cdn.sider.ai/u/U0X7H8OYN76/web-coder/68a46a037b28bae4980a1dde/resource/1336359b-3494-4942-9cef-3e1891dcaaaa.jpg" },
    { name: "EDUCATION PLEASE", src: "https://pub-cdn.sider.ai/u/U0X7H8OYN76/web-coder/68a46a037b28bae4980a1dde/resource/dcc9be86-0fbf-442f-bbca-706f27a7c5a7.jpg" },
  ]
  return (
    <Section className="bg-slate-950/40 border-y border-white/10">
      <div className="flex items-center gap-6 overflow-auto no-scrollbar py-2">
        {items.map((item) => (
          <div key={item.name} className="flex items-center gap-3 shrink-0 pr-4">
            <img src={item.src} className="object-cover h-6 w-6 opacity-80" />
            <span className="text-slate-300 text-sm">{item.name}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}

/** Services grid for industries and capabilities */
function Services() {
  const services = [
    { title: "E-commerce", desc: "Магазини, каталоги, мульти-geo", icon: <TrendingUp className="h-5 w-5 text-emerald-300" /> },
    { title: "Mobile App", desc: "Залучення користувачів, ROAS", icon: <TrendingUp className="h-5 w-5 text-emerald-300" /> },
    { title: "Education", desc: "Ліди на курси й марафони", icon: <TrendingUp className="h-5 w-5 text-emerald-300" /> },
    { title: "B2B", desc: "Попит і генерація лідів", icon: <TrendingUp className="h-5 w-5 text-emerald-300" /> },
    { title: "Delivery & Events", desc: "Онлайн-продажі та квитки", icon: <TrendingUp className="h-5 w-5 text-emerald-300" /> },
    { title: "Media & Influencers", desc: "Охоплення та довіра", icon: <TrendingUp className="h-5 w-5 text-emerald-300" /> },
  ]
  return (
    <Section
      id="services"
      title="Послуги та ніші"
      subtitle="Працюємо з бізнесами від стартапів до enterprise — швидко тестуємо гіпотези й масштабуємо, коли бачимо product-market fit."
      className="bg-slate-900"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s) => (
          <div key={s.title} className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition-colors">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-emerald-400/10 flex items-center justify-center">{s.icon}</div>
              <h3 className="text-white font-medium">{s.title}</h3>
            </div>
            <p className="mt-2 text-slate-300 text-sm">{s.desc}</p>
            <div className="mt-4 inline-flex items-center gap-2 text-emerald-300 text-sm">
              Дізнатись більше <ChevronRight className="h-4 w-4" />
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

/** Advertising channels section */
function Channels() {
  const channels = [
    {
      title: "Таргетована реклама",
      desc: "Соцмережі: Facebook, Instagram, TikTok. Будуємо воронку, аудиторії, креативи.",
    },
    {
      title: "Контекстна реклама",
      desc: "Google Search/Shopping/YouTube. Висока намірність і швидке масштабування.",
    },
    {
      title: "Медійна реклама",
      desc: "Охоплення, частота, брендинг. Працюємо з CPM, CPV та частотними обмеженнями.",
    },
  ]
  return (
    <Section
      id="channels"
      title="Канали просування"
      subtitle="Підбираємо мікс каналів під цілі бізнесу і поточний етап зростання."
      className="bg-slate-950/40 border-y border-white/10"
    >
      <div className="grid md:grid-cols-3 gap-5">
        {channels.map((c) => (
          <div key={c.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-300 mt-0.5" />
              <div>
                <h3 className="text-white font-medium">{c.title}</h3>
                <p className="text-slate-300 text-sm mt-1">{c.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-5">
        <StatCard value="13+" label="активних кейсів/місяць" />
        <StatCard value="$0.3M" label="керований бюджет за 2024" />
        <StatCard value="9325+" label="лідів з рекламних кампаній" />
      </div>
    </Section>
  )
}

/** Single stat card */
function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 flex items-center gap-4">
      <div className="h-10 w-10 rounded-lg bg-emerald-400/10 flex items-center justify-center">
        <Users className="h-5 w-5 text-emerald-300" />
      </div>
      <div>
        <div className="text-white text-xl font-semibold">{value}</div>
        <div className="text-slate-300 text-sm">{label}</div>
      </div>
    </div>
  )
}

/** Social marketing section */
function Social() {
  const items = [
    {
      title: "SMM",
      desc: "Контент-стратегія, креативи, ком'юніті-менеджмент — для зростання органіки і довіри.",
      img: "https://pub-cdn.sider.ai/u/U0X7H8OYN76/web-coder/68a46a037b28bae4980a1dde/resource/40a16c00-cf28-4966-bd18-f4fe43697744.jpg",
    },
    {
      title: "Influencer Marketing",
      desc: "Підбір блогерів, UGC, масштабовані інтеграції, що впливають на продажі.",
      img: "https://pub-cdn.sider.ai/u/U0X7H8OYN76/web-coder/68a46a037b28bae4980a1dde/resource/cfd59bb5-9916-4f28-bea3-157fc243b56f.jpg",
    },
    {
      title: "TikTok",
      desc: "Короткі відео, тестування ідей, Spark Ads, робота з трендами та частотою.",
      img: "https://pub-cdn.sider.ai/u/U0X7H8OYN76/web-coder/68a46a037b28bae4980a1dde/resource/e6e15cd8-3913-43da-98fa-0fd5fa145a88.jpg",
    },
  ]
  return (
    <Section
      title="Соцмережі, інфлюенс і TikTok"
      subtitle="Підвищуємо довіру до бренду та залучаємо нову органічну аудиторію."
      className="bg-slate-900"
    >
      <div className="grid md:grid-cols-3 gap-5">
        {items.map((it) => (
          <div key={it.title} className="rounded-xl overflow-hidden border border-white/10 bg-white/[0.03]">
            <img src={it.img} className="object-cover h-40 w-full" />
            <div className="p-5">
              <h3 className="text-white font-medium">{it.title}</h3>
              <p className="text-slate-300 text-sm mt-1">{it.desc}</p>
              <div className="mt-3 inline-flex items-center gap-2 text-emerald-300 text-sm">
                Обговорити проєкт <ChevronRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

/** Case study card */
function CaseCard({
  title,
  result,
  image,
  tags,
}: {
  /** Case title or brand */
  title: string
  /** Short result line */
  result: string
  /** Image url */
  image: string
  /** Tag labels */
  tags: string[]
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden">
      <img src={image} className="object-cover h-44 w-full" />
      <div className="p-5">
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs rounded border border-white/10 bg-white/5 px-2 py-0.5 text-slate-300">
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-white font-medium mt-3">{title}</h3>
        <p className="text-emerald-300 text-sm mt-1">{result}</p>
        <div className="mt-3 inline-flex items-center gap-2 text-slate-300 text-sm">
          Деталі кейсу <ChevronRight className="h-4 w-4" />
        </div>
      </div>
    </div>
  )
}

/** Cases grid */
function Cases() {
  const cases = [
    {
      title: "GELIUS — сезонні просідання і відновлення продажів",
      result: "x1.6 продажів завдяки креативам і ремаркетингу",
      image: "https://pub-cdn.sider.ai/u/U0X7H8OYN76/web-coder/68a46a037b28bae4980a1dde/resource/03c9b039-b861-4def-bd9f-3ea7bb4ae1c9.jpg",
      tags: ["E-commerce", "Meta Ads", "Remarketing"],
    },
    {
      title: "DAN.IT — стабільний потік лідів на курси",
      result: "-32% CPL після реструктуризації кампаній",
      image: "https://pub-cdn.sider.ai/u/U0X7H8OYN76/web-coder/68a46a037b28bae4980a1dde/resource/30d9f39e-0a9e-4594-95c4-d4371a15bcaa.jpg",
      tags: ["Education", "Google Ads", "YouTube"],
    },
    {
      title: "FOODZ — доставка і повернення покупців",
      result: "LTV+ за рахунок повторних покупок і CRM",
      image: "https://pub-cdn.sider.ai/u/U0X7H8OYN76/web-coder/68a46a037b28bae4980a1dde/resource/6c848c70-22de-4824-b182-f20fc249a159.jpg",
      tags: ["Delivery", "CRM", "Retention"],
    },
  ]
  return (
    <Section
      id="cases"
      title="Кейси"
      subtitle="Оберемо релевантний досвід і покажемо, як переносимо підхід на ваш бізнес."
      className="bg-slate-950/40 border-y border-white/10"
    >
      <div className="grid md:grid-cols-3 gap-5">
        {cases.map((c) => (
          <CaseCard key={c.title} {...c} />
        ))}
      </div>
    </Section>
  )
}

/** Process timeline */
function Process() {
  const steps = [
    {
      title: "Організаційний блок",
      items: ["Підписуємо договір", "Створюємо бриф", "Отримуємо доступи"],
    },
    {
      title: "Підготовка до запуску",
      items: ["Стратегія і план тестів", "Налаштування аналітики", "Виробництво креативів"],
    },
    {
      title: "Запуск і масштабування",
      items: ["Старт кампаній", "Аналіз перших результатів", "Масштабування успішних зв'язок"],
    },
  ]
  return (
    <Section
      id="process"
      title="Етапи роботи"
      subtitle="Прозорий, передбачуваний процес — зі звітністю і контрольними точками."
      className="bg-slate-900"
    >
      <div className="grid md:grid-cols-3 gap-5">
        {steps.map((s, idx) => (
          <div key={s.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-emerald-400/10 flex items-center justify-center">
                <span className="text-emerald-300 font-semibold">{idx + 1}</span>
              </div>
              <h3 className="text-white font-medium">{s.title}</h3>
            </div>
            <ul className="mt-3 space-y-2">
              {s.items.map((it) => (
                <li key={it} className="flex items-start gap-2 text-slate-300 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300 mt-0.5" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

/** Contact form with simple validation and success feedback */
function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")
  const [form, setForm] = useState({ name: "", phone: "", project: "" })

  /** Handle input change */
  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  /** Submit with minimal validation */
  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim()) return alert("Заповніть ім'я та телефон, будь ласка.")
    setStatus("sending")
    // Fake sending
    await new Promise((r) => setTimeout(r, 900))
    setStatus("sent")
  }

  return (
    <Section
      id="contact"
      title="Зв'яжіться з нами"
      subtitle="Будемо раді допомогти. Напишіть кілька деталей — повернемось із пропозицією."
      className="bg-slate-950/40 border-y border-white/10"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-slate-300 mb-1">Ім'я</label>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Ваше ім'я"
                className="w-full rounded-md bg-slate-900 border border-white/10 px-3 py-2 text-white outline-none focus:border-emerald-400/60"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Телефон</label>
              <input
                name="phone"
                value={form.phone}
                onChange={onChange}
                placeholder="+380 XX XXX XX XX"
                className="w-full rounded-md bg-slate-900 border border-white/10 px-3 py-2 text-white outline-none focus:border-emerald-400/60"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Коротко про проєкт</label>
              <textarea
                name="project"
                value={form.project}
                onChange={onChange}
                placeholder="Ніша, ціль, бюджет"
                rows={4}
                className="w-full rounded-md bg-slate-900 border border-white/10 px-3 py-2 text-white outline-none focus:border-emerald-400/60"
              />
            </div>
            <button
              disabled={status !== "idle"}
              className="inline-flex items-center gap-2 rounded-md bg-emerald-400 text-slate-950 px-5 py-2.5 font-medium hover:bg-emerald-300 transition-colors disabled:opacity-60"
            >
              {status === "idle" && <>Відправити заявку <ArrowRight className="h-4 w-4" /></>}
              {status === "sending" && "Відправка..."}
              {status === "sent" && "Надіслано ✓"}
            </button>
          </form>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-white font-medium text-lg">Контакти</h3>
          <p className="text-slate-300 text-sm mt-2">
            Працюємо офлайн/онлайн. Зустрічі — за домовленістю.
          </p>

          <div className="mt-4 space-y-3">
            <a href="mailto:info@ludi.digital" className="flex items-center gap-3 text-slate-200 hover:text-white">
              <Mail className="h-5 w-5 text-emerald-300" />
              info@ludi.digital
            </a>
            <a href="tel:+380000000000" className="flex items-center gap-3 text-slate-200 hover:text-white">
              <Phone className="h-5 w-5 text-emerald-300" />
              +38 (000) 000 00 00
            </a>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <img src="https://pub-cdn.sider.ai/u/U0X7H8OYN76/web-coder/68a46a037b28bae4980a1dde/resource/e5be304d-4d66-4b2d-8405-c613114b5d99.jpg" className="object-cover h-24 w-full rounded-md border border-white/10" />
            <img src="https://pub-cdn.sider.ai/u/U0X7H8OYN76/web-coder/68a46a037b28bae4980a1dde/resource/19af037a-7de1-4b80-acdf-f9aa43c9e914.jpg" className="object-cover h-24 w-full rounded-md border border-white/10" />
            <img src="https://pub-cdn.sider.ai/u/U0X7H8OYN76/web-coder/68a46a037b28bae4980a1dde/resource/daba6b93-1792-4595-a830-f1ee9fb00fcb.jpg" className="object-cover h-24 w-full rounded-md border border-white/10" />
          </div>
        </div>
      </div>
    </Section>
  )
}

/** Footer with brand and mini nav */
function Footer() {
  return (
    <footer className="bg-slate-950">
      <div className="container mx-auto max-w-7xl px-4 py-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="h-8 w-8 rounded bg-gradient-to-br from-violet-500 to-emerald-400" />
            <div>
              <div className="text-white font-semibold tracking-wider">LUDI.DIGITAL</div>
              <div className="text-slate-400 text-sm">Performance Marketing Agency</div>
            </div>
          </div>
          <div className="text-slate-400 text-sm">
            © {new Date().getFullYear()} LUDI.DIGITAL. Усі права захищено.
          </div>
        </div>
      </div>
    </footer>
  )
}

/** Main home composition */
export default function HomePage() {
  return (
    <div className="min-h-screen scroll-smooth bg-slate-900 text-slate-100">
      <Header />
      <Hero />
      <Partners />
      <Services />
      <Channels />
      <Social />
      <Cases />
      <Process />
      <Contact />
      <Footer />
    </div>
  )
}
