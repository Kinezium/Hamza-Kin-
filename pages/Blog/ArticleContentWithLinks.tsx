import React, { ReactNode, useMemo } from 'react';
import { Language } from '../../types';
import { ARTICLE_LINKS } from './articleLinkHelpers';

interface InternalLinkWrapperProps {
  children: ReactNode;
  lang: Language;
  currentSlug: string;
}

let linkCounter = 0;

const isTextNode = (node: any): node is string => typeof node === 'string' && node.trim().length > 0;

const processTextNode = (text: string, lang: Language, currentSlug: string): ReactNode[] => {
  const parts: ReactNode[] = [];
  const keywords: { keyword: string; slug: string; length: number }[] = [];

  // Construire une liste de tous les keywords triés par longueur (plus long d'abord)
  ARTICLE_LINKS.forEach((article) => {
    if (article.slug === currentSlug) return;
    const articleKeywords = lang === 'fr' ? article.keywordsFr : article.keywordsAr;
    articleKeywords.forEach((kw) => {
      keywords.push({ keyword: kw, slug: article.slug, length: kw.length });
    });
  });

  keywords.sort((a, b) => b.length - a.length);

  // Traiter le texte pour trouver et remplacer les keywords par des liens
  let remaining = text;
  let processed = false;

  for (const { keyword, slug } of keywords) {
    if (processed) break;

    // Créer un regex sécurisé qui matches le keyword en tant que mot entier
    const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escapedKeyword}\\b`, 'i'); // Case-insensitive
    const match = regex.exec(remaining);

    if (match) {
      const before = remaining.substring(0, match.index);
      const after = remaining.substring(match.index! + keyword.length);

      if (before) parts.push(<span key={`text-${linkCounter++}`}>{before}</span>);

      parts.push(
        <a
          key={`link-${slug}-${linkCounter++}`}
          href={`/${lang === 'ar' ? 'ar/' : ''}blog/${slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-medical-600 font-semibold hover:text-medical-700 hover:underline transition cursor-pointer"
          title={`${lang === 'fr' ? 'Voir l\'article' : 'عرض المقالة'}`}
        >
          {match[0]}
        </a>
      );

      remaining = after;
      processed = true;
    }
  }

  if (remaining) {
    parts.push(<span key={`text-${linkCounter++}`}>{remaining}</span>);
  }

  return parts.length > 0 ? parts : [text];
};

const processNode = (node: ReactNode, lang: Language, currentSlug: string, depth = 0): ReactNode => {
  if (depth > 20) return node;

  if (isTextNode(node)) {
    const processed = processTextNode(node, lang, currentSlug);
    return processed.length === 1 ? processed[0] : <>{processed}</>;
  }

  if (React.isValidElement(node)) {
    const { type, props } = node;

    if (typeof type === 'string') {
      // Élément HTML natif
      const processedChildren = React.Children.map(props.children, (child) =>
        processNode(child, lang, currentSlug, depth + 1)
      );

      return React.createElement(
        type,
        { ...props, key: `elem-${linkCounter++}` },
        processedChildren
      );
    }

    // Composant personnalisé - le traiter comme boîte noire, pas de modification
    return node;
  }

  if (Array.isArray(node)) {
    return node.map((child, i) =>
      React.isValidElement(child)
        ? React.cloneElement(child as React.ReactElement, { key: `arr-${linkCounter++}` })
        : child
    );
  }

  return node;
};

export const ArticleContentWithLinks: React.FC<InternalLinkWrapperProps> = ({
  children,
  lang,
  currentSlug
}) => {
  // Réinitialiser le compteur à chaque changement d'article
  linkCounter = 0;

  const processed = useMemo(() => {
    return processNode(children, lang, currentSlug);
  }, [children, lang, currentSlug]);

  return <>{processed}</>;
};
