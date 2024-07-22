export interface Project {
  id: string
  name: string
  description: string
  type: 'Mobile app' | 'Web app'
  images: ProjectImage[]
}

export interface ProjectImage {
  src: string
  alt: string
}

const projects: Project[] = [
  {
    id: 'envify',
    type: 'Web app',
    name: 'Envify',
    description:
      "Envify is a web app that allows you to create and share your own environment variables. It's a simple and easy-to-use tool that makes it easy to manage your environment variables.",
    images: [
      {
        src: '/images/projects/envify/envify-01.jpg',
        alt: 'Envify screenshot 1',
      },
      {
        src: '/images/projects/envify/envify-02.jpg',
        alt: 'Envify screenshot 2',
      },
      {
        src: '/images/projects/envify/envify-03.jpg',
        alt: 'Envify screenshot 3',
      },
      {
        src: '/images/projects/envify/envify-04.jpg',
        alt: 'Envify screenshot 4',
      },
      {
        src: '/images/projects/envify/envify-05.jpg',
        alt: 'Envify screenshot 5',
      },
      {
        src: '/images/projects/envify/envify-06.jpg',
        alt: 'Envify screenshot 6',
      },
      {
        src: '/images/projects/envify/envify-07.jpg',
        alt: 'Envify screenshot 7',
      },
      {
        src: '/images/projects/envify/envify-08.jpg',
        alt: 'Envify screenshot 8',
      },
      {
        src: '/images/projects/envify/envify-09.jpg',
        alt: 'Envify screenshot 9',
      },
      {
        src: '/images/projects/envify/envify-10.jpg',
        alt: 'Envify screenshot 10',
      },
    ],
  },
]

export function getAllProjects() {
  return projects
}

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id)
}
