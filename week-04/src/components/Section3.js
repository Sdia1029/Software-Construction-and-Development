import { FaTools, FaBriefcaseMedical, FaCogs } from "react-icons/fa";

export default function Section3() {
  return (
    <div className="bg-[#050522] px-6 py-20 text-black">
      <div className="grid grid-cols-3 gap-8">
        <cards
          icon={<FaTools />}
          heading="Dummy Text"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti suscipit iure corporis temporibus ipsa exercitationem."
          subHeading="Dummy Text"
        />
        <cards
          icon={<FaBriefcaseMedical />}
          heading="Dummy Text"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti suscipit iure corporis temporibus ipsa exercitationem."
          subHeading="Dummy Text"
        />
        <cards
          icon={<FaCogs />}
          heading="Dummy Text"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti suscipit iure corporis temporibus ipsa exercitationem."
          subHeading="Dummy Text"
        />
      </div>
    </div>
  )
}