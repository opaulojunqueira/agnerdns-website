import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DNSServers from '@/components/DNSServers';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <DNSServers />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
