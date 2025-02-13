export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Pride 2025</h3>
            <p className="text-sm text-muted-foreground">
              Celebrating love, unity, and diversity in Amsterdam.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="/shop" className="text-sm text-muted-foreground hover:text-primary">All Products</a></li>
              <li><a href="/new" className="text-sm text-muted-foreground hover:text-primary">New Arrivals</a></li>
              <li><a href="/bestsellers" className="text-sm text-muted-foreground hover:text-primary">Bestsellers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-sm text-muted-foreground hover:text-primary">Our Story</a></li>
              <li><a href="/community" className="text-sm text-muted-foreground hover:text-primary">Community</a></li>
              <li><a href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</a></li>
              <li><a href="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</a></li>
              <li><a href="/shipping" className="text-sm text-muted-foreground hover:text-primary">Shipping Info</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t">
          <p className="text-sm text-muted-foreground text-center">
            © 2025 Pride Amsterdam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}