import React from "react";
import { Carousel } from "react-bootstrap";

const ImageCarousel = ({ val, type = "sample", ie = "n", event_img,num=4 }) => {
  const carouselStyle = {
    paddingTop: val === "x" ? "" : "65px",
  };

  const numberOfImages = num;
  const imgs = Array.from({ length: numberOfImages }, (_, index) => index);

  return (
    <Carousel
      style={carouselStyle}
      interval={3000}
      className="custom-carousel"
      controls={false}
      pause={true}
      wrap
    >
      {imgs.map((index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={
              ( ie !== "y")
                ?`${process.env.PUBLIC_URL}/images/${type}/img${index}.png`: event_img
                 
            }
            // src={require(`../images/${type}/img${index}.jpg`)}
            alt={`Slide ${index + 1}`}
          />
          {/* <Carousel.Caption>
            <h3>{`Slide ${index + 1}`}</h3>
            <p>{`Description for Slide ${index + 1}`}</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;

// import React, { useState, useEffect } from "react";
// import { Carousel } from "react-bootstrap";

// const ImageCarousel = ({ val, type = "ckts", event_img, evt = "n" }) => {
//   const [images, setImages] = useState([]);

//   const carouselStyle = {
//     paddingTop: val === "x" ? "" : "65px",
//   };
//   // const a = ;

//   useEffect(() => {
//     const importImages = async () => {
//       try {
//         const imagesModule = await import(`../images/ckts`);
//         const images = Object.keys(imagesModule).map((key) =>
//           key.replace("./", "")
//         );
//         setImages(images);
//         console.log(images);
//       } catch (error) {
//         console.error("Error loading images:", error);
//       }
//     };

//     importImages();
//   }, [type]);

//   return (
//     <Carousel
//       style={carouselStyle}
//       pause={true}
//       interval={3000}
//       className="custom-carousel"
//       controls={false}
//       wrap
//     >
//       {images.map((image, index) => (
//         <Carousel.Item key={index}>
//           <img
//             className="d-block w-100"
//             src={
//               index === 0 && evt === "y"
//                 ? event_img
//                 : `${process.env.PUBLIC_URL}/images/ckts/${image}`
//             }
//             alt={`Slide ${index + 1}`}
//           />
//           {/* <Carousel.Caption>
//             <h3>{`Slide ${index + 1}`}</h3>
//             <p>{`Description for Slide ${index + 1}`}</p>
//           </Carousel.Caption> */}
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// };

// export default ImageCarousel;

// import React from "react";
// import { Carousel } from "react-bootstrap";

// const ImageCarousel = ({ val, imgs = ["t_logo.jpg", "temp.jpg"] }) => {
//   const carouselStyle = {
//     paddingTop: val === "x" ? "" : "65px",
//   };

//   return (
//     <Carousel
//       style={carouselStyle}
//       interval={3000}
//       className="custom-carousel"
//       wrap
//     >
//       {imgs.map((img, index) => (
//         <Carousel.Item key={index}>
//           <img
//             className="d-block w-100"
//             src={`${process.env.PUBLIC_URL}/images/${img}`}
//             alt={`Slide ${index + 1}`}
//           />
//           <Carousel.Caption>
//             <h3>{`Slide ${index + 1}`}</h3>
//             <p>{`Description for Slide ${index + 1}`}</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// };

// export default ImageCarousel;
