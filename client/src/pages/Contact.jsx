import React from 'react'
import { Github,Linkedin,Twitter } from 'lucide-react';

import profileImage from '/Karanimage.jpg'; 

const Contact = () => {
  return (
    <div className="contact-page" style={{ display: 'flex', padding: '2rem', backgroundColor: '#f8fbff', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', background: '#fff', borderRadius: '10px', padding: '2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <img 
            src={profileImage} 
            alt="Karan Jadhav" 
            style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover' }} 
          />
          <div>
         <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '600' }}>Karan Jadhav</h2>
        <p style={{ margin: 0, fontSize: '1.5rem', color: '#666' }}>Full Stack Developer</p>

          </div>
        </div>
        
        <div style={{ fontSize: '1rem', lineHeight: '1.6', color: '#333' }}>
          <p>Email: <a href="mailto:karanjadhav4065@gmail.com">karanjadhav4065@gmail.com</a></p>
          <p>Phone: <a href="tel:+911234567890">+91 9699823258</a></p>
          <p>Location: Nagpur, Maharashtra, India</p>
        </div>

        <hr style={{ margin: '2rem 0', borderColor: '#eee' }} />

        <div style={{ color: '#444' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>About KarNex</h3>
          <p>KarNex is your AI-powered digital assistant designed to supercharge your productivity and creativity.</p>
          <p>From writing blogs, reviewing resumes, generating images, to removing unwanted objects — KarNex makes it effortless and efficient.</p>
          <p>Driven by passion and powered by intelligence, KarNex is more than a tool — it’s your creative partner in the digital world.</p>
              <div className="text-gray-600 mt-24 text-center">
                <p className="text-lg font-medium">
                  Connect with me <span className="text-red-500">&hearts;</span>
                </p>

                <div className="flex justify-center items-center gap-6 mt-6">
                  <a href="https://github.com/karan4065" id="icon1" target="_blank" rel="noopener noreferrer">
                    <Github size={28} className="hover:text-gray-800 transition-colors duration-300 cursor-pointer" />
                  </a>
                  <a href="https://www.linkedin.com/in/karan-jadhav-573968322/" id="icon2" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={28} className="hover:text-blue-700 transition-colors duration-300 cursor-pointer" />
                  </a>
                  <a href="https://twitter.com/karan_jadhav30" id="icon3" target="_blank" rel="noopener noreferrer">
                    <Twitter size={28} className="hover:text-sky-400 transition-colors duration-300 cursor-pointer" />
                  </a>
                </div>
              </div>

        </div>
         

      </div>
    </div>
  );
};

export default Contact;
