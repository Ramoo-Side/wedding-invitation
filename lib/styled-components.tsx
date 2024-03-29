// 'use client';
import React from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export function useStyledComponentsRegistry() {
  const [styledComponentsStyleSheet] = React.useState(() => new ServerStyleSheet());

  const styledComponentsFlushEffect = () => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    // Alternatively, you can use `styledComponentsStyleSheet.seal()`
    // But when using Suspense boundaries, the styles should be cleared:
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  };

  const StyledComponentsRegistry: any = ({ children }: { children: React.ReactNode }) => {
    if (typeof window !== 'undefined') {
      return children;
    }
    return (
      <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
        {children as React.ReactElement}
      </StyleSheetManager>
    );
  };

  return [StyledComponentsRegistry, styledComponentsFlushEffect] as const;
}
