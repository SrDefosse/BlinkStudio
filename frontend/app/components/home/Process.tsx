
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

const PROCESS_IMAGES = [
  "/process-imgs/process-1.jpg",
  "/process-imgs/process-2.png",
  "/process-imgs/process-3.jpg",
  "/process-imgs/process-4.jpg",
];

const PLAN_IMAGES = [
  "/process-imgs/process-5.png",
  "/process-imgs/process-6.png",
  "/process-imgs/process-7.png",
  "/process-imgs/process-8.jpg",
];

export default function Process() {
  return (
    <main className="relative z-10">
      <div className="wrapper">
        <section
          className="h-screen w-full grid place-content-center sticky top-0"
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

      <section className="w-full">
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
                  src={PROCESS_IMAGES[0]}
                  alt=""
                  className="transition-all duration-300 w-64 h-80 md:w-80 md:h-96 align-bottom object-cover"
                  loading="lazy"
                />
              </div>
            </figure>
            <figure className="grid place-content-center">
              <div className="skew-x-12">
                <img
                  src={PROCESS_IMAGES[1]}
                  alt=""
                  className="transition-all duration-300 w-64 h-80 md:w-80 md:h-96 align-bottom object-cover"
                  loading="lazy"
                />
              </div>
            </figure>
            <figure className="grid place-content-center">
              <div className="-skew-x-12">
                <img
                  src={PROCESS_IMAGES[2]}
                  alt=""
                  className="transition-all duration-300 w-64 h-80 md:w-80 md:h-96 align-bottom object-cover"
                  loading="lazy"
                />
              </div>
            </figure>
            <figure className="grid place-content-center">
              <div className="skew-x-12">
                <img
                  src={PROCESS_IMAGES[3]}
                  alt=""
                  className="transition-all duration-300 w-64 h-80 md:w-80 md:h-96 align-bottom object-cover"
                  loading="lazy"
                />
              </div>
            </figure>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-8">
          <div className="grid gap-2 order-1 md:order-none">
            {PLAN_IMAGES.map((src, index) => (
              <figure key={index} className="sticky top-0 h-screen grid place-content-center">
                <img
                  src={src}
                  alt=""
                  className="transition-all duration-300 w-72 h-72 md:w-96 md:h-96 align-bottom object-cover rounded-md"
                  loading="lazy"
                />
              </figure>
            ))}
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

      <footer className="group">
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
