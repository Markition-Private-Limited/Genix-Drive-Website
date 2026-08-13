import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import s1 from "../../assets/slider/1.jpeg";
import s2 from "../../assets/slider/2.png";
import s3 from "../../assets/slider/3.png";
import s4 from "../../assets/slider/4.png";
import s5 from "../../assets/slider/5.png";
import s6 from "../../assets/slider/6.jpeg";

import grnstr from "../../assets/grnstr.png";
import bluestr from "../../assets/bluestr.png";
import grystr from "../../assets/grystr.png";

// ─── Layout constants ─────────────────────────────────────────────────────────
// const CARD_W    = 260;
const CARD_W = 190;
const CARD_H = 330;
// const CARD_GAP  = 24;
const CARD_GAP = 15;
const CARD_STEP = CARD_W + CARD_GAP;   // 284px between card left edges
const SPEED = 0.55;              // px per frame (~33 px/s at 60 fps)
const CURVE = 60;               // max vertical drop at viewport edges (px)
const MAX_ROTATE = 45;               // max rotateY at viewport edges (deg)

const IMAGES = [s1, s2, s3, s4, s5, s6];
const LOOP_W = CARD_STEP * IMAGES.length;   // one full copy width
const ALL_IMAGES = [...IMAGES, ...IMAGES, ...IMAGES];       // tripled for seamless loop

// ─── Component ────────────────────────────────────────────────────────────────
const AboutCollageSlider = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef(0);

  useEffect(() => {
    const getVOffset = () => (IMAGES.length * 1.5 * CARD_STEP - CARD_GAP / 2) - (document.documentElement.clientWidth / 2);
    let offset = getVOffset();
    let sectionLeft = sectionRef.current?.getBoundingClientRect().left ?? 0;

    const onResize = () => {
      sectionLeft = sectionRef.current?.getBoundingClientRect().left ?? 0;
      // Optionally reset offset on resize to keep it centered
      // offset = getVOffset();
    };
    window.addEventListener("resize", onResize);

    const tick = () => {
      // Advance scroll
      offset += SPEED;
      // Loop within the middle set of the tripled array for seamless centering
      if (offset >= LOOP_W * 2) offset -= LOOP_W;
      if (offset < LOOP_W) offset += LOOP_W;

      // Move the track
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${-offset}px)`;
      }

      // Parabolic curve logic
      const vCentre = document.documentElement.clientWidth / 2;
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        // cx = global horizontal center of the card
        const cx = sectionLeft + i * CARD_STEP + CARD_W / 2 - offset;
        const dist = (cx - vCentre) / vCentre;
        const rotY = -dist * MAX_ROTATE;
        const transY = CURVE * dist * dist;
        card.style.transform = `perspective(1000px) rotateY(${rotY}deg) translateY(${transY}px)`;
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: "#ffffff",
        paddingTop: "4rem",
        paddingBottom: "0rem",
      }}
    >
      {/* Ambient glows */}
      <div className="absolute pointer-events-none" style={{
        top: -120, left: -120, width: 480, height: 480, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(82,77,229,0.07) 0%, transparent 72%)",
      }} />
      <div className="absolute pointer-events-none" style={{
        bottom: -80, right: -80, width: 360, height: 360, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(120,117,251,0.08) 0%, transparent 70%)",
      }} />

      {/* ── Heading ─────────────────────────────────────────────────────────── */}
      <div className="relative z-10 text-center mb-8 px-6">
        <div className="relative inline-block">
          <img src={bluestr} alt="" className="absolute pointer-events-none select-none"
            style={{ top: -18, left: -46, width: 30, opacity: 0.8 }} />
          <img src={grnstr} alt="" className="absolute pointer-events-none select-none"
            style={{ bottom: -12, right: -40, width: 24, opacity: 0.7 }} />
          <img src={grystr} alt="" className="absolute pointer-events-none select-none"
            style={{ top: -24, right: 32, width: 18, opacity: 0.5 }} />
          <img src={grnstr} alt="" className="absolute pointer-events-none select-none"
            style={{ bottom: 0, left: 12, width: 14, opacity: 0.45 }} />
          <img src={bluestr} alt="" className="absolute pointer-events-none select-none"
            style={{ top: 8, left: -22, width: 12, opacity: 0.35 }} />

          <h2
            className="font-bold leading-tight tracking-tight text-black"
            style={{ fontSize: "clamp(2rem, 4.2vw, 3.2rem)" }}
          >
            About{" "}
            <span style={{
              background: "linear-gradient(135deg, #524de5 0%, #7875fb 55%, #a78bfa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Genix Drive
            </span>
          </h2>
        </div>

        <p className="mt-3 mx-auto leading-relaxed font-light text-gray-500"
          style={{ fontSize: "1.1rem", maxWidth: 560 }}>
          Smart, safe, and connected driving — every trip becomes an intelligent
          journey with AI‑powered insights that protect, reward, and guide you on the road.
        </p>
      </div>

      {/* ── Curved Marquee ──────────────────────────────────────────────────── */}
      {/*
          Height = top padding (24) + card height (420) + max curve drop (80) + bottom padding (24)
          Centre-screen cards sit at y=0 (top of their natural position).
          Edge cards are pushed DOWN by up to CURVE px — creating the visible arc.
      */}
      <div className="relative" style={{ height: CARD_H + CURVE + 48, overflow: "hidden", background: "linear-gradient(180deg, #ffffff 0%, #ffffff 30%, #e4e9ff 65%, #cfd8ff 100%)" }}>

        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none" style={{
          width: 160,
          background: "linear-gradient(to right, #ffffff 0%, transparent 100%)",
        }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none" style={{
          width: 160,
          background: "linear-gradient(to left, #ffffff 0%, transparent 100%)",
        }} />

        {/* Track — translateX is driven by rAF */}
        <div
          ref={trackRef}
          className="absolute left-0 flex"
          style={{ top: 24, gap: CARD_GAP }}
        >
          {ALL_IMAGES.map((img, i) => (
            /*
              Two-layer card:
              • Outer div  → receives translateY (curve) from rAF, no overflow clip
              • Inner motion.div → overflow:hidden + border-radius + hover scale
            */
            <div
              key={i}
              ref={el => { cardRefs.current[i] = el; }}
              style={{ width: CARD_W, height: CARD_H, flexShrink: 0 }}
            >
              <motion.div
                className="relative w-full h-full overflow-hidden"
                style={{
                  borderRadius: 32,
                  boxShadow: "0 20px 60px rgba(82,77,229,0.10), 0 6px 20px rgba(0,0,0,0.06)",
                  cursor: "pointer",
                  background: [0, 5].includes(i % IMAGES.length) ? "#0d1117" : undefined,
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 28px 80px rgba(82,77,229,0.20), 0 12px 40px rgba(0,0,0,0.10)",
                  transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
                }}
              >
                <img
                  src={img}
                  alt={`Slide ${(i % IMAGES.length) + 1}`}
                  className="w-full h-full"
                  draggable={false}
                  style={{
                    userSelect: "none",
                    objectFit: "cover",
                  }}
                // [0, 5].includes(i % IMAGES.length) ? "contain" : 
                />
                {/* Subtle bottom vignette */}
                <div className="absolute inset-0 pointer-events-none" style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.06) 50%, transparent 100%)",
                }} />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCollageSlider;
