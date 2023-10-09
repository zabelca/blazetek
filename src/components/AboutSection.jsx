
"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Software Development (Java, C/C++, Python, Golang)</li>
                <li>Cybersecurity</li>
                <li>Troubleshooting</li>
                <li>IT/Networking & Security</li>
                <li>Human-Computer Interaction</li>
                <li>Computer & Network Forensics</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Bachelor of Science (BS) Degree in Computer Science, Concentration in Cyber Security</li>
                <li>Arizona State University, Fulton, AZ</li>
            </ul>
        ),
    },
    {
        title: "Certification",
        id: "certification",
        content: (
            <ul className="list-disc pl-2">
                <li>CompTIA Security+</li>
                <li>CompTIA Network+</li>
            </ul>
        ),
    },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();


  const handleTabChange = (id) => {
    startTransition(() => {
        setTab(id);
    });
  };


  return (
    <section className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap16 sm:py-16 xl:px-16">
            <Image src="/images/about-image.png" width={500} height={500} />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">
                    About Me
                </h2>
                <p className="text-base lg:text-lg">
                    Problem-solving and results-oriented IT professional with college experience in software development and cyber security. 
                    Highly adept at analyzing a user’s needs and designing and developing software to meet individual needs. Skill in discovering 
                    vulnerabilities and risks in networks, software systems, and data centers via ongoing vulnerability scans, monitoring network data, 
                    and ensuring hardware and software applications are updated. Excel in software development, computer networking, and information 
                    security.
                </p>
                <div className="flex flex-row mt-8">
                    <TabButton
                        selectTab={() => handleTabChange("skills")}
                        active={tab === "skills"}>
                            {" "}
                            Skills{" "}
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange("education")}
                        active={tab === "education"}>
                            {" "}
                            Education{" "}
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange("certification")}
                        active={tab === "certification"}>
                            {" "}
                            Experience{" "}
                    </TabButton>
                </div>
                <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
  );
}

export default AboutSection