import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-background flex items-center justify-center">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/images/hero.png" 
          alt="Conservatory at dusk" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/40 mix-blend-multiply" />
      </motion.div>
      
      <div className="relative z-10 text-center px-6 mix-blend-normal">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex flex-col items-center"
        >
          <motion.span variants={fadeUp} className="text-sm uppercase tracking-[0.3em] mb-6 text-foreground/80 font-sans">
            Please join us for the wedding of
          </motion.span>
          
          <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl lg:text-9xl font-serif italic font-light mb-8">
            Olivia <span className="font-script text-primary text-5xl md:text-7xl lg:text-8xl mx-2">&</span> James
          </motion.h1>
          
          <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-center gap-4 md:gap-12 text-sm uppercase tracking-[0.2em] font-sans">
            <span>September 13, 2026</span>
            <div className="w-1 h-1 bg-primary rounded-full hidden md:block" />
            <span>Napa Valley, California</span>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-foreground/50 text-sm tracking-widest uppercase flex flex-col items-center gap-4"
      >
        <span>Scroll</span>
        <div className="w-[1px] h-12 bg-foreground/20 overflow-hidden relative">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-foreground/60 absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}

function Invitation() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-4xl mx-auto text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="flex flex-col items-center"
      >
        <motion.div variants={fadeUp} className="mb-12">
          <img src="/images/details.png" alt="Wax seal" className="w-24 h-24 rounded-full object-cover mx-auto shadow-sm" />
        </motion.div>
        
        <motion.p variants={fadeUp} className="font-serif text-2xl md:text-4xl leading-relaxed md:leading-relaxed text-foreground mb-12 italic">
          "Together with our families, we joyfully invite you to share in our celebration of love, commitment, and the beginning of our forever."
        </motion.p>
        
        <motion.div variants={fadeUp} className="max-w-xl mx-auto font-sans text-foreground/70 leading-loose">
          We are so incredibly grateful for the love and support of our family and friends. We couldn't imagine taking this step without you by our side.
        </motion.div>
      </motion.div>
    </section>
  );
}

function Details() {
  return (
    <section className="py-24 bg-accent/30 relative">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <span className="text-primary font-script text-4xl mb-4 block">The Details</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-12">When & Where</h2>
          </motion.div>
          
          <div className="space-y-12 font-sans">
            <motion.div variants={fadeUp}>
              <h3 className="uppercase tracking-widest text-sm text-foreground/50 mb-3 border-b border-border pb-2">The Ceremony</h3>
              <p className="font-serif text-2xl mb-2">The Grand Conservatory</p>
              <p className="text-foreground/70">Saturday, September 13, 2026<br/>Four o'clock in the afternoon</p>
              <p className="text-foreground/70 mt-2">123 Vineyard Lane<br/>Napa Valley, CA 94558</p>
            </motion.div>
            
            <motion.div variants={fadeUp}>
              <h3 className="uppercase tracking-widest text-sm text-foreground/50 mb-3 border-b border-border pb-2">Reception to Follow</h3>
              <p className="font-serif text-2xl mb-2">The Estate Grounds</p>
              <p className="text-foreground/70">Cocktails, dinner, and dancing under the stars immediately following the ceremony.</p>
              <p className="text-foreground/70 mt-2">Black Tie Optional</p>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative h-[600px] w-full"
        >
          <img src="/images/venue.png" alt="Venue" className="w-full h-full object-cover shadow-xl" />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
        </motion.div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="md:w-1/2 relative"
        >
           <div className="aspect-[3/4] w-full md:w-4/5 ml-auto relative z-10">
             <img src="/images/couple.png" alt="Couple" className="w-full h-full object-cover shadow-2xl" />
             <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
           </div>
           <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-accent/50 z-0" />
        </motion.div>
        
        <motion.div 
          className="md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="font-script text-primary text-4xl mb-4 block">Our Story</motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl mb-8">A Decade in the Making</motion.h2>
          <motion.p variants={fadeUp} className="font-sans text-foreground/70 leading-loose mb-6">
            From a chance meeting at a crowded coffee shop in San Francisco to a sunset proposal in Kyoto, our journey has been the greatest adventure of our lives. 
          </motion.p>
          <motion.p variants={fadeUp} className="font-sans text-foreground/70 leading-loose">
            We've shared countless laughs, supported each other through challenges, and built a life together filled with joy. We cannot wait to celebrate this next chapter with all of our favorite people in one place.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function Travel() {
  return (
    <section className="py-32 px-6 bg-accent/20">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="font-script text-primary text-4xl mb-4 block">Travel & Accommodations</motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl mb-6">Where to Stay</motion.h2>
          <motion.p variants={fadeUp} className="max-w-2xl mx-auto font-sans text-foreground/70 leading-loose">
            We have reserved a block of rooms at several local hotels for your convenience. Please book early, as September is harvest season in Napa Valley.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="relative h-[400px] w-full order-2 md:order-1"
          >
            <img src="/images/travel.png" alt="Hotel exterior" className="w-full h-full object-cover shadow-lg" />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-10 order-1 md:order-2"
          >
            <motion.div variants={fadeUp}>
              <h3 className="font-serif text-2xl mb-2">The Estate Resort</h3>
              <p className="font-sans text-foreground/70 mb-4">Our primary room block. Transportation to and from the venue will be provided from this location.</p>
              <button className="text-primary text-sm uppercase tracking-widest border-b border-primary pb-1 hover:text-foreground hover:border-foreground transition-colors">Book a Room</button>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h3 className="font-serif text-2xl mb-2">Auberge du Soleil</h3>
              <p className="font-sans text-foreground/70 mb-4">A luxurious alternative just five minutes down the road, offering spectacular valley views.</p>
              <button className="text-primary text-sm uppercase tracking-widest border-b border-primary pb-1 hover:text-foreground hover:border-foreground transition-colors">View Details</button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Registry() {
  return (
    <section className="py-32 px-6 border-b border-border/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="flex flex-col items-center"
        >
          <motion.div variants={fadeUp} className="mb-12">
            <img src="/images/registry.png" alt="Gift box" className="w-32 h-32 object-cover rounded-sm shadow-sm" />
          </motion.div>
          
          <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl mb-8">Gift Registry</motion.h2>
          
          <motion.p variants={fadeUp} className="font-sans text-foreground/70 leading-loose max-w-2xl mx-auto mb-10">
            Your presence at our wedding is the greatest gift of all. If it is your wish to bless us with a gift, we have created a registry for our future home together.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-6">
            <button className="bg-transparent border border-border px-8 py-3 text-sm uppercase tracking-widest hover:bg-border/30 transition-colors">Zola</button>
            <button className="bg-transparent border border-border px-8 py-3 text-sm uppercase tracking-widest hover:bg-border/30 transition-colors">Crate & Barrel</button>
            <button className="bg-transparent border border-border px-8 py-3 text-sm uppercase tracking-widest hover:bg-border/30 transition-colors">Williams Sonoma</button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function RSVP() {
  return (
    <section className="py-32 px-6 bg-primary text-primary-foreground text-center">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="max-w-2xl mx-auto"
      >
        <motion.h2 variants={fadeUp} className="font-serif text-5xl md:text-6xl mb-6">Kindly Reply</motion.h2>
        <motion.p variants={fadeUp} className="font-sans uppercase tracking-widest text-sm opacity-80 mb-12">
          By the first of August
        </motion.p>
        
        <motion.div variants={fadeUp}>
          <button className="bg-primary-foreground text-primary px-12 py-4 uppercase tracking-[0.2em] text-sm hover:bg-accent transition-colors duration-300 shadow-xl">
            RSVP Online
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-16 text-center bg-background">
      <p className="font-script text-4xl text-foreground/60 mb-6">Olivia & James</p>
      <p className="font-sans text-xs uppercase tracking-widest text-foreground/40">September 13, 2026 &mdash; Napa Valley</p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 overflow-x-hidden">
      <Hero />
      <Invitation />
      <Details />
      <Story />
      <Travel />
      <Registry />
      <RSVP />
      <Footer />
    </div>
  );
}
