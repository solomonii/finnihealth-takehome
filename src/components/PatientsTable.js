"use client";

export default function PatientsTable({ patients }) {
  return (
    <article>
      {patients.map((patient) => (
        <>
          <p>{patient.firstname}</p>
          <p>{patient.lastname}</p>
          <p>{patient.dob}</p>
          <p>{patient.address}</p>
          <p>{patient.notes}</p>
          <br />
        </>
      ))}
    </article>
  );
}
