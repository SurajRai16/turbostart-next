import Link from "next/link";

const Thankyou = () => {
  return (
    <div className="relative">
      <div className=" absolute w-full bg-black h-screen z-[100000]">
        <div className="section-width h-full">
          <div className="max-w-screen-xl mx-auto flex flex-col h-full items-center md:px-4">
            <div
              className="text-center max-w-xs
               md:max-w-screen-sm lg:max-w-screen-lg my-auto mx-auto"
            >
              <h1 className="mb-4">
                Thank you for submitting <br /> the form!
              </h1>
              <p className="text-xl text-white mb-6">
                {" "}
                The team will get in touch shortly.
              </p>
              <Link
                className="bg-white text-black px-6 py-3 rounded-lg font-medium "
                href="/"
              >
                Go back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
