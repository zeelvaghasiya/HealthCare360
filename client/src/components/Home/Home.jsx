"use client";

import React from "react";
import { Link } from "react-router-dom";
import { DollarSign, Filter, Menu, Moon, Star, X, Zap } from "lucide-react";

const images = [
  'main_hos.jpg',
  'Dental.jpg',
  'main_hos.jpg',
];

const qAns = [
  {
    Q: `What is a Hospital Management System (HMS)?`,
    Ans: `A Hospital Management System (HMS) is software that automates and streamlines various administrative and clinical tasks in a hospital or healthcare facility.`,
  },
  {
    Q: "How does appointment scheduling work in an HMS?",
    Ans: `An HMS allows patients to book appointments online or through the hospital's front desk. The system then manages the appointment calendar, sends reminders, and ensures efficient scheduling to minimize waiting times.`,
  },
  {
    Q: `Can patients access their health records through an HMS?`,
    Ans: `Yes, many HMSs provide a patient portal where individuals can view their health records, test results, and upcoming appointments securely.`,
  },
  {
    Q: `How does an HMS benefit healthcare institutions?`,
    Ans: `An HMS improves efficiency, reduces errors, enhances patient care, and helps manage resources effectively.`,
  },
];

function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full bg-white">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
            <h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-5xl">
              Revolutionize Healthcare Management with Our Hospital Management
              System
            </h1>
            <p className="mt-8 max-w-3xl text-lg text-gray-700">
              Experience a healthcare revolution with our Hospital Management
              System. Our cutting-edge solution empowers hospitals and
              healthcare facilities to streamline operations, enhance patient
              care, and improve efficiency. With user-friendly features and
              robust functionality, our system is the cornerstone of modern
              healthcare management. Join us in shaping the future of healthcare
              today.
            </p>
            <div className="mt-8">
              <Link
                to="/doctor"
                type="button"
                className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Book Your Appointment
              </Link>
            </div>
          </div>
          <div className="rounded-lg bg-gray-200 p-4">
            <img
              className="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[500px] lg:object-center"
              src="images\main_banner.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div className="mx-auto my-12 max-w-7xl px-4 sm:px-6 md:my-24 lg:my-32 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto inline-flex rounded-full bg-gray-100 px-4 py-1.5">
            <p className="text-xs font-semibold uppercase tracking-widest text-black">
              HealthCare 360
            </p>
          </div>
          <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Discover Our Healthcare Specializations
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Uncover a World of Expertise: Explore our array of specialized
            healthcare departments dedicated to your well-being and health
            needs.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <img
                src="images\Cardiology.png"
                className="h-9 w-9 text-gray-700 hover:h-12 hover:w-12 ease-in-out duration-300"
              />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Cardiology
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              Leading-edge Cardiology Services: Expert care, advanced
              diagnostics, and innovative treatments for your heart health. Your
              heart deserves the best.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <img
                src="images\Dental.png"
                className="h-9 w-9 text-gray-700 hover:h-12 hover:w-12 ease-in-out duration-300"
              />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Dental</h3>
            <p className="mt-4 text-sm text-gray-600">
              Dental Excellence: Comprehensive Care, Skilled Professionals,
              Advanced Technology – Your Smile, Our Priority. Discover Your
              Perfect Dental Experience.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <img
                src="images\Pediatric.png"
                className="h-9 w-9 text-gray-700 hover:h-12 hover:w-12 ease-in-out duration-300"
              />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Pediatric</h3>
            <p className="mt-4 text-sm text-gray-600">
              Dedicated Pediatric Care: Compassionate, Expertise, Specialized,
              Child-Friendly, Preventive, Developmental Milestones,
              Immunizations, Family-Centered, and Growth Monitoring
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <img
                src="images\Traumatology.png"
                className="h-9 w-9 text-gray-700 hover:h-12 hover:w-12 ease-in-out duration-300"
              />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Traumatology
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              Specializing in Traumatology: Expert care, rapid response, and
              compassionate treatment for injuries and emergencies. Your trusted
              trauma care partner
            </p>
          </div>
        </div>
      </div>
      {/* FAQs */}
      <section className="mx-auto max-w-7xl bg-gray-50 px-2 py-10 md:px-0">
        <div>
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
            {qAns.map((faq, index) => (
              <div key={index}>
                <h2 className="text-xl font-semibold text-black">{faq.Q}</h2>
                <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
                  {faq.Ans}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-gray-600">
            Can&apos;t find what you&apos;re looking for?{" "}
            <a
              href="/contact"
              title=""
              className="black font-semibold hover:underline"
            >
              Contact us
            </a>
          </p>
        </div>
      </section>

      <div className="container mx-auto p-4">
    </div>
      <hr className="mt-6" />
    </div>
  );
}

export default Home;
