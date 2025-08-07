import { Box, Stepper, Step, StepLabel } from '@mui/material';

const steps = ['In Progress', 'Shipped', 'Delivered']
const OrderTracking = ({_id, paymentStatus, orderStatus = 'in progress' }) => {
    const stepIndex = {
        'in progress': 0,
        shipped: 1,
        delivered: 2,
    }[orderStatus.toLowerCase()] || 0
    return (
        <div className="bg-green-50 p-4 mt-6 rounded-lg">
            <div className="flex flex-col md:flex-row justify-between items-center pb-10">
                <div className='flex flex-col md:flex-row md:items-center gap-1 md:gap-3'>
                    <h3 className="text-xl font-bold text-green-800">🧾 Order Tracking</h3>
                    <div className='text-sm text-gray-600 font-medium bg-gray-100 px-3 py-1 rounded-md shadow-sm border border-green-200'>
                        <span className='text-gray-800'>Order ID:</span> <span className='font-semibold text-green-700'>{_id?.slice(0,6)}</span>
                    </div>
                </div>
                <div className='flex gap-2 mt-2 lg:mt-0'>
                    <span className={`px-2 py-1 rounded text-sm font-medium shadow-sm ${paymentStatus === 'Paid' ? 'bg-green-100 text-green-700' : paymentStatus === 'Unpaid' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
                        {paymentStatus}
                    </span>
                    <span className={`border rounded-full px-3 py-1 text-sm font-medium shadow
                            ${orderStatus === 'In Progress' ? 'border-yellow-300 text-yellow-700' :
                            orderStatus === 'Shipped' ? 'border-blue-300 text-blue-700' :
                                orderStatus === 'Delivered' ? 'border-green-300 text-green-700' : 'border-red-300 text-red-700'
                        }`}>
                        {orderStatus}
                    </span>
                </div>
            </div>


            {/* Order tracking */}
            {
                orderStatus === "Cancelled" ? <div className="flex flex-col items-center text-center space-y-2">
                    <div className="text-red-600 text-2xl font-bold">Order Cancelled</div>
                    <p className="text-gray-600 text-sm">Your order has been cancelled. Contact support for more info.</p>
                </div> :
                    <Box sx={{ width: '100%', py: 3 }}>
                        <Stepper activeStep={stepIndex} alternativeLabel>
                            {
                                steps.map(label => (
                                    <Step key={label}>
                                        <StepLabel sx={{ '& .MuiStepLabel-label': { color: 'gray', fontWeight: 500, fontSize: '14px' }, '& .MuiStepIcon-root.Mui-active': { color: '#22c55e' }, '& .MuiStepIcon-root.Mui-completed': { color: '#22c55e' }, }}>
                                            {label}
                                        </StepLabel>
                                    </Step>
                                ))
                            }
                        </Stepper>
                    </Box>
            }
        </div>
    );
};

export default OrderTracking;
