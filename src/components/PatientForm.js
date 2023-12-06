"use client";

import { useState } from "react";
import { handleAddPatient } from "@/app/actions";
import getUser from "@/lib/getUser";
import { useRouter } from "next/navigation";
import styles from "@/lib/styles/PatientForm.module.css";

export default function PatientForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [dob, setDob] = useState("");
  const [status, setStatus] = useState("");
  const [addresses, setAddresses] = useState([""]);
  const [notes, setNotes] = useState("");

  const userId = getUser()?.uid;
  const router = useRouter();

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
    const formData = {
      firstname: firstname,
      lastname: lastname,
      dob: dob,
      status: status,
      address: addresses,
      notes: notes,
      provider: userId,
    };

    handleAddPatient(formData);
  };

  return (
    <div className={styles.formContainer}>
      <form action={handleSubmit} onSubmit={() => router.push("/dashboard")}>
        <div className={styles.formGroup}>
          <label>First Name:</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="John"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Smith"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            id="dob"
            placeholder="12/1/1990"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Status:</label>
          <select
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Select Status</option>
            <option value="Inquiry">Inquiry</option>
            <option value="Onboarding">Onboarding</option>
            <option value="Active">Active</option>
            <option value="Churned">Churned</option>
          </select>
        </div>

        <div className={styles.addressFormGroup}>
          <label>Address:</label>
          {addresses.map((address, index) => (
            <div key={index} className={styles.addressInput}>
              {index !== 0 && (
                <span
                  className={styles.removeButton}
                  onClick={() => removeAddressField(index)}
                >
                  &times;
                </span>
              )}
              <input
                type="text"
                name={`address-${index}`}
                placeholder="1 Central Park West"
                value={address}
                onChange={(e) => {
                  const updatedAddresses = [...addresses];
                  updatedAddresses[index] = e.target.value;
                  setAddresses(updatedAddresses);
                }}
              />
              {index === addresses.length - 1 && (
                <button
                  className={styles.addButton}
                  type="button"
                  onClick={addAddressField}
                >
                  Add Another Address
                </button>
              )}
            </div>
          ))}
        </div>

        <div className={styles.formGroup}>
          <label>Notes:</label>
          <textarea
            name="notes"
            id="notes"
            placeholder="Patient has issue making eye contact..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <footer>
          <button
            className={styles.submitButton}
            type="submit"
            value="Add Patient"
          >
            Submit
          </button>
        </footer>
      </form>
    </div>
  );
}
