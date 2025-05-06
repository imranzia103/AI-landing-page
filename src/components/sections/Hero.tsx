import { Container } from "../shared/Container";

export const Hero = () => {
  return (
    <section className="relative pt-32 lg:pt-36">
      {""}
      <Container className="flex flex-col lg:flex-row  gap-10 lg:gap-12">
        <div className=" absolute w-full lg:w-1/2 inset-y-2 lg:right-0">
        <span className="absoulte -left-6 md:left-4 top-28 w-24 h-24 rotate-90 skew-x-12
                        rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600
                        blur-xl-3 opacity-60 lg:opacity-95 lg:block hidden">

        </span>

        <span className=" absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80 "></span>

        <div className="relative flex flex-col items-center text-center lg:text-left lg:p-8 lg:items-start
        lg:max-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"></div>
<h1 className="text-heading-1 ">
    Empower  your Business {" "}

<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
    With   A I {" "}




</span>



</h1>


            
        </div>
      </Container>
    </section>
  );
};
