import React from "react";

import style from "./AboutPage.module.css";

export default function AboutPage() {
  return (
    <>
      <div className={style.bg}></div>
      <div className={style.content}>
        <h1>About Us</h1>

        <p>
          Welcome to Pallavi's Store, your go-to destination for stylish and
          high-quality clothing. We are passionate about providing you with the
          latest fashion trends and timeless pieces that elevate your wardrobe,
          with a strong focus on quality, customer satisfaction, and affordable
          luxury.
        </p>

        <p>
          At Pallavi’s Store, we believe that fashion is not just about
          clothes—it’s about expressing who you are. That’s why we carefully
          curate every piece in our collection, ensuring that each item reflects
          a perfect blend of style, comfort, and individuality.
        </p>

        <p>
          Whether you’re searching for casual wear, chic office attire, or a
          statement outfit for a special event, we’ve got something for
          everyone. We take pride in offering a diverse range of sizes, designs,
          and styles to suit every personality and preference.
        </p>

        <p>
          Our commitment to excellence means we are constantly improving our
          platform, product offerings, and customer support to ensure that you
          have a seamless shopping experience. Whether you’re here to treat
          yourself or to find a gift for someone special, our store is designed
          to provide you with the best selection at great prices.
        </p>

        <p>
          Thank you for choosing Pallavi’s Store to be a part of your fashion
          journey. We look forward to dressing you in your favorite looks!
        </p>

        <p>Sincerely, Pallavi's Store</p>
      </div>
    </>
  );
}
