'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Articles from './Articles';

type BookLink = { labelKey?: string; label?: string; href: string };

type Book = {
  id: number;
  title: string;
  subtitle: string;
  altTitle?: string;
  editorsLabel: 'editors' | 'coordination';
  editors?: string;
  publisher: string;
  date?: string;
  pages?: string;
  isbn?: string;
  legalDeposit?: string;
  note?: 'dynamiques';
  contributors?: string[];
  links?: BookLink[];
  image: string;
  tags: string[];
  color: string;
};

const books: Book[] = [
  {
    id: 1,
    title: "Repräsentation und Erinnerung der Migration",
    subtitle: "Représentation et mémoire de la migration",
    editorsLabel: 'editors',
    editors: "Dirk Rupnow, Gwénola Sebaux, Bettina Severin-Barboutie, Meryem Youssoufi, Zaihia Zeroulou (Hg./éd.)",
    publisher: "innsbruck university press",
    date: "2021",
    pages: "288",
    isbn: "978-3-99106-029-1",
    links: [
      { labelKey: 'publisher', href: "https://www.uibk.ac.at/iup/buecher/9783991060291.html" }
    ],
    image: "/images/book2.jpg",
    tags: ["Migration", "Memory", "Representation"],
    color: "from-green-900 to-black"
  },
  {
    id: 2,
    title: "FRONTIÈRES DE LA CITOYENNETÉ",
    subtitle: "ENJEUX DE L’ACCUEIL DES PRIMO-ARRIVANTS",
    editorsLabel: 'editors',
    editors: "Gwénola Sebaux et Meryem Youssoufi (dir.)",
    publisher: "Faculté des Lettres et des Sciences Humaines, Université Ibn Zohr, Agadir",
    date: "Octobre 2021",
    isbn: "978-9920-615-14-3",
    links: [
      {
        label: "ResearchGate",
        href: "https://www.researchgate.net/publication/363885805_Frontieres_de_la_citoyennete_-_Enjeux_de_l'accueil_des_primo-arrivants_ed_FLSH_Agadir_2021"
      }
    ],
    image: "/images/book1.jpg",
    tags: ["Migration", "Social Exclusion", "Multiculturalism", "Citizenship"],
    color: "from-red-900 to-black"
  },
  {
    id: 3,
    title: "Recherches sur l'histoire du Maroc",
    subtitle: "État des lieux et perspectives",
    editorsLabel: 'editors',
    publisher: "Institut Royal des études sur le Maroc, Graphely, Imprimerie Direct Print",
    date: "2025",
    isbn: "978-9920-778-16-9",
    links: [
      {
        labelKey: 'press',
        href: "https://magactuevents.com/parution-du-livre-recherches-sur-lhistoire-du-maroc-etat-des-lieux-et-perspectives/"
      },
      {
        labelKey: 'press',
        href: "https://fr.hespress.com/453472-parution-du-livre-recherches-sur-lhistoire-du-maroc-etat-des-lieux-et-perspectives.html"
      }
    ],
    image: "/images/RECHERCHES SUR L'HISTOIRE DU MAROC.jpg",
    tags: ["History", "Morocco", "Research"],
    color: "from-blue-900 to-black"
  },
  {
    id: 4,
    title: "Migration, exil, diasporas au prisme de la rupture",
    subtitle: "",
    editorsLabel: 'editors',
    editors: "Katell Brestic, Gwénola Sebaux, Sheena Trimble (dir.)",
    publisher: "Presses universitaires de Rennes, collection « Essais »",
    date: "2026",
    isbn: "979-10-413-0349-6",
    links: [
      {
        labelKey: 'publisher',
        href: "https://www.pur-editions.fr/product/11540/migration-exil-diasporas-au-prisme-de-la-rupture"
      }
    ],
    image: "/images/migration-exil-diasporas.jpg",
    tags: ["Migration", "Exile", "Diaspora"],
    color: "from-purple-900 to-black"
  },
  {
    id: 5,
    title: "Les dynamiques sociospatiales au Maroc",
    subtitle: "Contraintes de gestion et enjeux de développement",
    altTitle: "الديناميات السوسيومجالية بالمغرب: إكراهات التدبير ورهانات التنمية",
    editorsLabel: 'coordination',
    editors: "Mohamed LASRI & Meryem YOUSSOUFI (préface et coordination)",
    publisher: "Publications de la FLSH – Agadir (Laboratoire GRD-ESO)",
    date: "2026",
    pages: "226",
    isbn: "978-9920-472-09-8",
    legalDeposit: "2026M01257",
    note: 'dynamiques',
    contributors: [
      "Mohammed Ali LAHLOU",
      "Imane BENTAHILA",
      "مولاي محمد أيت بلا أسلمان",
      "الحسن أندجار",
      "لحسن الابراهيمي",
      "عبد اللطيف شهايب",
      "بوبكر الهاروش",
      "عالي الفالي",
      "حسن بايش",
      "حسناء لحكيم",
      "جلال خبي"
    ],
    image: "/images/dynamiques-sociospatiales-maroc.jpg",
    tags: ["Sociospatial Dynamics", "Morocco", "Development", "Migration"],
    color: "from-emerald-900 to-black"
  }
];

type Project = {
  id: string;
  emoji: string;
  nameKey: string;
  titleKey: string;
  descKey: string;
  badges: { label: string; href: string }[];
  links: BookLink[];
};

const projects: Project[] = [
  {
    id: 'citer',
    emoji: '🌍',
    nameKey: 'citer_project_name',
    titleKey: 'citer_full_title',
    descKey: 'citer_description',
    badges: [{ label: '🏛️ University Ibn Zohr', href: 'https://www.uiz.ac.ma/' }, { label: '🇫🇷 UCO France', href: 'https://www.uco.fr/' }],
    links: [
      { labelKey: 'uco_program', href: 'https://recherche.uco.fr/fr/programmes/citer-leurope-et-les-frontieres-la-citoyennete' },
      { labelKey: 'citer_sheet', href: 'https://3lam.univ-lemans.fr/fr/projets-de-recherche-1/archives/citer.html' },
      { labelKey: 'citer_blog', href: 'https://citer.hypotheses.org/' },
      { labelKey: 'citer_report', href: 'https://alliance-europa.eu/fr/post/frontieres-de-la-citoyennete-enjeux-de-laccueil-des-primo-arrivants-compte-rendu-du-colloque/' }
    ]
  },
  {
    id: 'mobil',
    emoji: '🧭',
    nameKey: 'mobil_project_name',
    titleKey: 'mobil_full_title',
    descKey: 'mobil_description',
    badges: [{ label: '🇫🇷 UCO France', href: 'https://www.uco.fr/' }, { label: '🏛️ University Ibn Zohr', href: 'https://www.uiz.ac.ma/' }],
    links: [
      { labelKey: 'uco_program', href: 'https://recherche.uco.fr/fr/programmes/mobil-mobilites-migrations-mobilisations' },
      { labelKey: 'mobil_study_day_uco', href: 'https://recherche.uco.fr/fr/actualite/migrations-mobilisations-et-ethiques' },
      { labelKey: 'mobil_study_day_calenda', href: 'https://calenda.org/1150642' }
    ]
  }
];

export default function Research() {
  const t = useTranslations('Research');
  const isLastOdd = (index: number) => books.length % 2 === 1 && index === books.length - 1;

  return (
    <section id="research" className="py-20 bg-offwhite-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">{t('title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t('subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group ${isLastOdd(index) ? 'md:col-span-2' : ''}`}
            >
              <div className={`h-2 bg-gradient-to-r ${book.color}`} />
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Book Cover Placeholder */}
                  <div className={`w-full flex-shrink-0 relative h-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden shadow-md ${isLastOdd(index) ? 'md:w-1/4 md:h-[34rem]' : 'md:w-1/3'}`}>
                    <Image
                       src={book.image}
                       alt={book.title}
                       fill
                       className="object-cover"
                    />
                  </div>
                  
                  <div className="flex-grow flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                      {book.title}
                    </h3>
                    {book.subtitle && (
                      <h4 className="text-md font-medium text-gray-700 mb-4 italic">
                        {book.subtitle}
                      </h4>
                    )}
                    {book.altTitle && (
                      <p dir="rtl" lang="ar" className="text-md font-medium text-gray-700 mb-4">
                        {book.altTitle}
                      </p>
                    )}

                    <div className={isLastOdd(index) ? 'md:grid md:grid-cols-2 md:gap-10' : ''}>
                      <div>
                        <div className="text-sm text-gray-600 space-y-2 mb-6">
                          {book.editors && <p><span className="font-semibold">{t(`labels.${book.editorsLabel}`)}:</span> <bdi>{book.editors}</bdi></p>}
                          <p><span className="font-semibold">{t('labels.publisher')}:</span> <bdi>{book.publisher}</bdi></p>
                          {book.date && <p><span className="font-semibold">{t('labels.date')}:</span> <bdi>{book.id === 5 ? t('dynamiques_edition') : book.date}</bdi></p>}
                          {book.pages && <p><span className="font-semibold">{t('labels.pages')}:</span> <bdi>{book.pages}</bdi></p>}
                          {book.isbn && <p><span className="font-semibold">{t('labels.isbn')}:</span> <bdi>{book.isbn}</bdi></p>}
                          {book.legalDeposit && <p><span className="font-semibold">{t('labels.legal_deposit')}:</span> <bdi>{book.legalDeposit}</bdi></p>}
                          {book.note && !isLastOdd(index) && <p className="pt-1 leading-relaxed">{t('dynamiques_note')}</p>}
                        </div>

                        {book.links && (
                          <div className="flex flex-wrap gap-2 mb-6">
                            {book.links.map((link) => (
                              <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-3 py-1.5 text-xs rounded-md border border-gray-300 text-navy-800 hover:border-navy-300 hover:bg-gray-50 transition-colors font-medium"
                              >
                                {link.labelKey ? t(`links.${link.labelKey}`) : link.label} ↗
                              </a>
                            ))}
                          </div>
                        )}
                      </div>

                      {(book.contributors || (book.note && isLastOdd(index))) && (
                        <div className="text-sm text-gray-600">
                          {book.note && isLastOdd(index) && <p className="mb-5 leading-relaxed">{t('dynamiques_note')}</p>}
                          {book.contributors && (
                            <details className="mb-6" open={isLastOdd(index)}>
                              <summary className="cursor-pointer font-semibold text-navy-900">
                                {t('labels.contributors')} ({book.contributors.length})
                              </summary>
                              <ul className="mt-2 grid sm:grid-cols-2 gap-x-4 gap-y-1">
                                {book.contributors.map((name) => (
                                  <li key={name} dir="auto">{name}</li>
                                ))}
                              </ul>
                            </details>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {book.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-navy-50 text-navy-800 text-xs rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Chapters and articles */}
        <Articles />

        {/* International Collaboration Section */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.4 }}
           className="mt-20 border-t border-gray-200 pt-16"
        >
            <div className="text-center mb-12">
               <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-3">{t('collab_title')}</h3>
               <div className="w-16 h-1 bg-gold-500 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                  <div className="grid md:grid-cols-12">
                    <div className="md:col-span-4 bg-navy-50 p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-100">
                      <div className="text-center">
                        <span className="block text-5xl mb-4">{project.emoji}</span>
                        <h4 className="text-xl font-bold text-navy-900">{t(project.nameKey)}</h4>
                      </div>
                    </div>
                    <div className="md:col-span-8 p-8 md:p-10 flex flex-col justify-center">
                      <h4 className="text-xl font-bold text-navy-900 mb-4">{t(project.titleKey)}</h4>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {t(project.descKey)}
                      </p>
                      <div className="flex flex-wrap gap-4 mb-5">
                        {project.badges.map((badge) => (
                          <a
                            key={badge.href}
                            href={badge.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-offwhite-50 text-navy-800 rounded-lg text-sm font-medium border border-gray-200 hover:border-navy-300 hover:bg-white transition-colors"
                          >
                            {badge.label} ↗
                          </a>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-1.5 text-xs rounded-md border border-gray-300 text-navy-800 hover:border-navy-300 hover:bg-gray-50 transition-colors font-medium"
                          >
                            {t(`links.${link.labelKey}`)} ↗
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </motion.div>
      </div>
    </section>
  );
}
