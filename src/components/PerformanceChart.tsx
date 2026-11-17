import React from 'react';
import { motion } from 'framer-motion';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';
import { performanceData, weeklyLoad } from '../data/mockData';

const tooltipStyle = {
  backgroundColor: '#0f1f36',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 12,
  color: '#fff',
  fontSize: 12,
};

const PerformanceChart: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-3 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-4 sm:p-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <h3 className="font-[Syne] text-lg sm:text-xl font-bold text-white">
              Performance mensuelle
            </h3>
            <p className="text-white/40 text-xs sm:text-sm mt-1">
              Rendez-vous confirmés vs planifiés
            </p>
          </div>
          <div className="flex gap-3 text-xs">
            <span className="flex items-center gap-1.5 text-white/60">
              <span className="w-2.5 h-2.5 rounded-full bg-[#007BFF]" /> Planifiés
            </span>
            <span className="flex items-center gap-1.5 text-white/60">
              <span className="w-2.5 h-2.5 rounded-full bg-[#40E0D0]" /> Confirmés
            </span>
          </div>
        </div>
        <div className="h-56 sm:h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={performanceData}>
              <defs>
                <linearGradient id="gradBlue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#007BFF" stopOpacity={0.45} />
                  <stop offset="100%" stopColor="#007BFF" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gradCyan" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#40E0D0" stopOpacity={0.45} />
                  <stop offset="100%" stopColor="#40E0D0" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis
                dataKey="mois"
                stroke="rgba(255,255,255,0.3)"
                tick={{ fill: 'rgba(255,255,255,0.45)', fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                stroke="rgba(255,255,255,0.3)"
                tick={{ fill: 'rgba(255,255,255,0.45)', fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip contentStyle={tooltipStyle} />
              <Area
                type="monotone"
                dataKey="rendezVous"
                stroke="#007BFF"
                strokeWidth={2.5}
                fill="url(#gradBlue)"
                name="Planifiés"
              />
              <Area
                type="monotone"
                dataKey="confirmes"
                stroke="#40E0D0"
                strokeWidth={2.5}
                fill="url(#gradCyan)"
                name="Confirmés"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-4 sm:p-6"
      >
        <h3 className="font-[Syne] text-lg sm:text-xl font-bold text-white mb-1">
          Charge hebdomadaire
        </h3>
        <p className="text-white/40 text-xs sm:text-sm mb-6">
          Taux d&apos;occupation par jour
        </p>
        <div className="h-56 sm:h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyLoad}>
              <defs>
                <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7B1FA2" />
                  <stop offset="100%" stopColor="#007BFF" />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
              <XAxis
                dataKey="jour"
                tick={{ fill: 'rgba(255,255,255,0.45)', fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: 'rgba(255,255,255,0.45)', fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                unit="%"
              />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar
                dataKey="charge"
                fill="url(#barGrad)"
                radius={[8, 8, 4, 4]}
                name="Charge"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
};

export default PerformanceChart;
