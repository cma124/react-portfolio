import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";

const ContactSection = () => {
  const contactForm = useRef();
  const [isSending, setIsSending] = useState(false);

  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  emailjs.init({
    publicKey: PUBLIC_KEY,
  });

  const validateForm = () => {
    const { name, email, message } = contactForm.current;

    if (!name.value.trim()) {
      toast.error("Please enter your name.");
      return false;
    }
    if (!email.value.trim() || !/\S+@\S+\.\S+/.test(email.value)) {
      toast.error("Please enter a valid email address.");
      return false;
    }
    if (!message.value.trim()) {
      toast.error("Please enter a message.");
      return false;
    }

    return true;
  };

  const sendMail = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSending(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, contactForm.current)
      .then(
        () => {
          toast.success("Message sent! I'll get back to you soon 🚀.");
          contactForm.current.reset();
        },
        (error) => {
          console.error(error);
          toast.error("Failed to send message ❌. Please try again.");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="layout bg-lightblack border-0">
      <h2 data-aos="fade-up" className="text-center">
        Contact Me
      </h2>
      <h4
        data-aos="fade-up"
        data-aos-delay="500"
        className="text-center text-gray-400 md:mb-7 lg:mb-10"
      >
        Have a project in mind or would like to connect? Feel free to get in
        touch.
      </h4>

      <div className="contact-layout">
        <div className="space-y-6">
          <div className="flex flex-col justify-center items-center md:flex-row gap-6">
            <a
              data-aos="fade-up"
              data-aos-delay="1000"
              href="tel:+66654416884"
              className="contact-box"
            >
              <FaPhone />
              <p className="text-primary">(+66) 654 416 884</p>
            </a>

            <div
              data-aos="fade-up"
              data-aos-delay="1300"
              className="contact-box"
            >
              <FaLocationDot />
              <p className="text-primary">Bangkok, Thailand</p>
            </div>
          </div>

          <a
            data-aos="fade-up"
            data-aos-delay="1600"
            href="mailto:chan.myae.a.099@gmail.com"
            className="contact-box mx-auto"
          >
            <FaEnvelope />
            <p className="text-primary">chan.myae.a.099@gmail.com</p>
          </a>
        </div>

        <form
          ref={contactForm}
          onSubmit={sendMail}
          data-aos="fade-up"
          data-aos-delay="1900"
          className="form-layout"
        >
          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleString()}
          />

          <div className="form-card">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Your Name" />
          </div>

          <div className="form-card">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
            />
          </div>

          <div className="form-card">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="4"
              placeholder="Your Message ..."
            ></textarea>
          </div>

          <button type="submit" disabled={isSending} className="form-btn">
            {isSending ? "Sending" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
