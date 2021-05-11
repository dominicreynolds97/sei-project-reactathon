import { Popup } from 'react-map-gl'
import WeatherCard from './WeatherCard'

function CustomPopup({ latitude, longitude, altitude, weather, setPopup }) {

  return (
    <div>
      <Popup
        latitude={latitude}
        longitude={longitude}
        altitude={altitude}
        offsetTop={-30}
        onClose={() => setPopup(false)}
        closeButton={false}
      >
        <WeatherCard
          name={weather.location.name}
          tempC={weather.current.temp_c}
          icon={weather.current.condition.icon}
        />
      </Popup>
    </div>
  )
}

export default CustomPopup


// import React from 'react'

// const CustomPopup = ({ feature }) => {
//   const { id, name, description } = feature.properties

//   return (
//     <div id={`popup-${id}`}>
//       <h3>{name}</h3>
//       {description}
//     </div>
//   )
// }

// export default CustomPopup