export type Role = 'abf' | 'acf' | 'con';

type Stat = [string, string];
type ModuleCard = [string, string, string, string, string];
type FeedAction = [string, string];
type ProjectCard = {
  pic: string;
  ti: string;
  su: string;
  score?: string;
  kv: [string, string][];
  fund: number;
  fp: string;
};

type FeedItem = {
  av: 'abf' | 'acf' | 'con' | 'sys';
  who: string[];
  meta: string;
  txt: string;
  proj?: ProjectCard;
  acts: FeedAction[];
};

type RoleData = {
  color: 'terre' | 'vert' | 'violet';
  dash: [string, string, string, string][];
  profile: {
    av: string;
    nm: string;
    rl: string;
    badge: string;
    badgeCls: string;
    stats: Stat[];
  };
  composer: string;
  tabs: string[];
  menu: [string, string, string][];
  modules: ModuleCard[];
  tip: [string, string, string];
  feed: FeedItem[];
};

export const DATA: Record<Role, RoleData> = {
  abf: {
    color: 'terre',
    dash: [
      ['💰', '68%', 'Mon financement', '102 000 / 150 000 F'],
      ['⭐', 'A·82', 'Mon score', 'Excellent'],
      ['📅', 'Lun.', 'Prochaine échéance', '5 000 F à rembourser']
    ],
    profile: {
      av: '🐟',
      nm: 'Awa Koné',
      rl: 'Commerçante · Marché de Treichville',
      badge: '🐟 Demandeur',
      badgeCls: 'abf',
      stats: [['A·82', 'Score'], ['68%', 'Financé'], ['4 ans', 'Activité']]
    },
    composer: 'Partage une mise à jour de ton activité…',
    tabs: ['Mon fil', 'Mes projets', 'Mon financement'],
    menu: [
      ['📋', 'Mon dossier', ''],
      ['🔄', 'Ma tontine', '2'],
      ['🐷', 'Mon épargne', ''],
      ['🎓', 'Formations', '1'],
      ['💬', 'Messages', '']
    ],
    modules: [
      ['📋', 'c-terre', 'Créer / suivre mon dossier', 'Parler à l\'IA, voir mon business plan', 'abf-dossier'],
      ['🔄', 'c-navy', 'Tontine digitale', 'Groupe « Femmes de Treichville »', 'tontine'],
      ['🐷', 'c-or', 'Mon épargne', '64% de mon objectif congélateur', 'epargne'],
      ['🎓', 'c-violet', 'Formations', 'Leçon 2/3 en cours', 'formation']
    ],
    tip: ['💡', 'Le conseil du jour', 'Plus tu cotises régulièrement à ta tontine, plus ton score s\'améliore — et plus tu accèdes facilement au financement.'],
    feed: [
      {
        av: 'sys',
        who: ['Yédo', 'sys|🔔 Mise à jour'],
        meta: 'Aujourd\'hui',
        txt: 'Bonne nouvelle Awa ! Ton projet vient de passer à <b>68% de financement</b>. Plus que 48 000 FCFA pour l\'atteindre.',
        proj: {
          pic: '🐟',
          ti: 'Vente de poisson — Congélateur',
          su: 'Treichville',
          score: 'A·82',
          kv: [['Montant', '150 000 FCFA'], ['Réuni', '102 000 FCFA']],
          fund: 68,
          fp: '68% financé · 3 contributeurs'
        },
        acts: [['📣', 'Partager'], ['💬', 'Commenter'], ['primary terre|👁️', 'Voir le détail']]
      },
      {
        av: 'con',
        who: ['Cabinet AZur Conseil', 'con|🎓 Consultant', 'cert|✓ a certifié ton dossier'],
        meta: 'Il y a 2 jours',
        txt: 'Nous avons vérifié et certifié ton dossier. Tout est en ordre : activité confirmée, chiffres cohérents, remboursement réaliste. Les financeurs peuvent te faire confiance. 💪',
        acts: [['👍', 'Merci'], ['💬', 'Répondre']]
      },
      {
        av: 'abf',
        who: ['Fatou Diallo', 'abf|🐟 Demandeur'],
        meta: 'Il y a 3 jours',
        txt: 'Grâce à Yédo j\'ai pu financer ma machine à coudre en 2 semaines. Pour celles qui hésitent : parlez juste à l\'assistant, il fait tout le reste. Courage les sœurs ! 🧵',
        acts: [['👍', 'J\'aime · 24'], ['💬', 'Commenter · 6']]
      }
    ]
  },
  acf: {
    color: 'vert',
    dash: [
      ['💼', '1,2M', 'Total investi', 'sur 7 projets'],
      ['✅', '94%', 'Remboursé', 'taux de mon portefeuille'],
      ['📈', '+8,5%', 'Rendement moyen', 'performance globale']
    ],
    profile: {
      av: '🌍',
      nm: 'Mme Aïcha Touré',
      rl: 'Investisseuse · Diaspora (Paris)',
      badge: '🌍 Financeur',
      badgeCls: 'acf',
      stats: [['1,2M', 'Investi'], ['94%', 'Remboursé'], ['7', 'Projets']]
    },
    composer: 'Partagez une réflexion sur l\'investissement à impact…',
    tabs: ['Projets à financer', 'Mon portefeuille', 'Cagnottes'],
    menu: [
      ['🔍', 'Découvrir des projets', ''],
      ['📊', 'Mon portefeuille', ''],
      ['🤝', 'Cagnottes solidaires', '3'],
      ['📈', 'Mes remboursements', ''],
      ['💬', 'Messages', '']
    ],
    modules: [
      ['🔍', 'c-vert', 'Découvrir des projets', '12 projets certifiés disponibles', 'acf-projets'],
      ['📊', 'c-navy', 'Mon portefeuille', '1,2M investi · 94% remboursé', 'acf-portef'],
      ['🤝', 'c-terre', 'Cagnottes solidaires', '3 projets proches du but', 'crowd'],
      ['📈', 'c-or', 'Mes remboursements', 'Suivi en temps réel', 'acf-remb']
    ],
    tip: ['🛡️', 'La confiance d\'abord', 'Chaque projet visible ici a été certifié par un cabinet partenaire. Les fonds transitent par un établissement agréé — Yédo ne détient jamais votre argent.'],
    feed: [
      {
        av: 'abf',
        who: ['Awa Koné', 'abf|🐟 Demandeur', 'cert|✓ Certifié A·82'],
        meta: 'Recommandé pour vous',
        txt: 'Commerçante depuis 4 ans, je cherche 150 000 FCFA pour un congélateur qui réduira mes pertes de poisson. Je rembourse 5 000 FCFA par semaine.',
        proj: {
          pic: '🐟',
          ti: 'Vente de poisson — Congélateur',
          su: 'Treichville · 6 ans d\'expérience',
          score: 'A·82',
          kv: [['Montant', '150 000 FCFA'], ['Rendement estimé', '+9%'], ['Reste à financer', '48 000 FCFA']],
          fund: 68,
          fp: '68% financé · soyez le prochain contributeur'
        },
        acts: [['🔖', 'Sauvegarder'], ['💬', 'Question'], ['primary|💚', 'Financer ce projet']]
      },
      {
        av: 'abf',
        who: ['Coopérative Fanta', 'abf|🐟 Demandeur', 'cert|✓ Certifié A·88'],
        meta: 'Presque financé !',
        txt: 'Coopérative de 12 femmes pour transformer la tomate à Bouaké. Nous visons les marchés locaux toute l\'année.',
        proj: {
          pic: '🍅',
          ti: 'Transformation de tomate',
          su: 'Bouaké · coopérative',
          score: 'A·88',
          kv: [['Montant', '800 000 FCFA'], ['Rendement estimé', '+11%']],
          fund: 91,
          fp: '91% financé · plus que 72 000 FCFA'
        },
        acts: [['🔖', 'Sauvegarder'], ['💬', 'Question'], ['primary|💚', 'Financer ce projet']]
      },
      {
        av: 'sys',
        who: ['Yédo', 'sys|📈 Portefeuille'],
        meta: 'Cette semaine',
        txt: 'Vos remboursements se portent bien : <b>3 échéances reçues</b> cette semaine, dont celle de la couturière de Yopougon. Taux de remboursement de votre portefeuille : <b>94%</b>.',
        acts: [['👍', 'J\'aime'], ['📊', 'Voir le détail']]
      }
    ]
  },
  con: {
    color: 'violet',
    dash: [
      ['🔍', '2', 'À certifier', 'dossiers en attente'],
      ['✓', '142', 'Certifiés', 'total signé'],
      ['⚠️', '1', 'Alerte risque', 'projet à surveiller']
    ],
    profile: {
      av: '🎓',
      nm: 'Cabinet AZur Conseil',
      rl: 'Cabinet partenaire certificateur',
      badge: '🎓 Consultant',
      badgeCls: 'con',
      stats: [['142', 'Certifiés'], ['4,7★', 'Note'], ['96%', 'Fiabilité']]
    },
    composer: 'Partagez une bonne pratique avec votre réseau…',
    tabs: ['Dossiers à certifier', 'Mes certifications', 'Suivi des projets'],
    menu: [
      ['🔍', 'Dossiers à vérifier', '2'],
      ['✓', 'Mes certifications', ''],
      ['🌱', 'Accompagnement', ''],
      ['📈', 'Suivi des projets', ''],
      ['💬', 'Messages', '']
    ],
    modules: [
      ['🔍', 'c-violet', 'Dossiers à certifier', '2 nouveaux dossiers IA en attente', 'con-verif'],
      ['✓', 'c-vert', 'Mes certifications', '142 dossiers certifiés', 'con-cert'],
      ['🌱', 'c-terre', 'Accompagnement', 'Création société & coaching', 'con-accomp'],
      ['📈', 'c-navy', 'Suivi des projets', 'Détection de risque IA', 'con-suivi']
    ],
    tip: ['👤', 'Votre valeur', 'L\'IA fait 80% du travail de mise en forme. Votre jugement humain sur les 20% restants — l\'activité est-elle réelle ? — est ce qui crée la confiance des financeurs.'],
    feed: [
      {
        av: 'sys',
        who: ['Yédo', 'sys|🔔 Nouveau dossier'],
        meta: 'Il y a 1 heure',
        txt: 'Un nouveau dossier généré par l\'IA attend votre vérification. Pré-score automatique : <b>A·82</b>.',
        proj: {
          pic: '🐟',
          ti: 'Awa Koné — Vente de poisson',
          su: 'Généré par l\'IA · à vérifier',
          score: 'A·82',
          kv: [['Cohérence chiffres', '✓ OK'], ['Réalité activité', 'À confirmer'], ['Remboursement', 'Plausible']],
          fund: 0,
          fp: 'En attente de votre certification'
        },
        acts: [['👁️', 'Examiner'], ['primary violet|✓', 'Certifier & signer']]
      },
      {
        av: 'con',
        who: ['Vous', 'con|🎓 Consultant'],
        meta: 'Il y a 4 heures',
        txt: 'Dossier de la Coopérative Fanta certifié et signé électroniquement. Score confirmé A·88. Publié sur la place de marché.',
        acts: [['👍', 'J\'aime · 8'], ['💬', 'Commenter']]
      },
      {
        av: 'sys',
        who: ['Yédo', 'sys|⚠️ Alerte suivi'],
        meta: 'Hier',
        txt: 'L\'IA a détecté un retard de remboursement sur un projet que vous suivez (atelier couture). Un accompagnement préventif est recommandé avant que la situation ne s\'aggrave.',
        acts: [['📞', 'Contacter'], ['🌱', 'Proposer un coaching']]
      }
    ]
  }
};

export const SHEETS = {
  tontine: {
    ic: '🔄',
    ti: 'Tontine digitale',
    btn: 'vert',
    btnTxt: '💵 Cotiser mon tour (15 000 F)',
    body: `<div class="mbadge"><div class="ch">👛 Groupe « Femmes de Treichville »</div><div class="kv"><span class="k">Cagnotte du tour</span><span class="v">120 000 FCFA</span></div><div class="kv"><span class="k">Bénéficiaire ce mois</span><span class="v" style="color:var(--terre)">Awa K. 🎉</span></div><div class="kv"><span class="k">Ma cotisation</span><span class="v" style="color:var(--vert)">✓ Payée</span></div><div class="kv"><span class="k">Score de confiance</span><span class="v" style="color:var(--vert)">Excellent</span></div></div><div class="mwhy">💡 La tontine que vous connaissez, en plus sûr : chaque cotisation est tracée et nourrit votre score de financement.</div>`
  },
  epargne: {
    ic: '🐷',
    ti: 'Mon épargne',
    btn: '',
    btnTxt: '💰 Épargner 3 000 F',
    body: `<div class="mbadge"><div class="ch">🎯 Objectif : congélateur</div><div class="kv"><span class="k">Déjà épargné</span><span class="v">48 000 / 75 000 FCFA</span></div><div class="kv"><span class="k">Versement</span><span class="v">3 000 FCFA / semaine</span></div><div class="kv"><span class="k">Objectif atteint dans</span><span class="v">≈ 9 semaines</span></div></div><div class="mwhy">💡 Épargner réduit le montant à emprunter et rassure les financeurs : c'est prouver qu'on sait gérer.</div>`
  },
  formation: {
    ic: '🎓',
    ti: 'Formations',
    btn: 'violet',
    btnTxt: '▶️ Écouter la leçon 2',
    body: `<div class="mbadge"><div class="ch">▶️ Bien gérer l'argent de mon activité</div><div class="kv"><span class="k">Format</span><span class="v">Audio · en dioula</span></div><div class="kv"><span class="k">Progression</span><span class="v" style="color:var(--vert)">Leçon 2 / 3</span></div></div><div class="mwhy">💡 Tout est en audio et en langue locale, pensé pour qui ne lit pas. Mieux gérer son activité, c'est mieux rembourser.</div>`
  },
  crowd: {
    ic: '🤝',
    ti: 'Cagnotte solidaire',
    btn: 'vert',
    btnTxt: '🤝 Contribuer',
    body: `<div class="mbadge"><div class="ch">🤝 Projet d'Awa — financé à plusieurs</div><div class="kv"><span class="k">🌍 Mme Touré (diaspora)</span><span class="v">50 000 F</span></div><div class="kv"><span class="k">🏦 Microfinance AZur</span><span class="v">40 000 F</span></div><div class="kv"><span class="k">👤 Koffi A. (particulier)</span><span class="v">12 000 F</span></div><div class="kv"><span class="k">Reste à financer</span><span class="v" style="color:var(--terre)">48 000 F</span></div></div><div class="mwhy">⚖️ Chacun met ce qu'il peut, même 5 000 F. Les fonds transitent par le partenaire agréé.</div>`
  },
  'abf-dossier': {
    ic: '📋',
    ti: 'Mon dossier',
    btn: '',
    btnTxt: '🎤 Parler à l\'assistant',
    body: `<div class="mbadge"><div class="ch">🐟 Vente de poisson — Treichville</div><div class="kv"><span class="k">Statut</span><span class="v" style="color:var(--vert)">✓ Certifié & publié</span></div><div class="kv"><span class="k">Montant</span><span class="v">150 000 FCFA</span></div><div class="kv"><span class="k">Score</span><span class="v" style="color:var(--vert)">A · 82</span></div></div><div class="mwhy">💡 Tu as créé ce dossier juste en parlant à l'assistant, dans ta langue. Tu peux le mettre à jour à tout moment.</div>`
  },
  'acf-projets': {
    ic: '🔍',
    ti: 'Découvrir des projets',
    btn: 'vert',
    btnTxt: 'Voir tous les projets',
    body: `<p>12 projets certifiés correspondent à vos critères (commerce, faible risque, Côte d'Ivoire).</p><div class="mbadge"><div class="ch">🐟 Awa K. — Score A·82</div><div class="kv"><span class="k">Montant</span><span class="v">150 000 FCFA</span></div><div class="kv"><span class="k">Financé</span><span class="v">68%</span></div></div><div class="mbadge"><div class="ch">🍅 Coopérative Fanta — Score A·88</div><div class="kv"><span class="k">Montant</span><span class="v">800 000 FCFA</span></div><div class="kv"><span class="k">Financé</span><span class="v">91%</span></div></div>`
  },
  'acf-portef': {
    ic: '📊',
    ti: 'Mon portefeuille',
    btn: 'vert',
    btnTxt: 'Voir le détail',
    body: `<div class="mbadge"><div class="ch">📊 Performance globale</div><div class="kv"><span class="k">Total investi</span><span class="v">1 200 000 FCFA</span></div><div class="kv"><span class="k">Taux de remboursement</span><span class="v" style="color:var(--vert)">94%</span></div><div class="kv"><span class="k">Projets actifs</span><span class="v">7</span></div><div class="kv"><span class="k">Rendement moyen</span><span class="v" style="color:var(--vert)">+8,5%</span></div></div><div class="mwhy">🛡️ Diversifier sur plusieurs petits projets répartit le risque. La certification réduit le taux de défaut.</div>`
  },
  'acf-remb': {
    ic: '📈',
    ti: 'Mes remboursements',
    btn: 'vert',
    btnTxt: 'Tout voir',
    body: `<div class="mbadge"><div class="ch">📈 Cette semaine</div><div class="kv"><span class="k">Couturière (Yopougon)</span><span class="v" style="color:var(--vert)">✓ 18 000 F</span></div><div class="kv"><span class="k">Maraîcher (Daloa)</span><span class="v" style="color:var(--vert)">✓ 25 000 F</span></div><div class="kv"><span class="k">Épicier (Abobo)</span><span class="v" style="color:var(--vert)">✓ 12 000 F</span></div></div><div class="mwhy">💡 La transparence du suivi en temps réel est ce qui fidélise les financeurs et en attire de nouveaux.</div>`
  },
  'con-verif': {
    ic: '🔍',
    ti: 'Dossiers à certifier',
    btn: 'violet',
    btnTxt: '✓ Certifier & signer',
    body: `<div class="mbadge"><div class="ch">🔍 Dossier d'Awa — contrôle</div><div class="kv"><span class="k">Cohérence des chiffres</span><span class="v" style="color:var(--vert)">✓ OK</span></div><div class="kv"><span class="k">Réalité de l'activité</span><span class="v" style="color:var(--vert)">✓ Confirmée</span></div><div class="kv"><span class="k">Plausibilité remboursement</span><span class="v" style="color:var(--vert)">✓ Solide</span></div></div><div class="mwhy">👤 L'IA a fait 80% du travail. Vous jugez ce que seul un humain peut juger : l'activité est-elle réelle ?</div>`
  },
  'con-cert': {
    ic: '✓',
    ti: 'Mes certifications',
    btn: 'violet',
    btnTxt: 'Voir l\'historique',
    body: `<div class="mbadge"><div class="ch">✓ Bilan</div><div class="kv"><span class="k">Dossiers certifiés</span><span class="v">142</span></div><div class="kv"><span class="k">Note moyenne reçue</span><span class="v" style="color:var(--vert)">4,7 ★</span></div><div class="kv"><span class="k">Taux de fiabilité</span><span class="v" style="color:var(--vert)">96%</span></div></div><div class="mwhy">💡 Votre fiabilité est votre actif : c'est elle qui fait que les financeurs croient vos certifications.</div>`
  },
  'con-accomp': {
    ic: '🌱',
    ti: 'Accompagnement',
    btn: 'violet',
    btnTxt: 'Démarrer un accompagnement',
    body: `<p>Quand un projet est financé, vous accompagnez sa concrétisation.</p><div class="mbadge"><div class="ch">🌱 Services proposés</div><div class="kv"><span class="k">Création société (OHADA)</span><span class="v">✓</span></div><div class="kv"><span class="k">Compte & formalités</span><span class="v">✓</span></div><div class="kv"><span class="k">Coaching de gestion</span><span class="v">✓</span></div></div><div class="mwhy">🌱 L'accompagnement augmente la survie des projets, donc le remboursement, donc la confiance de tout l'écosystème.</div>`
  },
  'con-suivi': {
    ic: '📈',
    ti: 'Suivi des projets',
    btn: 'violet',
    btnTxt: 'Voir les alertes',
    body: `<div class="mbadge"><div class="ch">📈 Projets suivis</div><div class="kv"><span class="k">En bonne santé</span><span class="v" style="color:var(--vert)">38</span></div><div class="kv"><span class="k">À surveiller</span><span class="v" style="color:var(--or)">3</span></div><div class="kv"><span class="k">Alerte IA active</span><span class="v" style="color:var(--terre)">1</span></div></div><div class="mwhy">⚠️ L'IA détecte les retards tôt pour permettre un accompagnement préventif plutôt qu'une sanction.</div>`
  }
} as const;
