import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col bg-white items-center px-12 py-8 gap-4 rounded-xl shadow">
        <h1 className="text-9xl font-bold text-red-600">404</h1>
        <h3 className="text-4xl">Page Not Found !</h3>
      </div>
    </div>
  );
};

export default NotFound;
