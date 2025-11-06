import { Card } from "@/components/ui/card";
import FrenchNavigation from "@/components/FrenchNavigation";
import Footer from "@/components/Footer";
import { Calendar, Users, ArrowRight } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface BlogArticle {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

const FrBlog = () => {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  // Articles temporaires - à remplacer par les vrais articles
  const articles: BlogArticle[] = [
    {
      id: 1,
      title: "Covid 19 : L'impact sur la relation locative",
      excerpt: "Après avoir déclaré le 20 mars 2020 l'état d'urgence sanitaire au Maroc pour lutter contre le Corona virus, les autorités se sont efforcées de prendre un ensemble de mesures proactives pour limiter la propagation de la pandémie...",
      date: "25/03/2020",
      image: "/lovable-uploads/covid-impact-locatif.png",
      category: "Jamila Alami"
    },
    {
      id: 2,
      title: "Prolongation exceptionnelle : La CNSS accorde des remises sur les pénalités et frais de retard jusqu'au 15 janvier 2025",
      excerpt: "Prolongation exceptionnelle : La CNSS accorde des remises sur les pénalités et frais de retard jusqu'au 15 janvier 2025",
      date: "10/01/2025",
      image: "/lovable-uploads/4202db25-ce0c-415f-b72b-0766f38e24fb.png",
      category: "Équipe HOUKOUKI"
    },
    {
      id: 3,
      title: "Mesures d'assouplissement et de simplification du régime des voyages pour études à l'étranger",
      excerpt: "Mesures d'assouplissement et de simplification du régime des voyages pour études à l'étranger",
      date: "10/01/2025",
      image: "/lovable-uploads/52bc0c0c-34a4-4850-b667-a57ab1fe2408.png",
      category: "Équipe HOUKOUKI"
    },
    {
      id: 4,
      title: "E-Police : La nouvelle plateforme numérique de la DGSN pour simplifier les services policiers au Maroc",
      excerpt: "E-Police",
      date: "01/02/2024",
      image: "/lovable-uploads/5d7e7c1c-ebd4-4271-a028-9798957bf332.png",
      category: "Équipe HOUKOUKI"
    },
    {
      id: 5,
      title: "Le Maroc renforce sa posture face aux menaces numériques",
      excerpt: "Le Maroc renforce sa posture face aux menaces numériques",
      date: "07/01/2024",
      image: "/lovable-uploads/746a9b0d-7942-4f17-9351-aaeff6fff194.png",
      category: "Équipe HOUKOUKI"
    },
    {
      id: 6,
      title: "Bonne nouvelle pour les mamans ! Chaque jour, HOUKOUKI vous donne l'actualité juridique qui vous intéresse.",
      excerpt: "Bonne nouvelle pour les mamans ! Chaque jour, HOUKOUKI vous donne l'actualité juridique qui vous intéresse.",
      date: "02/01/2024",
      image: "/lovable-uploads/a2e35cca-9c41-4eed-b0c7-c784e87900a7.png",
      category: "Équipe HOUKOUKI"
    },
    {
      id: 7,
      title: "Plongez au cœur de la révolution numérique avec la nouvelle initiative du SDG !!",
      excerpt: "Plongez au cœur de la révolution numérique avec la nouvelle initiative du SDG !!",
      date: "29/01/2024",
      image: "/lovable-uploads/c63a7edf-1f1a-44b0-bcf7-220fe7f4b232.png",
      category: "Équipe HOUKOUKI"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <FrenchNavigation />
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">La minute de HOUKOUKI</h1>
          <div className="w-32 h-1 bg-red-500 mx-auto"></div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              {/* Article Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                {/* Date and Category Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex items-center justify-between text-white text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{article.category}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-3 min-h-[4.5rem]">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <button 
                  onClick={() => setSelectedArticle(article)}
                  className="text-red-500 font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Voir plus
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      <Dialog open={!!selectedArticle} onOpenChange={() => setSelectedArticle(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          {selectedArticle && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900">
                  {selectedArticle.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedArticle.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{selectedArticle.category}</span>
                  </div>
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {selectedArticle.excerpt}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default FrBlog;