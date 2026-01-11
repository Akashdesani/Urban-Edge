import Link from 'next/link';
import { Bot, Twitter, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
];

const footerLinks = [
  {
    title: 'Shop',
    links: [
      { name: 'All Products', href: '/shop' },
      { name: 'New Arrivals', href: '/shop?filter=new' },
      { name: 'Bestsellers', href: '/shop?filter=bestseller' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Shipping & Returns', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-black/40 border-t border-border/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 pr-8">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Bot className="h-7 w-7 text-primary" />
              <span className="font-headline text-2xl font-bold">
                Urban Edge
              </span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Define your edge with premium urban streetwear.
            </p>
            <h3 className="font-semibold mb-2">Join Our Newsletter</h3>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="your.email@example.com"
                aria-label="Email for newsletter"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Urban Edge. All Rights Reserved.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
