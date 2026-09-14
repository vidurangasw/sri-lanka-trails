import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Read the Terms of Service for Sri Lanka Trails. Understand the rules governing your use of our website, content, and services.',
};

const lastUpdated = 'September 14, 2026';
const siteUrl = 'https://srilankatrails.com';
const contactEmail = 'legal@srilankatrails.com';

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Terms of Service</h1>
        <p className="text-sm text-gray-400">Last Updated: {lastUpdated}</p>
      </header>

      <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-emerald-600 prose-li:text-gray-600">
        <p>
          Please read these Terms of Service (&quot;Terms&quot;) carefully before using{' '}
          <a href={siteUrl}>{siteUrl}</a> (the &quot;Service&quot;) operated by Sri Lanka Trails
          (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
        </p>
        <p>
          By accessing or using our Service, you agree to be bound by these Terms. If you
          disagree with any part of the terms, please do not use our Service.
        </p>

        <h2>1. Use of the Website</h2>
        <p>
          This website is intended for personal, non-commercial use. You may not use any content
          from this website for commercial purposes without our express written permission. You
          agree not to use this website:
        </p>
        <ul>
          <li>In any way that violates any applicable local, national, or international law or regulation</li>
          <li>To transmit any unsolicited or unauthorized advertising or promotional material</li>
          <li>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
          <li>To attempt to gain unauthorized access to any portion of the website</li>
        </ul>

        <h2>2. Intellectual Property</h2>
        <p>
          All content on this website — including but not limited to text, articles, photographs,
          graphics, logos, and design — is the property of Sri Lanka Trails or its content
          suppliers and is protected by international copyright laws. You may not reproduce,
          distribute, or create derivative works without our explicit written permission.
        </p>

        <h2>3. Disclaimer of Warranties</h2>
        <p>
          The information on this website is provided on an "as is" basis. To the fullest extent
          permitted by law, Sri Lanka Trails makes no representations or warranties of any kind,
          express or implied, about the completeness, accuracy, reliability, suitability, or
          availability of the website or the information, products, services, or related graphics
          contained on the website for any purpose.
        </p>
        <p>
          <strong>Travel Information Disclaimer:</strong> Travel conditions, visa requirements,
          entry restrictions, prices, and other information can change rapidly. Always verify
          critical travel information with official sources (government websites, airlines, hotels)
          before making any bookings or travel decisions. Sri Lanka Trails is not responsible for
          any losses or inconveniences arising from reliance on information published on this site.
        </p>

        <h2>4. Affiliate Disclaimer</h2>
        <p>
          Some links on this website are affiliate links, which means we may earn a commission
          if you click on the link or make a purchase using the link. This comes at no extra cost
          to you. We only recommend products and services that we have personally used or thoroughly
          researched and believe will add value to our readers.
        </p>

        <h2>5. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. These linked sites are not under
          the control of Sri Lanka Trails. We have no responsibility for the content of any linked
          site. The inclusion of any link does not imply endorsement by Sri Lanka Trails.
        </p>

        <h2>6. Advertising</h2>
        <p>
          Sri Lanka Trails participates in Google AdSense, an advertising program that may display
          advertisements on our site. These advertisements are served by Google and its advertising
          partners. Your interactions with these advertisements are governed by Google's Privacy Policy
          and Terms of Service.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by applicable law, Sri Lanka Trails shall not be liable
          for any indirect, incidental, special, consequential, or punitive damages, including
          without limitation, loss of profits, data, use, goodwill, or other intangible losses,
          resulting from your access to or use of (or inability to access or use) our Service.
        </p>

        <h2>8. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of Sri Lanka,
          without regard to its conflict of law provisions.
        </p>

        <h2>9. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. We will provide notice of
          significant changes by updating the "Last Updated" date at the top of this page.
          Your continued use of the website after any changes constitutes your acceptance of
          the new Terms.
        </p>

        <h2>10. Contact</h2>
        <p>
          If you have any questions about these Terms, please contact us at:{' '}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </p>
      </div>
    </div>
  );
}
