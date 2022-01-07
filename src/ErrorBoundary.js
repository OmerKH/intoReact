import { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { harError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an  error", error, info);
    setTimeout(() => this.setState({ redirect: true }), 5000);
  }

  render() {
    if (this.state.hasError) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          Wev'e got an error <Link to="/">Home</Link> to home-page.
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
