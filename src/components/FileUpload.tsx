import { useCallback, useState } from "react";
import { Upload, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FileUploadProps {
  onFileSelect: (file: File) => void;
}

const FileUpload = ({ onFileSelect }: FileUploadProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.name.endsWith(".vtt")) {
        setSelectedFile(file);
        onFileSelect(file);
      }
    }
  }, [onFileSelect]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      onFileSelect(file);
    }
  }, [onFileSelect]);

  const clearFile = () => {
    setSelectedFile(null);
  };

  return (
    <div className="w-full">
      <label htmlFor="file-upload" className="block text-base font-bold text-foreground mb-4 flex items-center gap-2">
        <FileText className="w-5 h-5 text-primary" />
        Upload Your Transcript File
      </label>
      
      <div
        className={`relative border-3 border-dashed rounded-2xl transition-all duration-500 overflow-hidden ${
          dragActive
            ? "border-secondary bg-gradient-to-br from-secondary/20 to-accent/20 scale-[1.02] shadow-xl"
            : "border-border bg-gradient-to-br from-card to-muted/30 hover:border-primary hover:shadow-lg hover:scale-[1.01]"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          id="file-upload"
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          accept=".vtt"
          onChange={handleChange}
        />
        
        <div className="flex flex-col items-center justify-center py-14 px-6">
          {selectedFile ? (
            <div className="flex items-center gap-4 bg-gradient-to-r from-primary/10 to-secondary/10 px-8 py-5 rounded-2xl border-2 border-primary/30 shadow-lg backdrop-blur-sm w-full max-w-md animate-in fade-in zoom-in duration-300">
              <div className="bg-primary/20 p-3 rounded-xl">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-foreground truncate text-lg">{selectedFile.name}</p>
                <p className="text-sm text-muted-foreground font-medium">
                  {(selectedFile.size / 1024).toFixed(2)} KB • Ready to summarize
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => {
                  e.preventDefault();
                  clearFile();
                }}
                className="hover:bg-destructive/20 hover:text-destructive rounded-xl flex-shrink-0"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          ) : (
            <>
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-lg opacity-50 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-primary to-secondary p-5 rounded-2xl shadow-xl">
                  <Upload className="w-10 h-10 text-white" />
                </div>
              </div>
              <p className="text-xl font-bold text-foreground mb-2">
                Drop your transcript here
              </p>
              <p className="text-base text-muted-foreground mb-1">or click anywhere to browse</p>
              <div className="mt-4 px-4 py-2 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-sm text-primary font-semibold">
                  📹 Accepts .vtt files from any video platform
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
