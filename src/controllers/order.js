const Order = require("../models/order");

const makeOrder = async (req, res, next) => {
    let total = req.body.shipment + req.body.subtotal
    try {
        if(req.body.distance_from_store >= 10){
            req.body.shipment = 30
        } else {
            req.body.shipment = 20
        }
        data = {
            shipment: req.body.shipment,
            subtotal: req.body.subtotal,
            total,
            status: 'new',
            distance_from_store: req.body.distance_from_store,
            shipping_address: req.body.shipping_address,
            user_id: req.body.id
        }
    }
};
