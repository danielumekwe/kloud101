import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import { BLOG_URL, getLatestPosts } from "@/lib/blog";

const dateFormat = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default async function HomeBlog() {
  const posts = await getLatestPosts(3);
  if (posts.length === 0) return null;

  return (
    <section className="section bg-card border-y">
      <div className="wrap">
        <SectionHeading
          eyebrow="FROM THE BLOG"
          title="Latest from the Kloud101 blog."
          text="Guides, product news and practical advice for running your infrastructure."
          aside={
            <a href={BLOG_URL} className="blog-all-link">
              Visit the blog
              <ArrowRight className="size-4" />
            </a>
          }
        />

        <div className="blog-grid">
          {posts.map((post) => (
            <a key={post.url} href={post.url} className="blog-card">
              <div className="blog-thumb">
                {post.image && (
                  <Image src={post.image} alt="" width={800} height={450} sizes="(max-width: 980px) 100vw, 33vw" />
                )}
              </div>
              <div className="blog-body">
                <time dateTime={post.published}>{dateFormat.format(new Date(post.published))}</time>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="blog-read">
                  Read article
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
