import Link from "next/link";

export default function Header() {
   return (
      <header className="bg-black p-5 mb-5 flex justify-start gap-6">
         <Link href="/" className="text-white">Home</Link>
         <Link href="/todos" className="text-white">Todo</Link>
         <Link href="/search" className="text-white">Search</Link>
      </header>
   );
};