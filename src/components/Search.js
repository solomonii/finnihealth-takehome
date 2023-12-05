"use client";
import { useState } from "react";
import styles from "@/lib/styles/Search.module.css";

export default function Search({ handleSearchChange }) {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchQuery}
        onChange={(e) => {
          handleSearchChange(e.target.value);
          setSearchQuery(e.target.value);
        }}
      />
    </div>
  );
}
