import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import AdUnit from '@/components/AdUnit';
import NewsletterForm from '@/components/NewsletterForm';

export const metadata: Metadata = {
  title: 'Sri Lanka Trails — Travel Blog & Guides',
  description:
    'Discover the best of Sri Lanka — beaches, ancient temples, wildlife, food, and hidden gems. Expert travel guides, itineraries, and tips for every traveler.',
};

export default function HomePage() {
  const posts = getAllPosts();
  const [featuredPost, ...restPosts] = posts;

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section
        id="hero"
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-banner.jpg"
            alt="Breathtaking landscape of Sri Lanka with ancient temples and tea plantations"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-emerald-300 bg-emerald-900/40 backdrop-blur-sm rounded-full border border-emerald-700/50">
            🌴 The Pearl of the Indian Ocean
          </span>
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
          >
            Explore{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">
              Sri Lanka
            </span>
            <br />
            Like Never Before
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            From misty highlands and ancient ruins to pristine beaches and vibrant cuisine
            — your definitive guide to the island of serendipity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              id="hero-cta-blog"
              href="/blog"
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5"
            >
              Browse All Guides →
            </Link>
            <Link
              id="hero-cta-about"
              href="/about"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-sm border border-white/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              About Us
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-0.5 h-8 bg-white/30 animate-pulse" />
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-emerald-800 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '50+', label: 'Travel Guides' },
              { value: '25+', label: 'Destinations' },
              { value: '100K+', label: 'Monthly Readers' },
              { value: '5★', label: 'Reader Rating' },
            ].map((stat) => (
              <div key={stat.label} className="text-white">
                <div className="text-2xl font-bold text-emerald-300">{stat.value}</div>
                <div className="text-sm text-emerald-100/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ADSENSE — Between hero & posts ===== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdUnit slot="between-posts" />
      </div>

      {/* ===== FEATURED POST ===== */}
      {featuredPost && (
        <section
          id="featured-post"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
          aria-labelledby="featured-heading"
        >
          <div className="flex items-center justify-between mb-8">
            <h2
              id="featured-heading"
              className="text-2xl font-bold text-gray-900"
            >
              Featured Guide
            </h2>
          </div>
          <PostCard post={featuredPost} featured />
        </section>
      )}

      {/* ===== LATEST POSTS GRID ===== */}
      {restPosts.length > 0 && (
        <section
          id="latest-posts"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
          aria-labelledby="latest-heading"
        >
          <div className="flex items-center justify-between mb-8">
            <h2
              id="latest-heading"
              className="text-2xl font-bold text-gray-900"
            >
              Latest Articles
            </h2>
            <Link
              href="/blog"
              className="text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {restPosts.slice(0, 6).map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* ===== NEWSLETTER CTA ===== */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Never Miss a Guide
          </h2>
          <p className="text-emerald-100 mb-8">
            Get the latest Sri Lanka travel tips, itineraries, and hidden gems
            delivered straight to your inbox.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
