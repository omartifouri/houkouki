import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Scale, FileText, Calendar, Shield, CheckCircle, Star, ArrowRight, Phone, Video, MessageCircle, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import EnglishNavigation from "@/components/EnglishNavigation";
import Footer from "@/components/Footer";
import CareerSupportPopup from "@/components/CareerSupportPopup";

const EnHome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Header/Navbar */}
      <EnglishNavigation />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-red-100 text-red-800 border-red-200 text-xl px-8 py-3">
            Your rights, our mission.
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Legal support that's<br />
            <span className="text-red-600">simple, fast and human</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Wherever you are, benefit from the expertise of our legal professionals to advise, guide, and protect your interests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Link to="/en/contact">
                Get Started Now
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link to="/en/quote">
                Request a Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Houkouki */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why choose Houkouki?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-red-100 hover:border-red-300 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-beige to-brand-beige rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-red-800">Remote Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Accessible by phone, video conference or WhatsApp, wherever you are.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-100 hover:border-red-300 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-beige to-brand-beige rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-red-800">Personalized Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Legal advice tailored to your situation, analysis and drafting of documents, assistance with procedures.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-100 hover:border-red-300 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-beige to-brand-beige rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-red-800">Guaranteed Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Absolute confidentiality and mobile application to track everything in real time.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-4">
              <strong>HOUKOUKI Moroccan Law Specialists</strong>, serving individuals, businesses and Moroccans around the world
            </p>
          </div>
        </div>
      </section>

      {/* Service Presentation */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              Houkouki is a Moroccan remote legal consultation platform, dedicated to all those who wish to anticipate, understand, defend and exercise their rights without stress or loss of time.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                We support you through:
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#C0997A] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Customized legal consultations delivered by specialized legal professionals</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#C0997A] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Drafting and auditing of your legal documents</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#C0997A] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Handling your administrative procedures</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#C0997A] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Amicable management or judicial coordination of your disputes, if necessary</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#C0997A] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Secure access to our services via our mobile application</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#C0997A] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Strategic financing consultation & support</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                Our commitment: to make law simpler, faster, more human.
              </p>
              <p className="text-lg text-[#C0997A] font-medium">
                Looking for a trusted partner?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your legal needs and discover how we can help you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#C0997A] hover:bg-[#B8926F]">
              <Link to="/en/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link to="/en/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <CareerSupportPopup />
    </div>
  );
};

export default EnHome;