import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ramu Prajapat",
    rating: 5,
    text: "Sunil sir is an excellent instructor. Very patient and explains everything clearly. I learned to drive with full confidence thanks to him!",
    date: "2024",
  },
  {
    name: "Vishwajeet Gupta",
    rating: 5,
    text: "Best driving school in Jaipur! The instructors are professional and the training is comprehensive. Highly recommended for beginners.",
    date: "2024",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    text: "As a woman who was initially scared of driving, the special classes helped me overcome my fear. Now I drive confidently on Jaipur roads!",
    date: "2023",
  },
  {
    name: "Rahul Verma",
    rating: 4,
    text: "Good training facility with dual-control cars. Sunil Meena sir is very patient and makes learning enjoyable. Great experience overall.",
    date: "2024",
  },
  {
    name: "Anjali Mehra",
    rating: 5,
    text: "ISO certified for a reason! The practical training is excellent and they focus on building real-world driving skills. Worth every rupee.",
    date: "2023",
  },
  {
    name: "Deepak Joshi",
    rating: 5,
    text: "I took the refresher course after years of not driving. The instructors helped me regain my confidence quickly. Excellent service!",
    date: "2024",
  },
  {
    name: "Sunita Agarwal",
    rating: 5,
    text: "Very impressed with the professionalism. They teach proper road safety and traffic rules, not just how to pass the test.",
    date: "2023",
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden py-8">
      <div className="max-w-4xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-8 md:p-12 card-shadow relative"
          >
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/10" />
            
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonials[currentIndex].rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-muted"
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-lg">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Verified Student • {testimonials[currentIndex].date}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-primary/30 hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
