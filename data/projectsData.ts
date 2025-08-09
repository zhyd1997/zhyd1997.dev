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
  {
    title: 'Velokit, A Modern Fullstack Starter Kit.',
    description: `A modern fullstack starter kit powered by Next.js 15, Tailwind CSS v4, shadcn/ui, Prisma, and Supabase — perfect for building fast, scalable web apps.`,
    imgSrc: 'https://ik.imagekit.io/1winv85cn8g/VeloKit/showcase.png?updatedAt=1749315265176',
    href: 'https://github.com/zhyd1997/velokit',
  },
]

export default projectsData
