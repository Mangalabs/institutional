import { useState } from "react";
import emailjs from "@emailjs/browser";
import { contactData } from "../data/contactData";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const { heading, form, contactItems, mapPlaceholder } = contactData;

  const initialValues = Object.fromEntries(
    form.fields.filter(f => f.type !== "submit").map(f => [f.name, ""])
  );

  const [formData, setFormData] = useState(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ message: "", isError: false });

  const handleChange = ({ target: { name, value } }) =>
    setFormData(prev => ({ ...prev, [name]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback({ message: "", isError: false });

    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      formData,
      PUBLIC_KEY
    )
      .then(() => {
        setFormData(initialValues);
        setFeedback({
          message: form.successMessage,
          isError: false
        });
      })
      .catch(() => {
        setFeedback({
          message: "Ops, tivemos um problema. Tente pelo nosso whatsapp.",
          isError: true
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const renderField = ({ type, name, label, placeholder, required, rows }) => {
    const baseClass = "w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:border-orange-light transition-colors duration-300";

    const commonProps = {
      name,
      value: formData[name],
      onChange: handleChange,
      placeholder,
      required,
      className: type === "textarea" ? `${baseClass} resize-none` : baseClass,
    };

    return (
      <div key={name} className="mb-4">
        <label className="block text-sm font-poppins font-semibold mb-2">{label}</label>
        {type === "textarea" ? (
          <textarea rows={rows} {...commonProps} />
        ) : (
          <input type={type} {...commonProps} />
        )}
      </div>
    );
  };

  const ContactItem = ({ icon, title, content }) => (
    <div className="flex items-center space-x-4 mb-6">
      <div className="w-12 h-12 bg-orange-vibrant rounded-full flex items-center justify-center text-xl">
        {icon}
      </div>
      <div>
        <h4 className="font-poppins font-semibold text-lg">{title}</h4>
        <p className="text-gray-300">{content}</p>
      </div>
    </div>
  );

  return (
    <section id="contact" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            {heading.title}{" "}
            <span className="bg-gradient-to-r from-orange-vibrant to-orange-light bg-clip-text text-transparent">{heading.highlighted}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{heading.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6 fade-in floating"
          >
            {form.fields.map(renderField)}

            {feedback.message && (
              <div className={`p-4 rounded-lg ${feedback.isError ? "bg-red-500/20 text-red-100" : "bg-green-500/20 text-green-100"}`}>
                {feedback.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-vibrant hover:bg-orange-light text-white font-poppins font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:hover:scale-100"
            >
              {isSubmitting ? form.submittingText : form.submitText}
            </button>
          </form>

          <div className="fade-in">
            {contactItems.map((item, i) => (
              <ContactItem key={i} {...item} />
            ))}

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center mt-6">
              <div className="text-6xl mb-4">{mapPlaceholder.icon}</div>
              <p className="text-gray-300">{mapPlaceholder.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
