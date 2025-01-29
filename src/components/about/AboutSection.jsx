import CardWrapper from "./CardWrapper";
import SubSection from "./SubSection";
import bg from "../../assets/img/Background.png"


export default function AboutSection() {
  return (
    <div className="h-[600px] relative">
        <SubSection />
        <CardWrapper />
        <img src={bg} alt={bg} className="h-[500px] w-[500px] absolute inset-y-10 " />
    </div>
  )
}
