import { client } from "@/sanity/lib/client";
import { TopNavBar } from "@/components/TopNavBar";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const query = `*[_type == "post"] { slug }`;
  const posts = await client.fetch(query);
  return posts.map((post: any) => ({
    slug: post.slug.current,
  }));
}

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    mainImage,
    publishedAt,
    body,
    "authorName": author->name,
    "authorImage": author->image,
    "categories": categories[]->title
  }`;
  return client.fetch(query, { slug });
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl">Historia no encontrada</h1>
      </div>
    );
  }

  // Portable text custom components for styling
  const components = {
    block: {
      normal: ({ children }: any) => <p className="font-inter text-lg text-[#4a4a4a] leading-relaxed mb-6">{children}</p>,
      h2: ({ children }: any) => <h2 className="font-montserrat text-3xl font-bold text-[#1a281d] mt-12 mb-6">{children}</h2>,
      h3: ({ children }: any) => <h3 className="font-montserrat text-2xl font-bold text-[#1a281d] mt-10 mb-4">{children}</h3>,
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-[#b4843b] pl-6 my-8 italic text-xl text-[#1a281d]">
          {children}
        </blockquote>
      ),
    },
    marks: {
      link: ({ children, value }: any) => {
        const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
        return (
          <a href={value.href} rel={rel} className="text-[#b4843b] underline hover:text-[#9a6f30] transition-colors">
            {children}
          </a>
        );
      },
    },
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen font-inter text-[#4a4a4a]">
      <TopNavBar />
      
      <main>
        {/* HERO IMAGE */}
        <div className="w-full h-[50vh] md:h-[60vh] relative">
          {post.mainImage ? (
            <img 
              src={urlForImage(post.mainImage)?.url()} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-[#1a281d]/90"></div>
          )}
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute top-32 left-6 md:left-16 z-10">
            <Link href="/historias" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Volver a historias</span>
            </Link>
          </div>
        </div>

        {/* POST CONTENT */}
        <article className="max-w-[800px] mx-auto px-6 py-16 md:py-24 relative -mt-32 z-10 bg-[#FDFBF7] rounded-t-3xl shadow-xl">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-3 mb-6">
              <p className="text-[#b4843b] font-bold tracking-wide uppercase text-sm">
                {new Date(post.publishedAt).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              {post.categories && post.categories.length > 0 && (
                <>
                  <span className="text-[#EBE7DD]">•</span>
                  <div className="flex gap-2">
                    {post.categories.map((cat: string, i: number) => (
                      <span key={i} className="text-[12px] uppercase tracking-wider font-semibold bg-[#F8F7F2] border border-[#EBE7DD] text-[#4a4a4a] px-3 py-1 rounded-sm">
                        {cat}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-[#1a281d] leading-tight mb-8">
              {post.title}
            </h1>
            <div className="w-16 h-1 bg-[#b4843b] mx-auto mb-8"></div>
            
            {post.authorName && (
              <div className="flex items-center justify-center gap-4">
                {post.authorImage && (
                  <img 
                    src={urlForImage(post.authorImage)?.width(50).height(50).url()} 
                    alt={post.authorName} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#EBE7DD]"
                  />
                )}
                <span className="font-medium text-[#1a281d]">Escrito por {post.authorName}</span>
              </div>
            )}
          </div>

          <div className="prose prose-lg max-w-none">
            <PortableText value={post.body} components={components} />
          </div>
        </article>

        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
