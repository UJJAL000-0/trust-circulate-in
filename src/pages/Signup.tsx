import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Recycle, Mail, Lock, User, Phone, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "PASSWORD MISMATCH",
        description: "PASSWORDS DO NOT MATCH",
        variant: "destructive",
      });
      return;
    }
    
    if (!acceptTerms) {
      toast({
        title: "TERMS REQUIRED",
        description: "PLEASE ACCEPT TERMS AND CONDITIONS",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Store user session (mock)
      localStorage.setItem("trustlist_user", JSON.stringify({
        email: formData.email,
        name: formData.fullName,
        phone: formData.phone,
        isLoggedIn: true
      }));
      
      toast({
        title: "ACCOUNT CREATED",
        description: "WELCOME TO TRUSTLIST!",
      });
      
      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "SIGNUP FAILED",
        description: "PLEASE TRY AGAIN",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignup = (provider: string) => {
    toast({
      title: `${provider.toUpperCase()} SIGNUP`,
      description: "FEATURE COMING SOON!",
    });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Logo Section */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center space-x-2">
            <Recycle className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">TRUSTLIST</h1>
          </div>
          <p className="text-sm text-muted-foreground uppercase tracking-wide">
            JOIN INDIA'S VERIFIED MARKETPLACE
          </p>
        </div>

        <Card className="recycle-shadow">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl text-center">CREATE ACCOUNT</CardTitle>
            <CardDescription className="text-center uppercase text-xs tracking-wide">
              START BUYING AND SELLING SUSTAINABLY
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-xs font-medium">FULL NAME</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="YOUR FULL NAME"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    className="pl-10 uppercase placeholder:normal-case"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-medium">EMAIL</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="YOUR EMAIL ADDRESS"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="pl-10 uppercase placeholder:normal-case"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-xs font-medium">PHONE NUMBER</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="YOUR PHONE NUMBER"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="pl-10 placeholder:normal-case"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-xs font-medium">PASSWORD</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="CREATE PASSWORD"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className="pl-10 pr-10 placeholder:normal-case"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 h-4 w-4 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-xs font-medium">CONFIRM PASSWORD</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="CONFIRM PASSWORD"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    className="pl-10 pr-10 placeholder:normal-case"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 h-4 w-4 text-muted-foreground hover:text-foreground"
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="terms" 
                  checked={acceptTerms}
                  onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                />
                <Label htmlFor="terms" className="text-xs">
                  I ACCEPT THE{" "}
                  <Link to="/terms" className="text-primary hover:underline">
                    TERMS AND CONDITIONS
                  </Link>
                </Label>
              </div>
              
              <Button 
                type="submit" 
                className="w-full btn-text earth-gradient"
                disabled={isLoading}
              >
                {isLoading ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
              </Button>
            </form>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-background px-2 text-muted-foreground uppercase">
                  OR SIGN UP WITH
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant="outline" 
                className="btn-text"
                onClick={() => handleSocialSignup("google")}
              >
                GOOGLE
              </Button>
              <Button 
                variant="outline" 
                className="btn-text"
                onClick={() => handleSocialSignup("facebook")}
              >
                FACEBOOK
              </Button>
            </div>
            
            <div className="text-center text-sm">
              <span className="text-muted-foreground uppercase">ALREADY HAVE AN ACCOUNT? </span>
              <Link 
                to="/login" 
                className="text-primary hover:underline font-medium uppercase"
              >
                SIGN IN
              </Link>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center">
          <Link 
            to="/" 
            className="text-sm text-muted-foreground hover:text-primary uppercase"
          >
            ← BACK TO HOME
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;