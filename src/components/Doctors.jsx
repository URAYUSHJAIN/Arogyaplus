const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Sarah Mitchell",
      specialty: "Cardiologist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. James Anderson",
      specialty: "Neurologist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Emily Chen",
      specialty: "Orthopedic Surgeon",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Michael Roberts",
      specialty: "General Physician",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop"
    }
  ];

  return (
    <section id="doctors" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Our Expert Doctors For The Patients
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Meet our team of experienced healthcare professionals
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{doctor.specialty}</p>
                <button className="w-full bg-blue-600 text-white py-3 rounded-full font-bold hover:bg-blue-700 hover:shadow-2xl transition-all duration-300 border-2 border-blue-600">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
