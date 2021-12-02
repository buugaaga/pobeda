import { useEffect } from 'react'
// import { Box } from '@mui/system'
import { load } from '@2gis/mapgl'

export const GisMap = () => {
  console.log( process.env.REACT_APP_GIS_KEY)
  const key = process.env.REACT_APP_GIS_KEY
  useEffect(() => {
    let map: any;
    load().then((mapglAPI) => {
      // container — id of the div element in your html
      map = new mapglAPI.Map('gis-map', {
        center: [55.31878, 25.23584],
        zoom: 13,
        key,
      })
    })

    return () => map && map.destroy()
  }, [])

  return <div id="gis-map">Map will be here</div>
}
