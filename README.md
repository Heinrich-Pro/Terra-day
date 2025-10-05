# 🛰️ Terra Anniversary - 25 Years of Earth Observation

## 📖 Description

Site web commémoratif célébrant les 25 ans du satellite Terra de la NASA. Une expérience interactive moderne présentant les instruments scientifiques, les découvertes majeures et l'impact de Terra sur notre compréhension de la Terre.

## ✨ Fonctionnalités

- **Design moderne** avec animations et effets visuels
- **Interface bilingue** (Français/Anglais)
- **Vidéo YouTube intégrée** dans le header
- **Illustrations GIF authentiques** des instruments Terra
- **Timeline interactive** des événements marquants
- **Galerie de découvertes** avec images satellites
- **Design responsive** pour tous les appareils

## 🛠️ Technologies Utilisées

### Frontend
- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Lucide React** - Icônes modernes

### UI Components
- **Shadcn/ui** - Composants UI réutilisables
- **Card, Button** - Composants stylisés

### Animations & Effets
- **CSS Animations** - Effets de parallaxe et transitions
- **Gradient animations** - Animations de dégradés
- **Hover effects** - Interactions au survol

## 📁 Structure du Projet

```
nasa-clone/
├── app/
│   ├── page.tsx              # Page principale
│   └── layout.tsx            # Layout global
├── components/
│   ├── ui/                   # Composants UI de base
│   ├── language-toggle.tsx   # Sélecteur de langue
│   ├── star-rain.tsx         # Animation étoiles
│   └── scroll-sun.tsx        # Animation soleil
├── lib/
│   └── translations.ts       # Traductions FR/EN
└── public/
    ├── modis.gif            # Animation instrument MODIS
    ├── aster.gif            # Animation instrument ASTER
    ├── ceres.gif            # Animation instrument CERES
    └── nasa-logo-*.jpg      # Logo NASA
```

## 🚀 Installation

```bash
# Cloner le projet
git clone [repository-url]
cd nasa-clone

# Installer les dépendances
pnpm install

# Lancer en développement
pnpm run dev
```

## 🎯 Instruments Terra Présentés

1. **MODIS** - Moderate Resolution Imaging Spectroradiometer
2. **ASTER** - Advanced Spaceborne Thermal Emission and Reflection Radiometer  
3. **CERES** - Clouds and the Earth's Radiant Energy System
4. **MISR** - Multi-angle Imaging SpectroRadiometer
5. **MOPITT** - Measurements of Pollution in the Troposphere

## 🌍 Sections du Site

- **Hero** - Présentation avec vidéo et statistiques
- **Mission** - Objectifs et réalisations
- **Instruments** - Détail des 5 instruments scientifiques
- **Timeline** - 25 ans d'histoire en dates clés
- **Découvertes** - Galerie des observations marquantes
- **Impact** - Influence scientifique et statistiques

## 📱 Responsive Design

- **Mobile First** - Optimisé pour tous les écrans
- **Breakpoints** - sm, md, lg, xl
- **Layout adaptatif** - Grilles flexibles
- **Navigation mobile** - Menu hamburger

## 🎨 Design System

- **Couleurs** - Palette cyan/blue/slate
- **Typographie** - Font system moderne
- **Spacing** - Système d'espacement cohérent
- **Animations** - Transitions fluides

## 🔧 Scripts Disponibles

```bash
pnpm run dev      # Développement
pnpm run build    # Build production
pnpm run start    # Serveur production
pnpm run lint     # Linting
```

## 📄 Licence

Projet éducatif - NASA Terra Anniversary

---

*Développé avec ❤️ pour célébrer 25 ans d'observation de la Terre*
