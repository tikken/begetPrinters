import React from "react"
import { YMaps, Map, Placemark, FullscreenControl, SearchControl, GeolocationControl } from "react-yandex-maps"

const MyMap = () => {
  return (
    <div className={"ymap-coords"}>
      <YMaps>
        <Map defaultState={{ center: [55.67967429999999, 37.6238394], zoom: 13 }} width={"100%"} height={"375px"}>
          <Placemark geometry={[55.67967429999999, 37.6238394]}/>
          <FullscreenControl/>
          <SearchControl options={{ float: "right" }}/>
          <GeolocationControl/>
        </Map>
      </YMaps>
    </div>
  )
}

export default MyMap