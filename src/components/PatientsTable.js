"use client";

import { useState } from "react";
import { handleUpdatePatient } from "@/app/actions";

const EditPatientDataModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div>
      <span onClick={onClose}>&times;</span>

      {children}
    </div>
  );
};

function PatientRow({ index, patient, openModal }) {
  return (
    <>
      <p>{patient.firstname}</p>
      <p>{patient.lastname}</p>
      <p>{patient.dob}</p>
      <p>{patient.address}</p>
      <p>{patient.notes}</p>
      <button onClick={() => openModal(index, patient)}>Edit</button>
      <p></p>
      <br />
    </>
  );
}

export default function PatientsTable({ patients }) {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const openModal = (index, patient) => {
    setSelectedPatient({ index, patient });
  };

  const closeModal = () => {
    setSelectedPatient(null);
  };

  return (
    <article>
      {patients.map((patient, index) => (
        <PatientRow index={index} patient={patient} openModal={openModal} />
      ))}

      <EditPatientDataModal
        isOpen={selectedPatient !== null}
        onClose={closeModal}
      >
        <h1>
          Update {selectedPatient?.patient.firstname}{" "}
          {selectedPatient?.patient.lastname}'s information
        </h1>
        <form action={handleUpdatePatient} onSubmit={closeModal}>
          <ul>
            <li>
              <label for="firstname">First name: </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                value={firstname}
                placeholder={selectedPatient?.patient.firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </li>
            <li>
              <label for="lastname">Last name: </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                value={lastname}
                placeholder={selectedPatient?.patient.lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </li>
            <li>
              <label for="dob">Date of Birth: </label>
              <input
                type="text"
                name="dob"
                id="dob"
                value={dob}
                placeholder={selectedPatient?.patient.dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </li>
            <li>
              <label for="address">Address: </label>
              <input
                type="text"
                name="address"
                id="address"
                value={address}
                placeholder={selectedPatient?.patient.address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </li>
            <li>
              <label for="notes">Notes: </label>
              <input
                type="text"
                name="notes"
                id="notes"
                value={notes}
                placeholder={selectedPatient?.patient.notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </li>
            <input
              type="hidden"
              name="patientId"
              value={selectedPatient?.patient.id}
            />
          </ul>

          <footer>
            <button type="submit" value="Update">
              Update
            </button>
          </footer>
        </form>
      </EditPatientDataModal>
    </article>
  );
}
