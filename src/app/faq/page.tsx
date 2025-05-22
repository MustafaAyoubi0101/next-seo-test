import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl m-auto space-y-3 bg-white p-14 rounded-lg">
      <h1 className="text-3xl font-bold">Frequently Asked Questions (FAQ)</h1>
      <p>Welcome to our FAQ section! Here, you&apos;ll find quick answers to the most common questions
        about our services, support, and more.</p>
      <div>
        <h2 className="font-bold text-lg">What is this website about?</h2>
        <p>We provide top-notch solutions for web development, SEO optimization, and tech education through articles and tutorials.</p>
      </div>

      <div>
        <h2 className="font-bold text-lg">Is this website SEO friendly?</h2>
        <p>Absolutely! This page is structured with proper HTML tags, clear headings, and rich content optimized for search engines.</p>
      </div>

      <div>
        <h2 className="font-bold text-lg">How often is the content updated?</h2>
        <p>We update our content regularly to ensure that you&apos;re always getting the most accurate and useful information.</p>
      </div>

      <div>
        <h2 className="font-bold text-lg">Can I contact support?</h2>
        <p>Of course! You can reach out to our support team via our contact form or by emailing us directly at support@example.com.</p>
      </div>

      <div>
        <h2 className="font-bold text-lg">Where can I learn more about your services?</h2>
        <p>Visit our Services page to explore everything we offer, including web development, SEO, and digital strategy consulting.</p>
      </div>
    </div>
  );
}
