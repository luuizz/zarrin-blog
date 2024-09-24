import React from "react";
import Container from "@/components/Container/container";
import TopTitles from "@/components/TopTitles/TopTitles";
import FixedPosts from "./fixedPosts";
import CardPost from "@/components/CardDefaultPost/CardPost";
import { dataPostRecent } from "@/utils/data";

export default function SectionRecentPosts() {
  return (
    <section className="pb-28 pt-20">
      <Container>
        <TopTitles link="#" title="Our Recent Posts" />

        <FixedPosts />
        <div className="grid grid-cols-3 gap-4">
          {dataPostRecent.map((item, index) => (
            <CardPost
              key={index}
              alt="Post"
              categoria={item.category}
              excerpt={item.descricaoCurta}
              image={item.bannerPost}
              link="#"
              tempo="13 March 2023"
              titulo={item.tituloPost}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
