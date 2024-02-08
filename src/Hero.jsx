import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            nam perferendis minima perspiciatis quam officiis voluptatibus
            veritatis, id explicabo dolor molestiae alias nulla eius illum
            itaque in, deleniti corrupti odio fuga excepturi hic quas? Facilis
            consequatur amet, eveniet consectetur sapiente, suscipit alias
            corporis quasi harum quis aspernatur eligendi earum ullam!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="image" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
