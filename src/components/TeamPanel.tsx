import React from 'react';
import { motion } from 'framer-motion';
import { team } from '../data/mockData';

const TeamPanel: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-4 sm:p-6"
    >
      <h3 className="font-[Syne] text-lg sm:text-xl font-bold text-white mb-1">
        Performance équipe
      </h3>
      <p className="text-white/40 text-xs sm:text-sm mb-5">
        Classement de la semaine
      </p>

      <div className="space-y-4">
        {team.map((member, i) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ x: 4 }}
            className="flex items-center gap-3"
          >
            <span className="text-white/30 text-xs font-bold w-4">{i + 1}</span>
            <img
              src={member.avatar}
              alt={member.nom}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-white/10"
            />
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">{member.nom}</p>
              <p className="text-white/35 text-xs truncate">{member.role}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-[#40E0D0] font-bold text-sm">{member.score}%</p>
              <p className="text-white/30 text-[10px]">{member.rdvs} RDV</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-white/10">
        {team.map((member) => (
          <div key={`bar-${member.id}`} className="mb-3 last:mb-0">
            <div className="flex justify-between text-[10px] text-white/40 mb-1">
              <span>{member.nom.split(' ')[0]}</span>
              <span>{member.score}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${member.score}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="h-full rounded-full bg-gradient-to-r from-[#7B1FA2] via-[#007BFF] to-[#40E0D0]"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default TeamPanel;
