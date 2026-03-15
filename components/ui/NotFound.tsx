import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-9xl font-extrabold text-gray-200 dark:text-gray-800 tracking-widest">
        404
      </h1>
      <div className="bg-blue-600 text-white px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-semibold md:text-3xl text-gray-800 dark:text-white">
          Wait, where am I?
        </h2>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          Sorry, we couldn't find the page you're looking for. 
          It might have been moved or deleted.
        </p>
        
        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}