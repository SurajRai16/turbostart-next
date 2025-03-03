interface Props {
  img: string;
  name?: string;
  location?: string;
  address?: string;
}

const Countries = ({ img, name, address, location }: Props) => {
  return (
    <div>
      <div className="w-full service relative flex justify-center ">
        <div className="front backface-hidden transform rotate-x-0 transition duration-700 justify-center items-center">
          <div className="flex flex-wrap items-center h-72">
            <img
              src={img}
              className="mx-auto flex items-center my-10"
              alt="Countries"
            />
          </div>
          <div className="text-center mx-auto text-[#999] text-lg font-light leading-[32px]">
            {name}
          </div>
        </div>
        <div className="back gap-6 items-cente  top-[100px]  ">
          {name !== "Coming Soon" ? (
            <>
              <div className="text-center text-white mx-auto  text-2xl font-bold leading-[32px] mb-4">
                {name}
              </div>
              <span className="text-[#999]">{address}</span>
              <div className="font-semibold mt-4 text-lg">
                <a href={location} target="_blank">
                  Map
                </a>
              </div>
            </>
          ) : (
            <div className="text-center text-white mx-auto  text-2xl font-bold leading-[32px] mb-4">
              Stay Tuned
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Countries;
