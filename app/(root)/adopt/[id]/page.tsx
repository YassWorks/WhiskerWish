import React from "react";
import { auth, signIn } from "@/auth";
import Animal from "@/app/components/Animal";

const AnimalPage = async ({ params }: { params: { id: string } }) => {
    const session = await auth();
    const { id } = params;
    return (
        <>
            {session && session?.user ? (
                <>
                    <div className="flex flex-col items-center justify-center h-screen bg-orange-100 text-gray-800">
                        <Animal id={id}/>
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

export default AnimalPage;
