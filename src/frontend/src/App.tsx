import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Brain,
  CheckCircle,
  ChevronRight,
  Flame,
  Gift,
  Leaf,
  Menu,
  ShieldCheck,
  Star,
  Target,
  Truck,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

const ORDER_URL = "https://citrusburns.us/";
const PRODUCT_IMAGE =
  "/assets/uploads/image-019d244a-6039-7216-89e6-b7d08c6c35bf-1.png";

function TopBar() {
  return (
    <div className="bg-brand-charcoal text-white text-center py-2 px-4 text-xs sm:text-sm font-medium">
      🚚 FREE SHIPPING on orders of 6 bottles&nbsp;&nbsp;|&nbsp;&nbsp;🛡️ 180-Day
      Money-Back Guarantee
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100"
      data-ocid="nav.panel"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Flame className="text-brand-orange w-7 h-7" />
          <span className="text-xl font-extrabold tracking-tight text-brand-charcoal">
            CitrusBurn<span className="text-brand-orange">™</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-gray-700">
          <button
            type="button"
            onClick={() => scrollTo("ingredient-section")}
            className="hover:text-brand-orange transition-colors"
            data-ocid="nav.link"
          >
            Ingredients
          </button>
          <button
            type="button"
            onClick={() => scrollTo("benefits-section")}
            className="hover:text-brand-orange transition-colors"
            data-ocid="nav.link"
          >
            Benefits
          </button>
          <button
            type="button"
            onClick={() => scrollTo("reviews-section")}
            className="hover:text-brand-orange transition-colors"
            data-ocid="nav.link"
          >
            Reviews
          </button>
          <button
            type="button"
            onClick={() => scrollTo("FAQ-section")}
            className="hover:text-brand-orange transition-colors"
            data-ocid="nav.link"
          >
            FAQ
          </button>
        </nav>

        <a
          href={ORDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex"
          data-ocid="nav.primary_button"
        >
          <Button className="bg-brand-orange hover:bg-brand-orange-dark text-white rounded-full px-6 font-bold uppercase text-sm">
            ORDER NOW
          </Button>
        </a>

        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 flex flex-col gap-3">
          <button
            type="button"
            onClick={() => scrollTo("ingredient-section")}
            className="text-left py-2 font-semibold text-gray-700"
          >
            Ingredients
          </button>
          <button
            type="button"
            onClick={() => scrollTo("benefits-section")}
            className="text-left py-2 font-semibold text-gray-700"
          >
            Benefits
          </button>
          <button
            type="button"
            onClick={() => scrollTo("reviews-section")}
            className="text-left py-2 font-semibold text-gray-700"
          >
            Reviews
          </button>
          <button
            type="button"
            onClick={() => scrollTo("FAQ-section")}
            className="text-left py-2 font-semibold text-gray-700"
          >
            FAQ
          </button>
          <a href={ORDER_URL} target="_blank" rel="noopener noreferrer">
            <Button className="bg-brand-orange hover:bg-brand-orange-dark text-white rounded-full w-full font-bold uppercase">
              ORDER NOW
            </Button>
          </a>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-orange-500 via-brand-orange to-orange-600 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="text-white z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold uppercase px-3 py-1 rounded-full mb-4">
            <Leaf className="w-3.5 h-3.5" /> Plant-Based • Natural • Non-GMO
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Clean, Plant-Based Support for Metabolism &amp; Fat Efficiency
          </h1>
          <p className="text-white/90 text-base md:text-lg mb-8 leading-relaxed">
            CitrusBurn is a natural thermogenic supplement formulated with
            plant-based ingredients to support healthy metabolism, efficient fat
            utilization, and steady energy — without harsh stimulants.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero.primary_button"
            >
              <Button className="bg-white text-brand-orange hover:bg-gray-100 rounded-full px-8 py-5 text-base font-bold shadow-lg w-full sm:w-auto">
                Visit Official Website <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </a>
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero.secondary_button"
            >
              <Button className="bg-brand-charcoal hover:bg-gray-800 text-white rounded-full px-8 py-5 text-base font-bold shadow-lg w-full sm:w-auto">
                Buy Now — $49/Bottle
              </Button>
            </a>
          </div>
          <div className="flex items-center gap-4 mt-6 text-white/80 text-sm">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> 180-Day Guarantee
            </span>
            <span className="flex items-center gap-1">
              <Truck className="w-4 h-4" /> Free Shipping
            </span>
          </div>
        </div>

        <div className="flex justify-center z-10">
          <img
            src={PRODUCT_IMAGE}
            alt="CitrusBurn supplement bottle"
            className="w-64 md:w-80 lg:w-96 drop-shadow-2xl object-contain"
            loading="eager"
          />
        </div>
      </div>

      {/* Orange wave divider */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          role="presentation"
        >
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

function FeatureIconRow() {
  const features = [
    { icon: <Zap className="w-8 h-8" />, label: "Boost Metabolism" },
    { icon: <Flame className="w-8 h-8" />, label: "Increases Energy" },
    { icon: <Target className="w-8 h-8" />, label: "Targets Stubborn Fat" },
    { icon: <Leaf className="w-8 h-8" />, label: "Natural Ingredients" },
  ];

  return (
    <section className="bg-white py-10 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-center text-xs uppercase tracking-widest font-bold text-brand-orange mb-6">
          FUEL YOUR JOURNEY
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: static list
              key={i}
              className="flex flex-col items-center gap-3 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-brand-beige flex items-center justify-center text-brand-orange">
                {f.icon}
              </div>
              <p className="font-bold text-sm text-brand-charcoal uppercase tracking-wide">
                {f.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatIsCitrusBurn() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs uppercase tracking-widest font-bold text-brand-orange mb-2">
            About The Product
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-charcoal mb-5">
            What Is CitrusBurn?
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              CitrusBurn is a plant-based dietary supplement developed to
              support natural fat metabolism and overall metabolic health. It is
              designed for adults seeking a practical and sustainable approach
              to weight management — without extreme restrictions or
              stimulant-heavy formulas.
            </p>
            <p>
              The formula includes research-backed ingredients such as Seville
              Orange Peel, Green Tea Extract, Ginger Root, and Red Pepper
              Extract. These components work together to support thermogenesis,
              improve calorie utilization, and promote metabolic efficiency.
            </p>
            <p>
              Manufactured in the USA using non-GMO ingredients and designed for
              convenient daily use, CitrusBurn provides a reliable option for
              long-term metabolic support, sustained energy, and overall
              wellness.
            </p>
          </div>
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6"
            data-ocid="what.primary_button"
          >
            <Button className="bg-brand-orange hover:bg-brand-orange-dark text-white rounded-full px-7 py-4 font-bold">
              Order CitrusBurn Today
            </Button>
          </a>
        </div>
        <div className="flex justify-center">
          <img
            src={PRODUCT_IMAGE}
            alt="CitrusBurn bottle"
            className="w-64 md:w-80 object-contain drop-shadow-xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="bg-brand-beige py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center order-2 md:order-1">
          <img
            src={PRODUCT_IMAGE}
            alt="CitrusBurn formula"
            className="w-64 md:w-80 object-contain drop-shadow-xl"
            loading="lazy"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="text-xs uppercase tracking-widest font-bold text-brand-orange mb-2">
            The Science
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-charcoal mb-5">
            How Does CitrusBurn Work?
          </h2>
          <div className="space-y-3 text-gray-600 leading-relaxed">
            <p>
              CitrusBurn works by supporting the body's natural metabolic and
              thermogenic pathways that help convert stored fat into usable
              energy, allowing calories to be burned more efficiently throughout
              the day.
            </p>
            <p>
              Ingredients such as Seville Orange Peel and Green Tea Extract help
              stimulate thermogenesis, while Red Pepper Extract supports
              increased calorie burning after meals. Ginger Root contributes to
              digestive comfort and helps support balanced appetite control.
            </p>
            <p>
              CitrusBurn also encourages continued metabolic activity by
              supporting calorie utilization even during periods of rest, which
              may assist with managing stubborn fat and supporting long-term
              weight goals.
            </p>
            <p>
              With consistent daily use, CitrusBurn supports steady energy,
              improved fat metabolism, enhanced metabolic efficiency, and
              long-term weight management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    {
      icon: "🔥",
      title: "Supports Natural Fat Utilization",
      desc: "Helps activate thermogenic activity so calories are efficiently converted into usable energy.",
    },
    {
      icon: "⚖️",
      title: "Encourages Metabolic Balance",
      desc: "Designed to help maintain healthy metabolic function throughout the day.",
    },
    {
      icon: "🥗",
      title: "Helps Manage Cravings",
      desc: "Supports appetite balance, making mindful eating easier to sustain.",
    },
    {
      icon: "📉",
      title: "Supports Healthy Weight Management",
      desc: "Encourages effective calorie use as part of a consistent daily routine.",
    },
    {
      icon: "⚡",
      title: "Promotes Steady Energy",
      desc: "Helps maintain consistent energy levels without relying on harsh stimulants.",
    },
    {
      icon: "🌡️",
      title: "Enhances Thermogenic Response",
      desc: "Supports calorie burning, particularly after meals.",
    },
    {
      icon: "🌿",
      title: "Supports Digestive Comfort",
      desc: "Digestive-supporting botanicals help promote metabolic comfort.",
    },
    {
      icon: "💊",
      title: "Simple Daily Supplement",
      desc: "Easy-to-use capsules designed to fit seamlessly into everyday routines.",
    },
    {
      icon: "✨",
      title: "Supports Overall Metabolic Wellness",
      desc: "A healthy metabolism plays a key role in maintaining energy and vitality.",
    },
    {
      icon: "🌱",
      title: "Clean, Plant-Based Formula",
      desc: "Made with non-GMO, plant-based ingredients and free from unnecessary additives.",
    },
  ];

  return (
    <section id="benefits-section" className="bg-brand-beige py-16">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-xs uppercase tracking-widest font-bold text-brand-orange mb-2">
          Why It Works
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-charcoal text-center mb-10">
          BENEFITS
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: static list
              key={i}
              className="bg-white rounded-xl p-5 shadow-card flex gap-4"
            >
              <span className="text-2xl flex-shrink-0">{b.icon}</span>
              <div>
                <p className="font-bold text-brand-charcoal text-sm mb-1">
                  {b.title}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IngredientsSection() {
  const ingredients = [
    {
      name: "Seville Orange Peel Extract",
      desc: "Provides natural compounds that support thermogenesis and efficient calorie utilization.",
      emoji: "🍊",
    },
    {
      name: "Green Tea Extract",
      desc: "Supports metabolic activity and fat utilization while delivering antioxidant benefits.",
      emoji: "🍵",
    },
    {
      name: "Red Pepper Extract",
      desc: "Encourages the body's natural thermogenic response and calorie burning after meals.",
      emoji: "🌶️",
    },
    {
      name: "Ginger Root Extract",
      desc: "Helps support digestive comfort and balanced appetite control.",
      emoji: "🫚",
    },
    {
      name: "Apple Cider Vinegar Powder",
      desc: "Supports feelings of fullness and helps manage appetite naturally.",
      emoji: "🍎",
    },
    {
      name: "Berberine",
      desc: "Helps support metabolic efficiency and balanced energy utilization.",
      emoji: "🌿",
    },
    {
      name: "Korean Red Ginseng",
      desc: "Supports natural energy, stamina, and overall metabolic performance without stimulants.",
      emoji: "🌾",
    },
  ];

  return (
    <section id="ingredient-section" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-xs uppercase tracking-widest font-bold text-brand-orange mb-2">
          Formula
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-charcoal text-center mb-3">
          Key Ingredients
        </h2>
        <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">
          Each serving features a targeted blend of citrus extracts and
          botanical compounds chosen for their metabolic support properties.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ingredients.map((ing, i) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: static list
              key={i}
              className="rounded-2xl border border-gray-100 shadow-card p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-3">{ing.emoji}</div>
              <h3 className="font-extrabold text-brand-charcoal mb-2">
                {ing.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {ing.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const plans = [
    {
      qty: "1 Bottle",
      price: "$49",
      perBottle: "$49/bottle",
      tag: null as string | null,
      savings: null as string | null,
      shipping: "+ Shipping",
    },
    {
      qty: "3 Bottles",
      price: "$147",
      perBottle: "$49/bottle",
      tag: "MOST POPULAR" as string | null,
      savings: "Save $90" as string | null,
      shipping: "+ Shipping",
    },
    {
      qty: "6 Bottles",
      price: "$234",
      perBottle: "$39/bottle",
      tag: "BEST VALUE" as string | null,
      savings: "Save $240 + 2 Free Bonuses" as string | null,
      shipping: "Free Shipping",
    },
  ];

  return (
    <section className="bg-brand-beige py-16">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-xs uppercase tracking-widest font-bold text-brand-orange mb-2">
          Special Offer
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-charcoal text-center mb-2">
          Limited-Time Special Pricing
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Get Your CitrusBurn While Supplies Last
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {plans.map((plan, i) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: static list
              key={i}
              className={`relative bg-white rounded-2xl shadow-card p-7 flex flex-col items-center border-2 ${
                plan.tag === "MOST POPULAR"
                  ? "border-brand-orange"
                  : "border-transparent"
              }`}
            >
              {plan.tag && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-xs font-bold px-4 py-1 rounded-full uppercase">
                  {plan.tag}
                </span>
              )}
              <p className="font-extrabold text-brand-charcoal text-lg mb-1">
                {plan.qty}
              </p>
              <p className="text-4xl font-extrabold text-brand-orange mb-1">
                {plan.price}
              </p>
              <p className="text-gray-500 text-sm mb-1">{plan.perBottle}</p>
              {plan.savings && (
                <p className="text-green-600 font-bold text-sm mb-1">
                  {plan.savings}
                </p>
              )}
              <p className="text-gray-400 text-xs mb-5">{plan.shipping}</p>
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
                data-ocid="pricing.primary_button"
              >
                <Button className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white rounded-full font-bold py-5 uppercase">
                  ORDER NOW
                </Button>
              </a>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <img
            src={PRODUCT_IMAGE}
            alt="CitrusBurn"
            className="w-48 object-contain drop-shadow-xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const reviews = [
    {
      name: "Tasha M.",
      age: "Age 41",
      location: "Austin, TX",
      title: "I experienced noticeable improvements sooner than expected.",
      text: "I've tested many supplements over the years, so I was cautious going in. With CitrusBurn™, I felt more balanced within the first week, and my clothes started fitting more comfortably. There were no energy spikes or crashes — just steady, manageable progress that felt easy to maintain.",
    },
    {
      name: "Neil C.",
      age: "Age 57",
      location: "Asheville, NC",
      title: "Craving control feels much more manageable now.",
      text: "Late-night snacking used to be my biggest struggle. Since starting CitrusBurn™, those constant urges have faded. My energy stays steady throughout the day, and the afternoon slump I used to feel is completely gone. Everything feels far more balanced overall.",
    },
    {
      name: "Elizabeth V.",
      age: "Age 62",
      location: "Boise, ID",
      title: "My energy feels consistent and dependable again.",
      text: "I used to wake up feeling sluggish most mornings. After adding CitrusBurn™ to my daily routine, I feel clearer and more focused at the start of the day. My energy lasts well into the evening, and I'm accomplishing more without feeling worn out.",
    },
  ];

  return (
    <section id="reviews-section" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-xs uppercase tracking-widest font-bold text-brand-orange mb-2">
          Real Results
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-charcoal text-center mb-10">
          CitrusBurn Reviews
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: static list
              key={i}
              className="bg-white rounded-2xl border border-gray-100 shadow-card p-6 flex flex-col"
              data-ocid={`reviews.item.${i + 1}`}
            >
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, si) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: static star array
                  <Star key={si} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="font-bold text-brand-charcoal mb-3">"{r.title}"</p>
              <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                {r.text}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="font-bold text-brand-charcoal text-sm">
                  {r.name}
                </p>
                <p className="text-gray-400 text-xs">
                  {r.age} · {r.location} · Verified Purchase
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BonusesSection() {
  return (
    <section className="bg-brand-charcoal py-16">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-center text-xs uppercase tracking-widest font-bold text-brand-orange mb-2">
          Exclusive Bonuses
        </p>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-8">
          Order 6 or 3 Bottles and Receive{" "}
          <span className="text-brand-orange">2 FREE Bonuses!</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center">
                <Gift className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-brand-orange text-xs font-bold uppercase">
                  Bonus #1
                </span>
                <p className="text-white font-extrabold">
                  Spanish Rapid Detox Protocol
                </p>
              </div>
              <span className="ml-auto text-green-400 font-bold text-sm">
                100% FREE
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              A straightforward 15-day, Mediterranean-inspired guide created to
              help support natural detox pathways and encourage thermogenic
              activity using common, everyday ingredients.
            </p>
          </div>
          <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-brand-orange text-xs font-bold uppercase">
                  Bonus #2
                </span>
                <p className="text-white font-extrabold">
                  Mind Over Metabolism Mastery
                </p>
              </div>
              <span className="ml-auto text-green-400 font-bold text-sm">
                100% FREE
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              A guided mindset program featuring short daily exercises designed
              to help reduce cravings, manage emotional eating, and build
              lasting motivation for healthier lifestyle habits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function GuaranteeSection() {
  return (
    <section className="bg-white py-14">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-5">
          <ShieldCheck className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-charcoal mb-4">
          180-Day Money-Back Guarantee
        </h2>
        <p className="text-gray-500 leading-relaxed mb-6">
          CitrusBurn is supported by a strong commitment to quality and customer
          satisfaction. Every order is covered by a full 180-day money-back
          guarantee. If you are not completely satisfied for any reason, simply
          contact our support team within 180 days to receive a full refund.
        </p>
        <p className="font-bold text-brand-charcoal">
          No hassle. No complicated process. No risk.
        </p>
        <p className="text-gray-500 text-sm mt-1">
          We stand behind every CitrusBurn purchase so you can try it with
          complete confidence.
        </p>
      </div>
    </section>
  );
}

function CertificationsRow() {
  const certs = [
    { label: "Natural Formula" },
    { label: "Simple Daily Use" },
    { label: "Non-GMO" },
    { label: "No Stimulants" },
  ];

  return (
    <section className="bg-brand-beige py-8 border-y border-orange-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {certs.map((c, i) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: static list
              key={i}
              className="flex items-center gap-2 justify-center"
            >
              <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0" />
              <span className="font-bold text-brand-charcoal text-sm">
                {c.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    {
      q: "What is CitrusBurn?",
      a: "CitrusBurn is a plant-based dietary supplement created to support healthy fat metabolism, consistent daily energy, and overall metabolic wellness using carefully selected ingredients.",
    },
    {
      q: "How does CitrusBurn work?",
      a: "CitrusBurn supports the body's natural thermogenic and metabolic functions. Ingredients such as citrus extracts, green tea, ginger, and red pepper help support calorie utilization, fat metabolism, and steady energy production.",
    },
    {
      q: "How should I take CitrusBurn?",
      a: "CitrusBurn should be taken according to the directions on the product label. Capsules are typically taken once daily with water, preferably alongside a meal.",
    },
    {
      q: "Is CitrusBurn safe?",
      a: "CitrusBurn is made using high-quality, plant-based ingredients under strict quality standards. If you are pregnant, nursing, taking medications, or have a medical condition, consult a healthcare professional before use.",
    },
    {
      q: "When will I see results?",
      a: "Results vary from person to person. Many users report improved energy, appetite balance, and noticeable metabolic support within a few weeks of consistent daily use.",
    },
    {
      q: "Where can I buy CitrusBurn?",
      a: "CitrusBurn is available exclusively through the official website to ensure product authenticity, secure checkout, and access to special bundle offers.",
    },
  ];

  return (
    <section id="FAQ-section" className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4">
        <p className="text-center text-xs uppercase tracking-widest font-bold text-brand-orange mb-2">
          Common Questions
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-charcoal text-center mb-10">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              // biome-ignore lint/suspicious/noArrayIndexKey: static list
              key={i}
              value={`faq-${i}`}
              className="border border-gray-200 rounded-xl px-5"
              data-ocid={`faq.item.${i + 1}`}
            >
              <AccordionTrigger className="font-bold text-brand-charcoal hover:no-underline hover:text-brand-orange">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-brand-beige py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-charcoal text-center mb-10">
          Quick Savings: Secure Your Discounted CitrusBurn Bottle Now!
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img
              src={PRODUCT_IMAGE}
              alt="CitrusBurn bottle"
              className="w-64 object-contain drop-shadow-xl"
              loading="lazy"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-gray-400 line-through text-lg mb-1">
              Regular Price: $79/Bottle
            </p>
            <p className="text-3xl font-extrabold text-brand-orange mb-5">
              Today Just: $49/Bottle
            </p>
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="finalcta.primary_button"
            >
              <Button className="bg-brand-orange hover:bg-brand-orange-dark text-white rounded-full px-8 py-6 text-base font-extrabold uppercase shadow-lg w-full md:w-auto">
                CLAIM MY DISCOUNTED BOTTLE NOW!
              </Button>
            </a>
            <div className="flex flex-wrap gap-4 mt-5 justify-center md:justify-start">
              <span className="flex items-center gap-1 text-sm text-gray-600">
                <ShieldCheck className="w-4 h-4 text-green-600" /> 180-Day
                Guarantee
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-600">
                <Truck className="w-4 h-4 text-brand-orange" /> Free Shipping
                Available
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-600">
                <Leaf className="w-4 h-4 text-green-600" /> Non-GMO Formula
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-charcoal text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Flame className="text-brand-orange w-6 h-6" />
            <span className="text-lg font-extrabold">
              CitrusBurn<span className="text-brand-orange">™</span>
            </span>
          </div>
          <div className="flex flex-wrap gap-5 justify-center text-sm text-white/60">
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Order Support
            </a>
            <a
              href="https://citrusburns.us/terms.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Terms and Conditions
            </a>
            <a
              href="https://citrusburns.us/privacy.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://citrusburns.us/disclaimer.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Disclaimer
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6">
          <p className="text-white/50 text-xs leading-relaxed mb-4 max-w-4xl mx-auto text-center">
            The information shared on this website has not been reviewed or
            approved by the Food and Drug Administration (FDA) or any other
            medical or regulatory authority. All content is provided for general
            informational and educational purposes only and should not be
            considered medical advice, nor used to diagnose, treat, cure, or
            prevent any disease or health condition. Always consult a licensed
            physician or qualified healthcare professional before making any
            health-related decisions. These statements have not been evaluated
            by the FDA. This product is not intended to diagnose, treat, cure,
            or prevent any disease.
          </p>
          <p className="text-white/40 text-xs text-center">
            Copyright © {year} CitrusBurn – All Rights Reserved. Built with love
            using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/70"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <TopBar />
      <Navbar />
      <main>
        <HeroSection />
        <FeatureIconRow />
        <WhatIsCitrusBurn />
        <HowItWorks />
        <BenefitsSection />
        <IngredientsSection />
        <PricingSection />
        <ReviewsSection />
        <BonusesSection />
        <GuaranteeSection />
        <CertificationsRow />
        <FaqSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
