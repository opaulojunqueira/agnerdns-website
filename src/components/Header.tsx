import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Shield, Globe, Settings, Users } from 'lucide-react';
import agnerLogo from '@/assets/agner-logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: 'Home', href: '/', icon: Globe },
    { name: 'Sobre', href: '/sobre', icon: Shield },
    { name: 'Tutorial', href: '/tutorial', icon: Settings },
    { name: 'FAQ', href: '/faq', icon: Users },
    { name: 'Status', href: '/status', icon: Users },
    { name: 'Contato', href: '/contato', icon: Users }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={agnerLogo} 
              alt="Agner DNS" 
              className="h-8 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-secondary">
                AGNER DNS
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-secondary/20 text-secondary border border-secondary/30' 
                      : 'text-foreground hover:bg-secondary/20 hover:text-secondary'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="glass-card border-secondary/30" asChild>
              <a href="/status">Status Servidores</a>
            </Button>
            <Button size="sm" className="bg-gradient-secondary hover:opacity-90" asChild>
              <a href="/tutorial">Configurar DNS</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-secondary/20 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border/50">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-secondary/20 text-secondary border border-secondary/30' 
                      : 'text-foreground hover:bg-secondary/20 hover:text-secondary'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.name}</span>
                </a>
              );
            })}
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full glass-card border-secondary/30" asChild>
                <a href="/status">Status Servidores</a>
              </Button>
              <Button className="w-full bg-gradient-secondary hover:opacity-90" asChild>
                <a href="/tutorial">Configurar DNS</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;