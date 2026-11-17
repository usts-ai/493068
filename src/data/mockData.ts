export const stats = [
  {
    id: 1,
    label: 'Rendez-vous du jour',
    value: 28,
    delta: '+12%',
    positive: true,
    color: '#007BFF',
  },
  {
    id: 2,
    label: 'Taux de confirmation',
    value: '94%',
    delta: '+3.2%',
    positive: true,
    color: '#40E0D0',
  },
  {
    id: 3,
    label: 'Clients actifs',
    value: 1248,
    delta: '+86',
    positive: true,
    color: '#7B1FA2',
  },
  {
    id: 4,
    label: 'Rappels envoyés',
    value: 156,
    delta: '-4%',
    positive: false,
    color: '#00C9FF',
  },
];

export const performanceData = [
  { mois: 'Jan', rendezVous: 320, confirmes: 290, annules: 30 },
  { mois: 'Fév', rendezVous: 380, confirmes: 350, annules: 28 },
  { mois: 'Mar', rendezVous: 420, confirmes: 395, annules: 25 },
  { mois: 'Avr', rendezVous: 460, confirmes: 430, annules: 22 },
  { mois: 'Mai', rendezVous: 510, confirmes: 485, annules: 20 },
  { mois: 'Juin', rendezVous: 580, confirmes: 550, annules: 18 },
  { mois: 'Juil', rendezVous: 620, confirmes: 590, annules: 24 },
];

export const weeklyLoad = [
  { jour: 'Lun', charge: 72 },
  { jour: 'Mar', charge: 85 },
  { jour: 'Mer', charge: 68 },
  { jour: 'Jeu', charge: 91 },
  { jour: 'Ven', charge: 78 },
  { jour: 'Sam', charge: 45 },
  { jour: 'Dim', charge: 22 },
];

export const appointments = [
  {
    id: 1,
    client: 'Camille Dupont',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&q=80',
    service: 'Consultation stratégique',
    heure: '09:00',
    duree: '45 min',
    statut: 'confirmé',
  },
  {
    id: 2,
    client: 'Marc Lefèvre',
    avatar:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&h=120&fit=crop&q=80',
    service: 'Bilan de performance',
    heure: '10:30',
    duree: '60 min',
    statut: 'en attente',
  },
  {
    id: 3,
    client: 'Sophie Martin',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&q=80',
    service: 'Suivi personnalisé',
    heure: '14:00',
    duree: '30 min',
    statut: 'confirmé',
  },
  {
    id: 4,
    client: 'Julien Bernard',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&q=80',
    service: 'Planification trimestrielle',
    heure: '15:30',
    duree: '90 min',
    statut: 'rappel envoyé',
  },
  {
    id: 5,
    client: 'Emma Rousseau',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&q=80',
    service: 'Audit organisationnel',
    heure: '17:00',
    duree: '60 min',
    statut: 'confirmé',
  },
];

export const team = [
  {
    id: 1,
    nom: 'Léa Moreau',
    role: 'Conseillère senior',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&q=80',
    rdvs: 42,
    score: 98,
  },
  {
    id: 2,
    nom: 'Thomas Petit',
    role: 'Gestionnaire planning',
    avatar:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&h=120&fit=crop&q=80',
    rdvs: 38,
    score: 95,
  },
  {
    id: 3,
    nom: 'Nadia Benali',
    role: 'Responsable clients',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&q=80',
    rdvs: 35,
    score: 92,
  },
];

export const navItems = [
  { id: 'overview', label: 'Vue globale' },
  { id: 'agenda', label: 'Agenda' },
  { id: 'rapports', label: 'Rapports' },
  { id: 'equipe', label: 'Équipe' },
  { id: 'parametres', label: 'Paramètres' },
];

export const calendarDays = [
  { day: 10, rdvs: 3 },
  { day: 11, rdvs: 5 },
  { day: 12, rdvs: 2 },
  { day: 13, rdvs: 7 },
  { day: 14, rdvs: 4 },
  { day: 15, rdvs: 6 },
  { day: 16, rdvs: 1 },
];

export const heroImage =
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=700&fit=crop&q=80';

export const workspaceImage =
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&h=600&fit=crop&q=80';

export const planningImage =
  'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1000&h=600&fit=crop&q=80';
