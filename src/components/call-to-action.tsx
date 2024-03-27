import Link from 'next/link';
import { Button, buttonVariants } from './ui/button';
import { Search } from 'lucide-react';
const categories = [
  'Ilustraciones',
  'Tipografias',
  'Diseño web',
  'Simple',
  'Iconos',
];

const CallToAction = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <Link href="/products" className={buttonVariants()}>
          Explora las tendencias
        </Link>
        <Button variant="ghost">Promesa de calidad →</Button>
      </div>
      <div className=" mt-10 relative flex items-center bg-gray-100 border border-gray-200 rounded-lg pl-12 py-3 w-[60%]">
        <span className="absolute left-4 text-primary dark:text-secondary">
          <Search />
        </span>
        <input
          type="text"
          placeholder="Busca fotos, fuentes, gráficos, y más..."
          className=" w-full bg-gray-100 outline-none"
        />
      </div>
      <div className="hidden sm:flex sm:flex-row gap-10 mt-10">
        {categories.map((category) => (
          <Button variant="ghost" key={category}>
            {category}
          </Button>
        ))}
      </div>
    </>
  );
};

export default CallToAction;
