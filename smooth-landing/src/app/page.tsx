// app/horoscope/result/[result_id]/page.tsx

import { Metadata } from "next";
import config from "../../utils/app.config";
import LandingPageComponent from "../../components/landing-page/landing-page.component";



// Generate dynamic metadata
export async function generateMetadata(): Promise<Metadata> {

  const title = "";
  const description = "";
  const keyword = "";
  const imgCover = config.hostUrl + "images/share-cover.jpg";
  return {
    title: title, // Dynamic title from API
    description: description, // Dynamic description from API
    // Open Graph metadata for better SEO and social sharing
    openGraph: {
      title: title, // Dynamic title from API
      description: description, // Dynamic description from API
      images: imgCover
      // You can add more Open Graph properties here
      // e.g., images, url, etc.
    },
    // Twitter card metadata
    twitter: {
      card: 'summary_large_image',
      title: title, // Dynamic title from API
      description: description, // Dynamic description from API
      images: imgCover
      // Add Twitter-specific properties if needed
    },
    // Additional meta tags
    keywords: keyword, // Example: <meta name="keywords" content="horoscope, astrology, AI" />
    icons: {
      icon: config.hostUrl + "favicon.ico" // Path to the favicon
    }
    // Note: In Next.js 13+, you can add additional meta tags directly
  };
}

// Page component
export default async function LandingPage() {

  try {

    return (
      <div>
        <LandingPageComponent />
      </div>
    );
  } catch (error) {
    console.error(error);
    return (
      <div>
        <h1>Error Fetching Horoscope Result</h1>
        <p>There was a problem retrieving your horoscope result. Please try again later.</p>
      </div>
    );
  }
}
