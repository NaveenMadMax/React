import { useEffect, useState } from "react";
import { fetchProducts } from "../../service/product/productapi";
import { Product } from "../../entity/products";
import { Button, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Rating from "@mui/material/Rating";
import "./ProductList.css";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const getProducts = async () => {
    const data = await fetchProducts();
    if (data.length > 0) {
      setProducts(data);
    } else {
      setError("No products found");
    }
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (loading)
    return (
      <div className="loading-container">
        <CircularProgress color="secondary" size={100} />
      </div>
    );
  if (error) return <p className="error-message">{error}</p>;

  const handleLogout = () => {
    navigate("/"); 
  };

  const handleAddProduct=()=>{
    navigate("/addProduct")
  }

  return (
    <div>
      <nav className="navbar">
      <div className="nav-title">Ecommerce</div>
      <div className="nav-buttons">
        <Button color="primary" variant="contained" onClick={handleAddProduct} className="nav-btn">
          Add Product
        </Button>
        <Button color="secondary" variant="contained" onClick={handleLogout} className="nav-btn">
          Logout
        </Button>
      </div>
    </nav>
      <Container>
        <Typography
          variant="h4"
          align="center"
          sx={{ marginBottom: "50px", marginTop: "20px", color: "deeppink" }}
        >
          Product List
        </Typography>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{ backgroundColor: "rgba(151, 151, 151, 0.33)" }}
                className="productCard"
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={product.thumbnail}
                  alt={"ProductImage"}
                />
                <CardContent>
                  <Typography variant="h6">{product.title}</Typography>
                  <Typography variant="body1">
                    Discount: {product.discountPercentage}%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: ${product.price}
                  </Typography>
                  <Rating value={product.rating} precision={0.5} readOnly />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ProductList;
