import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Quote, ChevronRight, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Reviews = () => {
  const reviews = [
    {
      name: "Ramu Prajapat",
      rating: 5,
      text: "Sunil sir is an excellent instructor. Very patient and explains everything clearly. I learned to drive with full confidence thanks to him! Highly recommend this school.",
      date: "January 2024",
    },
    {
      name: "Vishwajeet Gupta",
      rating: 5,
      text: "Best driving school in Jaipur! The instructors are professional and the training is comprehensive. They focus on real-world driving skills, not just passing the test.",
      date: "December 2023",
    },
    {
      name: "Priya Sharma",
      rating: 5,
      text: "As a woman who was initially scared of driving, the special classes helped me overcome my fear. Now I drive confidently on Jaipur roads! Thank you Vijayvergiya team!",
      date: "November 2023",
    },
    {
      name: "Rahul Verma",
      rating: 4,
      text: "Good training facility with dual-control cars. Sunil Meena sir is very patient and makes learning enjoyable. Great experience overall. Would recommend to friends.",
      date: "January 2024",
    },
    {
      name: "Anjali Mehra",
      rating: 5,
      text: "ISO certified for a reason! The practical training is excellent and they focus on building real-world driving skills. Worth every rupee spent.",
      date: "October 2023",
    },
    {
      name: "Deepak Joshi",
      rating: 5,
      text: "I took the refresher course after years of not driving. The instructors helped me regain my confidence quickly. Excellent service and professional staff!",
      date: "December 2023",
    },
    {
      name: "Sunita Agarwal",
      rating: 5,
      text: "Very impressed with the professionalism. They teach proper road safety and traffic rules, not just how to pass the test. My son is now a confident driver.",
      date: "September 2023",
    },
    {
      name: "Mohit Khandelwal",
      rating: 4,
      text: "Good experience overall. The instructors are knowledgeable and patient. The training cars are well-maintained. Pricing is reasonable compared to others.",
      date: "November 2023",
    },
    {
      name: "Kavita Singh",
      rating: 5,
      text: "Thank you Vijayvergiya Driving School! I was so nervous at first but the instructors made me feel comfortable. Now I drive my own car to work every day!",
      date: "August 2023",
    },
    {
      name: "Arjun Choudhary",
      rating: 5,
      text: "Best investment I made! The advanced training course taught me skills I didn't know I needed. Highway driving and night driving tips were especially helpful.",
      date: "January 2024",
    },
    {
      name: "Meena Jain",
      rating: 4,
      text: "Very patient instructors who understand that everyone learns at their own pace. The women's special class was exactly what I needed. Good value for money.",
      date: "October 2023",
    },
    {
      name: "Sanjay Gupta",
      rating: 5,
      text: "My daughter learned driving here and I was impressed by how confident she became. The focus on safety and proper techniques is commendable. Highly recommended!",
      date: "December 2023",
    },
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
              Student Reviews
            </h1>
            <p className="text-xl text-primary-foreground/80">
              What Our Students Say About Us
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex justify-center gap-1 mb-2">
                {[1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400/50" />
              </div>
              <p className="text-3xl font-bold text-foreground mb-1">4.5/5</p>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-3xl font-bold text-foreground mb-1">10,000+</p>
              <p className="text-sm text-muted-foreground">Students Trained</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Award className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-3xl font-bold text-foreground mb-1">95%</p>
              <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 relative"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-muted"
                      }`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground leading-relaxed mb-6 text-sm">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {review.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {review.date}
                    </p>
                  </div>
                </div>
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
              Join Our Success Stories
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Start your driving journey with Jaipur's most trusted school
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Enroll Now
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="heroOutline" size="xl">
                  Share Your Review
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;
