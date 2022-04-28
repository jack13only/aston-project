import React from 'react';

type Props = unknown;
type State = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something go wrong!</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
