import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

// ✅ Local high-quality images (your imported ones)
import billExpressimg from "../../../assets/bill-expenses-on-mobile-phone-260nw-2340444601_imgupscaler.ai_Beta_2K.jpg";
import creditCardimg from "../../../assets/credit-card-online-payment-concept-banner-free-vector_imgupscaler.ai_General_4K.jpg";
import bill2img from "../../../assets/bill-2.jpg";
import bill4img from "../../../assets/bill-4.jpg";

// ✅ Custom modern button
function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-2xl text-lg shadow-lg hover:shadow-blue-500/40 transition-all duration-300"
    >
      {children}
      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
    </button>
  );
}

// ✅ Use your imported images here
const images = [billExpressimg, creditCardimg, bill2img, bill4img];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center">
      {/* Sliding Backgrounds */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={current}
            src={images[current]}
            alt="Bill payment visual"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 60, damping: 20 },
              opacity: { duration: 0.6 },
            }}
            className="absolute w-full h-full object-cover object-center select-none"
            style={{
              imageRendering: "auto",
              transform: "translateZ(0)",
              filter: "brightness(1.05) contrast(1.02)",
            }}
          />
        </AnimatePresence>
      </div>

      {/* Softer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full px-5 container mx-auto ">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight text-white"
          >
            Pay Bills{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Instantly & Securely
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg sm:text-2xl text-gray-200 mb-10 max-w-xl"
          >
            Simplify your life with fast, trusted online utility bill payments —
            anytime, anywhere.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Button onClick={() => alert("Let's Get Started!")}>
              Get Started
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
