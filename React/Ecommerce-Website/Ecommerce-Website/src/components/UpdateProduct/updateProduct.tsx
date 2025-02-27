import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { updateProduct } from "../../service/updateProduct/updateProduct";
import { Product } from "../../entity/products";
import { Button, Container, TextField, Typography } from "@mui/material";

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
    try {
      const updatedProduct = await updateProduct(product.id, formData);
      alert(`Product updated successfully!\nID: ${updatedProduct.id}\nTitle: ${updatedProduct.title}`);
      navigate("/products"); 
    } catch (error) {
      alert("Failed to update product: " + error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Update Product
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Title" name="title" value={formData.title} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Price" name="price" value={formData.price} onChange={handleChange} type="number" fullWidth margin="normal" />
        <TextField label="Discount (%)" name="discountPercentage" value={formData.discountPercentage} onChange={handleChange} type="number" fullWidth margin="normal" />
        <TextField label="Rating" name="rating" value={formData.rating} onChange={handleChange} type="number" fullWidth margin="normal" />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Update Product
        </Button>
      </form>
    </Container>
  );
};

export default UpdateProduct;
