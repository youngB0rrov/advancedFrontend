import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { PageError } from 'widgets/PageError';

interface ErrorPageProps {
    children: ReactNode;
}

interface ErrorPageState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorPageProps, ErrorPageState> {
  constructor(props: ErrorPageProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error:Error, errorInfo:ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <Suspense fallback=""><PageError /></Suspense>;
    }

    return children;
  }
}

export default ErrorBoundary;
