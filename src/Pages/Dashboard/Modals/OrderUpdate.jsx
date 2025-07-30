
const OrderUpdate = ({ setIsOpen, order}) => {

    const handleOrderUpdate = e => {
        e.preventDefault()
        const form = e.target
        const paymentStatus = form.payment.value
        const orderStatus = form.order.value
        console.log(paymentStatus, orderStatus);
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-green-100 w-full max-w-md rounded-lg p-6 shadow-lg border border-green-300">
                <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">Update Order</h2>
                <form onSubmit={handleOrderUpdate} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Select Payment Status</label>
                        <select name="payment" defaultValue={order.paymentStatus} className="w-full mt-1 border rounded px-2 py-1" >
                            <option value="Paid">Paid</option>
                            <option value="Unpaid">Unpaid</option>
                            <option value="Refunded">Refunded</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Select Order Status</label>
                        <select name="order" defaultValue={order.orderStatus} className="w-full mt-1 border rounded px-2 py-1" >
                            <option value="In Progress">In Progress</option>
                            <option value="Shipped">Shipped</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Cancelled ">Cancelled</option>
                        </select>
                    </div>

                    <div className="flex justify-end gap-4 p-2">
                        <button onClick={() => setIsOpen(false)} type="button" className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">Cansel</button>
                        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OrderUpdate;