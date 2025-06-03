// utils.js

export function formatCleverTapDOB(dateString) {
  // Input: "YYYY-MM-DD" (from input type="date")
  const dob = new Date(dateString); // Create a JS Date object
  const year = dob.getFullYear();
  const month = String(dob.getMonth() + 1).padStart(2, '0'); // Month is 0-based
  const day = String(dob.getDate()).padStart(2, '0');

  // CleverTap format: "$D_YYYYMMDD"
  return `$D_${year}${month}${day}`;
}


  
  
