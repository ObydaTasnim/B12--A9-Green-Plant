// src/pages/Plants.jsx
import { useState, useEffect } from "react";
import PlantCard from "../components/shared/PlantCard";
import { Search, Filter } from "lucide-react";

const Plants = () => {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCareLevel, setSelectedCareLevel] = useState("All");

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
        setFilteredPlants(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading plants:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = plants;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (plant) =>
          plant.plantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          plant.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (plant) => plant.category === selectedCategory
      );
    }

    // Filter by care level
    if (selectedCareLevel !== "All") {
      filtered = filtered.filter(
        (plant) => plant.careLevel === selectedCareLevel
      );
    }

    setFilteredPlants(filtered);
  }, [searchTerm, selectedCategory, selectedCareLevel, plants]);

  const categories = ["All", ...new Set(plants.map((p) => p.category))];
  const careLevels = ["All", "Easy", "Medium", "Hard"];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading plants...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Plant Collection
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide variety of indoor plants perfect for any space
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search plants..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none appearance-none bg-white"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Care Level Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={selectedCareLevel}
                onChange={(e) => setSelectedCareLevel(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none appearance-none bg-white"
              >
                {careLevels.map((level) => (
                  <option key={level} value={level}>
                    {level === "All" ? "All Care Levels" : `${level} Care`}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing{" "}
            <span className="font-semibold text-gray-900">
              {filteredPlants.length}
            </span>{" "}
            plant{filteredPlants.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Plants Grid */}
        {filteredPlants.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlants.map((plant) => (
              <PlantCard key={plant.plantId} plant={plant} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No plants found matching your filters.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setSelectedCareLevel("All");
              }}
              className="mt-4 text-green-600 hover:text-green-700 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Plants;
