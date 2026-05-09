import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/coach-kick.jpg";
import glovesImg from "@/assets/gloves.jpg";
import kidsImg from "@/assets/kids-class.jpg";
import bagImg from "@/assets/heavybag.jpg";
import gymBagsImg from "@/assets/gym-bags.jpg";
import gymRingImg from "@/assets/gym-ring.jpg";
import gymBeltsImg from "@/assets/gym-belts.jpg";
import coachPortraitImg from "@/assets/coach-portrait.jpg";
import coachBeltImg from "@/assets/coach-belt.jpg";
import coachStanceImg from "@/assets/coach-stance.jpg";
import bannerImg from "@/assets/banner-programs.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const programs = [
  { tag: "01", title: "Muay Thai", desc: "The art of eight limbs. Punches, elbows, knees and kicks — taught by a world champion.", img: glovesImg },
  { tag: "02", title: "MMA", desc: "Striking, clinch and ground game blended into one complete fighter's toolkit.", img: bannerImg },
  { tag: "03", title: "Brazilian Jiu-Jitsu", desc: "Leverage, technique and control. Dominate on the ground — gi and no-gi.", img: gymBagsImg },
  { tag: "04", title: "Kickboxing", desc: "Sharpen striking, footwork and conditioning. All levels welcome.", img: bagImg },
  { tag: "05", title: "Women's Class", desc: "A welcoming, women-only space to learn striking, build strength and gain real confidence.", img: gymRingImg },
  { tag: "06", title: "Kids Program", desc: "Discipline, confidence and respect. Safe, structured classes for ages 6–14.", img: kidsImg },
  { tag: "07", title: "Self-Defense & Fitboxing", desc: "Real-world tactics and high-energy conditioning. For every body, every goal.", img: gymBeltsImg },
];

const reviews = [
  { name: "Liam Pekarev", text: "Best gym, super nice and knowledgeable coach! The coach also incorporates factors from wrestling and jiu-jitsu. On top of reviewing many street tactics and real life situations. Highly recommend!" },
  { name: "Siarhei Sakovich", text: "My son has been training with this Muay Thai coach and we are very happy. The coach is professional, supportive, and great with kids. I can see real progress in my son's skills and confidence." },
  { name: "Olya Nasennik", text: "I've been training with Dima Varec and he's an incredible coach. Very professional, knowledgeable, and truly dedicated. Every session is focused, challenging, and motivating." },
  { name: "Evgeny Kotin", text: "I've trained with many coaches, but never seen such a rare combination of professionalism, deep knowledge, and genuine personal involvement. The approach is truly individual and effective." },
];

const schedule = [
  { day: "Mon / Wed / Fri", classes: ["Kids — 5:00 PM", "Adults Muay Thai — 6:00 PM", "Women's Class — 7:15 PM"] },
  { day: "Tue / Thu", classes: ["Kickboxing — 6:30 PM", "MMA & BJJ — 7:30 PM"] },
  { day: "Saturday", classes: ["Open Mat — 10:00 AM", "Self-Defense — 11:30 AM"] },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-grain">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2">
            <span className="w-2 h-8 bg-blood" />
            <span className="font-display text-sm tracking-widest">FIGHT CLUB<br/><span className="text-blood">VAREC TEAM</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-semibold">
            <a href="#programs" className="hover:text-blood transition">Programs</a>
            <a href="#coach" className="hover:text-blood transition">Coach</a>
            <a href="#reviews" className="hover:text-blood transition">Reviews</a>
            <a href="#contact" className="hover:text-blood transition">Visit</a>
          </nav>
          <a href="tel:+12156096765" className="px-5 py-2.5 bg-blood text-bone text-xs uppercase tracking-widest font-bold hover:opacity-90 transition">
            Book Trial
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-[110vh] flex items-end pt-24 overflow-hidden">
        <img src={heroImg} alt="Dzmitry Varats — WBC Muay Thai Fighter of the Month" width={1600} height={1200} className="absolute inset-0 w-full h-full object-cover object-top opacity-55" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.08 0 0 / 0.4) 0%, oklch(0.08 0 0 / 0.2) 40%, oklch(0.08 0 0 / 0.95) 100%)" }} />
        <div className="absolute top-1/2 right-8 -translate-y-1/2 hidden lg:block writing-vertical">
          <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground" style={{ writingMode: "vertical-rl" }}>Huntingdon Valley · PA · Est. Varec Team</span>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pb-28 w-full">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-blood" />
            <span className="text-xs uppercase tracking-[0.3em] text-blood font-bold">WBC Muay Thai · MMA · BJJ · Kickboxing</span>
          </div>
          <h1 className="font-display text-[clamp(3.5rem,13vw,14rem)] leading-[0.82] tracking-tighter">
            Train <span className="text-stroke-blood">Like</span><br/>
            You <span className="text-blood">Mean</span> It.
          </h1>
          <p className="mt-8 text-sm md:text-base uppercase tracking-[0.3em] text-bone/80">Coached by Dzmitry Varats — <span className="text-blood font-bold">WBC Muay Thai Champion</span></p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
            <a href="#contact" className="px-8 py-4 bg-blood text-bone text-sm uppercase tracking-widest font-bold hover:translate-x-1 transition">
              Start Training →
            </a>
            <div className="flex items-center gap-3 text-sm">
              <div className="flex text-blood">★★★★★</div>
              <span className="text-muted-foreground">5.0 · 27 reviews on Google</span>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div className="border-y border-border bg-card overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-5 gap-12 font-display text-2xl">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12">
              <span>STRIKE HARD</span>
              <span className="text-blood">✕</span>
              <span className="text-stroke">DISCIPLINE</span>
              <span className="text-blood">✕</span>
              <span>RESPECT</span>
              <span className="text-blood">✕</span>
              <span className="text-stroke">RESILIENCE</span>
              <span className="text-blood">✕</span>
            </span>
          ))}
        </div>
      </div>

      {/* PROGRAMS — HERO + GRID */}
      <section id="programs" className="py-32 md:py-48 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-8 mb-16 items-end">
          <div className="md:col-span-7">
            <span className="text-xs uppercase tracking-[0.3em] text-blood font-bold">/ 01 Programs</span>
            <h2 className="mt-4 font-display text-5xl md:text-7xl leading-none">
              Built for <br/>every fighter.
            </h2>
          </div>
          <p className="md:col-span-5 text-muted-foreground text-lg leading-relaxed">
            From your first jab to advanced sparring — our programs blend Muay Thai with wrestling, jiu-jitsu and real-world self-defense. Train with intention, leave with skill.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* big featured */}
          <a href="#contact" className="group relative md:col-span-7 md:row-span-2 aspect-[4/5] md:aspect-auto overflow-hidden bg-card">
            <img src={programs[0].img} alt={programs[0].title} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <span className="font-display text-xs text-blood">{programs[0].tag} / FLAGSHIP</span>
              <h3 className="font-display text-4xl md:text-6xl mt-2">{programs[0].title}</h3>
              <p className="text-muted-foreground mt-3 max-w-md">{programs[0].desc}</p>
            </div>
          </a>

          {programs.slice(1).map((p) => (
            <a key={p.title} href="#contact" className="group relative md:col-span-5 lg:col-span-5 aspect-[16/10] overflow-hidden bg-card">
              <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <span className="font-display text-xs text-blood">{p.tag}</span>
                <div>
                  <h3 className="font-display text-3xl md:text-4xl">{p.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm max-w-xs">{p.desc}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CHAMPION STRIP — compact */}
      <section className="relative bg-background border-y border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <span className="text-xs uppercase tracking-[0.3em] text-blood font-bold">/ WBC Muay Thai · 2026</span>
            <h2 className="mt-4 font-display text-4xl md:text-6xl leading-none">
              World Champion.<br/><span className="text-stroke-blood">Your Coach.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Train under a WBC Muay Thai world champion — championship-level instruction, every single class.
            </p>
          </div>
          <div className="md:col-span-5 relative">
            <div className="absolute -top-3 -right-3 w-full h-full border-2 border-blood" />
            <img src={coachBeltImg} alt="Coach Dzmitry Varats with WBC championship belt" loading="lazy" className="relative w-full aspect-[4/5] object-cover object-top" />
          </div>
        </div>
      </section>

      {/* WOMEN'S CLASS */}
      <section id="womens" className="py-32 md:py-40 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6 relative order-2 md:order-1">
            <div className="absolute -top-3 -left-3 w-full h-full border-2 border-blood" />
            <img src={gymRingImg} alt="Women's training space at Fight Club Varec Team" loading="lazy" className="relative w-full aspect-[4/5] object-cover" />
          </div>
          <div className="md:col-span-6 order-1 md:order-2">
            <span className="text-xs uppercase tracking-[0.3em] text-blood font-bold">/ Women's Class</span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[0.95]">
              Strong.<br/><span className="text-stroke-blood">Skilled.</span><br/>Unshakeable.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              A dedicated women-only class built around striking fundamentals, conditioning and real self-defense. Beginner-friendly, supportive and seriously fun — no experience needed.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blood" /> Women-only environment with female training partners</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blood" /> Striking technique, fitness conditioning and self-defense</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blood" /> All levels — first class is free</li>
            </ul>
            <a href="#contact" className="mt-8 inline-block px-7 py-3.5 bg-blood text-bone text-xs uppercase tracking-widest font-bold hover:translate-x-1 transition">Try a Free Class →</a>
          </div>
        </div>
      </section>

      {/* COACH — slimmed */}
      <section id="coach" className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blood" />
            <img src={coachPortraitImg} alt="Coach Dzmitry Varats" loading="lazy" className="relative w-full aspect-[4/5] object-cover object-top" />
          </div>
          <div className="md:col-span-7">
            <span className="text-xs uppercase tracking-[0.3em] text-blood font-bold">/ The Coach</span>
            <h2 className="mt-4 font-display text-5xl md:text-7xl leading-none">
              Dzmitry<br/><span className="text-stroke-blood">Varats.</span>
            </h2>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
              World champion. Head coach. Every class is tailored, focused and built to bring out your best — whatever your level.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="https://www.facebook.com/dzmitry.varats" target="_blank" rel="noreferrer" className="px-5 py-2.5 border border-border hover:border-blood text-xs uppercase tracking-widest font-bold transition">Facebook</a>
              <a href="https://www.instagram.com/fight_club_philly?igsh=MWJhMGNkNGEwaDdwbA==" target="_blank" rel="noreferrer" className="px-5 py-2.5 border border-border hover:border-blood text-xs uppercase tracking-widest font-bold transition">Instagram</a>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-32 md:py-48 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-blood font-bold">/ Inside the Gym</span>
            <h2 className="mt-4 font-display text-5xl md:text-7xl leading-none">Where<br/>You'll Train.</h2>
          </div>
          <p className="max-w-md text-muted-foreground text-lg">A purpose-built ring, a wall of bags and a community that shows up. Step inside Fight Club Varec Team.</p>
        </div>
        <div className="grid md:grid-cols-12 gap-4">
          <div className="md:col-span-7 relative aspect-[4/3] overflow-hidden bg-card group">
            <img src={gymBagsImg} alt="Wall of Fairtex heavy bags inside Fight Club Varec Team" loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" />
          </div>
          <div className="md:col-span-5 relative aspect-[4/3] overflow-hidden bg-card group">
            <img src={coachStanceImg} alt="Coach Dzmitry in fighting stance" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition duration-700" />
          </div>
          <div className="md:col-span-5 relative aspect-[4/3] overflow-hidden bg-card group">
            <img src={gymBeltsImg} alt="Championship belts and ring at the gym" loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" />
          </div>
          <div className="md:col-span-7 relative aspect-[4/3] overflow-hidden bg-card group">
            <img src={gymRingImg} alt="The boxing ring and championship wall at Fight Club Varec Team" loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-32 md:py-48 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-blood font-bold">/ 03 Word on the street</span>
            <h2 className="mt-4 font-display text-5xl md:text-7xl leading-none">
              The People<br/>Have Spoken.
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="font-display text-6xl text-blood">5.0</div>
            <div>
              <div className="text-blood text-lg">★★★★★</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">27 Google Reviews</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {reviews.map((r, i) => (
            <article key={r.name} className="border border-border bg-card p-8 md:p-10 hover:border-blood transition group">
              <div className="flex items-center justify-between mb-6">
                <span className="font-display text-blood text-xs">/ {String(i + 1).padStart(2, "0")}</span>
                <div className="text-blood text-sm">★★★★★</div>
              </div>
              <p className="text-lg leading-relaxed text-foreground/90">"{r.text}"</p>
              <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                <span className="font-display text-sm uppercase">{r.name}</span>
                <span className="text-xs text-muted-foreground">Verified · Google</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT / SCHEDULE */}
      <section id="contact" className="relative bg-card border-t border-border">
        <div className="absolute inset-0 opacity-20">
          <img src={bagImg} alt="" loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-48 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <span className="text-xs uppercase tracking-[0.3em] text-blood font-bold">/ 04 Step Inside</span>
            <h2 className="mt-4 font-display text-5xl md:text-7xl leading-none">
              Come<br/>Train.
            </h2>
            <div className="mt-10 space-y-6">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Address</div>
                <a href="https://maps.google.com/?q=390+Red+Lion+Rd+Huntingdon+Valley+PA+19006" target="_blank" rel="noreferrer" className="block mt-1 text-lg hover:text-blood">
                  390 Red Lion Rd<br/>Huntingdon Valley, PA 19006
                </a>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Phone</div>
                <a href="tel:+12156096765" className="block mt-1 text-lg hover:text-blood">(215) 609-6765</a>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Hours</div>
                <p className="mt-1 text-lg">Mon–Sat · By class schedule<br/><span className="text-muted-foreground text-sm">Opens 9 AM</span></p>
              </div>
              <a href="tel:+12156096765" className="inline-block mt-4 px-8 py-4 bg-blood text-bone text-sm uppercase tracking-widest font-bold hover:translate-x-1 transition">
                Call to Book →
              </a>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="text-xs uppercase tracking-widest text-blood font-bold mb-6">Weekly Schedule</div>
            <div className="border border-border bg-background/80 backdrop-blur">
              {schedule.map((s, i) => (
                <div key={s.day} className={`grid grid-cols-1 md:grid-cols-3 gap-4 p-6 md:p-8 ${i !== schedule.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="font-display uppercase text-blood">{s.day}</div>
                  <div className="md:col-span-2 space-y-2">
                    {s.classes.map((c) => (
                      <div key={c} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-blood" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Schedule subject to change. Call ahead to confirm your first class — first session is on us.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-2 h-8 bg-blood" />
            <span className="font-display text-sm tracking-widest">FIGHT CLUB VAREC TEAM</span>
          </div>
          <div className="flex items-center gap-4 text-xs uppercase tracking-widest">
            <a href="https://www.facebook.com/dzmitry.varats" target="_blank" rel="noreferrer" className="hover:text-blood transition">Facebook</a>
            <span className="text-muted-foreground">·</span>
            <a href="https://www.instagram.com/fight_club_philly?igsh=MWJhMGNkNGEwaDdwbA==" target="_blank" rel="noreferrer" className="hover:text-blood transition">Instagram</a>
          </div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} · Huntingdon Valley, PA
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 40s linear infinite; }
      `}</style>
    </div>
  );
}
