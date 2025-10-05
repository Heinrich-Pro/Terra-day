"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Satellite, Eye, Radio, Thermometer, Mountain, ChevronDown } from "lucide-react"
import Link from "next/link"
import { LanguageToggle } from "@/components/language-toggle"
import { translations, type Language } from "@/lib/translations"
import { StarRain } from "@/components/star-rain"
import { ScrollSun } from "@/components/scroll-sun"

export default function TerraAnniversary() {
  const [language, setLanguage] = useState<Language>("en")
  const t = translations[language]

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fr" : "en"))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white scroll-smooth">
      <StarRain />
      <ScrollSun />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-cyan-500/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <img
                    src="/nasa-logo-meatball-blue-circle-with-stars.jpg"
                    alt="NASA"
                    className="h-14 w-14 rounded-full ring-2 ring-cyan-500/30 group-hover:ring-cyan-400/60 transition-all"
                  />
                  <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Terra
                  </span>
                  <div className="text-xs text-cyan-300/70 font-semibold tracking-wider">25 YEARS</div>
                </div>
              </Link>
              <nav className="hidden md:flex items-center gap-8">
                <a
                  href="#mission"
                  className="text-sm font-semibold hover:text-cyan-400 transition-colors relative group"
                >
                  {t.nav.mission}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all" />
                </a>
                <a
                  href="#instruments"
                  className="text-sm font-semibold hover:text-cyan-400 transition-colors relative group"
                >
                  {t.nav.instruments}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all" />
                </a>
                <a
                  href="#timeline"
                  className="text-sm font-semibold hover:text-cyan-400 transition-colors relative group"
                >
                  {t.nav.timeline}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all" />
                </a>
                <a
                  href="#discoveries"
                  className="text-sm font-semibold hover:text-cyan-400 transition-colors relative group"
                >
                  {t.nav.discoveries}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all" />
                </a>
              </nav>
            </div>
            <LanguageToggle language={language} onToggle={toggleLanguage} />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center mt-20 overflow-hidden">
        {/* Background with parallax effect */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{
              backgroundImage:
                "url('/.jpg?height=1080&width=1920&query=earth from space blue marble nasa satellite view clouds oceans continents high resolution')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-blue-950/80 to-slate-950" />
          {/* Animated grid overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative container mx-auto px-4 z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-10rem)]">
            {/* Left Column - Video Card */}
            <div className="order-2 lg:order-1">
              <Card className="group relative bg-gradient-to-br from-cyan-950/40 to-blue-950/40 backdrop-blur-md border border-cyan-400/30 rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/20 hover:border-cyan-400/50 transition-all hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/10 group-hover:to-blue-400/10 transition-all" />
                <div className="relative p-6">
                  <div className="aspect-video rounded-2xl overflow-hidden bg-slate-900/50 border border-cyan-500/20">
                    <iframe
                      src="https://www.youtube.com/embed/ByrUVCCqPgg"
                      title="Terra Satellite Video"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-bold text-cyan-300 mb-2">Terra en Action</h3>
                    <p className="text-cyan-100/80 text-sm">Découvrez 25 ans d'observation de la Terre</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column - Text Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md border border-cyan-400/30 rounded-full shadow-lg shadow-cyan-500/20">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-sm font-bold tracking-widest uppercase text-cyan-200">{t.hero.badge}</span>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 text-balance leading-none">
                {t.hero.title}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 animate-gradient">
                  {t.hero.titleHighlight}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-cyan-100/90 mb-12 leading-relaxed text-balance font-light">
                {t.hero.subtitle}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-10 py-7 text-lg shadow-lg shadow-cyan-500/30 border-0"
                >
                  {t.hero.exploreCta}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-cyan-400/50 text-cyan-100 hover:bg-cyan-400/10 hover:border-cyan-400 font-bold px-10 py-7 text-lg bg-transparent backdrop-blur-sm"
                >
                  {t.hero.dataCta}
                </Button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                {[
                  { number: "25", label: t.hero.stats.years },
                  { number: "5", label: t.hero.stats.instruments },
                  { number: "∞", label: t.hero.stats.discoveries },
                  { number: "24/7", label: t.hero.stats.monitoring },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="group relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-md border border-cyan-400/20 rounded-2xl p-4 md:p-6 hover:border-cyan-400/50 transition-all hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/10 group-hover:to-blue-400/10 rounded-2xl transition-all" />
                    <div className="relative">
                      <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-blue-400 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-xs md:text-sm text-cyan-200/80 font-semibold">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-cyan-400" />
          <div className="w-0.5 h-12 bg-gradient-to-b from-cyan-400 to-transparent" />
        </div>
      </section>

      {/* Mission Overview */}
      <section id="mission" className="relative py-32 bg-slate-950/50 backdrop-blur-sm z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              {t.mission.title}
            </h2>
            <p className="text-xl md:text-2xl text-cyan-100/80 leading-relaxed font-light">{t.mission.intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Objectives Card */}
            <Card className="group relative bg-gradient-to-br from-cyan-950/40 to-blue-950/40 backdrop-blur-sm border-cyan-500/20 p-10 hover:border-cyan-400/50 transition-all overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/5 group-hover:to-blue-400/5 transition-all" />
              <div className="relative">
                <h3 className="text-3xl font-bold mb-6 text-cyan-300">{t.mission.objectives.title}</h3>
                <ul className="space-y-4">
                  {t.mission.objectives.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mt-0.5">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-cyan-100/90 text-lg leading-relaxed group-hover/item:text-cyan-50 transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            {/* Achievements Card */}
            <Card className="group relative bg-gradient-to-br from-blue-950/40 to-indigo-950/40 backdrop-blur-sm border-blue-500/20 p-10 hover:border-blue-400/50 transition-all overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-indigo-400/0 group-hover:from-blue-400/5 group-hover:to-indigo-400/5 transition-all" />
              <div className="relative">
                <h3 className="text-3xl font-bold mb-6 text-blue-300">{t.mission.achievements.title}</h3>
                <ul className="space-y-4">
                  {t.mission.achievements.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center mt-0.5">
                        <span className="text-white text-xs font-bold">★</span>
                      </div>
                      <span className="text-blue-100/90 text-lg leading-relaxed group-hover/item:text-blue-50 transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Instruments Section */}
      <section
        id="instruments"
        className="relative py-32 bg-gradient-to-b from-slate-950 via-blue-950/30 to-slate-950 z-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              {t.instruments.title}
            </h2>
            <p className="text-xl text-cyan-100/80 max-w-4xl mx-auto font-light">{t.instruments.subtitle}</p>
          </div>

          <div className="space-y-12 max-w-7xl mx-auto">
            {/* MODIS */}
            <InstrumentCard
              icon={<Eye className="h-10 w-10" />}
              iconColor="from-blue-500 to-cyan-500"
              name={t.instruments.modis.name}
              fullName={t.instruments.modis.fullName}
              description={t.instruments.modis.description}
              keyData={t.instruments.modis.keyData}
              capabilities={t.instruments.modis.capabilities}
              image="/modis.gif"
            />

            {/* ASTER */}
            <InstrumentCard
              icon={<Mountain className="h-10 w-10" />}
              iconColor="from-green-500 to-emerald-500"
              name={t.instruments.aster.name}
              fullName={t.instruments.aster.fullName}
              description={t.instruments.aster.description}
              keyData={t.instruments.aster.keyData}
              capabilities={t.instruments.aster.capabilities}
              image="/aster.gif"
              reverse
            />

            {/* CERES */}
            <InstrumentCard
              icon={<Thermometer className="h-10 w-10" />}
              iconColor="from-yellow-500 to-orange-500"
              name={t.instruments.ceres.name}
              fullName={t.instruments.ceres.fullName}
              description={t.instruments.ceres.description}
              keyData={t.instruments.ceres.keyData}
              capabilities={t.instruments.ceres.capabilities}
              image="/ceres.gif"
            />

            {/* MISR */}
            <InstrumentCard
              icon={<Satellite className="h-10 w-10" />}
              iconColor="from-purple-500 to-pink-500"
              name={t.instruments.misr.name}
              fullName={t.instruments.misr.fullName}
              description={t.instruments.misr.description}
              keyData={t.instruments.misr.keyData}
              capabilities={t.instruments.misr.capabilities}
              image="multi angle view earth atmosphere aerosols purple satellite"
              reverse
            />

            {/* MOPITT */}
            <InstrumentCard
              icon={<Radio className="h-10 w-10" />}
              iconColor="from-red-500 to-rose-500"
              name={t.instruments.mopitt.name}
              fullName={t.instruments.mopitt.fullName}
              description={t.instruments.mopitt.description}
              keyData={t.instruments.mopitt.keyData}
              capabilities={t.instruments.mopitt.capabilities}
              image="atmospheric pollution carbon monoxide red orange air quality"
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="relative py-32 bg-slate-950/80 backdrop-blur-sm z-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              {t.timeline.title}
            </h2>
            <p className="text-xl text-cyan-100/80 max-w-4xl mx-auto font-light">{t.timeline.subtitle}</p>
          </div>

          <div className="max-w-5xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-cyan-500" />

            <div className="space-y-16">
              {t.timeline.events.map((event, i) => (
                <div
                  key={i}
                  className={`relative flex gap-8 items-start ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-3xl shadow-lg shadow-cyan-500/50 border-4 border-slate-950 z-10">
                    {["🚀", "📸", "🌍", "⭐", "🎉"][i]}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"} pl-24 md:pl-0`}>
                    <div
                      className={`inline-block px-5 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full mb-4 ${i % 2 === 0 ? "md:float-right md:clear-right" : ""}`}
                    >
                      <span className="text-sm font-black text-cyan-300 tracking-wider">{event.year}</span>
                    </div>
                    <div className="clear-both">
                      <h3 className="text-3xl font-bold mb-4 text-cyan-200">{event.title}</h3>
                      <p className="text-cyan-100/80 leading-relaxed text-lg">{event.description}</p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Significant Events Gallery */}
      <section
        id="discoveries"
        className="relative py-32 bg-gradient-to-b from-slate-950 via-blue-950/30 to-slate-950 z-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              {t.discoveries.title}
            </h2>
            <p className="text-xl text-cyan-100/80 max-w-4xl mx-auto font-light">{t.discoveries.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {t.discoveries.events.map((event, i) => (
              <Card
                key={i}
                className="group relative bg-gradient-to-br from-slate-900/80 to-blue-950/40 backdrop-blur-sm border-cyan-500/20 overflow-hidden hover:border-cyan-400/50 transition-all hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/10 group-hover:to-blue-400/10 transition-all" />
                <div className="relative">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={`/.jpg?height=400&width=600&query=${
                        [
                          "amazon rainforest fires smoke from space satellite view",
                          "arctic sea ice melting from space white ice blue ocean",
                          "australia bushfires red flames smoke from satellite",
                          "hurricane from space spiral clouds eye of storm",
                          "volcanic eruption ash plume from space gray smoke",
                          "sahara desert dust storm over atlantic ocean from space brown clouds",
                        ][i]
                      }`}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                    <div className="absolute top-4 right-4 px-4 py-2 bg-cyan-500/80 backdrop-blur-sm rounded-full shadow-lg">
                      <span className="text-xs font-bold text-white">{event.year}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 text-cyan-200 group-hover:text-cyan-100 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-cyan-100/80 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="relative py-32 bg-slate-950/80 backdrop-blur-sm z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                {t.impact.title}
              </h2>
              <p className="text-xl text-cyan-100/80 font-light">{t.impact.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="text-center group">
                <div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-500 mb-4 group-hover:scale-110 transition-transform">
                  10,000+
                </div>
                <div className="text-cyan-200 text-lg font-semibold">{t.impact.stats.publications}</div>
              </div>
              <div className="text-center group">
                <div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-emerald-500 mb-4 group-hover:scale-110 transition-transform">
                  100%
                </div>
                <div className="text-cyan-200 text-lg font-semibold">{t.impact.stats.coverage}</div>
              </div>
              <div className="text-center group">
                <div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-orange-500 mb-4 group-hover:scale-110 transition-transform">
                  Millions
                </div>
                <div className="text-cyan-200 text-lg font-semibold">{t.impact.stats.images}</div>
              </div>
            </div>

            <Card className="relative bg-gradient-to-br from-cyan-950/40 to-blue-950/40 backdrop-blur-sm border-cyan-500/30 p-12 md:p-16 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-400/5" />
              <div className="relative">
                <blockquote className="text-xl md:text-3xl text-cyan-100/90 leading-relaxed text-center italic mb-8 font-light">
                  "{t.impact.quote}"
                </blockquote>
                <div className="text-center text-cyan-300 font-bold text-lg">— {t.impact.attribution}</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-32 bg-gradient-to-b from-slate-950 via-blue-950/50 to-slate-950 z-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            {t.cta.title}
          </h2>
          <p className="text-xl text-cyan-100/80 mb-12 max-w-4xl mx-auto font-light">{t.cta.subtitle}</p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-12 py-8 text-xl shadow-lg shadow-cyan-500/30 border-0"
            >
              {t.cta.browseCta}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-cyan-400/50 text-cyan-100 hover:bg-cyan-400/10 hover:border-cyan-400 font-bold px-12 py-8 text-xl bg-transparent backdrop-blur-sm"
            >
              {t.cta.learnCta}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-slate-950 text-white py-16 border-t border-cyan-500/20 z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-bold mb-6 text-cyan-300 text-lg">{t.footer.about.title}</h4>
              <ul className="space-y-3">
                {t.footer.about.links.map((link, i) => (
                  <li key={i}>
                    <Link href="#" className="text-cyan-100/70 hover:text-cyan-300 transition-colors text-sm">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-cyan-300 text-lg">{t.footer.data.title}</h4>
              <ul className="space-y-3">
                {t.footer.data.links.map((link, i) => (
                  <li key={i}>
                    <Link href="#" className="text-cyan-100/70 hover:text-cyan-300 transition-colors text-sm">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-cyan-300 text-lg">{t.footer.news.title}</h4>
              <ul className="space-y-3">
                {t.footer.news.links.map((link, i) => (
                  <li key={i}>
                    <Link href="#" className="text-cyan-100/70 hover:text-cyan-300 transition-colors text-sm">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-cyan-300 text-lg">{t.footer.connect.title}</h4>
              <ul className="space-y-3">
                {t.footer.connect.links.map((link, i) => (
                  <li key={i}>
                    <Link href="#" className="text-cyan-100/70 hover:text-cyan-300 transition-colors text-sm">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-cyan-500/20 pt-8 text-center">
            <p className="text-cyan-100/70 mb-2">{t.footer.copyright}</p>
            <p className="text-cyan-100/50 text-sm">{t.footer.nasa}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface InstrumentCardProps {
  icon: React.ReactNode
  iconColor: string
  name: string
  fullName: string
  description: string
  keyData: string
  capabilities: string[]
  image: string
  reverse?: boolean
}

function InstrumentCard({
  icon,
  iconColor,
  name,
  fullName,
  description,
  keyData,
  capabilities,
  image,
  reverse,
}: InstrumentCardProps) {
  return (
    <Card
      className={`group relative bg-gradient-to-br from-slate-900/80 to-blue-950/40 backdrop-blur-sm border-cyan-500/20 overflow-hidden hover:border-cyan-400/50 transition-all ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/5 group-hover:to-blue-400/5 transition-all" />
      <div className="relative grid md:grid-cols-2 gap-8 p-10">
        {/* Content */}
        <div className="flex flex-col justify-center">
          <div
            className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${iconColor} flex items-center justify-center mb-6 shadow-lg`}
          >
            <div className="text-white">{icon}</div>
          </div>
          <h3 className="text-4xl font-black mb-2 text-cyan-300">{name}</h3>
          <p className="text-sm text-cyan-400/80 mb-6 font-semibold tracking-wide">{fullName}</p>
          <p className="text-cyan-100/90 leading-relaxed mb-6 text-lg">{description}</p>
          <div className="bg-cyan-950/30 border border-cyan-500/20 rounded-xl p-4 mb-6">
            <div className="text-xs font-bold text-cyan-400 mb-2 uppercase tracking-wider">Key Data Products</div>
            <div className="text-sm text-cyan-100/80">{keyData}</div>
          </div>
          <div>
            <div className="text-xs font-bold text-cyan-400 mb-3 uppercase tracking-wider">Capabilities</div>
            <ul className="space-y-2">
              {capabilities.map((cap, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-cyan-100/80">
                  <span className="text-cyan-400 mt-0.5">•</span>
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={image.startsWith('/') ? image : `/.jpg?height=600&width=800&query=${image}`}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>
      </div>
    </Card>
  )
}
