import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-10 text-gray-800">
      <h2 className="text-2xl font-bold mb-4">Contacts</h2>
      <p className="mb-4">DevScope would love to hear from you!</p>

      <ul className="space-y-3">
        <li>
          <strong>Email:</strong>{' '}
          <a href="mailto:support@devscope.com" className="text-blue-600 hover:underline">
            support@devscope.com 😁
          </a>
        </li>
        <li>
          <strong>Twitter:</strong>{' '}
          <a href="https://twitter.com/" className="text-blue-600 hover:underline">
            @devscopecommunity 👻
          </a>
        </li>
        <li>
          <strong>Report a vulnerability:</strong>{' '}
          <a href="https://google.com" className="text-blue-600 hover:underline">
            devscopecommunity/security 🐛
          </a>
        </li>
        <li>
          To report a bug, please create{' '}
          <a href="https://github.com/mustafayoubi0101" className="text-blue-600 hover:underline">
            a bug report
          </a>{' '}
          in our open source repository.
        </li>
        <li>
          To request a feature, please{' '}
          <a href="https://github.com/" className="text-blue-600 hover:underline">
            start a new GitHub Discussion
          </a>{' '}
          in the Forem repo!
        </li>
      </ul>
    </div>
  );
}
