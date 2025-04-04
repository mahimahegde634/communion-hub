import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Add this import
import { motion } from 'framer-motion';
import EventCard from '../Components/EventCard';
import EventForm from '../Components/EventForm';
import { Event, initialEvents } from '../data';

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [filter, setFilter] = useState<string>('All');

  const addEvent = (newEvent: Event) => {
    setEvents([...events, newEvent]);
  };

  const filteredEvents = filter === 'All'
    ? events
    : events.filter(event => event.category === filter);

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
      className="events"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Events Hero Section */}
      <section className="events-hero">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Discover Events</h1>
          <p>Join meaningful events that bring communities together.</p>
        </motion.div>
      </section>

      {/* Filter and Event List */}
      <motion.div
        className="filter"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <label>Filter by Category: </label>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
      </motion.div>
      <motion.div
        className="event-list"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredEvents.map(event => (
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
        <EventForm onAddEvent={addEvent} />
      </motion.div>

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

export default Events;