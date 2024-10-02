import { Product } from "../models/Product.js";


// create prodcut controller
export const createProduct = async (req, res) => {
  try {
    console.log(req.body);

    const { name, quantity } = req.body;

    if (!name || !quantity) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const prouduct = await Product.create({
      name,
      quantity,
    });

    res.status(201).json({
      success: true,
      message: "Product Created successfully",
      product: prouduct,
    });

    console.log("Product created successfully", prouduct);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Internal server error,  ${error.message}`,
    });
  }
};


//get all Products controller

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    if (!products) {
      return res.status(404).json({
        success: true,
        message: "No data found in the Database",
      });
    }

    res.status(200).json({
      success: true,
      message: "Producsts Data fetch successfully",
      ProductData: products,
    });
    console.log("All Products data is here", products);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `There is Error in Fetching All Products, ${error.message}`,
    });
  }
};

// Update product controller

export const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const updateNumber = parseInt(req.query.number);

  // Find the product by ID
  const product = await Product.findById(productId);

  console.log("Product", product);
  console.log("Product id ", productId);
  console.log("updatednumber", updateNumber);

  try {
    if (product) {
      product.quantity = updateNumber;

      await product.save();

      res.status(200).json({
        success: true,
        message: "Product quantity updated successfully",
        product: product,
      });
    } else {
      res.status(404).json({ success: false, message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `There is some error in the update product, ${error.message}`,
    });
  }
};



// Delete Products controller

export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedProduct = await Product.deleteOne({ _id: id });

    if (!deletedProduct) {
      res.status(404).json({
        success: false,
        message: "Product No found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product Deleted Successfully",
      DeletedData: deleteProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `There is some error in delete the product, ${error.message}`,
    });
  }
};
