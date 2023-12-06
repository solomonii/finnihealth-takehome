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

  const [firstname, setFirstname] = useState(
    selectedPatient?.patient.firstname
  );
  const [lastname, setLastname] = useState(selectedPatient?.patient.lastname);
  const [dob, setDob] = useState(selectedPatient?.patient.dob);
  const [addresses, setAddresses] = useState(
    selectedPatient?.patient.address || []
  );
  const [notes, setNotes] = useState(selectedPatient?.patient.notes);

  const handleAddressChange = (index, value) => {
    const updatedAddresses = [...addresses];
    updatedAddresses[index] = value;
    setAddresses(updatedAddresses);
  };

  const addAddressField = () => {
    const newAddresses = [...addresses, ""];
    setAddresses(newAddresses);
  };

  const removeAddressField = (indexToRemove) => {
    const filteredAddresses = addresses.filter(
      (_, index) => index !== indexToRemove
    );
    setAddresses(filteredAddresses);
  };

  const handleSubmit = (e) => {
    const updatedPatientData = {
      firstname: firstname,
      lastname: lastname,
      dob: dob,
      address: addresses,
      notes: notes,
    };

    handleUpdatePatient(updatedPatientData, selectedPatient.patient.id);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal} ref={modalRef}>
        <h2 className={styles.modalHeader}>
          {selectedPatient?.patient.firstname}{" "}
          {selectedPatient?.patient.lastname}
        </h2>
        <form action={handleSubmit} onSubmit={onClose}>
          <div className={styles.formGroup}>
            <label for="firstname">First name: </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              value={firstname}
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
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label for="dob">Date of Birth: </label>
            <input
              type="date"
              name="dob"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>

          <div className={styles.addressFormGroup}>
            <label htmlFor="address">Addresses:</label>
            {addresses.map((address, index) => (
              <div key={index} className={styles.addressInput}>
                <span
                  className={styles.removeButton}
                  onClick={() => removeAddressField(index)}
                >
                  &times;
                </span>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => handleAddressChange(index, e.target.value)}
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addAddressField}
              className={styles.addButton}
            >
              Add Another Address
            </button>
          </div>

          <div className={styles.formGroup}>
            <label for="notes">Notes: </label>
            <textarea
              name="notes"
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

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
