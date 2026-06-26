# Système de Liens Internes Articles

## Vue d'ensemble

Le système de liens internes automatise la création de liens entre articles du blog. Quand un mot ou une phrase d'un article correspond aux mots-clés d'un autre article, un lien direct vers cet article est créé automatiquement.

## Comment ça fonctionne

### 1. Configuration automatique (ArticleContentWithLinks)

Le système analyse automatiquement le contenu de chaque article et:
- Détecte les mots-clés qui correspondent à d'autres articles
- Crée des liens cliquables qui ouvrent l'article en nouvel onglet
- Style des liens: texte en couleur médicale avec effet hover

**Fichiers impliqués:**
- `ArticleContentWithLinks.tsx` - Composant wrapper qui traverse et traite le JSX
- `articleLinkHelpers.ts` - Liste centralisée de tous les articles et leurs mots-clés
- `ArticleTemplate.tsx` - Intègre le wrapper autour du contenu

### 2. Mots-clés configurés

Chaque article a une liste de mots-clés en français et arabe dans `articleLinkHelpers.ts`:

```typescript
{
  slug: 'sciatique-hernie-discale',
  titleFr: 'La Sciatique & Hernie Discale',
  titleAr: 'عرق النسا والانزلاق الغضروفي',
  keywordsFr: ['sciatique', 'hernie discale', 'hernie', 'nerf sciatique', 'douleur sciatique'],
  keywordsAr: ['عرق النسا', 'الانزلاق الغضروفي', 'انزلاق', 'النسا']
}
```

## Utilisation

### Option 1: Liens automatiques (recommandé)

Les liens sont créés automatiquement - aucune configuration supplémentaire n'est nécessaire. Simplement écrire le texte naturel dans l'article, et les mots-clés seront automatiquement linké.

**Exemple:**
```jsx
<p>
  Après un AVC, la rééducation est essentielle. 
  La spasticité peut survenir et affecter la marche.
</p>
```

Résultat: "AVC" et "spasticité" seront des liens cliquables.

### Option 2: Liens manuels explicites

Pour plus de contrôle, importer le composant `InternalLink`:

```jsx
import { InternalLink } from './InternalLink';

<p>
  Après un <InternalLink slug="readaptation-post-avc" lang={lang}>AVC</InternalLink>,
  la rééducation est essentielle. La <InternalLink slug="spasticite-definition-traitement-indications" lang={lang}>
  spasticité</InternalLink> peut survenir.
</p>
```

## Architecture

### Fichiers clés

1. **ArticleContentWithLinks.tsx**
   - Composant React qui traverse le JSX
   - Détecte les nœuds texte
   - Crée des liens pour les mots-clés correspondants
   - Traite seulement la première occurrence par article cible pour éviter la sur-linkedification

2. **articleLinkHelpers.ts**
   - Liste centralisée: `ARTICLE_LINKS` avec tous les articles
   - Chaque article contient: slug, titre FR/AR, mots-clés FR/AR
   - À mettre à jour quand on ajoute de nouveaux articles

3. **InternalLink.tsx**
   - Composant réutilisable pour créer des liens manuels
   - Props: slug, lang, children, title (optionnel)
   - Ouvre les liens en nouvel onglet automatiquement

4. **ArticleTemplate.tsx**
   - Enveloppe le contenu avec `ArticleContentWithLinks`
   - Passe `lang` et `currentSlug` au wrapper

## Ajouter un nouvel article

Quand vous créez un nouvel article:

1. **Créer le fichier article** (ex: `MyTopicArticle.tsx`)
2. **Ajouter à `articleLinkHelpers.ts`:**
   ```typescript
   {
     slug: 'mon-topic-slug',
     titleFr: 'Mon Titre en Français',
     titleAr: 'عنواني بالعربية',
     keywordsFr: ['mot-cle-1', 'mot-cle-2', 'expression important'],
     keywordsAr: ['الكلمة-1', 'الكلمة-2', 'التعبير المهم']
   }
   ```

3. **Les liens seront créés automatiquement** dans tous les articles qui mentionnent ces mots-clés!

## Considérations de performance

- Le système utilise `useMemo` pour éviter les recalculs inutiles
- Les liens sont créés qu'une seule fois par changement d'article/langue
- Limite de profondeur (20) pour éviter les traversées infinies du JSX

## Styles appliqués

Les liens internes ont le style CSS suivant:
```css
.text-medical-600           /* Couleur médicale */
.font-semibold              /* Texte en gras */
.hover:text-medical-700     /* Couleur hover */
.hover:underline            /* Soulignage au survol */
.transition                 /* Animation lisse */
.cursor-pointer             /* Curseur pointer */
```

## Limitations actuelles

1. **Première occurrence seulement**: Chaque paire article-cible n'est linkée que une fois par article
2. **Cas-sensitif**: Les mots-clés sont trouvés indépendamment de la casse (utilise regex `i`)
3. **Mots entiers**: Les mots-clés doivent être des mots entiers (`\b` boundaries)
4. **Pas de nesting**: Les liens imbriqués ne sont pas supportés

## Améliorations futures possibles

- [ ] Linkifier plusieurs occurrences (avec limite)
- [ ] Support des synonymes et variations
- [ ] Analytics: tracking des clics sur les liens internes
- [ ] Suggestions intelligentes de liens basées sur le contexte
- [ ] Interface pour gérer les mots-clés dans l'admin

## Tests

Pour tester le système:

1. Compiler: `npm run build`
2. Vérifier le navigateur: 
   - Ouvrir un article
   - Vérifier que les mots-clés sont linkés
   - Cliquer sur un lien pour vérifier qu'il ouvre un nouvel onglet
   - Vérifier les deux langues (FR et AR)

## Exemple concret: Article Spasticité

L'article `SpasticiteArticle.tsx` mentionne:
- **"AVC"** → auto-linké vers `readaptation-post-avc`
- **"SEP"** / **"sclérose en plaques"** → auto-linké vers `sclerose-en-plaque-kinesitherapie`
- **"posture"** → auto-linké vers `posture-ergonomie`

Ces liens sont créés automatiquement sans modification du code article!
