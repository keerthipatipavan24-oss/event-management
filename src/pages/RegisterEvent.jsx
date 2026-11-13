import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle,
  CalendarDays,
  MapPin,
  Ticket,
  User,
  Mail,
  Phone,
  IndianRupee,
} from "lucide-react";
import events from "../data/events";

export default function RegisterEvent() {
  const { id } = useParams();

  const event = events.find((item) => item.id === Number(id));

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    ticketType: "Standard Pass",
    tickets: "1",
  });

  const [errors, setErrors] = useState({});
  const [confirmedRegistration, setConfirmedRegistration] = useState(null);

  if (!event) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-6">
        <h2 className="text-2xl font-bold text-stone-900">Event Not Found</h2>
        <Link
          to="/events"
          className="text-orange-600 font-semibold hover:text-orange-700"
        >
          Back to Events
        </Link>
      </div>
    );
  }

  const ticketPrice =
    formData.ticketType === "VIP Pass" ? event.price * 2 : event.price;

  const totalAmount = ticketPrice * Number(formData.tickets);

  // Validate individual fields
  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "fullName":
        if (!value.trim()) {
          error = "Full name is required.";
        } else if (value.trim().length < 3) {
          error = "Name must contain at least 3 characters.";
        } else if (value.trim().length > 50) {
          error = "Name cannot exceed 50 characters.";
        } else if (!/^[A-Za-z ]+$/.test(value.trim())) {
          error = "Name should contain only letters and spaces.";
        }
        break;

      case "email":
        if (!value.trim()) {
          error = "Email address is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim())) {
          error = "Please enter a valid email address.";
        }
        break;

      case "phone":
        if (!value.trim()) {
          error = "Phone number is required.";
        } else if (!/^[6-9][0-9]{9}$/.test(value)) {
          error = "Enter a valid 10-digit Indian mobile number.";
        }
        break;

      case "ticketType":
        if (!["Standard Pass", "VIP Pass"].includes(value)) {
          error = "Please select a valid ticket package.";
        }
        break;

      case "tickets":
        if (!["1", "2", "3", "4", "5"].includes(value)) {
          error = "Please select between 1 and 5 tickets.";
        }
        break;

      default:
        break;
    }

    return error;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  // Validate complete form
  const validateForm = () => {
    const newErrors = {};

    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);

      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit registration
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const registration = {
      id: Date.now(),
      bookingId: `EVT-${Date.now().toString().slice(-8)}`,
      eventId: event.id,
      eventTitle: event.title,
      eventDate: event.date,
      venue: event.venue,
      image: event.image,
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone,
      ticketType: formData.ticketType,
      tickets: Number(formData.tickets),
      ticketPrice,
      totalAmount,
      registeredAt: new Date().toISOString(),
    };

    const existingRegistrations = JSON.parse(
      localStorage.getItem("registrations") || "[]",
    );

    existingRegistrations.push(registration);

    localStorage.setItem(
      "registrations",
      JSON.stringify(existingRegistrations),
    );

    // Show separate confirmation page
    setConfirmedRegistration(registration);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Registration success page
  if (confirmedRegistration) {
    return (
      <div className="min-h-screen bg-stone-50 px-4 sm:px-6 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-stone-200 rounded-2xl shadow-sm overflow-hidden">
            {/* Success Header */}
            <div className="text-center px-6 sm:px-10 py-12 bg-orange-50 border-b border-orange-100">
              <div className="w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center shadow-sm">
                <CheckCircle size={48} className="text-green-600" />
              </div>

              <p className="text-sm font-bold tracking-widest text-orange-600 mt-7">
                REGISTRATION CONFIRMED
              </p>

              <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mt-3">
                You're Registered!
              </h1>

              <p className="text-stone-600 mt-4 leading-relaxed">
                Your registration for {event.title} has been successfully
                completed.
              </p>
            </div>

            {/* Booking Details */}
            <div className="p-6 sm:p-10">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 pb-6 border-b border-stone-200">
                <span className="text-sm text-stone-500">Booking ID</span>

                <span className="font-bold text-orange-600">
                  {confirmedRegistration.bookingId}
                </span>
              </div>

              <h2 className="text-xl font-bold text-stone-900 mt-8 mb-5">
                Booking Summary
              </h2>

              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <Ticket size={20} className="text-orange-600 mt-1" />
                  <div>
                    <p className="text-sm text-stone-500">Event</p>
                    <p className="font-semibold text-stone-900">
                      {confirmedRegistration.eventTitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CalendarDays size={20} className="text-orange-600 mt-1" />
                  <div>
                    <p className="text-sm text-stone-500">Event Date</p>
                    <p className="font-semibold text-stone-900">
                      {confirmedRegistration.eventDate}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-orange-600 mt-1" />
                  <div>
                    <p className="text-sm text-stone-500">Venue</p>
                    <p className="font-semibold text-stone-900">
                      {confirmedRegistration.venue}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <User size={20} className="text-orange-600 mt-1" />
                  <div>
                    <p className="text-sm text-stone-500">Registered Name</p>
                    <p className="font-semibold text-stone-900">
                      {confirmedRegistration.fullName}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={20} className="text-orange-600 mt-1" />
                  <div>
                    <p className="text-sm text-stone-500">Email Address</p>
                    <p className="font-semibold text-stone-900 break-all">
                      {confirmedRegistration.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={20} className="text-orange-600 mt-1" />
                  <div>
                    <p className="text-sm text-stone-500">Phone Number</p>
                    <p className="font-semibold text-stone-900">
                      {confirmedRegistration.phone}
                    </p>
                  </div>
                </div>
              </div>

              {/* Payment Summary */}
              <div className="mt-8 p-5 sm:p-6 rounded-xl bg-stone-50 border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-5">
                  Payment Summary
                </h3>

                <div className="flex justify-between gap-4 text-sm mb-4">
                  <span className="text-stone-600">Ticket Package</span>
                  <span className="font-semibold text-stone-900 text-right">
                    {confirmedRegistration.ticketType}
                  </span>
                </div>

                <div className="flex justify-between gap-4 text-sm mb-4">
                  <span className="text-stone-600">Number of Tickets</span>
                  <span className="font-semibold text-stone-900">
                    {confirmedRegistration.tickets}
                  </span>
                </div>

                <div className="flex justify-between gap-4 text-sm mb-5">
                  <span className="text-stone-600">Price per Ticket</span>
                  <span className="font-semibold text-stone-900">
                    ₹{confirmedRegistration.ticketPrice.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="border-t border-stone-200 pt-5 flex justify-between items-center gap-4">
                  <span className="font-bold text-stone-900">Total Amount</span>

                  <span className="text-2xl font-bold text-orange-600">
                    ₹{confirmedRegistration.totalAmount.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  to="/my-events"
                  className="flex-1 text-center bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl font-semibold transition"
                >
                  View My Events
                </Link>

                <Link
                  to="/events"
                  className="flex-1 text-center border border-stone-300 hover:border-orange-500 hover:text-orange-600 text-stone-700 py-4 rounded-xl font-semibold transition"
                >
                  Browse More Events
                </Link>
              </div>

              <p className="text-center text-sm text-stone-500 mt-7">
                Thank you for choosing Evently. We look forward to seeing you!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Registration form
  return (
    <div className="min-h-screen bg-stone-50 px-4 sm:px-6 py-12 md:py-16">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <Link
            to={`/events/${event.id}`}
            className="inline-flex items-center gap-2 text-base md:text-lg text-stone-600 hover:text-orange-600 font-semibold transition"
          >
            <ArrowLeft size={20} />
            Back to Event
          </Link>
        </div>

        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8 md:p-10">
          <div className="mb-10">
            <span className="text-sm font-bold text-orange-600">
              EVENT REGISTRATION
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 mt-3 leading-tight">
              Register for {event.title}
            </h1>

            <p className="text-stone-500 mt-4 leading-relaxed">
              Enter your details and choose your preferred ticket package.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-7"
          >
            {/* Full Name */}
            <div className="flex flex-col gap-3">
              <label
                htmlFor="fullName"
                className="text-sm font-semibold text-stone-700"
              >
                Full Name
              </label>

              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                maxLength={50}
                aria-invalid={Boolean(errors.fullName)}
                className={`w-full h-14 px-4 border rounded-xl outline-none transition ${
                  errors.fullName
                    ? "border-red-500 focus:ring-2 focus:ring-red-100"
                    : "border-stone-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                }`}
              />

              {errors.fullName && (
                <p className="text-sm text-red-600">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-3">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-stone-700"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                aria-invalid={Boolean(errors.email)}
                className={`w-full h-14 px-4 border rounded-xl outline-none transition ${
                  errors.email
                    ? "border-red-500 focus:ring-2 focus:ring-red-100"
                    : "border-stone-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                }`}
              />

              {errors.email && (
                <p className="text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-3">
              <label
                htmlFor="phone"
                className="text-sm font-semibold text-stone-700"
              >
                Phone Number
              </label>

              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your 10-digit phone number"
                maxLength={10}
                aria-invalid={Boolean(errors.phone)}
                className={`w-full h-14 px-4 border rounded-xl outline-none transition ${
                  errors.phone
                    ? "border-red-500 focus:ring-2 focus:ring-red-100"
                    : "border-stone-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                }`}
              />

              {errors.phone && (
                <p className="text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            {/* Ticket Package */}
            <div className="flex flex-col gap-3">
              <label
                htmlFor="ticketType"
                className="text-sm font-semibold text-stone-700"
              >
                Select Ticket Package
              </label>

              <select
                id="ticketType"
                name="ticketType"
                value={formData.ticketType}
                onChange={handleChange}
                aria-invalid={Boolean(errors.ticketType)}
                className={`w-full h-14 px-4 border rounded-xl bg-white outline-none transition ${
                  errors.ticketType
                    ? "border-red-500"
                    : "border-stone-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                }`}
              >
                <option value="Standard Pass">
                  Standard Pass - ₹{event.price} per person
                </option>

                <option value="VIP Pass">
                  VIP Pass - ₹{event.price * 2} per person
                </option>
              </select>

              {errors.ticketType && (
                <p className="text-sm text-red-600">{errors.ticketType}</p>
              )}
            </div>

            {/* Number of Tickets */}
            <div className="flex flex-col gap-3">
              <label
                htmlFor="tickets"
                className="text-sm font-semibold text-stone-700"
              >
                Number of Tickets
              </label>

              <select
                id="tickets"
                name="tickets"
                value={formData.tickets}
                onChange={handleChange}
                aria-invalid={Boolean(errors.tickets)}
                className={`w-full h-14 px-4 border rounded-xl bg-white outline-none transition ${
                  errors.tickets
                    ? "border-red-500"
                    : "border-stone-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                }`}
              >
                {[1, 2, 3, 4, 5].map((number) => (
                  <option key={number} value={number}>
                    {number} {number === 1 ? "Ticket" : "Tickets"}
                  </option>
                ))}
              </select>

              {errors.tickets && (
                <p className="text-sm text-red-600">{errors.tickets}</p>
              )}
            </div>

            {/* Price Summary */}
            <div className="border-t border-stone-200 pt-6 flex flex-col gap-5">
              <div className="flex justify-between gap-4 text-stone-600">
                <span>Selected Package</span>
                <span className="font-semibold text-stone-800 text-right">
                  {formData.ticketType}
                </span>
              </div>

              <div className="flex justify-between text-stone-600">
                <span>Price per Ticket</span>
                <span>₹{ticketPrice.toLocaleString("en-IN")}</span>
              </div>

              <div className="flex justify-between text-stone-600">
                <span>Number of Tickets</span>
                <span>{formData.tickets}</span>
              </div>

              <div className="border-t border-stone-200 pt-5 flex justify-between items-center gap-4">
                <span className="text-lg font-bold text-stone-900">
                  Total Amount
                </span>

                <span className="text-2xl font-bold text-orange-600">
                  ₹{totalAmount.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl font-semibold transition duration-200"
            >
              Confirm Registration
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
