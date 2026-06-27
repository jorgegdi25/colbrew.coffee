import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    // Next.js se encargará de optimizar, comprimir y convertir a WebP/AVIF automáticamente
  },
};

export default withNextIntl(nextConfig);
