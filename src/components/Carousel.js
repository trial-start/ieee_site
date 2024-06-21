import React from "react";
import { Carousel } from "react-bootstrap";

const ImageCarousel = ({
  val,
  type = "sample",
  ie = "n",
  imgs = "https://guhpbznkeeoorjrobehr.supabase.co/storage/v1/object/public/event-images/carousel-1.jpg--https://guhpbznkeeoorjrobehr.supabase.co/storage/v1/object/public/event-images/master_class_1.jpg--https://guhpbznkeeoorjrobehr.supabase.co/storage/v1/object/public/event-images/udbhava.jpg--https://guhpbznkeeoorjrobehr.supabase.co/storage/v1/object/public/event-images/pes_event.jpg--https://guhpbznkeeoorjrobehr.supabase.co/storage/v1/object/public/event-images/cs_event.jpg--https://guhpbznkeeoorjrobehr.supabase.co/storage/v1/object/public/event-images/css_event.jpg",
}) => {
  const carouselStyle = {
    paddingTop: val === "x" ? "" : "65px",
  };

  // console.log(event_img);
  // const numberOfImages = 4;
  // const imgs = Array.from({ length: numberOfImages }, (_, index) => index);

  return (
    <Carousel
      style={carouselStyle}
      interval={3000}
      className="custom-carousel"
      controls={false}
      pause={true}
      wrap
    >
      {imgs?.split("--")?.map((img, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={img} alt={`Slide ${index + 1}`} />
        </Carousel.Item>
      ))}

      {/* {imgs.map((index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={
              index === 0 && ie === "y"
                ? event_img
                : `${process.env.PUBLIC_URL}/images/${type}/img${index}.png`
            }
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Item>
      ))} */}
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
