import Image from 'next/image';
import Logo from '@/public/ticket_r.png';
import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { Button } from './ui/button';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className='border-b '>
      <div className='flex flex-col lg:flex-row items-center gap-4 p-4'>
        <div className='flex items-center justify-between w-full lg:w-auto'>
          <Link href='/' className='font-bold shrink-0'>
            <Image
              src={Logo}
              alt='logo'
              width={100}
              height={100}
              className='w-24 lg:w-28'
            />
          </Link>

          <div className='lg:hidden'>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode='modal'>
                <Button variant='outline'>Sign In</Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>

        {/* Search Bar - Full screen on mobile */}
        <div className='w-full lg:max-w-2xl'>
          <SearchBar />
        </div>

        {/* desktop action buttons */}
        <div className='hidden lg:block ml-auto'>
          <SignedIn>
            <div className='flex items-center gap-3'>
              <Link href='/seller'>
                <Button size='sm'>Sell Tickets</Button>
              </Link>

              <Link href='/tickets'>
                <Button size='sm' variant='outline'>
                  My Tickets
                </Button>
              </Link>

              <UserButton />
            </div>
          </SignedIn>

          <SignedOut>
            <SignInButton mode='modal'>
              <Button variant='outline'>Sign In</Button>
            </SignInButton>
          </SignedOut>
        </div>

        {/* mobile action buttons */}
        <div className='lg:hidden w-full flex justify-center gap-3'>
          <SignedIn>
            <Link href='/seller' className='flex-1'>
              <Button size='sm' className='w-full'>
                Sell Tickets
              </Button>
            </Link>

            <Link href='/tickets' className='flex-1'>
              <Button size='sm' variant='outline' className='w-full'>
                My Tickets
              </Button>
            </Link>
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
