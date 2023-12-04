"use client";

import { useState, useRef, useEffect } from "react";
import { handleUpdatePatient } from "@/app/actions";
import styles from "@/lib/styles/EditPatientDataModal.module.css";

export default function EditPatientDataModal({
  isOpen,
  onClose,
  selectedPatient,
}) {
  if (!isOpen) return null;
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose(); // Close modal if clicked outside
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal} ref={modalRef}>
        <span onClick={onClose}>&times;</span>
        <h1>
          {selectedPatient?.patient.firstname}{" "}
          {selectedPatient?.patient.lastname}
        </h1>
        <form action={handleUpdatePatient} onSubmit={onClose}>
          <div className={styles.formGroup}>
            <label for="firstname">First name: </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              value={firstname}
              placeholder={selectedPatient?.patient.firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label for="lastname">Last name: </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              value={lastname}
              placeholder={selectedPatient?.patient.lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label for="dob">Date of Birth: </label>
            <input
              type="text"
              name="dob"
              id="dob"
              value={dob}
              placeholder={selectedPatient?.patient.dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label for="address">Address: </label>
            <input
              type="text"
              name="address"
              id="address"
              value={address}
              placeholder={selectedPatient?.patient.address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label for="notes">Notes: </label>
            <input
              type="text"
              name="notes"
              id="notes"
              value={notes}
              placeholder={selectedPatient?.patient.notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
          <input
            type="hidden"
            name="patientId"
            value={selectedPatient?.patient.id}
          />

          <div className={styles.buttons}>
            <button type="submit" value="Update">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
