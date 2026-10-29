'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

type Entry = {
  role: 'preface' | 'introduction' | 'chapter';
  authors: string[];
  authorsAreEditors?: boolean;
  title: string;
  editors?: string[];
  container: string;
  containerNote?: string;
  pages: string;
  publisher: string;
  year: number;
  isbn?: string;
  issn?: string;
  doi?: string;
};

const entries: Entry[] = [
  {
    role: 'preface',
    authors: ['LASRI Mohamed', 'YOUSSOUFI Meryem'],
    title: 'Préface',
    container: 'Les dynamiques sociospatiales au Maroc. Contraintes de gestion et enjeux de développement',
    containerNote: 'Actes de la deuxième édition des doctoriales du Laboratoire « Gestion des ressources, Développement, Espace et Société (GRD-ESO) »',
    pages: '5-6',
    publisher: 'Éd. Faculté des Lettres et des Sciences humaines d’Agadir',
    year: 2026,
    isbn: '978-9920-472-09-8'
  },
  {
    role: 'chapter',
    authors: ['YOUSSOUFI Meryem'],
    title: 'Parcours migratoires et parcours de ruptures : Interactions et possibilités d’intégration des migrants subsahariens au Maroc',
    editors: ['BRESTIC Katell', 'SEBAUX Gwénola', 'TRIMBLE Sheena'],
    container: 'Migration, exil, diasporas au prisme de la rupture',
    pages: '135-160',
    publisher: 'Presses universitaires de Rennes',
    year: 2026,
    isbn: '979-10-413-0349-6',
    issn: '1951-3321',
    doi: '10.4000/161c5'
  },
  {
    role: 'chapter',
    authors: ['YOUSSOUFI Meryem'],
    title: 'Récits de vie croisés : de l’histoire individuelle à l’histoire collective, la demande sociale de l’histoire du Maroc auprès des Marocains du Monde',
    container: 'Recherches sur l’histoire du Maroc : état des lieux et perspectives',
    pages: '39-59',
    publisher: 'Institut Royal des études sur le Maroc, Graphely, Imprimerie Direct Print',
    year: 2025,
    isbn: '978-9920-778-16-9'
  },
  {
    role: 'introduction',
    authors: ['SEBAUX Gwénola', 'YOUSSOUFI Meryem'],
    title: 'Introduction thématique et conceptuelle',
    container: 'Frontières de la citoyenneté – Accueil des primo-arrivants',
    pages: '9-13',
    publisher: 'Éd. Faculté des Lettres et des Sciences humaines, Université Ibn Zohr',
    year: 2021,
    isbn: '978-9920-615-14-3'
  },
  {
    role: 'introduction',
    authors: ['RUPNOW Dirk', 'SEBAUX Gwénola', 'SEVERIN-BARBOUTIE Bettina', 'YOUSSOUFI Meryem', 'ZEROULOU Zaihia'],
    authorsAreEditors: true,
    title: 'Propos introductifs / Einführende Bemerkungen',
    container: 'Repräsentation und Erinnerung der Migration – Représentation et mémoire de la migration',
    containerNote: 'version bilingue',
    pages: '9-27',
    publisher: 'Presses universitaires de l’Université d’Innsbruck – iup (Innsbruck University Press)',
    year: 2021,
    isbn: '978-3-99106-029-1'
  },
  {
    role: 'chapter',
    authors: ['YOUSSOUFI Meryem'],
    title: 'Multiculturalisme, interactions sociales et processus d’intégration des migrants subsahariens au Maroc',
    editors: ['TRIMASSE Naïma', 'MOUNIR Abdelhak'],
    container: 'Multilingualism',
    pages: '',
    publisher: 'Éd. Laboratoire Valeurs, Société et Développement – Creative Studio',
    year: 2019,
    isbn: '978-9920-38-137-6'
  },
  {
    role: 'chapter',
    authors: ['YOUSSOUFI Meryem'],
    title: 'Parcours croisés de jeunes migrants subsahariens : porosité des frontières à travers les récits de vie',
    editors: ['TEKİN Ç. Beyza', 'DANIŞ Didem'],
    container: 'Visions croisées autour des frontières européennes : mobilité, sécurité et frontières',
    pages: '',
    publisher: 'Éditions de l’Université Galatasaray, Istanbul',
    year: 2017,
    isbn: '978-975-8400-38-6'
  }
];

export default function Articles() {
  const t = useTranslations('Research.articles');
  const years = Array.from(new Set(entries.map((e) => e.year))).sort((a, b) => b - a);

  const renderAuthors = (names: string[]) =>
    names.map((name, i) => (
      <span key={name}>
        {i > 0 && ' / '}
        <span className={name.includes('YOUSSOUFI') ? 'font-semibold text-navy-900' : ''}>{name}</span>
      </span>
    ));

  return (
    <motion.div
      id="publications"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
      className="mt-20 border-t border-gray-200 pt-16"
    >
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-3">{t('title')}</h3>
        <div className="w-16 h-1 bg-gold-500 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">{t('subtitle')}</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-10">
        {years.map((year) => (
          <div key={year}>
            <h4 className="text-lg font-bold text-gold-600 mb-4" dir="ltr">{year}</h4>
            <ul className="space-y-4">
              {entries
                .filter((e) => e.year === year)
                .map((e) => (
                  <li key={e.title} className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
                    <span className="inline-block px-2.5 py-1 mb-3 bg-navy-50 text-navy-800 text-xs rounded-full font-medium">
                      {t(`roles.${e.role}`)}
                    </span>
                    <p dir="ltr" lang="fr" className="text-left text-sm text-gray-700 leading-relaxed">
                      {renderAuthors(e.authors)}
                      {e.authorsAreEditors ? ' (Hg./éd.)' : ''}, « {e.title} »
                      {e.pages ? `, pp. ${e.pages}` : ''}, in{' '}
                      {e.editors && !e.authorsAreEditors && <>{renderAuthors(e.editors)} (dir.), </>}
                      <em>{e.container}</em>
                      {e.containerNote ? ` (${e.containerNote})` : ''}, {e.publisher}, {e.year}.
                    </p>
                    <p dir="ltr" className="mt-2 text-left text-xs text-gray-500 flex flex-wrap gap-x-4 gap-y-1">
                      {e.isbn && <span>ISBN {e.isbn}</span>}
                      {e.issn && <span>ISSN {e.issn}</span>}
                      {e.doi && (
                        <span>
                          DOI{' '}
                          <a
                            href={`https://doi.org/${e.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-navy-800 underline hover:text-gold-600"
                          >
                            {e.doi}
                          </a>
                        </span>
                      )}
                    </p>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
