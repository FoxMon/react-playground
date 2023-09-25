import { Suspense, ComponentType, ReactNode } from "react";

interface WithSuspenseProps {
  WrappedComponent: ComponentType;
  fallbackElement: ReactNode;
}

const LoadingComponent = () => {
  return <div>Loading...</div>;
};

export const withSuspense = ({
  WrappedComponent,
  fallbackElement,
}: WithSuspenseProps) => {
  const ComponentWithSuspense = () => {
    if (!fallbackElement) {
      fallbackElement = LoadingComponent as unknown as ReactNode;
    }

    return (
      <Suspense fallback={fallbackElement}>
        <WrappedComponent />
      </Suspense>
    );
  };

  return ComponentWithSuspense;
};
