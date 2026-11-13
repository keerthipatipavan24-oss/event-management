import { useParams, Link } from "react-router-dom";
import {
  CalendarDays,
  MapPin,
  Tag,
  ArrowLeft,
  Ticket,
  CheckCircle2,
  Clock,
} from "lucide-react";
import events from "../data/events";

export default function EventDetails() {
  const { id } = useParams();
  const event = events.find((item) => item.id === Number(id));

  if (!event) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-5 px-6">
        <h2 className="text-3xl font-bold text-stone-900">Event Not Found</h2>
        <p className="text-stone-600">
          The event you are looking for does not exist.
        </p>
        <Link
          to="/events"
          className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Back to Events
        </Link>
      </div>
    );
  }

  const agenda = [
    { time: "09:00 AM", activity: "Registration and Welcome" },
    { time: "10:00 AM", activity: "Opening Session" },
    { time: "11:30 AM", activity: "Main Event Activities" },
    { time: "01:00 PM", activity: "Lunch Break" },
    { time: "02:00 PM", activity: "Interactive Sessions" },
    { time: "04:00 PM", activity: "Closing Ceremony" },
  ];

  const ticketPackages = [
    {
      name: "Standard Pass",
      description: "Standard access to the event.",
      price: event.price,
      benefits: [
        "Event entry",
        "Access to regular seating",
        "Event participation",
      ],
      premium: false,
    },
    {
      name: "VIP Pass",
      description: "Premium access with additional benefits.",
      price: event.price * 2,
      benefits: [
        "Priority event entry",
        "Premium seating",
        "Exclusive VIP access",
        "Special event experience",
      ],
      premium: true,
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <main className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-10 md:py-14">
        {/* Back to Events */}
        <div className="mb-8 md:mb-10">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-base md:text-lg text-stone-600 hover:text-orange-600 font-medium transition"
          >
            <ArrowLeft size={20} />
            Back to Events
          </Link>
        </div>

        {/* Event Overview */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          <div>
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-[280px] sm:h-[360px] lg:h-[440px] object-cover rounded-2xl shadow-md"
            />
          </div>

          <div className="flex flex-col gap-5 md:gap-6">
            <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold w-fit">
              {event.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
              {event.title}
            </h1>

            <p className="text-stone-600 text-base md:text-lg leading-8">
              Join us for an exciting {event.category.toLowerCase()} event.
              Discover new experiences, connect with like-minded people, explore
              exciting activities and create unforgettable memories. Be part of
              an engaging experience designed for everyone.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 pt-2">
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-3 rounded-xl shrink-0">
                  <CalendarDays size={22} className="text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-stone-500">Event Date</p>
                  <p className="font-semibold text-stone-800">{event.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-3 rounded-xl shrink-0">
                  <MapPin size={22} className="text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-stone-500">Venue</p>
                  <p className="font-semibold text-stone-800">{event.venue}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-3 rounded-xl shrink-0">
                  <Tag size={22} className="text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-stone-500">Category</p>
                  <p className="font-semibold text-stone-800">
                    {event.category}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-3 rounded-xl shrink-0">
                  <Ticket size={22} className="text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-stone-500">Starting Price</p>
                  <p className="font-bold text-orange-600 text-lg">
                    ₹{event.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Event */}
        <section className="mt-16 md:mt-20">
          <div className="max-w-5xl">
            <span className="text-orange-600 font-semibold text-sm">
              ABOUT THE EVENT
            </span>

            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mt-3">
              What to Expect
            </h2>

            <p className="text-stone-600 text-base md:text-lg leading-8 mt-4">
              Experience an exciting day filled with engaging activities,
              valuable interactions and memorable moments. Whether you are
              interested in learning something new, meeting people or simply
              enjoying the experience, this event offers something special. Join
              us and make the most of this unforgettable occasion.
            </p>
          </div>
        </section>

        {/* Event Agenda */}
        <section className="mt-16 md:mt-20">
          <div className="mb-7">
            <span className="text-orange-600 font-semibold text-sm">
              EVENT SCHEDULE
            </span>

            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mt-3">
              Event Agenda
            </h2>

            <p className="text-stone-600 mt-3 text-base md:text-lg">
              Explore the planned schedule for the event.
            </p>
          </div>

          <div className="max-w-5xl bg-white border border-stone-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex flex-col gap-6 md:gap-7">
              {agenda.map((item) => (
                <div
                  key={item.time}
                  className="flex items-center gap-4 md:gap-5"
                >
                  <div className="bg-orange-100 p-3 rounded-xl shrink-0">
                    <Clock size={21} className="text-orange-600" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-orange-600">
                      {item.time}
                    </p>
                    <p className="text-stone-800 font-medium mt-1">
                      {item.activity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ticket Packages */}
        <section className="mt-16 md:mt-20">
          <div className="mb-8">
            <span className="text-orange-600 font-semibold text-sm">
              CHOOSE YOUR TICKET
            </span>

            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mt-3">
              Ticket Packages
            </h2>

            <p className="text-stone-600 mt-3 text-base md:text-lg">
              Select the ticket that best suits your experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl items-stretch">
            {ticketPackages.map((ticket) => (
              <div
                key={ticket.name}
                className={`flex flex-col bg-white rounded-2xl border p-6 md:p-8 shadow-sm ${
                  ticket.premium ? "border-orange-500" : "border-stone-200"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl md:text-2xl font-bold text-stone-900">
                    {ticket.name}
                  </h3>

                  {ticket.premium && (
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold">
                      PREMIUM
                    </span>
                  )}
                </div>

                <p className="text-stone-600 mt-3">{ticket.description}</p>

                <p className="text-3xl font-bold text-orange-600 mt-5">
                  ₹{ticket.price}
                  <span className="text-sm font-normal text-stone-500">
                    {" "}
                    / person
                  </span>
                </p>

                <div className="flex flex-col gap-5 mt-7">
                  {ticket.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <CheckCircle2
                        size={20}
                        className="text-orange-600 shrink-0"
                      />
                      <span className="text-stone-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-8">
                  <Link
                    to={`/register/${event.id}?ticket=${
                      ticket.premium ? "vip" : "general"
                    }`}
                    className={`flex items-center justify-center w-full py-3.5 rounded-xl font-semibold transition ${
                      ticket.premium
                        ? "bg-orange-600 hover:bg-orange-700 text-white"
                        : "border border-orange-600 text-orange-600 hover:bg-orange-50"
                    }`}
                  >
                    Register Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
