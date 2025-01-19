export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-80">
      <div className="flex items-center space-x-2">
        <div className="text-xl font-semibold mb-1 text-gray-800"> Loading... </div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};