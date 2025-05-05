import { Container } from "../shared/Container";
import { BtnLink } from "../shared/BtnLink";
import { NavItems } from "../shared/NavItems";



const navItems = [
  {
    href: "#",
    text: "Home",
  },
  { href: "# about-us", text: "About" },
  { href: "#services", text: "Services" },
  { href: "#features", text: "Features" },
];

export const Navbar = () => {
  return (
    <header className=" absolute inset-x-0 top-0 p-y-6 z-50">
      <Container>
        <nav className="flex items-center justify-between gap-6 relative">
          <div className=" min-w-max inline-flex relative">
            <a href="/" className="flex items-center relative gap-3">
              <img
                src="../src/assets/icon.svg"
                alt="EadgeAI logo"
                className="w-10 h-10"
              />
              <div className="inline-flex flex-col gap-1 text-lg font-semibold text-heading-1">
                EadgeAI
              </div>
            </a>
          </div>

          <div
            className=" flex flex-col lg:flex-row w-full lg:justify-between lg:items-center
          absolute top-full left-0 lg:static lg:top-0  bg-body lg:bg-transparent 
          border-x border-x-box-border lg:border-x-0 lg:h-auto"
          >
            <ul
              className=" border-t border-box-border lg:border-t-0 px-6 lg:px-0
            pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gapx-x-3 
            text-lg text-heading-2 w-full lg:justify-center lg:items-center "
            >
              {navItems.map((item, key) => (
                <NavItems href={item.href} text={item.text} key={key} />
              ))}
            </ul>

            <div
              className="lg:min-w-max flex items-center sm:w-max w-full pb-6
            lg:pb-0 border-b border-box-border lg:border-0 px-6 lg:px-0"
            >
              <BtnLink
                text="Get Started"
                href="#cta"
                className=""
              />
            </div>
<div className=" min-w-max flex items-center gap-x-3">

<button className=" outline-hidden flex relative text-heading-2 rounded-full p-2
lg:p-3 border border-box-border cursor-pointer">



<svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>




               

</button>



</div>





          </div>
        </nav>
      </Container>
    </header>
  );
};
