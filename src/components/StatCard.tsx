import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  label: string;
  value: string | number;
  delta: string;
  positive: boolean;
  color: string;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  delta,
  positive,
  color,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -6,
        boxShadow: `0 20px 40px ${color}33`,
      }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-5 sm:p-6 cursor-default group"
    >
      <div
        className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"
        style={{ background: color }}
      />
      <div className="relative">
        <p className="text-white/50 text-xs sm:text-sm font-medium mb-3">{label}</p>
        <div className="flex items-end justify-between gap-2">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + index * 0.08, type: 'spring' }}
            className="font-[Syne] text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            {value}
          </motion.span>
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full ${
              positive
                ? 'bg-emerald-400/15 text-emerald-300'
                : 'bg-rose-400/15 text-rose-300'
            }`}
          >
            {delta}
          </span>
        </div>
        <div className="mt-4 h-1 rounded-full bg-white/5 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${60 + index * 10}%` }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${color}, #92FE9D)` }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default StatCard;
