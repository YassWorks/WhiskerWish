import React from "react";
import Link from "next/link";
import { auth, signIn } from "@/auth";

const Adopt = async () => {
    const session = await auth();

    return (
        <>
            {session && session?.user ? (
                <>
                    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 to-pink-100 text-gray-800 p-6">
                        <h2 className="text-4xl font-bold mb-4">
                            🐶 Choose Your New Buddy!
                        </h2>
                        <p className="text-lg text-gray-700 mb-8 text-center max-w-md">
                            Every pet is unique, full of love, and ready for a
                            second chance. Pick a name to meet your future
                            friend!
                        </p>

                        <ul className="flex flex-col gap-4 text-lg w-full max-w-sm">
                            {["sa3ida", "monji", "sam3o"].map((name) => (
                                <li key={name}>
                                    <Link
                                        href={`/adopt/${name}`}
                                        className="block text-center bg-white hover:bg-pink-200 text-pink-600 font-medium py-3 rounded-xl shadow-md transition"
                                    >
                                        🐾 Meet{" "}
                                        {name.charAt(0).toUpperCase() +
                                            name.slice(1)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center h-screen bg-orange-100 text-gray-800">
                    <p className="text-4xl text-center">
                        Please login to browse the pets available for adoption.
                    </p>
                    <form
                        action={async () => {
                            "use server";

                            await signIn("github");
                        }}
                    >
                        <button
                            type="submit"
                            className="mt-4 bg-gradient-to-br from-orange-300 to-orange-200 text-white px-4 py-2 rounded hover:text-orange-800 cursor-pointer text-2xl"
                        >
                            Login
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};

export default Adopt;
