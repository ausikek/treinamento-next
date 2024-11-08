import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface NasaCardsProps {
  title: string;
  center: string;
  image: string;
  handleClick: () => void;
}

const NasaCards = ({ title, center, image, handleClick }: NasaCardsProps) => {
  return (
    <Card
      className="flex flex-col items-center hover:cursor-pointer"
      onClick={handleClick}
    >
      <CardHeader>
        <CardTitle className="font-space">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={image}
          alt="Nasa Picture"
          loading="lazy"
          width={150}
          height={150}
          className="h-52 w-52 rounded-md"
        />
      </CardContent>
      <CardFooter className="font-space">{center}</CardFooter>
    </Card>
  );
};

export { NasaCards };
