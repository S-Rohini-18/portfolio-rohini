
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Internship } from './components/Internship';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'internship', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header activeSection={activeSection} />
      <main>
        <section id="home"><Hero /></section>
        <section id="about" className="border-t border-slate-100"><About /></section>
        <section id="skills" className="border-t border-slate-100 bg-slate-50/30"><Skills /></section>
        <section id="projects" className="border-t border-slate-100"><Projects /></section>
        <section id="internship" className="border-t border-slate-100 bg-slate-50/30"><Internship /></section>
        <section id="education" className="border-t border-slate-100"><Education /></section>
        <section id="certifications" className="border-t border-slate-100 bg-slate-50/30"><Certifications /></section>
        <section id="contact" className="border-t border-slate-100"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
