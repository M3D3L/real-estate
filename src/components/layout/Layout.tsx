import * as React from 'react';

import BaseFooter from '@/components/BaseFooter';

import BaseHeader from '../BaseHeader';

const fadeIn = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove('fade-in');
    }
  });
};

const supportsIntersectionObserver = typeof IntersectionObserver !== 'undefined';

export default function Layout({ children }: { children: React.ReactNode }) {
  const fadeRef = React.useRef<HTMLDivElement>(null);
  const [inViewNodes, setInViewNodes] = React.useState<NodeListOf<Element> | null>(null);

  React.useEffect(() => {
    if (supportsIntersectionObserver && fadeRef.current) {
      const observer = new IntersectionObserver((entries) => fadeIn(entries, observer));
      const nodes = fadeRef.current.querySelectorAll('.in-view');
      if (nodes) {
        nodes.forEach((node) => {
          observer.observe(node);
        });
      }
      setInViewNodes(nodes);
      return () => {
        observer.disconnect();
      };
    }
  }, [supportsIntersectionObserver, children]);

  return (
    <>
      <BaseHeader />
      <div className='overflow-hidden' ref={fadeRef}>{children}</div>
      <BaseFooter />
    </>
  );
}
