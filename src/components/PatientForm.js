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
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const userId = getUser()?.uid;
  const router = useRouter();

  return (
    <div className={styles.formContainer}>
      <form
        action={handleAddPatient}
        onSubmit={() => router.push("/dashboard")}
      >
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
            type="text"
            name="dob"
            id="dob"
            placeholder="12/1/1990"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">Select Status</option>
            <option value="Inquiry">Inquiry</option>
            <option value="Onboarding">Onboarding</option>
            <option value="Active">Active</option>
            <option value="Churned">Churned</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="1 Central Park West"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
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

        <input type="hidden" name="provider" value={userId} />

        <footer>
          <button type="submit" value="Add Patient">
            Submit
          </button>
        </footer>
      </form>
    </div>
  );
}
