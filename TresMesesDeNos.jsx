
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Calendar, Smile } from "lucide-react";

export default function TresMesesDeNos() {
  return (
    <div className="min-h-screen bg-pink-50 p-6 flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold text-pink-600 mb-4 animate-bounce">
        3 Meses de Amor ❤️
      </h1>
      <p className="text-lg text-gray-700 max-w-xl mb-8">
        Bruno Fernandes, há 3 meses começamos essa linda jornada. Cada dia ao seu lado é uma bênção, e eu sou imensamente grato por tudo que vivemos até aqui. Esse site é uma pequena homenagem ao nosso amor. 
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="bg-white shadow-xl rounded-2xl p-4">
          <CardContent>
            <Heart className="text-red-500 w-10 h-10 mx-auto mb-2" />
            <h2 className="text-xl font-semibold mb-1">Nosso Amor</h2>
            <p className="text-gray-600">
              Cresce a cada sorriso, abraço e palavra de carinho. Três meses que parecem três vidas.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-xl rounded-2xl p-4">
          <CardContent>
            <Calendar className="text-blue-500 w-10 h-10 mx-auto mb-2" />
            <h2 className="text-xl font-semibold mb-1">Nossa História</h2>
            <p className="text-gray-600">
              Desde o primeiro "oi" até os planos para o futuro, tudo tem sido especial.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-xl rounded-2xl p-4">
          <CardContent>
            <Smile className="text-yellow-500 w-10 h-10 mx-auto mb-2" />
            <h2 className="text-xl font-semibold mb-1">Nossos Momentos</h2>
            <p className="text-gray-600">
              As risadas, os olhares e os momentos simples que fazem tudo valer a pena.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
        <img src="/images/1.jpg" alt="Foto 1" className="rounded-2xl shadow-md" />
        <img src="/images/2.jpg" alt="Foto 2" className="rounded-2xl shadow-md" />
        <img src="/images/3.jpg" alt="Foto 3" className="rounded-2xl shadow-md" />
        <img src="/images/4.jpg" alt="Foto 4" className="rounded-2xl shadow-md" />
        <img src="/images/5.jpg" alt="Foto 5" className="rounded-2xl shadow-md" />
      </div>

      <footer className="mt-10 text-sm text-gray-500">
        Feito com amor por Thomaz William para Bruno Fernandes ❤️
      </footer>
    </div>
  );
}
