import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/coach-stance.jpg";
import glovesImg from "@/assets/gloves.jpg";
import kidsImg from "@/assets/kids-class.jpg";
import bagImg from "@/assets/heavybag.jpg";
import gymBagsImg from "@/assets/gym-bags.jpg";
import gymRingImg from "@/assets/gym-ring.jpg";
import gymBeltsImg from "@/assets/gym-belts.jpg";
import coachPortraitImg from "@/assets/coach-portrait.jpg";
import coachBeltImg from "@/assets/coach-belt.jpg";
import coachStanceImg from "@/assets/coach-stance.jpg";
import coachKickImg from "@/assets/coach-kick.jpg";
import bannerImg from "@/assets/banner-programs.jpg";
import coachWbcBeltImg from "@/assets/coach-wbc-belt.jpg";
import coachBeltsStackImg from "@/assets/coach-belts-stack.jpg";
import coachWarriorsBeltImg from "@/assets/coach-warriors-belt.jpg";
import jeremiahImg from "@/assets/coach-jeremiah.jpg";
import maxImg from "@/assets/coach-max.jpg";
import iraImg from "@/assets/coach-ira.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const programs = [
  { tag: "01", title: "Muay Thai", slug: "muay-thai", desc: "The art of eight limbs. Punches, elbows, knees and kicks — taught by a world champion.", img: glovesImg },
  { tag: "02", title: "MMA", slug: "mma", desc: "Striking, clinch and ground game blended into one complete fighter's toolkit.", img: bannerImg },
  { tag: "03", title: "Brazilian Jiu-Jitsu", slug: "bjj", desc: "Leverage, technique and control. Dominate on the ground — gi and no-gi.", img: gymBagsImg },
  { tag: "04", title: "Kickboxing", slug: "kickboxing", desc: "Sharpen striking, footwork and conditioning. All levels welcome.", img: bagImg },
  { tag: "05", title: "Women's Fitboxing", slug: "womens", desc: "A welcoming, women-only space to learn striking, build strength and gain real confidence.", img: gymRingImg },
  { tag: "06", title: "Kids Program", slug: "kids", desc: "Discipline, confidence and respect. Safe, structured classes for ages 6–14.", img: kidsImg },
  { tag: "07", title: "Competitive Fighters", slug: "competitive", desc: "Friday additional training for athletes and competitors preparing for the ring.", img: gymBeltsImg },
];

const reviews = [
  { name: "Liam Pekarev", text: "Best gym, super nice and knowledgeable coach! The coach also incorporates factors from wrestling and jiu-jitsu. On top of reviewing many street tactics and real life situations. Highly recommend!" },
  { name: "Siarhei Sakovich", text: "My son has been training with this Muay Thai coach and we are very happy. The coach is professional, supportive, and great with kids. I can see real progress in my son's skills and confidence." },
  { name: "Olya Nasennik", text: "I've been training with Dima Varec and he's an incredible coach. Very professional, knowledgeable, and truly dedicated. Every session is focused, challenging, and motivating." },
  { name: "Evgeny Kotin", text: "I've trained with many coaches, but never seen such a rare combination of professionalism, deep knowledge, and genuine personal involvement. The approach is truly individual and effective." },
];

const classSchedules: { slug: string; title: string; price?: string; sessions: { day: string; time: string; note?: string }[] }[] = [
  { slug: "mma", title: "MMA", price: "$220 / month", sessions: [
    { day: "Tuesday", time: "5:00 PM" },
    { day: "Thursday", time: "5:00 PM" },
    { day: "Saturday", time: "2:00 PM" },
  ]},
  { slug: "muay-thai", title: "Muay Thai", price: "$220 / month", sessions: [
    { day: "Tuesday", time: "7:00 PM" },
    { day: "Thursday", time: "7:00 PM" },
    { day: "Saturday", time: "12:00 PM" },
  ]},
  { slug: "kickboxing", title: "Kickboxing", price: "$220 / month", sessions: [
    { day: "Tuesday", time: "7:00 PM" },
    { day: "Thursday", time: "7:00 PM" },
    { day: "Saturday", time: "12:00 PM" },
  ]},
  { slug: "bjj", title: "Brazilian Jiu-Jitsu", price: "$170 / month", sessions: [
    { day: "Wednesday", time: "6:00 PM" },
    { day: "Friday", time: "6:00 PM" },
  ]},
  { slug: "womens", title: "Women's Fitboxing", price: "$220 / month", sessions: [
    { day: "Monday", time: "10:00 AM" },
    { day: "Thursday", time: "10:00 AM" },
    { day: "Wednesday", time: "7:00 PM" },
    { day: "Saturday", time: "1:00 PM" },
  ]},
  { slug: "kids", title: "Kids Program", price: "$220 / month", sessions: [
    { day: "Tuesday", time: "6:00 PM", note: "Muay Thai" },
    { day: "Thursday", time: "6:00 PM", note: "Kickboxing" },
    { day: "Saturday", time: "11:00 AM", note: "Muay Thai & Kickboxing" },
  ]},
  { slug: "competitive", title: "Competitive Fighters", price: "Included with Unlimited", sessions: [
    { day: "Friday — Additional Training", time: "For athletes & competitors" },
  ]},
];

const membershipOptions = [
  { name: "Unlimited — All Classes", price: "$300 / month" },
  { name: "Single Discipline", price: "$220 / month" },
  { name: "BJJ & Grappling", price: "$170 / month" },
  { name: "Drop-in Session", price: "$30" },
  { name: "Private Training", price: "$100 / session" },
];

const assistantCoaches = [
  {
    name: "Jeremiah Wells",
    role: "BJJ & MMA",
    img: jeremiahImg,
    credentials: ["CFFC Champion", "Fights in the UFC", "BJJ Black Belt"],
    bio: "CFFC champion and active UFC fighter. Brings a high-level BJJ black belt game and pro MMA experience to the mats.",
  },
  {
    name: "Max",
    role: "MMA",
    img: maxImg,
    credentials: ["World MMA Champion (2019)", "World Championship Silver Medalist (2021)", "International Master of Sports", "Pro Record: 6–1"],
    bio: "World MMA Champion and International Master of Sports. A professional fighter with a 6–1 record who coaches with the same intensity he competes with.",
  },
  {
    name: "Ira",
    role: "Kickboxing & Conditioning",
    img: iraImg,
    credentials: ["Candidate Master of Sports — Kickboxing", "National & International Medalist", "Master of Sports — Rhythmic Gymnastics", "Belarus National Team"],
    bio: "Candidate Master of Sports in kickboxing and Master of Sports in rhythmic gymnastics — a champion and medalist at national and international competitions, and a former member of the Belarus National Team.",
  },
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
            <a href="#gallery" className="hover:text-blood transition">Gym</a>
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
        <img src={heroImg} alt="Coach Dzmitry Varats — WBC Muay Thai world champion" width={1600} height={1200} className="absolute inset-0 w-full h-full object-cover object-top opacity-60" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.08 0 0 / 0.55) 0%, oklch(0.08 0 0 / 0.35) 40%, oklch(0.08 0 0 / 0.95) 100%)" }} />
        <div className="absolute top-1/2 right-8 -translate-y-1/2 hidden lg:block writing-vertical">
          <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground" style={{ writingMode: "vertical-rl" }}>Huntingdon Valley · PA · Est. Varec Team</span>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pb-28 w-full">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-blood" />
            <span className="text-xs uppercase tracking-[0.3em] text-blood font-bold">WBC Muay Thai World Champion</span>
          </div>
          <h1 className="font-display text-[clamp(3.5rem,13vw,14rem)] leading-[0.82] tracking-tighter">
            Train <span className="text-stroke-blood">With</span><br/>
            A <span className="text-blood">Champion.</span>
          </h1>
          <p className="mt-8 text-sm md:text-base uppercase tracking-[0.3em] text-bone/80">Coached by Dzmitry Varats — <span className="text-blood font-bold">WBC Muay Thai Champion</span></p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
            <a href="#contact" className="px-8 py-4 bg-blood text-bone text-sm uppercase tracking-widest font-bold hover:translate-x-1 transition">
              Book a Free Class →
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
          <a href={`#schedule-${programs[0].slug}`} className="group relative md:col-span-7 md:row-span-2 aspect-[4/5] md:aspect-auto overflow-hidden bg-card">
            <img src={programs[0].img} alt={programs[0].title} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <span className="font-display text-xs text-blood">{programs[0].tag} / FLAGSHIP</span>
              <h3 className="font-display text-4xl md:text-6xl mt-2">{programs[0].title}</h3>
              <p className="text-muted-foreground mt-3 max-w-md">{programs[0].desc}</p>
              <span className="inline-block mt-4 text-xs uppercase tracking-widest text-blood font-bold">View Schedule →</span>
            </div>
          </a>

          {programs.slice(1).map((p) => (
            <a key={p.title} href={`#schedule-${p.slug}`} className="group relative md:col-span-5 lg:col-span-5 aspect-[16/10] overflow-hidden bg-card">
              <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <span className="font-display text-xs text-blood">{p.tag}</span>
                <div>
                  <h3 className="font-display text-3xl md:text-4xl">{p.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm max-w-xs">{p.desc}</p>
                  <span className="inline-block mt-3 text-[10px] uppercase tracking-widest text-blood font-bold">View Schedule →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* COACH */}
      <section id="coach" className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blood" />
            <img src={coachBeltImg} alt="Coach Dzmitry Varats with WBC championship belt" loading="lazy" className="relative w-full aspect-[4/5] object-cover object-top" />
          </div>
          <div className="md:col-span-7">
            <span className="text-xs uppercase tracking-[0.3em] text-blood font-bold">/ The Coach</span>
            <h2 className="mt-4 font-display text-5xl md:text-7xl leading-none">
              Dzmitry<br/><span className="text-stroke-blood">Varats.</span>
            </h2>
            <div className="mt-6 inline-flex items-center gap-3 border border-blood px-4 py-2">
              <span className="text-blood">★</span>
              <span className="text-xs uppercase tracking-[0.3em] font-bold">WBC Muay Thai · World Champion</span>
            </div>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
              World champion fighter and head coach. A rare combination of professionalism, deep knowledge and genuine personal involvement — every program is tailored, focused and effective. No matter your level.
            </p>
            <div className="mt-8 flex gap-3 flex-wrap">
              <a href="https://www.facebook.com/dzmitry.varats" target="_blank" rel="noreferrer" className="px-5 py-2.5 border border-border hover:border-blood text-xs uppercase tracking-widest font-bold transition">Facebook</a>
              <a href="https://www.instagram.com/fight_club_philly?igsh=MWJhMGNkNGEwaDdwbA==" target="_blank" rel="noreferrer" className="px-5 py-2.5 border border-border hover:border-blood text-xs uppercase tracking-widest font-bold transition">Instagram</a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div><div className="font-display text-4xl text-blood">WC</div><div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">World Champion</div></div>
              <div><div className="font-display text-4xl text-blood">5.0</div><div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Google Rating</div></div>
              <div><div className="font-display text-4xl text-blood">10+</div><div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Years Coaching</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* THE GYM */}
      <section id="the-gym" className="relative bg-background border-y border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-12">
            <div className="md:col-span-7">
              <span className="text-xs uppercase tracking-[0.3em] text-blood font-bold">/ The Gym</span>
              <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
                A real gym.<br/><span className="text-stroke-blood">Built to fight.</span>
              </h2>
            </div>
            <p className="md:col-span-5 text-muted-foreground text-lg leading-relaxed">
              Full-size boxing ring. A wall of Fairtex heavy bags. Mats, pads, and championship belts on the wall — everything you need to train like a fighter, in a space built for it.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative aspect-[4/3] overflow-hidden bg-card md:col-span-2 md:row-span-2 md:aspect-auto">
              <img src={gymBagsImg} alt="Wall of Fairtex heavy bags" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-card">
              <img src={gymRingImg} alt="Boxing ring and championship belts" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-card">
              <img src={gymBeltsImg} alt="Championship belts on display" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY — coach in action */}
      <section id="gallery" className="py-32 md:py-48 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-blood font-bold">/ In Action</span>
            <h2 className="mt-4 font-display text-5xl md:text-7xl leading-none">Coach<br/>In Motion.</h2>
          </div>
          <p className="max-w-md text-muted-foreground text-lg">Snapshots of Coach Dzmitry training, fighting and earning the gold.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="relative aspect-[4/5] overflow-hidden bg-card group">
            <img src={coachWbcBeltImg} alt="Coach Dzmitry with WBC Muay Thai championship belt" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition duration-700" />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-card group">
            <img src={coachWarriorsBeltImg} alt="Coach Dzmitry with Warriors Cup welterweight belt" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition duration-700" />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-card group">
            <img src={coachBeltsStackImg} alt="Coach Dzmitry holding multiple championship belts" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition duration-700" />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-card group">
            <img src={coachPortraitImg} alt="Coach Dzmitry Varats portrait" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition duration-700" />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-card group">
            <img src={coachKickImg} alt="Coach Dzmitry mid-kick training" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition duration-700" />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-card group">
            <img src={coachStanceImg} alt="Coach Dzmitry in fighting stance" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition duration-700" />
          </div>
        </div>
      </section>

      {/* ASSISTANT COACHES */}
      <section id="team" className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-blood font-bold">/ The Team</span>
              <h2 className="mt-4 font-display text-5xl md:text-7xl leading-none">
                The Coaching<br/><span className="text-stroke-blood">Roster.</span>
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground text-lg">
              Behind Coach Dzmitry stands a team of world-class champions — each bringing their own discipline, record and edge to the gym.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {assistantCoaches.map((c) => (
              <article key={c.name} className="relative bg-background border border-border hover:border-blood transition group flex flex-col">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={c.img} alt={`Coach ${c.name}`} loading="lazy" className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-blood font-bold">{c.role}</span>
                    <h3 className="font-display text-3xl md:text-4xl mt-1">{c.name}</h3>
                  </div>
                </div>
                <div className="p-6 md:p-7 flex-1 flex flex-col gap-5">
                  <ul className="space-y-2">
                    {c.credentials.map((cred) => (
                      <li key={cred} className="flex items-start gap-3 text-sm">
                        <span className="w-1.5 h-1.5 bg-blood mt-2 shrink-0" />
                        <span>{cred}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground leading-relaxed text-sm">{c.bio}</p>
                </div>
              </article>
            ))}
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
            <div className="text-xs uppercase tracking-widest text-blood font-bold mb-6">Class Schedules</div>
            <div className="border border-border bg-background/80 backdrop-blur divide-y divide-border">
              {classSchedules.map((cls) => (
                <div key={cls.slug} id={`schedule-${cls.slug}`} className="p-6 md:p-8 scroll-mt-28 target:bg-blood/5">
                  <div className="flex items-baseline justify-between gap-4 mb-4">
                    <h3 className="font-display text-2xl md:text-3xl uppercase">{cls.title}</h3>
                    {cls.price && (
                      <span className="text-xs uppercase tracking-widest text-blood font-bold whitespace-nowrap">{cls.price}</span>
                    )}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                    {cls.sessions.map((s, idx) => (
                      <div key={idx} className="flex items-center justify-between gap-4 border-b border-border/50 py-2">
                        <span className="flex items-center gap-3 text-sm">
                          <span className="w-1.5 h-1.5 bg-blood shrink-0" />
                          <span>
                            {s.day}
                            {s.note && <span className="block text-[11px] uppercase tracking-widest text-muted-foreground">{s.note}</span>}
                          </span>
                        </span>
                        <span className="font-display text-blood text-sm whitespace-nowrap">{s.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Schedule subject to change. Call ahead to confirm your first class — first session is on us.
            </p>

            <div className="mt-10 border border-border bg-background/80 backdrop-blur p-6 md:p-8">
              <div className="flex items-baseline justify-between mb-5">
                <h3 className="font-display text-2xl md:text-3xl uppercase">Membership</h3>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Pricing</span>
              </div>
              <div className="divide-y divide-border/50">
                {membershipOptions.map((m) => (
                  <div key={m.name} className="flex items-center justify-between gap-4 py-3">
                    <span className="text-sm">{m.name}</span>
                    <span className="font-display text-blood text-sm whitespace-nowrap">{m.price}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-border flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs uppercase tracking-widest">
                <span className="text-blood font-bold">★ First class free</span>
                <span className="text-muted-foreground">Family discount · 20% off second member</span>
              </div>
            </div>
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
