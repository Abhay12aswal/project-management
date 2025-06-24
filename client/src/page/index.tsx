import { Button } from '../components/ui/button'
import { Book, Github } from 'lucide-react'
import Navbar from '../layout/Navbar'
import Hero from '../landing/Hero'
import Features from '../landing/Features'
import Testimonial from '../landing/Testimonial'
import CTA from '../landing/CTA'

const Index = () => {
  return (
    <div className='min-h-screen'>

      <Navbar/>
      <Hero/>
      <Features/>
      <Testimonial/>
      <CTA/>

      {/* footer */}
      <footer className="bg-blue-700 text-white py-12">
        <div className="container-width">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TeamSync - MERN Stack Project Management</h3>
              <p className="text-white/70 mb-4">
                A full-featured multi-tenancy project management system.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Book className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-white/70 hover:text-white">Features</a></li>
                <li><a href="#testimonials" className="text-white/70 hover:text-white">Testimonials</a></li>
                <li><a href="#pricing" className="text-white/70 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Get Started</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Newsletter</h4>
              <p className="text-white/70 mb-4">Subscribe to get updates on new features and improvements</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 border border-white/20 rounded-l px-4 py-2 w-full text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-jira-lightblue"
                />
                <Button className="bg-jira-lightblue hover:bg-blue-400 rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
            <p>&copy; {new Date().getFullYear()} TeamSync. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Index
