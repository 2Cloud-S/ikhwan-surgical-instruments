import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Minus, Plus, MessageCircle } from "lucide-react";
import CheckoutHeader from "../components/header/CheckoutHeader";
import Footer from "../components/footer/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const Checkout = () => {
  const navigate = useNavigate();
  const { items: cartItems, updateQuantity, getTotalPrice, clearCart } = useCart();
  const [customerDetails, setCustomerDetails] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    country: "",
  });

  // Redirect to cart if cart is empty
  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/cart');
    }
  }, [cartItems.length, navigate]);

  const subtotal = getTotalPrice();

  const handleCustomerDetailsChange = (field: string, value: string) => {
    setCustomerDetails(prev => ({ ...prev, [field]: value }));
  };

  const generateWhatsAppMessage = () => {
    let message = `Hello! I'd like to place an order:\n\n`;

    // Add cart items
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name}`;
      if (item.size) message += ` (${item.size})`;
      message += ` x ${item.quantity} - ${item.price}\n`;
    });

    // Add total
    message += `\n*Total: €${subtotal.toLocaleString()}*\n\n`;

    // Add customer details if provided
    if (customerDetails.firstName || customerDetails.lastName) {
      message += `Customer Details:\n`;
      if (customerDetails.firstName || customerDetails.lastName) {
        message += `Name: ${customerDetails.firstName} ${customerDetails.lastName}\n`;
      }
      if (customerDetails.phone) {
        message += `Phone: ${customerDetails.phone}\n`;
      }
      if (customerDetails.address) {
        message += `Address: ${customerDetails.address}`;
        if (customerDetails.city) message += `, ${customerDetails.city}`;
        if (customerDetails.country) message += `, ${customerDetails.country}`;
        message += `\n`;
      }
    }

    return encodeURIComponent(message);
  };

  const handleWhatsAppCheckout = () => {
    const whatsappNumber = "923709450436";
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    // Clear cart and redirect to WhatsApp
    clearCart();
    toast.success("Redirecting to WhatsApp...");

    // Open WhatsApp in new window
    window.open(whatsappUrl, '_blank');

    // Redirect to home after a moment
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  const isFormValid = () => {
    return customerDetails.firstName.trim().length >= 2 &&
           customerDetails.lastName.trim().length >= 2 &&
           customerDetails.phone.trim().length >= 10;
  };

  return (
    <div className="min-h-screen bg-background">
      <CheckoutHeader />

      <main className="pt-6 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Order Summary - First on mobile, last on desktop */}
            <div className="lg:col-span-1 lg:order-2">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg p-8 sticky top-6">
                <h2 className="text-lg font-light text-foreground mb-6">Order Summary</h2>

                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-20 h-20 bg-muted rounded-none overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-light text-foreground">{item.name}</h3>
                        {item.size && (
                          <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                        )}

                        {/* Quantity controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8 p-0 rounded-none border-muted-foreground/20"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-sm font-medium text-foreground min-w-[2ch] text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8 p-0 rounded-none border-muted-foreground/20"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <div className="text-foreground font-medium">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-muted-foreground/20 mt-6 pt-6">
                  <div className="flex justify-between text-lg font-medium">
                    <span className="text-foreground">Total</span>
                    <span className="text-foreground">€{subtotal.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Left Column - Customer Details Form */}
            <div className="lg:col-span-2 lg:order-1 space-y-8">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                <h2 className="text-lg font-light text-foreground mb-6">Contact Details</h2>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-light text-foreground">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        value={customerDetails.firstName}
                        onChange={(e) => handleCustomerDetailsChange("firstName", e.target.value)}
                        className="mt-2 rounded-none"
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-light text-foreground">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        value={customerDetails.lastName}
                        onChange={(e) => handleCustomerDetailsChange("lastName", e.target.value)}
                        className="mt-2 rounded-none"
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm font-light text-foreground">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={customerDetails.phone}
                      onChange={(e) => handleCustomerDetailsChange("phone", e.target.value)}
                      className="mt-2 rounded-none"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="border-t border-muted-foreground/20 pt-6 mt-8">
                    <h3 className="text-base font-light text-foreground mb-4">Delivery Address</h3>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="address" className="text-sm font-light text-foreground">
                          Street Address
                        </Label>
                        <Input
                          id="address"
                          type="text"
                          value={customerDetails.address}
                          onChange={(e) => handleCustomerDetailsChange("address", e.target.value)}
                          className="mt-2 rounded-none"
                          placeholder="Street address"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="city" className="text-sm font-light text-foreground">
                            City
                          </Label>
                          <Input
                            id="city"
                            type="text"
                            value={customerDetails.city}
                            onChange={(e) => handleCustomerDetailsChange("city", e.target.value)}
                            className="mt-2 rounded-none"
                            placeholder="City"
                          />
                        </div>
                        <div>
                          <Label htmlFor="country" className="text-sm font-light text-foreground">
                            Country
                          </Label>
                          <Input
                            id="country"
                            type="text"
                            value={customerDetails.country}
                            onChange={(e) => handleCustomerDetailsChange("country", e.target.value)}
                            className="mt-2 rounded-none"
                            placeholder="Country"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Checkout Section */}
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                <h2 className="text-lg font-light text-foreground mb-4">Complete Your Order</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Click below to send your order via WhatsApp. We'll confirm availability and arrange payment & delivery.
                </p>

                <div className="bg-muted/10 p-6 rounded-none border border-muted-foreground/20 space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Items</span>
                    <span className="text-foreground">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</span>
                  </div>
                  <div className="flex justify-between text-lg font-medium border-t border-muted-foreground/20 pt-3">
                    <span className="text-foreground">Total</span>
                    <span className="text-foreground">€{subtotal.toLocaleString()}</span>
                  </div>
                </div>

                <Button
                  onClick={handleWhatsAppCheckout}
                  disabled={!isFormValid()}
                  className="w-full rounded-none h-12 text-base bg-green-600 hover:bg-green-700 text-white"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Continue on WhatsApp
                </Button>

                {!isFormValid() && (
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    Please fill in your name and phone number to continue
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
