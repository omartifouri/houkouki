import ArabicNavigation from "@/components/ArabicNavigation";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ArContact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white" dir="rtl">
      <ArabicNavigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            اتصل بنا
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            مستعدون لحماية حقوقكم؟ فريقنا القانوني هنا لمساعدتكم. اتصلوا بنا للحصول على استشارة مخصصة.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                تواصل معنا
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-red-600" />
                  <div>
                    <p className="font-medium text-gray-900">الهاتف</p>
                    <p className="text-gray-600">0529 045 999</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-red-600" />
                  <div>
                    <p className="font-medium text-gray-900">البريد الإلكتروني</p>
                    <p className="text-gray-600">contact@houkouki.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-red-600" />
                  <div>
                    <p className="font-medium text-gray-900">ساعات العمل</p>
                    <p className="text-gray-600">من الاثنين إلى الجمعة: 9 صباحاً - 7 مساءً</p>
                    <p className="text-gray-600">السبت: 9 صباحاً - 1 ظهراً</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-red-600" />
                  <div>
                    <p className="font-medium text-gray-900">الموقع</p>
                    <p className="text-gray-600">المغرب</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm>
              <Button className="w-full bg-red-600 hover:bg-red-700">
                إرسال الرسالة
              </Button>
            </ContactForm>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ArContact;