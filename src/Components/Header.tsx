import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">CommunionHub</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/communities">Communities</Link>
        <Link to="/events">Events</Link>
        <Link to="/leaders">Leaders</Link>
        <Link to="/support">Support</Link>
        <Link to="/signin" className="signin-button">
          {(FaSignInAlt as any)({ style: { marginRight: '8px' } })} {/* Type assertion */}
          Sign in
        </Link>
      </nav>
    </header>
  );
};

export default Header;