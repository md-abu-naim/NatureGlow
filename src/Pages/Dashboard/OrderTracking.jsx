import { Box, Stepper, Step, StepLabel } from '@mui/material';

const steps = ['In Progress', 'Shipped', 'Delivered']
const OrderTracking = ({ status = 'in progress' }) => {
    const stepIndex = {
        'in progress': 0,
        shipped: 1,
        delivered: 2,
    }[status.toLowerCase()] || 0
    return (
        <div className="bg-green-50 p-4 mt-6 rounded-lg">
            <div className="flex justify-between items-center pb-10">
                <h3 className="text-xl font-bold text-green-800">Order Tracking</h3>
                <div className='flex gap-2'>
                    {/* <span className={`px-2 py-1 rounded text-sm font-medium shadow-sm ${product.paymentStatus === 'Paid' ? 'bg-green-100 text-green-700' : product.paymentStatus === 'Unpaid' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
                                        paid
                                    </span>
                                    <span className={`px-2 py-1 rounded text-sm font-medium shadow-sm
                                            ${product.orderStatus === 'In Progress' ? 'bg-yellow-100 text-yellow-700' :
                                            product.orderStatus === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                                                product.orderStatus === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                        }`}>
                                        {product.orderStatus}
                                    </span> */}
                    <span className='bg-green-100 text-green-700 py-1 px-2 shadow rounded'>Paid</span>
                    <span className='border border-yellow-300 rounded-full text-yellow-400 p-1'>In Progrss</span>
                </div>
            </div>

            {/* Order tracking */}
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
        </div>
    );
};

export default OrderTracking;
