
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { Phone, Clock, Users, Calendar, CheckCircle } from 'lucide-react';

const Inbound = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              Inbound Calls
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Human-like virtual receptionist to handle your incoming calls with perfect professionalism and efficiency.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Never Miss Another Lead</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our AI-powered inbound call system ensures every customer interaction is handled professionally, 
                24/7. From lead qualification to appointment scheduling, we've got you covered.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Instant call answering - no wait times</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Professional greeting and company branding</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Lead qualification and scoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Seamless appointment booking</span>
                </div>
              </div>
              
              <Button asChild className="gradient-bg text-white px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
            
            <div className="relative">
              <Card className="glass-card border-cyan-500/20 p-8 animate-float">
                <CardContent className="p-0 text-center">
                  <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                    <Phone className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">AI Receptionist</h3>
                  <p className="text-gray-300">Always professional, never takes a break</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <Card className="glass-card border-cyan-500/20 text-center hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">24/7 Availability</h3>
                <p className="text-gray-400 text-sm">Round-the-clock call handling, even during holidays</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-blue-500/20 text-center hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Lead Qualification</h3>
                <p className="text-gray-400 text-sm">Intelligent screening and scoring of prospects</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-purple-500/20 text-center hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <Calendar className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Appointment Booking</h3>
                <p className="text-gray-400 text-sm">Seamless calendar integration and scheduling</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-green-500/20 text-center hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <Phone className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Call Transfer</h3>
                <p className="text-gray-400 text-sm">Smart routing to the right team member</p>
              </CardContent>
            </Card>
          </div>

          {/* How It Works */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold gradient-text mb-12">How It Works</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
                <h3 className="text-xl font-bold text-white mb-3">Call Received</h3>
                <p className="text-gray-300">AI instantly answers with your custom greeting</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
                <h3 className="text-xl font-bold text-white mb-3">Qualify & Engage</h3>
                <p className="text-gray-300">Natural conversation to understand caller needs</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
                <h3 className="text-xl font-bold text-white mb-3">Take Action</h3>
                <p className="text-gray-300">Book appointments, transfer calls, or capture leads</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button asChild className="gradient-bg text-white px-8 py-6 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300">
              <Link to="/contact">Start Your Free Trial</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbound;
