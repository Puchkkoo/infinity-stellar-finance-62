
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      className="mb-4 flex items-center gap-1"
      onClick={handleBackClick}
    >
      <ArrowLeft className="h-4 w-4" />
      Back
    </Button>
  );
};
