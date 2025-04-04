import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiUsers, FiCalendar } from 'react-icons/fi';
import { initialEvents, Event } from '../data';
import EventCard from '../Components/EventCard';

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Connect Communities
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Bridging gaps between faiths with tech and a dash of fun!
          </motion.p>
        </div>
        <motion.div
          className="hero-images"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            alt="Group discussion"
            className="hero-image"
          />
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            alt="Community gathering"
            className="hero-image"
          />
          <img
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            alt="Team collaboration"
            className="hero-image"
          />
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="content">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Unite, Innovate, Connect, Inspire Together</h2>
          <p>
            Join us to be part of a community where spirituality meets innovation. Together, we’ll build a world that’s more inclusive.
          </p>
          <div className="avatars">
            <img
              src="https://randomuser.me/api/portraits/thumb/men/1.jpg"
              alt="Avatar 1"
              className="avatar"
            />
            <img
              src="https://randomuser.me/api/portraits/thumb/women/2.jpg"
              alt="Avatar 2"
              className="avatar"
            />
            <img
              src="https://randomuser.me/api/portraits/thumb/men/3.jpg"
              alt="Avatar 3"
              className="avatar"
            />
            <span className="avatar-more">+8 people</span>
          </div>
          <Link to="/events" className="cta-button">
            {(FiCheckCircle as any)({ style: { marginRight: '8px' } })} {/* Type assertion */}
            Explore Events
          </Link>
        </motion.div>
      </section>

      {/* Featured Events Section */}
      <section className="featured-events">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Featured Events
        </motion.h2>
        <motion.div
          className="event-list"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {initialEvents.slice(0, 3).map((event: Event) => (
            <motion.div key={event.id} variants={itemVariants}>
              <EventCard event={event} />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link to="/events" className="cta-button secondary">
            {(FiCalendar as any)({ style: { marginRight: '8px' } })} {/* Type assertion */}
            View All Events
          </Link>
        </motion.div>
      </section>

      {/* Join Community Section */}
      <section className="join-community">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Join Our Community</h2>
          <p>
            Be part of a growing network of individuals and organizations dedicated to fostering unity and understanding across faiths.
          </p>
          <Link to="/signup" className="cta-button">
            {(FiUsers as any)({ style: { marginRight: '8px' } })} {/* Type assertion */}
            Join Now
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>CommunionHub</h3>
            <p>Connecting people of all faiths through events and community support.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/events">Events</Link>
            <Link to="/support">Support</Link>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: support@communionhub.org</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 CommunionHub. All rights reserved.</p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Home;