import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl m-auto space-y-3 bg-white p-14 rounded-lg">
      <h1 className="text-3xl text-center font-bold">Privacy Policy</h1>
      <em>Last Updated: September 01, 2025</em>

      <ol className="space-y-3">
        <li>
          <h2 className="font-bold text-lg">
            What&apos;s With the Defined Terms?
          </h2>
          <p>
            You&apos;ll notice that some words appear in quotes in this Privacy Policy.  They&apos;re called &ldquo;defined terms,&ldquo; and we use them so that we don&apos;t have to repeat the same language again and again.  They mean the same thing in every instance, to help us make sure that this Privacy Policy is consistent. We&apos;ve included the defined terms throughout because we want it to be easy for you to read them in context.
          </p>
        </li>
        <li>
          <h2 className="font-bold text-lg">
            WHAT DOES THIS PRIVACY POLICY APPLY TO?
          </h2>
          <p>
            This Privacy Policy applies to personal information
            processed by us, including on our websites, mobile applications, and other
            online or offline offerings — basically anything we do. To make this Privacy Policy easier to read,
            our websites, mobile applications, and other offerings are all collectively called the &ldquo;Services.&ldquo; Beyond this
            Privacy Policy, your use of the Services is subject to our DEV Community Terms and our Forem Terms.
            The Services include both our own community
            forum at https://www.dev.to (the &ldquo;DEV Community&ldquo;) and the open source tool we provide called &ldquo;Forem,&ldquo; available at https://www.forem.com which allows our customers to create and operate their own online forums.
            We collect personal information from two categories
            of people: (1) our customers, who use Forem and our hosting services to run and host their own forums (we&apos;ll call them &ldquo;Forem Operators&ldquo;), and (2) the people who interact with DEV-hosted forums, including forums provided by Forem Operators utilizing Forem and separately our own DEV Community (we&apos;ll call them &ldquo;Users&ldquo;).
            An Important Note for Users Since we provide hosting services for Forem Operators, technically we also process your information on their behalf. That processing is governed by the contracts that we have in place with each Forem Operator, not this Privacy Policy. In other words, when you share your data on a DEV-hosted forum operated by a Forem Operator, we at DEV are basically just the &ldquo;pipes&ldquo; — we process the data on behalf of the Forem Operator, but don&apos;t do anything with it ourselves beyond what we&apos;re required to do under our contract (and by law). So, if you post your information on a DEV-powered forum provided by a Forem Operator, that Forem Operator&apos;s privacy policy applies, and any questions or requests relating to your data on that service should be directed to that Forem Operator, not us. Likewise, if you use our mobile application, you may also interact with forums that use DEV&apos;s open-source tools but do all their hosting and data collection themselves.
            For those forums, we at DEV have no access to your data, so be sure to read the privacy policy of any third-party hosted forum before posting.
          </p>
        </li>
        <li>
          <h2 className="font-bold text-lg">Cookies: Not the Tasty Kind</h2>
          <p>
            Yes, we use cookies. No, they won&apos;t satisfy your sweet tooth.
            They just help us track what you&apos;re up to on our site.
            It&apos;s like having a friendly but slightly nosy neighbor.
          </p>
        </li>
        <li>
          <h2 className="font-bold text-lg">
            PERSONAL INFORMATION WE COLLECT
          </h2>
          <p>
            The categories of personal information we collect depend on whether you&apos;re a User or Forem Operator, how you interact with us, our Services, and the requirements of applicable law. Breaking it down, we collect three types of information: (1) information that you provide to us directly, (2) information we obtain automatically when you use our Services, and (3) information we get about you from other sources (such as third-party services and organizations). More details are below.
          </p>
        </li>
        <li>
          <h2 className="font-bold text-lg">Third-Party Shenanigans</h2>
          <p>
            Sometimes, our site may have links to other places. We&apos;re not
            responsible for their shenanigans. Click wisely, young padawan.
          </p>
        </li>
        <li>
          <h2 className="font-bold text-lg">Information You Provide to Us Directly</h2>
          <p>
            Account Creation (for Forem Operators): We&apos;ll require your name and email address to get started, as well as some details about the Forem you want to run, such as: whether you&apos;re running the Forem on your own behalf or as part of an organization, and details about the community you want to support (how big is it, what topics does it cover, where do members currently communicate, how/if the community earns money, whether the community is open, invite-only or paid, any existing social media accounts, etc.) You&apos;ll need to tell us a bit about your
            personal coding background, and you&apos;ll have
            the option to provide your DEV username as well, if you are a member of the DEV.to community.
          </p>
        </li>
        <li>
          <h2 className="font-bold text-lg">Information Collected Automatically</h2>
          <p>
            Automatic Data Collection. We may collect certain information automatically when you use our Services, such as your Internet protocol (IP) address, user settings, MAC address, cookie identifiers, mobile carrier, mobile advertising and other unique identifiers, browser or device information, location information (including approximate location derived from IP address), and Internet service provider. We may also automatically collect information regarding your use of our Services, such as pages that you visit before, during and after using our Services, information about the links you click, the types of content you interact with, the frequency and duration of your activities, and other information about how you use our Services. In addition, we may collect information that other people provide about you when they use our Services, including information about you when they tag you in their posts.

            Cookies, Pixel Tags/Web Beacons, and Other Technologies. We, as well as third parties that provide content, advertising, or other functionality on our Services, may use cookies, pixel tags, local storage, and other technologies (&ldquo;Technologies&ldquo;) to automatically collect information through your use of our Services.

            Cookies. Cookies are small text files placed in device browsers that store preferences and facilitate and enhance your experience.

            Pixel Tags/Web Beacons. A pixel tag (also known as a web beacon) is a piece of code embedded in our Services that collects information about engagement on our Services. The use of a pixel tag allows us to record, for example, that a user has visited a particular web page or clicked on a particular advertisement. We may also include web beacons in e-mails to understand whether messages have been opened, acted on, or forwarded.
          </p>
        </li>
      </ol>
      <p>
        By using our site, you agree to these terms. If you don&apos;t, well,
        there&apos;s always the offline world, where the privacy policy is
        simply called &quot;common sense.&quot;
      </p>
    </div>
  );
}
