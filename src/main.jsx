import React from "react";
import MediaCard from "./components/MediaCard";

const Main = () =>{
  return(
    <>
    <MediaCard url="img/naver.png" title="Heading1" text="This is a short description1." buttonColor="linear-gradient(to right, #3ad654, #dbe890);"/>
    <MediaCard url="img/google.png" title="Heading2" text="This is a short description2." buttonColor="linear-gradient(to right, #c24b36, #5585b5);"/>
    <MediaCard url="img/kakao.png" title="Heading3" text="This is a short description3." buttonColor="linear-gradient(to right, #69400b, #ebcb59);"/>
    <MediaCard url="img/carrot.png" title="Heading4" text="This is a short description4." buttonColor="linear-gradient(to right, #ec8106, #e0d89a);"/>
    <MediaCard url="img/github.png" title="Heading5" text="This is a short description5." buttonColor="linear-gradient(to right, #913081, #416589);"/>
    </>
  );
}
export default Main;


