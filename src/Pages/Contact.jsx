import React from "react";
import MyContainar from "../Layouts/MyContainar";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="bg-primary/10 py-16">
        <MyContainar className="text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-primary">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question or need support? We’re here to help! Reach out to us through any of the options below.
          </p>
        </MyContainar>
      </div>

      {/* Contact Info Section */}
      <MyContainar>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="flex items-start gap-4 p-6 bg-base-300 rounded-2xl shadow-md border border-secondary/10">
            <Phone className="w-8 h-8 text-primary mt-1" />
            <div>
              <h3 className="font-bold text-xl text-base-400">Phone</h3>
              <p className="text-gray-600 mt-1">+880 1979-922268</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 p-6 bg-base-300 rounded-2xl shadow-md border border-secondary/10">
            <Mail className="w-8 h-8 text-primary mt-1" />
            <div>
              <h3 className="font-bold text-xl text-base-400">Email</h3>
              <p className="text-gray-600 mt-1">mahialam407@gmail.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4 p-6 bg-base-300 rounded-2xl shadow-md border border-secondary/10">
            <MapPin className="w-8 h-8 text-primary mt-1" />
            <div>
              <h3 className="font-bold text-xl text-base-400">Address</h3>
              <p className="text-gray-600 mt-1">
                Maloncha, Melandah, Jamalpur, Mymensingh, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </MyContainar>

      {/* Map Section */}
      <div className="">
        <MyContainar className="py-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Our Location</h2>
          <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-md">
            <iframe
              title="Jamalpur District Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.202995066589!2d89.93062521501433!3d24.932271884050433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8724a6a3abfcd%3A0xfbb2b4bb7e236f7a!2sJamalpur%20District%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1704240000000!5m2!1sen!2sbd"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </MyContainar>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 bg-base-300/60 backdrop-blur-2xl">
        <MyContainar className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center">Send Us a Message</h2>
          <p className="text-gray-600 text-center">
            Have questions? Fill out the form below and we’ll get back to you as soon as possible.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition"
            >
              Send Message
            </button>
          </form>
        </MyContainar>
      </div>
    </div>
  );
};

export default Contact;
