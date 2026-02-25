import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function CarScroll() {

  const section = useRef(null)
  const car = useRef(null)
  const textWrapper = useRef(null)

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: "top top",
          end: "+=1000",
          scrub: true,
          pin: true,
        }
      })

      // Car move
      tl.to(car.current, {
        x: window.innerWidth - 250,
        ease: "none"
      }, 0)

      // Text reveal (width grow)
      tl.to(textWrapper.current, {
        width: "90%",
        ease: "none"
      }, 0)

    }, section)

    return () => ctx.revert()

  }, [])

  return (
    <div className="h-[200vh] bg-black">

      <section
        ref={section}
        className="h-screen relative flex items-center justify-center overflow-hidden"
      >

        {/* Car */}
        <img
          ref={car}
          src="https://png.pngtree.com/png-clipart/20230408/ourmid/pngtree-car-top-view-white-png-image_6679290.png"
          className="w-80 absolute left-10 top-1/2 -translate-y-1/2 z-20"
          alt="car"
        />

        {/* Text Reveal Wrapper */}
        <div
          ref={textWrapper}
          className="overflow-hidden whitespace-nowrap"
          style={{ width: "0%" }}
        >
          <h1 className="text-white p-8 text-6xl font-bold bg-green-500">
            WELCOME ITZFIZZ
          </h1>
        </div>

      </section>

    </div>
  )
}