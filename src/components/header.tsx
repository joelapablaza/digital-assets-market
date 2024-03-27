import CallToAction from '@/components/call-to-action';

const Header = () => {
  return (
    <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl dark:text-primary">
        Tu mercado para productos digitales de alta calidad
      </h1>
      <p className="mt-6 text-lg max-w-prose text-muted-foreground">
        Bienvenido a Digital-Capi. Cada recurso en nuestra plataforma es
        verificado por nuestro equipo para garantizar nuestros más altos
        estándares de calidad.
      </p>
      <CallToAction />
    </div>
  );
};

export default Header;
