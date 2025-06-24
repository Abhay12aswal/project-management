import React from 'react';

const Testimonial: React.FC = () => {
  return (
    <section id="testimonials" className="section-padding bg-gray-100">
      <div className="container-width">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-jira-blue rounded-full mb-3">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Teams Are Saying</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how TeamSync has transformed project management for teams around the world
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* <!-- Testimonial 1 --> */}
          <div className="bg-white p-6 rounded-xl shadow-sm relative">
            <div className="absolute top-6 right-6 text-5xl text-blue-100">"</div>
            <p className="text-gray-600 mb-6 relative z-10">
              TeamSync has completely transformed how our engineering team manages projects. The role-based permissions and analytics are game-changers for us.
            </p>
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full" src="https://imgs.search.brave.com/kMGl3qf1I8dyr4VqACkFY-NYmu-COLnps49H5MP-8Ws/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG1pbmRpYS5nb3Yu/aW4vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMTIvTW9kaS1K/aS1QaG90by0wMi1l/MTY0NzMyNTkzNjgy/MS5qcGc" alt="Emily Chen" />
              <div className="ml-4">
                <p className="font-medium">Narendra Modi</p>
                <p className="text-gray-500 text-sm">Engineering Manager</p>
              </div>
            </div>
          </div>

          {/* <!-- Testimonial 2 --> */}
          <div className="bg-white p-6 rounded-xl shadow-sm relative">
            <div className="absolute top-6 right-6 text-5xl text-blue-100">"</div>
            <p className="text-gray-600 mb-6 relative z-10">
              The multi-tenancy features have allowed us to manage multiple client projects with ease. Google Sign-In integration was a huge time-saver during onboarding.
            </p>
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full" src="https://imgs.search.brave.com/44pIQirQx7J7XjeOEY9sEElnFlaMYwMbpdcdVtT3F2w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aGVw/ZW5pbnN1bGFxYXRh/ci5jb20vZ2V0L21h/eGltYWdlLzIwMjUw/NTE0XzE3NDcyNTI1/OTctOTI2LmpwZz8x/NzQ3MjUyNTk3" alt="Giorgia Meloni" />
              <div className="ml-4">
                <p className="font-medium">Marcus Johnson</p>
                <p className="text-gray-500 text-sm">Product Director</p>
              </div>
            </div>
          </div>

          {/* <!-- Testimonial 3 --> */}
          <div className="bg-white p-6 rounded-xl shadow-sm relative">
            <div className="absolute top-6 right-6 text-5xl text-blue-100">"</div>
            <p className="text-gray-600 mb-6 relative z-10">
              As a startup, we needed something flexible that could grow with us. TeamSync's workspace management and invite system made scaling our team painless.
            </p>
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full" src="https://imgs.search.brave.com/GWEmDPwA2Kve275u2qjEPBmpFmAemNgbVhpV3aBp5FY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ic21l/ZGlhLmJ1c2luZXNz/LXN0YW5kYXJkLmNv/bS9fbWVkaWEvYnMv/aW1nL2FydGljbGUv/MjAyNS0wNC8yNC9m/dWxsLzE3NDU0ODA2/MjEtODU5Ni5qcGc_/aW09Rml0QW5kRmls/bD0oODI2LDQ2NSk" alt="Rahul Gandhi" />
              <div className="ml-4">
                <p className="font-medium">Sophia Rivera</p>
                <p className="text-gray-500 text-sm">CEO, TechStart</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonial;
