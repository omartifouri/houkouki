import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";
import ArabicNavigation from "@/components/ArabicNavigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const ArContact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white" dir="rtl">
      <ArabicNavigation />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">تواصل مع Houkouki</h1>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>أرسل لنا رسالة</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">اتصل بنا</p>
                    <p className="text-gray-600" dir="ltr">+212.(0)529.045.999</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">راسلنا عبر البريد الإلكتروني</p>
                    <p className="text-gray-600">contact@houkouki.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArContact;
