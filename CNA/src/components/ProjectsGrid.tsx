import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Urban Renewal District',
    category: 'Mixed-Use Development',
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=800&h=600&fit=crop',
    featured: true
  },
  {
    id: 2,
    title: 'Coastal Museum',
    category: 'Cultural Institution',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?w=800&h=600&fit=crop'
  },
  {
    id: 3,
    title: 'Tech Innovation Hub',
    category: 'Corporate',
    image: 'https://images.pexels.com/photos/1427355/pexels-photo-1427355.jpeg?w=800&h=600&fit=crop'
  },
  {
    id: 4,
    title: 'Garden Residential Complex',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=800&h=600&fit=crop'
  },
  {
    id: 5,
    title: 'Waterfront Park',
    category: 'Public Space',
    image: 'https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?w=800&h=600&fit=crop'
  },
  {
    id: 6,
    title: 'Heritage Restoration',
    category: 'Adaptive Reuse',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?w=800&h=600&fit=crop'
  }
];

export default function ProjectsGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Selected Works</h2>
          <p className="text-gray-600 text-lg font-light max-w-2xl">Explore our collection of strategic architectural solutions that shape communities and inspire possibilities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden bg-gray-200 rounded-lg aspect-video mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredId === project.id ? 'scale-105' : 'scale-100'
                  }`}
                />
                <div className={`absolute inset-0 bg-black transition-opacity duration-700 ${
                  hoveredId === project.id ? 'opacity-30' : 'opacity-0'
                }`}></div>
              </div>
              <div className={`transition-opacity duration-300 ${hoveredId === project.id ? 'opacity-100' : 'opacity-70'}`}>
                <p className="text-sm font-light text-gray-500 uppercase tracking-wide mb-2">{project.category}</p>
                <h3 className="text-xl font-light text-gray-900">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="px-8 py-3 border border-gray-900 text-gray-900 font-light tracking-wide hover:bg-gray-900 hover:text-white transition-colors duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
