import { Fragment } from 'react';
import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import AdUnit from '@/components/AdUnit';

export const metadata: Metadata = {
  title: 'Travel Blog',
  description:
    'Browse all Sri Lanka travel guides, itineraries, destination tips, and cultural insights. Updated regularly by our expert travel writers.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Page header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Travel <span className="text-emerald-600">Blog</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Expert guides, tips, and stories from across Sri Lanka — beaches, culture,
          wildlife, food, and everything in between.
        </p>
      </header>

      {/* AdSense top */}
      <AdUnit slot="header" className="mb-10" />

      {/* Posts grid */}
      {posts.length === 0 ? (
        <p className="text-center text-gray-400 py-20 text-lg">
          No posts yet. Check back soon!
        </p>
      ) : (
        <div
          id="posts-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {posts.map((post, idx) => (
            <Fragment key={post.slug}>
              <PostCard post={post} />
              {/* Inject AdSense unit after every 6th post */}
              {(idx + 1) % 6 === 0 && idx + 1 < posts.length && (
                <div className="sm:col-span-2 lg:col-span-3">
                  <AdUnit slot="between-posts" />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
