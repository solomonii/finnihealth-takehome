"use client";

import EditPatientDataModal from "./EditPatientDataModal";
import { useState } from "react";
import Search from "@/components/Search";
import { useSearchParams } from "next/navigation";
import styles from "@/app/dashboard/dashboard.module.css";

function PatientRow({ index, patient, openModal }) {
  return (
    <tr key={patient.id}>
      <td>{patient.firstname}</td>
      <td>{patient.lastname}</td>
      <td>{patient.dob}</td>
      <td>{patient.status}</td>
      <td>{patient.address}</td>
      <td>{patient.notes}</td>
      <td>
        <button onClick={() => openModal(index, patient)}>Edit</button>
      </td>
    </tr>
  );
}

export default function PatientsTable({ allPatients }) {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const searchParams = useSearchParams();
  const searchHit = allPatients.filter(
    (p) =>
      p.firstname === searchParams.get("query") ||
      p.lastname === searchParams.get("query")
  );
  let patients = searchHit.length === 0 ? allPatients : searchHit;

  const openModal = (index, patient) => {
    setSelectedPatient({ index, patient });
  };

  const closeModal = () => {
    setSelectedPatient(null);
  };

  return (
    <div className={styles.dashboard}>
      <Search />
      <table className={styles.table}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Status</th>
            <th>Address</th>
            <th>Notes</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <PatientRow index={index} patient={patient} openModal={openModal} />
          ))}
        </tbody>
      </table>

      <EditPatientDataModal
        isOpen={selectedPatient !== null}
        onClose={closeModal}
        selectedPatient={selectedPatient}
      />
    </div>
  );
}
