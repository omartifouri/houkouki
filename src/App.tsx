
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import FloatingRDVButton from "@/components/FloatingRDVButton";
import ScrollToTop from "@/components/ScrollToTop";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import CreateCV from "./pages/CreateCV";
import Booking from "./pages/Booking";
import Questionnaire from "./pages/Questionnaire";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
// Pages française (juridique)
import FrAccueil from "./pages/fr/Accueil";
import FrEsprit from "./pages/fr/Esprit";
import FrQuiSommesNous from "./pages/fr/QuiSommesNous";
import FrApproche from "./pages/fr/Approche";
import FrOffre from "./pages/fr/Offre";
import FrProfils from "./pages/fr/Profils";
import FrPrestations from "./pages/fr/Prestations";
import FrDomaines from "./pages/fr/Domaines";
import FrTarifs from "./pages/fr/Tarifs";

import FrBlog from "./pages/fr/Blog";
import FrContact from "./pages/fr/Contact";
import FrCGU from "./pages/fr/CGU";
import FrCGV from "./pages/fr/CGV";
import FrRSE from "./pages/fr/RSE";
import Souscription from "./pages/Souscription";
import LpConsultation from "./pages/LpConsultation";
import LpConsultationAr from "./pages/LpConsultationAr";
import ConseilEnFinancement from "./pages/ConseilEnFinancement";

// Pages à la racine (HOUKOUKI)
import Accueil from "./pages/Accueil";
import Esprit from "./pages/Esprit";
import QuiSommesNous from "./pages/QuiSommesNous";
import Approche from "./pages/Approche";
import Offre from "./pages/Offre";
import Profils from "./pages/Profils";
import Prestations from "./pages/Prestations";
import Domaines from "./pages/Domaines";
import Tarifs from "./pages/Tarifs";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <FloatingRDVButton />
          <Routes>
            {/* Routes HOUKOUKI à la racine */}
            <Route path="/" element={<Index />} />
            <Route path="/accueil" element={<Accueil />} />
            <Route path="/esprit" element={<Esprit />} />
            <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
            <Route path="/approche" element={<Approche />} />
            <Route path="/offre" element={<Offre />} />
            <Route path="/profils" element={<Profils />} />
            <Route path="/prestations" element={<Prestations />} />
            <Route path="/domaines" element={<Domaines />} />
            <Route path="/tarifs" element={<Tarifs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cgu" element={<FrCGU />} />
            <Route path="/cgv" element={<FrCGV />} />
            {/* Maintien des anciennes routes françaises pour la transition */}
            <Route path="/fr" element={<FrAccueil />} />
            <Route path="/fr/esprit" element={<FrEsprit />} />
            <Route path="/fr/qui-sommes-nous" element={<FrQuiSommesNous />} />
            <Route path="/fr/approche" element={<FrApproche />} />
            <Route path="/fr/offre" element={<FrOffre />} />
            <Route path="/fr/profils" element={<FrProfils />} />
            <Route path="/fr/prestations" element={<FrPrestations />} />
            <Route path="/fr/domaines" element={<FrDomaines />} />
            <Route path="/fr/tarifs" element={<FrTarifs />} />
            <Route path="/fr/blog" element={<FrBlog />} />
            <Route path="/fr/contact" element={<FrContact />} />
            <Route path="/fr/rse" element={<FrRSE />} />
            <Route path="/fr/cgu" element={<FrCGU />} />
            <Route path="/fr/cgv" element={<FrCGV />} />
            <Route path="/souscription" element={<Souscription />} />
            <Route path="/lp-consultation" element={<LpConsultation />} />
            <Route path="/lp-consultation-ar" element={<LpConsultationAr />} />
            <Route path="/conseil-en-financement" element={<ConseilEnFinancement />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
