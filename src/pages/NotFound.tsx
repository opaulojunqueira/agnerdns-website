import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, ArrowLeft, Search, HelpCircle } from 'lucide-react';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const popularPages = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Tutorial DNS', href: '/tutorial', icon: Search },
    { name: 'Sobre o DNS', href: '/about', icon: HelpCircle },
    { name: 'Status Servidores', href: '/status', icon: Search }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto">
              <div className="mb-8">
                <h1 className="text-6xl md:text-8xl font-bold text-secondary mb-4">404</h1>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-white">Página </span>
                  <span className="text-secondary">Não Encontrada</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Ops! A página que você está procurando não existe ou foi movida.
                  Mas não se preocupe, podemos ajudar você a encontrar o que precisa.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button className="bg-gradient-secondary hover:opacity-90" size="lg" asChild>
                  <a href="/">
                    <Home className="h-5 w-5 mr-2" />
                    Voltar ao Início
                  </a>
                </Button>
                <Button variant="outline" className="glass-card border-secondary/30" size="lg" onClick={() => window.history.back()}>
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Página Anterior
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Pages */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="glass-intense max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center text-2xl">
                  Páginas Populares
                </CardTitle>
                <p className="text-center text-muted-foreground">
                  Talvez você esteja procurando por uma dessas páginas
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {popularPages.map((page, index) => (
                    <a
                      key={index}
                      href={page.href}
                      className="flex items-center space-x-3 p-4 glass-card hover:bg-secondary/10 transition-colors group"
                    >
                      <page.icon className="h-5 w-5 text-secondary group-hover:text-accent transition-colors" />
                      <span className="font-medium group-hover:text-white transition-colors">
                        {page.name}
                      </span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="glass-intense max-w-2xl mx-auto text-center">
              <CardContent className="p-8">
                <HelpCircle className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Ainda precisa de ajuda?</h3>
                <p className="text-muted-foreground mb-6">
                  Se você não conseguiu encontrar o que procurava, nossa equipe 
                  está pronta para ajudar.
                </p>
                <Button variant="outline" className="glass-card border-accent/30" asChild>
                  <a href="/contact">
                    Entre em Contato
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;