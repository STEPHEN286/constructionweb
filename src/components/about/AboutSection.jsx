import CardWrapper from "./CardWrapper";
import SubSection from "./SubSection";
import bg from "../../assets/img/Background.png"


export default function AboutSection() {
  return (
    <div className="md:h-[700px] relative">
        <SubSection />
        <CardWrapper />
        <img src={bg} alt={bg} className="h-[300px]  w-[300px] md:h-[500px] md:w-[500px]  absolute inset-30 md:inset-0 opacity-15  inset-y-12 md:inset-y-3   " />
    </div>
  )
}
