import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import microsoft from "@/assets/microsoft-logo.svg";
import amazon from "@/assets/amazon-logo.svg";
import prisma from "@/assets/prisma-logo.svg";
import linkedin from "@/assets/linkedin-logo.svg";
import reactLogo from "@/assets/react-logo.svg";
import falavinha from "@/assets/fv-logo.svg";

const rotativeBannerItems = [
  {
    identifier: "falavinha",
    image: falavinha,
  },
  {
    identifier: "prisma",
    image: prisma,
  },
  {
    identifier: "amazon",
    image: amazon,
  },
  {
    identifier: "linkedin",
    image: linkedin,
  },
  {
    identifier: "react",
    image: reactLogo,
  },

  {
    identifier: "microsft",
    image: microsoft,
  },
];

const RotativeBanner = () => {
  return (
    <Carousel
    plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      opts={{
        align: "start",
      }}
      className="w-full max-w-[78vw] h-[75px] "
    >
      <CarouselContent>
        {rotativeBannerItems.map((item)=> {
          return (
            <CarouselItem key={item.identifier} className="lg:basis-1/3">
              <img src={item.image} alt={item.identifier} className="w-full h-[45px]" />
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};
export default RotativeBanner;
