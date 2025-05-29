export default function Navbar() {

  return (
    <nav className="fixed w-full bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            AI Summarizer
          </span>
        </a>
      </div>
    </nav>
  );
}
