import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { format } from 'date-fns';
import { getAllSlugs, getPostBySlug, getAllPosts } from '@/lib/posts';
import { getMDXComponents } from '@/components/mdx/MDXComponents';
import AdUnit from '@/components/AdUnit';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// ─── Static generation ──────────────────────────────────────────────────────
export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

// ─── Dynamic metadata ────────────────────────────────────────────────────────
export async function generateMetadata(
  { params }: BlogPostPageProps
): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };

  const { title, description, coverImage, author, date } = post.frontmatter;

  return {
    title,
    description,
    authors: [{ name: author }],
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: date,
      authors: [author],
      images: [
        {
          url: coverImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [coverImage],
    },
  };
}

// ─── Page component ──────────────────────────────────────────────────────────
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  const { title, date, description, coverImage, author, authorImage } =
    post.frontmatter;
  const formattedDate = format(new Date(date), 'MMMM d, yyyy');

  const components = getMDXComponents();

  return (
    <article itemScope itemType="https://schema.org/BlogPosting">
      {/* ─── Cover image ─── */}
      <div className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover"
          priority
          quality={90}
          itemProp="image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Post title over image */}
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-12 max-w-4xl mx-auto w-full">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white mb-4 transition-colors"
          >
            ← Back to Blog
          </Link>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight"
            itemProp="headline"
          >
            {title}
          </h1>
        </div>
      </div>

      {/* ─── Post meta ─── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-4 py-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            {authorImage && (
              <Image
                src={authorImage}
                alt={author}
                width={44}
                height={44}
                className="rounded-full object-cover ring-2 ring-emerald-200"
              />
            )}
            <div>
              <p
                className="font-semibold text-gray-900 text-sm"
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
              >
                <span itemProp="name">{author}</span>
              </p>
              <time
                dateTime={date}
                className="text-xs text-gray-400"
                itemProp="datePublished"
              >
                {formattedDate}
              </time>
            </div>
          </div>
          <span className="text-gray-300 hidden sm:block">·</span>
          <span className="text-sm text-gray-400">{post.readingTime}</span>
        </div>

        {/* Description lead paragraph */}
        <p className="text-xl text-gray-500 leading-relaxed py-8 font-light italic border-b border-gray-100">
          {description}
        </p>

        {/* ─── AdSense in-content — top of article ─── */}
        <AdUnit slot="in-content" className="my-8" />

        {/* ─── MDX Content ─── */}
        <div
          className="prose prose-lg max-w-none py-8
            prose-headings:font-bold prose-headings:text-gray-900
            prose-p:text-gray-600 prose-p:leading-relaxed
            prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-xl prose-img:shadow-md
            prose-pre:bg-gray-900 prose-pre:text-gray-100
            prose-code:text-emerald-600 prose-code:bg-emerald-50 prose-code:px-1 prose-code:rounded
            prose-blockquote:border-emerald-400 prose-blockquote:bg-emerald-50
            prose-li:text-gray-600
          "
          itemProp="articleBody"
        >
          <MDXRemote
            source={post.content}
            components={components}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </div>

        {/* ─── AdSense in-content — bottom of article ─── */}
        <AdUnit slot="in-content" className="my-8" />

        {/* ─── Tags ─── */}
        {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 py-6 border-t border-gray-100">
            {post.frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-emerald-100 text-emerald-700 rounded-full font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* ─── Prev / Next navigation ─── */}
        <nav
          aria-label="Post navigation"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10 border-t border-gray-100"
        >
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              id="prev-post-link"
              className="group p-5 rounded-xl border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50 transition-all duration-200"
            >
              <span className="text-xs text-gray-400 uppercase tracking-wider">← Previous</span>
              <p className="font-semibold text-gray-900 mt-1 group-hover:text-emerald-700 transition-colors line-clamp-2 text-sm">
                {prevPost.frontmatter.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {nextPost && (
            <Link
              href={`/blog/${nextPost.slug}`}
              id="next-post-link"
              className="group p-5 rounded-xl border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50 transition-all duration-200 text-right"
            >
              <span className="text-xs text-gray-400 uppercase tracking-wider">Next →</span>
              <p className="font-semibold text-gray-900 mt-1 group-hover:text-emerald-700 transition-colors line-clamp-2 text-sm">
                {nextPost.frontmatter.title}
              </p>
            </Link>
          )}
        </nav>
      </div>
    </article>
  );
}
