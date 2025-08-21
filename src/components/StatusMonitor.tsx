import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Activity, Server, Zap, Shield, Globe, Clock } from 'lucide-react';

const StatusMonitor = () => {
  const serverStats = [
    {
      id: '45.163.79.58',
      name: 'DNS-BR-01',
      location: 'São Paulo, BR',
      uptime: 99.97,
      latency: 12,
      requests: '2.4M',
      status: 'online',
      load: 45
    },
    {
      id: '45.163.79.59',
      name: 'DNS-BR-02',
      location: 'São Paulo, BR',
      uptime: 99.95,
      latency: 14,
      requests: '2.1M',
      status: 'online',
      load: 38
    },
    {
      id: '45.163.79.60',
      name: 'DNS-BR-03',
      location: 'Rio de Janeiro, BR',
      uptime: 99.99,
      latency: 11,
      requests: '1.8M',
      status: 'online',
      load: 32
    },
    {
      id: '45.163.79.61',
      name: 'DNS-BR-04',
      location: 'Rio de Janeiro, BR',
      uptime: 99.94,
      latency: 13,
      requests: '1.9M',
      status: 'online',
      load: 41
    }
  ];

  const globalStats = {
    totalRequests: '8.2M',
    avgLatency: 12.5,
    blockedThreats: '156K',
    uptime: 99.96
  };

  return (
    <section id="status" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Status dos </span>
            <span className="text-secondary">Servidores</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Monitoramento em tempo real de todos os nossos servidores DNS. 
            Transparência total no desempenho e disponibilidade.
          </p>
        </div>

        {/* Global Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="glass-intense">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-secondary/20">
                  <Activity className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-secondary">{globalStats.uptime}%</p>
                  <p className="text-sm text-muted-foreground">Uptime Global</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-intense">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-accent/20">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent">{globalStats.avgLatency}ms</p>
                  <p className="text-sm text-muted-foreground">Latência Média</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-intense">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-orange/20">
                  <Globe className="h-6 w-6 text-orange" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-orange">{globalStats.totalRequests}</p>
                  <p className="text-sm text-muted-foreground">Consultas (24h)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-intense">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-destructive/20">
                  <Shield className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-destructive">{globalStats.blockedThreats}</p>
                  <p className="text-sm text-muted-foreground">Ameaças Bloqueadas</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Server Details */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold flex items-center">
            <Server className="h-6 w-6 mr-3 text-secondary" />
            Detalhes dos Servidores
          </h3>

          <div className="grid lg:grid-cols-2 gap-6">
            {serverStats.map((server, index) => (
              <Card key={index} className="glass-intense hover-lift">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center space-x-3">
                        <span className="font-mono text-secondary">{server.id}</span>
                        <Badge className="status-active">{server.status}</Badge>
                      </CardTitle>
                      <CardDescription>
                        {server.name} • {server.location}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="w-3 h-3 bg-accent rounded-full animate-pulse-glow"></div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Performance Metrics */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-lg font-bold text-accent">{server.uptime}%</p>
                      <p className="text-xs text-muted-foreground">Uptime</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-secondary">{server.latency}ms</p>
                      <p className="text-xs text-muted-foreground">Latência</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-orange">{server.requests}</p>
                      <p className="text-xs text-muted-foreground">Consultas</p>
                    </div>
                  </div>

                  {/* Load Indicator */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">Carga do Servidor</span>
                      <span className="text-sm font-medium text-accent">{server.load}%</span>
                    </div>
                    <Progress 
                      value={server.load} 
                      className="h-2"
                    />
                  </div>

                  {/* Status Details */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/30">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Última verificação: agora</span>
                    </div>
                    <Badge variant="outline" className="border-accent/30 text-accent">
                      Operacional
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Status Legend */}
        <div className="mt-12 text-center">
          <Card className="glass-intense max-w-2xl mx-auto">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold mb-4">Status em Tempo Real</h4>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse-glow"></div>
                  <span className="text-sm">Online</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange rounded-full"></div>
                  <span className="text-sm">Manutenção</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <span className="text-sm">Offline</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Atualizações automáticas a cada 30 segundos
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StatusMonitor;