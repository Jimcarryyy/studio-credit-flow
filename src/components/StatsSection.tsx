
import React from 'react';
import { Activity, Users, MapPin, Award } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Activity,
      number: "1,500+",
      label: "Weekly Classes",
      color: "text-fitness-red"
    },
    {
      icon: Users,
      number: "25k+",
      label: "Active Members",
      color: "text-success"
    },
    {
      icon: MapPin,
      number: "200+",
      label: "Partner Studios",
      color: "text-blue-600"
    },
    {
      icon: Award,
      number: "4.9★",
      label: "Average Rating",
      color: "text-yellow-500"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-midnight mb-4">
            TRUSTED BY LONDON'S FITNESS COMMUNITY
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of fitness enthusiasts who have found their perfect workout through StudioLink
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4 ${stat.color}`}>
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-midnight mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
