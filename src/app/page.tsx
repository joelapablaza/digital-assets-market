import BecomeSeller from '@/components/become-seller';
import Header from '@/components/header';
import MaxWithWrapper from '@/components/max-with-wrapper';
import Perks from '@/components/perks';
import ProductReel from '@/components/product-reel';

export default function Home() {
  return (
    <>
      <MaxWithWrapper>
        <Header />
      </MaxWithWrapper>
      <MaxWithWrapper className="max-w-screen-lg">
        <BecomeSeller />
        <ProductReel
          query={{ sort: 'desc', limit: 8 }}
          href="/products?sort=recent"
          title="Novedades"
        />
      </MaxWithWrapper>
      <Perks />
    </>
  );
}
