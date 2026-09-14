import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Meet the team behind Sri Lanka Trails — passionate travelers and storytellers dedicated to helping you discover the magic of Sri Lanka.',
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          About <span className="text-emerald-600">Us</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          We are passionate travelers, storytellers, and Sri Lanka enthusiasts dedicated
          to helping you experience this extraordinary island.
        </p>
      </header>

      {/* Author section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div className="relative">
          <div className="relative w-72 h-72 mx-auto">
            <Image
              src="/images/author.jpg"
              alt="Priya Mendis — Founder of Sri Lanka Trails"
              fill
              className="rounded-3xl object-cover shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-emerald-100 rounded-3xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-100 rounded-3xl -z-10" />
          </div>
        </div>

        <div>
          <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">
            Founder & Lead Writer
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Priya Mendis</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Born and raised in Colombo, Priya has spent over a decade traveling every corner
            of Sri Lanka — from the misty highlands of Nuwara Eliya to the sun-soaked beaches
            of Mirissa. She started Sri Lanka Trails to share the raw, unfiltered beauty of
            the island she calls home.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            With a background in journalism and a camera always in hand, Priya brings you
            honest, in-depth travel guides that go beyond the tourist brochures.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Photography', 'Culture', 'Food', 'Adventure', 'Sustainability'].map((tag) => (
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

      {/* Mission */}
      <section className="bg-gray-50 rounded-3xl p-10 mb-16" aria-labelledby="mission-heading">
        <h2 id="mission-heading" className="text-2xl font-bold text-gray-900 mb-4 text-center">
          Our Mission
        </h2>
        <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto text-lg">
          Sri Lanka Trails exists to be the most trusted, comprehensive, and beautifully crafted
          travel resource for Sri Lanka. We believe every traveler deserves accurate, up-to-date
          information — whether you are planning a luxury honeymoon or a budget backpacking trip.
        </p>
      </section>

      {/* Values */}
      <section aria-labelledby="values-heading">
        <h2 id="values-heading" className="text-2xl font-bold text-gray-900 mb-8 text-center">
          What We Stand For
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              icon: '🤝',
              title: 'Authenticity',
              desc: 'Every guide is based on real, personal experience — never copied or AI-generated fluff.',
            },
            {
              icon: '🌿',
              title: 'Sustainability',
              desc: 'We promote eco-friendly travel that respects local communities and the environment.',
            },
            {
              icon: '🗺️',
              title: 'Depth',
              desc: 'We go beyond the surface to give you the information you actually need to travel confidently.',
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

      {/* CTA */}
      <div className="text-center mt-16">
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
