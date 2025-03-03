import Link from "next/link";

const GlobalcohortButton = () => {
  return (
    <div>
      <div className=" fixed z-50 right-0 bottom-[100px] bg-[#ffffff] pb-2 pt-2 px-4 rounded-l-xl ">
        <Link href={"/globalcohort"} className="text-black font-extrabold ">
          Get Funded
        </Link>
      </div>
    </div>
  );
};

export default GlobalcohortButton;
