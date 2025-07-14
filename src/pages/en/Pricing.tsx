import EnglishNavigation from "@/components/EnglishNavigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";

const EnPricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <EnglishNavigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the formula that best suits your needs. Simple, transparent and without hidden costs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Annual Subscription */}
          <Card className="bg-white p-6 border-2 border-[#C0997A] relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-[#C0997A] text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-[#C0997A] text-center">Annual Subscription</CardTitle>
              <div className="text-center">
                <span className="text-4xl font-bold text-gray-900">Contact us</span>
                <p className="text-gray-600 mt-2">for personalized pricing</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#C0997A] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Unlimited access to our legal professionals</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#C0997A] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Personalized support throughout the year</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#C0997A] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Priority handling of your cases</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#C0997A] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Access to our mobile application</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#C0997A] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Document drafting and review</span>
                </div>
              </div>
              <Button className="w-full bg-[#C0997A] hover:bg-[#B8926F]" asChild>
                <Link to="/en/contact">Choose Subscription</Link>
              </Button>
              <p className="text-sm text-gray-600 text-center mt-4">
                Ideal for individuals or businesses wanting continuous proximity service.
              </p>
            </CardContent>
          </Card>

          {/* À la carte */}
          <Card className="bg-white p-6">
            <CardHeader>
              <CardTitle className="text-2xl text-red-800 text-center">À la carte</CardTitle>
              <div className="text-center">
                <span className="text-4xl font-bold text-gray-900">From</span>
                <p className="text-gray-600 mt-2">Variable pricing per service</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">One-time legal consultation</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Document drafting</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Administrative procedures</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Dispute management</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Legal document audit</span>
                </div>
              </div>
              <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white" asChild>
                <Link to="/en/quote">Request a Quote</Link>
              </Button>
              <p className="text-sm text-gray-600 text-center mt-4">
                Pay only for what you need.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-4">
            Need help choosing? Our team is here to guide you.
          </p>
          <Button size="lg" variant="outline" asChild>
            <Link to="/en/contact">Contact Our Team</Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default EnPricing;