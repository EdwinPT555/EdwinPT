const Contact = () => {
  const handleContactMethod = (method: 'call' | 'email' | 'whatsapp' | 'linkedin') => {
    if (method === 'call') {
      window.location.href = 'tel:+917558063046'; // Replace with your phone number
    } else if (method === 'email') {
      window.location.href = 'mailto:edwinpt555@gmail.com'; // Replace with your email
    } else if (method === 'whatsapp') {
      window.open('https://wa.me/917558063046', '_blank'); // Replace with your WhatsApp number
    } else if (method === 'linkedin') {
      window.open('https://www.linkedin.com/in/edwinpt/', '_blank'); // Replace with your LinkedIn URL
    }
  };

  return (
    <div className="h-full bg-black text-yellow-500 flex justify-center items-center p-4 -mt-4">
      <div className="w-full max-w-sm sm:max-w-md p-6 sm:p-8 border border-yellow-500 rounded-lg">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Contact Me</h1>
        <form className="space-y-4 sm:space-y-6">
          <div>
            <label className="block mb-2 font-semibold" htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="w-full p-2 bg-black border border-yellow-500 text-yellow-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="w-full p-2 bg-black border border-yellow-500 text-yellow-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={4} // Reduced the height for better mobile view
              className="w-full p-2 bg-black border border-yellow-500 text-yellow-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-400 focus:outline-none"
          >
            Send Message
          </button>
        </form>

        <h1 className="text-center my-4 sm:my-6">or</h1>
        {/* Contact Methods Section */}
        <div className="flex items-center justify-center mt-4 sm:mt-6">
          <div className="flex space-x-3 sm:space-x-4">
            <button onClick={() => handleContactMethod('email')} aria-label="Email">
              <i className="fas fa-envelope text-yellow-500 text-xl sm:text-2xl"></i>
            </button>
            <button onClick={() => handleContactMethod('whatsapp')} aria-label="WhatsApp">
              <i className="fab fa-whatsapp text-yellow-500 text-xl sm:text-2xl"></i>
            </button>
            <button onClick={() => handleContactMethod('linkedin')} aria-label="LinkedIn">
              <i className="fab fa-linkedin-in text-yellow-500 text-xl sm:text-2xl"></i>
            </button>
            <button onClick={() => handleContactMethod('call')} aria-label="Call">
              <i className="fas fa-phone text-yellow-500 text-xl sm:text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
