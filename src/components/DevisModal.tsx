import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import DevisRequestForm from "./DevisRequestForm";

interface DevisModalProps {
  children: React.ReactNode;
}

const DevisModal = ({ children }: DevisModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0 border-0">
        <DevisRequestForm />
      </DialogContent>
    </Dialog>
  );
};

export default DevisModal;