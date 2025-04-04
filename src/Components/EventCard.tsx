import React from 'react';
import { Event } from '../data';

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  const eventImages: { [key: string]: string } = {
    Religious: 'https://worldinterfaithharmonyweek.com/wp-content/uploads/2019/02/9454_1550008764_58ec4d80432bb3fadc523a9ff38cb553-864x532.jpg', // Image of a religious gathering
    Charity: 'https://cdn.prod.website-files.com/612f5131b9c94eda2fe9c725/612f5131b9c94efdc4e9ce45_61150537afd4f21f4ab88010_604ae4d38cd70f35b47b4d79_charity2520run.jpeg', // Image of people running in a charity event
    Social: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', // Image of a social gathering
  };

  const imageSrc = eventImages[event.category] || eventImages['Social'];

  return (
    <div className="event-card">
      <div className="event-content">
        <h3>{event.title}</h3>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p>{event.description}</p>
        <p><strong>Category:</strong> {event.category}</p>
      </div>
      <img src={imageSrc} alt={event.title} className="event-image" />
    </div>
  );
};

export default EventCard;