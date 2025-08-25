"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import ShinyBorder from "@/components/shared/ShinyBorder";

type ModalType = "success" | "error" | null;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: ModalType;
    message: string;
  }>({
    isOpen: false,
    type: null,
    message: "",
  });

  const validateField = (name: string, value: string) => {
    let error = "";
    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required";
        else if (value.length < 3) error = "Name must be at least 3 characters";
        break;
      case "email":
        if (!value.trim()) error = "Email is required";
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
          error = "Invalid email address";
        break;
      case "query":
        if (!value.trim()) error = "Query is required";
        else if (value.length < 10)
          error = "Query must be at least 10 characters";
        break;
    }
    return error;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const showModal = (type: ModalType, message: string) => {
    setModalState({
      isOpen: true,
      type,
      message,
    });

    setTimeout(() => {
        closeModal();
    }, 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    Object.entries(formData).forEach(([name, value]) => {
      const error = validateField(name, value.toString());
      if (error) newErrors[name] = error;
    });

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("response", formData.query);

      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbyXnvWBctTilJ4Hg_7fNfc8u9QpAliiU18CiHy0veP08VBwZmGU55zQQ3klMgOZcF0uAw/exec",
        {
          method: "POST",
          body: form,
        }
      );

      if (!res.ok) throw new Error("Submission failed");

      setFormData({ name: "", email: "", query: "" });
      setErrors({});
      showModal("success", "Your response has been submitted successfully!");
    } catch (error) {
      console.error(error);
      showModal("error", "Something went wrong, couldn't submit your request!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="md:h-[200px] lg:h-[400px] p-6 rounded-lg shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col gap-1">
          <label
            className="text-sm text-primary-dark/80 font-untitle-sans-medium"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className={`border-[1px] h-[40px] bg-[rgba(199,211,234,0.06)] px-3 rounded-md 
                            ${
                              errors.name
                                ? "border-red-500/50"
                                : "border-primary-light/12"
                            }
                            focus:outline-none focus:border-primary-light/30 transition-colors
                            placeholder:text-primary-dark/30`}
            placeholder="Enter your name"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={(e) =>
              setErrors((prev) => ({
                ...prev,
                name: validateField("name", e.target.value),
              }))
            }
          />
          {errors.name && (
            <span className="text-red-500/80 text-xs">{errors.name}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label
            className="text-sm text-primary-dark/80 font-untitle-sans-medium"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className={`border-[1px] h-[40px] bg-[rgba(199,211,234,0.06)] px-3 rounded-md 
                            ${
                              errors.email
                                ? "border-red-500/50"
                                : "border-primary-light/12"
                            }
                            focus:outline-none focus:border-primary-light/30 transition-colors
                            placeholder:text-primary-dark/30`}
            placeholder="Enter your email"
            name="email"
            id="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={(e) =>
              setErrors((prev) => ({
                ...prev,
                email: validateField("email", e.target.value),
              }))
            }
          />
          {errors.email && (
            <span className="text-red-500/80 text-xs">{errors.email}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label
            className="text-sm text-primary-dark/80 font-untitle-sans-medium"
            htmlFor="query"
          >
            Query
          </label>
          <textarea
            className={`border-[1px] min-h-[100px] bg-[rgba(199,211,234,0.06)] px-3 py-2 rounded-md 
                            ${
                              errors.query
                                ? "border-red-500/50"
                                : "border-primary-light/12"
                            }
                            focus:outline-none focus:border-primary-light/30 transition-colors resize-none
                            placeholder:text-primary-dark/30`}
            placeholder="Enter your query"
            name="query"
            id="query"
            value={formData.query}
            onChange={handleInputChange}
            onBlur={(e) =>
              setErrors((prev) => ({
                ...prev,
                query: validateField("query", e.target.value),
              }))
            }
          />
          {errors.query && (
            <span className="text-red-500/80 text-xs">{errors.query}</span>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full h-[40px] relative cursor-pointer rounded-md bg-primary-dark/10 outline outline-primary-light/0 relative rounded-md h-[32px] flex items-center justify-center cursor-pointer hover:shadow-[var(--shadow-inset)] transition-all duration-300
                        hover:from-primary-light/20 hover:to-primary-dark/0 transition-all
                        ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}
                        relative overflow-hidden`}
        >
          {/* <ShinyBorder /> */}
          {isSubmitting ? (
            <span className="text-primary-dark/60">Submitting...</span>
          ) : (
            <span className="text-primary-dark/80 font-untitle-sans-medium">
              Submit
            </span>
          )}
        </button>
      </form>

      <AnimatePresence>
        {modalState.isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 backdrop-blur-sm bg-black/30 z-40"
              onClick={closeModal}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50
                                w-[90%] max-w-sm rounded-lg p-6 border border-[rgba(216,236,248,0.1)]
                                bg-black/80 
                        hover:from-primary-light/20 hover:to-primary-dark/20"
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4
                                    ${
                                      modalState.type === "success"
                                        ? "bg-gradient-to-b from-[rgba(134,239,172,0.1)] to-[rgba(134,239,172,0.05)]"
                                        : "bg-gradient-to-b from-[rgba(252,165,165,0.1)] to-[rgba(252,165,165,0.05)]"
                                    }
                                    shadow-[inset_0_1px_1px_0_rgba(216,236,248,0.1)]`}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    {modalState.type === "success" ? (
                      <svg
                        className="w-8 h-8 text-green-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-8 h-8 text-red-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                  </motion.div>
                </div>

                <h3
                  className={`text-lg font-untitle-sans-medium mb-2
                                    ${
                                      modalState.type === "success"
                                        ? "text-green-400"
                                        : "text-red-400"
                                    }`}
                >
                  {modalState.type === "success" ? "Success!" : "Error!"}
                </h3>
                <p className="text-primary-dark/80 mb-6 font-untitle-sans-regular">
                  {modalState.message}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={closeModal}
                  className={`px-6 py-2 rounded-full text-sm font-untitle-sans-medium
                                        ${
                                          modalState.type === "success"
                                            ? "bg-gradient-to-b from-[rgba(134,239,172,0.1)] to-[rgba(134,239,172,0.05)] text-green-400"
                                            : "bg-gradient-to-b from-[rgba(252,165,165,0.1)] to-[rgba(252,165,165,0.05)] text-red-400"
                                        }
                                        shadow-[inset_0_1px_1px_0_rgba(216,236,248,0.1),inset_0_24px_48px_0_rgba(168,216,245,0.02),0_4px_8px_rgba(0,0,0,0.1)]
                                        hover:shadow-[inset_0_1px_1px_0_rgba(216,236,248,0.2),inset_0_24px_48px_0_rgba(168,216,245,0.06),0_8px_16px_rgba(0,0,0,0.2)]
                                        transition-all duration-300`}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
