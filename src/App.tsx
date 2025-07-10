
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
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
import FrImpact from "./pages/fr/Impact";
import FrBlog from "./pages/fr/Blog";
import FrDevis from "./pages/fr/Devis";
import FrContact from "./pages/fr/Contact";
import FrCGU from "./pages/fr/CGU";
import FrCGV from "./pages/fr/CGV";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/create-cv" element={<CreateCV />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/questionnaire" element={<Questionnaire />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Routes françaises (juridique) */}
            <Route path="/fr" element={<FrAccueil />} />
            <Route path="/fr/esprit" element={<FrEsprit />} />
            <Route path="/fr/qui-sommes-nous" element={<FrQuiSommesNous />} />
            <Route path="/fr/approche" element={<FrApproche />} />
            <Route path="/fr/offre" element={<FrOffre />} />
            <Route path="/fr/profils" element={<FrProfils />} />
            <Route path="/fr/prestations" element={<FrPrestations />} />
            <Route path="/fr/domaines" element={<FrDomaines />} />
            <Route path="/fr/tarifs" element={<FrTarifs />} />
            <Route path="/fr/impact" element={<FrImpact />} />
            <Route path="/fr/blog" element={<FrBlog />} />
            <Route path="/fr/devis" element={<FrDevis />} />
            <Route path="/fr/contact" element={<FrContact />} />
            <Route path="/fr/cgu" element={<FrCGU />} />
            <Route path="/fr/cgv" element={<FrCGV />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
