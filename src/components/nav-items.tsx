'use client';

import { PRODUCT_CATEGORIES } from '@/constants/constants';
import { useEffect, useRef, useState } from 'react';
import NavItem from './nav-item';
import { useOnClickOutside } from '@/hooks/use-on-click-outside';

const NavItems = () => {
  const [activeIndes, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveIndex(null);
      }
    };

    document.addEventListener('keydown', handler);

    return () => {
      document.removeEventListener('keydown', handler);
    };
  }, []);

  const isAnyOpen = activeIndes !== null;

  const navRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(navRef, () => setActiveIndex(null));

  return (
    <div className="flex gap-4 h-full items-center" ref={navRef}>
      {PRODUCT_CATEGORIES.map((c, i) => {
        const handleOpen = () => {
          if (activeIndes === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        };
        const isOpen = i === activeIndes;

        return (
          <NavItem
            category={c}
            handleOpen={handleOpen}
            isOpen={isOpen}
            key={c.value}
            isAnyOpen={isAnyOpen}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
