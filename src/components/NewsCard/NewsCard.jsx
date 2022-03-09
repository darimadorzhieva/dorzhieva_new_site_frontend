import React from 'react';
import ContentLoader from 'react-content-loader';

function MyLoader(props) {
  return (
    <ContentLoader
      speed
      rtl
      speed={2}
      width={1600}
      height={360}
      viewBox="0 0 1600 360"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="116" y="32" rx="3" ry="3" width="88" height="6" />
      <rect x="117" y="66" rx="3" ry="3" width="52" height="6" />
      <rect x="25" y="114" rx="3" ry="3" width="410" height="6" />
      <rect x="24" y="139" rx="3" ry="3" width="380" height="6" />
      <rect x="24" y="164" rx="3" ry="3" width="178" height="6" />
      <circle cx="65" cy="54" r="37" />
    </ContentLoader>
  );
}

export default MyLoader;
