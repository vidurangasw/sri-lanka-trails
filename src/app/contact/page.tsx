'use client';

import { useState } from 'react';

const contactDetails = [
  // { icon: '📧', label: 'Email', value: 'hello@srilankatrails.com', href: 'mailto:hello@srilankatrails.com' },
  { icon: '📍', label: 'Location', value: 'Colombo, Sri Lanka', href: null },
  { icon: '🕐', label: 'Response Time', value: 'Within 24–48 hours', href: null },
];

// ✅ Replace YOUR_FORM_ID with your Formspree form ID from formspree.io
const FORMSPREE_ID = 'mrpgnawj';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again or email us directly.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Contact <span className="text-emerald-600">Us</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto">
          Have a question, suggestion, or collaboration idea? We would love to
          hear from you!
        </p>
      </header>

      <div className="grid md:grid-cols-5 gap-12">
        {/* Contact details */}
        <aside className="md:col-span-2 space-y-6">
          <h2 className="text-xl font-bold text-gray-900">Get in Touch</h2>
          {contactDetails.map((item) => (
            <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50">
              <span className="text-2xl mt-0.5">{item.icon}</span>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-700 font-medium">{item.value}</p>
                )}
              </div>
            </div>
          ))}

          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
            <p className="text-sm text-emerald-800 leading-relaxed">
              <strong>Press & Collaborations:</strong> We welcome partnerships with
              tourism boards, travel brands, and eco-tourism initiatives aligned with
              our values.
            </p>
          </div>
        </aside>

        {/* Contact form */}
        <div className="md:col-span-3">
          {submitted ? (
            <div
              id="form-success"
              className="flex flex-col items-center justify-center h-full text-center py-16 rounded-2xl bg-emerald-50 border border-emerald-200"
            >
              <span className="text-5xl mb-4">🎉</span>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h2>
              <p className="text-gray-500">
                Thank you for reaching out. We will get back to you within 24–48 hours.
              </p>
            </div>
          ) : (
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="space-y-5 bg-white rounded-2xl border border-gray-100 shadow-sm p-8"
              noValidate
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Full Name <span aria-hidden="true" className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Smith"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-gray-900 placeholder-gray-400 transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Email Address <span aria-hidden="true" className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@example.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-gray-900 placeholder-gray-400 transition"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Subject
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-gray-900 transition bg-white"
                >
                  <option value="">Select a topic...</option>
                  <option value="general">General Inquiry</option>
                  <option value="collaboration">Collaboration / Partnership</option>
                  <option value="press">Press & Media</option>
                  <option value="correction">Article Correction</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Message <span aria-hidden="true" className="text-red-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  value={formState.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us how we can help..."
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-gray-900 placeholder-gray-400 transition resize-none"
                />
              </div>

              <button
                id="contact-submit"
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-300 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5"
              >
                {loading ? 'Sending...' : 'Send Message →'}
              </button>

              {error && (
                <p className="text-sm text-red-500 text-center">{error}</p>
              )}

              <p className="text-xs text-gray-400 text-center">
                By submitting this form you agree to our{' '}
                <a href="/privacy-policy" className="underline hover:text-emerald-600">
                  Privacy Policy
                </a>.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
