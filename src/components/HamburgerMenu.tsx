'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
import { Menu, LayoutDashboard, Search, Palette, AppWindow, Hammer, GraduationCap } from 'lucide-react';
import willowTreeLogo from '@/../assets/673f913d03b518ac2e8c2fa6_willowtree-logomark-white.svg';

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
      { title: 'Mentorship for Mentors', slug: 'mentorship-for-mentors' },
      { title: 'Mentorship for Mentees', slug: 'mentorship-for-mentees' },
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
  {
    title: 'Design Training',
    icon: <GraduationCap className="h-4 w-4" />,
    pages: [
      { title: 'Business Acumen: Design Training 101', slug: 'business-acumen-design-training-101' },
      { title: 'Client Value & Revenue Streams', slug: 'client-value-revenue-streams' },
      { title: 'Market Dynamics in Design', slug: 'market-dynamics-in-design' },
      { title: 'Organizational Context', slug: 'organizational-context' },
      { title: 'Stakeholder Mapping', slug: 'stakeholder-mapping' },
      { title: 'Business Outcomes', slug: 'business-outcomes' },
    ],
  },
];

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleTriggerClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Hamburger menu clicked - current state:', isOpen); // Debug logging
    setIsOpen(true);
  };

  const handleOpenChange = (open: boolean) => {
    console.log('Sheet open state changed to:', open);
    setIsOpen(open);
  };

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <button 
          className="fixed top-4 left-4 z-[40] pointer-events-auto inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
          onClick={handleTriggerClick}
          style={{ position: 'fixed', zIndex: 40 }}
          aria-label="Open navigation menu"
          type="button"
        >
          <Menu className="h-4 w-4" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[340px] sm:w-[400px] flex flex-col p-0 z-[55]">
        <SheetHeader className="border-b p-4">
          <SheetTitle className="flex items-center gap-3">
            <div 
              style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#19B39F',
                mask: `url(${willowTreeLogo.src}) center/contain no-repeat`,
                WebkitMask: `url(${willowTreeLogo.src}) center/contain no-repeat`
              }}
            />
            Design Playbooks
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto">
          <Accordion type="multiple" className="w-full">
            {pageSections.map((section) => (
              <AccordionItem value={section.title} key={section.title}>
                <AccordionTrigger className="px-4 text-sm font-semibold hover:no-underline">
                  <div className="flex items-center gap-2">
                    <span style={{ color: '#19B39F' }}>{section.icon}</span>
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
                        onClick={() => setIsOpen(false)}
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