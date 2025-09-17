import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Briefcase, X } from 'lucide-react';

const CareerSupportPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const showPopup = () => {
      setIsVisible(true);
      setIsAnimating(true);
      
      // Auto-hide after 8 seconds
      setTimeout(() => {
        setIsAnimating(false);
        setTimeout(() => setIsVisible(false), 300); // Wait for exit animation
      }, 8000);
    };

    // Show popup every 2 minutes (120000ms)
    const interval = setInterval(showPopup, 120000);

    // Show first popup after 2 minutes
    const firstTimeout = setTimeout(showPopup, 120000);

    return () => {
      clearInterval(interval);
      clearTimeout(firstTimeout);
    };
  }, []);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className={`
        w-80 shadow-lg border-2 border-[#C0997A] bg-white
        transform transition-all duration-300 ease-in-out
        ${isAnimating 
          ? 'translate-x-0 opacity-100' 
          : 'translate-x-full opacity-0'
        }
      `}>
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-[#C0997A] to-[#B8926F] rounded-full flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">Soutien carrière</h3>
                <p className="text-xs text-gray-600">Professionnel personnalisé</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="h-6 w-6 p-0 hover:bg-gray-100"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <p className="text-sm text-gray-700 mb-4">
            Soutien carrière professionnelle personnalisé
          </p>
          
          <Button 
            className="w-full bg-[#C0997A] hover:bg-[#B8926F] text-white" 
            onClick={() => {
              window.open('https://www.ilaa.ma', '_blank', 'noopener,noreferrer');
              handleClose();
            }}
          >
            <Briefcase className="mr-2 h-4 w-4" />
            Découvrir nos services
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CareerSupportPopup;