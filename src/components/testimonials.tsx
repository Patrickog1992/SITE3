import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Maria S.",
    avatar: "https://picsum.photos/100/100?random=1",
    rating: 5,
    testimonial: "Minhas unhas nunca estiveram tão saudáveis! Depois de anos tentando de tudo, finalmente encontrei um tratamento que funciona. Super recomendo!",
    aiHint: "woman portrait"
  },
  {
    name: "João P.",
    avatar: "https://picsum.photos/100/100?random=2",
    rating: 5,
    testimonial: "No começo eu duvidei, mas os resultados são incríveis. O fungo desapareceu completamente e minhas unhas estão fortes de novo. Valeu cada centavo!",
    aiHint: "man portrait"
  },
  {
    name: "Ana C.",
    avatar: "https://picsum.photos/100/100?random=3",
    rating: 5,
    testimonial: "Estou muito feliz com o resultado. É um alívio poder usar sandálias sem sentir vergonha das minhas unhas. O tratamento é simples e eficaz.",
    aiHint: "woman smiling"
  },
    {
    name: "Carlos L.",
    avatar: "https://picsum.photos/100/100?random=4",
    rating: 5,
    testimonial: "Funciona mesmo! Já tinha gastado muito dinheiro com outros produtos que não resolveram. Este tratamento foi a solução definitiva para mim.",
    aiHint: "man happy"
  },
];

const Testimonials = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Quem já usou, aprova!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((item, index) => (
          <Card key={index} className="bg-slate-50">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={item.avatar} alt={item.name} data-ai-hint={item.aiHint}/>
                  <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{item.name}</CardTitle>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">&quot;{item.testimonial}&quot;</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
