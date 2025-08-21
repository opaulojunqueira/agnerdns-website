import { Globe, Shield, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import agnerLogo from '@/assets/agner-logo.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'DNS IPv4', href: '/about' },
      { name: 'DNS IPv6', href: '/about' },
      { name: 'Status Servidores', href: '/status' },
      { name: 'Tutorial', href: '/tutorial' }
    ],
    company: [
      { name: 'Sobre o DNS', href: '/about' },
      { name: 'Contato', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Suporte', href: '/contact' }
    ],
    support: [
      { name: 'Tutorial', href: '/tutorial' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Contato', href: '/contact' },
      { name: 'Status', href: '/status' }
    ]
  };

  return (
    <footer className="relative bg-primary/50 border-t border-border/30">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <img 
                  src={agnerLogo} 
                  alt="Agner DNS" 
                  className="h-10 w-auto"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">AGNER DNS</h3>
                  <p className="text-sm text-muted-foreground">DNS 100% Brasileiro</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Proteja sua navegação com o DNS brasileiro mais completo. 
                Bloqueio inteligente de malware, anúncios e conteúdo indesejado.
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow"></div>
                  <span className="text-sm text-accent font-medium">Todos os servidores online</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <Button className="w-full sm:w-auto bg-gradient-secondary hover:opacity-90" asChild>
                  <a href="/contact">
                    <Mail className="h-4 w-4 mr-2" />
                    Entrar em Contato
                  </a>
                </Button>
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-3 grid sm:grid-cols-3 gap-8">
              {/* Services */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-secondary" />
                  Serviços
                </h4>
                <ul className="space-y-3">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-muted-foreground hover:text-white transition-colors inline-flex items-center group"
                      >
                        {link.name}
                        <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-accent" />
                  Empresa
                </h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-muted-foreground hover:text-white transition-colors inline-flex items-center group"
                      >
                        {link.name}
                        <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Suporte</h4>
                <ul className="space-y-3">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-muted-foreground hover:text-white transition-colors inline-flex items-center group"
                      >
                        {link.name}
                        <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="py-8 border-t border-border/30">
          <div className="grid sm:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <p className="text-2xl font-bold text-secondary">99.9%</p>
              <p className="text-sm text-muted-foreground">Uptime Garantido</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-accent">24/7</p>
              <p className="text-sm text-muted-foreground">Monitoramento</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-orange">4</p>
              <p className="text-sm text-muted-foreground">Servidores IPv4</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-secondary">2</p>
              <p className="text-sm text-muted-foreground">Servidores IPv6</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Agner DNS. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-muted-foreground">
                Feito com ❤️ no Brasil
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-accent font-medium">DNS Brasileiro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;