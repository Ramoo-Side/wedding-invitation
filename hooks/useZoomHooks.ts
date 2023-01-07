import { useEffect } from 'react';

//! 비표준이라 권장하지 않음
const useZoomHooks = () => {
  useEffect(() => {
    const mobileWidth = 720;
    const onResize = () => {
      const zoom = Math.min(window.innerWidth / mobileWidth, 1);

      console.log('zoom: ', zoom);
      document.documentElement.style.transform = `scale(${zoom})`;
      // document.documentElement.style.zoom = `${zoom}`;
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
};

export default useZoomHooks;
