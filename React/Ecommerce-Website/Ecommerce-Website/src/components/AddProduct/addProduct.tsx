import { Button, TextField } from "@mui/material";
import "./addProduct.css";
import { useEffect, useState } from "react";
import { addProductAPI } from "../../service/addProduct/addProductapi";
import { AddProduct } from "../../entity/addProduct";
import { useNavigate } from "react-router-dom";

const addProduct = () => {
  const [product, setProduct] = useState<AddProduct>({
    title: "",
    thumbnail: "",
    price: 0,
    discountPercentage: 0,
    stock: 0,
  });
  const [titleError, setTitleError] = useState<string>("");
  const [thumbnailError, setThumbnailError] = useState<string>("");
  const [priceError, setPriceError] = useState<string>("");
  const [discountError, setDiscountError] = useState<string>("");
  const [stockError, setStockError] = useState<string>("");
  const [submit, setSubmit] = useState<boolean>(false);
  const navigate = useNavigate();
  

  const handleAddProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });

    // Clear error when user types
    if (e.target.name === "title") setTitleError("");
    if (e.target.name === "thumbnail") setThumbnailError("");
    if (e.target.name === "price") setPriceError("");
    if (e.target.name === "discountPercentage") setDiscountError("");
    if (e.target.name === "stock") setStockError("");
  };

  const handleSubmit = () => {
    let valid = true;
    
    if (!product.title) {
      setTitleError("Title is required");
      valid = false;
    } else {
      setTitleError("");
    }

    if (!product.thumbnail) {
      setThumbnailError("Thumbnail URL is required");
      valid = false;
    } else {
      setThumbnailError("");
    }

    if (!product.price) {
      setPriceError("Price is required");
      valid = false;
    } else if ( Number(product.price) <= 0) {
      setPriceError("Enter a valid price");
      valid = false;
    } else {
      setPriceError("");
    }

    if (!product.discountPercentage) {
      setDiscountError("Discount is required");
      valid = false;
    } else if (
      Number(product.discountPercentage) < 0 ||
      Number(product.discountPercentage) > 99) 
      {
      setDiscountError("Discount must be between 0% and 100%");
      valid = false;
    } else {
      setDiscountError("");
    }

    if (!product.stock) {
      setStockError("Stock is required");
      valid = false;
    } else if ( Number(product.stock) < 0) {
      setStockError("Enter a valid stock quantity");
      valid = false;
    } else {
      setStockError("");
    }

    if (valid) {
      setSubmit(true);
    }

  };

  const addProduct = async () => {
    try {
      const data = await addProductAPI(product);
      alert(`The product is added successfully with the ID: ${data.id}`);
      setProduct({  //Resets the product state, clearing the input fields so the user can add another product.
        title: "",
        thumbnail: "",
        price: 0,
        discountPercentage: 0,
        stock: 0,
      });
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product!");
    } finally {
      setSubmit(false); // Reset submit state after request is complete
      navigate("/products");
    }
  };

  useEffect(() => {
    if (!submit) return; // Run only when submit is true
    addProduct();
  }, [submit]);

  return (
    <div className="add-product-container">
      <div className="add-product-content">
        <h1>Add Product</h1>
        <form className="add-product-form">
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            name="title"
            value={product.title}
            onChange={handleAddProduct}
            error={!!titleError}
            helperText={titleError}
          />
          <TextField
            label="Thumbnail URL"
            variant="outlined"
            fullWidth
            name="thumbnail"
            value={product.thumbnail}
            onChange={handleAddProduct}
            error={!!thumbnailError}
            helperText={thumbnailError}
          />
          <TextField
            label="Price ($)"
            type="number"
            variant="outlined"
            fullWidth
            name="price"
            value={product.price}
            onChange={handleAddProduct}
            error={!!priceError}
            helperText={priceError}
          />
          <TextField
            label="Discount (%)"
            type="number"
            variant="outlined"
            fullWidth
            name="discountPercentage"
            value={product.discountPercentage}
            onChange={handleAddProduct}
            error={!!discountError}
            helperText={discountError}
          />
          <TextField
            label="Stock"
            type="number"
            variant="outlined"
            fullWidth
            name="stock"
            value={product.stock}
            onChange={handleAddProduct}
            error={!!stockError}
            helperText={stockError}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
          >
            Add Product
          </Button>
        </form>
      </div>
    </div>
  );
};

export default addProduct;
