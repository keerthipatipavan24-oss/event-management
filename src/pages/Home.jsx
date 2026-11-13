import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  TicketCheck,
  CalendarCheck,
  ShieldCheck,
  Headset,
} from "lucide-react";
import events from "../data/events";

const features = [
  {
    title: "Easy Ticket Booking",
    description:
      "Register for your favourite events in just a few simple steps.",
    icon: TicketCheck,
  },
  {
    title: "Event Management",
    description:
      "Easily view and manage all your registered events in one place.",
    icon: CalendarCheck,
  },
  {
    title: "Simple & Reliable",
    description:
      "Enjoy a smooth registration experience with easy-to-use features.",
    icon: ShieldCheck,
  },
  {
    title: "Dedicated Support",
    description: "Get assistance whenever you have questions or need help.",
    icon: Headset,
  },
];

export default function Home() {
  return (
    <div>
      {/* Section 1 - Hero Banner */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Hero Content */}
          <div className="flex flex-col items-start gap-8">
            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
              Discover Amazing Experiences
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight">
              Discover Events.
              <span className="block text-orange-600">Create Memories.</span>
            </h1>

            <p className="text-stone-600 text-base md:text-lg leading-relaxed max-w-lg">
              Explore exciting events happening around you. From technology
              conferences to music festivals, find your next unforgettable
              experience with Evently.
            </p>

            <Link
              to="/events"
              className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white px-7 py-3.5 rounded-lg font-semibold transition"
            >
              Explore Events
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              alt="Live music event with colourful stage lighting"
              className="w-full h-[320px] md:h-[450px] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Section 2 - Upcoming Events */}
      <section className="bg-orange-50 py-12">
        <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12">
          {/* Section Heading */}
          <div className="flex flex-col gap-5">
            <span className="text-orange-600 font-semibold text-sm">
              DON'T MISS OUT
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
              Upcoming Events
            </h2>

            <p className="text-stone-600 leading-relaxed">
              Explore exciting events and find your next experience.
            </p>
          </div>

          {/* View All Events */}
          <div className="flex justify-end mt-6">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition"
            >
              View All Events
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Event Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-3">
            {events.slice(0, 4).map((event) => (
              <div
                key={event.id}
                className="bg-white h-full flex flex-col rounded-xl overflow-hidden border border-orange-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                {/* Event Image */}
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
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
                      <CalendarDays
                        size={17}
                        className="text-orange-600 shrink-0"
                      />
                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={17} className="text-orange-600 shrink-0" />
                      <span>{event.venue}</span>
                    </div>
                  </div>

                  {/* Price and Details */}
                  <div className="flex items-center justify-between border-t border-stone-100 mt-auto pt-5">
                    <div>
                      <p className="text-xs text-stone-500 mb-1">
                        Starting from
                      </p>

                      <p className="text-xl font-bold text-orange-600">
                        ₹{event.price}
                      </p>
                    </div>

                    <Link
                      to={`/events/${event.id}`}
                      className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Why Choose Evently */}
      <section className="bg-white py-16 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-orange-600 font-semibold text-sm">
              WHY EVENTLY
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mt-3">
              Why Choose Evently?
            </h2>

            <p className="text-stone-600 mt-4 leading-relaxed">
              Everything you need for a smooth and memorable event experience.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="bg-stone-50 border border-stone-200 rounded-xl p-7 flex flex-col items-start gap-4 hover:shadow-md hover:-translate-y-1 transition duration-300"
                >
                  <div className="bg-orange-100 text-orange-600 p-4 rounded-xl">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-lg font-bold text-stone-900">
                    {feature.title}
                  </h3>

                  <p className="text-stone-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
