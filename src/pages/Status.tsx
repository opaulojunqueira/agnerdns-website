import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StatusMonitor from '@/components/StatusMonitor';

const Status = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <StatusMonitor />
      </main>
      <Footer />
    </div>
  );
};

export default Status;