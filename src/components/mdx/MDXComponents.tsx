import Image from 'next/image';
import type { MDXComponents } from 'mdx/types';

/**
 * Custom MDX component renderers.
 * - img → next/image (optimized, responsive)
 * - h2/h3 → auto-anchor IDs for TOC
 * - pre/code → styled code blocks
 * - a → external link with target=_blank
 */
export function getMDXComponents(): MDXComponents {
  return {
    // Replace <img> with optimized next/image
    img: ({ src, alt, ...props }) => {
      if (!src) return null;
      return (
        <span className="block my-8 relative w-full overflow-hidden rounded-xl">
          <Image
            src={src as string}
            alt={alt ?? ''}
            width={1200}
            height={630}
            className="w-full h-auto object-cover rounded-xl shadow-md"
            style={{ maxHeight: '560px', objectFit: 'cover' }}
            {...props}
          />
          {alt && (
            <span className="block text-center text-sm text-gray-400 mt-2 italic">
              {alt}
            </span>
          )}
        </span>
      );
    },

    // Headings with anchor IDs
    h2: ({ children, ...props }) => {
      const id = String(children)
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '');
      return (
        <h2 id={id} className="group" {...props}>
          {children}
          <a
            href={`#${id}`}
            className="ml-2 opacity-0 group-hover:opacity-100 text-emerald-500 text-base font-normal transition-opacity"
            aria-label={`Link to ${children}`}
          >
            #
          </a>
        </h2>
      );
    },

    h3: ({ children, ...props }) => {
      const id = String(children)
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '');
      return (
        <h3 id={id} {...props}>
          {children}
        </h3>
      );
    },

    // External links
    a: ({ href, children, ...props }) => {
      const isExternal = href?.startsWith('http');
      return (
        <a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          {...props}
        >
          {children}
        </a>
      );
    },

    // Blockquote styling
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="border-l-4 border-emerald-400 bg-emerald-50 px-6 py-4 rounded-r-lg my-6"
        {...props}
      >
        {children}
      </blockquote>
    ),
  };
}
