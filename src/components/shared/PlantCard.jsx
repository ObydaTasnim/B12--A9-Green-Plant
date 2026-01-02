// src/components/shared/PlantCard.jsx
import { Link } from "react-router-dom";
import { Star, ShoppingCart } from "lucide-react";

const PlantCard = ({ plant }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-56 overflow-hidden group">
        <img
          src={plant.image}
          alt={plant.plantName}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {plant.availableStock < 5 && plant.availableStock > 0 && (
          <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium">
            Only {plant.availableStock} left!
          </span>
        )}
        {plant.availableStock === 0 && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium">
            Out of Stock
          </span>
        )}
        <div className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full font-medium">
          {plant.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {plant.plantName}
        </h3>

        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {plant.description}
        </p>

        {/* Care Level */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-500">Care Level:</span>
          <span
            className={`text-sm font-medium px-3 py-1 rounded-full ${
              plant.careLevel === "Easy"
                ? "bg-green-100 text-green-700"
                : plant.careLevel === "Medium"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {plant.careLevel}
          </span>
        </div>

        {/* Rating & Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold text-gray-900">
              {plant.rating}
            </span>
            <span className="text-sm text-gray-500">
              ({Math.floor(Math.random() * 100) + 50} reviews)
            </span>
          </div>
          <span className="text-2xl font-bold text-green-600">
            ${plant.price}
          </span>
        </div>

        {/* Provider */}
        <p className="text-xs text-gray-500 mb-4">
          By{" "}
          <span className="font-medium text-gray-700">
            {plant.providerName}
          </span>
        </p>

        {/* Action Button */}
        <Link
          to={`/plant/${plant.plantId}`}
          className="w-full flex items-center justify-center space-x-2 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
        >
          <span>View Details</span>
          <ShoppingCart className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default PlantCard;
