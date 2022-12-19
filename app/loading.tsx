export default function Loading() {
  return  (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
      <div className="animate-spin h-20 w-20 border-4 border-blue-500 rounded-full border-t-transparent"></div>
    </div>
  )
}
