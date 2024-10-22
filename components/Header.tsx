"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ModeToggle } from './ModeToggle';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Crisoft
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#services" className="text-foreground hover:text-primary transition-colors">Services</Link>
          <Link href="#portfolio" className="text-foreground hover:text-primary transition-colors">Portfolio</Link>
          <Link href="#about" className="text-foreground hover:text-primary transition-colors">About</Link>
          <Link href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button variant="outline" className="hidden md:inline-flex">Get Started</Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="#services" className="text-foreground hover:text-primary transition-colors">Services</Link>
            <Link href="#portfolio" className="text-foreground hover:text-primary transition-colors">Portfolio</Link>
            <Link href="#about" className="text-foreground hover:text-primary transition-colors">About</Link>
            <Link href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
            <Button variant="outline">Get Started</Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;