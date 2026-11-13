import { Link } from "react-router-dom";
import { CalendarDays } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 py-12 md:py-14">
        {/* Footer Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 lg:gap-x-16 gap-y-10 pb-10 md:pb-12">
          {/* Brand */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-2">
              <CalendarDays className="text-orange-500" size={28} />
              <h2 className="text-2xl font-bold">Evently</h2>
            </div>

            <p className="text-stone-400 text-sm leading-7 max-w-xs">
              Discover exciting events, explore your interests, and create
              unforgettable memories with Evently.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start gap-5">
            <h3 className="font-semibold text-lg">Quick Links</h3>

            <ul className="flex flex-col gap-3 text-sm text-stone-400">
              <li>
                <Link
                  to="/"
                  className="hover:text-orange-500 transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/events"
                  className="hover:text-orange-500 transition-colors"
                >
                  Events
                </Link>
              </li>

              <li>
                <Link
                  to="/my-events"
                  className="hover:text-orange-500 transition-colors"
                >
                  My Events
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-orange-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-start gap-5">
            <h3 className="font-semibold text-lg">Contact Us</h3>

            <div className="flex flex-col gap-3 text-sm text-stone-400">
              <p>Email: support@evently.com</p>

              <p>Phone: +91 98765 43210</p>
            </div>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col items-start gap-5">
            <h3 className="font-semibold text-lg">Follow Us</h3>

            <p className="text-stone-400 text-sm leading-7 max-w-xs">
              Stay connected with Evently for upcoming events and experiences.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-stone-700 pt-7 text-center">
          <p className="text-sm text-stone-400">
            © {new Date().getFullYear()} Evently. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
