import React from "react";

function Contact() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-100 to-purple-100 flex flex-col items-center justify-center p-6 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
                📬 Get in Touch
            </h1>

            <p className="text-lg text-gray-700 max-w-2xl mb-6">
                Have questions? Want to know more about adopting or fostering?
                Just want to say hi? We'd love to hear from you!
            </p>

            <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md text-left">
                <form className="flex flex-col gap-4">
                    <div>
                        <label
                            className="block text-gray-700 font-medium mb-1"
                            htmlFor="name"
                        >
                            Your Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
                            placeholder="e.g., Jane Doe"
                        />
                    </div>

                    <div>
                        <label
                            className="block text-gray-700 font-medium mb-1"
                            htmlFor="email"
                        >
                            Your Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
                            placeholder="e.g., jane@example.com"
                        />
                    </div>

                    <div>
                        <label
                            className="block text-gray-700 font-medium mb-1"
                            htmlFor="message"
                        >
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
                            placeholder="Write us a note..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-pink-500 text-white py-2 px-6 rounded-xl hover:bg-pink-600 transition"
                    >
                        🐾 Send Message
                    </button>
                </form>
            </div>

            <p className="text-sm text-gray-600 mt-6">
                Or reach us directly at{" "}
                <a
                    href="mailto:hello@whiskerwish.org"
                    className="text-pink-600 underline"
                >
                    hello@whiskerwish.org
                </a>
            </p>
        </div>
    );
}

export default Contact;
