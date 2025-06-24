// ErrorBoundary.jsx
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error in component:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong while loading this page.</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
