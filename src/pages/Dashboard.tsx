import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import StatCard from '../components/StatCard';
import PerformanceChart from '../components/PerformanceChart';
import AppointmentList from '../components/AppointmentList';
import MiniCalendar from '../components/MiniCalendar';
import TeamPanel from '../components/TeamPanel';
import { stats, planningImage, navItems } from '../data/mockData';

const Dashboard: React.FC = () => {
  const [active, setActive] = useState('overview');
  const overviewRef = useRef<HTMLDivElement>(null);
  const agendaRef = useRef<HTMLDivElement>(null);
  const rapportsRef = useRef<HTMLDivElement>(null);
  const equipeRef = useRef<HTMLDivElement>(null);

  const sectionRefs: Record<string, React.RefObject<HTMLDivElement | null>> = {
    overview: overviewRef,
    agenda: agendaRef,
    rapports: rapportsRef,
    equipe: equipeRef,
  };

  const navigate = (id: string) => {
    setActive(id);
    const ref = sectionRefs[id];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#060d1a] text-white overflow-x-hidden">
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <Header activeSection={active} onNavigate={navigate} />

      <main className="relative">
        <div ref={overviewRef}>
          <HeroBanner />

          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 sm:mt-0">
            <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide mb-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  type="button"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => navigate(item.id)}
                  className={`shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    active === item.id
                      ? 'bg-gradient-to-r from-[#007BFF] to-[#40E0D0] text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-white/5 text-white/50 border border-white/10 hover:text-white'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key="stats"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5"
              >
                {stats.map((s, i) => (
                  <StatCard
                    key={s.id}
                    label={s.label}
                    value={s.value}
                    delta={s.delta}
                    positive={s.positive}
                    color={s.color}
                    index={i}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </section>
        </div>

        <section
          ref={rapportsRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14 scroll-mt-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h2 className="font-[Syne] text-2xl sm:text-3xl font-bold text-white">
              Suivi & reporting
            </h2>
            <p className="text-white/45 text-sm mt-1">
              Optimisez votre activité grâce aux indicateurs en temps réel
            </p>
          </motion.div>
          <PerformanceChart />
        </section>

        <section
          ref={agendaRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14 scroll-mt-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h2 className="font-[Syne] text-2xl sm:text-3xl font-bold text-white">
              Planification intelligente
            </h2>
            <p className="text-white/45 text-sm mt-1">
              Gérez vos rendez-vous et rappels automatiques
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="lg:col-span-2">
              <AppointmentList />
            </div>
            <MiniCalendar />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 relative rounded-2xl overflow-hidden border border-white/10 aspect-[21/9] sm:aspect-[3/1]"
          >
            <img
              src={planningImage}
              alt="Organisation et planification"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/50 to-transparent flex items-center">
              <div className="px-6 sm:px-10 max-w-lg">
                <h3 className="font-[Syne] text-xl sm:text-2xl font-bold text-white">
                  Rappels automatiques
                </h3>
                <p className="text-white/60 text-xs sm:text-sm mt-2 leading-relaxed">
                  E-mails et SMS synchronisés avec Google Calendar et Outlook pour
                  ne jamais manquer un rendez-vous.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <section
          ref={equipeRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14 mb-8 scroll-mt-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="lg:col-span-1">
              <TeamPanel />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 rounded-2xl border border-white/10 bg-gradient-to-br from-[#007BFF]/20 via-[#7B1FA2]/15 to-[#40E0D0]/10 p-6 sm:p-10 flex flex-col justify-center"
            >
              <h2 className="font-[Syne] text-2xl sm:text-3xl font-bold text-white">
                Personnalisation avancée
              </h2>
              <p className="text-white/55 text-sm sm:text-base mt-3 max-w-md leading-relaxed">
                Configurez vos tableaux de bord, permissions et workflows selon
                les besoins exacts de votre activité professionnelle.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {['Tableaux sur mesure', 'Multi-langues', 'Zapier & Stripe'].map(
                  (tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold border border-white/15 bg-white/5 text-white/80"
                    >
                      {tag}
                    </motion.span>
                  )
                )}
              </div>
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(64,224,208,0.35)' }}
                whileTap={{ scale: 0.97 }}
                type="button"
                className="mt-8 self-start px-6 py-3 rounded-full text-sm font-bold text-[#0a1628] bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]"
              >
                Configurer mon espace
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
