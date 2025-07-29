
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import RecommendToFriend from './RecommendToFriend';
import { Send } from "lucide-react";

interface RecommendModalProps {
  children: React.ReactNode;
}

const RecommendModal = ({ children }: RecommendModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Send className="h-5 w-5 text-red-600" />
            Recommander Ilaa
          </DialogTitle>
          <DialogDescription>
            Partagez Ilaa avec tes proches
          </DialogDescription>
        </DialogHeader>
        <RecommendToFriend />
      </DialogContent>
    </Dialog>
  );
};

export default RecommendModal;
