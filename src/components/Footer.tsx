import Link from 'next/link';

const footerLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400">
      {/* AdSense Footer Banner Placeholder */}
      {/* ============================================================
          ADSENSE FOOTER BANNER — Replace this div with your AdSense unit
          <ins class="adsbygoogle" ... data-ad-slot="XXXXXXXXXX" ...></ins>
          ============================================================ */}
      <div
        id="adsense-footer-banner"
        className="w-full bg-gray-900 border-b border-gray-800 flex items-center justify-center py-4"
        aria-hidden="true"
      >
        <span className="text-xs text-gray-600 select-none">[ Advertisement ]</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-800">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3 group w-fit">
              <span className="text-2xl">🌴</span>
              <span className="font-bold text-white group-hover:text-emerald-400 transition-colors">
                Sri Lanka <span className="text-emerald-400">Trails</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Your definitive guide to exploring the Pearl of the Indian Ocean —
              beaches, culture, wildlife, and hidden gems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
              Explore Topics
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Beaches',
                'Culture',
                'Wildlife',
                'Adventure',
                'Food',
                'History',
                'Budget Travel',
                'Itineraries',
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-gray-800 text-gray-400 hover:bg-emerald-900 hover:text-emerald-300 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© {currentYear} Sri Lanka Trails. All Rights Reserved.</p>
          <p>
            Made with ❤️ for travelers worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
