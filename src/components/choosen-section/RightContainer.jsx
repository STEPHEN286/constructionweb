
import ChoosenCard from './ChoosenCard'
const experiences = [
    {
      title: "Construction Industry",
      icon: "energy",
      description: "With over 12 years in the construction industry.",
      link: "/experience/construction"
    },
    {
      title: "Project Management",
      icon: "handyman",
      description: "Our team is our greatest asset.",
      link: "/experience/project-management"
    },
    {
      title: "Architectural Design",
      icon: "biotech",
      description: "We are dedicated to delivering superior craftsmanship in every project.",
      link: "/experience/architectural-design"
    },
    {
      title: "Real Estate Development",
      icon: "engineering",
      description: "The safety of our team and clients is paramount.",
      link: "/experience/real-estate"
    },
  ];
  
export default function RightContainer() {
  return (
    <div className='w-full grid md:grid-cols-2 gap-4 md:gap-10 z-10  '>
        {
            experiences.map (experience => (
                <ChoosenCard key={experience.title} title={experience.title} description={experience.description} icon={experience.icon}/>
            ))
        }
     
    </div>
  )
}
