const Review = require("../model/reviewmodel");

const addreview = async (req, res, next) => {
  const { name,review,book,rating } = req.body;
  let rev;
  try {
   rev = new Review({
      name,
      review,
      book,
      rating,
    });
    await rev.save();
} catch (err) {
    console.log(err);
  }

  if (!rev) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ rev });
};



exports.addreview = addreview;