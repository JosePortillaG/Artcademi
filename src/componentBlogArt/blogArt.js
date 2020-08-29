import React from "react";
import { HeroBlogArt } from "./heroBlogArt/heroBlogArt";
import { Footer } from "../component/Footer";
import { ArticleBlogArt } from "./articleBlogArt/articleBlogArt";
import { ComentBlogArt } from "./comentBlogArt/comentBlogArt";

export const BlogArt = () => {
  return (
    <>
      <HeroBlogArt />
      <ArticleBlogArt />
      <ComentBlogArt />
      <Footer />
    </>
  );
};
