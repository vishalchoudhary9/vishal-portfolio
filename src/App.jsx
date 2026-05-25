import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function App() {
  const projects = [
    {
      title: "Wanderlust",
      tech: "HTML, CSS, JavaScript",
      desc: "A responsive travel website landing page with smooth scrolling and interactive UI.",
      github: "https://github.com/vishalchoudhary9",
      live: "https://vishalchoudhary9.github.io/Wanderlust_web_page/",
    },
    {
      title: "Fashion Studio",
      tech: "HTML, Tailwind CSS",
      desc: "A modern e-commerce landing page focused on clean design and product display.",
      github: "https://github.com/vishalchoudhary9",
      live: "https://vishalchoudhary9.github.io/fashion-landing-page/",
    },
  ]

  useEffect(() => {
    gsap.fromTo(".navbar", { y: -40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })

    gsap.fromTo(".hero-img", { x: -80, opacity: 0 }, { x: 0, opacity: 1, duration: 1 })
    gsap.fromTo(".hero-text", { x: 80, opacity: 0 }, { x: 0, opacity: 1, duration: 1 })

    gsap.utils.toArray(".gsap-section").forEach((section) => {
      gsap.fromTo(
        section,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        }
      )
    })
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-50 text-slate-900">
      <nav className="navbar sticky top-0 z-50 bg-white/90 px-6 py-4 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600">Vishal</h1>

          <div className="hidden space-x-6 text-slate-700 md:block">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
            <a href="#feedback" className="hover:text-blue-600">Feedback</a>
          </div>
        </div>
      </nav>

      <section id="home" className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">
        <div className="hero-img flex justify-center">
          <img
            src="/vishal-photo.jpeg"
            alt="Vishal Choudhary"
            className="h-72 w-72 rounded-full border-4 border-white object-cover object-top shadow-xl md:h-96 md:w-96"
          />
        </div>

        <div className="hero-text">
          <p className="mb-3 font-medium text-blue-600">Hello, I'm</p>
          <h2 className="text-5xl font-bold md:text-7xl">Vishal Choudhary</h2>

          <p className="mt-5 text-xl text-blue-600">
            Web Developer | Frontend Developer
          </p>

          <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
            I create modern, responsive, and user-friendly websites using HTML,
            CSS, JavaScript, Tailwind CSS, and React.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#projects" className="rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold text-white hover:bg-blue-500">
              View Projects
            </a>

            <a href="#contact" className="rounded-lg border border-blue-600 px-6 py-3 text-center font-semibold text-blue-600 hover:bg-blue-600 hover:text-white">
              Contact Me
            </a>

            <a href="/vishal_resume1.pdf" download className="rounded-lg border border-slate-400 px-6 py-3 text-center font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600">
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="gsap-section bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-blue-600">About Me</h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700">
            I am a B.Tech CSE graduate and web developer. I have knowledge of
            HTML, CSS, JavaScript, Tailwind CSS, React.js, and basic Redux. I am
            also learning backend development with Node.js, Express.js, MongoDB,
            and Mongoose.
          </p>
        </div>
      </section>

      <section id="skills" className="gsap-section px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-blue-600">Skills</h2>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {["HTML", "CSS", "JavaScript", "Tailwind CSS", "React.js", "Redux Basic", "Node.js", "Express.js", "MongoDB", "Mongoose", "Git", "GitHub"].map((skill) => (
              <div key={skill} className="card-hover rounded-xl border border-gray-200 bg-white p-4 text-center font-semibold text-slate-700 shadow-sm hover:border-blue-600 hover:text-blue-600">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="gsap-section bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-blue-600">Projects</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div key={project.title} className="card-hover rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm hover:shadow-md">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="mt-2 text-sm font-medium text-blue-600">{project.tech}</p>
                <p className="mt-4 text-slate-600">{project.desc}</p>

                <div className="mt-6 flex gap-4">
                  <a href={project.live} target="_blank" className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-500">
                    Live Demo
                  </a>
                  <a href={project.github} target="_blank" className="rounded-lg border border-blue-600 px-4 py-2 font-semibold text-blue-600 hover:bg-blue-600 hover:text-white">
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="gsap-section px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-blue-600">Contact Me</h2>

          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p><b>Email:</b> vishalchoudhary9770@gmail.com</p>
            <p className="mt-3"><b>Phone:</b> +91 7610672983</p>
            <p className="mt-3"><b>GitHub:</b> <a href="https://github.com/vishalchoudhary9" target="_blank" className="text-blue-600 hover:underline">github.com/vishalchoudhary9</a></p>
            <p className="mt-3"><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/vishal-choudhary-07b478258/" target="_blank" className="text-blue-600 hover:underline">linkedin.com/in/vishal-choudhary-07b478258</a></p>
            <p className="mt-3"><b>Instagram:</b> <a href="https://www.instagram.com/this_.is_vishal/" target="_blank" className="text-blue-600 hover:underline">instagram.com/this_.is_vishal</a></p>
          </div>
        </div>
      </section>

      <section id="feedback" className="gsap-section bg-white px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-4xl font-bold text-blue-600">Feedback</h2>

          <form action="https://formspree.io/f/mvzybngr" method="POST" className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <input name="name" type="text" placeholder="Your Name" required className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600" />
            <input name="email" type="email" placeholder="Your Email" required className="mt-4 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600" />
            <textarea name="message" rows="5" placeholder="Your Message / Feedback" required className="mt-4 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"></textarea>

            <button type="submit" className="mt-6 w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-white px-6 py-5 text-center text-slate-500">
        © 2026 Vishal Choudhary. All rights reserved.
      </footer>
    </div>
  )
}

export default App