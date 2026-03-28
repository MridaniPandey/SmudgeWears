'use client';

import { Package, PackageIcon, Search, ShoppingCart, ShoppingCartIcon, User } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {useUser,useClerk,UserButton } from "@clerk/nextjs";

const Navbar = () => {

  const { user } = useUser();
  const {openSignIn}=useClerk();
  const router = useRouter();

  const [search, setSearch] = useState('');
  const cartCount = useSelector((state) => state.cart.total);

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/shop?search=${search}`);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-[#e8ddd7] bg-[#fdf8f5]/95 backdrop-blur-md shadow-sm">
      <div className="mx-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between py-5 transition-all">
          
          {/* Logo */}
          <Link
            href="/"
            className="relative text-4xl font-serif font-semibold tracking-wide text-[#3f312c]"
          >
            <span className="text-[#5c6d7c]">Smudge</span>Wears
            <span className="text-[#5c6d7c] text-5xl leading-0">.</span>

            {/* <p className="absolute -right-8 -top-0 rounded-full bg-[#3f312c] px-3 py-0.5 text-[10px] font-body font-medium uppercase tracking-widest text-[#fdf8f5] shadow-md">
             plus
            </p> */}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-5 text-sm font-medium text-[#5c4a44] sm:flex lg:gap-8">
            <Link href="/" className="transition hover:text-[#b07d72]">
              Home
            </Link>
            <Link href="/shop" className="transition hover:text-[#b07d72]">
              Shop
            </Link>
            <Link href="/" className="transition hover:text-[#b07d72]">
              About
            </Link>
            <Link href="/" className="transition hover:text-[#b07d72]">
              Contact
            </Link>

            {/* Search */}
            <form
              onSubmit={handleSearch}
              className="hidden w-xs items-center gap-2 rounded-full border border-[#eadfd9] bg-white/80 px-4 py-3 shadow-sm transition focus-within:border-[#b07d72] focus-within:shadow-md xl:flex"
            >
              <Search size={18} className="text-[#8b6f68]" />
              <input
                className="w-full bg-transparent text-[#4a3b35] outline-none placeholder:text-[#9f8a83]"
                type="text"
                placeholder="Search products"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                required
              />
            </form>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative flex items-center gap-2 transition hover:text-[#5c6d7c]"
            >
              <ShoppingCart size={18} />
              Cart
              <span className="absolute -top-2 left-3 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#0D0D0D] px-1.5 text-[10px] font-semibold text-white shadow">
                {cartCount}
              </span>
            </Link>

              {
                !user ? (
                 <button onClick={openSignIn} className="rounded-full bg-[#0D0D0D] px-7 py-2.5 text-sm font-medium text-white shadow-md transition hover:bg-[#5c6d7c] hover:shadow-lg">
                 Login
                 </button>
                ):(
                  <UserButton>
                    <UserButton.MenuItems>
                      <UserButton.Action labelIcon={<PackageIcon size={16}/>} label="MyOrders" onClick={() => router.push('/orders')}></UserButton.Action>
                    </UserButton.MenuItems>
                  </UserButton>
                  )
              }
       </div>
           

          {/* Mobile Login */}
          <div className="sm:hidden">
            {
              user?(
                <div>
                  <UserButton>
                    <UserButton.MenuItems>
                      <UserButton.Action labelIcon={<ShoppingCartIcon size={16}/>} label="Cart" onClick={() => router.push('/cart')}></UserButton.Action>
                    </UserButton.MenuItems>
                  </UserButton>
                  <UserButton>
                    <UserButton.MenuItems>
                      <UserButton.Action labelIcon={<PackageIcon size={16}/>} label="MyOrders" onClick={() => router.push('/orders')}></UserButton.Action>
                    </UserButton.MenuItems>
                  </UserButton>
                </div>
              ):(
            <button onClick={openSignIn} className="rounded-full bg-[#0D0D0D] px-6 py-2 text-sm font-medium text-white shadow-md transition hover:bg-[#5c6d7c]">
              Login
            </button>
              )
            }
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;