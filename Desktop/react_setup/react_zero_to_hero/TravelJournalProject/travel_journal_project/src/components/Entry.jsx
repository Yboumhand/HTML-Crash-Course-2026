import marker from "../assets/marker.png";

export default function Entry({
  img,
  title,
  country,
  googleMapsLink,
  dates,
  text,
}) {
  return (
    <article className="journal-entry">
      <div className="main-entry-image">
        <img src={img.src} alt={img.alt || title} className="entry-image" />
      </div>

      <div className="parent-container">
        <img src={marker} alt="location icon" className="marker-map-icon" />
        <span className="country-name">{country}</span>
        <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
          View on Google Maps
        </a>

        <h2 className="landscape-name">{title}</h2>
        <p className="date">{dates}</p>

        <p className="description">{text}</p>
      </div>
    </article>
  );
}

// // import fuji from "../assets/fuji.png";
// import marker from "../assets/marker.png";

// export default function Entry(props) {
//   return (
//     <article className="journal-entry">
//       <div className="main-entry-image">
//         <img src={props.img.src} alt={props.img.alt} className="entry-image" />
//       </div>
//       <div className="parent-container">
//         <img src={marker} alt="location icon" className="marker-map-icon" />
//         <span className="country-name">{props.country}</span>
//         <a href={props.googleMapsLink}>View on Google Maps</a>
//         <h2 className="landscape-name">{props.title}</h2>
//         <p className="date">{props.dates}</p>
//         <p className="description">
//           {props.text}
//           Japan, for both Japanese and foreign tourists.
//         </p>
//       </div>
//     </article>
//   );
// }
