import { useEffect, useRef, useState } from 'react'
import { CodeBlock, atomOneDark } from 'react-code-blocks'
import {
	FaBars,
	FaBriefcase,
	FaCode,
	FaDatabase,
	FaEnvelope,
	FaAws,
	FaCss3Alt,
	FaFileDownload,
	FaGithub,
	FaHtml5,
	FaJava,
	FaLayerGroup,
	FaLaptopCode,
	FaLinkedin,
	FaPhone,
	FaServer,
	FaTerminal,
	FaTimes,
	FaTools,
	FaUser,
} from 'react-icons/fa'
import {
	SiCplusplus,
	SiDocker,
	SiDotnet,
	SiGit,
	SiJavascript,
	SiLinux,
	SiMongodb,
	SiNextdotjs,
	SiPython,
	SiPytorch,
	SiReact,
	SiRust,
	SiSqlite,
	SiSpringboot,
	SiTauri,
	SiTmux,
	SiTypescript,
} from 'react-icons/si'

const navItems = [
	{ href: '#about', label: 'About', icon: FaUser },
	{ href: '#projects', label: 'Projects', icon: FaLayerGroup },
	{ href: '#skills', label: 'Skills', icon: FaCode },
	{ href: '#experience', label: 'Experience', icon: FaBriefcase },
	{ href: '#contact', label: 'Contact', icon: FaEnvelope },
]

const socialLinks = [
	{ href: 'https://www.linkedin.com/in/stefan-jakovljevicc', label: 'LinkedIn', icon: FaLinkedin },
	{ href: 'https://github.com/stefanjakov', label: 'GitHub', icon: FaGithub },
	{ href: '/resume.pdf', label: 'Download resume', icon: FaFileDownload, download: true },
]

const contactLinks = [
	{ href: 'mailto:jakovljevicstefan2004@gmail.com', label: 'Email', icon: FaEnvelope },
	{ href: 'tel:+15862240301', label: 'Phone', icon: FaPhone },
	{ href: 'https://www.linkedin.com/in/stefan-jakovljevicc', label: 'LinkedIn', icon: FaLinkedin },
	{ href: 'https://github.com/stefanjakov', label: 'GitHub', icon: FaGithub },
]

const projects = [
	{
		title: 'ProTouch Painting',
		subtitle: 'Business Website',
		description:
			'Professional painting company site with responsive UI, optimized image delivery, AWS-backed storage, and transactional email.',
		tags: [
			{ label: 'Next.js', icon: SiNextdotjs },
			{ label: 'TypeScript', icon: SiTypescript },
			{ label: 'React', icon: SiReact },
			{ label: 'AWS', icon: FaAws },
		],
	},
	{
		title: 'Medbaza',
		subtitle: 'Desktop Medical Records App',
		description:
			'Desktop medical records app for a clinic in Serbia, replacing paper workflows with secure patient data storage and retrieval.',
		tags: [
			{ label: 'Rust', icon: SiRust },
			{ label: 'Tauri', icon: SiTauri },
			{ label: 'React', icon: SiReact },
			{ label: 'SQL', icon: FaDatabase },
		],
	},
	{
		title: 'Pinta',
		subtitle: 'Terminal UI',
		description:
			'Rust TUI for navigating tmux windows, browsing directories, and searching project folders from the terminal.',
		tags: [
			{ label: 'Rust', icon: SiRust },
			{ label: 'TUI', icon: FaTerminal },
			{ label: 'tmux', icon: SiTmux },
			{ label: 'SQLite', icon: SiSqlite },
		],
	},
]

const skills = [
	{
		title: 'Languages',
		icon: FaCode,
		items: [
			{ label: 'C++', icon: SiCplusplus },
			{ label: 'Python', icon: SiPython },
			{ label: 'PyTorch', icon: SiPytorch },
			{ label: 'Java', icon: FaJava },
			{ label: 'Spring Boot', icon: SiSpringboot },
			{ label: 'C#', icon: SiDotnet },
			{ label: '.NET', icon: SiDotnet },
			{ label: 'Rust', icon: SiRust },
		],
	},
	{
		title: 'Web',
		icon: FaLaptopCode,
		items: [
			{ label: 'JavaScript', icon: SiJavascript },
			{ label: 'TypeScript', icon: SiTypescript },
			{ label: 'React', icon: SiReact },
			{ label: 'Next.js', icon: SiNextdotjs },
			{ label: 'HTML', icon: FaHtml5 },
			{ label: 'CSS', icon: FaCss3Alt },
		],
	},
	{
		title: 'Data & Platforms',
		icon: FaServer,
		items: [
			{ label: 'SQL', icon: FaDatabase },
			{ label: 'MongoDB', icon: SiMongodb },
			{ label: 'AWS', icon: FaAws },
			{ label: 'Linux', icon: SiLinux },
		],
	},
	{
		title: 'Tools',
		icon: FaTools,
		items: [
			{ label: 'Git', icon: SiGit },
			{ label: 'Docker', icon: SiDocker },
			{ label: 'Tauri', icon: SiTauri },
			{ label: 'tmux', icon: SiTmux },
		],
	},
]

const coursework = [
	'Discrete Mathematics',
	'Linear Algebra',
	'Data Structures and Algorithms (EECS 281)',
	'Introduction to Computer Organization (EECS 370)',
	'Database Management Systems (EECS 484)',
	'Foundations of Computer Science (EECS 376)',
	'Software Engineering (EECS 481)',
	'Introduction to Artificial Intelligence (EECS 492)',
]

const experiences = [
	{
		company: 'United Wholesale Mortgage',
		role: 'Software Developer Intern',
		date: 'May 2026 -',
		image: '/uwm.png',
		imageAlt: 'United Wholesale Mortgage logo',
		details: [
			'Will build and contribute to C# backend services on the .NET framework using object-oriented design.',
			'Will participate in Agile Scrum across the full software development life cycle, from design through implementation and testing.',
		],
	},
	{
		company: 'Varsity Tutors / Private Tutoring',
		role: 'Tutor',
		date: '',
		image: '/varsity tutors.png',
		imageAlt: 'Varsity Tutors logo',
		details: [
			'Provided one-on-one instruction in Math 8, Algebra, Pre-Calculus, Calculus I, and computer science.',
			'Tutored Python, Java fundamentals, and object-oriented Java with an emphasis on problem-solving and strong foundations.',
		],
	},
]

const aboutCode = `class Stefan:
    def __init__(self):
        self.school = "University of Michigan"
        self.graduation_year = 2026
        self.internship = "SWE @ UWM"
        self.languages = ["py", "cpp", "ts", "rs"]
        self.skills = ["SWE", "AI/ML", "Fullstack"]
        self.hobbies = ["soccer", "chess", "guitar"]
        self.location = "Detroit, MI"
        self.english = "fluent"
        self.serbo_croatian = "fluent"
        self.spanish = "proficient"
`

function App() {
	const [menuOpen, setMenuOpen] = useState(false)
	const [aboutVisible, setAboutVisible] = useState(false)
	const [projectsVisible, setProjectsVisible] = useState(false)
	const [skillsVisible, setSkillsVisible] = useState(false)
	const [experienceVisible, setExperienceVisible] = useState(false)
	const [contactVisible, setContactVisible] = useState(false)
	const aboutRef = useRef<HTMLElement>(null)
	const projectsRef = useRef<HTMLElement>(null)
	const skillsRef = useRef<HTMLElement>(null)
	const experienceRef = useRef<HTMLElement>(null)
	const contactRef = useRef<HTMLElement>(null)

	useEffect(() => {
		const aboutSection = aboutRef.current
		const projectsSection = projectsRef.current
		const skillsSection = skillsRef.current
		const experienceSection = experienceRef.current
		const contactSection = contactRef.current

		if (!aboutSection || !projectsSection || !skillsSection || !experienceSection || !contactSection) {
			return
		}

		// used IntersectionObserver to trigger animations when sections come into view instead of CSS struggles
		// wathced yt video on it
		const aboutObserver = new IntersectionObserver(
			([entry]) => {
				setAboutVisible(entry.isIntersecting)
			},
			{ rootMargin: '0px 0px -15% 0px', threshold: 0.05 },
		)

		const projectsObserver = new IntersectionObserver(
			([entry]) => {
				setProjectsVisible(entry.isIntersecting)
			},
			{ rootMargin: '0px 0px -15% 0px', threshold: 0.05 },
		)

		const skillsObserver = new IntersectionObserver(
			([entry]) => {
				setSkillsVisible(entry.isIntersecting)
			},
			{ rootMargin: '0px 0px -15% 0px', threshold: 0.05 },
		)

		const experienceObserver = new IntersectionObserver(
			([entry]) => {
				setExperienceVisible(entry.isIntersecting)
			},
			{ rootMargin: '0px 0px -15% 0px', threshold: 0.05 },
		)

		const contactObserver = new IntersectionObserver(
			([entry]) => {
				setContactVisible(entry.isIntersecting)
			},
			{ rootMargin: '0px 0px -15% 0px', threshold: 0.05 },
		)

		aboutObserver.observe(aboutSection)
		projectsObserver.observe(projectsSection)
		skillsObserver.observe(skillsSection)
		experienceObserver.observe(experienceSection)
		contactObserver.observe(contactSection)

		return () => {
			aboutObserver.disconnect()
			projectsObserver.disconnect()
			skillsObserver.disconnect()
			experienceObserver.disconnect()
			contactObserver.disconnect()
		}
	}, [])

	return (
		<>
			<header className="navbar">
				<a className="brand" href="/" aria-label="Portfolio home">
					<span className="brand-mark">SJ</span>
					<span className="brand-text code-font">
						<span>Stefan Jakovljević</span>
						<span className="brand-divider" aria-hidden="true" />
						<span>CS @ UMich</span>
					</span>
				</a>

				<button
					// implemented accessibly with ARIA attributes and keyboard support
					className="menu-toggle"
					type="button"
					aria-controls="primary-navigation"
					aria-expanded={menuOpen}
					aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
					onClick={() => setMenuOpen((isOpen) => !isOpen)}
				>
					{menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
				</button>

				<nav
					// change the class name based on menu state
					className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}
					id="primary-navigation"
					aria-label="Primary navigation"
				>
					{/* moved this stuff up */}
					{navItems.map(({ href, label, icon: Icon }) => (
						<a className="nav-link" href={href} key={href} onClick={() => setMenuOpen(false)}>
							<Icon aria-hidden="true" />
							<span>{label}</span>
						</a>
					))}
				</nav>
			</header>

			<main>
				<section
					className={`page-section hero-section ${aboutVisible ? 'about-visible' : ''}`}
					id="about"
					ref={aboutRef}
				>
					<div className="hero-content">
						<h1 className="hero-title fancy-font">Stefan Jakovljević</h1>
						<p className="hero-kicker code-font">CS @ UMich</p>
						<div className="hero-code code-font">
							<CodeBlock
								text={aboutCode}
								language="python"
								showLineNumbers={true}
								theme={atomOneDark}
							/>
						</div>
						<div className="hero-socials" aria-label="Social links">
							{socialLinks.map(({ href, label, icon: Icon, download }) => (
								<a
									className="hero-social-link"
									href={href}
									key={label}
									aria-label={label}
									download={download}
									target={download ? undefined : '_blank'}
									rel={download ? undefined : 'noreferrer'}
								>
									<Icon aria-hidden="true" />
								</a>
							))}
						</div>
					</div>
				</section>
				<section
					className={`page-section projects-section ${projectsVisible ? 'projects-visible' : ''}`}
					id="projects"
					ref={projectsRef}
				>
					<div className="projects-content">
						<h2 className="fancy-font">Projects</h2>
						<div className="projects-list">
							{projects.map(({ title, subtitle, description, tags }) => (
								<article className="project-card" key={title} tabIndex={0}>
									<h3 className='code-font'>{title}</h3>
									<p className="project-subtitle">{subtitle}</p>
									<p className="project-description">{description}</p>
									<footer className="project-stack">
										<h4>Stack</h4>
										<div className="project-tags code-font" aria-label={`${title} technologies`}>
											{tags.map(({ label, icon: Icon }) => (
												<span key={label}>
													<Icon aria-hidden="true" />
													{label}
												</span>
											))}
										</div>
									</footer>
								</article>
							))}
						</div>
					</div>
				</section>
				<section
					className={`page-section skills-section ${skillsVisible ? 'skills-visible' : ''}`}
					id="skills"
					ref={skillsRef}
				>
					<div className="skills-content">
						<h2 className="fancy-font">Skills</h2>
						<h3 className="skills-subheading code-font">Technical Skills</h3>
						<div className="skills-list">
							{skills.map(({ title, icon: SectionIcon, items }) => (
								<article className="skill-card" key={title} tabIndex={0}>
									<header className="skill-card-header">
										<SectionIcon aria-hidden="true" />
										<h3 className="code-font">{title}</h3>
									</header>
									<div className="skill-tags code-font">
										{items.map(({ label, icon: Icon }) => (
											<span key={label}>
												<Icon aria-hidden="true" />
												{label}
											</span>
										))}
									</div>
								</article>
							))}
						</div>
						<article className="coursework-card" tabIndex={0}>
							<h3 className="coursework-subheading code-font">Classwork</h3>
							<ul>
								{coursework.map((course) => (
									<li className='fancy-font' key={course}>{course}</li>
								))}
							</ul>
						</article>
					</div>
				</section>
				<section
					className={`page-section experience-section ${experienceVisible ? 'experience-visible' : ''}`}
					id="experience"
					ref={experienceRef}
				>
					<div className="experience-content">
						<h2 className="fancy-font">Experience</h2>
						<div className="experience-list">
							{experiences.map(({ company, role, date, image, imageAlt, details }) => (
								<article className="experience-card" key={`${company}-${role}`} tabIndex={0}>
									<header className="experience-card-header">
										<div className="experience-image">
											<img src={image} alt={imageAlt} />
										</div>
										<div>
											<h3 className="code-font">{role}</h3>
											<p>
												<span>{company}</span>
												{date && <span className="experience-date code-font">{date}</span>}
											</p>
										</div>
									</header>
									<ul>
										{details.map((detail) => (
											<li key={detail}>{detail}</li>
										))}
									</ul>
								</article>
							))}
						</div>
					</div>
				</section>
				<section
					className={`page-section contact-section ${contactVisible ? 'contact-visible' : ''}`}
					id="contact"
					ref={contactRef}
				>
					<div className="contact-content">
						<h2 className="fancy-font">Contact Me</h2>
						<article className="contact-card" tabIndex={0}>
							<div className="contact-photo-wrap">
								<img className="contact-photo" src="/me.png" alt="Stefan Jakovljevic" />
							</div>
							<div className="contact-details">
								<h3 className="fancy-font">Stefan Jakovljević</h3>
								<div className="contact-links">
									{contactLinks.map(({ href, label, icon: Icon }) => (
										<a className="contact-link code-font" href={href} key={label}>
											<Icon aria-hidden="true" />
											<span>{label}</span>
										</a>
									))}
								</div>
							</div>
						</article>
					</div>
				</section>
			</main>
			<footer className="site-footer">
				<p className="code-font">© {new Date().getFullYear()} Stefan Jakovljević</p>
				<nav className="footer-links code-font" aria-label="Footer navigation">
					{navItems.map(({ href, label }) => (
						<a href={href} key={href}>
							{label}
						</a>
					))}
				</nav>
			</footer>
		</>
	)
}

export default App
