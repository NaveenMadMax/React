import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Product } from "../../entity/products";
import { getSingleProduct } from "../../service/getSingleProduct/productDetail";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CircularProgress,
  Rating,
} from "@mui/material";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const fetchProduct = async () => {
    try {
      const productData = await getSingleProduct(Number(id));
      setProduct(productData);
    } catch (err) {
      setError("Failed to fetch product details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <CircularProgress color="secondary" size={80} />
      </div>
    );
  }

  if (error || !product) {
    return (
      <Typography variant="h6" align="center">
        {error || "Product not found"}
      </Typography>
    );
  }

  const finalPrice = (
    product.price *
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  return (
    <div className="product-detail-container">
      <div className="backbutton-container">
        <Button
          className="backButton"
          variant="contained"
          color="secondary"
          onClick={() => {
            navigate("/products");
          }}
        >
          Back
        </Button>
      </div>
      <Card className="product-detail-card">
        <CardMedia
          component="img"
          className="product-image"
          image={product.thumbnail}
          alt={product.title}
        />
        <CardContent className="cardContent">
          <Typography className="product-title">{product.title}</Typography>
          <Typography className="product-description">
            {product.description}
          </Typography>
          <Typography className="product-price">
            Price: <del>${product.price.toFixed(2)}</del>{" "}
            <strong>${finalPrice}</strong>
          </Typography>
          <Typography className="product-discount">
            Discount: {product.discountPercentage}%
          </Typography>
          <Typography className="product-stocks">
            Stocks:{product.stock}
          </Typography>
          <Typography className="product-returnPolicy">
            ReturnPolicy:{product.returnPolicy}
          </Typography>
          <Typography className="product-warrenty">
            Warrenty:{product.warrantyInformation}
          </Typography>
          <Rating value={product.rating} precision={0.5} readOnly />
          <div className="button-container">
            <Button variant="contained" color="primary">
              Add to Cart
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetail;
