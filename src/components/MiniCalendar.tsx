import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { calendarDays } from '../data/mockData';

const weekLabels = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

const MiniCalendar: React.FC = () => {
  const [selected, setSelected] = useState(13);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: 0.05 }}
      className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-4 sm:p-6"
    >
      <h3 className="font-[Syne] text-lg sm:text-xl font-bold text-white mb-1">
        Calendrier
      </h3>
      <p className="text-white/40 text-xs sm:text-sm mb-5">Novembre 2026</p>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekLabels.map((d, i) => (
          <div
            key={`${d}-${i}`}
            className="text-center text-[10px] sm:text-xs text-white/30 font-medium py-1"
          >
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1.5">
        {Array.from({ length: 1 }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {calendarDays.map((item) => {
          const isSelected = selected === item.day;
          return (
            <motion.button
              key={item.day}
              type="button"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelected(item.day)}
              className={`relative aspect-square rounded-xl flex flex-col items-center justify-center text-xs sm:text-sm font-semibold transition-colors ${
                isSelected
                  ? 'bg-gradient-to-br from-[#007BFF] to-[#40E0D0] text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              {item.day}
              {item.rdvs > 0 && !isSelected && (
                <span className="absolute bottom-1 w-1 h-1 rounded-full bg-[#40E0D0]" />
              )}
            </motion.button>
          );
        })}
      </div>

      <motion.div
        key={selected}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-5 p-3 rounded-xl bg-gradient-to-r from-[#007BFF]/15 to-[#7B1FA2]/15 border border-white/10"
      >
        <p className="text-white/50 text-xs">Sélectionné</p>
        <p className="text-white font-semibold text-sm mt-0.5">
          {selected} nov. —{' '}
          {calendarDays.find((d) => d.day === selected)?.rdvs || 0} rendez-vous
        </p>
      </motion.div>
    </motion.div>
  );
};

export default MiniCalendar;
