import ReactPlayer from "react-player";

interface ModalProps {
  onClose: () => void;
  url: string;
  responsive: boolean;
  title: string;
}

const TestimonialModal = ({ onClose, url, responsive, title }: ModalProps) => {
  // console.log(name, url);
  return (
    <div>
      <div className="fixed inset-0 z-10 flex items-center justify-center w-full">
        <div
          className="absolute inset-0 bg-black opacity-50 h-screen w-full cursor-pointer"
          onClick={onClose}
        ></div>
        <div
          className="flex items-center bg-[#00000080] h-screen w-full justify-center p-8 rounded-lg shadow-lg z-20"
          onClick={onClose}
        >
          <div className="relative ">
            <button
              className="mt-4 bg-white  text-black px-4 py-2 rounded absolute right-0 top-0"
              onClick={onClose}
            >
              Close
            </button>
            <ReactPlayer
              url={url}
              playing={true}
              width={responsive ? "100%" : "600px"}
              // height="100%"
            />
            <h1 className="text-center text-lg md:text-2xl w-full md:max-w-[600px]">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialModal;
