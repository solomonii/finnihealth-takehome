"use client";
import styles from "@/lib/styles/Search.module.css";

export default function Search({ searchQuery, setSearchQuery }) {
return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}
