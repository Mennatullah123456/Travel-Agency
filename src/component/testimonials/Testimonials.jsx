// import React from "react";
// import Slider from "react-slick";
// import "./testimonials.css";
// export const Testimonials = () => {
//   const settings = {
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     vertical: true,
//     verticalSwiping: true,
//     beforeChange: function (currentSlide, nextSlide) {
//       console.log("before change", currentSlide, nextSlide);
//     },
//     afterChange: function (currentSlide) {
//       console.log("after change", currentSlide);
//     },
//   };

//   return (
//     <div className="testmonials">
//       <div className="testmonials_wrapper">
//         <div className="heading_2 ">
//           <span>Testimonials</span>
//           <h1 className="section_title">What People Say</h1>
//         </div>
//         <div className="testmonials_right">
//           <div className="testmonials_card">
//             <Slider {...settings}>
//               <div className="testmonials_info">
//                 <div className="testmonials_image">
//                   <img src="assets/testmoniols/testmon_1.png" alt="" />
//                 </div>
//                 <div className="testmonials_text">
//                   <p>
//                     “On the Windows talking painted pasture yet its express
//                     parties use. Sure last upon he same as knew next. Of
//                     believed or diverted no.”
//                   </p>
//                 </div>
//                 <div className="testmonials_name">
//                   <h1>Mike Taylor</h1>
//                   <span>Lahore, Pakistan</span>
//                 </div>
//               </div>
//               <div className="testmonials_info">
//                 <div className="testmonials_image">
//                   <img src="assets/testmoniols/testmon_2.png" alt="" />
//                 </div>
//                 <div className="testmonials_text">
//                   <p>
//                     “On the Windows talking painted pasture yet its express
//                     parties use. Sure last upon he same as knew next. Of
//                     believed or diverted no.”
//                   </p>
//                 </div>
//                 <div className="testmonials_name">
//                   <h1>Chris Thomas</h1>
//                   <span>CEO of Red Button</span>
//                 </div>
//               </div>
//               <div className="testmonials_info">
//                 <div className="testmonials_image">
//                   <img src="assets/testmoniols/testmon_3.png" alt="" />
//                 </div>
//                 <div className="testmonials_text">
//                   <p>
//                     “After going through a number of sites, I had to settle for
//                     Jadoo because honestly it was a no brainer trying someone
//                     else”
//                   </p>
//                 </div>
//                 <div className="testmonials_name">
//                   <h1>Sarah Connor</h1>
//                   <span>Globetrotter</span>
//                 </div>
//               </div>
//             </Slider>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
