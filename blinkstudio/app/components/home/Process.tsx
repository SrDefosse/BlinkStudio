
const colors = {
  bg: {
    primary: "#1a1d18",
    secondary: "#2a2e26",
    tertiary: "#3c4237",
  },
  text: {
    primary: "#e6e1d7",
    secondary: "#c8b4a0",
    muted: "#a89080",
  }
};

export default function Process() {
  return (
    <main style={{ backgroundColor: colors.bg.primary }}>
      <div className="wrapper">
        <section 
          className="h-screen w-full grid place-content-center sticky top-0"
          style={{ backgroundColor: colors.bg.primary }}
        >
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `linear-gradient(to right, ${colors.text.muted}15 1px, transparent 1px), linear-gradient(to bottom, ${colors.text.muted}15 1px, transparent 1px)`,
              backgroundSize: "54px 54px",
              maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)"
            }}
          />
          <h1 
            className="2xl:text-7xl text-6xl px-8 font-semibold text-center tracking-tight leading-[120%]"
            style={{ color: colors.text.primary }}
          >
          </h1>
        </section>

        <section 
          className="grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden"
          style={{ backgroundColor: colors.bg.primary}}
        >
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `linear-gradient(to right, ${colors.text.muted}15 1px, transparent 1px), linear-gradient(to bottom, ${colors.text.muted}15 1px, transparent 1px)`,
              backgroundSize: "54px 54px",
              maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)"
            }}
          />
          <h1 
            className="2xl:text-7xl text-4xl px-4 md:px-8 font-semibold text-center tracking-tight leading-[120%]"
            style={{ color: colors.text.primary }}
          >
            We go step by step to create the best solutions for our clients <br />
          </h1>
        </section>

        
      </div>

      <section className="w-full" style={{ backgroundColor: colors.bg.primary }}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="md:sticky md:top-0 h-screen flex items-center justify-center order-1 md:order-none">
            <h1 
              className="2xl:text-7xl text-4xl md:text-5xl px-4 md:px-8 font-semibold text-center tracking-tight leading-[120%]"
              style={{ color: colors.text.primary }}
            >
              We translate insights into clear strategies
            </h1>
          </div>
          <div className="grid gap-2 py-8 md:py-0 order-2 md:order-none">
            <figure className="grid place-content-center">
              <div className="-skew-x-12">
                <img
                  src="https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-64 h-80 md:w-80 md:h-96 align-bottom object-cover"
                  loading="lazy"
                />
              </div>
            </figure>
            <figure className="grid place-content-center">
              <div className="skew-x-12">
                <img
                  src="https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-64 h-80 md:w-80 md:h-96 align-bottom object-cover"
                  loading="lazy"
                />
              </div>
            </figure>
            <figure className="grid place-content-center">
              <div className="-skew-x-12">
                <img
                  src="https://images.unsplash.com/photo-1718601980986-0ce75101d52d?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-64 h-80 md:w-80 md:h-96 align-bottom object-cover"
                  loading="lazy"
                />
              </div>
            </figure>
            <figure className="grid place-content-center">
              <div className="skew-x-12">
                <img
                  src="https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-64 h-80 md:w-80 md:h-96 align-bottom object-cover"
                  loading="lazy"
                />
              </div>
            </figure>
          </div>
        </div>
      </section>

      <section className="w-full" style={{ backgroundColor: colors.bg.primary }}>
        <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-8">
          <div className="grid gap-2 order-1 md:order-none">
            <figure className="md:sticky md:top-0 h-screen grid place-content-center">
              <img
                src="https://images.unsplash.com/photo-1718183120769-ece47f31045b?w=500&auto=format&fit=crop"
                alt=""
                className="transition-all duration-300 w-72 h-72 md:w-96 md:h-96 align-bottom object-cover rounded-md"
                loading="lazy"
              />
            </figure>
            <figure className="md:sticky md:top-0 h-screen grid place-content-center">
              <img
                src="https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=500&auto=format&fit=crop"
                alt=""
                className="transition-all duration-300 w-72 h-72 md:w-96 md:h-96 align-bottom object-cover rounded-md"
                loading="lazy"
              />
            </figure>
            <figure className="md:sticky md:top-0 h-screen grid place-content-center">
              <img
                src="https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=500&auto=format&fit=crop"
                alt=""
                className="transition-all duration-300 w-72 h-72 md:w-96 md:h-96 align-bottom object-cover rounded-md"
                loading="lazy"
              />
            </figure>
            <figure className="md:sticky md:top-0 h-screen grid place-content-center">
              <img
                src="https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop"
                alt=""
                className="transition-all duration-300 w-72 h-72 md:w-96 md:h-96 align-bottom object-cover rounded-md"
                loading="lazy"
              />
            </figure>
          </div>
          <div className="md:sticky md:top-0 h-screen flex items-center justify-center order-2 md:order-none mb-8 md:mb-0">
            <h1 
              className="text-4xl md:text-5xl px-4 md:px-8 font-medium text-center md:text-right tracking-tight leading-[120%]"
              style={{ color: colors.text.primary }}
            >
              We will create a plan for your project based on your needs and goals
            </h1>
          </div>
        </div>
      </section>

      <footer className="group" style={{ backgroundColor: colors.bg.primary }}>
        <h1 
          className="text-[12vw] group-hover:translate-y-4 translate-y-20 leading-[100%] uppercase font-semibold text-center bg-clip-text text-transparent transition-all ease-linear"
          style={{ 
            backgroundImage: `linear-gradient(to right, ${colors.text.muted}, ${colors.text.primary})`
          }}
        >
          BLINK STUDIO
        </h1>
      </footer>
    </main>
  );
}
