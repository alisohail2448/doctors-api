const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const doctors = [
    { id: 1, image: "https://thumbs.dreamstime.com/b/indian-doctor-stethoscope-around-neck-his-office-170292594.jpg", name: "Dr. Jadhav", expertise: "Orthopedic Surgeon", city: "Mumbai" },
    { id: 2, image: "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=", name: "Dr. Gawande", expertise: "Cardiologist", city: "Mumbai" },
    { id: 3, image: "https://t4.ftcdn.net/jpg/03/20/52/31/360_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg", name: "Dr. Patel", expertise: "Dermatologist", city: "Pune" },
    { id: 4, image: "https://media.istockphoto.com/id/1446041217/photo/portrait-of-smiling-male-doctor-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=t1y5xibAPFIzOa1oN4tQ5RQKSiURBU2VxeJahOSw9wE=", name: "Dr. Sam", expertise: "Orthologist", city: "Pune" },
    { id: 5, image: "https://st.depositphotos.com/2702761/3304/i/450/depositphotos_33044395-stock-photo-doctor-smiling.jpg", name: "Dr. AB Patel", expertise: "Cardiologist", city: "Pune" },
    { id: 6, image: "https://img.freepik.com/free-photo/handsome-young-male-doctor-with-stethoscope-standing-against-blue-background_662251-343.jpg", name: "Dr.Saurabh", expertise: "Neurologist", city: "Pune" },
    { id: 7, image: "https://img.freepik.com/free-photo/handsome-young-male-doctor-with-stethoscope-standing-against-blue-background_662251-343.jpg", name: "Dr. John Doe", expertise: "Nephrologist", city: "Pune" },
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
