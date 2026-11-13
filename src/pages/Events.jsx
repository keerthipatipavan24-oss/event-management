import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import events from "../data/events";

export default function Events() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  // Search, category and location filtering + price sorting
  const filteredEvents = events
    .filter((event) => {
      const matchesSearch = event.title
        .toLowerCase()
        .includes(search.trim().toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || event.category === selectedCategory;

      const matchesLocation =
        selectedLocation === "All" || event.venue === selectedLocation;

      return matchesSearch && matchesCategory && matchesLocation;
    })
    .sort((a, b) => {
      if (sortOrder === "lowToHigh") {
        return a.price - b.price;
      }

      if (sortOrder === "highToLow") {
        return b.price - a.price;
      }

      return 0;
    });

  // Clear all filters
  const clearFilters = () => {
    setSearch("");
    setSelectedCategory("All");
    setSelectedLocation("All");
    setSortOrder("default");
  };

  return (
    <div>
      {/* Section 1 - Header */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-10">
        <div className="flex flex-col gap-4">
          <span className="text-orange-600 font-semibold text-sm">
            FIND YOUR NEXT EXPERIENCE
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-stone-900">
            All Events
          </h1>

          <p className="text-stone-600 text-base md:text-lg">
            Browse all upcoming events and choose your next experience.
          </p>
        </div>
      </section>

      {/* Section 2 - Filters and Event Cards */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 pb-24">
        {/* Search and Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {/* Search Bar */}
          <div className="relative w-full">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
            />

            <input
              type="text"
              placeholder="Search events..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-12 pl-12 pr-4 border border-stone-200 rounded-xl bg-white text-sm text-stone-800 placeholder:text-stone-400 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
            />
          </div>

          {/* Category Filter */}
          <div className="w-full">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full h-12 px-4 border border-stone-200 rounded-xl bg-white text-sm text-stone-700 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition cursor-pointer"
            >
              <option value="All">All Categories</option>
              <option value="Music">Music</option>
              <option value="Sports">Sports</option>
              <option value="Food">Food</option>
              <option value="Cultural">Cultural</option>
              <option value="Entertainment">Entertainment</option>
            </select>
          </div>

          {/* Location Filter */}
          <div className="w-full">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full h-12 px-4 border border-stone-200 rounded-xl bg-white text-sm text-stone-700 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition cursor-pointer"
            >
              <option value="All">All Locations</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Chennai">Chennai</option>
              <option value="Vijayawada">Vijayawada</option>
            </select>
          </div>

          {/* Sort By */}
          <div className="w-full">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="w-full h-12 px-4 border border-stone-200 rounded-xl bg-white text-sm text-stone-700 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition cursor-pointer"
            >
              <option value="default">Sort By: Default</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Event Cards */}
        <div className="pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white flex flex-col rounded-xl overflow-hidden border border-orange-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                {/* Event Image */}
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-52 object-cover"
                  />

                  <span className="absolute top-3 left-3 bg-white text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
                    {event.category}
                  </span>
                </div>

                {/* Event Information */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-stone-900 leading-snug">
                    {event.title}
                  </h3>

                  {/* Date and Venue */}
                  <div className="flex flex-col gap-5 pt-6 text-sm text-stone-600">
                    <div className="flex items-center gap-2">
                      <span>📅</span>
                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span>📍</span>
                      <span>{event.venue}</span>
                    </div>
                  </div>

                  {/* Price and Buttons */}
                  <div className="mt-auto border-t border-stone-100 pt-5 flex flex-col gap-5">
                    {/* Price */}
                    <div>
                      <p className="text-xs text-stone-500 mb-1">
                        Starting from
                      </p>

                      <p className="text-xl font-bold text-orange-600">
                        ₹{event.price.toLocaleString("en-IN")}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                      <Link
                        to={`/events/${event.id}`}
                        className="flex items-center justify-center h-12 px-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-semibold transition text-sm whitespace-nowrap"
                      >
                        View Details
                      </Link>

                      <Link
                        to={`/register/${event.id}`}
                        className="flex items-center justify-center h-12 px-2 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl font-semibold transition text-sm whitespace-nowrap"
                      >
                        Register
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Events Found */}
          {filteredEvents.length === 0 && (
            <div className="flex flex-col items-center text-center py-12 gap-3">
              <h3 className="text-2xl font-bold text-stone-800">
                No Events Found
              </h3>

              <p className="text-stone-500">
                Try changing your search or filters.
              </p>

              <button
                onClick={clearFilters}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg text-sm font-semibold transition"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
