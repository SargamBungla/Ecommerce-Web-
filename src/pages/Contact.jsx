export const Contact = () => {
  return (
    <section
      className="py-16 px-4 max-w-7xl mx-auto 
      bg-white dark:bg-gray-900 
      min-h-screen transition-colors duration-300"
    >
      {/* Heading */}
      <h1
        className="text-4xl font-semibold text-center mb-10 
        text-gray-900 dark:text-white"
      >
        Contact Page
      </h1>

      {/* Google Map */}
      <div className="w-full mb-12 rounded-xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7011.075779971087!2d77.20377439346204!3d28.523547902897402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1f0dd053fdd%3A0x97d95c1a5860139f!2sSaket%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1776389652812!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto flex flex-col gap-4">
        <form
          action="https://formspree.io/f/mrerpdqk"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="USERNAME"
            name="username"
            required
            autoComplete="off"
            className="w-full 
              border border-gray-300 dark:border-gray-600 
              bg-white dark:bg-gray-800 
              text-gray-900 dark:text-white
              rounded px-4 py-3 text-sm uppercase tracking-widest 
              placeholder-gray-400 dark:placeholder-gray-500
              focus:outline-none focus:border-purple-500 
              transition-colors duration-300"
          />

          <input
            type="email"
            placeholder="EMAIL"
            name="Email"
            required
            autoComplete="off"
            className="w-full 
              border border-gray-300 dark:border-gray-600 
              bg-white dark:bg-gray-800 
              text-gray-900 dark:text-white
              rounded px-4 py-3 text-sm uppercase tracking-widest 
              placeholder-gray-400 dark:placeholder-gray-500
              focus:outline-none focus:border-purple-500 
              transition-colors duration-300"
          />

          <textarea
            name="message"
            cols={30}
            rows={6}
            required
            autoComplete="off"
            placeholder="ENTER YOUR MESSAGE"
            className="w-full 
              border border-gray-300 dark:border-gray-600 
              bg-white dark:bg-gray-800 
              text-gray-900 dark:text-white
              rounded px-4 py-3 text-sm uppercase tracking-widest 
              placeholder-gray-400 dark:placeholder-gray-500
              focus:outline-none focus:border-purple-500 
              resize-none transition-colors duration-300"
          />

          <button
            type="submit"
            className="bg-purple-600 text-white py-3 px-8 rounded 
              hover:bg-purple-700 transition font-semibold 
              tracking-widest uppercase self-center mt-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
