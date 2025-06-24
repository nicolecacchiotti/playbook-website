'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import DarkModeToggle from './DarkModeToggle';
import { Menu, LayoutDashboard, Search, Palette, AppWindow, Hammer } from 'lucide-react';

interface PlaybookPage {
  title: string;
  slug: string;
}

interface PageSection {
  title: string;
  pages: PlaybookPage[];
  icon: React.ReactElement;
}

const pageSections: PageSection[] = [
  {
    title: 'Foundation',
    icon: <LayoutDashboard className="h-4 w-4" />,
    pages: [
      { title: 'Design Plan', slug: 'design-plan' },
      { title: 'Client On-Boarding', slug: 'client-on-boarding' },
      { title: 'Design Review', slug: 'design-review' },
      { title: 'Mentorship', slug: 'mentorship' },
      { title: 'Delivery Foundations', slug: 'delivery-foundations' },
    ],
  },
  {
    title: 'Immersion',
    icon: <Search className="h-4 w-4" />,
    pages: [
      { title: 'Competitive Landscape', slug: 'competitive-landscape' },
      { title: 'Design Audit', slug: 'design-audit' },
      { title: 'User Journey Map', slug: 'user-journey-map' },
      { title: 'Outcomes Workshop', slug: 'outcomes-workshop' },
      { title: 'Rapid Ideation Workshop', slug: 'rapid-ideation-workshop' },
      { title: 'UX Writing', slug: 'ux-writing' },
      { title: 'User Needs & Assumptions', slug: 'user-needs-and-assumptions' },
      { title: 'Competitive Opportunity', slug: 'competitive-opportunity' },
      { title: 'Content Audit', slug: 'content-audit' },
      { title: 'Project Outbrief', slug: 'project-outbrief' },
      { title: 'Product Mapping', slug: 'product-mapping' },
    ],
  },
  {
    title: 'Creative Direction',
    icon: <Palette className="h-4 w-4" />,
    pages: [
      { title: 'Design Direction Workshop', slug: 'design-direction-workshop' },
      { title: 'Design Systems', slug: 'design-systems' },
      { title: 'User Testing', slug: 'user-testing' },
      { title: 'Content Testing', slug: 'content-testing' },
      { title: 'Concept & Usability Testing', slug: 'concept-and-usability-testing' },
    ],
  },
  {
    title: 'Feature Design',
    icon: <AppWindow className="h-4 w-4" />,
    pages: [
      { title: 'Developer Collaboration', slug: 'developer-collaboration' },
      { title: 'Build Reviews', slug: 'build-reviews' },
      { title: 'Design Sprints', slug: 'design-sprints' },
      { title: 'Content Design Collaboration', slug: 'content-design-collaboration' },
      { title: 'Shooting Live Video', slug: 'shooting-live-video' },
      { title: 'Accessibility Audit', slug: 'accessibility-audit' },
      { title: 'Design Prototyping', slug: 'design-prototyping' },
      { title: 'CMS Content Governance', slug: 'cms-content-governance' },
      { title: 'Hype Video', slug: 'hype-video' },
      { title: 'App Store Optimization', slug: 'app-store-optimization' },
    ],
  },
  {
    title: 'Toolbox',
    icon: <Hammer className="h-4 w-4" />,
    pages: [
      { title: 'Midjourney', slug: 'midjourney' },
      { title: 'ChatGPT', slug: 'chatgpt' },
      { title: 'Design Resources', slug: 'design-resources' },
      { title: 'Applications of AI in Design', slug: 'applications-of-ai-in-design' },
      { title: 'AI Chatbot Best Practices', slug: 'ai-chatbot-best-practices' },
    ],
  },
];

export default function HamburgerMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="fixed top-4 left-4 z-50">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[340px] sm:w-[400px] flex flex-col p-0">
        <SheetHeader className="border-b p-4">
          <SheetTitle>Design Playbooks</SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto">
          <Accordion type="multiple" className="w-full">
            {pageSections.map((section) => (
              <AccordionItem value={section.title} key={section.title}>
                <AccordionTrigger className="px-4 text-sm font-semibold hover:no-underline">
                  <div className="flex items-center gap-2">
                    {section.icon}
                    {section.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-1 ml-4 border-l pl-4 pr-4">
                    {section.pages.map((page) => (
                      <Link
                        key={page.slug}
                        href={`/plays/${section.title.toLowerCase().replace(/ /g, '-')}/${page.slug}`}
                        className="text-sm rounded-md p-2 text-muted-foreground hover:text-foreground hover:bg-muted"
                      >
                        {page.title}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-auto border-t p-4">
          <DarkModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
} 