// src/components/home/TopPlants.jsx
import { useState, useEffect } from "react";
import PlantCard from "../shared/PlantCard";
import { Sparkles } from "lucide-react";

const TopPlants = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => {
        // Sort by rating and get top 6
        const topRated = data.sort((a, b) => b.rating - a.rating).slice(0, 6);
        setPlants(topRated);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading plants:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600">Loading plants...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-green-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Top Rated Indoor Plants
            </h2>
            <Sparkles className="w-6 h-6 text-green-600" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our customers' favorite plants - handpicked for their
            beauty, ease of care, and air-purifying qualities
          </p>
        </div>

        {/* Plants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plants.map((plant) => (
            <PlantCard key={plant.plantId} plant={plant} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopPlants;
