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
      
    },
    {
      name: "Anshpreet Singh",
      position: "Vice President",
      imageUrl: "Imagefacultyandteam/ansh.png",
      
    },
    {
      name: "Anjali Gupta",
      position: "General Secretary",
      imageUrl: "Imagefacultyandteam/anjali.png",
      
    },
    {
      name:"Tanubhav Juneja",
      position:"Treasurer",
      imageUrl:"Imagefacultyandteam/tanubhav.png",
    },
    {
      name:"Prathit Visen",
      position:"Council member",
      imageUrl:"Imagefacultyandteam/prathit.png",
      
    },
    
    {
      name:"Rahul Kumar Keshri",
      position:"Council member",
      imageUrl:"Imagefacultyandteam/rahulkumarkeshari.png",
    },
    {
      name:"Dhruv Nailwal",
      position:"Council member",
      imageUrl:"Imagefacultyandteam/dhruv.png",
    },
    {
      name:"Naman Lakhina",
      position:"Council member",
      imageUrl:"Imagefacultyandteam/Naman.png",
    },
    {
      name:"Kanishk Chauhan",
      position:"Council member",
      imageUrl:"Imagefacultyandteam/Kanishk.png",
    },
    {
      name:"Jaspreet Singh Dogra",
      position:"Council member",
      imageUrl:"Imagefacultyandteam/jaspreet.png", 
    } 
  ];

  const societyInfo: SocietyInfo = {
    description: "Curieux (French for curious)-The Computer Science Society of S.G.T.B Khalsa College, University of Delhi is here with great curiousness, spirit and passion.The Society functions under the guidance of an Executive Committee. The members of this Committee are elected by voting members of the Society. The functional head of the Society is the President and is assisted by the Vice President and the Secretary.",
    foundedYear: "11 Febraury 2014",
    mission: "To create a collaborative environment where members can develop skills. "
  };

  return (
    <div id="about" className="bg-black text-white py-12 px-0">
      {/* Top: About Us and Mission */}
      <div className=" mx-auto mb-12">
        <h1 className="text-5xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-[#5483B3] to-[#052659] mb-4 text-center">ABOUT US</h1>
        <p className="text-gray-200 text-lg text-center mb-4">
          Founded on {societyInfo.foundedYear}, our society has been at the forefront of innovation.<br />
          {societyInfo.description}
        </p>
        
        <h2 className="text-4xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-[#5483B3] to-[#052659] mb-2 text-center font-bold mt-12">OUR MISSION</h2>
        <p className="text-gray-200 text-lg text-center">{societyInfo.mission}</p>
      </div>

      {/* Grid: Faculty Members (left) | Core Team (right) */}
      <div className=" mx-8 grid grid-cols-1 md:grid-cols-2 gap-30">
        {/* Faculty Members */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-300 mb-4 text-center md:text-center">Faculty Members</h2>
          <div className="flex flex-col gap-6">
            {facultyMembers.map((faculty, index) => (
              <div
                key={index}
                className="bg-gray-900 p-10 rounded-lg border border-blue-800 flex flex-row items-center justify-between hover:bg-blue-800 transition duration-300"
              >
                {/* Image on the right */}
                {faculty.imageUrl && (
                  <img
                    src={faculty.imageUrl}
                    alt={faculty.name}
                    className="w-30 h-30 rounded-full object-cover ml-4 mr-6 md:ml-4"
                  />
                )}
                {/* Text content */}
                <div className="flex-1 pr-4">
                  <h3 className="text-lg text-blue-300">{faculty.name}</h3>
                  <p className="text-gray-400">{faculty.position}</p>
                  {faculty.description && (
                    <p className="text-gray-300 mt-2 text-center">{faculty.description}</p>
                  )}
                </div>
                
              </div>
            ))}
          </div>
        </div>
        {/* Core Team */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-300 mb-4 text-center md:text-center">Core Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {coreTeamMembers.map((member, index) => (
              <div key={index} className="bg-gray-900 p-4 rounded-lg border border-blue-800 flex flex-col items-center hover:bg-blue-800 transition duration-300">
                {member.imageUrl && (
                  <img src={member.imageUrl} alt={member.name} className="w-20 h-20 rounded-full object-cover mb-2" />
                )}
                <h3 className="text-lg text-blue-300">{member.name}</h3>
                <p className="text-gray-400">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

