import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Recycle, 
  Plus, 
  Search, 
  Filter, 
  Heart, 
  MessageCircle, 
  ShoppingCart,
  Package,
  TrendingUp,
  MapPin,
  Star,
  LogOut,
  User,
  Settings
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const userData = localStorage.getItem("trustlist_user");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("trustlist_user");
    toast({
      title: "LOGGED OUT",
      description: "SEE YOU AGAIN SOON!",
    });
    navigate("/");
  };

  const mockListings = [
    {
      id: 1,
      title: "iPhone 13 - Excellent Condition",
      price: "₹45,000",
      location: "Mumbai, Maharashtra",
      image: "/placeholder.svg",
      verified: true,
      rating: 4.8
    },
    {
      id: 2,
      title: "MacBook Air M1 - Like New",
      price: "₹75,000",
      location: "Delhi, Delhi",
      image: "/placeholder.svg",
      verified: true,
      rating: 4.9
    },
    {
      id: 3,
      title: "Nike Air Max Sneakers",
      price: "₹3,500",
      location: "Bangalore, Karnataka",
      image: "/placeholder.svg",
      verified: false,
      rating: 4.5
    }
  ];

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
              <Link to="/" className="flex items-center space-x-2">
                <Recycle className="h-8 w-8 text-primary" />
                <h1 className="text-xl font-bold text-primary">TRUSTLIST</h1>
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="btn-text">
                <Plus className="h-4 w-4 mr-2" />
                ADD LISTING
              </Button>
              
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>{user.name?.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium uppercase">{user.name}</span>
              </div>
              
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleLogout}
                className="btn-text"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">QUICK ACTIONS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link to="/profile">
                  <Button variant="outline" className="w-full justify-start btn-text">
                    <User className="h-4 w-4 mr-2" />
                    PROFILE
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start btn-text">
                  <Package className="h-4 w-4 mr-2" />
                  MY LISTINGS
                </Button>
                <Button variant="outline" className="w-full justify-start btn-text">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  ORDERS
                </Button>
                <Button variant="outline" className="w-full justify-start btn-text">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  MESSAGES
                </Button>
                <Button variant="outline" className="w-full justify-start btn-text">
                  <Heart className="h-4 w-4 mr-2" />
                  WISHLIST
                </Button>
                <Button variant="outline" className="w-full justify-start btn-text">
                  <Settings className="h-4 w-4 mr-2" />
                  SETTINGS
                </Button>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-sm">YOUR IMPACT</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase">ITEMS SOLD</span>
                  <Badge variant="secondary">12</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase">ITEMS BOUGHT</span>
                  <Badge variant="secondary">8</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase">CO₂ SAVED</span>
                  <Badge className="earth-gradient">45 KG</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase">RATING</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 fill-current text-yellow-500" />
                    <span className="text-xs">4.8</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9">
            <div className="space-y-6">
              {/* Welcome Section */}
              <Card className="earth-gradient text-primary-foreground">
                <CardContent className="p-6">
                  <h2 className="text-lg font-bold mb-2">WELCOME BACK, {user.name?.toUpperCase()}!</h2>
                  <p className="text-sm opacity-90 uppercase">
                    CONTINUE YOUR SUSTAINABLE SHOPPING JOURNEY
                  </p>
                  <div className="flex items-center space-x-4 mt-4">
                    <Button variant="secondary" size="sm" className="btn-text">
                      <Plus className="h-4 w-4 mr-2" />
                      SELL SOMETHING
                    </Button>
                    <Button variant="outline" size="sm" className="btn-text border-white/20 text-white hover:bg-white/10">
                      <Search className="h-4 w-4 mr-2" />
                      BROWSE ITEMS
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Search and Filters */}
              <Card>
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input 
                        placeholder="SEARCH FOR ITEMS..."
                        className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background text-sm placeholder:normal-case"
                      />
                    </div>
                    <Button variant="outline" className="btn-text">
                      <Filter className="h-4 w-4 mr-2" />
                      FILTERS
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Listings Tabs */}
              <Tabs defaultValue="featured" className="space-y-4">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="featured" className="btn-text">FEATURED</TabsTrigger>
                  <TabsTrigger value="nearby" className="btn-text">NEARBY</TabsTrigger>
                  <TabsTrigger value="trending" className="btn-text">TRENDING</TabsTrigger>
                  <TabsTrigger value="recent" className="btn-text">RECENT</TabsTrigger>
                </TabsList>

                <TabsContent value="featured">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {mockListings.map((listing) => (
                      <Card key={listing.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="aspect-square bg-muted relative">
                          <img 
                            src={listing.image} 
                            alt={listing.title}
                            className="w-full h-full object-cover"
                          />
                          {listing.verified && (
                            <Badge className="absolute top-2 right-2 earth-gradient">
                              VERIFIED
                            </Badge>
                          )}
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="absolute top-2 left-2 h-8 w-8 p-0"
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-medium text-sm line-clamp-2 uppercase">
                            {listing.title}
                          </h3>
                          <p className="text-lg font-bold text-primary mt-1">
                            {listing.price}
                          </p>
                          <div className="flex items-center space-x-1 mt-2 text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            <span className="uppercase">{listing.location}</span>
                          </div>
                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center space-x-1">
                              <Star className="h-3 w-3 fill-current text-yellow-500" />
                              <span className="text-xs">{listing.rating}</span>
                            </div>
                            <Button size="sm" className="btn-text">
                              VIEW
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="nearby">
                  <div className="text-center py-12">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium uppercase">NEARBY ITEMS</h3>
                    <p className="text-sm text-muted-foreground uppercase mt-2">
                      ENABLE LOCATION TO SEE ITEMS NEAR YOU
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="trending">
                  <div className="text-center py-12">
                    <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium uppercase">TRENDING ITEMS</h3>
                    <p className="text-sm text-muted-foreground uppercase mt-2">
                      MOST POPULAR ITEMS THIS WEEK
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="recent">
                  <div className="text-center py-12">
                    <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium uppercase">RECENT LISTINGS</h3>
                    <p className="text-sm text-muted-foreground uppercase mt-2">
                      LATEST ITEMS ADDED TO THE MARKETPLACE
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;