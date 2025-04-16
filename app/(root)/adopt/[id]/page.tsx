import React from "react";

function Animal({ params }: { params: { id: string } }) {
    const { id } = params;
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-orange-100 text-gray-800">
          <h2 className="text-2xl font-bold mb-4">Animal: {id}</h2>
        </div>  
      )
}

export default Animal;
