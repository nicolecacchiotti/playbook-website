import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import JohnMigliorisi from '@/../assets/Avatar images/JohnMigliorisi.png';
import KenDabkowski from '@/../assets/Avatar images/KenDabkowski.png';
import NicoleBaeder from '@/../assets/Avatar images/NicoleBaeder.png';
import KarolinaWhitmore from '@/../assets/Avatar images/KarolinaWhitmore.png';
import MasonPlunkett from '@/../assets/Avatar images/MasonPlunkett.png';

interface Author {
  name: string;
  image: any;
  initials: string;
}

interface PlayAuthorsProps {
  authors?: Author[];
}

const defaultAuthors: Author[] = [
  {
    name: "John Migliorisi",
    image: JohnMigliorisi,
    initials: "JM"
  },
  {
    name: "Ken Dabkowski", 
    image: KenDabkowski,
    initials: "KD"
  },
  {
    name: "Nicole Baeder",
    image: NicoleBaeder,
    initials: "NB"
  }
];

export const designReviewAuthors: Author[] = [
  {
    name: "Karolina Whitmore",
    image: KarolinaWhitmore,
    initials: "KW"
  }
];

export const designPlanAuthors: Author[] = [
  {
    name: "Mason Plunkett",
    image: MasonPlunkett,
    initials: "MP"
  }
];

export default function PlayAuthors({ authors = defaultAuthors }: PlayAuthorsProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="flex -space-x-2">
        {authors.map((author, index) => (
          <Avatar key={author.name} className="w-8 h-8 border-2 border-white">
            <AvatarImage 
              src={author.image.src || author.image} 
              alt={author.name}
            />
            <AvatarFallback className="text-xs font-medium">
              {author.initials}
            </AvatarFallback>
          </Avatar>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {authors.map((author) => (
          <span 
            key={author.name}
            className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full font-medium"
            style={{ fontSize: '12px' }}
          >
            {author.name}
          </span>
        ))}
      </div>
    </div>
  );
} 