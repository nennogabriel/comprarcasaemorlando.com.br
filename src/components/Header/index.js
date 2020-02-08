import React from "react"

import { phone } from "content/general/info"
import siteMetadata from "content/settings/siteMetadata.json"

import SmartLink from "~/components/SmartLink"

import Navbar from "./Navbar"

export default function Header() {
  return (
    <section id="page-header" className="container">
      <div className="hidden md:block w-full">
        <div className="bg-brand-1-0 h-8" />
        <div className="bg-custom-1-3 p-8 flex justify-center lg:justify-between">
          <div>
            <img src={siteMetadata.logo} alt="talent logo" />
          </div>
          <div className="flex flex-col text-white hidden lg:block">
            <div className="flex items-end">
              <div className="mr-4">
                <img src="/img/icon-whats.png" alt="whatsapp-icon" />
              </div>
              <SmartLink
                to={`https://api.whatsapp.com/send?phone=${phone.number}&text=${phone.message}`}
              >
                <span>WhatsApp</span>
                <span className="text-3xl block font-bold leading-none hover:text-brand-1-1">
                  <strong>+1 407 624 9270</strong>
                </span>
              </SmartLink>
            </div>
            <div className="flex items-end mt-2">
              <div className="mr-4 mb-1">
                <img src="/img/icon-phone.png" alt="phone-icon" />
              </div>
              <div>
                <span className="">Central de Atendimento</span>
                <span className="text-3xl block font-bold leading-none">
                  <strong>Brasil (11) 2391 1424</strong>
                </span>
                <span className="text-3xl block font-bold leading-none">
                  <strong>USA +1 407 801 0070</strong>
                </span>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <a
              href="https://www.youtube.com/watch?v=mBBLOhEqnp0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/como-financiar-casa-nos-eua.jpg"
                alt="Como financiar uma casa em Orlando"
              />
            </a>
          </div>
        </div>
      </div>
      <Navbar />
    </section>
  )
}
