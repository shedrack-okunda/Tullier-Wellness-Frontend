import { Box, Typography, useTheme } from "@mui/material";
import home from "../../assets/images/home.jpg";
import { motion } from "framer-motion";
import { AboutUs } from "./About";
import { Testimonials } from "./Testimonials";
import { Events } from "./Events";
import { Services } from "./Services";
import { Resources } from "./Resources";
import { Programs } from "./Programs";
import { ContactForm } from "./ContactForm";
import { useInView } from "react-intersection-observer";

export const Home = () => {
  const theme = useTheme();

  // Create separate hooks for each section
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [eventsRef, eventsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [resourcesRef, resourcesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [programsRef, programsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [contactsRef, contactsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <Box
        id="home"
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.text.primary,
          padding: "2rem",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.3rem", sm: "1.3rem" },
              fontWeight: 600,
              fontStyle: "italic",
              textAlign: "center",
              marginBottom: "1rem",
              color: theme.palette.text.secondary,
            }}
          >
            Welcome
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: theme.typography.fontFamily,
              fontSize: { xs: "2rem", sm: "2.3rem" },
              textAlign: "center",
              color: theme.palette.secondary.main,
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            Tullier Wellness
          </Typography>
        </motion.div>

        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: "1.2rem", sm: "1.2rem" },
            fontWeight: 500,
            color: theme.palette.text.primary,
            lineHeight: "1.8",
            marginBottom: "1rem",
            maxWidth: "700px",
          }}
        >
          At Tullier, we believe in the transformative power of safe spaces and
          conversations. Our mission is to provide a haven for mental and
          emotional well-being, offering counselling services and trauma-healing
          programs. We nurture the growth of individuals aged 21 to 35, with a
          particular focus on youth and women. Empowering them with essential
          life skills, we guide them through the journey of healing,
          self-discovery, and resilient living.
        </Typography>

        <Box
          component="img"
          src={home}
          alt="wellness"
          sx={{
            width: "100%",
            maxWidth: "500px",
            borderRadius: "15px",
            boxShadow: `0px 4px 20px ${theme.palette.secondary.light}`,
            marginBottom: "1rem",
          }}
        />
      </Box>

      {/* Other Sections with Separate Observers */}
      <Box id="about" ref={aboutRef}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={aboutInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.5 }}
        >
          <AboutUs />
        </motion.div>
      </Box>

      <Box id="testimonials" ref={testimonialsRef}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={testimonialsInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.5 }}
        >
          <Testimonials />
        </motion.div>
      </Box>

      <Box id="events" ref={eventsRef}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={eventsInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.5 }}
        >
          <Events />
        </motion.div>
      </Box>

      <Box id="services" ref={servicesRef}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={servicesInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.5 }}
        >
          <Services />
        </motion.div>
      </Box>

      <Box id="resources" ref={resourcesRef}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={resourcesInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.5 }}
        >
          <Resources />
        </motion.div>
      </Box>

      <Box id="programs" ref={programsRef}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={programsInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.5 }}
        >
          <Programs />
        </motion.div>
      </Box>

      <Box id="contacts" ref={contactsRef}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={contactsInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.5 }}
        >
          <ContactForm />
        </motion.div>
      </Box>
    </>
  );
};
