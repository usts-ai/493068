import React from 'react';
import { motion } from 'framer-motion';
import { appointments } from '../data/mockData';

const statusStyles: Record<string, string> = {
  confirmé: 'bg-emerald-400/15 text-emerald-300 border-emerald-400/30',
  'en attente': 'bg-amber-400/15 text-amber-300 border-amber-400/30',
  'rappel envoyé': 'bg-cyan-400/15 text-cyan-300 border-cyan-400/30',
};

const AppointmentList: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-4 sm:p-6"
    >
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="font-[Syne] text-lg sm:text-xl font-bold text-white">
            Agenda du jour
          </h3>
          <p className="text-white/40 text-xs sm:text-sm mt-1">
            Mardi 17 novembre 2026
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          type="button"
          className="hidden sm:inline-flex px-3 py-1.5 rounded-full text-xs font-semibold text-[#0a1628] bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]"
        >
          + Nouveau
        </motion.button>
      </div>

      <div className="space-y-3">
        {appointments.map((rdv, i) => (
          <motion.div
            key={rdv.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{
              scale: 1.015,
              backgroundColor: 'rgba(255,255,255,0.06)',
            }}
            className="flex items-center gap-3 sm:gap-4 p-3 rounded-xl border border-white/5 bg-white/[0.02] transition-colors"
          >
            <img
              src={rdv.avatar}
              alt={rdv.client}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-[#40E0D0]/30 shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p className="text-white font-medium text-sm sm:text-base truncate">
                {rdv.client}
              </p>
              <p className="text-white/40 text-xs sm:text-sm truncate">{rdv.service}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-[#40E0D0] font-semibold text-sm">{rdv.heure}</p>
              <p className="text-white/30 text-xs">{rdv.duree}</p>
            </div>
            <span
              className={`hidden sm:inline-block text-[10px] font-semibold px-2 py-1 rounded-full border shrink-0 ${
                statusStyles[rdv.statut] || statusStyles.confirmé
              }`}
            >
              {rdv.statut}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AppointmentList;
