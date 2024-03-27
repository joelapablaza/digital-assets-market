import Image from 'next/image';
import { Button } from '@/components/ui/button';

const BecomeSeller = () => {
  return (
    <div className="flex pb-20 flex-row gap-5 items-center max-h-[300px]">
      <div className="flex flex-col  gap-5">
        <h2 className="text-3xl font-[600] text-center md:text-left">
          Gana dinero con Capi Market
        </h2>
        <p className="text-lg text-muted-foreground text-center md:text-left">
          Vende tus diseños y llega a millones de compradores o promociona a
          otros artistas en Creative Market para ganar dinero.
        </p>
        <div className="flex flex-row  gap-4 justify-center md:justify-start">
          <Button variant="success">Conviertete en Vendedor</Button>
          <Button variant="outline">Ver Terminos</Button>
        </div>
      </div>
      <div className="hidden md:flex ">
        <Image
          src="/become-seller.jpg"
          alt="conviertete en vendedor"
          width={640}
          height={392}
        />
      </div>
    </div>
  );
};

export default BecomeSeller;
