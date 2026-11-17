import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { heroImage, workspaceImage } from '../data/mockData';

const HeroBanner: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <div ref={ref} className="relative pt-24 sm:pt-28 pb-10 sm:pb-16 overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-32 w-72 h-72 rounded-full bg-[#007BFF]/25 blur-[100px]" />
        <div className="absolute top-40 right-0 w-80 h-80 rounded-full bg-[#7B1FA2]/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-[#40E0D0]/15 blur-[90px]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#40E0D0]/30 bg-[#40E0D0]/10 mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#40E0D0] animate-pulse" />
              <span className="text-[#40E0D0] text-xs font-semibold tracking-wide">
                Tableau de bord en direct
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="font-[Syne] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
            >
              Pilotez vos{' '}
              <span className="bg-gradient-to-r from-[#00C9FF] via-[#40E0D0] to-[#92FE9D] bg-clip-text text-transparent">
                rendez-vous
              </span>{' '}
              avec précision
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="mt-5 text-white/55 text-sm sm:text-base leading-relaxed max-w-md"
            >
              Schedulapp s&apos;adapte à votre métier : planning sur mesure, rappels
              automatiques et rapports de performance en un clin d&apos;œil.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 0 28px rgba(64,224,208,0.4)' }}
                whileTap={{ scale: 0.97 }}
                type="button"
                className="px-6 py-3 rounded-full text-sm font-bold text-[#0a1628] bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]"
              >
                Créer un rendez-vous
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04, borderColor: 'rgba(64,224,208,0.5)' }}
                whileTap={{ scale: 0.97 }}
                type="button"
                className="px-6 py-3 rounded-full text-sm font-semibold text-white border border-white/20 hover:bg-white/5 transition-colors"
              >
                Voir les rapports
              </motion.button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotateY: -8 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-2xl shadow-cyan-500/20 aspect-[16/11]">
              <img
                src={heroImage}
                alt="Équipe professionnelle en réunion"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex gap-3"
              >
                <div className="flex-1 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-3">
                  <p className="text-white/50 text-[10px] uppercase tracking-wider">
                    Aujourd&apos;hui
                  </p>
                  <p className="text-white font-bold text-lg">28 RDV</p>
                </div>
                <div className="flex-1 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-3">
                  <p className="text-white/50 text-[10px] uppercase tracking-wider">
                    Confirmation
                  </p>
                  <p className="text-[#40E0D0] font-bold text-lg">94%</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-2 sm:-left-6 w-28 sm:w-36 rounded-xl overflow-hidden border border-white/20 shadow-xl hidden sm:block"
            >
              <img
                src={workspaceImage}
                alt="Espace de travail moderne"
                className="w-full h-20 object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
