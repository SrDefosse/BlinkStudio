import { Link, useNavigate } from 'react-router'
import { motion } from 'framer-motion'
import { HiOutlineArrowLeft, HiOutlineHome } from 'react-icons/hi2'

const colors = {
  bg: {
    primary: "#1a1d18",
    secondary: "#2a2e26",
  },
  text: {
    primary: "#e6e1d7",
    secondary: "#c8b4a0",
    muted: "#a89080",
  }
};

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#1a1d18] text-[#e6e1d7] font-sans selection:bg-[#c8b4a0]/30 relative overflow-hidden flex flex-col items-center justify-center p-6">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, ${colors.text.muted}10 1px, transparent 1px), linear-gradient(to bottom, ${colors.text.muted}10 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />

      {/* Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${colors.text.secondary}05 0%, transparent 70%)`
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center max-w-4xl"
      >
        {/* Large 404 Backdrop */}
        <div className="relative mb-8">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 0.05,
              y: [0, -20, 0]
            }}
            transition={{
              delay: 0.2,
              duration: 1.2,
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="text-[20rem] md:text-[30rem] font-bold leading-none tracking-tighter select-none"
          >
            404
          </motion.h1>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-[#f8f7f5]">
                Lost, this page is.
              </h2>
              <p className="text-lg md:text-xl text-[#c8b4a0] font-mono uppercase tracking-[0.3em]">
                In another system, it may be.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
        >
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center gap-3 px-8 py-4 bg-transparent border border-[#c8b4a0]/30 text-[#e6e1d7] hover:border-[#c8b4a0] hover:bg-[#c8b4a0]/5 transition-all duration-300 rounded-sm"
          >
            <HiOutlineArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono uppercase tracking-widest text-xs">Access Prev Node</span>
          </button>

          <Link
            to="/"
            className="group flex items-center gap-3 px-8 py-4 bg-[#e6e1d7] text-[#1a1d18] hover:bg-[#f8f7f5] transition-all duration-300 rounded-sm"
          >
            <HiOutlineHome className="w-5 h-5" />
            <span className="font-mono uppercase tracking-widest text-xs">Return to Core</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Technical Footer Detail */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.4em] text-[#a89080]"
      >
        <span className="w-2 h-2 rounded-full bg-red-500/50 animate-pulse" />
        Blink Studio // ERR_RESOURCE_NOT_FOUND_0x404
      </motion.div>

      {/* Corner Decorative Elements */}
      <div className="absolute top-12 left-12 w-4 h-px bg-[#c8b4a0]/20" />
      <div className="absolute top-12 left-12 h-4 w-px bg-[#c8b4a0]/20" />
      <div className="absolute bottom-12 right-12 w-4 h-px bg-[#c8b4a0]/20" />
      <div className="absolute bottom-12 right-12 h-4 w-px bg-[#c8b4a0]/20" />
    </div>
  )
}
