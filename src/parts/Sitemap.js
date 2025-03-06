import React from "react";

import { Link } from "react-router-dom";

function SitemapLinks({ isActive, setActive, children, title }) {
  return (
    <div className="px-4 w-full md:w-2/12 mb-4 md:mb-0 accordion">
      <h5 className="text-lg font-light font-playfair mb-2 relative">
        {title}
        <button
          onClick={() => setActive(isActive)}
          className={[
            "absolute block md:hidden right-0 transform -translate-y-1/2 focus:outline-none transition duration-200 top-1/2",
            isActive ? "rotate-0" : "rotate-180",
          ].join(" ")}
        >
          <svg
            width="20"
            height="9"
            viewBox="0 0 20 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.197257 0.403676C0.526597 -0.0396672 1.15298 -0.132085 1.59632 0.197256L9.75 6.25427L17.9037 0.197256C18.347 -0.132085 18.9734 -0.0396672 19.3027 0.403676C19.6321 0.847019 19.5397 1.4734 19.0963 1.80274L10.3463 8.30274C9.99227 8.56575 9.50773 8.56575 9.15368 8.30274L0.403676 1.80274C-0.0396667 1.4734 -0.132084 0.847019 0.197257 0.403676Z"
              fill="black"
            />
          </svg>
        </button>
      </h5>
      <ul
        className={[
          "md:h-auto md:visible md:opacity-100 overflow-hidden transition duration-200",
          isActive ? "h-0 invisible opacity-0" : "opacity-100",
        ].join(" ")}
      >
        {children}
      </ul>
    </div>
  );
}

export default function Sitemap() {
  const [active, setActive] = React.useState(null);
  return (
    <section className="sitemap">
      <div className="border-b border-gray-200 py-12 mt-16 px-4">
        <aside className="container mx-auto">
          <div className="flex flex-wrap -mx-4 justify-start">
            <div className="max-w-80 text-center mr-28">
              <img
                src="/images/content/logo.png"
                alt="Perfume"
                width={168}
                className="mb-11 mx-auto"
              />
              <p className="font-light text-sm text-gray-700 mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo in vestibulum, sed dapibus tristique nullam.</p>
              <div className="flex gap-5 justify-center">
                <img src="/images/content/facebook.png" alt="" />
                <img src="/images/content/twitter.png" alt="" />
                <img src="/images/content/instagram.png" alt="" />
              </div>
            </div>
            <SitemapLinks
              setActive={setActive}
              isActive={active === 1 ? null : 1}
              title="Layanan"
            >
              <li>
                <Link to="/" className="hover:underline py-2 block tracking-widest">
                  BANTUAN
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline py-2 block tracking-widest">
                  TANYA JAWAB
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline py-2 block tracking-widest">
                  HUBUNGI KAMI
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline py-2 block tracking-widest">
                  CARA BERJUALAN
                </Link>
              </li>
            </SitemapLinks>
            <SitemapLinks
              setActive={setActive}
              isActive={active === 2 ? null : 2}
              title="Tentang Kami"
            >
              <li>
                <Link to="/" className="hover:underline py-2 block tracking-widest">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline py-2 block tracking-widest">
                  KARIR
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline py-2 block tracking-widest">
                  BLOG
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline py-2 block tracking-widest">
                  KEBIJAKAN PRIVASI
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline py-2 block tracking-widest">
                  SYARAT DAN KETENTUAN
                </Link>
              </li>
            </SitemapLinks>
            <SitemapLinks
              setActive={setActive}
              isActive={active === 3 ? null : 3}
              title="Mitra"
            >
              <li>
                <Link to="/" className="hover:underline py-2 block tracking-widest">
                  SUPPLIER
                </Link>
              </li>
            </SitemapLinks>
          </div>
        </aside>
      </div>
    </section>
  );
}
