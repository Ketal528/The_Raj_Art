import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState(""); // Capturing their email
  const [message, setMessage] = useState("");

  const mobileNumber = "919510216566"; 

  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();
    const encodedMessage = encodeURIComponent(
      `Hello! My name is ${name} (${userEmail}). \n\n${message}`
    );
    const whatsappUrl = `https://wa.me/${mobileNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="bg-[#f2e9d9] py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4 font-bold">Get in Touch</h2>
          <p className="text-gray-700 max-w-2xl mx-auto font-light">
            Have a custom design in mind? Reach out via WhatsApp or Email.
          </p>
        <div className="w-20 h-1 bg-[#e07a5f] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white/40 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-sm">
            <form className="space-y-6" onSubmit={handleWhatsAppRedirect}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-bold">Name</label>
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 rounded-xl border-none bg-white focus:ring-2 focus:ring-[#e07a5f] outline-none transition-all" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-bold">Email</label>
                <input type="email" required value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className="w-full px-4 py-3 rounded-xl border-none bg-white focus:ring-2 focus:ring-[#e07a5f] outline-none transition-all" placeholder="Your Email Address" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-bold">Message</label>
                <textarea rows="4" required value={message} onChange={(e) => setMessage(e.target.value)} className="w-full px-4 py-3 rounded-xl border-none bg-white focus:ring-2 focus:ring-[#e07a5f] outline-none transition-all" placeholder="Tell us about your interest..."></textarea>
              </div>
              <button type="submit" className="w-full bg-[#e07a5f] text-white py-4 rounded-xl font-bold hover:bg-[#8c2212] transition-all shadow-lg flex items-center justify-center gap-2 transform active:scale-95">
                {/* Adding a simple WhatsApp icon look with text */}
                <span>Connect on WhatsApp</span>
                <span className="text-xl">→</span>
                </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white/40 backdrop-blur-md p-8 rounded-3xl shadow-sm border border-white/20">
              <h3 className="text-2xl font-serif text-gray-900 mb-4 font-bold">Our Contact Info</h3>
              <p className="text-gray-700 mb-2">Badoli, Sabarkantha District, Gujarat 383410</p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-[#e07a5f] font-bold underline">Email:</span>
                  <a href="mailto:ketalsutariya@gmail.com" className="text-gray-600 hover:text-[#e07a5f]">sutariyaketal98@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#e07a5f] font-bold underline">WhatsApp:</span>
                  <span className="text-gray-600">+91 95102 16566</span>
                </div>
              </div>
            </div>

            <div className="w-full h-96 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <iframe 
                title="The Raj Art Live Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14614.933246740173!2d73.0035043!3d23.6855146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395da362b083c749%3A0x7e029497042a5a54!2sBadoli%2C%20Gujarat%20383410!5e0!3m2!1sen!2sin!4v1708800000000!5m2!1sen!2sin" 
                className="w-full h-full border-0"
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;