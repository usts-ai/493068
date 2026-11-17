import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

const links = [
  { id: 'overview', label: 'Vue globale' },
  { id: 'agenda', label: 'Agenda' },
  { id: 'rapports', label: 'Rapports' },
  { id: 'equipe', label: 'Équipe' },
];

const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a1628]/90 backdrop-blur-xl shadow-lg shadow-cyan-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <button
            type="button"
            onClick={() => onNavigate('overview')}
            className="flex items-center gap-2 group"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#007BFF] to-[#40E0D0] shadow-lg shadow-cyan-400/30 group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-sm tracking-tight">S</span>
            </span>
            <span className="font-[Syne] text-xl sm:text-2xl font-bold text-white tracking-tight">
              Schedul<span className="text-[#40E0D0]">app</span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => onNavigate(link.id)}
                className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/10 border border-white/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              className="px-4 py-2 text-sm font-semibold text-white/80 hover:text-white transition-colors"
            >
              Connexion
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(64,224,208,0.45)' }}
              whileTap={{ scale: 0.97 }}
              type="button"
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-[#0a1628] bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]"
            >
              Essai gratuit
            </motion.button>
          </div>

          <button
            type="button"
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white rounded"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-white rounded"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white rounded"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-[#0a1628]/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {links.map((link, i) => (
                <motion.button
                  key={link.id}
                  type="button"
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => {
                    onNavigate(link.id);
                    setOpen(false);
                  }}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-gradient-to-r from-[#007BFF]/30 to-[#40E0D0]/20 text-white'
                      : 'text-white/70 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                type="button"
                whileTap={{ scale: 0.98 }}
                className="mt-2 px-4 py-3 rounded-xl text-sm font-semibold text-[#0a1628] bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]"
              >
                Essai gratuit
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
