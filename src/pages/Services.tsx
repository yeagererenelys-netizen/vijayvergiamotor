import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Car, Users, RefreshCw, Shield, BookOpen, Gauge, ChevronRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Basic Car Driving Course",
      description: "Complete 15-day training program covering everything from basics to confident city driving.",
      price: "₹2,500",
      features: [
        "Vehicle familiarization",
        "Clutch and gear control",
        "Basic maneuvers",
        "City traffic handling",
        "Dual-control cars for safety",
      ],
    },
    {
      icon: Gauge,
      title: "Advanced Driving Training",
      description: "Master complex driving skills including parking, reversing, and highway driving.",
      price: "₹3,500",
      features: [
        "Parallel parking mastery",
        "Reverse driving",
        "Hill start techniques",
        "Highway driving",
        "Night driving basics",
      ],
    },
    {
      icon: RefreshCw,
      title: "Refresher Courses",
      description: "For those who haven't driven in a while. Get back on the road with confidence.",
      price: "₹1,500",
      features: [
        "Confidence rebuilding",
        "Updated traffic rules",
        "Modern vehicle handling",
        "Customized training",
        "Flexible scheduling",
      ],
    },
    {
      icon: Users,
      title: "Women's Special Classes",
      description: "Dedicated training for women with patient instructors in a supportive environment.",
      price: "₹2,500",
      features: [
        "Female-friendly environment",
        "Patient instruction",
        "Fear removal techniques",
        "Self-defense awareness",
        "Flexible timings",
      ],
    },
    {
      icon: BookOpen,
      title: "Theory Classes",
      description: "Comprehensive classroom sessions covering traffic rules, road signs, and safety.",
      price: "₹500",
      features: [
        "Traffic rules & signals",
        "Road sign recognition",
        "Defensive driving theory",
        "RTO exam preparation",
        "Safety guidelines",
      ],
    },
    {
      icon: Shield,
      title: "Road Safety Training",
      description: "Special focus on accident prevention and emergency handling techniques.",
      price: "₹1,000",
      features: [
        "Hazard perception",
        "Emergency braking",
        "Accident avoidance",
        "First aid awareness",
        "Weather driving tips",
      ],
    },
  ];

  const features = [
    "Flexible scheduling to fit your routine",
    "Dual-control cars for maximum safety",
    "ISO certified training standards",
    "Experienced, patient instructors",
    "Pick-up and drop facility available",
    "RTO documentation assistance",
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
              Our Services
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Comprehensive Driving Courses for Every Need
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>

                <p className="text-2xl font-bold text-primary mb-6">
                  {service.price}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to="/contact">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                    Enroll Now
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Why Train With Us?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We go beyond basic training to ensure you become a confident, safe driver
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-card p-4 rounded-xl card-shadow"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Start Driving?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Contact us today to choose the right course for you
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

export default Services;
