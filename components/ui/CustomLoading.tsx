export default function CustomLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
      {/* Animated Spinner */}
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-200 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
      </div>
      
      {/* Text with pulsing effect */}
      <div className="flex flex-col items-center">
        <p className="text-lg font-medium text-gray-600 dark:text-gray-300 animate-pulse">
          Loading content...
        </p>
        <p className="text-sm text-gray-400">Just a moment</p>
      </div>
    </div>
  );
}