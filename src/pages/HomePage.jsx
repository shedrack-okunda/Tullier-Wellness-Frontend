import { AboutUs } from "../features/components/About";
import { ContactForm } from "../features/components/ContactForm";
import { Events } from "../features/components/Events";
import { Home } from "../features/components/Home";
import { NewsLetter } from "../features/components/NewsLetter";
import { Resources } from "../features/components/Resources";
import { Services } from "../features/components/Services";
import { Testimonials } from "../features/components/Testimonials";
import { Footer } from "../features/footer/Footer";
import { Navbar } from "../features/navigation/components/Navbar";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <AboutUs />
      <Testimonials />
      <Events />
      <Services />
      <Resources />
      <ContactForm />
      <NewsLetter />
      <Footer />
    </>
  );
};
