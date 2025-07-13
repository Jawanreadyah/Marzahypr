import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Marza Hypermarket Qatar | #1 Premium Hypermarket in Doha | Best Grocery Store Qatar 2025",
  description = "🏆 Qatar's #1 Premium Hypermarket since 1999! Fresh produce, halal foods, electronics & family essentials. 500K+ happy customers. Free parking, home delivery. Visit Marza Hypermarket Doha today!",
  keywords = "Marza Hypermarket Qatar, best hypermarket Qatar, #1 supermarket Doha, premium grocery store Qatar, fresh produce Qatar, halal food Qatar, Qatar hypermarket 2025, Doha shopping center, family supermarket Qatar, organic food Qatar, electronics Qatar, home delivery Qatar, grocery shopping Doha",
  image = "https://i.imghippo.com/files/QMQN4184XZk.jpg",
  url = "https://marzahypermarket.com/",
  type = "website",
  structuredData
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Marza Hypermarket Qatar" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="ar_QA" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta name="twitter:site" content="@marzahypermarket" />
      <meta name="twitter:creator" content="@marzahypermarket" />
      
      {/* Canonical */}
      <link rel="canonical" href={url} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#d4af37" />
      <meta name="msapplication-TileColor" content="#d4af37" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Marza Hypermarket" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="QA" />
      <meta name="geo.placename" content="Doha, Qatar" />
      <meta name="geo.position" content="25.276987;51.520008" />
      <meta name="ICBM" content="25.276987, 51.520008" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;