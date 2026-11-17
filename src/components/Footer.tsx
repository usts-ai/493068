import React from 'react';
import { motion } from 'framer-motion';

const socials = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'YouTube', href: '#' },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-16 sm:mt-24 border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#007BFF]/10 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#007BFF] to-[#40E0D0]">
                <span className="text-white font-bold text-xs">S</span>
              </span>
              <span className="font-[Syne] text-lg font-bold text-white">
                Schedul<span className="text-[#40E0D0]">app</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              La gestion de rendez-vous sur mesure pour les professionnels exigeants.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Produit
            </h4>
            <ul className="space-y-2">
              {['Fonctionnalités', 'Tarifs', 'Intégrations', 'Sécurité'].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 4, color: '#40E0D0' }}
                    className="text-white/50 text-sm inline-block transition-colors"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Ressources
            </h4>
            <ul className="space-y-2">
              {['Documentation', 'Centre d\'aide', 'Blog', 'API'].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 4, color: '#40E0D0' }}
                    className="text-white/50 text-sm inline-block transition-colors"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Réseaux
            </h4>
            <div className="flex flex-wrap gap-2">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{
                    scale: 1.08,
                    backgroundColor: 'rgba(64,224,208,0.2)',
                    borderColor: 'rgba(64,224,208,0.5)',
                  }}
                  className="px-3 py-2 rounded-lg border border-white/10 text-white/60 text-xs font-medium"
                >
                  {s.label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © 2026 Schedulapp — Tous droits réservés
          </p>
          <div className="flex gap-6">
            {['Mentions légales', 'Confidentialité', 'CGU'].map((item) => (
              <motion.a
                key={item}
                href="#"
                whileHover={{ color: '#40E0D0' }}
                className="text-white/40 text-xs transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
