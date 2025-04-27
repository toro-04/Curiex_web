import React from 'react';

interface MemberProps {
  name: string;
  position: string;
  imageUrl?: string;
  description?: string; 
}

interface SocietyInfo {
  description: string;
  foundedYear: string;
  mission: string;
}

const About: React.FC = () => {
  const facultyMembers: MemberProps[] = [
    {
      name: "Mr PD Sharma",
      position: "Head of Department",
      imageUrl: "Imagefacultyandteam/PDs.png",
      description: "Head of the Computer Science Department, guiding students towards excellence."
    },
    {
      name: "Miss Sakeena Shahid",
      position: "Faculty Advisor",
      imageUrl: "Imagefacultyandteam/sakeena ma'am.png",
      description: "A dedicated faculty member, passionate about mentoring students in their projects."
    },
    {
      name:" Dr Shefali Gupta",
      position:"Faculty Advisor",
      imageUrl:"Imagefacultyandteam/shefali ma'am.png",
      description: "An experienced faculty member, committed to fostering innovation and creativity."
    }
  ];

  const coreTeamMembers: MemberProps[] = [
    {
      name: "Gurlive Singh",
      position: "President",
      imageUrl: "Imagefacultyandteam/gurlive.png",
      description: "Leading the society with vision and dedication."
    },
    {
      name: "Anshpreet Singh",
      position: "Vice President",
      imageUrl: "Imagefacultyandteam/ansh.png",
      description: "Assisting the president and managing society activities."
    },
    {
      name: "Anjali Gupta",
      position: "General Secretary",
      imageUrl: "Imagefacultyandteam/anjali.png",
      description: "Responsible for communication and coordination within the society."
    },
    {
      name:"Prathit Visen",
      position:"Council member",
      imageUrl:"Imagefacultyandteam/prathit.png",
      description: "A dedicated member, contributing to the society's growth and activities."
    },
    {
      name:"Tanubhav Juneja",
      position:"Treasurer",
      imageUrl:"Imagefacultyandteam/tanubhav.png",
      description: "Managing the society's finances and ensuring transparency."
    }
  ];

  const societyInfo: SocietyInfo = {
    description: "Curieux (French for curious)-The Computer Science Society of S.G.T.B Khalsa College, University of Delhi is here with great curiousness, spirit and passion.The Society functions under the guidance of an Executive Committee. The members of this Committee are elected by voting members of the Society. The functional head of the Society is the President and is assisted by the Vice President and the Secretary.The wide spectrum of members is committed to the advancement of individual skill set in the fields of computer sciences and engineering, networking, information processing, robotics and related arts & sciences. The society also encourages students from non technical background having keen interest in computers to learn alongside computer personals.It all started with just a and has become a tradition which the geeks of Curieux are going to speak. And now, Curieux team is here with more workshops, tremendous gaming events, fun activities, lively competitions, seminars on tech & programming and technical talks for the benefit of students and users of IT apart from conducting education and professional development programmes for a focused audience of budding students.An Annual Tech Fest named PHOENIX is also organised which undersees the participation of students from various prestigious Universities across Delhi-NCR.The membership of the society is open to all students of the college who are selected on the base of an interview. Without our people, we are nothing! With them, we are a team.",
    foundedYear: "11 Febraury 2014",
    mission: "To create a collaborative environment where members can develop skills. "
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-3 gap-6 bg-black-800 text-white p-8">
      {/* About Us */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-[#5483B3] to-[#052659] text-blue-400 mb-4 text-center">About Us</h1>
        <p className="text-gray-200 text-lg text-center mb-4">
          Founded on {societyInfo.foundedYear}, our society has been at the forefront of innovation.<br />
          {societyInfo.description}
        </p>
        <h2 className="text-xl text-blue-400 mb-2 text-center font-bold">Our Mission</h2>
        <p className="text-gray-200 text-base text-center">{societyInfo.mission}</p>
      </div>

      {/* Faculty Members */}
      <div>
        <h2 className="text-2xl font-semibold text-blue-300 mb-4 text-center">Faculty Members</h2>
        {facultyMembers.map((faculty, index) => (
          <div 
            key={index} 
            className="bg-black-900 p-4 rounded-lg border border-blue-800 mb-4 flex flex-col items-center hover:bg-blue-900 transition duration-300 ease-in-out transform hover:scale-105"
          >
            {faculty.imageUrl && (
              <div className="mb-3">
                <img 
                  src={faculty.imageUrl} 
                  alt={faculty.name} 
                  className="w-20 h-20 rounded-full object-cover mx-auto"
                />
              </div>
            )}
            <h3 className="text-lg text-blue-300 text-center">{faculty.name}</h3>
            <p className="text-gray-400 text-center">{faculty.position}</p>
            {faculty.description && (
              <p className="text-gray-300 text-center mt-2">{faculty.description}</p>
            )}
          </div>
        ))}
      </div>

      {/* Core Team */}
      <div>
        <h2 className="text-2xl font-semibold text-blue-300 mb-4 text-center">Core Team</h2>
        {coreTeamMembers.map((member, index) => (
          <div 
            key={index} 
            className="bg-black-900 p-4 rounded-lg border border-blue-800 mb-4 flex flex-col items-center hover:bg-blue-900 transition duration-300 ease-in-out transform hover:scale-105"
          >
            {member.imageUrl && (
              <div className="mb-3">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-20 h-20 rounded-full object-cover mx-auto"
                />
              </div>
            )}
            <h3 className="text-lg text-blue-300 text-center">{member.name}</h3>
            <p className="text-gray-400 text-center">{member.position}</p>
            {member.description && (
              <p className="text-gray-300 text-center mt-2">{member.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

