import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, ShieldCheck, Copy, CheckCircle, XCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DNSServers = () => {
  const { toast } = useToast();

  const servers = [
    {
      ip: '45.163.79.58',
      type: 'IPv4',
      icon: Shield,
      features: {
        ads: true,
        adult: false,
        status: 'active'
      },
      description: 'Bloqueio de anúncios, BETS, Cassinos, Malwares e Rastreadores'
    },
    {
      ip: '45.163.79.59',
      type: 'IPv4',
      icon: Shield,
      features: {
        ads: true,
        adult: false,
        status: 'active'
      },
      description: 'Bloqueio de anúncios, BETS, Cassinos, Malwares e Rastreadores'
    },
    {
      ip: '45.163.79.60',
      type: 'IPv4',
      icon: ShieldCheck,
      features: {
        ads: true,
        adult: true,
        status: 'active'
      },
      description: 'Proteção completa + Bloqueio de conteúdo adulto'
    },
    {
      ip: '45.163.79.61',
      type: 'IPv4',
      icon: ShieldCheck,
      features: {
        ads: true,
        adult: true,
        status: 'active'
      },
      description: 'Proteção completa + Bloqueio de conteúdo adulto'
    },
    {
      ip: '2804:52f0:810:2::58',
      type: 'IPv6',
      icon: Shield,
      features: {
        ads: true,
        adult: false,
        status: 'active'
      },
      description: 'Bloqueio de anúncios, BETS, Cassinos, Malwares e Rastreadores'
    },
    {
      ip: '2804:52f0:810:2::59',
      type: 'IPv6',
      icon: Shield,
      features: {
        ads: true,
        adult: false,
        status: 'active'
      },
      description: 'Bloqueio de anúncios, BETS, Cassinos, Malwares e Rastreadores'
    }
  ];

  const copyToClipboard = (ip: string) => {
    navigator.clipboard.writeText(ip);
    toast({
      title: "IP copiado!",
      description: `${ip} foi copiado para a área de transferência.`,
    });
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Servidores </span>
            <span className="text-secondary">DNS Agner</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Escolha o servidor DNS que melhor atende às suas necessidades. 
            Todos com proteção contra malware e alta disponibilidade.
          </p>
        </div>

        {/* IPv4 Servers */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Badge variant="secondary" className="mr-3 px-3 py-1">IPv4</Badge>
            Servidores IPv4 Agner DNS
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {servers.filter(server => server.type === 'IPv4').map((server, index) => (
              <Card key={index} className="glass-intense hover-lift group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-secondary/20">
                        <server.icon className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <CardTitle className="font-mono text-2xl text-secondary">
                          {server.ip}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {server.description}
                        </CardDescription>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(server.ip)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">
                        Bloqueio de anúncios, BETS, Cassinos, Malwares
                      </p>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span className="text-sm font-medium text-accent">Ativado</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">
                        Bloqueio de conteúdo adulto
                      </p>
                      <div className="flex items-center space-x-2">
                        {server.features.adult ? (
                          <>
                            <CheckCircle className="h-4 w-4 text-accent" />
                            <span className="text-sm font-medium text-accent">Ativado</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium text-muted-foreground">Desativado</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border/30">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow"></div>
                      <span className="text-sm font-medium text-accent">Servidor funcionando</span>
                    </div>
                    <Badge className="status-active">
                      Online
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* IPv6 Servers */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Badge variant="outline" className="mr-3 px-3 py-1 border-accent/30 text-accent">IPv6</Badge>
            Servidores IPv6 Agner DNS
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {servers.filter(server => server.type === 'IPv6').map((server, index) => (
              <Card key={index} className="glass-intense hover-lift group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-accent/20">
                        <server.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="font-mono text-lg text-accent break-all">
                          {server.ip}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {server.description}
                        </CardDescription>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(server.ip)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">
                      Bloqueio de anúncios, BETS, Cassinos, Malwares e Rastreadores
                    </p>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm font-medium text-accent">Ativado</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border/30">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow"></div>
                      <span className="text-sm font-medium text-accent">Servidor funcionando</span>
                    </div>
                    <Badge className="status-active">
                      Online
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Setup CTA */}
        <div className="text-center mt-16">
          <Card className="glass-intense max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Pronto para começar?</h3>
              <p className="text-muted-foreground mb-6">
                Configure o DNS Agner em seus dispositivos e navegue com segurança e velocidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-secondary hover:opacity-90" asChild>
                  <a href="/tutorial">Ver Tutorial de Configuração</a>
                </Button>
                <Button variant="outline" className="glass-card border-secondary/30" asChild>
                  <a href="/status">Testar Velocidade</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DNSServers;