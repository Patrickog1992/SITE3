import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Maria S.",
    avatar: "https://picsum.photos/100/100?random=1",
    testimonial: "Minhas unhas nunca estiveram tão saudáveis! Depois de anos tentando de tudo, finalmente encontrei um tratamento que funciona. Super recomendo!",
    aiHint: "woman portrait"
  },
  {
    name: "João P.",
    avatar: "https://picsum.photos/100/100?random=2",
    testimonial: "No começo eu duvidei, mas os resultados são incríveis. O fungo desapareceu completamente e minhas unhas estão fortes de novo. Valeu cada centavo!",
    aiHint: "man portrait"
  },
  {
    name: "Ana C.",
    avatar: "https://picsum.photos/100/100?random=3",
    testimonial: "Estou muito feliz com o resultado. É um alívio poder usar sandálias sem sentir vergonha das minhas unhas. O tratamento é simples e eficaz.",
    aiHint: "woman smiling"
  },
    {
    name: "Carlos L.",
    avatar: "https://picsum.photos/100/100?random=4",
    testimonial: "Funciona mesmo! Já tinha gastado muito dinheiro com outros produtos que não resolveram. Este tratamento foi a solução definitiva para mim.",
    aiHint: "man happy"
  },
];

const Testimonials = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Comentários
      </h2>
      <div className="flex flex-col gap-6">
        {testimonials.map((item, index) => (
          <div key={index} className="flex items-start gap-4 p-4 bg-gray-100 rounded-lg">
            <Avatar>
              <AvatarImage src={item.avatar} alt={item.name} data-ai-hint={item.aiHint}/>
              <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="font-bold text-sm text-gray-800">{item.name}</p>
              <p className="text-gray-700 mt-1">{item.testimonial}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
