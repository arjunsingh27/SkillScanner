"use client"
import React from 'react';
import { AlertCircle } from 'lucide-react';

const NotFound = () => {
  const handleGoBack = () => {
    // This uses the browser's history API to go back to the previous page
    window.history.back();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <div className="w-full max-w-md space-y-8">
        {/* 404 Display */}
        <div className="text-center">
          <h1 className="text-9xl font-extrabold text-violet-600">404</h1>
          <div className="mt-2 text-3xl font-bold tracking-tight">Page not found</div>
          <div className="mt-2 text-gray-400">We couldn't find the page you're looking for.</div>
        </div>

        {/* Custom Alert */}
        <div className="border border-red-800 bg-red-950/50 p-4 rounded-md flex gap-3">
          <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-red-400">Oops!</p>
            <p className="text-red-200 text-sm">
              The page you requested doesn't exist or has been moved.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          <button 
            onClick={handleGoBack}
            className="px-4 py-2 border border-violet-700 text-violet-200 rounded-md hover:bg-violet-900 hover:text-violet-100 transition-all duration-300"
          >
            Go Back
          </button>
          <button 
            className="px-4 py-2 bg-violet-700 text-white rounded-md hover:bg-violet-600 transition-all duration-300"
            onClick={() => window.location.href = '/'}
          >
            Return Home
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center opacity-20 pointer-events-none">
          <div className="w-80 h-4 bg-gradient-to-r from-transparent via-violet-600 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;