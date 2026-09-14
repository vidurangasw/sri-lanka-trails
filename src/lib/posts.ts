import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostFrontmatter {
  title: string;
  date: string;
  description: string;
  coverImage: string;
  author: string;
  authorImage?: string;
  tags?: string[];
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
  readingTime: string;
  excerpt: string;
}

function ensurePostsDirectory() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
}

export function getAllPosts(): Post[] {
  ensurePostsDirectory();
  
  const fileNames = fs.readdirSync(postsDirectory).filter(
    (file) => file.endsWith('.md') || file.endsWith('.mdx')
  );

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.(md|mdx)$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    // Extract a plain-text excerpt (first ~160 chars of content)
    const rawExcerpt = content
      .replace(/!\[.*?\]\(.*?\)/g, '') // remove images
      .replace(/#{1,6}\s/g, '')        // remove headings
      .replace(/\*\*/g, '')            // remove bold
      .replace(/\*/g, '')              // remove italics
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // replace links with text
      .trim()
      .slice(0, 160);

    return {
      slug,
      frontmatter: data as PostFrontmatter,
      content,
      readingTime: stats.text,
      excerpt: rawExcerpt + (rawExcerpt.length === 160 ? '...' : ''),
    };
  });

  // Sort by date, newest first
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | null {
  ensurePostsDirectory();

  const extensions = ['.md', '.mdx'];
  let fullPath: string | null = null;

  for (const ext of extensions) {
    const candidate = path.join(postsDirectory, `${slug}${ext}`);
    if (fs.existsSync(candidate)) {
      fullPath = candidate;
      break;
    }
  }

  if (!fullPath) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  const rawExcerpt = content
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/#{1,6}\s/g, '')
    .replace(/\*\*/g, '')
    .replace(/\*/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .trim()
    .slice(0, 160);

  return {
    slug,
    frontmatter: data as PostFrontmatter,
    content,
    readingTime: stats.text,
    excerpt: rawExcerpt + (rawExcerpt.length === 160 ? '...' : ''),
  };
}

export function getAllSlugs(): string[] {
  ensurePostsDirectory();
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
    .map((file) => file.replace(/\.(md|mdx)$/, ''));
}
