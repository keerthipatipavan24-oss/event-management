import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  MapPin,
  Ticket,
  User,
  Hash,
  ArrowRight,
  X,
  Trash2,
  AlertTriangle,
} from "lucide-react";

export default function MyEvents() {
  const [registrations, setRegistrations] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("registrations") || "[]");
    } catch {
      return [];
    }
  });

  const [selectedRegistration, setSelectedRegistration] = useState(null);

  // Support the registrationId property used in Local Storage.
  const getRegistrationId = (registration) =>
    registration.registrationId ?? registration.id;

  // Cancel Registration
  const handleCancelRegistration = () => {
    if (!selectedRegistration) return;

    const selectedId = getRegistrationId(selectedRegistration);

    const updatedRegistrations = registrations.filter(
      (registration) => getRegistrationId(registration) !== selectedId,
    );

    localStorage.setItem("registrations", JSON.stringify(updatedRegistrations));

    setRegistrations(updatedRegistrations);
    setSelectedRegistration(null);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Page Header */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-12 pb-8">
        <div className="flex flex-col gap-4">
          <span className="text-sm font-semibold text-orange-600">
            YOUR EVENT JOURNEY
          </span>

          <h1 className="text-3xl md:text-5xl font-bold text-stone-900">
            My Events
          </h1>

          <p className="text-stone-600 text-base md:text-lg">
            View and manage all your event registrations in one place.
          </p>
        </div>
      </section>

      {/* Registered Events */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-20">
        {registrations.length === 0 ? (
          /* Empty State */
          <div className="bg-white border border-stone-200 rounded-2xl p-10 md:p-16 text-center flex flex-col items-center gap-5">
            <div className="bg-orange-50 p-5 rounded-full">
              <Ticket size={40} className="text-orange-600" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              No Events Registered Yet
            </h2>

            <p className="text-stone-500 max-w-md leading-relaxed">
              You haven't registered for any events yet. Explore our upcoming
              events and book your tickets.
            </p>

            <Link
              to="/events"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-7 py-3 rounded-xl font-semibold transition"
            >
              Explore Events
              <ArrowRight size={18} />
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            {/* Registration Count */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl md:text-2xl font-bold text-stone-900">
                Your Registrations
              </h2>

              <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
                {registrations.length}{" "}
                {registrations.length === 1 ? "Registration" : "Registrations"}
              </span>
            </div>

            {/* Event Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {registrations.map((registration) => {
                const registrationId = getRegistrationId(registration);

                return (
                  <div
                    key={registrationId}
                    className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
                  >
                    {/* Event Image */}
                    <div className="relative">
                      {registration.image && (
                        <img
                          src={registration.image}
                          alt={
                            registration.eventTitle ||
                            registration.title ||
                            "Event"
                          }
                          className="w-full h-52 object-cover"
                        />
                      )}

                      <span
                        className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-semibold ${
                          registration.ticketType === "VIP Pass"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-white text-stone-700"
                        }`}
                      >
                        {registration.ticketType || "Standard Pass"}
                      </span>
                    </div>

                    {/* Registration Details */}
                    <div className="p-6 flex flex-col gap-5">
                      <h3 className="text-xl md:text-2xl font-bold text-stone-900">
                        {registration.eventTitle ||
                          registration.title ||
                          "Event"}
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex items-center gap-3">
                          <CalendarDays
                            size={20}
                            className="text-orange-600 shrink-0"
                          />
                          <div>
                            <p className="text-xs text-stone-500">Event Date</p>
                            <p className="text-sm font-semibold text-stone-800">
                              {registration.eventDate ||
                                registration.date ||
                                "Not available"}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <MapPin
                            size={20}
                            className="text-orange-600 shrink-0"
                          />
                          <div>
                            <p className="text-xs text-stone-500">Venue</p>
                            <p className="text-sm font-semibold text-stone-800">
                              {registration.venue || "Not available"}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <User
                            size={20}
                            className="text-orange-600 shrink-0"
                          />
                          <div>
                            <p className="text-xs text-stone-500">
                              Registered By
                            </p>
                            <p className="text-sm font-semibold text-stone-800">
                              {registration.fullName || "Not available"}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <Ticket
                            size={20}
                            className="text-orange-600 shrink-0"
                          />
                          <div>
                            <p className="text-xs text-stone-500">Tickets</p>
                            <p className="text-sm font-semibold text-stone-800">
                              {registration.tickets || 1} Tickets
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Ticket Amount */}
                      <div className="border-t border-stone-200 pt-5 flex items-center justify-between gap-3">
                        <div>
                          <p className="text-sm text-stone-500">Total Amount</p>
                          <p className="text-2xl font-bold text-orange-600">
                            ₹{registration.totalAmount ?? 0}
                          </p>
                        </div>

                        <div className="text-right">
                          <p className="text-xs text-stone-500">Ticket Price</p>
                          <p className="text-sm font-semibold text-stone-800">
                            ₹{registration.ticketPrice ?? 0} / person
                          </p>
                        </div>
                      </div>

                      {/* Registration ID */}
                      <div className="bg-stone-50 rounded-lg px-4 py-3 flex items-center gap-2">
                        <Hash size={16} className="text-stone-500 shrink-0" />
                        <span className="text-xs text-stone-500">
                          Registration ID:
                        </span>
                        <span className="text-xs font-semibold text-stone-700 break-all">
                          {registrationId}
                        </span>
                      </div>

                      {/* Cancel Button */}
                      <button
                        onClick={() => setSelectedRegistration(registration)}
                        className="w-full inline-flex items-center justify-center gap-2 border border-red-200 text-red-600 hover:bg-red-50 py-3 rounded-xl font-semibold transition"
                      >
                        <Trash2 size={18} />
                        Cancel Registration
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>

      {/* Cancellation Confirmation Modal */}
      {selectedRegistration && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6"
          onClick={() => setSelectedRegistration(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cancel-title"
            className="relative w-full max-w-md bg-white rounded-2xl shadow-xl p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedRegistration(null)}
              aria-label="Close confirmation"
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 transition"
            >
              <X size={22} />
            </button>

            {/* Modal Content */}
            <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-red-50 p-4 rounded-full">
                <AlertTriangle size={32} className="text-red-600" />
              </div>

              <h2
                id="cancel-title"
                className="text-2xl font-bold text-stone-900"
              >
                Cancel Registration?
              </h2>

              <p className="text-stone-600 leading-relaxed">
                Are you sure you want to cancel your registration for{" "}
                <span className="font-semibold text-stone-900">
                  {selectedRegistration.eventTitle ||
                    selectedRegistration.title ||
                    "this event"}
                </span>
                ? This action cannot be undone.
              </p>

              {/* Modal Buttons */}
              <div className="flex flex-col-reverse sm:flex-row w-full gap-3 pt-3">
                <button
                  onClick={() => setSelectedRegistration(null)}
                  className="flex-1 border border-stone-300 text-stone-700 hover:bg-stone-50 py-3 rounded-xl font-semibold transition"
                >
                  Keep Registration
                </button>

                <button
                  onClick={handleCancelRegistration}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition"
                >
                  Yes, Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
