import React from 'react';
import { SquareArrowOutUpRight } from 'lucide-react';

interface ResourceCardProps {
  name: string;
  link: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ name, link }) => (
  <div className="bg-[#F5FAFF] rounded-lg shadow p-4 flex items-center justify-between mt-4">
    <span className="text-black text-base">{name}</span>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="ml-3"
    >
      <span className="inline-flex items-center justify-center rounded-md bg-[#E0F0FF] w-10 h-10">
        <SquareArrowOutUpRight className="w-4 h-4 text-blue-700" />
      </span>
    </a>
  </div>
);

export default ResourceCard; 