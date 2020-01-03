//This is the Link API (built into nextjs)
import Link from 'next/link';

const Index = () => (
  <div>
    <Link href="/about" title="About PPage">
      <a>About Page</a>
    </Link>
    <p>Hello Next.js</p>
  </div>
);

export default Index;