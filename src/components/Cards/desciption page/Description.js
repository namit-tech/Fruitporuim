import React, { useEffect, useState } from "react";
import image from "../../../assets/pineapple.JPG";
import banana from "../../../assets/banana.JPG";
import papaya from "../../../assets/papaya.JPG";
import quality from "../../../assets/guarantee-certificate.png";
import "./description.css";

const Description = () => {
  const [currentImage, setCurrentImage] = useState(image);

  useEffect(() => {
    const magnifier = document.getElementById("magnifier");
    const imgContainer = document.querySelector(".img-container");
    const img = document.querySelector(".product-img");

    function moveMagnifier(e) {
      const pos = getCursorPos(e);
      let x = pos.x;
      let y = pos.y;
      const magnifierWidth = magnifier.offsetWidth / 2;
      const magnifierHeight = magnifier.offsetHeight / 2;

      // Prevent magnifier from being positioned outside the image
      if (x > img.width - magnifierWidth) x = img.width - magnifierWidth;
      if (x < magnifierWidth) x = magnifierWidth;
      if (y > img.height - magnifierHeight) y = img.height - magnifierHeight;
      if (y < magnifierHeight) y = magnifierHeight;

      magnifier.style.left = `${x - magnifierWidth}px`;
      magnifier.style.top = `${y - magnifierHeight}px`;
      magnifier.style.backgroundPosition = `-${x * 2 - magnifierWidth}px -${
        y * 2 - magnifierHeight
      }px`;
    }

    function getCursorPos(e) {
      const rect = img.getBoundingClientRect();
      const x = e.pageX - rect.left;
      const y = e.pageY - rect.top;
      return { x: x - window.pageXOffset, y: y - window.pageYOffset };
    }

    imgContainer.addEventListener("mousemove", moveMagnifier);
    imgContainer.addEventListener("mouseenter", () => {
      magnifier.style.display = "block";
      magnifier.style.backgroundImage = `url(${img.src})`;
      magnifier.style.backgroundSize = `${img.width * 2}px ${img.height * 2}px`;
    });
    imgContainer.addEventListener("mouseleave", () => {
      magnifier.style.display = "none";
    });

    return () => {
      imgContainer.removeEventListener("mousemove", moveMagnifier);
      imgContainer.removeEventListener("mouseenter", () => {});
      imgContainer.removeEventListener("mouseleave", () => {});
    };
  }, [currentImage]);

  const images = [image, banana, papaya, image];
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <div className="desc-main">
        <div className="img-sec">
          <div className="img-container">
            <img src={currentImage} alt="Product" className="product-img" />
            <div className="magnifier-glass" id="magnifier"></div>
          </div>
          <div className="img-select">
            {images.map((img, index) => (
              <div className="img-item" key={index}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentImage(img);
                  }}
                >
                  <img src={img} alt={`Thumbnail ${index + 1}`} />
                </a>
              </div>
            ))}
          </div>
        </div>
        {/* <hr className="vertical-partition"/> */}
        <div className="info-sec">
          <p className="name">Pineapple, Type </p>
          <p className="mrp">MRP: RS102</p>
          <p className="price">Price: RS75</p>
          <p className="tax">(Inclusive of all taxes)</p>
          <div className="desc-btn">
            <button className="add-btn">ADD</button>
            <button className="save-btn">Save for Later</button>
          </div>
          {/* <hr className="desc-partition"/> */}
          <h3 className="head-size">Pack Sizes</h3>
          <div className="packs">
            <button className="size-1 slab">
              <p>1kg</p>
              <p>Rs 462</p>
            </button>
            <button className="size-1 slab">
              <p>1kg</p>
              <p>Rs 462</p>
            </button>
            <button className="size-1 slab">
              <p>1kg</p>
              <p>Rs 462</p>
            </button>
          </div>
        </div>
      </div>
      <div className="desc-section">
        <hr />
        <h3 className="second-head">Why choose Fruitporium?</h3>
        <div className="boxes">
          <div className="box">
            <img src={quality} />
            <h6>Quality</h6>
            <p>You can trust</p>
          </div>
          <div className="box">
            <img src={quality} />
            <h6>Quality</h6>
            <p>You can trust</p>
          </div>
          <div className="box">
            <img src={quality} />
            <h6>Quality</h6>
            <p>You can trust</p>
          </div>
          <div className="box">
            <img src={quality} />
            <h6>Quality</h6>
            <p>You can trust</p>
          </div>
        </div>
        <div className="desc-data">
      <div>
        <h5>About the product</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          veritatis qui quam illum a placeat voluptatum repudiandae quidem
          natus. Voluptatibus!
        </p>
      </div>
      <hr className="desc-hr" />
      <div>
        <h5>Other Product Info</h5>
        <button onClick={toggleVisibility}>
          {isVisible ? "-" : "+"}
        </button>
        {isVisible && (
          <div>
            <h6>Type :</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              reprehenderit nesciunt, veniam quia qui exercitationem iste a nisi
              deleniti ipsa!
            </p>
            <h6>Country of Origin :</h6>
            <p>India</p>
            <h6>Benefits :</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              reprehenderit nesciunt, veniam quia qui exercitationem iste a nisi
              deleniti ipsa!
            </p>
            <h6>Ingredients :</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              reprehenderit nesciunt, veniam quia qui exercitationem iste a nisi
              deleniti ipsa!
            </p>
            <h6>Unit :</h6>
            <p>2</p>
            <h6>Fssai license :</h6>
            <p>223344</p>
            <h6>Shelf Life :</h6>
            <p>years</p>
            <h6>Customer care Details :</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              reprehenderit nesciunt,
            </p>
            <h6>Return Policy :</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              reprehenderit nesciunt,
            </p>
            <h6>Description :</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              reprehenderit nesciunt,
            </p>
          </div>
        )}
      </div>
    </div>
      </div>
    </>
  );
};

export default Description
