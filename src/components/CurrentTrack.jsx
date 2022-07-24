import React, {useEffect} from 'react';
import styled from 'styled-components';
import { reducerCases } from '../utils/Constants';
import { useStateProvider } from '../utils/StateProvider';
import axios from "axios";



const CurrentTrack = () => {

    const [{token, currentPlaying}, dispatch] = useStateProvider();

//     useEffect(() => {

//         spotify.getMyCurrentPlaybackState().then((response) => {
//             console.log(response);
//             dispatch({
//                 type: reducerCases.SET_PLAYING,
//                 currentlyPlaying: response.is_playing,
//             });
//             dispatch({
//                 type: reducerCases.SET_ITEM,
//                 item: response.item,
//             });
//         });
//   }, [spotify, dispatch]);

  useEffect(() => {

    const getCurrentTrack = async () => {

      const response = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      if (response.data !== "") {

        const currentPlaying = {
          id: response.data.item.id,
          name: response.data.item.name,
          artists: response.data.item.artists.map((artist) => artist.name),
          image: response.data.item.album.images[2].url,
        };

        dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });

      } else {
        dispatch({ type: reducerCases.SET_PLAYING, currentPlaying: null });
      }

    };

    getCurrentTrack();

  }, [token, dispatch]);

  return (

    <Container>

        {
            currentPlaying ? (

                <div className="track">

                    <div className="track_image">
                        <img src={currentPlaying.image} alt={currentPlaying.name} />
                    </div>

                    <div className="track_info">
                        <h4>{currentPlaying.name}</h4>
                        <h6>{currentPlaying.artists.join(", ")} </h6>
                    </div>
                </div>
            ) : (
                <div className="track_info">
                    <h4>No song is playing</h4>
                    <p>...</p>
                </div>
            )
        }

    </Container>

  )

};

const Container = styled.div`
    
    .track{
        display: flex;
        align-items: center;
        gap: 1rem;
        .track_info{
            display: flex;
            flex-direction: column;
            gap: 0.3rem;
            h4{
                color: white;
            }
            h6, p{
                color: #b3b3b3;
            }
        }
    }

`;

export default CurrentTrack;