import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { updateProduct } from "../../service/updateProduct/updateProduct";
import { Product } from "../../entity/products";
import { Button, Container, TextField, Typography } from "@mui/material";
import toast from "react-hot-toast";
import "./updatedProduct.css"

const UpdateProduct = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product: Product = location.state.product;

  const [formData, setFormData] = useState({
    title: product.title,
    price: product.price,
    discountPercentage: product.discountPercentage,
    rating: product.rating,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.loading("Updating product...");
    try {
      const updatedProduct = await updateProduct(product.id, formData);
      toast.dismiss();
      toast.success(
        `Product updated successfully! 🎉\nTitle: ${updatedProduct.title}`
      );
    } catch (error) {
      toast.dismiss();
      toast.error("Failed to update product. Please try again!" + error);
    }
  };

  return (
    <div>
      <div className="updateproduct-backbutton-container">
        <Button
          className="updateProduct-backButton"
          variant="contained"
          color="secondary"
          onClick={() => {
            navigate("/products");
          }}
        >
          Back
        </Button>
      </div>
      <Container
        style={{ marginTop: "100px", position: "relative" }}
        maxWidth="sm"
      >
        <Typography variant="h4" align="center" gutterBottom>
          Update Product
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            type="number"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Discount (%)"
            name="discountPercentage"
            value={formData.discountPercentage}
            onChange={handleChange}
            type="number"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            type="number"
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Update Product
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default UpdateProduct;
