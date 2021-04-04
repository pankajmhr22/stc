import "./Catalogue.scss";

export const Catalogue = () => {
  const products = [
    {
      key: "libMeera",
      displayName: "Liberty Meera",
      productImage: `${process.env.PUBLIC_URL}/logo192.png`,
    },
    { key: "topsiSai", displayName: "Topsi Sai", productImage: `${process.env.PUBLIC_URL}/logo192.png` },
    {
      key: "topsiKrishna",
      displayName: "Topsi Krishna",
      productImage: `${process.env.PUBLIC_URL}/logo192.png`,
    },
    {
      key: "mayaGulab",
      displayName: "Maya Gulab",
      productImage: `${process.env.PUBLIC_URL}/logo192.png`,
    },
    { key: "zb", displayName: "Zed Black Hari", productImage: `${process.env.PUBLIC_URL}/logo192.png` },
    {
      key: "zb3in1",
      displayName: "Zed Black 3in1",
      productImage: `${process.env.PUBLIC_URL}/logo192.png`,
    },
    {
      key: "zbPineapple",
      displayName: "Zed Black Pineapple",
      productImage: `${process.env.PUBLIC_URL}/logo192.png`,
    },
    {
      key: "zbKasturi",
      displayName: "Zed Black Kasturi",
      productImage: `${process.env.PUBLIC_URL}/logo192.png`,
    },
    {
      key: "zbArij",
      displayName: "Zed Black Arij",
      productImage: `${process.env.PUBLIC_URL}/logo192.png`,
    },
    {
      key: "zbChandan",
      displayName: "Zed Black Chandan",
      productImage: `${process.env.PUBLIC_URL}/logo192.png`,
    },
    {
      key: "zbGulab",
      displayName: "Zed Black Gulab",
      productImage: `${process.env.PUBLIC_URL}/logo192.png`,
    },
    {
      key: "zbMogra",
      displayName: "Zed Black Mogra",
      productImage: `${process.env.PUBLIC_URL}/logo192.png`,
    },
    {
      key: "zbAtarful",
      displayName: "Zed Black Atarful",
      productImage: `${process.env.PUBLIC_URL}/logo192.png`,
    },
  ];

  return (
    <div className="catalogue-container">
      <div className="catalogue-container-heading">All Products</div>
      <div className="catalogue-main-container">
      {products.map((product) => {
        return (
          <div className="stc-product stc-display-inline-block" key={product.key}>
            <img className="stc-product-image" src={product.productImage} alt="Loading..."/>
            <div className="stc-product-details">{product.displayName}</div>
          </div>
        );
      })}
      </div>
    </div>
  );
};
