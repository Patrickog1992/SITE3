import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThumbsUp, Heart } from "lucide-react";

const testimonials = [
  {
    name: "Maria S.",
    avatar: "https://i.imgur.com/Sza1ZfT.png",
    testimonial: "Minhas unhas nunca estiveram tão saudáveis! Depois de anos tentando de tudo, finalmente encontrei um tratamento que funciona. Super recomendo!",
    aiHint: "woman portrait",
    likes: 121,
  },
  {
    name: "João P.",
    avatar: "https://i.imgur.com/Q4YNBDL.jpeg",
    testimonial: "No começo eu duvidei, mas os resultados são incríveis. O fungo desapareceu completamente e minhas unhas estão fortes de novo. Valeu cada centavo!",
    aiHint: "man portrait",
    likes: 98,
  },
  {
    name: "Ana C.",
    avatar: "https://i.imgur.com/i7beDqx.jpeg",
    testimonial: "Estou muito feliz com o resultado. É um alívio poder usar sandálias sem sentir vergonha das minhas unhas. O tratamento é simples e eficaz.",
    aiHint: "woman smiling",
    likes: 154,
  },
    {
    name: "Carlos L.",
    avatar: "https://i.imgur.com/jF1410J.jpeg",
    testimonial: "Funciona mesmo! Já tinha gastado muito dinheiro com outros produtos que não resolveram. Este tratamento foi a solução definitiva para mim.",
    aiHint: "man happy",
    likes: 77,
  },
  {
    name: "Sandra F.",
    avatar: "https://i.imgur.com/GJZpDHa.png",
    testimonial: "Resultados visíveis em poucas semanas. Minha autoestima melhorou muito. Recomendo a todas as minhas amigas que passam pelo mesmo problema.",
    aiHint: "woman portrait happy",
    likes: 82,
  },
  {
    name: "Roberto A.",
    avatar: "https://i.imgur.com/bHTJFVo.png",
    testimonial: "O melhor investimento que fiz para minha saúde. Simples, prático e com resultados que eu não esperava. Adeus, fungos!",
    aiHint: "man smiling portrait",
    likes: 65,
  },
];

const Testimonials = () => {
  return (
    <section className="py-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          6 Comentários
        </h2>
        <p className="text-sm text-gray-600">
          Mostrando 6 comentários
        </p>
      </div>
      <div className="flex flex-col gap-6">
        {testimonials.map((item, index) => (
          <div key={index} className="flex items-start gap-4 p-4 bg-gray-100 rounded-lg">
            <Avatar>
              <AvatarImage src={item.avatar} alt={item.name} data-ai-hint={item.aiHint}/>
              <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
                <div className="bg-gray-200 rounded-xl p-3">
                    <p className="font-bold text-sm text-gray-800">{item.name}</p>
                    <p className="text-gray-700 mt-1">{item.testimonial}</p>
                </div>
                <div className="flex items-center gap-2 mt-2 px-3 text-xs text-gray-600">
                    <button className="hover:underline">Curtir</button>
                    <span>·</span>
                    <button className="hover:underline">Responder</button>
                    <div className="flex items-center gap-1 ml-auto">
                        <ThumbsUp size={14} className="text-blue-600" />
                        <Heart size={14} className="text-red-600 fill-red-600" />
                        <span>{item.likes}</span>
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
