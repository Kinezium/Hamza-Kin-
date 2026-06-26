import React from 'react';
import { Language } from '../../types';

interface InternalLinkProps {
  slug: string;
  children: React.ReactNode;
  lang: Language;
  title?: string;
}

/**
 * Composant pour créer des liens internes entre articles
 * @param slug - Le slug de l'article cible
 * @param children - Le texte du lien
 * @param lang - La langue (fr ou ar)
 * @param title - Info-bulle optionnelle
 */
export const InternalLink: React.FC<InternalLinkProps> = ({
  slug,
  children,
  lang,
  title
}) => {
  const href = `/${lang === 'ar' ? 'ar/' : ''}blog/${slug}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-medical-600 font-semibold hover:text-medical-700 hover:underline transition cursor-pointer"
      title={title || (lang === 'fr' ? 'Voir l\'article' : 'عرض المقالة')}
    >
      {children}
    </a>
  );
};
