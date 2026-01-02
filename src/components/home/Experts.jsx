// src/components/home/Experts.jsx
import { Award, Leaf } from "lucide-react";

const Experts = () => {
  const experts = [
    {
      id: 1,
      name: "Emma Rodriguez",
      specialization: "Tropical Plants Specialist",
      image: "https://i.pravatar.cc/300?img=5",
      experience: "12 years",
      description:
        "Expert in exotic tropical plants and creating indoor jungle environments.",
    },
    {
      id: 2,
      name: "James Chen",
      specialization: "Succulent & Cactus Expert",
      image: "https://i.pravatar.cc/300?img=12",
      experience: "8 years",
      description:
        "Specializes in drought-resistant plants and desert flora care techniques.",
    },
    {
      id: 3,
      name: "Sarah Mitchell",
      specialization: "Air Purifying Plants",
      image: "https://i.pravatar.cc/300?img=9",
      experience: "10 years",
      description:
        "Focused on plants that improve indoor air quality and promote wellness.",
    },
    {
      id: 4,
      name: "Michael Foster",
      specialization: "Rare Plant Collector",
      image: "https://i.pravatar.cc/300?img=13",
      experience: "15 years",
      description:
        "Curator of rare and exotic plant species from around the world.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Leaf className="w-6 h-6 text-green-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Meet Our Green Experts
            </h2>
            <Leaf className="w-6 h-6 text-green-600" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of certified plant specialists is here to guide you on your
            green journey
          </p>
        </div>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experts.map((expert) => (
            <div
              key={expert.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md">
                  <Award className="w-5 h-5 text-green-600" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {expert.name}
                </h3>
                <p className="text-green-600 font-medium mb-2">
                  {expert.specialization}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="font-medium">{expert.experience}</span>
                  <span className="mx-2">•</span>
                  <span>Experience</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {expert.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Ready to get expert advice for your plants?
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experts;
