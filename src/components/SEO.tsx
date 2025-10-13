import { getFullUrl, getBaseUrl } from '@/lib/utils';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'profile' | 'article';
  structuredData?: Record<string, unknown>;
}

const SEO = ({
  title = "Shivam Sabbarwal - Senior Software Engineer & Full-Stack Developer",
  description = "Experienced full-stack software engineer with 7+ years building scalable web applications. Specialized in React, Node.js, TypeScript, and modern web technologies.",
  keywords = "software engineer, full-stack developer, React, Node.js, TypeScript, web development, software consultant, Shivam Sabbarwal",
  image,
  url,
  type = "website",
  structuredData
}: SEOProps) => {
  // Generate dynamic URLs if not provided
  const baseUrl = getBaseUrl();
  const fullUrl = url || getFullUrl();
  const profileImage = image || `${baseUrl}/assets/profile-pic.jpg`;
  const fullTitle = title.includes('Shivam Sabbarwal') ? title : `${title} | Shivam Sabbarwal`;
  
  return (
    <>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={profileImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Shivam Sabbarwal Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={profileImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </>
  );
};

export default SEO;
