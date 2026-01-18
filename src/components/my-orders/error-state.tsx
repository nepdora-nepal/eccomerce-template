import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "../ui/button";

interface ErrorStateProps {
  error: string;
  onRetry: () => void;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error, onRetry }) => {
  return (
    <div className="rounded-xl border border-red-200 bg-red-50 p-8 text-center">
      <div className="mb-4 text-red-400">
        <AlertCircle className="mx-auto h-12 w-12" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-red-900">
        Something went wrong
      </h3>
      <p className="mb-6 text-red-700">{error}</p>
      <Button
        variant="destructive"
        onClick={onRetry}
        className="inline-flex items-center gap-2 rounded-lg px-6 py-6 text-sm font-medium transition-colors h-auto"
      >
        <RefreshCw className="h-4 w-4" />
        Try Again
      </Button>
    </div>
  );
};

export default ErrorState;
