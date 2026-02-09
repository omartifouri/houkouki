import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Scale, Heart, Users, HandshakeIcon } from "lucide-react";
import talaqLogo from "@/assets/talaq-logo.png";

const Talaq = () => {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nom || !form.prenom || !form.telephone) {
      toast.error("Veuillez remplir les champs obligatoires.");
      return;
    }
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Votre demande a bien été envoyée. Nous vous recontacterons très prochainement.");
    setForm({ nom: "", prenom: "", telephone: "", email: "", message: "" });
    setLoading(false);
  };

  const services = [
    { icon: Scale, text: "Des conseils juridiques pour répondre à toutes vos questions." },
    { icon: Heart, text: "Des séances de psychologie individuelles." },
    { icon: Users, text: "Une thérapie de couple." },
    { icon: HandshakeIcon, text: "Une médiation si souhaitée." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(170,30%,95%)] to-white">
      {/* Hero */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <img src={talaqLogo} alt="Talaq - Soutien Psychologique et Juridique" className="h-24 md:h-32 mx-auto mb-10" />
          
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6">
            Le divorce est un moment difficile et complexe dans la vie d'une personne, tant sur le plan émotionnel que juridique. Pour vous aider à traverser cette épreuve, <strong>Houkouki</strong> et <strong>Psyphone</strong> s'associent pour vous offrir un accompagnement complet et personnalisé.
          </p>

          <p className="text-xl md:text-2xl font-semibold text-[hsl(170,40%,40%)] mb-4">
            Avec Talaq, bénéficiez d'un accompagnement complet pour traverser cette épreuve en toute sérénité.
          </p>

          <p className="text-base md:text-lg text-gray-600 italic max-w-2xl mx-auto">
            Si vous n'avez pas encore pris la décision de divorcer, nous pouvons vous aider à y voir plus clair et pourquoi pas à y remédier.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 px-4 bg-white/60">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
            Nous vous offrons
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(170,40%,60%)] to-[hsl(0,50%,70%)] flex items-center justify-center flex-shrink-0">
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700 text-base md:text-lg pt-2">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">
            Contactez-nous
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Remplissez le formulaire ci-dessous et nous vous recontacterons dans les plus brefs délais.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5 bg-white p-8 rounded-2xl shadow-md border border-gray-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nom">Nom *</Label>
                <Input id="nom" value={form.nom} onChange={(e) => handleChange("nom", e.target.value)} placeholder="Votre nom" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="prenom">Prénom *</Label>
                <Input id="prenom" value={form.prenom} onChange={(e) => handleChange("prenom", e.target.value)} placeholder="Votre prénom" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="telephone">Téléphone *</Label>
              <Input id="telephone" type="tel" value={form.telephone} onChange={(e) => handleChange("telephone", e.target.value)} placeholder="06 00 00 00 00" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="votre.email@exemple.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" value={form.message} onChange={(e) => handleChange("message", e.target.value)} placeholder="Décrivez brièvement votre situation..." rows={4} />
            </div>

            <Button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-[hsl(170,40%,50%)] to-[hsl(0,50%,65%)] hover:from-[hsl(170,40%,45%)] hover:to-[hsl(0,50%,60%)] text-white h-12 text-base">
              {loading ? "Envoi en cours..." : "Envoyer ma demande"}
            </Button>
          </form>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="py-8 text-center text-gray-400 text-sm border-t border-gray-100">
        <p>© {new Date().getFullYear()} Houkouki × Psyphone — Talaq, Soutien Psychologique et Juridique</p>
      </footer>
    </div>
  );
};

export default Talaq;
