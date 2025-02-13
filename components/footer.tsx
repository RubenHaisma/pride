import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-screen-2xl px-6 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Pride 2025</h3>
            <p className="text-sm text-muted-foreground">
              Celebrating love, unity, and diversity in Amsterdam.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 text-sm font-semibold">Shop</h4>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-sm text-muted-foreground hover:text-primary">All Products</Link></li>
              <li><Link href="/products/new" className="text-sm text-muted-foreground hover:text-primary">New Arrivals</Link></li>
              <li><Link href="/products/featured" className="text-sm text-muted-foreground hover:text-primary">Featured</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-sm font-semibold">About</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">Our Story</Link></li>
              <li><Link href="/impact" className="text-sm text-muted-foreground hover:text-primary">Our Impact</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-sm font-semibold">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              <li><Link href="/shipping" className="text-sm text-muted-foreground hover:text-primary">Shipping Info</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Pride Amsterdam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}