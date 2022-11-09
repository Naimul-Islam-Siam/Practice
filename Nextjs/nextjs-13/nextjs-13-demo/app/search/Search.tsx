"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

export default function Search() {
   const [search, setSearch] = useState("");
   const router = useRouter();

   const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSearch("");
      router.push(`/search/${search}`);
   };

   return (
      <form onSubmit={handleSearch}>
         <input 
            type="text" 
            value={search} 
            placeholder="Enter Search Term"
            onChange={(e) => setSearch(e.target.value)}
         />
         <button className="bg-black text-white px-3 py-1 rounded-md ml-2">Search</button>
      </form>
   );
};