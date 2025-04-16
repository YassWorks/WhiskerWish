// this is the home page. The first page the user sees. its the "/" page.
import Link from 'next/link';

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-100 to-blue-100 flex flex-col items-center justify-center p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
                🐾 Find Your New Best Friend
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mb-6 text-center">
                Welcome to <strong>WhiskerWish</strong> – where love begins with
                a paw.
                <br />
                Every pet deserves a loving home, and every home can be brighter
                with a loyal companion. Whether you're looking for a playful
                pup, a cuddly kitten, or a mellow senior pet, we’re here to help
                you find the perfect match.
            </p>
            <p className="italic text-pink-700 text-md mb-6">
                Adopt. Don't shop. Give rescued animals a second chance at
                happiness.
            </p>

            <div className="mb-8 text-left max-w-xl">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    ❤️ Why Adopt With Us?
                </h2>
                <ul className="list-disc list-outside pl-6 text-gray-700 text-left">
                    <li>Verified shelters and foster homes</li>
                    <li>Personalized pet matching</li>
                    <li>Easy and supportive adoption process</li>
                    <li>Lifelong resources and care tips</li>
                </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <Link className="bg-blue-500 text-white px-6 py-3 rounded-2xl hover:bg-blue-600 transition" href="/adopt">
                    ✨ Start the Adoption Journey
                </Link>
                <Link className="bg-gray-500 text-white px-6 py-3 rounded-2xl hover:bg-gray-600 transition" href="/about">
                    📘 About us
                </Link>
            </div>

            <footer className="mt-10 text-gray-500 text-sm">
                Together, we can make tails wag and hearts full.
            </footer>
        </div>
    );
}
