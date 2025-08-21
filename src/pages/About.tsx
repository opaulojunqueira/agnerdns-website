import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  ShieldCheck, 
  Ban, 
  Zap, 
  Globe,
  Heart,
  Users,
  Star,
  ArrowRight
} from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Ban,
      title: "Bloqueio de Anúncios, Bets e Cassinos",
      description: "Agner DNS é o primeiro DNS Brasileiro com filtro para anúncios, Bets/Cassinos, rastreadores, pop-ups e conteúdo indesejado. Navegue sem interrupções.",
      servers: ["45.163.79.58", "45.163.79.59", "2804:52f0:810:2::59", "2804:52f0:810:2::60"],
      color: "secondary",
      gradient: "bg-gradient-secondary"
    },
    {
      icon: Shield,
      title: "Proteção contra Malware e Vírus",
      description: "Com motor desenvolvido por Luis Carlos Agner Claro, o Agner DNS bloqueia requisições para malwares e vírus, impedindo que entrem na sua rede.",
      servers: ["45.163.79.58", "45.163.79.59", "2804:52f0:810:2::59", "2804:52f0:810:2::60"],
      color: "accent",
      gradient: "bg-gradient-secondary"
    },
    {
      icon: ShieldCheck,
      title: "Proteção Completa + Controle Parental",
      description: "Inclui todo o bloqueio anterior MAIS proteção contra conteúdo adulto, violência e materiais inadequados para crianças. Perfeito para famílias.",
      servers: ["45.163.79.60", "45.163.79.61", "2804:52f0:810:2::60", "2804:52f0:810:2::61"],
      color: "orange",
      gradient: "bg-gradient-hero"
    }
  ];

  const stats = [
    { value: "100%", label: "Brasileiro", icon: Heart, color: "text-destructive" },
    { value: "99.9%", label: "Uptime", icon: Zap, color: "text-secondary" },
    { value: "24/7", label: "Monitoramento", icon: Globe, color: "text-accent" },
    { value: "0ms", label: "Latência Extra", icon: Star, color: "text-orange" }
  ];

  const benefits = [
    "DNS 100% brasileiro - desenvolvido e hospedado no Brasil",
    "Sem logs de navegação - sua privacidade totalmente protegida",
    "Velocidade otimizada para usuários brasileiros",
    "Bloqueio inteligente de anúncios, bets e malware em tempo real",
    "Suporte técnico especializado em português",
    "Atualizações constantes das listas de bloqueio",
    "IPv4 e IPv6 disponíveis para máxima compatibilidade",
    "Serviço gratuito mantido por paixão por uma internet mais segura"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Sobre o </span>
              <span className="text-secondary">Agner DNS</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              O primeiro DNS brasileiro com filtro para anúncios, Bets/Cassinos, rastreadores e malware. 
              Motor desenvolvido por Luis Carlos Agner Claro, 100% nacional e gratuito.
            </p>
            
            {/* Stats */}
            <div className="grid sm:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className={`h-6 w-6 ${stat.color} mr-2`} />
                    <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Recursos do Agner DNS
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada servidor foi desenvolvido com foco específico para oferecer a melhor proteção 
              para diferentes necessidades.
            </p>
          </div>

          <div className="space-y-12">
            {features.map((feature, index) => (
              <Card key={index} className="glass-intense hover-lift overflow-hidden">
                <div className={`h-2 ${feature.gradient}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-${feature.color}/20 flex-shrink-0`}>
                      <feature.icon className={`h-8 w-8 text-${feature.color}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{feature.title}</CardTitle>
                      <CardDescription className="text-lg leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-muted-foreground">Servidores disponíveis:</h4>
                    <div className="flex flex-wrap gap-3">
                      {feature.servers.map((server, serverIndex) => (
                        <Badge 
                          key={serverIndex} 
                          variant="outline" 
                          className={`border-${feature.color}/30 text-${feature.color} font-mono`}
                        >
                          {server}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 pt-4 border-t border-border/30">
                    <div className={`w-2 h-2 bg-${feature.color} rounded-full animate-pulse-glow`}></div>
                    <span className={`text-sm font-medium text-${feature.color}`}>
                      Todos os servidores funcionando
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">Por que escolher o </span>
                <span className="text-secondary">Agner DNS?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Desenvolvido com tecnologia brasileira e focado nas necessidades específicas 
                dos usuários do Brasil.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="glass-intense">
              <CardHeader>
                <CardTitle className="text-center flex items-center justify-center space-x-3">
                  <Users className="h-6 w-6 text-secondary" />
                  <span>Desenvolvido por</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-secondary">Luis Carlos Agner Claro</h3>
                  <p className="text-muted-foreground">
                    Especialista em segurança de redes e desenvolvimento de sistemas DNS
                  </p>
                </div>
                
                <div className="pt-4 border-t border-border/30">
                  <p className="text-sm text-muted-foreground">
                    "O Agner DNS nasceu da necessidade de oferecer aos brasileiros um serviço 
                    DNS confiável, rápido e desenvolvido com foco na nossa realidade."
                  </p>
                </div>
                
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-secondary"></div>
                  <span className="text-sm text-muted-foreground">Orgulhosamente brasileiro</span>
                  <Heart className="h-4 w-4 text-destructive" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-intense max-w-4xl mx-auto text-center">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-4">Pronto para navegar com segurança?</h3>
              <p className="text-xl text-muted-foreground mb-8">
                Configure o Agner DNS agora e experimente a diferença de um DNS brasileiro, 
                rápido e seguro.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-secondary hover:opacity-90 text-lg px-8 py-6" asChild>
                  <a href="/tutorial">
                    Ver Tutorial de Configuração
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </a>
                </Button>
                
                <Button variant="outline" className="glass-card border-secondary/30 text-lg px-8 py-6" asChild>
                  <a href="/status">
                    Verificar Status dos Servidores
                  </a>
                </Button>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border/30">
                <p className="text-sm text-muted-foreground">
                  Mais de <span className="text-secondary font-semibold">10.000</span> usuários 
                  confiam no Agner DNS todos os dias
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;