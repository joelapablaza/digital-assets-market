import MaxWithWrapper from './max-with-wrapper';
import { ArrowDownToLine, CheckCircle, MapPin } from 'lucide-react';

const PERKS = [
  {
    name: 'Entrega Inmediata',
    Icon: ArrowDownToLine,
    description:
      'Recibe tus activos entregados en tu correo electrónico en segundos y descárgalos de inmediato.',
  },
  {
    name: 'Calidad Garantizada',
    Icon: CheckCircle,
    description:
      'Cada recurso en nuestra plataforma es verificado por nuestro equipo para asegurar nuestros más altos estándares de calidad. ¿No estás satisfecho? Ofrecemos una garantía de reembolso de 30 días.',
  },
  {
    name: 'Mercado Local',
    Icon: MapPin,
    description:
      'Paga en pesos, sin preocuparte por impuestos extra por compras en moneda extranjera. ',
  },
] as const;

const Perks = () => {
  return (
    <section className="border-t border-gray-200 bg-gray-50 dark:bg-gray-950">
      <MaxWithWrapper className="py-20">
        <div className="grid gird-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {PERKS.map((perk) => (
            <div
              key={perk.name}
              className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
            >
              <div className="md:flex-shrink-0 flex justify-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-green-100 text-green-900">
                  {<perk.Icon className="w-1/3 h-1/3" />}
                </div>
              </div>
              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-base font-medium text-primary">
                  {perk.name}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {perk.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </MaxWithWrapper>
    </section>
  );
};

export default Perks;
