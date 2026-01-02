// src/pages/PlantDetails.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Star, Package, Award, Mail, User, Calendar } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const PlantDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
  });

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => {
        const foundPlant = data.find((p) => p.plantId === parseInt(id));
        if (foundPlant) {
          setPlant(foundPlant);
        } else {
          toast.error("Plant not found");
          navigate("/plants");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading plant:", err);
        toast.error("Failed to load plant details");
        setLoading(false);
      });
  }, [id, navigate]);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.displayName || "",
        email: user.email || "",
      });
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(
      "Consultation booked successfully! We will contact you soon."
    );
    setFormData({
      name: user?.displayName || "",
      email: user?.email || "",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading plant details...</p>
      </div>
    );
  }

  if (!plant) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Section */}
            <div className="relative h-96 lg:h-full">
              <img
                src={plant.image}
                alt={plant.plantName}
                className="w-full h-full object-cover"
              />
              {plant.availableStock < 5 && plant.availableStock > 0 && (
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-medium">
                  Only {plant.availableStock} left!
                </div>
              )}
              <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-full font-medium">
                {plant.category}
              </div>
            </div>

            {/* Details Section */}
            <div className="p-8 lg:p-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {plant.plantName}
              </h1>

              {/* Rating & Provider */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold text-gray-900">
                    {plant.rating}
                  </span>
                  <span className="text-gray-500">
                    ({Math.floor(Math.random() * 200) + 100} reviews)
                  </span>
                </div>
                <span className="text-3xl font-bold text-green-600">
                  ${plant.price}
                </span>
              </div>

              {/* Provider Info */}
              <div className="flex items-center space-x-2 mb-6 pb-6 border-b border-gray-200">
                <Award className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">
                  By{" "}
                  <span className="font-medium text-gray-900">
                    {plant.providerName}
                  </span>
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-6">
                {plant.description}
              </p>

              {/* Plant Info Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Package className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-600">Stock</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">
                    {plant.availableStock > 0
                      ? `${plant.availableStock} Available`
                      : "Out of Stock"}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-600">Care Level</span>
                  </div>
                  <p
                    className={`text-lg font-semibold ${
                      plant.careLevel === "Easy"
                        ? "text-green-600"
                        : plant.careLevel === "Medium"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {plant.careLevel}
                  </p>
                </div>
              </div>

              {/* Consultation Form */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-green-600" />
                  Book a Consultation
                </h3>
                <p className="text-gray-700 mb-4">
                  Get expert advice on how to care for your {plant.plantName}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    Book Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Care Instructions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Watering</h3>
              <p className="text-gray-600">
                Water when the top inch of soil feels dry. Avoid overwatering.
              </p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Sunlight</h3>
              <p className="text-gray-600">
                Prefers bright, indirect light. Avoid direct afternoon sun.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Humidity</h3>
              <p className="text-gray-600">
                Thrives in moderate to high humidity. Mist occasionally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
