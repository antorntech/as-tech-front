import React from "react";

// Sample Data
const education = [
  {
    title: "Post Graduation in IT",
    institution: "Jahangirnagar University (2023 - 2024)",
    description:
      "Advanced studies in Information Technology, focusing on the latest trends and technologies in the field.",
  },
  {
    title: "BSc. in Computer Science",
    institution: "Daffodil International University (2018 - 2022)",
    description:
      "Bachelor's degree in Computer Science covering programming, data structures, algorithms, and software development.",
  },
  {
    title: "Higher Secondary",
    institution: "Notre Dame College (2015 - 2017)",
    description:
      "Completed higher secondary education with a focus on Science, including subjects like Physics, Chemistry, and Mathematics.",
  },
];

const skills = [
  {
    category: "UI/UX Design",
    tools: [
      { name: "Figma", proficiency: "90%" },
      { name: "Canva", proficiency: "95%" },
      { name: "Illustrator", proficiency: "80%" },
    ],
  },
  {
    category: "Front-end Development",
    tools: [
      { name: "React", proficiency: "90%" },
      { name: "Next.js", proficiency: "85%" },
      { name: "Tailwind CSS", proficiency: "90%" },
      { name: "Bootstrap", proficiency: "90%" },
    ],
  },
  {
    category: "Back-end Development",
    tools: [
      { name: "Node.js", proficiency: "90%" },
      { name: "Express.js", proficiency: "90%" },
      { name: "MongoDB", proficiency: "90%" },
      { name: "NoSQL/MySQL", proficiency: "85%" },
    ],
  },
];

const experience = [
  {
    title: "Web Developer & Trainer",
    company: "PeopleNTech LTD. (1st February, 2024 - Running)",
    description: "Pomnis voluptas assumenda est, omnis dolor repellendus.",
  },
  {
    title: "Front-end Developer",
    company: "Redgreen Technology LTD. (1st March, 2023 - 1st October, 2023)",
    description: "Pomnis voluptas assumenda est, omnis dolor repellendus.",
  },
  {
    title: "Back-end Developer (Intern)",
    company: "Squiller IT LTD. (1st August,2022 - 1st December, 2022)",
    description: "Pomnis voluptas assumenda est, omnis dolor repellendus.",
  },
];

// Education Component
const Education = ({ education }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {education.map((item, index) => (
      <div key={index} className="bg-white p-5 rounded shadow-md">
        <h3 className="font-semibold text-xl">{item.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{item.institution}</p>
        <p className="text-sm text-gray-500 mt-2">{item.description}</p>
      </div>
    ))}
  </div>
);

// Skills Component
const Skills = ({ skills }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {skills.map((skill, index) => (
      <div key={index} className="bg-white p-5 rounded shadow-md">
        <h3 className="font-semibold text-xl mb-4">{skill.category}</h3>
        {skill.tools.map((tool, i) => (
          <div key={i} className="space-y-2">
            <div className="flex items-center justify-between mt-3">
              <p className="text-sm font-medium">{tool.name}</p>
              <span className="font-semibold">{tool.proficiency}</span>
            </div>
            <div className="w-full h-1 bg-gray-200">
              <div
                className="bg-[#00637e] h-1"
                style={{ width: tool.proficiency }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>
);

// Experience Component
const Experience = ({ experience }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {experience.map((item, index) => (
      <div key={index} className="bg-white p-5 rounded shadow-md">
        <h3 className="font-semibold text-xl">{item.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{item.company}</p>
        <p className="text-sm text-gray-500 mt-2">{item.description}</p>
      </div>
    ))}
  </div>
);

// Main Component
const ExperienceSection = () => {
  return (
    <div className="bg-[#00637e3b] min-h-screen px-4 lg:px-0 py-[40px] md:py-[70px] lg:py-[100px]">
      <div className="max-w-screen-xl mx-auto h-full">
        <div
          className="flex items-center justify-center gap-2"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <img src="/rec.png" alt="rec.png" className="w-5 h-5" />
          <p className="text-sm">My Resume</p>
        </div>
        <div
          className="relative z-10 flex justify-center items-center text-center overflow-hidden"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h1
            style={{ lineHeight: "1.2" }}
            className="text-2xl lg:text-5xl font-bold w-full my-4 lg:my-6 z-40 relative"
          >
            1.5 Years Of Experience
          </h1>
          <div className="flex justify-center items-center gap-2 mt-2 absolute right-[25%] md:right-[35%] bottom-3 md:bottom-7 z-20 rotate-[-5deg] ">
            <img
              src="/orange-line.png"
              alt="orange-line"
              className="scale-in-bl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-10">
          {/* Left Labels */}
          <div className="col-span-2 space-y-24 hidden md:block">
            <div className="flex items-center h-full">
              <div className="w-[2px] h-full bg-black">
                <div className="flex flex-col h-full items-center justify-between relative">
                  <div className="flex items-center gap-2 absolute top-14 left-[-10px]">
                    <div className="w-5 h-5 bg-[#00637e] rounded-full"></div>
                    <p className="font-semibold text-lg md:text-2xl mt-[4px]">
                      Education
                    </p>
                  </div>
                  <div className="flex items-center gap-2 absolute top-1/2 left-[-10px]">
                    <div className="w-5 h-5 bg-[#00637e] rounded-full"></div>
                    <p className="font-semibold text-lg md:text-2xl mt-[4px]">
                      Skills
                    </p>
                  </div>
                  <div className="flex items-center gap-2 absolute bottom-14 left-[-10px]">
                    <div className="w-5 h-5 bg-[#00637e] rounded-full"></div>
                    <p className="font-semibold text-lg md:text-2xl mt-[4px]">
                      Experience
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-4 space-y-[200px]"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full md:col-span-10 space-y-8 md:space-y-16">
            {/* Education Section */}
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <h1 className="text-2xl font-semibold mb-2 block md:hidden">
                Education
              </h1>
              <Education education={education} />
            </div>

            {/* Skills Section */}
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <h1 className="text-2xl font-semibold mb-2 block md:hidden">
                Skills
              </h1>
              <Skills skills={skills} />
            </div>

            {/* Experience Section */}
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <h1 className="text-2xl font-semibold mb-2 block md:hidden">
                Experience
              </h1>
              <Experience experience={experience} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
