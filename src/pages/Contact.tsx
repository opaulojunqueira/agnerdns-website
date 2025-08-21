import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  MessageCircle, 
  Phone, 
  Clock,
  MapPin,
  Send
} from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email de Suporte Técnico",
      description: "Para dúvidas técnicas e configuração",
      value: "help@agnerdns.com.br",
      action: "mailto:help@agnerdns.com.br",
      color: "secondary"
    },
    {
      icon: MessageCircle,
      title: "Email Geral",
      description: "Dúvidas gerais sobre o serviço",
      value: "contato@agnerdns.com.br",
      action: "mailto:contato@agnerdns.com.br",
      color: "accent"
    },
    {
      icon: Clock,
      title: "Atendimento por Email",
      description: "Respondemos em até 24h",
      value: "Segunda a Sexta",
      color: "orange"
    }
  ];

  const faqs = [
    {
      question: "Como configurar o DNS no meu dispositivo?",
      answer: "Acesse nossa página de tutorial com guias passo a passo para Android, Windows e roteadores."
    },
    {
      question: "O Agner DNS é realmente gratuito?",
      answer: "Sim! O Agner DNS é 100% gratuito para uso pessoal e doméstico."
    },
    {
      question: "Quais tipos de conteúdo são bloqueados?",
      answer: "Bloqueamos anúncios, malware, sites de apostas (bets), cassinos e opcionalmente conteúdo adulto."
    },
    {
      question: "O serviço funciona em todo o Brasil?",
      answer: "Sim, nossos servidores estão localizados no Brasil e atendem todo o território nacional."
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
              <span className="text-white">Entre em </span>
              <span className="text-secondary">Contato</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Estamos aqui para ajudar! Entre em contato conosco por email para qualquer dúvida, 
              sugestão ou suporte técnico. Respondemos em até 24 horas.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="glass-intense hover-lift group">
                <CardHeader className="text-center">
                  <div className={`p-4 rounded-xl bg-${method.color}/20 mx-auto w-fit mb-4`}>
                    <method.icon className={`h-8 w-8 text-${method.color}`} />
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  {method.action ? (
                    <Button 
                      className={`bg-gradient-${method.color} hover:opacity-90`}
                      asChild
                    >
                      <a href={method.action}>
                        {method.value}
                      </a>
                    </Button>
                  ) : (
                    <div>
                      <p className={`font-semibold text-${method.color} mb-1`}>{method.value}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card className="glass-intense">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Send className="h-6 w-6 text-secondary" />
                  <span>Envie uma Mensagem</span>
                </CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e retornaremos em breve
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" placeholder="Seu nome" className="glass-card" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" className="glass-card" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input id="subject" placeholder="Como podemos ajudar?" className="glass-card" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Descreva sua dúvida ou problema..."
                    className="glass-card min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full bg-gradient-secondary hover:opacity-90">
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info & FAQ */}
            <div className="space-y-8">
              
              {/* Quick Info */}
              <Card className="glass-intense">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-accent" />
                    <span>Informações</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-orange mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Atendimento por Email</p>
                      <p className="text-muted-foreground">Respondemos emails em até 24 horas</p>
                      <p className="text-muted-foreground">Segunda a Sexta: Resposta prioritária</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Localização</p>
                      <p className="text-muted-foreground">Servidores no Brasil</p>
                      <p className="text-muted-foreground">Suporte em português</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick FAQ */}
              <Card className="glass-intense">
                <CardHeader>
                  <CardTitle>Perguntas Frequentes</CardTitle>
                  <CardDescription>
                    Respostas rápidas para dúvidas comuns
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {faqs.slice(0, 3).map((faq, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-semibold text-sm">{faq.question}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                      {index < 2 && <hr className="border-border/30" />}
                    </div>
                  ))}
                  
                  <Button variant="outline" className="w-full glass-card border-secondary/30 mt-4" asChild>
                    <a href="/faq">
                      Ver Todas as Perguntas
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-intense max-w-2xl mx-auto text-center">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Suporte por Email</h3>
              <p className="text-muted-foreground mb-6">
                Envie sua dúvida por email e nossa equipe responderá em breve
              </p>
              <Button className="bg-gradient-secondary hover:opacity-90" size="lg" asChild>
                <a href="mailto:help@agnerdns.com.br">
                  <Mail className="h-5 w-5 mr-2" />
                  help@agnerdns.com.br
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

export default Contact;