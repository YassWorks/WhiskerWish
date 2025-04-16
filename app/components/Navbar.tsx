import React from "react";
import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";

const Navbar = async () => {
    const session = await auth();

    return (
        <header className="px-3 py-5 bg-orange-300 text-white flex justify-between items-center">
            <nav className="flex items-center w-full">
                <Link href="/" className="">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={60}
                        height={30}
                        className="transition-transform duration-200 hover:brightness-105 hover:-translate-y-1"
                    />
                </Link>
                <div className="ml-auto flex items-center space-x-4">
                    <Link
                        href="/about"
                        className="text-lg hover:text-orange-500"
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className="text-lg hover:text-orange-500"
                    >
                        Contact
                    </Link>

                    {session && session?.user ? (
                        <>
                            <Link
                                href="/profile"
                                className="text-lg hover:text-orange-500"
                            >
                                Profile
                            </Link>
                            
                            <form
                                action={async () => {
                                    "use server";

                                    await signOut({ redirectTo: "/" });
                                }}
                            >
                                <button
                                    type="submit"
                                    className="text-lg hover:text-orange-500 cursor-pointer"
                                >
                                    Logout
                                </button>
                            </form>

                            <div className="border bg-orange-500 px-3 py-1 rounded">
                                <Link
                                    href="/adopt"
                                    className="text-white font-semibold hover:text-black"
                                >
                                    Adopt now!
                                </Link>
                            </div>

                        </>
                    ) : (
                        <>
                            <div>
                                <form
                                    action={async () => {
                                        "use server";

                                        await signIn("github");
                                    }}
                                >
                                    <button
                                        type="submit"
                                        className="text-lg hover:text-orange-500 cursor-pointer"
                                    >
                                        Login
                                    </button>
                                </form>
                            </div>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
