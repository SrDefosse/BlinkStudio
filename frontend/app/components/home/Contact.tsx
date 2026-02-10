import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaEnvelope, FaPlus, FaInstagram } from 'react-icons/fa';
import { useFetcher } from 'react-router';

const colors = {
  bg: {
    primary: "#1a1d18",
    secondary: "#2a2e26",
    tertiary: "#3c4237",
  },
  text: {
    primary: "#e6e1d7",
    secondary: "#c8b4a0",
    muted: "#a89080",
  }
};

interface ContactComponentProps {
  showHeader?: boolean;
}

const ContactComponent = ({ showHeader = true }: ContactComponentProps) => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    interests: [] as string[]
  });

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const isSuccess = fetcher.data?.success;
  const isError = fetcher.data?.success === false;

  useEffect(() => {
    if (isSuccess) {
      setFormData({
        name: '',
        email: '',
        message: '',
        interests: []
      });
      // Optional: Clear success message after a delay if needed, 
      // but keeping it visible is fine or the user can just see the form cleared + button state.
    }
  }, [isSuccess]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (value: string) => {
    setFormData({
      ...formData,
      interests: formData.interests.includes(value)
        ? formData.interests.filter(i => i !== value)
        : [...formData.interests, value]
    });
  };

  const handleSubmit = () => {
    // Map to the fields expected by contact.ts
    const submissionData = {
      nombre: formData.name,
      correo: formData.email,
      mensaje: formData.message,
      interests: formData.interests.join(", "),
      // honeypot field 'website' is empty by default
    };

    fetcher.submit(submissionData, { method: "post", action: "/contact" });
  };

  const faqItems = [
    { question: 'What services does Blink offer?', answer: 'Blink specializes in web development, mobile apps, e-commerce solutions, brand identity design, web applications, 3D animation, social media marketing, and brand strategy consulting. We provide end-to-end digital solutions tailored to your needs.' },
    { question: 'How long does a typical project take?', answer: 'Project timelines vary based on scope and complexity. A simple website typically takes 4-8 weeks, while more complex projects like e-commerce platforms or custom web applications can take 12-16 weeks. We provide detailed timelines during our initial consultation.' },
    { question: 'What is your design and development process?', answer: 'Our process begins with understanding your goals and requirements. We then move through design concepts, development, testing, and deployment phases. We maintain open communication throughout, providing regular updates and incorporating your feedback at each stage.' },
    { question: 'Do you provide ongoing support and maintenance?', answer: 'Yes, we offer comprehensive maintenance packages to keep your website or application updated, secure, and performing optimally. We also provide training and documentation to help you manage your digital assets effectively.' },
    { question: 'Can you work with existing brands or only create new ones?', answer: 'We work with both new and existing brands. Whether you need a complete rebrand or want to enhance your current brand identity, we adapt our services to meet your specific needs and maintain consistency with your existing brand elements when appropriate.' }
  ];

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="space-y-8">
          {/* Header */}
          {showHeader && (
            <div className="p-8 rounded-2xl shadow-sm" style={{ backgroundColor: colors.bg.secondary }}>
              <p className="text-sm font-medium mb-2 uppercase tracking-wider" style={{ color: colors.text.muted }}>Contact Us</p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: colors.text.primary }}>
                Let's talk about<br />your problem.
              </h1>
            </div>
          )}

          {/* Location & Help */}
          <div className="grid grid-cols-1 gap-6">

            <div className="p-6 rounded-xl shadow-sm border" style={{ backgroundColor: colors.bg.secondary, borderColor: `${colors.text.muted}30` }}>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: colors.bg.tertiary }}>
                  <FaEnvelope className="text-xl" style={{ color: colors.text.secondary }} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: colors.text.primary }}>How Can We Help?</h3>
                  <p className="text-sm" style={{ color: colors.text.muted }}>contact@blinkstudio.dev</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="p-8 rounded-2xl shadow-sm border" style={{ backgroundColor: colors.bg.secondary, borderColor: `${colors.text.muted}30` }}>
            <h2 className="text-3xl font-bold mb-6" style={{ color: colors.text.primary }}>FAQ</h2>
            <div className="space-y-3">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b last:border-0 overflow-hidden" style={{ borderColor: `${colors.text.muted}30` }}>
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full flex items-center justify-between py-4 text-left transition-colors duration-200"
                    style={{ color: colors.text.primary }}
                    onMouseEnter={(e) => e.currentTarget.style.color = colors.text.secondary}
                    onMouseLeave={(e) => e.currentTarget.style.color = colors.text.primary}
                  >
                    <span className="font-medium">{item.question}</span>
                    <FaPlus className={`transition-all duration-300 ease-in-out ${expandedFaq === index ? 'rotate-45' : 'rotate-0'}`} style={{ color: colors.text.muted }} />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <p className="pb-4 text-sm" style={{ color: colors.text.muted }}>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="p-8 rounded-2xl shadow-sm border" style={{ backgroundColor: colors.bg.secondary, borderColor: `${colors.text.muted}30` }}>
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-2xl font-bold" style={{ color: colors.text.primary }}>Reach out to us today!</h2>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm mb-3" style={{ color: colors.text.muted }}>Mail us at</p>
              <p className="font-semibold mb-4" style={{ color: colors.text.primary }}>contact@blinkstudio.dev</p>
              <div className="flex items-center gap-4">
                <span className="text-sm" style={{ color: colors.text.muted }}>OR</span>
                <button type="button" className="p-3 rounded-lg transition-colors hover:opacity-80" style={{ backgroundColor: colors.bg.tertiary }}>
                  <FaFacebookF style={{ color: colors.text.secondary }} />
                </button>
                <button type="button" className="p-3 rounded-lg transition-colors hover:opacity-80" style={{ backgroundColor: colors.bg.tertiary }}>
                  <FaInstagram style={{ color: colors.text.secondary }} />
                </button>
              </div>
            </div>

            <div className="border-t pt-6" style={{ borderColor: `${colors.text.muted}30` }}>
              <p className="text-sm mb-4" style={{ color: colors.text.muted }}>Leave us a brief message</p>
              {isError && (
                <p className="text-red-400 text-sm mb-4">Error: {fetcher.data?.error || "Error sending message."}</p>
              )}
              {isSuccess && (
                <p className="text-green-400 text-sm mb-4">Message sent successfully!</p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm mb-2 block" style={{ color: colors.text.secondary }}>Your name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full border rounded-lg px-4 py-3 placeholder:opacity-60 focus:outline-none focus:border-opacity-60 transition-colors"
                    style={{
                      backgroundColor: colors.bg.tertiary,
                      borderColor: `${colors.text.muted}30`,
                      color: colors.text.primary
                    }}
                    onFocus={(e) => {
                      e.target.style.backgroundColor = colors.bg.primary;
                      e.target.style.borderColor = colors.text.muted;
                    }}
                    onBlur={(e) => {
                      e.target.style.backgroundColor = colors.bg.tertiary;
                      e.target.style.borderColor = `${colors.text.muted}30`;
                    }}
                  />
                </div>
                <div>
                  <label className="text-sm mb-2 block" style={{ color: colors.text.secondary }}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full border rounded-lg px-4 py-3 placeholder:opacity-60 focus:outline-none focus:border-opacity-60 transition-colors"
                    style={{
                      backgroundColor: colors.bg.tertiary,
                      borderColor: `${colors.text.muted}30`,
                      color: colors.text.primary
                    }}
                    onFocus={(e) => {
                      e.target.style.backgroundColor = colors.bg.primary;
                      e.target.style.borderColor = colors.text.muted;
                    }}
                    onBlur={(e) => {
                      e.target.style.backgroundColor = colors.bg.tertiary;
                      e.target.style.borderColor = `${colors.text.muted}30`;
                    }}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="text-sm mb-2 block" style={{ color: colors.text.secondary }}>Briefly describe your project idea...</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Briefly describe your project idea..."
                  rows={4}
                  className="w-full border rounded-lg px-4 py-3 placeholder:opacity-60 focus:outline-none focus:border-opacity-60 resize-none transition-colors"
                  style={{
                    backgroundColor: colors.bg.tertiary,
                    borderColor: `${colors.text.muted}30`,
                    color: colors.text.primary
                  }}
                  onFocus={(e) => {
                    e.target.style.backgroundColor = colors.bg.primary;
                    e.target.style.borderColor = colors.text.muted;
                  }}
                  onBlur={(e) => {
                    e.target.style.backgroundColor = colors.bg.tertiary;
                    e.target.style.borderColor = `${colors.text.muted}30`;
                  }}
                />
              </div>

              <div className="mb-6">
                <label className="text-sm mb-3 block" style={{ color: colors.text.secondary }}>I'm looking for...</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: 'web-development', label: 'Web Development' },
                    { value: 'branding', label: 'Branding & Identity' },
                    { value: 'chatbots', label: 'Chatbots' },
                    { value: 'automation', label: 'Automation Systems' }
                  ].map((option) => (
                    <label key={option.value} className="flex items-center gap-2 text-sm cursor-pointer" style={{ color: colors.text.primary }}>
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(option.value)}
                        onChange={() => handleCheckboxChange(option.value)}
                        className="w-4 h-4 rounded accent-gray-700"
                        style={{
                          backgroundColor: colors.bg.tertiary,
                          borderColor: `${colors.text.muted}40`
                        }}
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full font-semibold py-3 rounded-lg transition-colors hover:opacity-80 disabled:opacity-50"
                style={{ backgroundColor: colors.bg.tertiary, color: colors.text.primary }}
              >
                {isSubmitting ? "Sending..." : "Send a message"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
