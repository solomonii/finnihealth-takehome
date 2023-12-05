"use client";

import Search from "./Search";
import PatientsTable from "./PatientsTable";

import styles from "@/app/dashboard/dashboard.module.css";
import { useState } from "react";

export default function DashboardContainer({ patients }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPatients = patients.filter((patient) => {
    return (
      patient.firstname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.lastname.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div>
      <h2 className={styles.header}>Patients</h2>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <PatientsTable patients={filteredPatients} searchQuery={searchQuery} />
    </div>
  );
}
