import React, { useState } from 'react';

type EventStatus = 'upcoming' | 'current' | 'past';

interface EventData {
  id: number;
  title: string;
  date: string;
  description: string;
  status: EventStatus;
  location: string;
  image: string;
}

//events details
const eventsData: EventData[] = [
  {
    id: 1,
    title: "Hackathon 2025",
    date: "April 15-17, 2025",
    description: "Our annual 48-hour coding challenge focused on AI solutions for climate change.",
    status: "upcoming",
    location: "Main Campus, Building B",
    image: ""
  },
  {
    id: 2,
    title: "Tech Workshop Series",
    date: "March 10, 2025",
    description: "A series of hands-on workshops covering the latest in web development frameworks.",
    status: "current",
    location: "Virtual Event",
    image: ""
  },
  {
    id: 3,
    title: "Industry Networking Night",
    date: "February 5, 2025",
    description: "Connect with tech industry professionals and explore career opportunities.",
    status: "past",
    location: "Innovation Center",
    image: ""
  },
  {
    id: 4,
    title: "Algorithm Competition",
    date: "December 12, 2024",
    description: "Test your problem-solving skills against other programmers in our algorithm challenge.",
    status: "past",
    location: "Computer Science Building",
    image: ""
  },
  {
    id: 5,
    title: "Algorithm",
    date: "December 12, 2026",
    description: "Test your problem-solving skills against other programmers in our algorithm challenge.",
    status: "current",
    location: "Computer Science Building",
    image: ""
  },

];

const EventsPage: React.FC = () => {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  
  const toggleEvent = (id: number) => {
    if (expandedEvent === id) {
      setExpandedEvent(null);
    } else {
      setExpandedEvent(id);
    }
  };
  
  const getStatusColor = (status: EventStatus) => {
    switch(status) {
      case 'upcoming': return 'bg-[#021024]';
      case 'current': return 'bg-[#A4B5C4]';
      case 'past': return 'bg-[#052659]';
      default: return 'bg-gray-600';
    }
  };
  
  return (
    <div className="min-h-screen bg-black text-[#CDD5DB] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-7xl font-bold mb-30 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#071739] to-[#A4B5C4]">
          CURIEX EVENTS
        </h1>
        
        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] h-full w-1 bg-gradient-to-b from-[#071739] via-[#4B6382] to-[#A4B5C4]"></div>
          
          <div className="space-y-12">
            {eventsData.map((event, index) => (
              <div 
                key={event.id} 
                id={`event-container-${event.id}`}
                className={`relative ${index % 2 === 0 ? 'md:pr-3  md:text-right md:ml-112 md:translate-x-[7px]' : ' md:text-left md:mr-auto md:ml-1/2 '} md:w-1/2 md:translate-x-[-8px]`}
              >
                
                {/* Timeline circle with unique ID */}
                <div 
                  id={`timeline-circle-${event.id}`}
                  className={`absolute w-4 h-4 rounded-full border-5 border-[#4B6382] bg-black transform 
                    ${index % 2 === 0 
                      ? 'md:translate-x-[-7px] md:translate-y-[115px] ' 
                      : 'md:translate-y-[-10px] md:translate-x-[456px]'
                    } left-[-8px] `}
                ></div>
                
                {/* Event card with unique ID */}
                <div 
                  id={`event-card-${event.id}`}
                  className={`relative mt-4 p-8 bg-black border border-[#4B6382]/40 rounded-lg cursor-pointer transition-all duration-300 hover:border-[#A4B5C4]/70 ${expandedEvent === event.id ? 'shadow-lg shadow-[#4B6382]/20' : ''}`}
                  onClick={() => toggleEvent(event.id)}
                >
                  {/* Status indicator with unique ID */}
                  <div 
                    id={`status-indicator-${event.id}`}
                    className={`absolute top-0 right-0 w-3 h-3 rounded-full ${getStatusColor(event.status)} ${index % 2 === 0 
                      ? 'md:left-[-14px] md:top-[116px]' 
                      : ' md:translate-x-[15px] md:translate-y-[-9px]'
                    }`}
                  ></div>
                  
                  <div className="flex flex-col md:flex-row items-start gap-4">
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-[#A4B5C4]">{event.title}</h3>
                      <p className="text-sm text-gray-400 mt-1">{event.date}</p>
                      
                      {/* Expanded content */}
                      {expandedEvent === event.id && (
                        <div className="mt-4 space-y-3 text-left animate-fadeIn">
                          <p className="text-[#CDD5DB]">{event.description}</p>
                          <p className="text-sm text-gray-400">
                            <span className="font-medium text-[#A4B5C4]">Location:</span> {event.location}
                          </p>
                          <button className="px-4 py-2 mt-2 text-sm bg-[#071739] hover:bg-[#4B6382] text-[#CDD5DB] rounded transition-colors duration-300">
                            Learn More
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;