
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GithubIcon, LinkedinIcon, MailIcon, AwardIcon, QuoteIcon, PhoneIcon, MapPinIcon } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-pink-50">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-pink-100">
        <a className="flex items-center justify-center" href="#">
          <span className="sr-only">Claire Marie</span>
          <span className="font-bold text-xl text-pink-600">CM</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:text-pink-600 hover:underline underline-offset-4" href="#about">
            About
          </a>
          <a className="text-sm font-medium hover:text-pink-600 hover:underline underline-offset-4" href="#projects">
            Projects
          </a>
          <a className="text-sm font-medium hover:text-pink-600 hover:underline underline-offset-4" href="#skills">
            Skills
          </a>
          <a className="text-sm font-medium hover:text-pink-600 hover:underline underline-offset-4" href="#testimonials">
            Testimonials
          </a>
          <a className="text-sm font-medium hover:text-pink-600 hover:underline underline-offset-4" href="#contact">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-pink-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-pink-800" data-cy="title">
                  Claire Marie
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Quality Assurance Engineer
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-pink-700 mb-4">About Me</h2>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
            With over 15 years of experience in customer-facing roles and a deep passion for software testing, 
            I bring a unique blend of skills to the world of QA. My journey into testing has been driven by curiosity and a 
            genuine love for learning. Earning my ISTQB Certified Tester Foundation Level qualification was a proud milestone, 
            and I have since gained hands-on experience with various testing tools and agile methodologies.

            What excites me most about software testing is ensuring that the final product not only meets technical standards 
            but also feels seamless and intuitive for every user. I am passionate about creating software that works beautifully 
            and makes life easier for people, regardless of their technical background. My strong attention to detail and enthusiasm
             for problem-solving fuel my desire to continually grow and make a meaningful impact on the quality of the products I work on.

            I am genuinely excited about what the future holds in software testing and cannot wait to contribute to building software that users love!
            </p>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-pink-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-pink-700 mb-8">QA Projects</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white border-pink-100">
                <CardHeader>
                  <CardTitle className="text-pink-700">Oaksbridge House</CardTitle>
                  <CardDescription>Our House Move</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>In 2022, we undertook the challenge of moving into a newly built home, which presented us with over 200 issues, (snags) 
                    that required careful documentation and resolution. To effectively manage this process, we implemented a Jira board to track and 
                    prioritize these issues. I took on the role of project manager for this backlog, organizing the snags into epics based on 
                    different areas of the house. My responsibilities included performing quality assurance on the resolved issues before final 
                    approval and coordinating with various stakeholders, including the site team, other residents, and our professional snagger (our SME). 
                    This approach ensured that we addressed the snags efficiently, prioritizing those with long lead times and urgent needs.</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge className="bg-pink-100 text-pink-800">Jira</Badge>
                    <Badge className="bg-pink-100 text-pink-800">Email</Badge>
                    <Badge className="bg-pink-100 text-pink-800">Technology</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white border-pink-100">
                <CardHeader>
                  <CardTitle className="text-pink-700">Prismafy</CardTitle>
                  <CardDescription>Managing Insights into Engineering Practices</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                  As part of a cross-functional Scrum team testing a cloud-based application, I was responsible for creating epics and stories in Jira, 
                  defining acceptance criteria and non-functional requirements, and maintaining test libraries and plans. I queried and seeded test data 
                  in NoSQL (MongoDB) and SQL (Postgres) databases, raised bugs, and created item templates. My work included regression testing, 
                  drafting release notes, testing REST APIs (with a focus on security testing for AuthN and AuthZ), and performing e2e 
                  testing for a Next.js React app using Playwright. Additionally, I tested data-centric ETL and data pipelines, wrote performance tests 
                  with k6 and TypeScript, and tracked test metrics and KPIs. I also utilized observability tools to monitor logs and dashboards, 
                  consistently promoting a quality-driven, shift-left testing mindset.</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge className="bg-pink-100 text-pink-800">Postman</Badge>
                    <Badge className="bg-pink-100 text-pink-800">Jira</Badge>
                    <Badge className="bg-pink-100 text-pink-800">Technology</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white border-pink-100">
                <CardHeader>
                  <CardTitle className="text-pink-700">Project 1</CardTitle>
                  <CardDescription>Project Summary</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Project Description.</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge className="bg-pink-100 text-pink-800">Technology</Badge>
                    <Badge className="bg-pink-100 text-pink-800">Technology</Badge>
                    <Badge className="bg-pink-100 text-pink-800">Technology</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-pink-700 mb-8">Skills & Certifications</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-pink-50 border-pink-100">
                <CardHeader>
                  <CardTitle className="text-pink-700">Testing Types</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 text-gray-700">
                    <li>Functional Testing</li>
                    <li>Regression Testing</li>
                    <li>Performance Testing</li>
                    <li>Security Testing</li>
                    <li>Usability Testing</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-pink-50 border-pink-100">
                <CardHeader>
                  <CardTitle className="text-pink-700">Automation Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 text-gray-700">
                    <li>Playwright</li>
                    <li>K6 & Grafana</li>
                    <li>XRay</li>
                    <li>Postman</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-pink-50 border-pink-100">
                <CardHeader>
                  <CardTitle className="text-pink-700">CI/CD & Version Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 text-gray-700">
                    <li>Git</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-pink-50 border-pink-100">
                <CardHeader>
                  <CardTitle className="text-pink-700">Certifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <AwardIcon className="h-5 w-5 text-pink-500" />
                    <span>ISTQB Certified Foundation Level Software Tester v4.0</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">Certified in 2024</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-pink-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-pink-700 mb-8">Testimonials</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="bg-white border-pink-100">
                <CardContent className="pt-6">
                  <QuoteIcon className="h-8 w-8 text-pink-300 mb-4" />
                  <p className="text-lg mb-4 text-gray-700">
                    The thing the person said.
                  </p>
                  <div className="font-semibold text-pink-700">Name</div>
                  <div className="text-sm text-gray-500">Job Title, Company</div>
                </CardContent>
              </Card>
              <Card className="bg-white border-pink-100">
                <CardContent className="pt-6">
                  <QuoteIcon className="h-8 w-8 text-pink-300 mb-4" />
                  <p className="text-lg mb-4 text-gray-700">
                    The thing the person said.
                  </p>
                  <div className="font-semibold text-pink-700">Name</div>
                  <div className="text-sm text-gray-500">Job Title, Company</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-pink-700 mb-8">Contact Me</h2>
            <Card className="bg-pink-50 border-pink-100">
              <CardContent className="pt-6">
                <div className="grid gap-4">
                  <div className="flex items-center space-x-4">
                    <MailIcon className="h-6 w-6 text-pink-500" />
                    <div>
                      <h3 className="font-semibold text-pink-700">Email</h3>
                      <p className="text-sm text-gray-500">
                        <a href="mailto:your.email@example.com" className="hover:text-pink-600">
                          clairemcollis@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <PhoneIcon className="h-6 w-6 text-pink-500" />
                    <div>
                      <h3 className="font-semibold text-pink-700">Phone</h3>
                      <p className="text-sm text-gray-500">+44 0000 000 000</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPinIcon className="h-6 w-6 text-pink-500" />
                    <div>
                      <h3 className="font-semibold text-pink-700">Location</h3>
                      <p className="text-sm text-gray-500">Norfolk, UK</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-pink-100">
        <div className="container flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Claire Marie. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <a className="text-pink-600 hover:text-pink-800" href="#">
              <GithubIcon className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a className="text-pink-600 hover:text-pink-800" href="#">
              <LinkedinIcon className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a className="text-pink-600 hover:text-pink-800" href="#">
              <MailIcon className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}