import { useState } from "react";
import { toast } from "react-toastify";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("Message sent! We will reach out to you soon 📧", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setFormData({ email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <form className="space-y-3 px-10" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className="w-full rounded-xl border border-gray-400 bg-transparent px-4 py-2 text-lg text-white placeholder-gray-400 focus:border-[#d4a574] focus:outline-none"
      />
      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Subject"
        required
        className="w-full rounded-xl border border-gray-400 bg-transparent px-4 py-2 text-lg text-white placeholder-gray-400 focus:border-[#d4a574] focus:outline-none"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="w-full resize-none rounded-xl border border-gray-400 bg-transparent px-4 py-2 text-lg text-white placeholder-gray-400 focus:border-[#d4a574] focus:outline-none"
        placeholder="Message"
        rows={5}
        required
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className={`rounded-lg px-3 py-2 text-lg font-bold text-white transition-opacity ${
          isSubmitting
            ? "cursor-not-allowed bg-[#d4a574]/60"
            : "bg-[#d4a574] hover:bg-[#c4956a]"
        }`}
      >
        {isSubmitting ? "Sending..." : "Send Email"}
      </button>
    </form>
  );
};

export default Form;
