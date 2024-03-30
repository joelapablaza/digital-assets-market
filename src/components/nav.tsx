import Link from 'next/link';
import MaxWithWrapper from './max-with-wrapper';
import Image from 'next/image';
import { ModeToggle } from './theme-toggle';
import NavItems from './nav-items';
import { buttonVariants } from './ui/button';
import Cart from './cart';
import { getServerSideUser } from '@/lib/payload-utils';
import { cookies } from 'next/headers';
import UserAccountNav from './user-account-nav';

const NavBar = async () => {
  const nextCookies = cookies();
  const { user } = await getServerSideUser(nextCookies);

  return (
    <div className="bg-background sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-background">
        {/* <MaxWithWrapper> */}
        <div className="border-b border-gray-200">
          <div className="flex h-16 items-center">
            {/* mobile here */}

            <div className="ml-4 flex lg:ml-8">
              <Link href="/">
                <Image
                  src="/logo.png"
                  height={46}
                  width={40}
                  alt="logo"
                  className="h-10 w-10"
                />
              </Link>
            </div>
            <div className="mr-auto ml-5 hidden z-50 lg:block lg:self-stretch">
              <NavItems />
            </div>

            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 lg:mr-8">
                <ModeToggle />
                <span className="h-6 w-px bg-gray-200" aria-hidden />
                {!user && (
                  <>
                    <Link
                      href="/sign-in"
                      className={buttonVariants({ variant: 'ghost' })}
                    >
                      Sign in
                    </Link>
                    <span className="h-6 w-px bg-gray-200" aria-hidden />
                    <Link
                      href="/sign-up"
                      className={buttonVariants({ variant: 'ghost' })}
                    >
                      Create account
                    </Link>
                    <span className="h-6 w-px bg-gray-200" aria-hidden />
                  </>
                )}

                {user && (
                  <>
                    <UserAccountNav user={user} />
                    <span className="h-6 w-px bg-gray-200" aria-hidden />
                  </>
                )}

                <div className="ml-4 flow-root lg:ml-6">
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </MaxWithWrapper> */}
      </header>
    </div>
  );
};

export default NavBar;
