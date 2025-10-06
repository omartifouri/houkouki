import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ArabicNavigation from "@/components/ArabicNavigation";
import Footer from "@/components/Footer";

const ArEsprit = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white" dir="rtl">
      <ArabicNavigation />

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">روح Houkouki</h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-red-800">قناعتنا</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                في Houkouki، نؤمن بأن الوصول إلى القانون شرط أساسي للعدالة الاجتماعية. 
                في كثير من الأحيان، يجد الأشخاص الضعفاء أو المعزولون أو قليلو المعلومات أنفسهم وحدهم أمام 
                إجراءات قانونية معقدة.
              </p>
              <p className="text-gray-700 leading-relaxed">
                لهذا السبب اخترنا بناء منصة متاحة للجميع، أينما كانوا، 
                بسيطة ومفهومة، بدون مصطلحات معقدة أو حواجز إدارية، شاملة، بفضل آليات 
                المرافقة التضامنية.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-red-800">التزامنا</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed text-lg">
                <strong>قناعتنا:</strong> لا يجب أن يزيد القانون من عدم المساواة — بل يجب أن يصلحها.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ArEsprit;
