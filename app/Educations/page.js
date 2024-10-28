export default function Educations() {
  return (
    <div className="flex justify-center gap-24 mt-5  ">
      <div className="flex flex-col  gap-5 w-1/5">
        <img src="\albalqa.png" className="rounded-full"></img>
        <h1 className="text-white font-mono text-xl text-center">
          Al-Balqa Applied University
        </h1>
        <h2 className="text-white font-mono text-xl text-center">
          Agriculture Engineering
        </h2>
        <h3 className="text-white font-mono text-xl text-center">2012-2017</h3>
      </div>
      <div className="flex flex-col  w-1/5">
        <img src="\meraki.png" className="rounded-full"></img>
        <h1 className="text-white font-mono text-xl text-center">
          Meraki Academy
        </h1>
        <h2 className="text-white font-mono text-xl text-center">
          Full Stack Developer
        </h2>
        <h3 className="text-white font-mono text-xl text-center">2020</h3>
        <p className="text-white text-center h-10  ">
          22-week Immersive Full-Stack Web Development Bootcamp with over 700+
          hours of coding, building projects, and solving problems. Full- Stack
          software development with JavaScript, React, Redux, Express, Node.js,
          MongoDB, and MySQL in an agile environment.
        </p>
      </div>
    </div>
  );
}
