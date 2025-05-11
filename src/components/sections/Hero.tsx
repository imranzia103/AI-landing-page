import { Container } from "../shared/Container";

export const Hero = () => {
  return (
    <section className="relative pt-32 lg:pt-36">
      {""}
      <Container className="flex flex-col lg:flex-row  gap-10 lg:gap-12">
        <div className=" absolute w-full lg:w-1/2 inset-y-2 lg:right-0">
          <span
            className="absoulte -left-6 md:left-4 top-28 w-24 h-24 rotate-90 skew-x-12
                        rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600
                        blur-xl-3 opacity-60 lg:opacity-95 lg:block hidden"
          ></span>

          <span className=" absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80 "></span>
        </div>
        <div
          className="relative flex flex-col items-center text-center lg:text-left lg:py-8 lg:items-start
        lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
        >
          <h1 className="text-heading-1 text-3xl sm:text-4xl  lg:text-5xl font-bold text-gray-900">
            Empower your Business{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              With A I{" "}
            </span>
          </h1>

          <p className="mt-8">
            Our AI solutions are designed to help you streamline your
            operations, enhance customer experiences, and drive growth. Whether
            you're looking to automate processes, gain insights from data, or
            improve decision-making, we have the expertise and tools to help you
            succeed.
          </p>


<div className="mt-10 w-full flex max-w-md mx-auto lg:mx-0 ">
<div className="flex sm:flex-row flex-col gap-4 w-full">


<form action="#" className=" py-1 pl-6 w-full pr-1 flex gap-3 items-center text-heading-3
shadow-lg shadow-box-shadow border border-box-border
bg-box-bg rounded-full ease-linear focus-within:bg-body
 focus-within:border-primary">
  <span className=" min-w-max pr-2 border-r border-box-border py-2 ml-5">


    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M11.742 2.343a7.5 7.5 0 1 1-9.9 9.9A7.5 7.5 0 0 1 11.742 2.343zm-.707 8.536a4.5 4.5 0 1 0-6.364-6.364A4.5 4.5 0 0 0 11.035 10.88z"
        clipRule="evenodd"
      />
    </svg>

</span>
    

<input type="email" placeholder=" imranzia103@gmail.com" 
className="w-full py-3 outline-none bg-transparent"/>

</form>




</div>

</div>


        </div>
      </Container>
    </section>
  );
};
