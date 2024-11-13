import React, { useState } from "react"
import { Map, Marker } from "pigeon-maps"

const WorldMap = () => {
  const [anchor, setAnchor] = useState([23.8908056, 90.2318889]) // Initial position

  const handleMapClick = ({ latLng }) => {
    setAnchor(latLng) // Update marker position
  }

  return (
    <Map
      className="rounded-2xl"
      defaultCenter={[23.8908056, 90.2318889]}
      defaultZoom={11}
      onClick={handleMapClick}
    >
      <Marker width={30} anchor={anchor} color="#FE4711" />
    </Map>
  )
}

export default WorldMap
