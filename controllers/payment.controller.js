require('dotenv').config();
const Razorpay = require('razorpay');
const crypto = require('crypto');
const instance = new Razorpay({ key_id: process.env.KEY_ID, key_secret: process.env.KEY_SECRET })
const createOrder = (req, res) => {
    var options = {
        amount: req.params.amount * 100,  //paisa- amount in the smallest currency unit
        currency: "INR",
        receipt: "order_sample_1"
    };
    instance.orders.create(options, function (err, order) {
        console.log(order);
        res.render('checkout', {
            order,
            key: process.env.KEY_ID
        })
    });

    //Object after order creation
    // {
    //     id: 'order_HMvqsmTJ3nl8zd',
    //     entity: 'order',
    //     amount: 5000,
    //     amount_paid: 0,
    //     amount_due: 5000,
    //     currency: 'INR',
    //     receipt: 'order_sample_1',
    //     offer_id: null,
    //     status: 'created',
    //     attempts: 0,
    //     notes: [],
    //     created_at: 1623672089
    //   }
};

const successOrder = (req, res) => {
    const generateSignature = crypto.createHmac('sha256', process.env.KEY_SECRET)
        .update(req.query.razorpay_order_id + "|" + req.query.razorpay_payment_id)
        .digest('hex');

    if (generateSignature === req.query.razorpay_signature) {
        res.render('successPayment', {
            paymentID: req.query.razorpay_payment_id,
            orderID: req.query.razorpay_order_id,
            signature: req.query.razorpay_signature,
            generated: generateSignature
        });
    }else{
        res.send("Wrong Signature")
    }
};
module.exports = {
    createOrder, successOrder
}