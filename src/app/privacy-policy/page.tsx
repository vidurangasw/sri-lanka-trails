import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Sri Lanka Trails privacy policy — how we collect, use, and protect your personal information, including our use of Google AdSense and third-party services.',
};

const lastUpdated = 'September 14, 2026';
const siteUrl = 'https://srilankatrails.com';
const contactEmail = 'privacy@srilankatrails.com';

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Privacy Policy</h1>
        <p className="text-sm text-gray-400">Last Updated: {lastUpdated}</p>
      </header>

      <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-emerald-600 prose-li:text-gray-600">
        <p>
          Welcome to Sri Lanka Trails (<a href={siteUrl}>{siteUrl}</a>). This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information when you visit
          our website. Please read this policy carefully.
        </p>

        <h2>1. Information We Collect</h2>
        <h3>1.1 Personal Information You Provide</h3>
        <p>We may collect personal information that you voluntarily provide when you:</p>
        <ul>
          <li>Fill out our contact form (name, email address, message)</li>
          <li>Subscribe to our newsletter (email address)</li>
          <li>Leave a comment on a blog post</li>
        </ul>

        <h3>1.2 Automatically Collected Information</h3>
        <p>
          When you visit our website, we automatically collect certain information about your
          device, including information about your web browser, IP address, time zone, and some
          of the cookies that are installed on your device.
        </p>
        <p>
          Additionally, as you browse the site, we collect information about the individual web
          pages or products that you view, what websites or search terms referred you to our
          site, and information about how you interact with our site.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalise, and expand our website</li>
          <li>Understand and analyse how you use our website</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>Communicate with you, including for customer service and updates</li>
          <li>Send you emails, such as our newsletter (with your consent)</li>
          <li>Find and prevent fraud</li>
        </ul>

        <h2>3. Cookies</h2>
        <p>
          We use cookies and similar tracking technologies to track the activity on our website
          and hold certain information. Cookies are files with a small amount of data which may
          include an anonymous unique identifier.
        </p>
        <p>
          You can instruct your browser to refuse all cookies or to indicate when a cookie is
          being sent. However, if you do not accept cookies, you may not be able to use some
          portions of our website.
        </p>

        <h2>4. Google AdSense & Third-Party Advertising</h2>
        <p>
          We use Google AdSense to display advertisements on our website. Google AdSense uses
          cookies to serve ads based on your prior visits to our website and other websites on
          the Internet.
        </p>
        <p>
          Google's use of advertising cookies enables it and its partners to serve ads to you
          based on your visit to our site and/or other sites on the Internet. You may opt out of
          personalized advertising by visiting{' '}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ads Settings
          </a>
          . You can also opt out of a third-party vendor's use of cookies for personalized
          advertising by visiting{' '}
          <a
            href="https://www.aboutads.info/choices/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.aboutads.info/choices
          </a>
          .
        </p>

        <h2>5. Google Analytics</h2>
        <p>
          We use Google Analytics to monitor and analyse web traffic. Google Analytics uses
          cookies to collect data about your interactions with our site. This data is used
          to improve our content and user experience. You can learn more about Google's data
          practices at{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Privacy Policy
          </a>
          .
        </p>

        <h2>6. Affiliate Links</h2>
        <p>
          Some links on our website may be affiliate links. This means that if you click on a
          link and make a purchase, we may receive a small commission at no additional cost to
          you. We only recommend products and services we genuinely believe in. All affiliate
          relationships are disclosed on relevant posts.
        </p>

        <h2>7. Data Retention</h2>
        <p>
          We will only retain your personal information for as long as necessary for the purposes
          set out in this Privacy Policy. We will retain and use your information to the extent
          necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
        </p>

        <h2>8. Your Rights (GDPR & CCPA)</h2>
        <p>
          Depending on your location, you may have certain rights regarding your personal data:
        </p>
        <ul>
          <li>
            <strong>Right to Access:</strong> You have the right to request copies of your personal
            data.
          </li>
          <li>
            <strong>Right to Rectification:</strong> You have the right to request that we correct
            any inaccurate information.
          </li>
          <li>
            <strong>Right to Erasure:</strong> You have the right to request that we erase your
            personal data under certain conditions.
          </li>
          <li>
            <strong>Right to Object:</strong> You have the right to object to our processing of
            your personal data.
          </li>
          <li>
            <strong>Right to Data Portability:</strong> You have the right to request that we
            transfer your data to another organization, or directly to you.
          </li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at{' '}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
        </p>

        <h2>9. Children's Privacy</h2>
        <p>
          Our website is not directed to children under the age of 13 (or 16 in the EU). We do
          not knowingly collect personally identifiable information from children. If you are a
          parent or guardian and believe your child has provided us with personal information,
          please contact us immediately.
        </p>

        <h2>10. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes
          by posting the new Privacy Policy on this page with a new "Last Updated" date. We
          encourage you to review this Privacy Policy periodically.
        </p>

        <h2>11. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:{' '}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </p>
      </div>
    </div>
  );
}
