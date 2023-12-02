"use client";

import { useState } from "react";
import { handleAddPatient } from "@/app/actions";
import getUser from "@/lib/getUser";
import { useRouter } from "next/navigation";

export default function PatientForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const userId = getUser()?.uid;
  const router = useRouter();

  return (
    <form action={handleAddPatient} onSubmit={() => router.push("/dashboard")}>
      <ul>
        <li>
        <label for="firstname">First name: </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="John"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </li>
        <li>
        <label for="lastname">Last name: </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Smith"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </li>
        <li>
          <label for="dob">Date of Birth: </label>
          <input
            type="text"
            name="dob"
            id="dob"
            placeholder="12/1/1990"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </li>
        <li>
        <label for="address">Address: </label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="1 Central Park West"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </li>
        <li>
        <label for="notes">Notes: </label>
          <input
            type="text"
            name="notes"
            id="notes"
            placeholder="Patient has issue making eye contact..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </li>
        <input type="hidden" name="providerId" value={userId} />
      </ul>

      <footer>
        <button type="submit" value="Add Patient">
          Submit
        </button>
      </footer>
    </form>
  );
}
