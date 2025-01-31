import bg from "../../assets/img/Background.png";
import RightContainer from "./RightContainer";
export default function ChoosenSection() {
  return (
    <div
      className="
    w-full  grid grid-cols-1 gap-2 md:grid-cols-3 py-14 md:p-20  bg-[#f1f1f1] relative overflow-hidden"
    >
      <div className="z-10 col-span-1 px-6 md:p-0">
        <h1 className="font-bold text-3xl mb-4">Why Choose Us for Your Construction Needs?</h1>
        <p className="font-semibold text-sm md:text-[18px] text-gray-400 ">
           we bring expert craftsmanship, reliability,
          and innovation to every construction project. Our skilled team ensures
          high-quality workmanship, on-time project delivery, and adherence to
          industry standards. Whether it's residential, commercial, or
          industrial construction, we use top-grade materials and modern
          techniques to guarantee durability and safety
        </p>
      </div>

      <div className="col-span-1 md:col-span-2  z-20 px-5">
        <RightContainer />
      </div>
      <img
        src={bg}
        alt={bg}
        className="md:hidden h-[400px] w-[400px] opacity-20 md:opacity-30 absolute inset-y-0  inset-x-10 md:inset-x-0"
      />
    </div>
  );
}
