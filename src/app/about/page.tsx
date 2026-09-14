import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Sri Lanka Trails — a travel guide dedicated to helping you discover the real beauty of Sri Lanka, from ancient temples to pristine beaches.',
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          About <span className="text-emerald-600">Sri Lanka Trails</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          A travel guide built by Sri Lankans, for travelers who want to
          experience the island beyond the tourist brochures.
        </p>
      </header>

      {/* Hero section — brand story */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div className="relative">
          <div className="relative w-72 h-72 mx-auto">
            <Image
              src="/images/hero-banner.jpg"
              alt="Scenic landscape of Sri Lanka — tea plantations and ancient temples"
              fill
              className="rounded-3xl object-cover shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-emerald-100 rounded-3xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-100 rounded-3xl -z-10" />
          </div>
        </div>

        <div>
          <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">
            Our Story
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
            Born from a Love of Sri Lanka
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Sri Lanka Trails was created by a small team of local travel enthusiasts
            who grew up exploring every corner of this island — from the misty highlands
            of Ella to the ancient ruins of Polonnaruwa, and the golden shores of
            Mirissa to the wild jungles of Wilpattu.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            We noticed that most online travel resources gave generic, outdated advice.
            So we built the guide we always wished existed — honest, detailed, and written
            by people who actually live here.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Nature', 'Culture', 'Food', 'Adventure', 'Sustainability', 'History'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-emerald-100 text-emerald-700 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* What we offer */}
      <section className="bg-gray-50 rounded-3xl p-10 mb-16" aria-labelledby="offer-heading">
        <h2 id="offer-heading" className="text-2xl font-bold text-gray-900 mb-4 text-center">
          What You Will Find Here
        </h2>
        <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto text-lg mb-10">
          Sri Lanka Trails covers everything a traveler needs — whether you are
          planning a 3-day trip or a month-long adventure across the whole island.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: '🗺️', title: 'Destination Guides', desc: 'In-depth guides to every region, city, and hidden gem' },
            { icon: '📅', title: 'Itineraries', desc: 'Ready-to-use trip plans for every budget and duration' },
            { icon: '🍛', title: 'Food & Culture', desc: 'What to eat, where to eat, and local customs to respect' },
            { icon: '💡', title: 'Practical Tips', desc: 'Visas, transport, costs, safety — everything practical' },
          ].map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-2xl bg-white border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all duration-200 text-center"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm">{item.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="mb-16" aria-labelledby="mission-heading">
        <h2 id="mission-heading" className="text-2xl font-bold text-gray-900 mb-8 text-center">
          What We Stand For
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              icon: '🤝',
              title: 'Authenticity',
              desc: 'Every guide is based on real, on-the-ground experience. We write what we know.',
            },
            {
              icon: '🌿',
              title: 'Sustainability',
              desc: 'We promote responsible travel that respects local communities and the environment.',
            },
            {
              icon: '🎯',
              title: 'Accuracy',
              desc: 'We keep our guides up to date so you never show up with outdated information.',
            },
          ].map((val) => (
            <div
              key={val.title}
              className="p-6 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all duration-200 text-center"
            >
              <div className="text-4xl mb-4">{val.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{val.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer — important for AdSense */}
      <section className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 mb-16" aria-labelledby="disclaimer-heading">
        <h2 id="disclaimer-heading" className="text-lg font-bold text-emerald-900 mb-3">
          Editorial Independence & Transparency
        </h2>
        <p className="text-sm text-emerald-800 leading-relaxed">
          Sri Lanka Trails is an independent travel publication. Our content reflects our
          genuine opinions and experiences. Some articles may contain affiliate links or
          sponsored content — these are always clearly disclosed. We may also display
          third-party advertisements through Google AdSense. Advertising relationships
          never influence our editorial recommendations.
        </p>
      </section>

      {/* CTA */}
      <div className="text-center">
        <p className="text-gray-500 mb-6">
          Questions, suggestions, or interested in collaborating?
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-500 transition-colors"
        >
          Get in Touch →
        </Link>
      </div>

    </div>
  );
}
