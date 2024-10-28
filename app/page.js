export default function Home() {
  return (
    <div>
      <div className="flex flex-row w-full  justify-center items-center mt-14">
        <div className="flex flex-col w-2/4 gap-y-5">
          <h1 className="text-white font-mono text-3xl">Anas Alhawi</h1>
          <h2 className="text-white font-mono text-2xl">
            Full Stack Developer
          </h2>
          <p className="text-white font-mono text-xl">
            Motivated Junior Web Developer with a strong foundation in web
            technologies. Committed to creating dynamic and user-friendly
            websites through continuous learning and creativity. Problem-solving
            and Troubleshooting. Enjoy helping people. solution focus
          </p>
          <div>
            <div className="rounded-lg bg-blue-950   p-3 w-48">
              <a
                href="/AnasHawi.pdf"
                download="AnasHawi.pdf"
                className="text-white font-mono text-xl  rounded-md"
              >
                Download My CV
              </a>
            </div>
            <div className="flex flex-col mt-10">
              <p className="text-white font-mono text-2xl">My Skills</p>
              <div className="flex flex-row gap-10 mt-5">
                <img src="\css.png" alt="Css" className="h-12 rounded-lg" />
                <img src="\html.png" alt="Html" className="h-12 rounded-lg" />
                <img
                  src="\javascript.png"
                  alt="Javascript"
                  className="h-12 rounded-lg"
                />
                <img
                  src="\angular.png"
                  alt="Angular.ts"
                  className="h-12 rounded-lg"
                />
                <img
                  src="\react.png"
                  alt="React.js"
                  className="h-12 rounded-lg"
                />
                <img
                  src="\next.png"
                  alt="Next.js"
                  className="h-12 rounded-lg"
                />
                <img src="\node.png" alt="Node" className="h-12 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex  ">
          <img src="\Anas.picture.png" className="w-60 h-96"></img>
        </div>
      </div>
    </div>
  );
}
