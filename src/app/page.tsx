import BecomeSeller from '@/components/become-seller';
import Header from '@/components/header';
import MaxWithWrapper from '@/components/max-with-wrapper';
import Perks from '@/components/perks';

export default function Home() {
  return (
    <>
      <MaxWithWrapper>
        <Header />
      </MaxWithWrapper>
      <MaxWithWrapper className="max-w-screen-lg">
        <BecomeSeller />
      </MaxWithWrapper>
      <Perks />
    </>
  );
}
