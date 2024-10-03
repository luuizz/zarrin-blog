import React from 'react'
import Container from '../Container/container'

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-brand py-36 before:absolute before:-left-[84px] before:-top-44 before:h-[378px] before:w-[685px] before:bg-element-hero after:absolute after:-bottom-[138px] after:-right-[373px] after:h-[378px] after:w-[685px] after:bg-element-hero">
      <Container className="flex flex-col items-center justify-center">
        <h2 className="mb-9 w-[827px] text-center font-manrope text-[52px] font-bold leading-[48px] text-white">
          Get our stories delivered From us to your inbox weekly.
        </h2>
        <div className="mb-9 w-full max-w-[594px]">
          <form action="" className="flex items-center gap-2">
            <div className="w-full max-w-[320px]">
              <input
                className="block w-full rounded-lg px-6 py-5 font-inter text-base text-[#5A7184] ring-1 ring-inset ring-gray-300 transition-all placeholder:opacity-75 focus-within:outline-none focus:ring-2 focus:ring-inset focus:ring-brand"
                type="email"
                placeholder="Your email"
              />
            </div>

            <div className="w-full max-w-[166px]">
              <button
                type="button"
                className="h-16 rounded-lg border border-white px-8 py-[15px] font-manrope text-lg font-bold text-white transition-all hover:bg-white hover:text-brand"
              >
                Get started
              </button>
            </div>
          </form>
        </div>

        <p className="w-[555px] text-center font-inter text-base font-normal leading-normal text-white text-opacity-75">
          Get a response tomorrow if you submit by 9pm today. If we received
          after 9pm will get a reponse the following day.
        </p>
      </Container>
    </section>
  )
}
