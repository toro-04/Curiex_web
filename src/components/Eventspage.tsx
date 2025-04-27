import React, { useState } from 'react';

type EventStatus = 'upcoming' | 'current' | 'past';

interface EventData {
  id: number;
  date: string;
  title: string;
  description: string;
  status: EventStatus;
  image: string;
  tags?: string[];
}
const eventsData: EventData[] = [
  {
    id: 1,
    date: "May 25, 2025",
    title: "Bug Bingo 2025",
    description: "Are you a master at debugging? Think you can spot and fix errors faster than anyone else? It's time to put your skills to the test in Bug Bingo at Lashkara 2025!An opportunity to win exciting cash prizes! Sharpen your technical knowledge and prepare yourself to bag the prizes by registering now! ",
    status: "upcoming",
    image: "",
    tags: ["Coding", "AI", "Competition"]
  },
  {
    id: 2,
    date: "May 2, 2025",
    title: "Tech Workshop Series",
    description: "A series of hands-on workshops covering the latest in web development frameworks. Learn React, Next.js, and TypeScript from industry experts. Bring your laptop and be ready to code!",
    status: "current",
    image: "",
    tags: ["Workshop", "Web Dev", "Learning"]
  },
  {
    id: 3,
    date: "February 5, 2025",
    title: "Hackathon 2025",
    description: "Our annual 48-hour coding challenge focused on AI solutions for climate change",
    status: "past",
    image: "",
    tags: ["Coding", "Critical Thinking", "AI"]
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
      case 'upcoming': return 'bg-blue-500';
      case 'current': return 'bg-green-500';
      case 'past': return 'bg-gray-500';
      default: return 'bg-gray-600';
    }
  };
  
  const getStatusText = (status: EventStatus) => {
    switch(status) {
      case 'upcoming': return 'Upcoming';
      case 'current': return 'Happening Now';
      case 'past': return 'Past Event';
      default: return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-gray-100">
      <div className="relative h-64 overflow-hidden">
        <div id="particles-js" className="absolute inset-0"></div>
        <div className="relative flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-6xl sm:text-7xl font-bold mb-2 text-center bg-clip-text text-transparent bg-[#5483B3]">
            CURIEX EVENTS
          </h1>
          <p className="text-xl text-[#CDD5DB] max-w-2xl">
            Join our computer science community for workshops, hackathons, and networking opportunities
          </p>
        </div>
      </div>
      
      {/* Main content */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] h-full w-1 bg-gradient-to-b from-[#071739] via-[#4B6382] to-[#A4B5C4]"></div>
          
          <div className="space-y-20">
            {eventsData.map((event, index) =>  
                <div 
                  key={event.id} 
                  id={`event-container-${event.id}`}
                  className={`relative ${index % 2 === 0 ? 'md:pr-3 md:text-left md:ml-112 md:translate-x-[120px]' : 'md:text-right md:mr-auto md:ml-1/2'} md:w-1/2 md:translate-x-[-8px]`}
                >
                  {/* Timeline circle with unique ID */}
                  <div 
                    id={`timeline-circle-${event.id}`}
                    className={`absolute w-4 h-4 rounded-full border-4 border-[#4B6382] bg-black transform 
                      ${index % 2 === 0 
                        ? 'md:translate-x-[-9px] md:translate-y-[55px]' 
                        : 'md:translate-y-[49px] md:translate-x-[456px]'
                      } left-[-8px]`}
                  ></div>
                  
                  {/* Event card with unique ID */}
                  <div 
                    id={`event-card-${event.id}`}
                    className={`relative mt-4 p-8 bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-lg border border-gray-800 cursor-pointer transition-all duration-300 hover:border-[#A4B5C4]/70 ${expandedEvent === event.id ? 'border-[#A4B5C4] shadow-lg shadow-[#4B6382]/20' : ''}`}
                    onClick={() => toggleEvent(event.id)}
                  >
                    {/* Status badge */}
                      <div className={`absolute top-4 ${index % 2 === 0 ? 'right-4' : 'left-4'}`}>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          event.status === 'upcoming' ? 'bg-blue-900 text-blue-100' :
                          event.status === 'current' ? 'bg-green-900 text-green-100' :
                          'bg-gray-700 text-gray-300'
                        }`}>
                          {getStatusText(event.status)}
                        </span>
                      </div>
                    
                    {/* Status indicator with unique ID */}
                    <div 
                      id={`status-indicator-${event.id}`}
                      className={`absolute top-0 right-0 w-3 h-3 rounded-full ${getStatusColor(event.status)} ${index % 2 === 0 
                        ? 'md:left-[-15px] md:top-[57px]' 
                        : 'md:translate-x-[14px] md:translate-y-[51px]'
                      }`}
                    ></div>
                    
                    <div className="flex flex-col md:flex-row items-start gap-4">
                      <div className="flex-grow">
                        <p className="text-xl text-gray-400">{event.date}</p>
                        <h3 className="text-3xl font-semibold text-[#A4B5C4] mt-2">{event.title}</h3>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-3">
                          {event.tags?.map((tag, idx) => (
                            <span key={idx} className="px-3 py-1 bg-[#071739]/50 rounded-full text-xs font-medium text-[#A4B5C4]">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        {/* Preview description always visible */}
                        <p className="mt-3 text-[#CDD5DB] line-clamp-2">
                          {event.description.split(' ').slice(0, 15).join(' ')}...
                        </p>
                        
                        {/* Expanded content */}
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedEvent == event.id? 'max-h-96 opacity-100 mt-4':'max-h-0 opacity-0'}`}>
                          <div className="mt-4 space-y-4 text-left ease-in">
                            <p className="text-[#CDD5DB]">{event.description}</p>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                            </div>
                            <div className="flex gap-2 mt-4">
                              <button className="px-4 py-2 text-sm bg-[#071739] hover:bg-[#4B6382] text-[#CDD5DB] rounded transition-colors duration-300">
                                Learn More
                              </button>
                              {event.status !== 'past' && (
                                <button className="px-4 py-2 text-sm bg-[#4B6382] hover:bg-[#A4B5C4] text-black font-medium rounded transition-colors duration-300">
                                  Register Now
                                </button>
                              )}
                            </div>
                          </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;