import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingCart, ArrowLeft } from 'lucide-react';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/contexts/CartContext';

const Cart = () => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  const subtotal = getTotalPrice();
  const shipping = items.length > 0 ? 15 : 0; // Flat rate shipping
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 pt-6 pb-16">
          <section className="w-full px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg p-12 text-center">
                <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h2 className="text-2xl font-light mb-2">Your cart is empty</h2>
                <p className="text-muted-foreground mb-8">
                  Add some surgical instruments to get started
                </p>
                <Button onClick={() => navigate('/category/all')} size="lg">
                  Continue Shopping
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 pt-6 pb-16">
        <section className="w-full px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <Button
                variant="ghost"
                onClick={() => navigate(-1)}
                className="mb-4"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Continue Shopping
              </Button>
              <h1 className="text-3xl font-light">Shopping Cart</h1>
              <p className="text-muted-foreground mt-2">
                {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg p-6">
                  <div className="space-y-6">
                    {items.map((item) => (
                      <div key={item.id}>
                        <div className="flex gap-6">
                          {/* Product Image */}
                          <Link
                            to={`/product/${item.id}`}
                            className="w-32 h-32 rounded-lg overflow-hidden bg-muted flex-shrink-0"
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                            />
                          </Link>

                          {/* Product Details */}
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-2">
                              <div className="flex-1 min-w-0 pr-4">
                                <Link
                                  to={`/product/${item.id}`}
                                  className="hover:underline"
                                >
                                  <h3 className="font-medium text-lg truncate">
                                    {item.name}
                                  </h3>
                                </Link>
                                <p className="text-sm text-muted-foreground mt-1">
                                  {item.category}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {item.material} • {item.size}
                                </p>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 flex-shrink-0"
                                onClick={() => removeFromCart(item.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                              {/* Quantity Controls */}
                              <div className="flex items-center gap-2 bg-background rounded-lg border">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-10 w-10"
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity - 1)
                                  }
                                >
                                  <Minus className="h-4 w-4" />
                                </Button>
                                <span className="text-sm font-medium w-12 text-center">
                                  {item.quantity}
                                </span>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-10 w-10"
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity + 1)
                                  }
                                >
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </div>

                              {/* Price */}
                              <div className="text-right">
                                <p className="font-semibold text-lg">
                                  ${(item.price * item.quantity).toFixed(2)}
                                </p>
                                {item.quantity > 1 && (
                                  <p className="text-sm text-muted-foreground">
                                    ${item.price} each
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <Separator className="mt-6" />
                      </div>
                    ))}
                  </div>

                  {/* Clear Cart Button */}
                  <div className="mt-6 pt-6 border-t">
                    <Button
                      variant="ghost"
                      onClick={clearCart}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Clear Cart
                    </Button>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg p-6 sticky top-6">
                  <h2 className="text-xl font-light mb-6">Order Summary</h2>

                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-medium">
                        {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tax (8%)</span>
                      <span className="font-medium">${tax.toFixed(2)}</span>
                    </div>

                    <Separator />

                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => navigate('/checkout')}
                    className="w-full mt-6"
                    size="lg"
                  >
                    Proceed to Checkout
                  </Button>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Secure checkout • Free returns
                  </p>

                  {/* Promo Code */}
                  <div className="mt-6 pt-6 border-t">
                    <h3 className="text-sm font-medium mb-3">Promo Code</h3>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Enter code"
                        className="flex-1 px-3 py-2 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                      <Button variant="outline" size="sm">
                        Apply
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
