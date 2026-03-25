import Header from './components/Header';
import Hero from './components/Hero';
import DespreNoi from './components/DespreNoi';
import MisiuneValori from './components/MisiuneValori';
import ParcursEducational from './components/ParcursEducational';
import Facilitati from './components/Facilitati';
import Activitati from './components/Activitati';
import ProgrameTarife from './components/ProgrameTarife';
import BazinInot from './components/BazinInot';
import Inscriere from './components/Inscriere';
import ViataScoala from './components/ViataScoala';
import AparitiiMedia from './components/AparitiiMedia';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="font-sans bg-[#FFFBF5] overflow-x-clip">
      <Header />
      <Hero />
      <DespreNoi />
      <MisiuneValori />
      <ParcursEducational />
      <Facilitati />
      <Activitati />
      <ProgrameTarife />
      <BazinInot />
      <Inscriere />
      <ViataScoala />
      <AparitiiMedia />
      <Contact />
      <Footer />
    </main>
  );
}
