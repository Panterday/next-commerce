import { useRouter } from "next/router";
import FeedBackContent from "../../components/feedBacks/FeedBackContent";
import Layout from "../../components/layout/layout";
import ProductDetails from "../../components/productDetails/ProductDetails";
import data from "../../src/fakeDB";

const Product = () => {
  const router = useRouter();
  const { id } = router.query;
  const item = data.find((it) => it.id === Number(id));
  console.log(item);
  if (!item) {
    return (
      <Layout>
        <div>Product not found</div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <ProductDetails
          id={id}
          itemName={item.itemName}
          image={item.image}
          description={item.description}
          price={item.price}
        />
        <FeedBackContent />
      </Layout>
    );
  }
};

export default Product;
