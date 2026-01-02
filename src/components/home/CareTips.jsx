// src/components/home/CareTips.jsx
import { Droplets, Sun, Sprout, ThermometerSun } from "lucide-react";

const CareTips = () => {
  const tips = [
    {
      id: 1,
      icon: <Droplets className="w-8 h-8" />,
      title: "Watering",
      description:
        "Check soil moisture before watering. Most indoor plants prefer soil that dries slightly between waterings.",
      color: "blue",
    },
    {
      id: 2,
      icon: <Sun className="w-8 h-8" />,
      title: "Sunlight",
      description:
        "Place plants near windows for indirect sunlight. Rotate them weekly for even growth and balanced exposure.",
      color: "yellow",
    },
    {
      id: 3,
      icon: <Sprout className="w-8 h-8" />,
      title: "Fertilizing",
      description:
        "Feed your plants during growing season (spring-summer) with balanced fertilizer every 2-4 weeks.",
      color: "green",
    },
    {
      id: 4,
      icon: <ThermometerSun className="w-8 h-8" />,
      title: "Temperature",
      description:
        "Most indoor plants thrive in 65-75°F. Avoid placing near drafts, heaters, or air conditioners.",
      color: "orange",
    },
  ];

  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    yellow: "bg-yellow-100 text-yellow-600",
    green: "bg-green-100 text-green-600",
    orange: "bg-orange-100 text-orange-600",
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Essential Plant Care Tips
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow these simple guidelines to keep your indoor plants healthy
            and thriving all year round
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div
                className={`${
                  colorClasses[tip.color]
                } w-16 h-16 rounded-full flex items-center justify-center mb-4`}
              >
                {tip.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {tip.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{tip.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Tips Box */}
        <div className="mt-12 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Need Personalized Advice?
              </h3>
              <p className="text-gray-700">
                Book a consultation with our expert plant care specialists
              </p>
            </div>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium whitespace-nowrap">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareTips;
