import { useState, useEffect, useRef } from "react"

export const useFetch = ( url ) => {

  // Mantener Referencia para saber que el componente esta vivo
  // Este componente useFetch
  const isMounted = useRef(true)  

  const [state, setState] = useState({data: null, loading: true, error: null});

  // Cuando se desmonte este componente pondre la refencia de este 
  // componente en false
  useEffect(() => {
    
    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect(() => {

    setState({data: null, loading: true, error: null});
    
    fetch( url )
      .then( resp => resp.json() )
      .then( data => {
        
        if( isMounted.current ) {
          setState({
            loading: false,
            error: null,
            data
          });

        } 
        
        // else {
        //   console.log('Set state no se llamo')
        // }

        // setTimeout( () => {

        //   if( isMounted.current ) {

        //     setState({
        //       loading: false,
        //       error: null,
        //       data
        //     });

        //   } else {
        //     console.log('Set state no se llamo')
        //   }

        // }, 4000 )

      })
      .catch( (err) => {
        setState({
          loading: false,
          error: 'No se pudo cargar la info',
          data: null
        });
      } )

  }, [url])

  return state;
}
