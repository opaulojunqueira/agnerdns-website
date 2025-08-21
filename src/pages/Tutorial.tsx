import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Smartphone, 
  Monitor, 
  Router, 
  Download,
  Settings,
  Wifi,
  Mail,
  ArrowRight,
  CheckCircle,
  Copy
} from 'lucide-react';

const Tutorial = () => {
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "IP copiado!",
      description: `${text} foi copiado para a área de transferência.`,
    });
  };
  const tutorialSteps = {
    android: [
      {
        step: 1,
        title: "Acesse as Configurações de Wi-Fi",
        description: "Abra Configurações > Conexões > Wi-Fi (ou Configurações > Wi-Fi). Encontre sua rede conectada e toque no ícone de engrenagem ou no nome da rede."
      },
      {
        step: 2,
        title: "Modificar Configurações de Rede",
        description: "Toque em 'Avançado' ou 'Gerenciar rede', depois selecione 'Modificar rede' ou 'Editar'. Procure por 'Configurações de IP' ou 'Opções avançadas'."
      },
      {
        step: 3,
        title: "Configurar DNS Personalizado",
        description: "Altere 'Configuração de IP' para 'Estático'. Mantenha seu IP atual e modifique apenas DNS 1 (45.163.79.58) e DNS 2 (45.163.79.59). Salve as alterações."
      }
    ],
    windows: [
      {
        step: 1,
        title: "Acessar Configurações de Rede",
        description: "Windows 10/11: Vá em Configurações > Rede e Internet > Wi-Fi (ou Ethernet se usar cabo). Clique na conexão ativa para ver detalhes."
      },
      {
        step: 2,
        title: "Editar Propriedades de IP",
        description: "Clique em 'Propriedades' na sua conexão ativa. Procure por 'Configuração de IP' e clique em 'Editar' ao lado dela."
      },
      {
        step: 3,
        title: "Definir DNS Manual",
        description: "Altere para 'Manual', ative 'IPv4' e configure: DNS preferencial (45.163.79.58) e DNS alternativo (45.163.79.59). Para IPv6, use 2804:52f0:810:2::59 e 2804:52f0:810:2::60."
      }
    ],
    router: [
      {
        step: 1,
        title: "Acessar Interface do Roteador",
        description: "Digite no navegador: 192.168.1.1, 192.168.0.1, 192.168.15.1 (Vivo), 10.0.0.1 (Apple) ou o IP do seu gateway. Faça login com usuário/senha do roteador."
      },
      {
        step: 2,
        title: "Localizar Configurações DNS",
        description: "Procure por: 'DHCP', 'Rede Local/LAN', 'DNS Settings', 'Internet' ou 'WAN'. Cada marca tem nomes diferentes: TP-Link (Advanced/Network), Asus (LAN), Linksys (Smart Wi-Fi Tools)."
      },
      {
        step: 3,
        title: "Configurar Servidores DNS",
        description: "Configure DNS Primário (45.163.79.58) e Secundário (45.163.79.59). Mantenha DHCP ativo. Para IPv6: 2804:52f0:810:2::59 e 2804:52f0:810:2::60. Salve e reinicie o roteador."
      }
    ]
  };

  const dnsServers = [
    { ip: "45.163.79.58", type: "IPv4", protection: "Anúncios + Malware", color: "secondary" },
    { ip: "45.163.79.59", type: "IPv4", protection: "Anúncios + Malware", color: "secondary" },
    { ip: "45.163.79.60", type: "IPv4", protection: "Proteção Completa + Adulto", color: "orange" },
    { ip: "45.163.79.61", type: "IPv4", protection: "Proteção Completa + Adulto", color: "orange" },
    { ip: "2804:52f0:810:2::59", type: "IPv6", protection: "Anúncios + Malware", color: "accent" },
    { ip: "2804:52f0:810:2::60", type: "IPv6", protection: "Anúncios + Malware", color: "accent" },
    { ip: "2804:52f0:810:2::60", type: "IPv6", protection: "Proteção Completa + Adulto", color: "accent" },
    { ip: "2804:52f0:810:2::61", type: "IPv6", protection: "Proteção Completa + Adulto", color: "accent" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
      {/* Header */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Tutorial de </span>
              <span className="text-secondary">Configuração</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Configure o Agner DNS em seus dispositivos seguindo nossos guias passo a passo.
              Proteja toda sua rede em minutos.
            </p>
          </div>

          {/* DNS Servers Quick Reference */}
          <Card className="glass-intense max-w-4xl mx-auto mb-16">
            <CardHeader>
              <CardTitle className="text-center flex items-center justify-center space-x-3">
                <Settings className="h-6 w-6 text-secondary" />
                <span>Servidores DNS Agner</span>
              </CardTitle>
              <CardDescription className="text-center">
                Use estes IPs na configuração dos seus dispositivos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                {dnsServers.map((server, index) => (
                  <div key={index} className="flex items-center justify-between p-4 glass-card group">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <p className={`font-mono text-lg font-bold text-${server.color}`}>{server.ip}</p>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="opacity-0 group-hover:opacity-100 transition-opacity p-1 h-6 w-6"
                          onClick={() => copyToClipboard(server.ip)}
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground">{server.protection}</p>
                    </div>
                    <Badge variant="outline" className={`border-${server.color}/30 text-${server.color}`}>
                      {server.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tutorial Sections */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Android Tutorial */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-xl bg-secondary/20">
                <Smartphone className="h-8 w-8 text-secondary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Android</h2>
                <p className="text-muted-foreground">Configure DNS em dispositivos Android</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {tutorialSteps.android.map((step, index) => (
                <Card key={index} className="glass-intense hover-lift">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                        <span className="text-primary font-bold">{step.step}</span>
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="glass-card border-secondary/30">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Configuração Detalhada Android:</h3>
                    <p className="text-muted-foreground mb-4">
                      Acesse as configurações de seu celular e vá até a opção de edição do nome do Wi-Fi (SSID). 
                      Modifique para estático as configurações de IP, modifique os campos de DNS 1 e DNS 2 com os IPs do Agner DNS.
                    </p>
                    <Button variant="outline" className="border-secondary/30" asChild>
                      <a href="mailto:help@agnerdns.com.br">
                        <Mail className="h-4 w-4 mr-2" />
                        Precisa de ajuda?
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Separator className="bg-border/30" />

          {/* Windows Tutorial */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-xl bg-accent/20">
                <Monitor className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Windows</h2>
                <p className="text-muted-foreground">Configure DNS no Windows</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {tutorialSteps.windows.map((step, index) => (
                <Card key={index} className="glass-intense hover-lift">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                        <span className="text-primary font-bold">{step.step}</span>
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="glass-card border-accent/30">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Configuração Detalhada Windows:</h3>
                    <p className="text-muted-foreground mb-4">
                      Acesse as configurações do Windows e vá até a opção de edição do nome do Wi-Fi (SSID) ou Ethernet 
                      (caso esteja utilizando cabo). Modifique para manual as configurações de DNS, insira os campos de 
                      DNS preferencial e DNS alternativo com os IPs do Agner DNS.
                    </p>
                    <Button variant="outline" className="border-accent/30" asChild>
                      <a href="mailto:help@agnerdns.com.br">
                        <Mail className="h-4 w-4 mr-2" />
                        Precisa de ajuda?
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Separator className="bg-border/30" />

          {/* Router Tutorial */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-xl bg-orange/20">
                <Router className="h-8 w-8 text-orange" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Roteador</h2>
                <p className="text-muted-foreground">Melhor método - Protege toda a rede</p>
                <Badge className="status-active mt-2">Recomendado</Badge>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {tutorialSteps.router.map((step, index) => (
                <Card key={index} className="glass-intense hover-lift">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-orange flex items-center justify-center">
                        <span className="text-primary font-bold">{step.step}</span>
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="glass-card border-orange/30">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-orange mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">IPs Comuns de Roteadores por Operadora:</h3>
                    <div className="space-y-2 mb-4">
                      <p className="text-sm"><span className="font-semibold text-secondary">Vivo Fibra:</span> 192.168.15.1</p>
                      <p className="text-sm"><span className="font-semibold text-accent">TIM:</span> 192.168.1.1</p>
                      <p className="text-sm"><span className="font-semibold text-orange">Claro:</span> 192.168.0.1</p>
                      <p className="text-sm"><span className="font-semibold text-secondary">Oi:</span> 192.168.1.1</p>
                      <p className="text-sm"><span className="font-semibold text-accent">NET/Claro:</span> 192.168.0.1</p>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Cada roteador tem interface diferente. Procure por "DNS", "Servidor DNS", "DNS Settings" ou "Configurações WAN/Internet". 
                      Mantenha DHCP ativo e configure apenas os servidores DNS personalizados.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button variant="outline" className="border-orange/30" asChild>
                        <a href="mailto:help@agnerdns.com.br">
                          <Mail className="h-4 w-4 mr-2" />
                          Precisa de ajuda?
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-intense max-w-2xl mx-auto text-center">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ainda com dúvidas?</h3>
              <p className="text-muted-foreground mb-6">
                Nossa equipe está pronta para ajudar você a configurar o DNS Agner em qualquer dispositivo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-secondary hover:opacity-90" asChild>
                  <a href="mailto:help@agnerdns.com.br">
                    <Mail className="h-4 w-4 mr-2" />
                    Entrar em Contato
                  </a>
                </Button>
                <Button variant="outline" className="glass-card border-secondary/30" asChild>
                  <a href="/status">
                    Verificar Status dos Servidores
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </Button>
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

export default Tutorial;