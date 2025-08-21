import { Button } from '@/components/ui/button';
import { Shield, Globe, Zap, ArrowRight } from 'lucide-react';
import heroIllustration from '@/assets/hero-illustration.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-16 flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 text-sm font-medium">
                <Shield className="h-4 w-4 mr-2 text-secondary" />
                DNS 100% BRASILEIRO e GRATUITO
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">BLOQUEIA </span>
                <span className="text-secondary">ANÚNCIOS,</span>
                <br />
                <span className="text-white">MALWARES, BETS,</span>
                <br />
                <span className="text-white">CASSINOS </span>
                <span className="text-accent">E MAIS</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                Proteja sua navegação com o DNS brasileiro mais completo. 
                Bloqueio inteligente de conteúdo malicioso, anúncios invasivos e 
                sites de apostas em tempo real.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 glass-card hover-lift">
                <div className="p-2 rounded-lg bg-secondary/20">
                  <Shield className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Proteção Total</p>
                  <p className="text-xs text-muted-foreground">Malware & Phishing</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 glass-card hover-lift">
                <div className="p-2 rounded-lg bg-accent/20">
                  <Zap className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Ultra Rápido</p>
                  <p className="text-xs text-muted-foreground">Baixa Latência</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 glass-card hover-lift">
                <div className="p-2 rounded-lg bg-orange/20">
                  <Globe className="h-5 w-5 text-orange" />
                </div>
                <div>
                  <p className="font-semibold text-sm">100% Nacional</p>
                  <p className="text-xs text-muted-foreground">Servidores no Brasil</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-secondary hover:opacity-90 text-lg px-8 py-6 glow-effect group"
                asChild
              >
                <a href="/tutorial">
                  Configurar DNS Agora
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-card border-secondary/30 text-lg px-8 py-6 hover-lift"
                asChild
              >
                <a href="/tutorial">Ver Tutorial</a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-secondary">99.9%</p>
                <p className="text-sm text-muted-foreground">Uptime</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-accent">24/7</p>
                <p className="text-sm text-muted-foreground">Proteção</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-orange">0ms</p>
                <p className="text-sm text-muted-foreground">Latência Extra</p>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img 
                src={heroIllustration} 
                alt="DNS Protection Illustration" 
                className="w-full h-auto max-w-lg mx-auto"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-secondary opacity-20 blur-3xl animate-pulse-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;