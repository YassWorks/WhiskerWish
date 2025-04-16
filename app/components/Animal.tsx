import React from "react";
import Image from "next/image";

function Animal({ id }: { id: string }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-xs w-full p-4 flex flex-col items-center text-center transition hover:shadow-xl">
            <div className="overflow-hidden rounded-xl mb-4 w-full h-60 relative">
                <Image
                    src={`/animal/${id}.jpg`}
                    alt={`Photo of ${id}`}
                    fill
                    className="object-cover rounded-xl"
                />
            </div>

            <h2 className="text-xl font-bold text-gray-800">{id}</h2>
            <p className="text-gray-600 text-sm mt-1"></p>

            <a
                href="mailto:hello@whiskerwish.org"
                className="mt-4 bg-orange-500 text-white px-5 py-2 rounded-xl hover:bg-orange-600 transition"
            >
                🐾 Contact Shelter
            </a>
        </div>
    );
}

export default Animal;
