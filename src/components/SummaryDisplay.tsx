import { Copy, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface SummaryDisplayProps {
  summary: string;
  loading?: boolean;
}

const SummaryDisplay = ({ summary, loading }: SummaryDisplayProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-card to-muted/30 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-border/50">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
              <div className="absolute inset-0 w-16 h-16 border-4 border-secondary/20 border-b-secondary rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }} />
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-foreground mb-1">AI is analyzing your transcript</p>
              <p className="text-sm text-muted-foreground">This will only take a moment...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!summary) {
    return null;
  }

  return (
    <div className="bg-gradient-to-br from-card to-muted/30 backdrop-blur-xl rounded-3xl shadow-2xl border border-border/50 overflow-hidden">
      <div className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-[gradient_3s_ease_infinite] p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white">Your Summary</h3>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="text-white hover:bg-white/20 rounded-xl font-semibold px-4 py-2"
        >
          {copied ? (
            <>
              <Check className="w-5 h-5 mr-2" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-5 h-5 mr-2" />
              Copy
            </>
          )}
        </Button>
      </div>
      <div className="p-8 md:p-10">
        <div className="prose prose-lg max-w-none">
          <p className="text-foreground leading-relaxed whitespace-pre-wrap text-base md:text-lg">{summary}</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryDisplay;
