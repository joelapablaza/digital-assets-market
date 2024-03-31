'use client';

import { PRODUCT_CATEGORIES } from '@/constants/constants';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

type Category = (typeof PRODUCT_CATEGORIES)[number];

type NavItemProps = {
  category: Category;
  handleOpen: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
};

const NavItem = ({ category, handleOpen, isAnyOpen, isOpen }: NavItemProps) => {
  return (
    <div className="flex">
      <div className="relative flex item-center">
        <Button
          className="gap-1.5"
          onClick={handleOpen}
          variant={isOpen ? 'secondary' : 'ghost'}
        >
          {category.label}
          <ChevronDown
            className={cn('h-4 w-4 transition-all text-muted-foreground', {
              '-rotate-180': isOpen,
            })}
          />
        </Button>
      </div>

      {isOpen && (
        <div
          className={cn(
            'absolute inset-x-0 py-10 top-full text-sm text-muted-foreground',
            { 'animate-in fadein-10 slide-in-from-top-5': !isOpen }
          )}
        >
          <div
            className="absolute inset-0 top-1/2 bg-background shadow dark:shadow-gray-500"
            aria-hidden
          />
          <div className="relative bg-background">
            <div className="mx-auto max-w-7xl px-8">
              <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-12">
                <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
                  {category.featured.map((i) => (
                    <div
                      key={i.name}
                      className="group relative text-base sm:text-sm"
                    >
                      <Link
                        href={i.href}
                        className="block font-medium text-gray-900 dark:text-gray-300"
                      >
                        <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75  dark:bg-gray-900">
                          <Image
                            src={i.imageSrc}
                            alt="imagen de categoria"
                            fill
                            className="object-cover object-center"
                          />
                        </div>
                        <p className="mt-6">{i.name}</p>
                      </Link>
                      <p className="mt-1" aria-hidden>
                        Comprar ahora
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavItem;
