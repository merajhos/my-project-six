const Cart = ({ cart, remove, checkout }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-xl border">

      {/* Title */}
      <h2 className="text-lg font-semibold mb-6">Your Cart</h2>

      {/* Empty */}
      {cart.length === 0 && (
        <p className="text-gray-500 text-center">Cart is empty</p>
      )}

      {/* Items */}
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-gray-100 p-4 rounded-lg"
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <img
                src={item.icon}
                alt={item.name}
                className="w-10 h-10 p-2 bg-white rounded-full"
              />

              <div>
                <h3 className="font-medium text-sm">{item.name}</h3>
                <p className="text-gray-400 text-sm">${item.price}</p>
              </div>
            </div>

            {/* Right */}
            <button
              onClick={() => remove(item.id)}
              className="text-red-500 text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Total */}
      {cart.length > 0 && (
        <>
          <div className="flex justify-between mt-6 text-sm text-gray-500">
            <span>Total:</span>
            <span className="font-semibold text-black">${total}</span>
          </div>

          {/* Button */}
          <button
            onClick={checkout}
            className="w-full mt-4 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;