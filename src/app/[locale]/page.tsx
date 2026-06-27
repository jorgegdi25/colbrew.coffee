import { TopNavBar } from "@/components/TopNavBar";
import { HeroSection } from "@/components/HeroSection";
import { OriginsSection } from "@/components/OriginsSection";
import { PillarsSection } from "@/components/PillarsSection";
import { ProcessBar } from "@/components/ProcessBar";
import { NewsSection } from "@/components/NewsSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

import { client } from "@/sanity/lib/client";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  const query = `*[_type == "post"] | order(publishedAt desc)[0...3] {
    title,
    slug,
    mainImage,
    excerpt,
    categories[]->{ title }
  }`;
  const posts = await client.fetch(query);

  return (
    <>
      <TopNavBar />
      <main>
        <HeroSection />
        <PillarsSection />
        <OriginsSection />
        <ProcessBar />
        <NewsSection articles={posts} />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
