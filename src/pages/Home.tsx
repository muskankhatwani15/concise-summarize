import { useState } from "react";
import Navbar from "@/components/Navbar";
import FileUpload from "@/components/FileUpload";
import SummaryDisplay from "@/components/SummaryDisplay";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { toast } from "sonner";
import logo from "@/assets/logo.jpg";

const Home = () => {
  const [file, setFile] = useState<File | null>(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const extractTextFromVtt = (vttContent: string): string => {
    let text = vttContent.replace(/\d{2}:\d{2}:\d{2}\.\d{3} --> \d{2}:\d{2}:\d{2}\.\d{3}/g, "");
    text = text.replace(/^NOTE.*|WEBVTT.*/gm, "");
    return text.trim();
  };

  const handleSummarize = async () => {
    if (!file) {
      toast.error("Please upload a transcript file first");
      return;
    }

    setLoading(true);
    setSummary("");

    try {
      const fileContent = await file.text();
      const transcript = extractTextFromVtt(fileContent);

      // This is a placeholder - in production, this would call your Flask backend
      // For demo purposes, showing a simulated summary
      setTimeout(() => {
        const mockSummary = `This video transcript covers the following key points:

• Main topic discussed in the video
• Important concepts and ideas presented
• Key takeaways and conclusions
• Action items or recommendations

The content provides valuable insights into the subject matter and offers practical applications for viewers.

Note: This is a demo summary. Connect this to your Flask backend API at http://localhost:8000/api/summarize to get real AI-powered summaries.`;
        
        setSummary(mockSummary);
        setLoading(false);
        toast.success("Summary generated successfully!");
      }, 2000);

      // Actual API call would look like:
      // const response = await fetch("http://localhost:8000/api/summarize", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ transcript }),
      // });
      // const data = await response.json();
      // setSummary(data.summary);
      
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to generate summary");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 md:mb-16 animate-in fade-in slide-in-from-top duration-700">
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-primary rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <img 
                  src={logo} 
                  alt="Concise Summarize Logo" 
                  className="relative w-36 h-36 md:w-40 md:h-40 object-contain rounded-3xl shadow-2xl ring-4 ring-white/20"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Video Transcript
              </span>
              <br />
              <span className="text-foreground">Summarizer</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Transform lengthy video transcripts into concise, actionable summaries with the power of AI
            </p>
          </div>

          {/* Upload Section */}
          <div className="bg-card/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-10 border border-border/50 mb-10 animate-in fade-in slide-in-from-bottom duration-700">
            <FileUpload onFileSelect={setFile} />
            
            <div className="mt-8 flex justify-center">
              <Button
                onClick={handleSummarize}
                disabled={!file || loading}
                size="lg"
                className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] hover:scale-105 hover:shadow-2xl transition-all duration-500 text-white font-bold px-10 py-6 text-lg rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Sparkles className="w-6 h-6 mr-2 animate-pulse" />
                {loading ? "Generating Summary..." : "Generate Summary"}
              </Button>
            </div>
          </div>

          {/* Summary Display */}
          {(summary || loading) && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <SummaryDisplay summary={summary} loading={loading} />
            </div>
          )}

          {/* Features Grid */}
          <div className="mt-16 md:mt-20 grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="group bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500">
              <div className="bg-gradient-to-br from-primary to-secondary w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground">Lightning Fast</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get your summary in seconds with our optimized AI engine powered by cutting-edge technology
              </p>
            </div>

            <div className="group bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500">
              <div className="bg-gradient-to-br from-secondary to-accent w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground">Pinpoint Accuracy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Advanced AI captures every key point, insight, and detail from your transcripts
              </p>
            </div>

            <div className="group bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500">
              <div className="bg-gradient-to-br from-accent to-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                <span className="text-3xl">📄</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground">Universal Support</h3>
              <p className="text-muted-foreground leading-relaxed">
                Works with standard .vtt files from YouTube, Vimeo, and all major platforms
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
