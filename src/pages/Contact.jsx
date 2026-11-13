import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSuccess(false);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must contain at least 3 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must contain at least 3 characters.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must contain at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setErrors({});
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Page Header */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-12 pb-8">
        <span className="text-orange-600 font-semibold text-sm">
          WE'D LOVE TO HEAR FROM YOU
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mt-3">
          Get in Touch
        </h1>

        <p className="text-stone-600 text-base md:text-lg mt-4 max-w-2xl leading-relaxed">
          Have questions about an event or need assistance with your
          registration? Send us a message. We're happy to help!
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="bg-stone-900 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>

            <p className="text-stone-300 leading-relaxed mb-10">
              Reach out to us through any of the following channels.
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <Mail className="text-orange-500 shrink-0" size={22} />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-stone-300 text-sm">support@evently.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-orange-500 shrink-0" size={22} />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-stone-300 text-sm">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-orange-500 shrink-0" size={22} />
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-stone-300 text-sm">
                    Hyderabad, Telangana, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white border border-stone-200 rounded-2xl p-6 md:p-10 shadow-sm">
            <h2 className="text-2xl font-bold text-stone-900 mb-2">
              Send Us a Message
            </h2>

            <p className="text-stone-500 mb-8">
              Fill out the form below and we'll be happy to assist you.
            </p>

            {success && (
              <div
                role="status"
                className="bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-4 mb-6"
              >
                Your message has been submitted successfully! Thank you for
                contacting Evently.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full h-12 px-4 border border-stone-200 rounded-lg outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />

                  {errors.name && (
                    <p className="text-red-500 text-sm mt-2">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full h-12 px-4 border border-stone-200 rounded-lg outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />

                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                  )}
                </div>

                {/* Subject */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter message subject"
                    className="w-full h-12 px-4 border border-stone-200 rounded-lg outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />

                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows="6"
                    className="w-full p-4 border border-stone-200 rounded-lg outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 resize-none"
                  />

                  {errors.message && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3.5 rounded-lg font-semibold transition"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
