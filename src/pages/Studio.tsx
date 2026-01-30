import { useEffect, useRef } from 'react';
import { Studio } from 'sanity';
import config from '../../sanity.config';

const StudioPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clean up any existing studio instances
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden'
      }}
    >
      <Studio config={config} />
    </div>
  );
};

export default StudioPage;
