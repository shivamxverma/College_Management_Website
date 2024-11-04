import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bg from "../assets/bg.png";
import bg1 from "../assets/bg1.png";

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', backgroundColor: '#6BD4E7', position: 'fixed', width: '100%', top: '0', zIndex: '1000' }}>
        <img src={bg1} alt="School Logo" style={{ width: '50px', height: 'auto' }} />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/about" style={{ marginRight: '20px', color: 'black', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold' }}>About Us</Link>
          <Link to="/products" style={{ marginRight: '20px', color: 'black', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold' }}>Products</Link>
          <Link to="/contact" style={{ color: 'black', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold' }}>Contact Us</Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button onClick={() => handleLoginClick('/choose-user')} style={{ backgroundColor: 'orange', color: 'white', border: 'none', padding: '10px 20px', fontSize: '16px', fontWeight: 'bold', marginRight: '10px' }}>Sign In</button>
          <button onClick={() => handleLoginClick('/guest')} style={{ color: 'orange', border: '2px solid orange', padding: '10px 20px', fontSize: '16px', fontWeight: 'bold', borderRadius: '5px', backgroundColor: 'transparent' }}>Guest Mode</button>
        </div>
      </nav>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', background: 'linear-gradient(45deg, #6BD4E7, #6FC3DF)', minHeight: '100vh', paddingTop: '80px' }}>
        <div style={{ marginTop: '20px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>College Management System</h1>
          <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '18px', color: 'white', textAlign: 'justify', padding: '0 20px' }}>
            <p>Welcome to our comprehensive College management platform, designed to streamline educational processes and improve the learning experience.</p>
          </div>
          <Link to="/admin/register" style={{ color: 'white', fontSize: '14px', fontWeight: 'bold', textDecoration: 'none', marginTop: '10px', display: 'inline-block' }}>Admin Register</Link>
        </div>
        <img src={bg} alt="Students studying" style={{ width: '80%', maxHeight: '80vh', objectFit: 'cover', marginTop: '20px' }} />
      </div>
    </>
  );
};

export default Home;
