import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ArrowLeft } from "lucide-react";
import { projectsData } from "../Projects/data/projectsData";

export default function Checkout() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const projectId = Number(searchParams.get("projectId"));

  const project = projectsData.find((p) => p.id === projectId) || {
    title: "Unknown Project",
    images: [],
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("We will reach out to you soon! 📧", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        budget: "",
        description: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-12 sm:px-6 lg:px-8">
      {/* Toast Container */}
      <div id="toast-container" />

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <button
          onClick={() => navigate("/#projects")}
          className="mb-8 flex items-center gap-2 text-[#cfa97d] transition-colors hover:text-[#b8926d]"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Projects</span>
        </button>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Project Summary */}
          <div className="rounded-2xl border border-zinc-800/30 bg-zinc-900/50 p-8">
            <h2 className="mb-2 text-2xl font-bold text-white">
              Project Summary
            </h2>
            <p className="mb-6 text-zinc-400">Selected project details</p>

            {project.images?.[0] && (
              <div className="mb-6 overflow-hidden rounded-lg">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />
              </div>
            )}

            <div className="space-y-4">
              <div>
                <p className="text-sm text-zinc-400">Project</p>
                <p className="text-lg font-semibold text-white">
                  {project.title}
                </p>
              </div>
              <div className="rounded-lg border border-zinc-800/50 bg-zinc-800/20 p-4">
                <p className="text-sm text-zinc-400">Next Step</p>
                <p className="font-medium text-white">
                  Fill out the form and we'll contact you with a custom quote
                </p>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <div className="rounded-2xl border border-zinc-800/30 bg-zinc-900/50 p-8">
            <h2 className="mb-2 text-2xl font-bold text-white">Get a Quote</h2>
            <p className="mb-6 text-zinc-400">
              Tell us about your project requirements
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-zinc-700/50 bg-zinc-800/50 px-4 py-2.5 text-white placeholder-zinc-500 focus:border-[#cfa97d] focus:outline-none focus:ring-2 focus:ring-[#cfa97d]/20"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-zinc-700/50 bg-zinc-800/50 px-4 py-2.5 text-white placeholder-zinc-500 focus:border-[#cfa97d] focus:outline-none focus:ring-2 focus:ring-[#cfa97d]/20"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-zinc-700/50 bg-zinc-800/50 px-4 py-2.5 text-white placeholder-zinc-500 focus:border-[#cfa97d] focus:outline-none focus:ring-2 focus:ring-[#cfa97d]/20"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-zinc-700/50 bg-zinc-800/50 px-4 py-2.5 text-white placeholder-zinc-500 focus:border-[#cfa97d] focus:outline-none focus:ring-2 focus:ring-[#cfa97d]/20"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-zinc-700/50 bg-zinc-800/50 px-4 py-2.5 text-white focus:border-[#cfa97d] focus:outline-none focus:ring-2 focus:ring-[#cfa97d]/20"
                >
                  <option value="">Select budget range</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="10000-25000">$10,000 - $25,000</option>
                  <option value="25000-50000">$25,000 - $50,000</option>
                  <option value="50000+">$50,000+</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                  Project Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full rounded-lg border border-zinc-700/50 bg-zinc-800/50 px-4 py-2.5 text-white placeholder-zinc-500 focus:border-[#cfa97d] focus:outline-none focus:ring-2 focus:ring-[#cfa97d]/20"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full rounded-lg px-6 py-3 font-medium text-zinc-900 transition-all ${
                  isSubmitting
                    ? "cursor-not-allowed bg-zinc-600"
                    : "bg-[#cfa97d] hover:bg-[#b8926d]"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Get Quote"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
