import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/lib/posts';
import { format } from 'date-fns';

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

export default function PostCard({ post, featured = false }: PostCardProps) {
  const { slug, frontmatter, readingTime, excerpt } = post;
  const formattedDate = format(new Date(frontmatter.date), 'MMMM d, yyyy');

  if (featured) {
    return (
      <article className="group relative grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300">
        {/* Featured image */}
        <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden">
          <Image
            src={frontmatter.coverImage}
            alt={frontmatter.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        {/* Content */}
        <div className="p-8 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-emerald-700 bg-emerald-100 rounded-full">
              Featured
            </span>
            <time dateTime={frontmatter.date} className="text-sm text-gray-400">
              {formattedDate}
            </time>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-emerald-700 transition-colors">
            <Link href={`/blog/${slug}`} className="stretched-link after:absolute after:inset-0">
              {frontmatter.title}
            </Link>
          </h2>
          <p className="text-gray-500 leading-relaxed mb-5 line-clamp-3">{excerpt}</p>
          <div className="flex items-center gap-3 mt-auto">
            {frontmatter.authorImage && (
              <Image
                src={frontmatter.authorImage}
                alt={frontmatter.author}
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
            )}
            <span className="text-sm font-medium text-gray-700">{frontmatter.author}</span>
            <span className="text-gray-300">·</span>
            <span className="text-sm text-gray-400">{readingTime}</span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Thumbnail */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={frontmatter.coverImage}
          alt={frontmatter.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <time dateTime={frontmatter.date} className="text-xs text-gray-400 font-medium">
            {formattedDate}
          </time>
          <span className="text-gray-200">·</span>
          <span className="text-xs text-gray-400">{readingTime}</span>
        </div>

        <h2 className="font-bold text-gray-900 mb-2 leading-snug group-hover:text-emerald-700 transition-colors text-lg line-clamp-2">
          <Link href={`/blog/${slug}`} className="after:absolute after:inset-0">
            {frontmatter.title}
          </Link>
        </h2>

        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 flex-1">{excerpt}</p>

        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
          {frontmatter.authorImage && (
            <Image
              src={frontmatter.authorImage}
              alt={frontmatter.author}
              width={24}
              height={24}
              className="rounded-full object-cover"
            />
          )}
          <span className="text-xs font-medium text-gray-600">{frontmatter.author}</span>
        </div>
      </div>
    </article>
  );
}
