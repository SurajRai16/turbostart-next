/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/event_media",
        destination: "/events-media",
        permanent: true,
      },
      {
        source: "/events_media",
        destination: "/events-media",
        permanent: true,
      },

      {
        source: "/engineering-life",
        destination: "/events-media/engineering-life",
        permanent: true,
      },
      {
        source: "/innovation-challenge",
        destination: "/events-media/innovation-challenge",
        permanent: true,
      },
      {
        source: "/startup-forum-highlights",
        destination: "/events-media/startup-forum-highlights",
        permanent: true,
      },
      {
        source: "/indian-startup-ecosystem",
        destination: "/blog/indian-startup-ecosystem",
        permanent: true,
      },
      {
        source: "/our-portfolio-companies-driving-innovation",
        destination: "/blog/our-portfolio-companies-driving-innovation",
        permanent: true,
      },
      {
        source: "/navigating-the-entrepreneurial-seas",
        destination: "/blog/navigating-the-entrepreneurial-seas",
        permanent: true,
      },
      {
        source: "/the-art-of-bringing-order-to-chaos",
        destination: "/blog/the-art-of-bringing-order-to-chaos",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
