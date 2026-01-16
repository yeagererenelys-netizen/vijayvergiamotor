import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, Users, Clock, Shield, MapPin, ChevronRight, CheckCircle, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const About = () => {
  const features = [
    "24/7 Availability for flexible scheduling",
    "ISO Certified training standards",
    "Experienced & patient instructors",
    "Dual-control cars for safety",
    "Serving Patrakar Colony & nearby areas",
    "Confidence-building for beginners",
    "Theory and practical classes combined",
    "Affordable pricing with no hidden fees",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              About Us
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Driving Excellence Since 1997
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image/Visual Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <Car className="w-32 h-32 text-primary/30" />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-card rounded-xl p-4 card-shadow">
                <div className="flex items-center gap-2">
                  <Award className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-bold text-foreground">ISO Certified</p>
                    <p className="text-xs text-muted-foreground">Quality Assured</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 card-shadow">
                <div className="flex items-center gap-2">
                  <Clock className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-bold text-foreground">Since 1997</p>
                    <p className="text-xs text-muted-foreground">25+ Years</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Journey to Confident Driving Starts Here
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  Vijayvergiya Motor Driving School has been Jaipur's trusted name in driver education since 1997. As the city's first ISO-certified driving school, we take pride in our commitment to excellence and safety.
                </p>
                <p>
                  Our mission is simple: to transform beginners into confident, safe drivers through comprehensive practical and theoretical instruction. We don't just teach you how to pass the driving test—we prepare you for a lifetime of safe driving.
                </p>
                <p>
                  Led by experienced instructors like Sunil Meena and Saurabh Vijayvargiya, our team is known for patience, professionalism, and dedication. We understand that learning to drive can be intimidating, which is why we create a supportive environment where every student can thrive.
                </p>
              </div>

              <div className="flex items-center gap-4 p-4 bg-muted rounded-xl mb-8">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Areas We Serve</p>
                  <p className="text-sm text-muted-foreground">Patrakar Colony, Triveni Nagar, Gopalpura & nearby areas</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Us?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to making you a confident, safe driver
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 bg-card p-4 rounded-xl card-shadow"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Instructors
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trained by the best, learn from the best
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                name: "Sunil Meena",
                role: "Senior Driving Instructor",
                description: "Known for his patience and clear explanations. Sunil sir has trained thousands of students and specializes in building confidence in nervous beginners.",
              },
              {
                name: "Saurabh Vijayvargiya",
                role: "Head Instructor",
                description: "With decades of experience, Saurabh sir focuses on advanced driving techniques and road safety awareness.",
              },
            ].map((instructor, index) => (
              <motion.div
                key={instructor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 card-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-1">
                  {instructor.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-4">{instructor.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {instructor.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Join Us Today
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Start your journey to becoming a confident driver
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Enroll Now
                <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
