import React from 'react';
import { Calendar, Clock, CreditCard, User, Settings, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';

const Dashboard = () => {
  const upcomingClasses = [
    {
      id: 1,
      name: "Morning Yoga Flow",
      studio: "Zen Studio",
      date: "Today",
      time: "9:00 AM",
      credits: 3,
      location: "Central London"
    },
    {
      id: 2,
      name: "HIIT Bootcamp",
      studio: "PowerFit",
      date: "Tomorrow",
      time: "6:30 PM",
      credits: 4,
      location: "East London"
    },
    {
      id: 3,
      name: "Pilates Core",
      studio: "CoreBalance",
      date: "Fri, Jan 26",
      time: "12:00 PM",
      credits: 3,
      location: "West London"
    }
  ];

  const classHistory = [
    { name: "Vinyasa Yoga", studio: "Peaceful Mind", date: "Jan 15", credits: 3 },
    { name: "Spin Class", studio: "CycleZone", date: "Jan 12", credits: 4 },
    { name: "Strength Training", studio: "IronGym", date: "Jan 10", credits: 5 },
    { name: "Meditation", studio: "Mindful Space", date: "Jan 8", credits: 2 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation userCredits={47} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, Sarah!</h1>
          <p className="text-muted-foreground">Here's your fitness journey overview</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Available Credits</p>
                  <p className="text-2xl font-bold text-success">47</p>
                </div>
                <CreditCard className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Classes This Month</p>
                  <p className="text-2xl font-bold text-primary">12</p>
                </div>
                <Calendar className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Hours Trained</p>
                  <p className="text-2xl font-bold text-fitness-red">18.5</p>
                </div>
                <Clock className="h-8 w-8 text-fitness-red" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Favorite Studio</p>
                  <p className="text-lg font-semibold text-foreground">Zen Studio</p>
                </div>
                <BarChart3 className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Classes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Upcoming Classes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingClasses.map((classItem) => (
                  <div key={classItem.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{classItem.name}</h4>
                      <p className="text-sm text-muted-foreground">{classItem.studio} • {classItem.location}</p>
                      <p className="text-sm text-muted-foreground">{classItem.date} at {classItem.time}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant="secondary">{classItem.credits} credits</Badge>
                      <Button variant="outline" size="sm">Cancel</Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4">Browse More Classes</Button>
            </CardContent>
          </Card>

          {/* Class History */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                Recent Classes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {classHistory.map((classItem, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-foreground">{classItem.name}</h4>
                      <p className="text-sm text-muted-foreground">{classItem.studio}</p>
                      <p className="text-sm text-muted-foreground">{classItem.date}</p>
                    </div>
                    <Badge variant="outline">{classItem.credits} credits</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="mr-2 h-5 w-5" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <CreditCard className="h-6 w-6 mb-2" />
                Buy Credits
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <User className="h-6 w-6 mb-2" />
                Edit Profile
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <Settings className="h-6 w-6 mb-2" />
                Preferences
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;