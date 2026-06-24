import { client } from "@/sanity/lib/client";
import { TopNavBar } from "@/components/TopNavBar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { CtaSection } from "@/components/CtaSection";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Historias | COLBREW™",
  description: "Lee las historias de las familias caficultoras, los músicos jóvenes y el impacto real que construimos juntos en Colombia.",
};


// Fetch posts from Sanity
async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt,
    "authorName": author->name,
    "categories": categories[]->title
  }`;
  return client.fetch(query);
}

export default async function HistoriasPage() {
  const posts = await getPosts();

  return (
    <div className="bg-[#FDFBF7] min-h-screen font-inter text-[#4a4a4a]">
      <TopNavBar />
      
      <main>
        {/* HERO */}
        <section className="relative w-full min-h-[450px] md:min-h-[550px] flex items-center pt-24 md:pt-32 pb-12">
          <div className="absolute inset-0">
             <img 
               src="/raw-red-green-coffee-cherries-tree-branch-coffee-plantation-mountains-colombia.jpg" 
               alt="Cerezas de café en la planta" 
               className="w-full h-full object-cover" 
             />
             <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16 w-full">
            <div className="max-w-2xl">
              <Reveal>
                <h1 className="font-montserrat text-[48px] md:text-[72px] font-bold text-white leading-[1.1] mb-6">
                  Historias
                </h1>
                <div className="w-16 h-1 bg-[#b4843b] mb-8"></div>
                <p className="font-inter text-[16px] md:text-[20px] text-white/90 leading-relaxed font-medium">
                  Explora el mundo del café colombiano. Desde las historias de nuestras familias caficultoras hasta los proyectos sociales, la cultura y las oportunidades que construimos en el territorio.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* POSTS GRID */}
        <section className="py-20 bg-[#F8F7F2]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16">
            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {posts.map((post: any, index: number) => (
                  <Reveal key={post._id} delay={index * 0.1}>
                    <Link href={`/historias/${post.slug.current}`} className="group block bg-[#FDFBF7] rounded-2xl overflow-hidden border border-[#EBE7DD] hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                      <div className="relative h-64 w-full overflow-hidden">
                        {post.mainImage ? (
                          <img 
                            src={urlForImage(post.mainImage)?.url()} 
                            alt={post.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        ) : (
                          <div className="w-full h-full bg-[#1a281d]/10 flex items-center justify-center">
                            <span className="text-[#1a281d]/50">Sin imagen</span>
                          </div>
                        )}
                      </div>
                      <div className="p-8 flex-grow flex flex-col">
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          <span className="text-sm text-[#b4843b] font-bold tracking-wide">
                            {new Date(post.publishedAt).toLocaleDateString('es-CO', { year: 'numeric', month: 'short', day: 'numeric' })}
                          </span>
                          {post.categories && post.categories.length > 0 && (
                            <>
                              <span className="text-[#EBE7DD]">•</span>
                              <div className="flex gap-2">
                                {post.categories.slice(0, 2).map((cat: string, i: number) => (
                                  <span key={i} className="text-[12px] uppercase tracking-wider font-semibold bg-[#F8F7F2] border border-[#EBE7DD] text-[#4a4a4a] px-2 py-0.5 rounded-sm">
                                    {cat}
                                  </span>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                        <h2 className="font-montserrat text-2xl font-bold text-[#1a281d] mb-4 group-hover:text-[#b4843b] transition-colors line-clamp-4">
                          {post.title}
                        </h2>
                        <p className="font-inter text-[#4a4a4a] leading-relaxed mb-6 flex-grow line-clamp-3">
                          {post.excerpt}
                        </p>
                        {post.authorName && (
                          <div className="text-sm text-[#1a281d]/70 font-medium border-t border-[#EBE7DD] pt-4 mt-auto">
                            Por {post.authorName}
                          </div>
                        )}
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-xl text-[#4a4a4a]">Pronto compartiremos nuevas historias de origen.</p>
              </div>
            )}
          </div>
        </section>

        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
