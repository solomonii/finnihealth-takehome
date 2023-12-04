"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Search({ placeholder }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term) {
    const params = new URLSearchParams(searchParams);
    term ? params.set("query", term) : params.delete("query");
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div>
      <label>Search</label>
      <input
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  );
}
