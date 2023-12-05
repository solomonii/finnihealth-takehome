import styles from "@/lib/styles/FilterPatients.module.css";
import { useState } from "react";

export default function FilterPatients({ handleFilterChange }) {
  const [selectedOption, setSelectedOption] = useState("");
  const options = [
    "All",
    "Inquiry",
    "Onboarding",
    "Active",
    "Churned",
  ];

  const handleChange = (option) => {
    if (option === selectedOption || option === "All") {
        setSelectedOption('');
        handleFilterChange('');
    }
    else {
        
        setSelectedOption(option);
        handleFilterChange(option);
    }
  };

  return (
    <div className={styles.filterContainer}>
      {options.map((option, index) => (
        <label
          key={index}
          className={`${styles.checkboxLabel} ${
            selectedOption === option ? styles.checked : ""
          }`}
        >
          <input
            type="checkbox"
            value={option}
            checked={selectedOption === option}
            onChange={() => handleChange(option)}
          />
          <span className={selectedOption === option ? styles.checked : ""}>
            {option}
          </span>
        </label>
      ))}
    </div>
  );
}
