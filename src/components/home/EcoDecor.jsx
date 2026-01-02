// src/components/home/EcoDecor.jsx
import { Sparkles, Home, Palette, Heart } from "lucide-react";

const EcoDecor = () => {
  const ideas = [
    {
      id: 1,
      title: "Living Wall Gallery",
      description:
        "Create a stunning vertical garden with trailing plants like pothos and philodendron",
      image:
        "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&h=300&fit=crop",
      icon: <Home className="w-5 h-5" />,
    },
    {
      id: 2,
      title: "Minimalist Corner",
      description:
        "Pair a statement fiddle leaf fig with modern ceramic pots for clean aesthetics",
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&h=300&fit=crop",
      icon: <Palette className="w-5 h-5" />,
    },
    {
      id: 3,
      title: "Cozy Reading Nook",
      description:
        "Surround your favorite chair with peace lilies and snake plants for tranquility",
      image:
        "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=400&h=300&fit=crop",
      icon: <Heart className="w-5 h-5" />,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-green-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Eco Decor Ideas
            </h2>
            <Sparkles className="w-6 h-6 text-green-600" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform your living space into a green sanctuary with these
            inspiring plant styling ideas
          </p>
        </div>

        {/* Ideas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ideas.map((idea) => (
            <div
              key={idea.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={idea.image}
                  alt={idea.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="bg-green-600 p-2 rounded-full">
                    {idea.icon}
                  </div>
                  <h3 className="text-xl font-bold">{idea.title}</h3>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {idea.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Plant of the Week */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-8 md:p-12">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-4">
                🌟 Plant of the Week
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Monstera Deliciosa
              </h3>
              <p className="text-green-50 mb-6 leading-relaxed">
                Known as the Swiss Cheese Plant, this stunning tropical beauty
                features iconic split leaves that add drama to any space.
                Perfect for beginners with its easy-care nature.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white">
                  <span className="text-2xl font-bold">4.9</span>
                  <span className="text-sm ml-1">Rating</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white">
                  <span className="text-2xl font-bold">$32</span>
                  <span className="text-sm ml-1">Special Price</span>
                </div>
              </div>
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-medium">
                Shop Now - Limited Time!
              </button>
            </div>
            <div className="md:w-1/2 h-64 md:h-96">
              <img
                src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&h=400&fit=crop"
                alt="Monstera Deliciosa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoDecor;
