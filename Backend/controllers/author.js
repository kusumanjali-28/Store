const Author = require("../model/authormodel");

const addauthor = async (req, res, next) => {
  const { name,email,bio, image } = req.body;
  let author;
  try {
   author = new Author({
      name,
      email,
      bio,
      image,
    });
    await author.save();
} catch (err) {
    console.log(err);
  }

  if (!author) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ author });
};



exports.addauthor = addauthor;