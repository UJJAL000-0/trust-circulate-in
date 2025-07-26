import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { 
  Recycle, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Edit3, 
  Save, 
  X,
  Camera,
  Star,
  Package,
  ShoppingCart,
  Heart,
  ArrowLeft
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const [user, setUser] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const userData = localStorage.getItem("trustlist_user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser({
        ...parsedUser,
        phone: parsedUser.phone || "+91 9876543210",
        location: "Mumbai, Maharashtra",
        bio: "Passionate about sustainable living and reducing waste through smart shopping.",
        joinDate: "January 2024",
        rating: 4.8,
        totalSales: 12,
        totalPurchases: 8,
        verified: true
      });
      setEditedUser(parsedUser);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedUser({ ...user });
  };

  const handleSave = async () => {
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const updatedUser = { ...user, ...editedUser };
      setUser(updatedUser);
      localStorage.setItem("trustlist_user", JSON.stringify(updatedUser));
      
      setIsEditing(false);
      toast({
        title: "PROFILE UPDATED",
        description: "YOUR PROFILE HAS BEEN SUCCESSFULLY UPDATED",
      });
    } catch (error) {
      toast({
        title: "UPDATE FAILED",
        description: "PLEASE TRY AGAIN",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedUser({ ...user });
  };

  const handleInputChange = (field: string, value: string) => {
    setEditedUser((prev: any) => ({ ...prev, [field]: value }));
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/dashboard" className="flex items-center space-x-2">
                <ArrowLeft className="h-5 w-5" />
                <span className="text-sm font-medium uppercase">BACK TO DASHBOARD</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-2">
              <Recycle className="h-6 w-6 text-primary" />
              <h1 className="text-lg font-bold text-primary">TRUSTLIST</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Profile Header */}
          <Card className="recycle-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="relative">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="text-2xl">
                      {user.name?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="absolute -bottom-2 -right-2 h-8 w-8 p-0"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h1 className="text-2xl font-bold uppercase">{user.name}</h1>
                    {user.verified && (
                      <Badge className="earth-gradient">VERIFIED</Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-current text-yellow-500" />
                      <span>{user.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span className="uppercase">{user.location}</span>
                    </div>
                    <span className="uppercase">JOINED {user.joinDate}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 uppercase">
                    {user.bio}
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    {!isEditing ? (
                      <Button onClick={handleEdit} className="btn-text">
                        <Edit3 className="h-4 w-4 mr-2" />
                        EDIT PROFILE
                      </Button>
                    ) : (
                      <div className="flex space-x-2">
                        <Button 
                          onClick={handleSave} 
                          disabled={isLoading}
                          className="btn-text earth-gradient"
                        >
                          <Save className="h-4 w-4 mr-2" />
                          {isLoading ? "SAVING..." : "SAVE"}
                        </Button>
                        <Button 
                          onClick={handleCancel} 
                          variant="outline"
                          className="btn-text"
                        >
                          <X className="h-4 w-4 mr-2" />
                          CANCEL
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Information */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">PERSONAL INFORMATION</CardTitle>
                  <CardDescription className="uppercase">
                    MANAGE YOUR ACCOUNT DETAILS
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-xs font-medium">FULL NAME</Label>
                      {isEditing ? (
                        <Input
                          id="name"
                          value={editedUser.name || ""}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="uppercase"
                        />
                      ) : (
                        <div className="p-2 border rounded-md bg-muted/50 uppercase">
                          {user.name}
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs font-medium">EMAIL</Label>
                      {isEditing ? (
                        <Input
                          id="email"
                          type="email"
                          value={editedUser.email || ""}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                        />
                      ) : (
                        <div className="p-2 border rounded-md bg-muted/50">
                          {user.email}
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-xs font-medium">PHONE</Label>
                      {isEditing ? (
                        <Input
                          id="phone"
                          value={editedUser.phone || ""}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                      ) : (
                        <div className="p-2 border rounded-md bg-muted/50">
                          {user.phone}
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-xs font-medium">LOCATION</Label>
                      {isEditing ? (
                        <Input
                          id="location"
                          value={editedUser.location || ""}
                          onChange={(e) => handleInputChange("location", e.target.value)}
                          className="uppercase"
                        />
                      ) : (
                        <div className="p-2 border rounded-md bg-muted/50 uppercase">
                          {user.location}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio" className="text-xs font-medium">BIO</Label>
                    {isEditing ? (
                      <Textarea
                        id="bio"
                        value={editedUser.bio || ""}
                        onChange={(e) => handleInputChange("bio", e.target.value)}
                        className="uppercase resize-none"
                        rows={3}
                      />
                    ) : (
                      <div className="p-2 border rounded-md bg-muted/50 uppercase">
                        {user.bio}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stats & Activity */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">ACTIVITY STATS</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Package className="h-4 w-4 text-primary" />
                      <span className="text-sm uppercase">ITEMS SOLD</span>
                    </div>
                    <Badge variant="secondary">{user.totalSales}</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <ShoppingCart className="h-4 w-4 text-primary" />
                      <span className="text-sm uppercase">ITEMS BOUGHT</span>
                    </div>
                    <Badge variant="secondary">{user.totalPurchases}</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm uppercase">RATING</span>
                    </div>
                    <Badge className="earth-gradient">{user.rating}</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Heart className="h-4 w-4 text-red-500" />
                      <span className="text-sm uppercase">CO₂ SAVED</span>
                    </div>
                    <Badge className="earth-gradient">45 KG</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">QUICK ACTIONS</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start btn-text">
                    <Package className="h-4 w-4 mr-2" />
                    MY LISTINGS
                  </Button>
                  <Button variant="outline" className="w-full justify-start btn-text">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    PURCHASE HISTORY
                  </Button>
                  <Button variant="outline" className="w-full justify-start btn-text">
                    <Heart className="h-4 w-4 mr-2" />
                    SAVED ITEMS
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;