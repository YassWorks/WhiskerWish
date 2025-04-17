import React from "react";
import { auth, signIn } from "@/auth";
import Animal from "@/app/components/Animal";

type Params = {
    id: string;
};

const AnimalPage = async ({ params }: { params: Params }) => {
    const session = await auth();
    const { id } = params;

    return (
        <>
            {session && session.user ? (
                <div className="flex flex-col items-center justify-center min-h-screen bg-orange-100 text-gray-800">
                    <Animal id={id} />
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center min-h-screen bg-orange-100 text-gray-800 text-center px-4">
                    <p className="text-3xl md:text-4xl">
                        Please log in to browse our adoptable buddies!
                    </p>
                    <form
                        action={async () => {
                            "use server";
                            await signIn("github");
                        }}
                    >
                        <button
                            type="submit"
                            className="mt-6 bg-gradient-to-br from-orange-300 to-orange-200 text-white px-6 py-3 rounded-xl hover:text-orange-800 text-xl transition"
                        >
                            Login
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};

export default AnimalPage;
