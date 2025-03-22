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
import { deleteProduct } from "../../service/deleteProduct/deleteProductapi";
import toast from "react-hot-toast";
import CategoryNav from "../ProductCategory/allProductcategory";
import { fetchProductByCategory } from "../../service/fetchProductByCategory/fetchProductByCategory";

const ProductList = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const getProducts = async () => {
    try {
      const data = await fetchProducts();
      setFilteredProducts(data); // Initially, show all products
    } catch (error) {
      setError("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };
  const handleCategorySelect = async (category: string) => {
    setLoading(true);
    try {
      console.log(`Selected category: ${category}`);
      const data = await fetchProductByCategory(category);
      setFilteredProducts(data);
    } catch (error) {
      toast.error("Failed to filter products by category");
    } finally {
      setLoading(false);
    }
  };

  const confirmDelete = () => {
    return new Promise<boolean>((resolve) => {
      toast(
        (t) => (
          <div>
            <p>Are you sure you want to delete this product?</p>
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <button
                onClick={() => {
                  toast.dismiss(t.id);
                  resolve(true);
                }}
                style={{
                  background: "red",
                  color: "white",
                  padding: "5px 10px",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
              >
                Yes
              </button>
              <button
                onClick={() => {
                  toast.dismiss(t.id);
                  resolve(false);
                }}
                style={{
                  background: "gray",
                  color: "white",
                  padding: "5px 10px",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
              >
                No
              </button>
            </div>
          </div>
        ),
        { duration: Infinity }
      );
    });
  };

  const handleDelete = async (productId: number) => {
    const isConfirmed = await confirmDelete();
    if (!isConfirmed) return;

    const deleteToast = toast.loading("Deleting product...");
    try {
      const deletedProduct = await deleteProduct(productId);
      toast.success(`Product "${deletedProduct.title}" deleted successfully!`, {
        id: deleteToast,
      });
    } catch (error) {
      toast.error("Failed to delete the product. Try again!", {
        id: deleteToast,
      });
    }
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

  const handleAddProduct = () => {
    navigate("/addProduct");
  };

  const handleUpdate = (product: Product) => {
    navigate("/updateProduct", { state: { product } });
  };

  const handleProductClick = (product: Product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div>
      <div className="navbar">
        <div className="nav-title">Ecommerce</div>
        <div className="nav-buttons">
          <Button
            color="primary"
            variant="contained"
            onClick={handleAddProduct}
            className="nav-btn"
          >
            Add Product
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={handleLogout}
            className="nav-btn"
          >
            Logout
          </Button>
        </div>
      </div>

      <div>

      <div>
      <CategoryNav onCategorySelect={handleCategorySelect}  />
      </div>

        <Container>
          <Typography
            variant="h4"
            align="center"
            sx={{ marginBottom: "50px", marginTop: "20px", color: "deeppink" }}
          >
            Product List
          </Typography>
          <Grid container spacing={4}>
            {filteredProducts.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{ backgroundColor: "rgba(151, 151, 151, 0.33)" }}
                  className="productCard"
                >
                  <CardMedia
                    onClick={() => handleProductClick(product)}
                    component="img"
                    height="180"
                    image={product.thumbnail}
                    alt={"ProductImage"}
                  />
                  <CardContent onClick={() => handleProductClick(product)}>
                    <Typography variant="h6" className="product-title">
                      {product.title}
                    </Typography>
                    <Typography variant="body1">
                      Discount: {product.discountPercentage}%
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Price: ${product.price}
                    </Typography>
                    <Rating value={product.rating} precision={0.5} readOnly />
                  </CardContent>
                  <div className="card-buttons">
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleUpdate(product)}
                    >
                      Update
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default ProductList;


