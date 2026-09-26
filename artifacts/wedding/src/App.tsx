import React, { useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform, type Variants } from "framer-motion";

// Images
import imgHero from "@assets/image_1779865765353.png";
import imgWine from "@assets/image_1779863650532.png";
import imgDetails from "@assets/image_1779865802438.png";
import imgProposal from "@assets/image_1779863655562.png";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const journeyMilestones = [
  {
    date: "2020",
    title: "Where it all began",
    description:
      "Our journey started when we studied Industrial Engineering together."
  },
  {
    date: "9 September 2022",
    title: "More than friends",
    description:
      "After being friends for quite some time, our friendship turned into something more. On 9 September 2022, we officially started dating."
  },
  {
    date: "January 2025",
    title: "Love across the kilometres",
    description:
      "Life took us into a long-distance chapter, with trips between Klerksdorp and Cape Town, plenty of goodbyes, reunions and kilometres in between."
  },
  {
    date: "August 2026",
    title: "Home together",
    description:
      "The distance finally came to an end when Leonize got a job in Cape Town. After years of friendship, love and travelling, we could finally build our everyday life together."
  },
  {
    date: "20 March 2027",
    title: "Finally, forever",
    description:
      "After six beautiful years of growing together, we are finally getting married — and we cannot wait to celebrate this next chapter with you."
  }
];

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);

  const textBlock = (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="flex flex-col items-center w-full"
    >
      <motion.div variants={fadeUp} className="mb-5 md:mb-10 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full border border-white/25">
        <span className="text-sm font-sans tracking-[0.25em] text-white uppercase">#FoordForever</span>
      </motion.div>

      <motion.h1 variants={fadeUp} className="text-[clamp(3.8rem,14vw,9rem)] leading-[0.85] text-white font-script drop-shadow-2xl py-4 flex flex-col md:flex-row items-center justify-center gap-1 md:gap-6">
        <span>JJ</span>
        <span className="text-secondary text-[clamp(2.8rem,9vw,5.5rem)]">&amp;</span>
        <span>Leonize</span>
      </motion.h1>

      <motion.div variants={fadeUp} className="mt-6 flex flex-col md:flex-row items-center gap-3 md:gap-8 text-sm md:text-base uppercase tracking-[0.2em] font-sans text-white/90">
        <span>20 March 2027</span>
        <div className="w-1.5 h-1.5 bg-secondary rounded-full hidden md:block" />
        <div className="w-10 h-[1px] bg-white/40 block md:hidden" />
        <span>The Whitehouse · Klerksdorp</span>
      </motion.div>
    </motion.div>
  );

  return (
    <>
      {/* ── Mobile hero: photo on top, text on sage green below ── */}
      <section className="flex flex-col md:hidden w-full">
        <div className="w-full overflow-hidden">
          <img
            src={imgHero}
            alt="JJ and Leonize toasting"
            className="w-full h-auto"
          />
        </div>
        <div className="bg-primary px-6 py-12 text-center flex flex-col items-center">
          {textBlock}
        </div>
      </section>

      {/* ── Desktop hero: full-screen parallax ── */}
      <section className="relative hidden md:flex min-h-[100dvh] w-full overflow-hidden bg-primary items-center justify-center">
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0 will-change-transform"
        >
          <img
            src={imgHero}
            alt="JJ and Leonize toasting"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary/45" />
        </motion.div>
        <div className="relative z-10 text-center px-4 w-full flex flex-col items-center py-20">
          {textBlock}
        </div>
      </section>
    </>
  );
}

function SectionNav({ onOpenRSVP }: { onOpenRSVP: () => void }) {
  return (
    <nav
      aria-label="Wedding sections"
      className="sticky top-0 z-40 border-b border-border bg-background/95 shadow-sm backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 md:px-6">
        <span className="hidden shrink-0 font-script text-2xl text-primary sm:block">JJ &amp; Leonize</span>
        <div className="flex min-w-0 flex-1 items-center justify-center gap-1 overflow-x-auto py-3 md:gap-3">
          <a
            href="#story"
            className="shrink-0 whitespace-nowrap px-3 py-2 font-sans text-[11px] uppercase tracking-[0.14em] text-foreground/65 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          >
            Our Story
          </a>
          <a
            href="#details"
            className="shrink-0 whitespace-nowrap px-3 py-2 font-sans text-[11px] uppercase tracking-[0.14em] text-foreground/65 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          >
            The Day
          </a>
          <a
            href="#stay"
            className="shrink-0 whitespace-nowrap px-3 py-2 font-sans text-[11px] uppercase tracking-[0.14em] text-foreground/65 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          >
            Where to Stay
          </a>
        </div>
        <button
          type="button"
          onClick={onOpenRSVP}
          className="shrink-0 bg-primary px-4 py-2.5 font-sans text-[11px] uppercase tracking-[0.16em] text-white shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary md:px-5"
        >
          RSVP
        </button>
      </div>
    </nav>
  );
}

function Invitation() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 max-w-4xl mx-auto text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={stagger}
        className="flex flex-col items-center"
      >
        <motion.div variants={fadeUp} className="mb-10 relative">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-t-full overflow-hidden mx-auto shadow-xl ring-4 ring-background ring-offset-2 ring-offset-primary/10">
            <img src={imgWine} alt="Couple toasting" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.p variants={fadeUp} className="font-serif text-2xl md:text-4xl leading-relaxed md:leading-relaxed text-primary mb-10 italic px-4">
          Together with our families, we joyfully invite you to share in our celebration of love, commitment, and the beginning of our forever.
        </motion.p>

        <motion.div variants={fadeUp} className="flex items-center justify-center w-full mb-10">
          <div className="w-16 h-[1px] bg-secondary/50"></div>
          <div className="mx-4 text-secondary text-2xl font-serif italic">&amp;</div>
          <div className="w-16 h-[1px] bg-secondary/50"></div>
        </motion.div>

        <motion.div variants={fadeUp} className="max-w-xl mx-auto font-sans text-foreground/80 leading-loose px-4">
          We are so incredibly grateful for the love and support of our family and friends. We couldn't imagine taking this step without you by our side.
        </motion.div>
      </motion.div>
    </section>
  );
}

function Details() {
  return (
    <section id="details" className="scroll-mt-20 py-20 md:py-32 bg-accent/40 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-24 items-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
          className="order-2 md:order-1"
        >
          <motion.div variants={fadeUp} className="text-center md:text-left mb-12">
            <span className="text-secondary font-script text-4xl md:text-5xl mb-2 block">The Details</span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary">When &amp; Where</h2>
          </motion.div>
          
          <div className="space-y-10 font-sans">
            <motion.div variants={fadeUp} className="bg-background p-8 shadow-sm border-t-4 border-primary">
              <h3 className="uppercase tracking-widest text-xs md:text-sm text-secondary font-semibold mb-4 border-b border-border pb-3">Ceremony &amp; Reception</h3>
              <p className="font-serif text-2xl md:text-3xl text-primary mb-3">The Whitehouse</p>
              <p className="text-foreground/80 leading-relaxed mb-1">163 Dr Yusuf Dadoo Avenue<br/>Klerksdorp, North West</p>
              <p className="text-foreground/80 leading-relaxed mb-4">Saturday, 20 March 2027<br/>Bride walks in at 15:00<br/><span className="text-sm text-foreground/60">Cocktails, dinner &amp; dancing to follow</span></p>
              <a href="https://maps.app.goo.gl/2oTWSh4xJf8AZ5M2A" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest border-b border-primary text-primary pb-1 hover:text-secondary hover:border-secondary transition-colors font-medium">View on Map</a>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[3/4] w-full order-1 md:order-2"
        >
          <img src={imgDetails} alt="Couple smiling with ring" className="w-full h-full object-cover shadow-xl rounded-sm" />
          <div className="absolute inset-0 ring-1 ring-inset ring-primary/10 rounded-sm" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 -z-10 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="scroll-mt-20 py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16 md:mb-24"
        >
          <motion.span variants={fadeUp} className="font-script text-secondary text-4xl md:text-5xl mb-2 block">Our Story</motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-primary mb-6">Six Years, One Forever</motion.h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-3 md:left-4 top-3 bottom-3 w-px bg-secondary/30" aria-hidden="true" />
            <div className="space-y-10 md:space-y-12">
              {journeyMilestones.map((milestone, index) => (
                <motion.div
                  key={milestone.date}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="relative pl-12 md:pl-16"
                >
                  <span className="absolute left-0 top-1.5 flex h-7 w-7 md:h-9 md:w-9 items-center justify-center rounded-full border border-secondary/60 bg-background">
                    <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
                  </span>
                  <p className="font-sans text-xs uppercase tracking-[0.2em] text-secondary mb-2">{milestone.date}</p>
                  <h3 className="font-serif text-2xl md:text-3xl text-primary mb-2">{milestone.title}</h3>
                  <p className="font-sans text-foreground/70 leading-relaxed max-w-xl">{milestone.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoMoment() {
  return (
    <section className="py-20 md:py-32 bg-accent/40 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24, rotate: 2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto aspect-[16/9] w-full max-w-3xl bg-primary p-2 shadow-2xl"
        >
          <video
            src="/videos/enage-video-landscape.mp4"
            controls
            playsInline
            preload="metadata"
            aria-label="A video memory from JJ and Leonize"
            className="h-full w-full bg-[#192219] object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}

function Proposal() {
  return (
    <section className="py-20 md:py-32 bg-primary text-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #FAF7F2 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="font-script text-secondary text-5xl md:text-6xl mb-12">The Proposal</motion.h2>
          
          <motion.div variants={fadeUp} className="relative w-full max-w-3xl mx-auto mb-12">
            <div className="aspect-[4/3] md:aspect-[16/9] w-full overflow-hidden shadow-2xl p-2 md:p-4 bg-background transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <img src={imgProposal} alt="The proposal moment" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-4 text-4xl md:text-6xl text-secondary">"</div>
          </motion.div>
          
          <motion.p variants={fadeUp} className="font-serif text-xl md:text-3xl leading-relaxed max-w-2xl mx-auto italic text-background/90">
            A perfect moment surrounded by memories, leading to the easiest "yes" of a lifetime.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

const guesthouses = [
  { name: "Butlers Crown / Home Away Guest House", address: "78 Dr Yusuf Dadoo Avenue, Klerksdorp", note: "Closest — on the same road as the venue", mapQuery: "Butlers Crown Home Away Guest House, 78 Dr Yusuf Dadoo Avenue, Klerksdorp" },
  { name: "9 Wena Ave Guesthouse", address: "9 Wena Avenue, Klerksdorp", note: "Short distance from the venue", mapQuery: "9 Wena Ave Guesthouse, 9 Wena Avenue, Klerksdorp" },
  { name: "Ukarimu Guest House", address: "32 Marmer Street, Klerksdorp", note: "Comfortable local guesthouse", mapQuery: "Ukarimu Guest House, 32 Marmer Street, Klerksdorp" },
  { name: "The Willow Tree Guest House", address: "33 Dr Yusuf Dadoo Avenue, Wilkoppies", note: "On the same main road as the venue", mapQuery: "The Willow Tree Guest House, 33 Dr Yusuf Dadoo Avenue, Wilkoppies, Klerksdorp" },
  { name: "Villa Gracia Guesthouse", address: "Dr Yusuf Dadoo Avenue area, Klerksdorp", note: "Highly rated on Agoda", mapQuery: "Villa Gracia Guesthouse, Dr Yusuf Dadoo Avenue, Klerksdorp" },
  { name: "Gemstone Guest House Klerksdorp", address: "Klerksdorp", note: "±3.0 km from the venue", mapQuery: "Gemstone Guest House Klerksdorp" },
  { name: "AnnVilla Guest House", address: "Klerksdorp", note: "±3.2 km from the venue", mapQuery: "AnnVilla Guest House, Klerksdorp" },
  { name: "Villa Maria Guest Lodge", address: "Klerksdorp", note: "±3.5 km from the venue", mapQuery: "Villa Maria Guest Lodge, Klerksdorp" },
];

function Travel() {
  return (
    <section id="stay" className="scroll-mt-20 py-20 md:py-32 bg-accent/60 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} className="font-script text-secondary text-4xl md:text-5xl mb-2 block">Plan Your Stay</motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-primary mb-6">Where to Stay</motion.h2>
          <motion.p variants={fadeUp} className="font-sans text-foreground/70 leading-loose max-w-2xl mx-auto">
            The Whitehouse is at 163 Dr Yusuf Dadoo Avenue, Klerksdorp. We have listed some nearby guesthouses for your convenience — book early to secure your spot.
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {guesthouses.map((g, i) => (
            <motion.div
              key={g.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-background p-6 shadow-sm border-l-4 border-primary flex flex-col gap-1"
            >
              <div className="flex items-start justify-between gap-2">
                <p className="font-serif text-lg text-primary leading-snug">{g.name}</p>
                {i === 0 && (
                  <span className="shrink-0 text-[10px] uppercase tracking-widest bg-primary text-white px-2 py-0.5 font-sans">Closest</span>
                )}
              </div>
              <p className="font-sans text-sm text-foreground/60">{g.address}</p>
              <p className="font-sans text-xs text-secondary italic mt-1">{g.note}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(g.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 self-start border-b border-primary/50 pb-0.5 font-sans text-xs uppercase tracking-widest text-primary transition-colors hover:border-secondary hover:text-secondary"
                aria-label={`View ${g.name} on Google Maps`}
              >
                View on Google Maps ↗
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const dietaryOptions = [
  "None",
  "Vegetarian",
  "Vegan",
  "Halaal",
  "Gluten-free",
  "Food allergies",
  "Other",
];

function RadioCard({ name, value, checked, onChange, required, children }: {
  name: string; value: string; checked: boolean;
  onChange: (v: string) => void; required?: boolean; children: React.ReactNode;
}) {
  return (
    <label className={`flex items-center gap-3 px-4 py-3 border cursor-pointer transition-all duration-200 select-none ${checked ? "border-primary bg-primary/5 text-primary font-medium" : "border-border bg-background text-foreground/70 hover:border-primary/40"}`}>
      <span className={`w-4 h-4 shrink-0 rounded-full border-2 flex items-center justify-center transition-colors ${checked ? "border-primary" : "border-border"}`}>
        {checked && <span className="w-2 h-2 rounded-full bg-primary block" />}
      </span>
      <input type="radio" name={name} value={value} checked={checked} required={required} onChange={() => onChange(value)} className="sr-only" />
      <span className="font-sans text-sm leading-snug">{children}</span>
    </label>
  );
}

function CheckCard({ checked, onChange, children }: {
  checked: boolean; onChange: (v: boolean) => void; children: React.ReactNode;
}) {
  return (
    <label className={`flex items-center gap-3 px-4 py-3 border cursor-pointer transition-all duration-200 select-none ${checked ? "border-primary bg-primary/5 text-primary font-medium" : "border-border bg-background text-foreground/70 hover:border-primary/40"}`}>
      <span className={`w-4 h-4 shrink-0 border-2 flex items-center justify-center transition-colors ${checked ? "border-primary bg-primary" : "border-border"}`}>
        {checked && <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 10"><path d="M1.5 5l2.5 2.5 4.5-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>}
      </span>
      <input type="checkbox" checked={checked} onChange={e => onChange(e.target.checked)} className="sr-only" />
      <span className="font-sans text-sm leading-snug">{children}</span>
    </label>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <p className="font-serif text-lg text-primary mb-3">{children}</p>;
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 my-8">
      <div className="flex-1 h-px bg-border" />
      <span className="font-script text-secondary text-2xl shrink-0">{label}</span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

const rsvpDeadline = "20 December 2025";

function RSVPSection({ onOpen }: { onOpen: () => void }) {
  return (
    <section id="rsvp" className="scroll-mt-20 py-24 md:py-32 px-6 bg-primary text-white text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={stagger}
        className="max-w-xl mx-auto"
      >
        <motion.span variants={fadeUp} className="font-script text-secondary text-5xl block mb-4">Join Us</motion.span>
        <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl mb-6">Kindly Reply</motion.h2>
        <motion.p variants={fadeUp} className="font-sans text-white/70 mb-3 leading-relaxed">
          We cannot wait to celebrate with you. Please let us know if you will be joining us.
        </motion.p>
        <motion.p variants={fadeUp} className="font-sans text-white/50 text-xs mb-10 italic">
          Please RSVP before {rsvpDeadline} &mdash; only for guests listed on your invitation.
        </motion.p>
        <motion.div variants={fadeUp}>
          <button
            onClick={onOpen}
            className="bg-white text-primary px-12 py-4 font-sans text-sm uppercase tracking-[0.2em] hover:bg-accent active:scale-[0.98] transition-all duration-200 shadow-md min-h-[52px]"
          >
            RSVP
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

function RSVPPage({ onBack }: { onBack: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    attending: "",
    dietary: [] as string[],
    dietaryNote: "",
    song: [""],
    cryFirst: "",
    activity: "",
    message: "",
  });

  const set = (field: string, value: string) => setForm(f => ({ ...f, [field]: value }));

  const setSong = (index: number, value: string) => {
    setForm(f => ({ ...f, song: f.song.map((song, i) => i === index ? value : song) }));
  };

  const addSong = () => {
    setForm(f => ({ ...f, song: [...f.song, ""] }));
  };

  const removeSong = (index: number) => {
    setForm(f => ({
      ...f,
      song: f.song.length === 1 ? [""] : f.song.filter((_, i) => i !== index),
    }));
  };

  const toggleDietary = (option: string) => {
    setForm(f => {
      const has = f.dietary.includes(option);
      let next = has ? f.dietary.filter(d => d !== option) : [...f.dietary, option];
      if (option === "None" && !has) next = ["None"];
      if (option !== "None" && !has) next = next.filter(d => d !== "None");
      return { ...f, dietary: next };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    if (!name) {
      setSubmitError("Please enter your full name.");
      return;
    }
    if (form.attending !== "yes" && form.attending !== "no") {
      setSubmitError("Please select whether you will be attending.");
      return;
    }

    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone: form.phone,
          email: form.email,
          attending: form.attending,
          dietary: form.dietary.join(", "),
          dietaryNote: form.dietaryNote,
          song: form.song.map(song => song.trim()).filter(Boolean).join("\n"),
          cryFirst: form.cryFirst,
          activity: form.activity,
          message: form.message,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const data = await res.json().catch(() => ({}));
        setSubmitError((data as { error?: string })?.error || "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitError("Could not send your RSVP. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-[100dvh] bg-background text-foreground flex flex-col">
      {/* Page header */}
      <div className="bg-primary text-white px-6 py-5 flex items-center gap-4 sticky top-0 z-50 shadow-md">
        <button onClick={onBack} className="font-sans text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors flex items-center gap-2 min-h-[44px]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Back
        </button>
        <div className="flex-1 text-center">
          <span className="font-script text-secondary text-2xl">JJ &amp; Leonize</span>
        </div>
        <div className="w-16" />
      </div>

      <div className="flex-1 px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-script text-secondary text-4xl block mb-2">Join Us</span>
            <h1 className="font-serif text-4xl md:text-5xl text-primary mb-3">RSVP</h1>
            <p className="font-sans text-foreground/50 text-xs italic">Please only RSVP for the guests listed on your invitation.</p>
            <p className="font-sans text-secondary text-xs italic mt-2">Please RSVP before {rsvpDeadline}.</p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-accent/30 border border-border p-12 text-center shadow-sm"
            >
              <p className="font-script text-secondary text-5xl mb-4">Thank you!</p>
              <p className="font-serif text-xl text-primary mb-2">We cannot wait to celebrate with you!</p>
              <p className="font-sans text-foreground/50 text-sm mt-4">#FoordForever</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-background border border-border shadow-sm p-6 md:p-10 flex flex-col gap-0">

              <SectionDivider label="Guest Details" />
              <div className="flex flex-col gap-4">
                <div>
                  <label className="font-sans text-xs uppercase tracking-widest text-foreground/50 mb-1.5 block">Full Name *</label>
                  <input required value={form.name} onChange={e => set("name", e.target.value)}
                    placeholder="Your full name"
                    className="w-full border border-border px-4 py-3 font-sans text-sm bg-background focus:outline-none focus:border-primary transition-colors min-h-[44px]" />
                </div>
                <div>
                  <label className="font-sans text-xs uppercase tracking-widest text-foreground/50 mb-1.5 block">Contact Number</label>
                  <input type="tel" value={form.phone} onChange={e => set("phone", e.target.value)}
                    placeholder="+27 ..."
                    className="w-full border border-border px-4 py-3 font-sans text-sm bg-background focus:outline-none focus:border-primary transition-colors min-h-[44px]" />
                </div>
                <div>
                  <label className="font-sans text-xs uppercase tracking-widest text-foreground/50 mb-1.5 block">Email Address</label>
                  <input type="email" value={form.email} onChange={e => set("email", e.target.value)}
                    placeholder="you@example.com"
                    className="w-full border border-border px-4 py-3 font-sans text-sm bg-background focus:outline-none focus:border-primary transition-colors min-h-[44px]" />
                </div>
              </div>

              <SectionDivider label="Attendance" />
              <FieldLabel>Are you joining us for the best day ever?</FieldLabel>
              <div className="flex flex-col gap-2">
                <RadioCard name="attending" value="yes" checked={form.attending === "yes"} required onChange={v => set("attending", v)}>
                  Yes, I/we will be there
                </RadioCard>
                <RadioCard name="attending" value="no" checked={form.attending === "no"} required onChange={v => set("attending", v)}>
                  Sadly, I/we cannot attend
                </RadioCard>
              </div>

              {form.attending === "yes" && (
                <>
                  <SectionDivider label="Dietary" />
                  <FieldLabel>Do you have any dietary requirements or food allergies?</FieldLabel>
                  <div className="flex flex-col gap-2">
                    {dietaryOptions.map(opt => (
                      <CheckCard key={opt} checked={form.dietary.includes(opt)} onChange={() => toggleDietary(opt)}>
                        {opt}
                      </CheckCard>
                    ))}
                  </div>
                  <textarea
                    value={form.dietaryNote}
                    onChange={e => set("dietaryNote", e.target.value)}
                    placeholder="Any additional details about allergies or dietary needs..."
                    rows={3}
                    className="w-full border border-border px-4 py-3 font-sans text-sm bg-background focus:outline-none focus:border-primary transition-colors mt-3 resize-none"
                  />

                  <SectionDivider label="Dance Floor" />
                  <FieldLabel>Which songs will get you on the dance floor?</FieldLabel>
                  <div className="flex flex-col gap-3">
                    {form.song.map((song, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <input
                          value={song}
                          onChange={e => setSong(index, e.target.value)}
                          placeholder={index === 0 ? "Song title & artist..." : "Another song title & artist..."}
                          className="min-h-[44px] w-full border border-border bg-background px-4 py-3 font-sans text-sm transition-colors focus:border-primary focus:outline-none"
                        />
                        {form.song.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeSong(index)}
                            aria-label={`Remove song ${index + 1}`}
                            className="flex h-11 w-11 shrink-0 items-center justify-center border border-border font-sans text-xl text-foreground/50 transition-colors hover:border-primary hover:text-primary"
                          >
                            &minus;
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addSong}
                      className="self-start border-b border-primary pb-1 font-sans text-xs uppercase tracking-[0.16em] text-primary transition-colors hover:border-secondary hover:text-secondary"
                    >
                      + Add another song
                    </button>
                  </div>

                  <SectionDivider label="Just for Fun" />
                  <div className="flex flex-col gap-8">
                    <div>
                      <FieldLabel>Who do you think will cry first?</FieldLabel>
                      <div className="grid grid-cols-2 gap-2">
                        {["Bride", "Groom", "Both", "Neither"].map(opt => (
                          <RadioCard key={opt} name="cryFirst" value={opt} checked={form.cryFirst === opt} onChange={v => set("cryFirst", v)}>
                            {opt}
                          </RadioCard>
                        ))}
                      </div>
                    </div>
                    <div>
                      <FieldLabel>What will you most likely be doing at the wedding?</FieldLabel>
                      <div className="flex flex-col gap-2">
                        {["Dancing", "Taking photos", "Eating cake", "Crying happy tears", "All of the above"].map(opt => (
                          <RadioCard key={opt} name="activity" value={opt} checked={form.activity === opt} onChange={v => set("activity", v)}>
                            {opt}
                          </RadioCard>
                        ))}
                      </div>
                    </div>
                  </div>

                  <SectionDivider label="A Message for Us" />
                  <FieldLabel>Leave a message for the couple</FieldLabel>
                  <textarea
                    value={form.message}
                    onChange={e => set("message", e.target.value)}
                    placeholder="Words from the heart..."
                    rows={5}
                    className="w-full border border-border px-4 py-3 font-sans text-sm bg-background focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </>
              )}

              {form.attending === "no" && (
                <>
                  <SectionDivider label="A Message for Us" />
                  <FieldLabel>We'll miss you! Leave a message for the couple</FieldLabel>
                  <textarea
                    value={form.message}
                    onChange={e => set("message", e.target.value)}
                    placeholder="Words from the heart..."
                    rows={4}
                    className="w-full border border-border px-4 py-3 font-sans text-sm bg-background focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </>
              )}

              <div className="mt-10 flex flex-col items-center gap-4">
                {submitError && (
                  <p className="font-sans text-sm text-red-600 text-center">{submitError}</p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full md:w-auto bg-primary text-white px-12 py-4 font-sans text-sm uppercase tracking-[0.2em] hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 shadow-md min-h-[52px] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending…" : form.attending === "no" ? "Send Response" : "Count me in!"}
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function playRevealSound() {
  try {
    const AudioContextConstructor =
      window.AudioContext ??
      (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;

    if (!AudioContextConstructor) return;

    const audioContext = new AudioContextConstructor();
    const now = audioContext.currentTime;
    const masterGain = audioContext.createGain();

    masterGain.gain.setValueAtTime(0.0001, now);
    masterGain.gain.exponentialRampToValueAtTime(0.18, now + 0.1);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.25);
    masterGain.connect(audioContext.destination);

    const notes = [
      { frequency: 523.25, start: 0, duration: 0.72 },
      { frequency: 659.25, start: 0.14, duration: 0.78 },
      { frequency: 783.99, start: 0.28, duration: 0.86 },
      { frequency: 1046.5, start: 0.44, duration: 1.05 },
    ];

    notes.forEach(({ frequency, start, duration }) => {
      const oscillator = audioContext.createOscillator();
      const noteGain = audioContext.createGain();
      const noteStart = now + start;

      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(frequency, noteStart);
      oscillator.detune.setValueAtTime(-4, noteStart);

      noteGain.gain.setValueAtTime(0.0001, noteStart);
      noteGain.gain.exponentialRampToValueAtTime(0.15, noteStart + 0.025);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, noteStart + duration);

      oscillator.connect(noteGain);
      noteGain.connect(masterGain);
      oscillator.start(noteStart);
      oscillator.stop(noteStart + duration + 0.05);
    });

    const sparkle = audioContext.createOscillator();
    const sparkleGain = audioContext.createGain();
    const sparkleStart = now + 0.48;

    sparkle.type = "triangle";
    sparkle.frequency.setValueAtTime(1567.98, sparkleStart);
    sparkle.frequency.exponentialRampToValueAtTime(2093, sparkleStart + 0.42);
    sparkleGain.gain.setValueAtTime(0.0001, sparkleStart);
    sparkleGain.gain.exponentialRampToValueAtTime(0.07, sparkleStart + 0.035);
    sparkleGain.gain.exponentialRampToValueAtTime(0.0001, sparkleStart + 0.52);

    sparkle.connect(sparkleGain);
    sparkleGain.connect(masterGain);
    sparkle.start(sparkleStart);
    sparkle.stop(sparkleStart + 0.55);

    window.setTimeout(() => void audioContext.close(), 1500);
  } catch {
    // The invitation still opens if Web Audio is unavailable.
  }
}

function EnvelopeWelcome({ onOpen }: { onOpen: () => void }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;
    playRevealSound();
    setIsOpening(true);
    window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      onOpen();
    }, 950);
  };

  return (
    <motion.section
      className="envelope-welcome"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, transition: { duration: 0.4 } }}
    >
      <img className="welcome-baby-breath welcome-baby-breath-left" src="/images/baby-breath-cutout.png" alt="" aria-hidden="true" />
      <img className="welcome-baby-breath welcome-baby-breath-right" src="/images/baby-breath-cutout.png" alt="" aria-hidden="true" />
      <div className={`welcome-envelope ${isOpening ? "is-opening" : ""}`}>
        <div className="welcome-letter" aria-hidden="true">
          <div className="welcome-letter-inner">
            <span className="font-script text-5xl md:text-7xl text-primary">JJ &amp; Leonize</span>
            <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.3em] text-secondary">20 March 2027</span>
          </div>
        </div>
        <div className="welcome-envelope-back" aria-hidden="true" />
        <div className="welcome-envelope-pocket" aria-hidden="true" />
        <div className="welcome-envelope-flap" aria-hidden="true" />
        <button
          type="button"
          className="welcome-seal"
          onClick={handleOpen}
          disabled={isOpening}
          aria-label="Open the wedding invitation"
        >
          <span className="seal-ornament seal-ornament-top">❧</span>
          <span className="seal-monogram"><span>J</span><small>&amp;</small><span>L</span></span>
          <span className="seal-ornament seal-ornament-bottom">❧</span>
        </button>
      </div>

      <motion.p
        className="mt-10 font-sans text-xs uppercase tracking-[0.3em] text-white/75"
        animate={{ opacity: isOpening ? 0 : 1 }}
      >
        Click the seal to open
      </motion.p>
    </motion.section>
  );
}

function Footer() {
  return (
    <footer className="py-16 text-center bg-primary text-background border-t-4 border-secondary">
      <div className="flex flex-col items-center justify-center">
        <p className="font-script text-5xl md:text-6xl mb-6">JJ &amp; Leonize</p>
        <div className="mb-8 bg-background/10 backdrop-blur-sm px-6 py-2 rounded-full border border-background/20">
          <span className="font-sans tracking-[0.2em] text-background uppercase text-sm">#FoordForever</span>
        </div>
        <p className="font-sans text-xs uppercase tracking-widest text-background/60">20 March 2027 &mdash; The Whitehouse</p>
      </div>
    </footer>
  );
}

export default function App() {
  const [showRSVP, setShowRSVP] = useState(false);
  const [invitationOpened, setInvitationOpened] = useState(false);

  const openRSVP = () => {
    setShowRSVP(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeRSVP = () => {
    setShowRSVP(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (showRSVP) {
    return <RSVPPage onBack={closeRSVP} />;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      {!invitationOpened ? (
        <EnvelopeWelcome key="envelope-welcome" onOpen={() => setInvitationOpened(true)} />
      ) : (
        <motion.div
          key="wedding-site"
          initial={{ y: "100vh", opacity: 0, scale: 0.96 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="min-h-[100dvh] bg-background text-foreground antialiased selection:bg-secondary/20 overflow-x-hidden w-full flex flex-col"
        >
          <Hero />
          <SectionNav onOpenRSVP={openRSVP} />
          <Invitation />
          <Details />
          <Story />
          <VideoMoment />
          <Proposal />
          <Travel />
          <RSVPSection onOpen={openRSVP} />
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
