const express = require('express');
const app = express();

// Sample doctor data
const doctors = [
    { id: 1, name: "Dr. Smith", expertise: "Orthopedic Surgeon", city: "Mumbai" },
    { id: 2, name: "Dr. Johnson", expertise: "Cardiologist", city: "Mumbai" },
    { id: 3, name: "Dr. Patel", expertise: "Dermatologist", city: "Pune" },
    { id: 4, name: "Dr. Sam", expertise: "Orthologist", city: "Pune" },
    { id: 5, name: "Dr. AB Patel", expertise: "Cardiologist", city: "Pune" },
    { id: 6, name: "Dr.Saurabh", expertise: "Neurologist", city: "Pune" },
    { id: 7, name: "Dr. John Doe", expertise: "Nephrologist", city: "Pune" },
  ];

app.get('/api/doctors', (req, res) => {
  const { city } = req.query;

  if (!city) {
    return res.status(400).json({ error: 'City parameter is required' });
  }

  const filteredDoctors = doctors.filter((doctor) => doctor.city.toLowerCase() === city.toLowerCase());
  res.json(filteredDoctors);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
