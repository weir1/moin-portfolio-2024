import Link from 'next/link';

export const metadata = {
  title: 'Examples | Moin Portfolio',
  description: 'Examples of components and features used in the portfolio website',
};

export default function ExamplesPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Component Examples</h1>
      
      <div className="max-w-3xl mx-auto">
        <p className="text-lg text-center mb-12">
          This section showcases various components and features used in the portfolio website.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link 
            href="/examples/animations"
            className="block p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">Animations</h2>
            <p className="text-muted-foreground">
              Examples of animations and effects using the custom animation library.
              Includes scroll animations, mouse follow effects, and more.
            </p>
          </Link>
          
          {/* Add more example links here as they are created */}
        </div>
      </div>
    </main>
  );
} 