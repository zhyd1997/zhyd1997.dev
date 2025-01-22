interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Softmaple, A Paper Typesetting Editor.',
    description: `Simplify your writing process with the intuitive <b>WYSIWYG</b> editor. Focus on your content while it handles the typesetting—just click to seamlessly transform rich text into clean, professional LaTeX code.`,
    imgSrc: 'https://ik.imagekit.io/1winv85cn8g/SoftMaple/logo.png',
    href: 'https://github.com/softmaple/softmaple',
  },
  // {
  //   title: 'The Time Machine',
  //   description: `Imagine being able to travel back in time or to the future. Simple turn the knob
  //   to the desired date and press "Go". No more worrying about lost keys or
  //   forgotten headphones with this simple yet affordable solution.`,
  //   imgSrc: '/static/images/time-machine.jpg',
  //   href: '/blog/the-time-machine',
  // },
]

export default projectsData
