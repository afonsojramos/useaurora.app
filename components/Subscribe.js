import { useState } from "react";

export const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (event) => setEmail(event.target.value);

  const handleSubmit = async () => {
    if (email === "") {
      setMessage(
        "Bro, ghosts are not admitted in the newsletters, you know? 👻"
      );
      return false;
    }

    const res = await fetch("/api/mailchimp", {
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (res.ok) {
      setMessage("You have just subscribed Correctly! 👍");
      setEmail("");
    } else {
      setMessage("An error has occurred during subscription.. 😮");
    }
  };

  return (
    <div className="border border-gray-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
      <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
        Subscribe to the newsletter
      </p>
      <p className="my-1 text-gray-800 dark:text-gray-200">
        Get early access to the new Aurora releases!
      </p>
      <form className="relative my-4">
        <input
          onChange={(e) => handleChange(e)}
          value={email}
          aria-label="Email for newsletter"
          placeholder="tim@apple.com"
          type="email"
          autoComplete="email"
          required=""
          className="px-4 py-2 mt-1 focus:ring-green-500 focus:border-green-500 block w-full text-xs sm:text-base border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
        <button
          onClick={() => handleSubmit()}
          className="flex items-center justify-center absolute right-1 top-1 px-4 font-medium text-xs sm:text-base h-6 sm:h-8 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28"
          type="button"
        >
          Subscribe
        </button>
      </form>
      {message.length > 0 && (
        <p className="text-sm text-gray-800 dark:text-gray-200 mt-3">
          {message}
        </p>
      )}
    </div>
  );
};
