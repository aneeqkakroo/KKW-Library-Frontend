export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 mt-10 border-t">
      <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-center">
        © {new Date().getFullYear()} KLibrary. Built with 💙 using Django + React.
      </div>
    </footer>
  );
}
