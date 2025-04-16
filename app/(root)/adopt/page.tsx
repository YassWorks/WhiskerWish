import React from "react";
import Link from "next/link";

function Adopt() {
    return <div className="flex flex-col items-center justify-center h-screen bg-orange-100 text-gray-800">
        <h2>Choose a buddy!</h2>
        <ul className="list-disc list-inside text-lg mt-4">
            <li><Link href="/adopt/sa3ida">Sa3ida</Link></li>
            <li><Link href="/adopt/monji">Monji</Link></li>
            <li><Link href="/adopt/sam3o">Sam3o</Link></li>
        </ul>
    </div>;
}

export default Adopt;
