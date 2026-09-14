'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to email service (Mailchimp, ConvertKit, etc.)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div id="newsletter-success" className="text-center">
        <span className="text-3xl">🎉</span>
        <p className="text-white font-semibold mt-2">You are subscribed! Welcome aboard.</p>
      </div>
    );
  }

  return (
    <form
      id="newsletter-form"
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 justify-center"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 max-w-xs px-5 py-3 rounded-xl text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-white"
        required
      />
      <button
        type="submit"
        className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors whitespace-nowrap"
      >
        Subscribe Free
      </button>
    </form>
  );
}
