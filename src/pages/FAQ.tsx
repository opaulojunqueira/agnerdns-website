import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  HelpCircle, 
  Settings, 
  Shield, 
  Zap, 
  Globe,
  Mail,
  ArrowRight
} from 'lucide-react';

const FAQ = () => {
  const faqCategories = [
    {
      category: "Configuração",
      icon: Settings,
      color: "secondary",
      items: [
        {
          question: "Como configurar o DNS no Android?",
          answer: "Acesse Configurações > Wi-Fi, toque no nome da sua rede, selecione 'Modificar', mude para 'IP Estático' e configure os campos DNS 1 e DNS 2 com os IPs do Agner DNS."
        },
        {
          question: "Como configurar o DNS no Windows?",
          answer: "Vá em Configurações > Rede e Internet > Wi-Fi/Ethernet, clique em 'Propriedades', mude para 'Manual' e insira os IPs do Agner DNS nos campos DNS preferencial e alternativo."
        },
        {
          question: "Como configurar no roteador?",
          answer: "Acesse o painel do roteador (192.168.1.1 ou 192.168.0.1), procure por configurações de DHCP/LAN, mantenha o DHCP habilitado e configure os campos de DNS com os IPs do Agner DNS."
        },
        {
          question: "Posso usar em dispositivos móveis?",
          answer: "Sim! O Agner DNS funciona em qualquer dispositivo que permita configuração manual de DNS, incluindo smartphones, tablets, computadores e roteadores."
        }
      ]
    },
    {
      category: "Proteção",
      icon: Shield,
      color: "accent",
      items: [
        {
          question: "Quais tipos de conteúdo são bloqueados?",
          answer: "Bloqueamos anúncios invasivos, malware, phishing, sites de apostas (bets), cassinos online, rastreadores e, opcionalmente, conteúdo adulto (servidores específicos)."
        },
        {
          question: "Como funciona o bloqueio de malware?",
          answer: "Nosso sistema analisa requisições DNS em tempo real e bloqueia domínios conhecidos por distribuir malware, vírus ou realizar ataques de phishing."
        },
        {
          question: "O que são os servidores com proteção para crianças?",
          answer: "Os servidores 45.163.79.60 e 45.163.79.61 incluem bloqueio adicional de conteúdo adulto, violência e outros materiais inadequados para menores."
        },
        {
          question: "O bloqueio afeta a velocidade de navegação?",
          answer: "Não! Na verdade, ao bloquear anúncios e conteúdo desnecessário, você pode experimentar uma navegação mais rápida e econômica em dados."
        }
      ]
    },
    {
      category: "Funcionamento",
      icon: Zap,
      color: "orange",
      items: [
        {
          question: "O Agner DNS é realmente gratuito?",
          answer: "Sim! O serviço é 100% gratuito para uso pessoal e doméstico. Mantemos o serviço através de parcerias e nossa paixão por uma internet mais segura."
        },
        {
          question: "Onde estão localizados os servidores?",
          answer: "Todos os nossos servidores estão fisicamente localizados no Brasil, garantindo baixa latência e conformidade com as leis brasileiras."
        },
        {
          question: "Qual a diferença entre IPv4 e IPv6?",
          answer: "IPv4 usa endereços de 4 números (ex: 45.163.79.58), enquanto IPv6 usa endereços mais longos (ex: 2804:52f0:810:2::58). Use IPv4 se não tiver certeza."
        },
        {
          question: "Como verificar se está funcionando?",
          answer: "Após configurar, acesse nossa página de status ou tente visitar um site que costuma ter muitos anúncios. Se os anúncios sumirem, está funcionando!"
        }
      ]
    },
    {
      category: "Suporte",
      icon: Globe,
      color: "secondary",
      items: [
        {
          question: "Como entrar em contato para suporte?",
          answer: "Envie um email para help@agnerdns.com.br com sua dúvida. Nossa equipe responde em até 24 horas durante dias úteis."
        },
        {
          question: "Posso usar em empresa/escritório?",
          answer: "Sim! O Agner DNS é excelente para uso corporativo, oferecendo proteção adicional contra malware e controle de acesso a sites inadequados."
        },
        {
          question: "O serviço tem garantia de funcionamento?",
          answer: "Mantemos 99.9% de uptime e monitoramento 24/7. Em caso de problemas, você pode alternar entre nossos diferentes servidores."
        },
        {
          question: "Posso voltar ao DNS anterior?",
          answer: "Claro! Basta reverter as configurações de DNS para 'Automático' ou usar os DNS do seu provedor. A mudança é instantânea."
        }
      ]
    }
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
              <span className="text-white">Perguntas </span>
              <span className="text-secondary">Frequentes</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Encontre respostas para as dúvidas mais comuns sobre o Agner DNS. 
              Se sua pergunta não estiver aqui, entre em contato conosco.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`p-3 rounded-xl bg-${category.color}/20`}>
                    <category.icon className={`h-8 w-8 text-${category.color}`} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{category.category}</h2>
                    <p className="text-muted-foreground">
                      {category.items.length} pergunta{category.items.length > 1 ? 's' : ''}
                    </p>
                  </div>
                </div>

                <Card className="glass-intense">
                  <CardContent className="p-6">
                    <Accordion type="single" collapsible className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <AccordionItem 
                          key={itemIndex} 
                          value={`${categoryIndex}-${itemIndex}`}
                          className="border-border/30"
                        >
                          <AccordionTrigger className="text-left hover:text-secondary transition-colors">
                            <div className="flex items-center space-x-3">
                              <HelpCircle className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                              <span>{item.question}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed pl-8">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            
            {/* Contact Support */}
            <Card className="glass-intense text-center">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-3">
                  <Mail className="h-6 w-6 text-secondary" />
                  <span>Ainda com dúvidas?</span>
                </CardTitle>
                <CardDescription>
                  Nossa equipe está pronta para ajudar
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Se você não encontrou a resposta que procurava, entre em contato conosco diretamente.
                </p>
                <Button className="bg-gradient-secondary hover:opacity-90 w-full" asChild>
                  <a href="/contact">
                    <Mail className="h-4 w-4 mr-2" />
                    Entrar em Contato
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Quick Setup */}
            <Card className="glass-intense text-center">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-3">
                  <Settings className="h-6 w-6 text-accent" />
                  <span>Pronto para começar?</span>
                </CardTitle>
                <CardDescription>
                  Configure o DNS em poucos minutos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Siga nosso tutorial passo a passo para configurar o Agner DNS em seus dispositivos.
                </p>
                <Button variant="outline" className="glass-card border-accent/30 w-full" asChild>
                  <a href="/tutorial">
                    Ver Tutorial
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* DNS Servers Quick Reference */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-intense max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Servidores DNS Agner - Referência Rápida</CardTitle>
              <CardDescription className="text-center">
                Use estes IPs para configurar em seus dispositivos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 glass-card">
                    <span className="font-mono text-secondary">45.163.79.58</span>
                    <Badge variant="outline" className="border-secondary/30 text-secondary">
                      Anúncios + Malware
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 glass-card">
                    <span className="font-mono text-secondary">45.163.79.59</span>
                    <Badge variant="outline" className="border-secondary/30 text-secondary">
                      Anúncios + Malware
                    </Badge>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 glass-card">
                    <span className="font-mono text-orange">45.163.79.60</span>
                    <Badge variant="outline" className="border-orange/30 text-orange">
                      Proteção Completa
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 glass-card">
                    <span className="font-mono text-orange">45.163.79.61</span>
                    <Badge variant="outline" className="border-orange/30 text-orange">
                      Proteção Completa
                    </Badge>
                  </div>
                </div>
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

export default FAQ;