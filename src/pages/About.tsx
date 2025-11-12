import Navbar from "@/components/Navbar";
import { FileText, Sparkles, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              About Concise Summarize
            </h1>
            <p className="text-lg text-muted-foreground">
              AI-powered video transcript summarization made simple
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-soft p-8 md:p-12 border border-border mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Concise Summarize is designed to help you save time by automatically generating 
              concise, accurate summaries of video transcripts. Whether you're a student, 
              researcher, content creator, or professional, our tool makes it easy to extract 
              key insights from lengthy video content.
            </p>
            
            <h2 className="text-2xl font-bold text-foreground mb-6 mt-8">How It Works</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">1. Upload Your Transcript</h3>
                  <p className="text-muted-foreground">
                    Upload a .vtt (Video Text Tracks) file from any video platform. Our system 
                    supports standard subtitle formats used by YouTube, Vimeo, and other platforms.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">2. AI Processing</h3>
                  <p className="text-muted-foreground">
                    Our advanced AI engine powered by Azure OpenAI analyzes the transcript, 
                    identifies key themes, and extracts the most important information while 
                    maintaining context and accuracy.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">3. Get Your Summary</h3>
                  <p className="text-muted-foreground">
                    Receive a concise, well-structured summary that captures all the essential 
                    points. Copy it, share it, or use it for your research and documentation.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-6 mt-8">Technology Stack</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-primary/5 rounded-lg p-6 border border-primary/20">
                <h3 className="font-semibold text-lg text-foreground mb-2">Frontend</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• React with TypeScript</li>
                  <li>• Modern UI with Tailwind CSS</li>
                  <li>• Responsive design</li>
                </ul>
              </div>

              <div className="bg-gradient-primary/5 rounded-lg p-6 border border-primary/20">
                <h3 className="font-semibold text-lg text-foreground mb-2">Backend</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Flask Python API</li>
                  <li>• Azure OpenAI GPT models</li>
                  <li>• Smart text chunking</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
              <h3 className="font-semibold text-lg text-foreground mb-2">Open Source</h3>
              <p className="text-muted-foreground">
                This project is open source and available for contribution. Feel free to explore 
                the code, suggest improvements, or adapt it for your own needs.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
