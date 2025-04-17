import React from "react";
import { auth } from "@/auth";

const Profile = async () => {
    const session = await auth();
    const user = session?.user;

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-orange-100">
            <h1 className="text-2xl font-bold mb-4">Profile</h1>
            <div className="mt-4 p-4 bg-white rounded shadow-md w-1/2">
                <h2 className="text-xl font-semibold">User Information</h2>
                <p className="mt-2">Your name: {user?.name}</p>
            </div>
        </div>
    );
};

export default Profile;
