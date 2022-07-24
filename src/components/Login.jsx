import React from 'react';
import styled from 'styled-components';


const Login = () => {

  const handleClick = () => {

    const clientID = process.env.REACT_APP_SPOTIFY_KEY;

    const redirectUrl = "http://localhost:3000/";

    const apiUrl = "https://accounts.spotify.com/authorize";

    const scopes = [
        "user-read-email",
        "user-read-private",
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-read-playback-state",
        "user-top-read",
        "user-modify-playback-state",
        "user-read-playback-position"
    ];

    window.location.href = `${apiUrl}?client_id=${clientID}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

  };

  return (

    <Container>

        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt="Spotify logo" />
        <button onClick={handleClick}> Connect Spotify </button>

    </Container>

  )

};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #1db954;
    gap: 5rem;

    img{
        height: 20vw;
        object-fit: contain;
    }

    button{
        padding: 1rem 5rem;
        border-radius: 5rem;
        border: none;
        background-color: black;
        color: #49f585;
        font-size: 1.4rem;
        cursor: pointer;
        &:hover{
            transform: translateY(scale(1.08));
            transition: 0.3s ease-in-out;
        }
        
    }

`;

export default Login;

