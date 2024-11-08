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
  loading: boolean;
  handleClick: () => void;
}

const NasaCards = ({
  title,
  center,
  image,
  loading,
  handleClick,
}: NasaCardsProps) => {
  return (
    <Card
      className="flex flex-col items-center hover:cursor-pointer"
      onClick={handleClick}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Image
            src={image}
            alt="Nasa Picture"
            loading="lazy"
            width={150}
            height={150}
            className="h-52 w-52"
          />
        )}
      </CardContent>
      <CardFooter>{center}</CardFooter>
    </Card>
  );
};

export { NasaCards };
