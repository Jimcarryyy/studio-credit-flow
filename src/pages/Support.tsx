import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, FileText, CreditCard, HelpCircle, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const Support = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [ticketSubmitted, setTicketSubmitted] = useState(false);

  const supportCategories = [
    { value: 'account', label: 'Account Help', icon: <HelpCircle className="h-4 w-4" /> },
    { value: 'studio', label: 'Studio Inquiries', icon: <Phone className="h-4 w-4" /> },
    { value: 'refund', label: 'Refund Request', icon: <CreditCard className="h-4 w-4" /> },
    { value: 'general', label: 'General Question', icon: <MessageCircle className="h-4 w-4" /> }
  ];

  const faqs = [
    {
      question: "How do I book a class?",
      answer: "Simply browse our class listings, select a class that fits your schedule, and click 'Book'. The required credits will be automatically deducted from your account."
    },
    {
      question: "What is the cancellation policy?",
      answer: "You can cancel a booking up to 2 hours before the class starts for a full credit refund. Cancellations within 2 hours will result in credit forfeiture."
    },
    {
      question: "How do I buy credits?",
      answer: "Credits can be purchased through your dashboard or during the booking process. We offer packages of 5, 10, and 20 credits with volume discounts."
    },
    {
      question: "Do credits expire?",
      answer: "Credits expire 6 months from the date of purchase. You'll receive email reminders before expiration."
    },
    {
      question: "Can I transfer credits to someone else?",
      answer: "Credits are non-transferable and tied to your individual account for security and tracking purposes."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTicketSubmitted(true);
    setTimeout(() => setTicketSubmitted(false), 3000);
  };

  const handleContactOption = (option: string) => {
    toast({
      title: `${option} Selected`,
      description: `${option} feature will be available soon!`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation userCredits={47} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-foreground mb-4">How can we help you?</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're here to support your fitness journey. Find answers to common questions or get in touch with our team.
          </p>
        </div>

        {/* Quick Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card 
            className="text-center hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => handleContactOption("Live Chat")}
          >
            <CardContent className="p-6">
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Live Chat</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get instant help from our support team
              </p>
              <Badge variant="secondary">Available 9AM-6PM</Badge>
            </CardContent>
          </Card>

          <Card 
            className="text-center hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => handleContactOption("Phone Support")}
          >
            <CardContent className="p-6">
              <Phone className="h-12 w-12 text-fitness-red mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Phone Support</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Speak directly with our team
              </p>
              <Badge variant="secondary">020 7123 4567</Badge>
            </CardContent>
          </Card>

          <Card 
            className="text-center hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => handleContactOption("Email Support")}
          >
            <CardContent className="p-6">
              <Mail className="h-12 w-12 text-success mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Email Support</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Send us a detailed message
              </p>
              <Badge variant="secondary">support@studiolink.com</Badge>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Send className="mr-2 h-5 w-5" />
                Send us a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              {ticketSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-success" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    We've received your message and will respond within 24 hours.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Ticket ID: #SL{Math.floor(Math.random() * 10000)}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Category
                    </label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {supportCategories.map((category) => (
                          <SelectItem key={category.value} value={category.value}>
                            <div className="flex items-center space-x-2">
                              {category.icon}
                              <span>{category.label}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Subject
                    </label>
                    <Input placeholder="Brief description of your issue" required />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <Input type="email" placeholder="your.email@example.com" required />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Please provide as much detail as possible..."
                      className="min-h-32"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-border pb-4 last:border-b-0">
                    <h4 className="font-medium text-foreground mb-2">{faq.question}</h4>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  Can't find what you're looking for? 
                  <Button variant="link" className="p-0 ml-1 h-auto">
                    Browse our full help center
                  </Button>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Resources */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <h3 className="font-semibold text-foreground mb-4 text-center">Additional Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button 
                variant="outline" 
                className="h-16 flex flex-col items-center justify-center"
                onClick={() => handleContactOption("User Guide")}
              >
                <FileText className="h-5 w-5 mb-1" />
                User Guide
              </Button>
              <Button 
                variant="outline" 
                className="h-16 flex flex-col items-center justify-center"
                onClick={() => handleContactOption("Community Forum")}
              >
                <MessageCircle className="h-5 w-5 mb-1" />
                Community Forum
              </Button>
              <Button 
                variant="outline" 
                className="h-16 flex flex-col items-center justify-center"
                onClick={() => handleContactOption("Studio Directory")}
              >
                <Phone className="h-5 w-5 mb-1" />
                Studio Directory
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Support;