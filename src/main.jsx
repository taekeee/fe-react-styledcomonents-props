import React from "react";
import MediaCard from "./components/MediaCard";

const Main = () =>{
  return(
    <>
    <MediaCard url="img/naver.png" title="Heading1" text="This is a short description1." buttonColor="green"/>
    <MediaCard url="img/google.png" title="Heading2" text="This is a short description2." buttonColor="blue"/>
    <MediaCard url="img/kakao.png" title="Heading3" text="This is a short description3." buttonColor="orange"/>
    <MediaCard url="img/carrot.png" title="Heading4" text="This is a short description4." buttonColor="purple"/>
    <MediaCard url="img/github.png" title="Heading5" text="This is a short description5." buttonColor="darkblue"/>
    </>
  );
}
export default Main;


