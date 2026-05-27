import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Images
import imgHero from "@assets/image_1779863607998.png";
import imgWine from "@assets/image_1779863650532.png";
import imgDetails from "@assets/image_1779863666129.png";
import imgProposal from "@assets/image_1779863655562.png";
import imgGallery1 from "@assets/image_1779863578646.png";
import imgGallery2 from "@assets/image_1779863595305.png";
import imgGallery3 from "@assets/image_1779863617881.png";
import imgGallery4 from "@assets/image_1779863625991.png";
import imgGallery5 from "@assets/image_1779863632913.png";
import imgGallery6 from "@assets/image_1779863644908.png";

const fadeUp = {
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

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden bg-primary flex items-center justify-center">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0 hidden md:block"
      >
        <img 
          src={imgHero} 
          alt="JJ and Leonize in garden" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
      </motion.div>
      <div className="absolute inset-0 z-0 md:hidden">
        <img 
          src={imgHero} 
          alt="JJ and Leonize in garden" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/50 mix-blend-multiply" />
      </div>
      
      <div className="relative z-10 text-center px-4 w-full flex flex-col items-center pt-20 pb-12 mix-blend-normal">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex flex-col items-center w-full"
        >
          <motion.div variants={fadeUp} className="mb-4 md:mb-8 bg-background/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-background/20">
            <span className="text-sm font-sans tracking-[0.2em] text-background uppercase">#FoordForever</span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-[clamp(4rem,15vw,9rem)] leading-[0.8] text-background font-script drop-shadow-xl py-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
            <span>JJ</span> 
            <span className="text-secondary text-[clamp(3rem,10vw,6rem)]">&amp;</span> 
            <span>Leonize</span>
          </motion.h1>
          
          <motion.div variants={fadeUp} className="mt-8 flex flex-col md:flex-row items-center gap-3 md:gap-8 text-sm md:text-base uppercase tracking-[0.2em] font-sans text-background/90 bg-primary/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none py-4 px-8 rounded-xl md:rounded-none w-full max-w-sm md:max-w-none">
            <span>20 March 2027</span>
            <div className="w-1.5 h-1.5 bg-secondary rounded-full hidden md:block" />
            <div className="w-12 h-[1px] bg-secondary/50 block md:hidden" />
            <span>The Whitehouse</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
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
          <div className="mx-4 text-secondary text-2xl font-serif italic">&</div>
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
    <section className="py-20 md:py-32 bg-accent/40 relative overflow-hidden">
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
              <h3 className="uppercase tracking-widest text-xs md:text-sm text-secondary font-semibold mb-4 border-b border-border pb-3">The Ceremony</h3>
              <p className="font-serif text-2xl md:text-3xl text-primary mb-3">The Whitehouse</p>
              <p className="text-foreground/80 leading-relaxed mb-4">Saturday, 20 March 2027<br/>Ceremony begins at 15:00<br/><span className="italic text-sm text-foreground/60">(Bride walks in promptly at 15:00)</span></p>
              <button className="text-xs uppercase tracking-widest border-b border-primary text-primary pb-1 hover:text-secondary hover:border-secondary transition-colors font-medium">View Map</button>
            </motion.div>
            
            <motion.div variants={fadeUp} className="bg-background p-8 shadow-sm border-t-4 border-secondary">
              <h3 className="uppercase tracking-widest text-xs md:text-sm text-secondary font-semibold mb-4 border-b border-border pb-3">Reception to Follow</h3>
              <p className="font-serif text-2xl md:text-3xl text-primary mb-3">The Estate Grounds</p>
              <p className="text-foreground/80 leading-relaxed">Cocktails, dinner, and dancing under the stars immediately following the ceremony.</p>
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
    <section className="py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16 md:mb-24"
        >
          <motion.span variants={fadeUp} className="font-script text-secondary text-4xl md:text-5xl mb-2 block">Our Story</motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-primary mb-6">A Beautiful Journey</motion.h2>
          <motion.p variants={fadeUp} className="font-sans text-foreground/70 leading-loose max-w-2xl mx-auto px-4">
            From our first meeting to this beautiful moment, every step has been an adventure. We've built a life filled with laughter, support, and deep love. Here are a few glimpses of our journey together.
          </motion.p>
        </motion.div>

        {/* Desktop Gallery */}
        <div className="hidden md:grid grid-cols-3 gap-6 auto-rows-[250px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="row-span-2 col-span-2 relative group overflow-hidden"
          >
            <img src={imgGallery1} alt="Dancing in garden" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="row-span-1 col-span-1 relative group overflow-hidden"
          >
            <img src={imgGallery2} alt="Showing ring" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="row-span-2 col-span-1 relative group overflow-hidden"
          >
            <img src={imgGallery3} alt="Fist pump" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="row-span-1 col-span-1 relative group overflow-hidden"
          >
            <img src={imgGallery4} alt="Bridal carry" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            className="row-span-1 col-span-1 relative group overflow-hidden"
          >
            <img src={imgGallery6} alt="Laughing by river" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
          </motion.div>
        </div>

        {/* Mobile Gallery */}
        <div className="flex flex-col gap-6 md:hidden">
          <img src={imgGallery1} alt="Dancing in garden" className="w-full h-auto aspect-square object-cover shadow-sm" />
          <p className="text-center font-serif text-primary italic text-lg px-6">Every day with you is a dance.</p>
          <img src={imgGallery3} alt="Fist pump" className="w-full h-auto aspect-[4/5] object-cover shadow-sm" />
          <img src={imgGallery4} alt="Bridal carry" className="w-full h-auto aspect-square object-cover shadow-sm" />
          <p className="text-center font-serif text-primary italic text-lg px-6">Ready for our greatest adventure yet.</p>
          <img src={imgGallery2} alt="Showing ring" className="w-full h-auto aspect-[4/5] object-cover shadow-sm" />
          <img src={imgGallery6} alt="Laughing by river" className="w-full h-auto aspect-square object-cover shadow-sm" />
        </div>
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

function RSVP() {
  return (
    <section className="py-24 md:py-32 px-6 bg-background text-center border-t border-border/50">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="max-w-2xl mx-auto"
      >
        <motion.div variants={fadeUp} className="mb-8">
          <span className="font-script text-secondary text-4xl block mb-2">Join Us</span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary">Kindly Reply</h2>
        </motion.div>
        
        <motion.p variants={fadeUp} className="font-sans text-foreground/70 mb-10 max-w-md mx-auto">
          We eagerly await your response. Please let us know if you'll be joining us by the first of February.
        </motion.p>
        
        <motion.div variants={fadeUp}>
          <button className="bg-primary text-primary-foreground px-10 py-4 uppercase tracking-[0.2em] text-sm hover:bg-primary/90 transition-colors duration-300 shadow-md font-medium w-full md:w-auto min-h-[44px]">
            RSVP Online
          </button>
        </motion.div>
      </motion.div>
    </section>
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
  return (
    <div className="min-h-[100dvh] bg-background text-foreground antialiased selection:bg-secondary/20 overflow-x-hidden w-full flex flex-col">
      <Hero />
      <Invitation />
      <Details />
      <Story />
      <Proposal />
      <RSVP />
      <Footer />
    </div>
  );
}
