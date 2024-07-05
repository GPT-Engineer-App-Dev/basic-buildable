import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl font-bold">Welcome to Your Bare-Bones App</h1>
      <p className="text-lg">This is a minimal web application that you can modify and build upon.</p>
      <Button onClick={() => navigate('/learn-more')} className="mx-auto">
        Learn More
      </Button>
    </div>
  );
};

export default Index;