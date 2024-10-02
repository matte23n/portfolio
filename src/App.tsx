import React from 'react';
import { useState } from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { initReactI18next } from 'react-i18next';
import translationIT from './locales/it.json';
import translationEN from './locales/en.json';
import { ReactComponent as Avatar } from './avataaars.svg';


// Initialize i18n
const initializeI18n = async () => {
  const enTranslation = translationEN
  const itTranslation = translationIT

  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: enTranslation
        },
        it: {
          translation: itTranslation
        }
      },
      lng: "en", // Default language
      fallbackLng: "en",
      interpolation: {
        escapeValue: false
      }
    });
};

initializeI18n();

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'it' : 'en');
  };

  return (
    <button onClick={toggleLanguage} className="ml-4 px-3 py-1 bg-gray-200 rounded">
      {i18n.language === 'en' ? 'IT' : 'EN'}
    </button>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold">{t('name')}</a>
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-6">
            <li><a href="#skills" className="hover:text-blue-600">{t('skills')}</a></li>
            <li><a href="#projects" className="hover:text-blue-600">{t('projects')}</a></li>
            <li><a href="#about" className="hover:text-blue-600">{t('about')}</a></li>
            <li><a href="#contact" className="hover:text-blue-600">{t('contact')}</a></li>
          </ul>
          <LanguageToggle />
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {t('menu')}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center py-4">
            <li><a href="#skills" className="block py-2 hover:text-blue-600">{t('skills')}</a></li>
            <li><a href="#projects" className="block py-2 hover:text-blue-600">{t('projects')}</a></li>
            <li><a href="#about" className="block py-2 hover:text-blue-600">{t('about')}</a></li>
            <li><a href="#contact" className="block py-2 hover:text-blue-600">{t('contact')}</a></li>
            <li><LanguageToggle /></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-gray-100 py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('hero.greeting')}</h1>
        <div className="mb-8 flex justify-center">
          <Avatar />
        </div>
        <p className="text-xl mb-8 max-w-2xl mx-auto">{t('hero.description')}</p>
        <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">{t('hero.cta')}</a>
      </div>
    </section>
  );
};

interface SkillCardProps {
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const Skills = () => {
  const { t } = useTranslation();
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('skills.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCard
            title={t('skills.fullstack')}
            description={t('skills.fullstack.desc')}
          />
          <SkillCard
            title={t('skills.flutter')}
            description={t('skills.flutter.desc')}
          />
          <SkillCard
            title={t('skills.learning')}
            description={t('skills.learning.desc')}
          />
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<SkillCardProps> = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const Projects = () => {
  const { t } = useTranslation();
  return (
    <section id="projects" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('projects.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <ProjectCard
            title={t('projects.fitness')}
            description={t('projects.fitness.desc')}
          />
          {/* Add more ProjectCard components as needed */}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('about.title')}</h2>
        <div className="max-w-3xl mx-auto">
          <p className="mb-4">{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">{t('contact.title')}</h2>
        <p className="mb-8">{t('contact.description')}</p>
        <a href="mailto:matteosantoro1998@gmail.com" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">{t('contact.cta')}</a>
      </div>
    </section>
  );
};

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 Matteo Santoro. {t('footer')}</p>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;