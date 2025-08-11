import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="heading-display text-5xl font-bold mb-3">404</h1>
        <p className="text-base text-muted-foreground mb-6">Oops! Page not found</p>
        <Link to="/">
          <Button variant="hero">Return to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
