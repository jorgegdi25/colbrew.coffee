"use client";
import { Reveal } from "./Reveal";
import { urlForImage } from "@/sanity/lib/image";
import { Link } from "../i18n/routing";
import { useTranslations } from "next-intl";
import { Image as SanityImage } from "sanity";

interface Article {
  title: string;
  slug: { current: string };
  mainImage: SanityImage;
  excerpt: string;
  categories?: { title: string }[];
}

interface NewsSectionProps {
  articles: Article[];
}

export function NewsSection({ articles }: NewsSectionProps) {
  const t = useTranslations("News");
  
  // Use static fallback if no articles are passed (or empty array)
  const displayArticles = articles && articles.length > 0 ? articles : [];

  if (displayArticles.length === 0) {
    return null; // Omit the section if there are no posts
  }

  return (
    <section className="py-24 bg-[#F8F7F2]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <Reveal>
          <div className="flex justify-between items-end mb-10 border-b border-[#e2dcd0] pb-4">
            <h2 className="font-montserrat text-[28px] font-bold text-[#1a281d]">
              {t("title")}
            </h2>
            <Link href="/historias" className="font-inter text-[14px] font-semibold text-[#b4843b] hover:underline">
              {t("viewAll")}
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayArticles.map((article) => {
              const category = article.categories && article.categories.length > 0 
                ? article.categories[0].title 
                : t("defaultCategory");
              const imageUrl = article.mainImage ? urlForImage(article.mainImage)?.url() : "/brand-1.webp";
              
              return (
                <Link href={`/historias/${article.slug.current}`} key={article.title} className="flex flex-col bg-transparent group cursor-pointer">
                  <div className="relative h-[240px] w-full mb-5 rounded-[1.5rem] overflow-hidden">
                    <img
                      src={imageUrl || "/brand-1.webp"}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-4 left-4 bg-[#b4843b] text-white font-inter text-[11px] font-bold px-4 py-2 rounded-full uppercase tracking-wide shadow-md">
                      {category}
                    </div>
                  </div>
                  <h3 className="font-montserrat text-[20px] font-bold text-[#1a281d] leading-snug mb-3 pr-4 group-hover:text-[#b4843b] transition-colors">
                    {article.title}
                  </h3>
                  <p className="font-inter text-[15px] text-[#4a4a4a] leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </Link>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
