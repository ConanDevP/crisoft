import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Crisoft</h3>
            <p className="text-muted-foreground">Innovative software solutions for the modern world.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="#portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>Mobile Development</li>
              <li>Web Development</li>
              <li>AI Solutions</li>
              <li>Cloud Services</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors"><Facebook /></a>
              <a href="#" className="text-foreground hover:text-primary transition-colors"><Twitter /></a>
              <a href="#" className="text-foreground hover:text-primary transition-colors"><Linkedin /></a>
              <a href="#" className="text-foreground hover:text-primary transition-colors"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2024 Crisoft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;