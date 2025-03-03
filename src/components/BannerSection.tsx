interface Props {
  children?: string;
  img: string;
}

const BannerSection = ({ children, img }: Props) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="lg:h-[500px] md:h-[400px] sm:h-[300px]  h-[130px] mt-[60px]"
      >
        {children}
      </div>
    </div>
  );
};

export default BannerSection;
