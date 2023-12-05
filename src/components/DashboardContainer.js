"use client";

import Search from "./Search";
import FilterPatients from "./FilterPatients";
import PatientsTable from "./PatientsTable";

import styles from "@/app/dashboard/dashboard.module.css";
import { useState } from "react";

export default function DashboardContainer({ patients }) {
  const [filteredPatients, setFilteredPatients] = useState(patients);

  const handleFilterChange = (selectedOption) => {
    const filteredData = patients.filter((patient) => {
      return selectedOption === '' || selectedOption === patient.status;
    });

    setFilteredPatients(filteredData);
  }

  const handleSearchChange = (searchQuery) => {
    const filteredData = patients.filter((patient) => {
      return (
        patient.firstname.toLowerCase().includes(searchQuery.toLowerCase()) ||
        patient.lastname.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

    setFilteredPatients(filteredData);
  };
  

  return (
    <div>
      <h2 className={styles.header}>Patients</h2>
      <div className={styles.searchAndFilterContainer}>
        <Search handleSearchChange={handleSearchChange} />
        <FilterPatients handleFilterChange={handleFilterChange} />
      </div>
      <PatientsTable patients={filteredPatients} />
    </div>
  );
}
