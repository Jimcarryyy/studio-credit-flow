import React, { useState } from 'react';
import { ShoppingBag, Star, Filter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navigation from '@/components/Navigation';

const Store = () => {
  const [cartCount, setCartCount] = useState(0);

  const products = [
    {
      id: 1,
      name: "StudioLink Yoga Mat",
      price: 45,
      originalPrice: 60,
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 124,
      category: "Equipment",
      colors: ["Black", "Purple", "Green"]
    },
    {
      id: 2,
      name: "Premium Water Bottle",
      price: 25,
      image: "/placeholder.svg",
      rating: 4.9,
      reviews: 89,
      category: "Accessories",
      colors: ["Silver", "Black", "Blue"]
    },
    {
      id: 3,
      name: "StudioLink Gym Bag",
      price: 55,
      image: "/placeholder.svg",
      rating: 4.7,
      reviews: 156,
      category: "Bags",
      colors: ["Black", "Navy", "Gray"]
    },
    {
      id: 4,
      name: "Compression Socks",
      price: 18,
      image: "/placeholder.svg",
      rating: 4.6,
      reviews: 203,
      category: "Apparel",
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 5,
      name: "Resistance Bands Set",
      price: 35,
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 167,
      category: "Equipment",
      resistance: ["Light", "Medium", "Heavy"]
    },
    {
      id: 6,
      name: "StudioLink T-Shirt",
      price: 30,
      image: "/placeholder.svg",
      rating: 4.5,
      reviews: 91,
      category: "Apparel",
      colors: ["White", "Black", "Gray"],
      sizes: ["XS", "S", "M", "L", "XL"]
    }
  ];

  const addToCart = (productId: number) => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation userCredits={47} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">StudioLink Store</h1>
              <p className="text-muted-foreground">Premium fitness gear and accessories</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="relative">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Cart
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center space-x-4">
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="equipment">Equipment</SelectItem>
                <SelectItem value="apparel">Apparel</SelectItem>
                <SelectItem value="accessories">Accessories</SelectItem>
                <SelectItem value="bags">Bags</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-muted/50 relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.originalPrice && (
                  <Badge className="absolute top-2 left-2 bg-fitness-red">
                    Sale
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-4">
                <div className="mb-2">
                  <Badge variant="secondary" className="text-xs">{product.category}</Badge>
                </div>
                
                <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
                
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-muted-foreground ml-1">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-foreground">£{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        £{product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Product Options */}
                {product.colors && (
                  <div className="mb-3">
                    <p className="text-xs text-muted-foreground mb-1">Colors:</p>
                    <div className="flex space-x-1">
                      {product.colors.map((color) => (
                        <div 
                          key={color}
                          className="w-4 h-4 rounded-full border border-border bg-muted"
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {product.sizes && (
                  <div className="mb-3">
                    <p className="text-xs text-muted-foreground mb-1">Sizes:</p>
                    <div className="flex space-x-1">
                      {product.sizes.slice(0, 3).map((size) => (
                        <Badge key={size} variant="outline" className="text-xs px-2 py-0">
                          {size}
                        </Badge>
                      ))}
                      {product.sizes.length > 3 && (
                        <span className="text-xs text-muted-foreground">+{product.sizes.length - 3}</span>
                      )}
                    </div>
                  </div>
                )}

                <Button 
                  className="w-full" 
                  onClick={() => addToCart(product.id)}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-12 bg-gradient-to-r from-primary/10 to-fitness-red/10">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Get notified about new products and exclusive discounts
            </p>
            <div className="flex max-w-md mx-auto space-x-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
              />
              <Button>Subscribe</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Store;