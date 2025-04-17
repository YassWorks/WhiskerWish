import React from "react";

function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-pink-100 flex flex-col items-center justify-center p-6 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
                🐾 About WhiskerWish
            </h1>

            <p className="text-lg text-gray-700 max-w-2xl mb-6">
                At <strong>WhiskerWish</strong>, we&rsquo;re more than just a pet
                adoption platform — we&rsquo;re a passionate team of animal lovers on
                a mission to connect rescue pets with their forever families.
            </p>

            <p className="text-gray-700 max-w-2xl mb-6">
                Every day, thousands of amazing animals wait patiently in
                shelters and foster homes, hoping for a second chance. We&rsquo;re
                here to make those hopeful tails wag and those lonely hearts
                whole — one adoption at a time.
            </p>

            <div className="mb-8 text-left max-w-xl w-full">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    🧡 What We Believe In
                </h2>
                <ul className="list-disc list-outside pl-6 text-gray-700 text-left">
                    <li>Every animal deserves love, care, and a safe home</li>
                    <li>Adoption should be joyful, simple, and supported</li>
                    <li>Education and awareness can change lives</li>
                    <li>Community makes compassion stronger</li>
                </ul>
            </div>

            <p className="text-gray-600 text-sm italic max-w-md">
                Whether you&rsquo;re adopting, fostering, volunteering, or spreading
                the word — you&rsquo;re part of something special. Thank you for being
                here. 💛
            </p>
        </div>
    );
}

export default About;
