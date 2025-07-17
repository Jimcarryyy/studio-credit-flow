
import React from 'react';
import { Clock, MapPin, Star, Users, CreditCard, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ClassData {
  id: number;
  name: string;
  studio: string;
  type: string;
  region: string;
  time: string;
  date: string;
  credits: number;
  spotsLeft: number;
  rating: number;
  instructor: string;
  duration: number;
  image: string;
}

interface ClassCardProps {
  classData: ClassData;
  userCredits: number;
}

const ClassCard = ({ classData, userCredits }: ClassCardProps) => {
  const canBook = userCredits >= classData.credits;
  const isAlmostFull = classData.spotsLeft <= 3;

  const handleBooking = () => {
    if (canBook) {
      console.log(`Booking class: ${classData.name}`);
      // In a real app, this would call an API to book the class
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-0 bg-white">
      {/* Class Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={classData.image} 
          alt={classData.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-white/90 text-midnight font-semibold">
            {classData.type}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge 
            variant={isAlmostFull ? "destructive" : "default"} 
            className={isAlmostFull ? "bg-fitness-red" : "bg-success"}
          >
            {classData.spotsLeft} spots left
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg text-midnight group-hover:text-fitness-red transition-colors">
              {classData.name}
            </h3>
            <p className="text-gray-600 font-medium">{classData.studio}</p>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            <span className="font-medium">{classData.rating}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Class Details */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            <span>{classData.time} ({classData.duration}min)</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{classData.region} London</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="h-4 w-4 mr-2" />
            <span>{classData.instructor}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-2" />
            <span>Today</span>
          </div>
        </div>

        {/* Booking Section */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center">
            <CreditCard className="h-5 w-5 text-fitness-red mr-2" />
            <span className="text-xl font-bold text-midnight">{classData.credits}</span>
            <span className="text-sm text-gray-500 ml-1">credits</span>
          </div>
          
          <Button
            onClick={handleBooking}
            disabled={!canBook}
            className={`font-semibold ${
              canBook 
                ? "bg-fitness-red hover:bg-red-600 text-white" 
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
          >
            {canBook ? "BOOK NOW" : "INSUFFICIENT CREDITS"}
          </Button>
        </div>

        {!canBook && (
          <p className="text-sm text-gray-500 text-center">
            You need {classData.credits - userCredits} more credits to book this class
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default ClassCard;
