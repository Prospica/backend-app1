const { user, product, negotiation } = require('../models');

class NegotiationController {
  create = (req, res) => {
    try {
      negotiation.create({
        buyer_uid: req.body.buyer_uid,
        seller_uid: req.body.seller_uid,
        product_id: req.body.product_uid,
        price: req.body.price
      })
      res.status(200).json("Success")
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err
      })
    }
  }

  read = async (req, res) => {
    console.log(req.headers.uid);

    try {
      const data = await negotiation.findAll({
        where: {
          seller_uid: req.headers.uid
        }
      })
      res.status(200).json(data)
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err
    })
    }
  }
}

module.exports = NegotiationController;