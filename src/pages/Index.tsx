import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Recycle, 
  Shield, 
  Truck, 
  FileText, 
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Heart
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "VERIFIED LISTINGS WITH AI QUALITY CHECK",
      description: "EVERY PRODUCT IS VERIFIED USING ADVANCED AI TO ENSURE QUALITY AND AUTHENTICITY"
    },
    {
      icon: Shield,
      title: "ESCROW PAYMENTS FOR SAFE TRANSACTIONS",
      description: "YOUR MONEY IS SAFE WITH OUR SECURE ESCROW SYSTEM UNTIL YOU RECEIVE YOUR ITEM"
    },
    {
      icon: Truck,
      title: "HOME PICKUP & DELIVERY",
      description: "CONVENIENT DOORSTEP PICKUP AND DELIVERY SERVICE FOR HASSLE-FREE TRANSACTIONS"
    },
    {
      icon: FileText,
      title: "DIGITAL RECEIPTS & OWNERSHIP HISTORY",
      description: "TRACK OWNERSHIP HISTORY AND MAINTAIN DIGITAL RECORDS FOR ALL YOUR PURCHASES"
    }
  ];

  const stats = [
    { number: "50K+", label: "HAPPY USERS" },
    { number: "100K+", label: "ITEMS SOLD" },
    { number: "₹10CR+", label: "TRANSACTIONS" },
    { number: "500T+", label: "CO₂ SAVED" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Recycle className="h-8 w-8 text-primary" />
              <h1 className="text-xl font-bold text-primary">TRUSTLIST</h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="#features" className="text-sm font-medium text-muted-foreground hover:text-primary uppercase">
                FEATURES
              </Link>
              <Link to="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary uppercase">
                HOW IT WORKS
              </Link>
              <Link to="#about" className="text-sm font-medium text-muted-foreground hover:text-primary uppercase">
                ABOUT
              </Link>
            </nav>
            
            <div className="flex items-center space-x-3">
              <Link to="/login">
                <Button variant="ghost" className="btn-text">
                  SIGN IN
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="btn-text earth-gradient">
                  START SELLING NOW
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 earth-gradient" variant="secondary">
              🌱 SUSTAINABLE MARKETPLACE
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              TRUSTLIST — INDIA'S VERIFIED MARKETPLACE FOR PRE-OWNED GOODS
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto uppercase tracking-wide">
              BUY AND SELL SMARTLY, SAVE MONEY, AND REDUCE YOUR CARBON FOOTPRINT.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="btn-text earth-gradient px-8">
                  START SELLING NOW
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="btn-text">
                  BROWSE ITEMS
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">
                    {stat.number}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              WHY CHOOSE TRUSTLIST?
            </h2>
            <p className="text-lg text-muted-foreground uppercase tracking-wide">
              BUILT FOR TRUST, DESIGNED FOR SUSTAINABILITY
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="recycle-shadow hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm uppercase tracking-wide">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              HOW IT WORKS
            </h2>
            <p className="text-lg text-muted-foreground uppercase tracking-wide">
              SIMPLE STEPS TO START TRADING
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-lg font-bold mb-2">SIGN UP & VERIFY</h3>
              <p className="text-sm text-muted-foreground uppercase">
                CREATE YOUR ACCOUNT AND VERIFY YOUR IDENTITY
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-lg font-bold mb-2">LIST OR BROWSE</h3>
              <p className="text-sm text-muted-foreground uppercase">
                LIST YOUR ITEMS OR BROWSE VERIFIED PRODUCTS
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-lg font-bold mb-2">SAFE TRANSACTION</h3>
              <p className="text-sm text-muted-foreground uppercase">
                SECURE PAYMENT WITH HOME DELIVERY
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 earth-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              READY TO START SAVING?
            </h2>
            <p className="text-lg mb-8 opacity-90 uppercase tracking-wide">
              JOIN THOUSANDS OF USERS MAKING A DIFFERENCE
            </p>
            <Link to="/signup">
              <Button size="lg" variant="secondary" className="btn-text">
                GET STARTED TODAY
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Recycle className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-bold text-primary">TRUSTLIST</h3>
              </div>
              <p className="text-sm text-muted-foreground uppercase mb-4">
                INDIA'S MOST TRUSTED MARKETPLACE FOR PRE-OWNED GOODS
              </p>
              <div className="flex space-x-3">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Instagram className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-3 uppercase">COMPANY</h4>
              <div className="space-y-2 text-sm">
                <Link to="/about" className="block text-muted-foreground hover:text-primary uppercase">
                  ABOUT US
                </Link>
                <Link to="/careers" className="block text-muted-foreground hover:text-primary uppercase">
                  CAREERS
                </Link>
                <Link to="/press" className="block text-muted-foreground hover:text-primary uppercase">
                  PRESS
                </Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-3 uppercase">SUPPORT</h4>
              <div className="space-y-2 text-sm">
                <Link to="/help" className="block text-muted-foreground hover:text-primary uppercase">
                  HELP CENTER
                </Link>
                <Link to="/safety" className="block text-muted-foreground hover:text-primary uppercase">
                  SAFETY
                </Link>
                <Link to="/terms" className="block text-muted-foreground hover:text-primary uppercase">
                  TERMS
                </Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-3 uppercase">CONTACT</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+91 9876543210</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>SUPPORT@TRUSTLIST.IN</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>MUMBAI, INDIA</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground uppercase">
              © 2024 TRUSTLIST. ALL RIGHTS RESERVED. MADE WITH{" "}
              <Heart className="inline h-4 w-4 text-red-500" /> FOR SUSTAINABILITY.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
