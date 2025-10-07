// src/pages/GreBooksPage.tsx
import React, { useEffect, useRef } from "react";

const GreBooksPage: React.FC = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  // --- Inline CSS (from your styles.css) ---
  const css = `/* ===== Palette ===== */
:root{--page:#EDE6FF;--card:#FFFFFF;--ink:#131126;--muted:#6F6A84;--primary:#5B50E6;--border:#E3DEF7;--shadow:0 10px 28px rgba(91,80,230,.10);--maxw:1180px;--px:clamp(16px,4vw,28px)}
*{box-sizing:border-box}html,body{height:100%}
html{scroll-behavior:smooth}
body{margin:0;font-family:"Noto Sans Bengali",system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;background:var(--page);color:var(--ink);-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}
.wrap{width:min(100%,var(--maxw));margin-inline:auto;padding-inline:var(--px);padding-block:28px 80px}
.grid{display:grid;gap:22px;grid-template-columns:1fr;align-items:start}
@media(min-width:1024px){.grid{grid-template-columns:1.12fr .64fr}}
.grid-left{display:flex;flex-direction:column;gap:22px;min-width:0}
.grid-left>*{width:100%}
.article-card{background:var(--card);border:1px solid var(--border);border-radius:18px;box-shadow:var(--shadow);padding:clamp(16px,2.4vw,22px)}
.crumbs{font-size:14px;color:var(--muted);margin-bottom:8px;word-spacing:2px}
.crumbs a{color:var(--muted);text-decoration:none}
.crumbs a:hover{text-decoration:underline}
.post-title{margin:4px 0 8px;font-weight:800;color:var(--primary);font-size:clamp(26px,4.4vw,44px);line-height:1.15;letter-spacing:-.01em}
.post-meta{display:flex;gap:8px;color:var(--muted);font-size:14px;margin:0 0 12px}
.post-body{color:#241F3A;font-size:clamp(14px,1.8vw,16px);line-height:1.9}
.post-body p{margin:0 0 14px}
.onpage-left{width:100%;background:#fff;border:1px solid var(--border);border-radius:18px;box-shadow:0 10px 28px rgba(91,80,230,.08);padding:18px}
.onpage-left__title{margin:0 0 12px 0;font-weight:800;color:var(--primary);font-size:clamp(20px,2.8vw,28px);display:flex;align-items:center;gap:8px}
.onpage-left__cards{--gap:18px;display:grid;grid-auto-flow:column;gap:var(--gap);grid-auto-columns:calc((100% - var(--gap)) / 2);overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none}
.onpage-left__cards::-webkit-scrollbar{display:none}
@media(max-width:760px){.onpage-left__cards{grid-auto-columns:100%}}
.p-card{scroll-snap-align:start;background:#fff;border:1px solid var(--border);border-radius:14px;box-shadow:0 12px 28px rgba(91,80,230,.10);display:flex;flex-direction:column;overflow:hidden;cursor:pointer;transition:transform .18s ease,box-shadow .25s ease}
.p-card:hover,.p-card:focus-within{transform:translateY(-3px);box-shadow:0 18px 40px rgba(91,80,230,.14)}
.p-card:focus-visible{outline:3px solid rgba(91,80,230,.35);outline-offset:2px;border-radius:16px}
.p-card img{width:100%;height:176px;object-fit:cover;display:block;transition:transform .28s cubic-bezier(.2,.7,.2,1)}
.p-card:hover img,.p-card:focus-within img{transform:scale(1.02)}
.p-card__body{padding:12px 14px 0;flex:1}
.p-card__title{margin:0 0 6px;font:800 16px/1.45 "Noto Sans Bengali",sans-serif;color:#201B39}
.p-card__desc{margin:0;font-size:14px;line-height:1.6;color:#5b5871}
.p-card__foot{display:flex;align-items:center;justify-content:space-between;padding:12px 14px 14px;gap:10px}
.chip{position:relative;overflow:hidden;border:0;background:#F0EDFF;color:var(--primary);font-weight:800;font-size:13px;border-radius:999px;padding:9px 12px;transition:background-color .2s ease,transform .06s ease;display:inline-flex;align-items:center;justify-content:center;text-decoration:none;box-shadow:0 0 0 rgba(0,0,0,0)}
.caret{margin-left:6px;transition:transform .2s ease}
.chip:hover .caret,.chip:focus-visible .caret{transform:rotate(180deg)}
.rating{font-weight:800;font-size:12px;color:#4a3fd6;background:#FAF7FF;border-radius:10px;padding:6px 10px}
.onpage-left__nav{display:flex;gap:12px;margin:12px 0 0 0}
.nav{width:52px;height:52px;border:0;border-radius:999px;display:grid;place-items:center;background:var(--primary);color:#fff;box-shadow:0 12px 28px rgba(91,80,230,.30);cursor:pointer;position:relative;transition:transform .14s ease,box-shadow .22s ease}
.nav:active{transform:translateY(1px)}
.nav:hover{transform:translateY(-2px);box-shadow:0 16px 32px rgba(91,80,230,.36)}
.nav.is-press{transform:scale(.98)}
.side-head{display:flex;align-items:center;justify-content:space-between;padding:0 2px 8px}
.sidebar h2{margin:0;font-weight:800;font-size:clamp(20px,2.6vw,28px);color:#17132E;letter-spacing:-.01em}
.see-all{display:inline-flex;align-items:center;gap:6px;font-weight:800;font-size:14px;color:var(--primary);text-decoration:none}
.see-all:hover{text-decoration:underline}
.side-list{display:grid;gap:14px}
.side-item{display:block;background:transparent;border:0;box-shadow:none;padding:0;text-decoration:none;color:inherit}
.side-item+.side-item{margin-top:14px}
.side-item img{width:100%;height:184px;object-fit:cover;border-radius:12px;display:block}
.side-txt{padding:10px 2px 0}
.side-title{margin:6px 0 6px;font-weight:800;font-size:16px;line-height:1.45;color:#211B3A;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.side-meta{margin:0;color:#776F92;font-size:13px}
@media(prefers-reduced-motion:no-preference){
  [data-reveal]{opacity:0;transform:translateY(12px);transition:opacity .5s cubic-bezier(.2,.7,.2,1),transform .5s cubic-bezier(.2,.7,.2,1);transition-delay:var(--reveal-delay,0ms)}
  [data-reveal].is-visible{opacity:1;transform:none}
  .side-item img{transition:transform .18s ease}
  .side-item:hover img{transform:translateY(-2px)}
}
.chip:hover,.chip:focus-visible{background:var(--primary);color:#fff;transform:translateY(-1px);box-shadow:0 10px 24px rgba(91,80,230,.28);cursor:pointer}
.chip:active{transform:translateY(0);box-shadow:0 6px 16px rgba(91,80,230,.22);transition-duration:.06s}
.chip:focus-visible{outline:2px solid rgba(91,80,230,.45);outline-offset:2px}
.gre-list,.gre-sections,.gre-choose,.faq{background:#fff;border:1px solid var(--border);border-radius:18px;box-shadow:0 10px 28px rgba(91,80,230,.08)}
.gre-list{padding:clamp(16px,2.4vw,22px)}
.gre-list__title{margin:0 0 14px 0;font-weight:800;color:var(--primary);font-size:clamp(22px,3.6vw,38px);letter-spacing:-.01em}
.gre-list__lead{margin:0 0 6px 0;font-size:clamp(14px,1.8vw,16px);color:#241F3A}
.gre-list__ol{list-style:none;padding-left:0;margin:10px 0 14px}
.gre-list__ol li{margin:10px 0 12px;line-height:1.85;color:#241F3A;font-size:clamp(14px,1.8vw,16px)}
.gre-list__ol li strong{font-weight:700;color:#141026}
.gre-list__end{margin:6px 0 0;font-size:clamp(14px,1.8vw,16px);line-height:1.85;color:#241F3A}
.gre-sections{padding:clamp(16px,2.6vw,26px)}
.gre-sections__title{margin:0 0 16px;font-weight:800;color:var(--primary);font-size:clamp(22px,3.8vw,40px);line-height:1.2;letter-spacing:-.01em}
.gre-sections__lead,.gre-sections p{margin:0 0 12px;font-size:clamp(14px,1.8vw,16px);line-height:1.85;color:#211B3A}
.gre-sections__h3{margin:22px 0 10px;font-weight:800;color:var(--primary);font-size:clamp(18px,3.2vw,30px);line-height:1.25}
.gre-sections__ul{margin:0 0 14px 18px;padding-left:14px}
.gre-sections__ul li{margin:6px 0;line-height:1.85;font-size:clamp(14px,1.8vw,16px);color:#211B3A}
.gre-choose{padding:clamp(16px,2.6vw,26px)}
.gre-choose__title{margin:0 0 12px;font-weight:800;color:var(--primary);font-size:clamp(20px,3.4vw,34px);line-height:1.2}
.gre-choose__lead{margin:0 0 10px;font-size:clamp(14px,1.8vw,16px);line-height:1.85;color:#211B3A}
.gre-choose__ul{list-style:none;margin:6px 0 0;padding:0}
.gre-choose__ul li{position:relative;padding-left:30px;margin:10px 0;line-height:1.85;font-size:clamp(14px,1.8vw,16px);color:#211B3A}
.gre-choose__ul .bn-count{position:absolute;left:0;top:0;color:var(--primary-700);font-weight:800}
.next-steps,.info-bank{background:#F0EDFF;border:1px solid var(--border);border-radius:18px;padding:clamp(14px,2.2vw,20px);box-shadow:0 8px 22px rgba(91,80,230,.08)}
.next-steps__title{margin:0 0 12px;font-weight:800;font-size:clamp(18px,2.8vw,24px);color:var(--primary-700)}
.steps-grid{display:grid;gap:16px;grid-template-columns:repeat(3,1fr);align-items:stretch}
@media(max-width:860px){.steps-grid{grid-template-columns:1fr}}
.step-card{background:#fff;border:1px solid var(--border);border-radius:14px;box-shadow:var(--shadow);padding:20px;display:flex;flex-direction:column;gap:10px}
.step-card__title{margin:0;color:#211B3A;font-size:clamp(16px,2.3vw,18px);font-weight:800}
.next-btn{width:max-content;display:inline-flex;align-items:center;gap:6px;color:var(--primary);font-weight:800;text-decoration:none;padding:6px 2px;border-radius:8px;transition:color .2s ease}
.next-btn .arr{transition:transform .2s ease}
.next-btn:hover{color:var(--primary-700)}
.next-btn:hover .arr{transform:translateX(4px)}
.info-bank+.info-bank{margin-top:18px}
.info-title{margin:0 0 12px;font-weight:800;font-size:clamp(18px,2.8vw,24px);color:#2563EB}
.info-grid{background:#fff;border:1px solid var(--border);border-radius:12px;overflow:hidden;display:grid}
.info-grid--ielts{grid-template-columns:repeat(4,1fr)}
.info-grid--gre{grid-template-columns:repeat(3,1fr)}
@media(max-width:1024px){.info-grid--ielts{grid-template-columns:repeat(3,1fr)}}
@media(max-width:760px){.info-grid--ielts{grid-template-columns:repeat(2,1fr)}.info-grid--gre{grid-template-columns:repeat(2,1fr)}}
@media(max-width:520px){.info-grid--ielts,.info-grid--gre{grid-template-columns:1fr}}
.info-link{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 16px;color:#201B39;text-decoration:none;font-weight:700;line-height:1.45;background:#fff;transition:background-color .15s ease;border-top:1px solid var(--border);border-left:1px solid var(--border)}
.info-link::before{content:"";position:absolute;left:0;top:0;bottom:0;width:0;background:linear-gradient(180deg,rgba(91,80,230,.28),rgba(91,80,230,.18));transition:width .22s ease}
.info-link:hover::before{width:6px}
.info-grid>.info-link:nth-child(-n+4){border-top:0}
.info-grid--gre>.info-link:nth-child(-n+3){border-top:0}
.info-grid>.info-link:nth-child(4n+1){border-left:0}
.info-grid--gre>.info-link:nth-child(3n+1){border-left:0}
.info-link:hover{background:#F7F5FF}
.chev{flex:0 0 auto;color:var(--primary);font-weight:800;transition:transform .2s ease}
.info-link:hover .chev{transform:translateX(3px)}
.faq{padding:clamp(14px,2.4vw,20px)}
.faq__title{margin:0 0 10px;font-weight:800;color:#2563EB;font-size:clamp(18px,3vw,24px)}
.faq__list{border-top:1px solid var(--border)}
.faq__item{border-bottom:1px solid var(--border)}
.faq__q{list-style:none;cursor:pointer;padding:14px 36px 14px 12px;font-weight:700;color:#201B39;position:relative}
.faq__q::-webkit-details-marker{display:none}
.faq__q::after{content:"▾";position:absolute;right:10px;top:50%;transform:translateY(-50%);color:#221F5B;font-weight:800;transition:transform .2s ease}
details[open]>.faq__q::after{transform:translateY(-50%) rotate(180deg)}
.faq__a{padding:0 12px 14px;color:#211B3A;font-size:clamp(14px,1.8vw,16px);line-height:1.85}
.faq__a ul,.faq__a ol{margin:8px 0 0 18px}
.faq__a li{margin:6px 0}
.post-title,.onpage-left__title,.p-card__title,.sidebar h2,.side-title,.gre-list__title,.gre-sections__title,.gre-sections__h3,.gre-choose__title,.next-steps__title,.step-card__title,.info-title,.faq__title{font-weight:700!important}
.scroll-progress{position:fixed;inset:0 auto auto 0;height:3px;width:0%;background:linear-gradient(90deg,#5B50E6 0%,#8D84FF 100%);box-shadow:0 1px 8px rgba(91,80,230,.35);z-index:9999;pointer-events:none}
.p-card img{transform:translateY(var(--parallax,0px)) scale(var(--scale,1))}
.p-card:hover img{--scale:1.02}
.side-item img{transform:translateY(var(--parallax,0px)) scale(var(--s,1))}
.side-item:hover img{--s:1.02}
@media(prefers-reduced-motion:no-preference){
  .reveal-left[data-reveal]{transform:translateX(-12px)}
  .reveal-right[data-reveal]{transform:translateX(12px)}
  .reveal-pop[data-reveal]{transform:scale(.985)}
}
.article-card,.onpage-left,.gre-list,.gre-sections,.gre-choose,.next-steps,.info-bank,.faq{overflow:hidden;contain:paint}
html,body{overflow-x:hidden}`;

  // --- Interactions (from your script.js), scoped to this component ---
  useEffect(() => {
    const root = rootRef.current!;
    const REDUCED = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const $ = (s: string, r: ParentNode = root) =>
      r.querySelector<HTMLElement>(s)!;
    const $$ = (s: string, r: ParentNode = root) =>
      Array.from(r.querySelectorAll<HTMLElement>(s));

    // subtle reveal
    function initReveal() {
      if (REDUCED) return;
      const targets = [
        ...$$(".article-card"),
        ...$$(".sidebar .side-item"),
        ...$$(".onpage-left .p-card"),
      ];
      targets.forEach((el, i) => {
        el.setAttribute("data-reveal", "");
        el.style.setProperty("--reveal-delay", `${Math.min(i * 70, 480)}ms`);
      });
      const io = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              (e.target as HTMLElement).classList.add("is-visible");
              obs.unobserve(e.target);
            }
          });
        },
        { threshold: 0.18 }
      );
      targets.forEach((el) => io.observe(el));
    }

    // carousel
    function initOnpageCarousel(section: HTMLElement) {
      const rail = section.querySelector<HTMLElement>(
        "#onpageLeftCards, .onpage-left__cards"
      );
      const prev = section.querySelector<HTMLButtonElement>(".prev");
      const next = section.querySelector<HTMLButtonElement>(".next");
      if (!rail || !prev || !next) return;

      (rail.style as any).scrollBehavior = "smooth";

      const gap = () => parseFloat(getComputedStyle(rail).gap || "18");
      const step = () => {
        const card = rail.querySelector<HTMLElement>(".p-card");
        return (
          (card ? card.getBoundingClientRect().width : rail.clientWidth) + gap()
        );
      };
      const perView = () => Math.max(1, Math.round(rail.clientWidth / step()));
      const maxIndex = () => {
        const total = rail.querySelectorAll(".p-card").length;
        return Math.max(0, total - perView());
      };
      const currIndex = () => Math.round(rail.scrollLeft / step());
      const snapTo = (idx: number) => {
        const target = Math.max(0, Math.min(idx, maxIndex())) * step();
        rail.scrollTo({ left: target, behavior: "smooth" });
      };

      prev.addEventListener("click", () => snapTo(currIndex() - 1));
      next.addEventListener("click", () => snapTo(currIndex() + 1));
      [prev, next].forEach((btn) =>
        btn.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            (e.currentTarget as HTMLButtonElement).click();
          }
        })
      );

      // make entire card clickable
      rail.querySelectorAll<HTMLElement>(".p-card").forEach((card) => {
        const href = card.getAttribute("data-href");
        if (card.tabIndex < 0) card.tabIndex = 0;
        card.addEventListener("click", (e) => {
          if ((e.target as HTMLElement).closest(".chip,.rating")) return;
          if (href) window.location.href = href;
        });
        card.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            if (href) window.location.href = href;
          }
        });
      });
    }

    function initPressFX() {
      const pressables = [...$$(".nav"), ...$$(".chip"), ...$$(".next-btn")];
      pressables.forEach((el) =>
        el.addEventListener("click", () => {
          el.classList.add("is-press");
          setTimeout(() => el.classList.remove("is-press"), 220);
        })
      );
    }

    function initFaqSingleOpen() {
      const faq = root.querySelector<HTMLElement>("#gre-faq .faq__list");
      if (!faq) return;
      faq.addEventListener(
        "toggle",
        (e: Event) => {
          const t = e.target as HTMLElement;
          if (t.tagName !== "DETAILS" || !(t as HTMLDetailsElement).open)
            return;
          faq
            .querySelectorAll<HTMLDetailsElement>("details[open]")
            .forEach((d) => {
              if (d !== t) d.open = false;
            });
        },
        true
      );
    }

    // extras
    function initEnhancedReveal() {
      if (REDUCED) return;
      const groups = [
        {
          sel: ".gre-list, .gre-sections, .gre-choose, .next-steps, .info-bank, .faq",
          klass: "reveal-up",
        },
        {
          sel: ".gre-sections__h3, .info-title, .next-steps__title, .faq__title",
          klass: "reveal-left",
        },
        {
          sel: ".onpage-left .p-card, .steps-grid .step-card, .info-grid .info-link",
          klass: "reveal-pop",
        },
        { sel: ".article-card, .sidebar .side-item", klass: "reveal-up" },
      ];
      groups.forEach(({ sel, klass }) => {
        $$(sel).forEach((el, i) => {
          el.setAttribute("data-reveal", "");
          if (klass) el.classList.add(klass);
          el.style.setProperty("--reveal-delay", `${Math.min(i * 70, 420)}ms`);
        });
      });
      const io = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              (e.target as HTMLElement).classList.add("is-visible");
              obs.unobserve(e.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      root
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((el) => io.observe(el));
    }

    function initScrollProgress() {
      const bar = document.createElement("div");
      bar.className = "scroll-progress";
      document.body.appendChild(bar);
      const update = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const pct = max > 0 ? window.scrollY / max : 0;
        bar.style.width = (pct * 100).toFixed(2) + "%";
      };
      update();
      window.addEventListener("scroll", update, { passive: true });
      window.addEventListener("resize", update);
      return () => {
        window.removeEventListener("scroll", update);
        window.removeEventListener("resize", update);
        bar.remove();
      };
    }

    function initParallax() {
      if (REDUCED) return;
      const imgs = $$(".p-card img, .side-item img");
      if (!imgs.length) return;
      const tick = () => {
        const vh = window.innerHeight;
        imgs.forEach((img) => {
          const r = img.getBoundingClientRect();
          const center = r.top + r.height / 2;
          const d = (center - vh / 2) / vh;
          const move = d * 12;
          img.style.setProperty("--parallax", `${move.toFixed(2)}px`);
        });
      };
      tick();
      window.addEventListener("scroll", tick, { passive: true });
      window.addEventListener("resize", tick);
      return () => {
        window.removeEventListener("scroll", tick);
        window.removeEventListener("resize", tick);
      };
    }

    // boot
    initReveal();
    root
      .querySelectorAll<HTMLElement>(".onpage-left")
      .forEach(initOnpageCarousel);
    initPressFX();
    initFaqSingleOpen();
    initEnhancedReveal();
    const cleanupProgress = initScrollProgress();
    const cleanupParallax = initParallax();

    return () => {
      cleanupProgress && cleanupProgress();
      cleanupParallax && cleanupParallax();
    };
  }, []);

  return (
    <div ref={rootRef}>
      {/* font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      />
      {/* inline CSS */}
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main className="wrap">
        <div className="grid">
          <div className="grid-left">
            <article className="article-card" aria-labelledby="post-title">
              <nav className="crumbs" aria-label="breadcrumb">
                <a href="#">বিদেশে উচ্চশিক্ষা</a> / <a href="#">পরীক্ষাসমূহ</a>{" "}
                / <a href="#">GRE</a> / <span aria-current="page">বইসমূহ</span>
              </nav>
              <header className="post-head">
                <h1 id="post-title" className="post-title">
                  GRE বই ২০২৪: সেরা GRE প্রস্তুতির বইসমূহ
                </h1>
                <p className="post-meta">
                  <span className="clock" aria-hidden="true">
                    ⏱️
                  </span>
                  আপডেট করা হয়েছে: আগস্ট ৩০, ২০২৪
                </p>
              </header>
              <section className="post-body">
                <p>
                  GRE পরীক্ষার প্রস্তুতি নিচ্ছেন? সঠিক বই নির্বাচন না করলে তা
                  অনেক বড় পার্থক্য তৈরি করতে পারে। এই বইগুলো আপনাকে পরীক্ষায়
                  কাঙ্ক্ষিত স্কোরে পৌঁছাতে সাহায্য করবে এবং আপনার স্কোর উন্নত
                  করতে সহায়তা করবে। GRE বিশেষভাবে বিদেশে পড়াশোনা করতে ইচ্ছুক
                  শিক্ষার্থীদের জন্য গুরুত্বপূর্ণ।
                </p>
                <p>
                  আপনি এই বইগুলো অনলাইনে বা দোকান থেকে কিনতে পারেন। এই লেখায়
                  আমরা ২০২৪ সালের GRE পরীক্ষার জন্য সেরা প্রস্তুতিমূলক বইগুলো
                  আলোচনা করবো। এই বইগুলো GRE–এর সব বিভাগকে আচ্ছাদিত করে এবং
                  আপনার লক্ষ্য স্কোরে পৌঁছাতে সাহায্য করে।
                </p>
              </section>
            </article>

            {/* This page (cards + arrows) */}
            <section
              className="onpage-left"
              aria-labelledby="onpage-left-title"
            >
              <h2 id="onpage-left-title" className="onpage-left__title">
                এই পৃষ্ঠায় <span aria-hidden="true">→</span>
              </h2>
              <div className="onpage-left__cards" id="onpageLeftCards">
                <article
                  className="p-card"
                  data-href="post-1.html"
                  tabIndex={0}
                  aria-label="১. GRE ২০২৪-এর জন্য সেরা প্রস্তুতিমূলক বই"
                >
                  <img src="/images/gre_books/image-1.jpg" alt="" />
                  <div className="p-card__body">
                    <h3 className="p-card__title">
                      ১. GRE ২০২৪-এর জন্য সেরা প্রস্তুতিমূলক বই
                    </h3>
                    <p className="p-card__desc">
                      GRE পরীক্ষায় প্রস্তুতি দ্রুত করার জন্য সেরা বই খুঁজছেন?
                    </p>
                  </div>
                  <div className="p-card__foot">
                    <a className="chip" href="post-1.html">
                      আরও পড়ুন <span className="caret">▾</span>
                    </a>
                    <span className="rating">৩/৬</span>
                  </div>
                </article>

                <article
                  className="p-card"
                  data-href="post-2.html"
                  tabIndex={0}
                  aria-label="২. GRE ২০২৪-এর সেরা প্রস্তুতির বই: বিভাগ অনুযায়ী তালিকা"
                >
                  <img src="/images/gre_books/image-2.jpg" alt="" />
                  <div className="p-card__body">
                    <h3 className="p-card__title">
                      ২. GRE ২০২৪-এর সেরা প্রস্তুতির বই: বিভাগ অনুযায়ী তালিকা
                    </h3>
                    <p className="p-card__desc">
                      ২০২৪ সালে GRE পরীক্ষায় প্রস্তুতির জন্য সেরা বই খুঁজছেন?
                    </p>
                  </div>
                  <div className="p-card__foot">
                    <a className="chip" href="#gre-sectioned-books">
                      আরও পড়ুন <span className="caret">▾</span>
                    </a>
                    <span className="rating">২/৬</span>
                  </div>
                </article>

                <article
                  className="p-card"
                  data-href="post-3.html"
                  tabIndex={0}
                  aria-label="৩. আপনার জন্য প্রস্তুতিমূলক বই কোনগুলো?"
                >
                  <img src="/images/gre_books/image-3.jpg" alt="" />
                  <div className="p-card__body">
                    <h3 className="p-card__title">
                      ৩. আপনার জন্য প্রস্তুতিমূলক বই কোনগুলো?
                    </h3>
                    <p className="p-card__desc">
                      সময় কম? ফোকাসড থাকুন—এই গাইডেই সঠিক বই।
                    </p>
                  </div>
                  <div className="p-card__foot">
                    <a className="chip" href="post-3.html">
                      আরও পড়ুন <span className="caret">▾</span>
                    </a>
                    <span className="rating">৪/৬</span>
                  </div>
                </article>

                <article
                  className="p-card"
                  data-href="post-4.html"
                  tabIndex={0}
                  aria-label="৪. GRE শব্দভাণ্ডার গড়তে সেরা ১০ বই"
                >
                  <img src="/images/gre_books/image-4.jpg" alt="" />
                  <div className="p-card__body">
                    <h3 className="p-card__title">
                      ৪. GRE শব্দভাণ্ডার গড়তে সেরা ১০ বই
                    </h3>
                    <p className="p-card__desc">
                      ভোকাবুলারি শক্তিশালী করতে এই বইগুলো হাতে রাখুন।
                    </p>
                  </div>
                  <div className="p-card__foot">
                    <a className="chip" href="post-4.html">
                      আরও পড়ুন <span className="caret">▾</span>
                    </a>
                    <span className="rating">৫/৬</span>
                  </div>
                </article>
              </div>

              <div className="onpage-left__nav">
                <button
                  className="nav prev"
                  type="button"
                  aria-label="পূর্ববর্তী"
                >
                  ‹
                </button>
                <button className="nav next" type="button" aria-label="পরবর্তী">
                  ›
                </button>
              </div>
            </section>

            {/* Top books */}
            <section className="gre-list" id="gre-top-books">
              <h2 className="gre-list__title">
                ১. GRE ২০২৪-এর জন্য সেরা প্রস্তুতিমূলক বই
              </h2>
              <p className="gre-list__lead">
                <strong>
                  GRE পরীক্ষার প্রস্তুতি উন্নত করতে সেরা বই খুঁজছেন?
                </strong>
              </p>
              <p>
                এখানে কিছু শীর্ষ পর্যায়ের বইগুলো যা আপনার পরীক্ষায় সফল হতে
                সাহায্য করবে:
              </p>
              <ol className="gre-list__ol">
                <li>
                  <strong>
                    The Official Guide to the GRE General Test by ETS
                  </strong>{" "}
                  — ETS-এর অফিসিয়াল গাইড। প্র্যাকটিস প্রশ্ন, টেস্ট নেওয়ার টিপস
                  এবং আসল GRE উপকরণ রয়েছে।
                </li>
                <li>
                  <strong>GRE Prep by Magoosh</strong> — ভিডিও লেসন, প্র্যাকটিস
                  প্রশ্ন, বিশদ ব্যাখ্যা ও স্টাডি প্ল্যানসহ একটি পূর্ণাঙ্গ
                  রিসোর্স।
                </li>
                <li>
                  <strong>
                    Barron’s GRE (Sharon Weiner Green & Ira K. Wolf)
                  </strong>{" "}
                  — বিস্তৃত রিভিউ, গ্রেডেড প্রশ্ন, কৌশল ও টিপস।
                </li>
                <li>
                  <strong>Kaplan’s GRE Prep Plus 2024</strong> — কৌশল,
                  প্র্যাকটিস প্রশ্ন, ফুল-লেংথ টেস্ট।
                </li>
                <li>
                  <strong>
                    Manhattan Prep’s 5 lb. Book of GRE Practice Problems
                  </strong>{" "}
                  — ১,৮০০+ প্র্যাকটিস প্রশ্ন; কোয়ান্ট, রিজনিং ও AWA কভার।
                </li>
              </ol>
              <p className="gre-list__end">
                এই বইগুলো প্র্যাকটিস প্রশ্ন এবং দ্রুত স্টাডি প্ল্যান পর্যন্ত
                বিস্তৃত রিসোর্স সরবরাহ করে, যা আপনার পরীক্ষায় সফলতা নিশ্চিত করতে
                সহায়তা করবে।
              </p>
            </section>

            {/* Sectioned list */}
            <section className="gre-sections" id="gre-sectioned-books">
              <h2 className="gre-sections__title">
                ২. GRE ২০২৪-এর জন্য সেরা প্রস্তুতিমূলক বই: বিভাগ অনুযায়ী তালিকা
              </h2>
              <p className="gre-sections__lead">
                <strong>
                  ২০২৪ সালের GRE-এর প্রস্তুতির জন্য সেরা বই খুঁজছেন?
                </strong>
              </p>
              <p>
                GRE পরীক্ষায় প্রস্তুতির জন্য সঠিক স্টাডি ম্যাটেরিয়াল অত্যন্ত
                গুরুত্বপূর্ণ। চলুন কিছু সেরা বইয়ের দিকে নজর দেই, যা আপনার
                প্রস্তুতির প্রতিটি ধাপে গাইড করতে এবং সফলতার সম্ভাবনা বাড়াবে।
              </p>

              <h3 className="gre-sections__h3">
                GRE Analytical Writing Assessment (AWA) সেকশনের জন্য GRE
                প্রস্তুতি বই
              </h3>
              <p>
                GRE-এর Analytical Writing Assessment (AWA) সেকশন আপনার লেখা
                দক্ষতা প্রমাণ করতে হয়। এই সেকশনে সফল হতে আপনাকে এমন একটি বইয়ের
                প্রয়োজন, যা স্পষ্ট ও সংক্ষিপ্ত এসেসি লেখার প্রয়োজনীয়তা সরবরাহ
                করে।
              </p>
              <p>
                AWA প্রস্তুতির জন্য সেরা বইগুলোর মধ্যে একটি হলো{" "}
                <strong>
                  “GRE Analytical Writing: Solutions to the Real Essay Topics”
                </strong>{" "}
                (Vibrant Publishers)। এতে{" "}
                <strong>৬০টি আসল AWA এসেসি প্রশ্ন</strong> এবং সম্পূর্ণ এসেসির
                উদাহরণ রয়েছে, যা GRE স্কেলে <strong>৬.০ নম্বর</strong> পেয়েছে…
              </p>
              <p className="gre-sections__sublead">
                অন্যান্য জনপ্রিয় AWA প্রস্তুতি বইগুলো হলো:
              </p>
              <ul className="gre-sections__ul">
                <li>
                  <strong>
                    “Cracking the GRE Premium Edition with 6 Practice Tests,
                    2024”
                  </strong>{" "}
                  (The Princeton Review)
                </li>
                <li>
                  <strong>
                    “GRE Analytical Writing: Solutions to the Real Essay Topics
                    – Book 2”
                  </strong>{" "}
                  (Vibrant Publishers)
                </li>
              </ul>

              <h3 className="gre-sections__h3">
                GRE Quantitative Reasoning সেকশনের জন্য GRE প্রস্তুতি বই
              </h3>
              <p>
                GRE পরীক্ষার <strong>Quantitative Reasoning</strong> সেকশন… এমন
                একটি বই প্রয়োজন, যা GRE-এর সব টপিক কভার করে এবং প্রচুর
                প্র্যাকটিস প্রশ্ন সরবরাহ করে।
              </p>
              <p>
                সেরা বইগুলোর একটি{" "}
                <strong>“5 lb. Book of GRE Practice Problems”</strong>{" "}
                (Manhattan Prep)… এবং <strong>“GRE Math Workbook”</strong>{" "}
                (Kaplan)।
              </p>

              <h3 className="gre-sections__h3">
                GRE Verbal Reasoning সেকশনের জন্য GRE প্রস্তুতি বই
              </h3>
              <p>
                Verbal-এর জন্য{" "}
                <strong>“The Official Guide to the GRE General Test”</strong>{" "}
                (ETS), <strong>“GRE Prep by Magoosh”</strong>, এবং{" "}
                <strong>“Barron’s GRE”</strong> ভালো রিসোর্স।
              </p>
            </section>

            {/* Choose books */}
            <section className="gre-choose" id="gre-choose-books">
              <h2 className="gre-choose__title">
                ৩. আপনার জন্য সেরা GRE প্রস্তুতিমূলক বই কিভাবে নির্বাচন করবেন?
              </h2>
              <p className="gre-choose__lead">
                আপনার জন্য সেরা GRE প্রস্তুতিমূলক বই নির্বাচন করা একটি
                গুরুত্বপূর্ণ… নিচের বিষয়গুলো বিবেচনা করুন:
              </p>
              <ul className="gre-choose__ul">
                <li>
                  <span className="bn-count">১.</span>{" "}
                  <strong>বিষয়ভিত্তিক:</strong> GRE-এর সব বিভাগ কভার করে এমন
                  বই…
                </li>
                <li>
                  <span className="bn-count">২.</span>{" "}
                  <strong>প্র্যাকটিস প্রশ্ন:</strong> আসল ধাঁচের প্রশ্ন +
                  ব্যাখ্যা…
                </li>
                <li>
                  <span className="bn-count">৩.</span>{" "}
                  <strong>রিভিউ ও রেটিং:</strong> যাচাইকৃত প্ল্যাটফর্ম…
                </li>
                <li>
                  <span className="bn-count">৪.</span>{" "}
                  <strong>স্টাডি প্ল্যান:</strong> আপনার সময়সূচির সাথে মানায় কি
                  না…
                </li>
                <li>
                  <span className="bn-count">৫.</span>{" "}
                  <strong>ডিজিটাল সাপোর্ট:</strong> ভিডিও, অনলাইন কুইজ/অ্যাপ…
                </li>
              </ul>
            </section>

            {/* Next steps */}
            <section className="next-steps" aria-labelledby="next-steps-title">
              <h3 id="next-steps-title" className="next-steps__title">
                পরবর্তী ধাপ
              </h3>
              <div className="steps-grid">
                <article className="step-card">
                  <h4 className="step-card__title">GRE পরীক্ষা</h4>
                  <a className="next-btn" href="#!">
                    এখনই পড়ুন <span className="arr">→</span>
                  </a>
                </article>
                <article className="step-card">
                  <h4 className="step-card__title">GRE পরীক্ষার ক্যালেন্ডার</h4>
                  <a className="next-btn" href="#!">
                    এখনই পড়ুন <span className="arr">→</span>
                  </a>
                </article>
                <article className="step-card">
                  <h4 className="step-card__title">GRE পরীক্ষার তারিখসমূহ</h4>
                  <a className="next-btn" href="#!">
                    এখনই পড়ুন <span className="arr">→</span>
                  </a>
                </article>
              </div>
            </section>

            {/* Info banks */}
            <section className="info-bank">
              <h3 className="info-title">IELTS গুরুত্বপূর্ণ তথ্য</h3>
              <div className="info-grid info-grid--ielts" role="list">
                <a className="info-link" href="#" role="listitem">
                  IELTS পরীক্ষা <span className="chev">→</span>
                </a>
                <a className="info-link" href="#" role="listitem">
                  IELTS পরীক্ষার তারিখ <span className="chev">→</span>
                </a>
                <a className="info-link" href="#" role="listitem">
                  IELTS পরীক্ষা ফি <span className="chev">→</span>
                </a>
                <a className="info-link" href="#" role="listitem">
                  IELTS কী <span className="chev">→</span>
                </a>
                <a className="info-link" href="#" role="listitem">
                  IELTS ফলাফল <span className="chev">→</span>
                </a>
                <a className="info-link" href="#" role="listitem">
                  IELTS পেপার বনাম অনলাইন পরীক্ষা{" "}
                  <span className="chev">→</span>
                </a>
                <a className="info-link" href="#" role="listitem">
                  IELTS কথা বলা অনুশীলন পরীক্ষা <span className="chev">→</span>
                </a>
                <a className="info-link" href="#" role="listitem">
                  IELTS পরীক্ষার কেন্দ্র <span className="chev">→</span>
                </a>
                <a className="info-link" href="#" role="listitem">
                  IELTS স্কলারশিপ <span className="chev">→</span>
                </a>
                <a className="info-link" href="#" role="listitem">
                  IELTS-এর ধরন <span className="chev">→</span>
                </a>
                <a className="info-link" href="#" role="listitem">
                  IELTS প্যাটার্ন <span className="chev">→</span>
                </a>
                <a className="info-link" href="#" role="listitem">
                  IELTS ব্যান্ড স্কোর <span className="chev">→</span>
                </a>
                <a className="info-link" href="#" role="listitem">
                  IELTS পরীক্ষার যোগ্যতা <span className="chev">→</span>
                </a>
                <a className="info-link" href="#" role="listitem">
                  IELTS স্কোর বৃদ্ধি <span className="chev">→</span>
                </a>
                <a className="info-link" href="#" role="listitem">
                  IELTS রেজিস্ট্রেশন <span className="chev">→</span>
                </a>
                <a className="info-link" href="#" role="listitem">
                  IELTS প্রস্তুতি <span className="chev">→</span>
                </a>
                <a className="info-link" href="#" role="listitem">
                  IELTS বই <span className="chev">→</span>
                </a>
                <a className="info-link" href="#" role="listitem">
                  IELTS অনলাইন পরীক্ষা <span className="chev">→</span>
                </a>
              </div>
            </section>

            <section className="info-bank">
              <h3 className="info-title">GRE গুরুত্বপূর্ণ তথ্য</h3>
              <div className="info-grid info-grid--gre" role="list">
                <a className="info-link" href="#" role="listitem">
                  GRE পরীক্ষা <span className="chev">→</span>
                </a>
                <a className="info-link" href="#" role="listitem">
                  GRE তারিখসমূহ <span className="chev">→</span>
                </a>
                <a className="info-link" href="#" role="listitem">
                  GRE ফলাফল <span className="chev">→</span>
                </a>
                <a className="info-link" href="#" role="listitem">
                  GRE ফি <span className="chev">→</span>
                </a>
                <a className="info-link" href="#" role="listitem">
                  GRE সিলেবাস <span className="chev">→</span>
                </a>
                <a className="info-link" href="#" role="listitem">
                  GRE বই <span className="chev">→</span>
                </a>
                <a className="info-link" href="#" role="listitem">
                  GRE রেজিস্ট্রেশন <span className="chev">→</span>
                </a>
                <a className="info-link" href="#" role="listitem">
                  GRE স্কোর বৃদ্ধি <span className="chev">→</span>
                </a>
                <a className="info-link" href="#" role="listitem">
                  GRE অনুশীলন <span className="chev">→</span>
                </a>
                <a className="info-link" href="#" role="listitem">
                  GRE প্রস্তুতি <span className="chev">→</span>
                </a>
                <a className="info-link" href="#" role="listitem">
                  GRE অনলাইন পরীক্ষা <span className="chev">→</span>
                </a>
              </div>
            </section>

            {/* FAQ */}
            <section className="faq" id="gre-faq">
              <h3 className="faq__title">
                শিক্ষার্থীদের করা সবচেয়ে বেশি প্রশ্ন সমূহ–
              </h3>
              <div className="faq__list">
                <details className="faq__item">
                  <summary className="faq__q">
                    আমি GRE-এর জন্য কীভাবে প্রস্তুতি নেব?
                  </summary>
                  <div className="faq__a">
                    <p>
                      প্রথমে একটি <strong>ডায়াগনস্টিক মক</strong>… এরপর ৮–১২
                      সপ্তাহের একটি <strong>স্টাডি প্ল্যান</strong> বানান:
                    </p>
                    <ul>
                      <li>প্রতিদিন ১–২ ঘন্টা কনসেপ্ট + ১ ঘন্টা প্র্যাকটিস…</li>
                      <li>
                        <strong>ম্যাটেরিয়াল:</strong> ETS Official Guide,
                        Manhattan 5lb, Magoosh/Princeton Review।
                      </li>
                      <li>
                        <strong>Verbal:</strong> রিডিং, টেক্সট
                        কমপ্লিশন/সেন্টেন্স ইকুইভ্যালেন্স…
                      </li>
                      <li>
                        <strong>Quant:</strong> অ্যালজেব্রা, অ্যারিথমেটিক,
                        জিওমেট্রি, ডাটা অ্যানালিসিস…
                      </li>
                      <li>
                        <strong>AWA:</strong> সাম্প্রতিক টপিক থেকে ২–৩টি ইস্যু
                        এসেসি লিখে ফিডব্যাক নিন।
                      </li>
                      <li>শেষ ২–৩ সপ্তাহে পূর্ণদৈর্ঘ্য মক দিয়ে বিশ্লেষণ…</li>
                    </ul>
                  </div>
                </details>

                <details className="faq__item">
                  <summary className="faq__q">
                    GRE-এর জন্য আমি কীভাবে রেজিস্ট্রেশন করব?
                  </summary>
                  <div className="faq__a">
                    <ol>
                      <li>
                        ETS অ্যাকাউন্ট খুলুন এবং প্রোফাইলে পাসপোর্টের তথ্য হুবহু
                        দিন…
                      </li>
                      <li>General Test → Test Center বা GRE at Home…</li>
                      <li>তারিখ/স্লট বেছে নিয়ে ফি পরিশোধ…</li>
                      <li>কনফার্মেশন ইমেইল/প্রিন্ট রাখুন…</li>
                      <li>পরীক্ষার দিনে বৈধ পাসপোর্ট সঙ্গে নিন।</li>
                    </ol>
                  </div>
                </details>

                <details className="faq__item">
                  <summary className="faq__q">GRE-এর সিলেবাস কী?</summary>
                  <div className="faq__a">
                    <p>
                      <strong>Verbal:</strong> RC, Text Completion, Sentence
                      Equivalence
                      <br />
                      <strong>Quant:</strong> Arithmetic, Algebra, Geometry,
                      Data Analysis
                      <br />
                      <strong>AWA:</strong> Analyze an Issue (৩০ মিনিট)
                    </p>
                  </div>
                </details>

                <details className="faq__item">
                  <summary className="faq__q">
                    GRE-এর কোন অংশ সবচেয়ে গুরুত্বপূর্ণ?
                  </summary>
                  <div className="faq__a">
                    <p>
                      প্রোগ্রাম অনুযায়ী ভিন্ন—STEM/Business এ Quant, অন্য
                      ক্ষেত্রে Verbal/AWA, তবে দুটোই জরুরি।
                    </p>
                  </div>
                </details>

                <details className="faq__item">
                  <summary className="faq__q">পরীক্ষার কাটঅফ কী রকম?</summary>
                  <div className="faq__a">
                    <p>
                      অফিশিয়াল কাটঅফ নেই—ডিপার্টমেন্টভেদে বেঞ্চমার্ক আলাদা;
                      টপ-টিয়ার STEM এ Quant 165+, Verbal 155+ টার্গেট।
                    </p>
                  </div>
                </details>
              </div>
            </section>
          </div>

          {/* Right sidebar */}
          <aside className="sidebar" aria-labelledby="more-title">
            <div className="side-head">
              <h2 id="more-title">আরও পড়ুন</h2>
              <a className="see-all" href="#">
                সব দেখুন
              </a>
            </div>
            <div className="side-list">
              <a className="side-item" href="#">
                <img src="/images/gre_books/image-1.jpg" alt="" />
                <div className="side-txt">
                  <h3 className="side-title">
                    প্রযুক্তি শিক্ষার জন্য সেরা বিশ্ববিদ্যালয়গুলো
                  </h3>
                  <p className="side-meta">১২ জুলাই, ২০২৪ • ৫ মিনিট</p>
                </div>
              </a>
              <a className="side-item" href="#">
                <img src="/images/gre_books/image-2.jpg" alt="" />
                <div className="side-txt">
                  <h3 className="side-title">
                    বিশ্বের শীর্ষ ১০ বিশ্ববিদ্যালয়: কোথায় পড়বেন এবং কেন?
                  </h3>
                  <p className="side-meta">১৯ জুলাই, ২০২৪ • ৫ মিনিট</p>
                </div>
              </a>
              <a className="side-item" href="#">
                <img src="/images/gre_books/image-3.jpg" alt="" />
                <div className="side-txt">
                  <h3 className="side-title">
                    প্রযুক্তি শিক্ষার জন্য সেরা বিশ্ববিদ্যালয়গুলো
                  </h3>
                  <p className="side-meta">১৯ জুলাই, ২০২৪ • ৫ মিনিট</p>
                </div>
              </a>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default GreBooksPage;
