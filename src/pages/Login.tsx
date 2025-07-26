import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Recycle, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store user session (mock)
      localStorage.setItem("trustlist_user", JSON.stringify({
        email,
        name: email.split("@")[0],
        isLoggedIn: true
      }));
      
      toast({
        title: "LOGIN SUCCESSFUL",
        description: "WELCOME BACK TO TRUSTLIST!",
      });
      
      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "LOGIN FAILED",
        description: "PLEASE CHECK YOUR CREDENTIALS",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    toast({
      title: `${provider.toUpperCase()} LOGIN`,
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
            INDIA'S VERIFIED MARKETPLACE
          </p>
        </div>

        <Card className="recycle-shadow">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl text-center">SIGN IN</CardTitle>
            <CardDescription className="text-center uppercase text-xs tracking-wide">
              ENTER YOUR CREDENTIALS TO ACCESS YOUR ACCOUNT
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-medium">EMAIL</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="YOUR EMAIL ADDRESS"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 uppercase placeholder:normal-case"
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
                    placeholder="YOUR PASSWORD"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
              
              <Button 
                type="submit" 
                className="w-full btn-text earth-gradient"
                disabled={isLoading}
              >
                {isLoading ? "SIGNING IN..." : "SIGN IN"}
              </Button>
            </form>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-background px-2 text-muted-foreground uppercase">
                  OR CONTINUE WITH
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant="outline" 
                className="btn-text"
                onClick={() => handleSocialLogin("google")}
              >
                GOOGLE
              </Button>
              <Button 
                variant="outline" 
                className="btn-text"
                onClick={() => handleSocialLogin("facebook")}
              >
                FACEBOOK
              </Button>
            </div>
            
            <div className="text-center text-sm">
              <span className="text-muted-foreground uppercase">DON'T HAVE AN ACCOUNT? </span>
              <Link 
                to="/signup" 
                className="text-primary hover:underline font-medium uppercase"
              >
                SIGN UP
              </Link>
            </div>
            
            <div className="text-center">
              <Link 
                to="/forgot-password" 
                className="text-xs text-muted-foreground hover:text-primary uppercase"
              >
                FORGOT PASSWORD?
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

export default Login;