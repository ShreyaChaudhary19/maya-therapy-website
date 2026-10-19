"use client";
const services = [
  {
    number: "01",
    title: "Anxiety & Overthinking",
    description:
      "Find practical ways to work with persistent worry, panic, and the pressure to always be okay.",
  },
  {
    number: "02",
    title: "Trauma & Healing",
    description:
      "Explore difficult past experiences at a pace that prioritizes safety, stability, and trust.",
  },
  {
    number: "03",
    title: "Burnout & Perfectionism",
    description:
      "Create healthier boundaries and reconnect with yourself beyond constant expectations.",
  },
];
import MobileMenu from "./components/MobileMenu";
import ContactForm from "./components/ContactForm";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F0E8] text-[#29372F]">
      <header className="sticky top-0 z-50 flex items-center justify-between gap-4 bg-[#F5F0E8]/95 px-5 py-5 backdrop-blur-sm md:px-14">
        <a href="#" className="leading-tight">
          <span className="block font-serif text-2xl md:text-3xl">
            Maya Reynolds
          </span>
          <span className="mt-1 block text-[10px] tracking-[0.3em]">
            PSYD · PSYCHOLOGY
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-xs tracking-[0.15em] md:flex">
          <a href="#about">ABOUT</a>
          <a href="#services">SPECIALTIES</a>
          <a href="#approach">APPROACH</a>
          <a href="#faqs" className="transition hover:text-[#B97960]"> FAQS </a>
          <a href="#contact">CONTACT</a>
        </nav>
        <MobileMenu />
        <a
          href="#contact"
          className="hidden w-fit items-center border border-[#42594A] px-6 py-3 text-sm uppercase tracking-widest text-[#42594A] transition-colors hover:bg-[#42594A] hover:text-white md:inline-flex"
        >
          Get in touch →
        </a>

      </header>

      <section className="grid min-h-[650px] md:grid-cols-2">
        <div className="flex flex-col justify-center px-7 py-16 md:px-14 lg:px-20">
          <p className="mb-8 text-xs uppercase tracking-[0.22em] text-[#6D796B]">
            Therapy for adults · Santa Monica, California
          </p>

          <h1 className="font-serif text-5xl leading-[1.12] md:text-6xl lg:text-7xl">
            A space to feel
            <span className="block italic text-[#B97860]">
              more like you.
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-[#5C625B]">
            You don’t have to keep pushing through anxiety, burnout, or the
            weight of past experiences alone. Let’s find a more grounded way
            forward, together.
          </p>

          <div className="mt-9">
            <a
              href="#contact"
              className="inline-block bg-[#42594A] px-7 py-4 text-xs tracking-[0.15em] text-white transition hover:bg-[#314438]"
            >
              EXPLORE THERAPY →
            </a>
          </div>

          <p className="mt-5 text-xs leading-6 text-[#73786F]">
            In-person sessions in Santa Monica · Telehealth across California
          </p>
        </div>

        <div className="relative min-h-[400px] bg-[#DDE1D5]">
          <img
           src="/images/office-1.jpg"
            alt="A softly lit, calm and neutral interior"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#42594A]/10" />
          <p className="absolute bottom-6 left-6 bg-[#F5F0E8]/90 px-5 py-4 font-serif text-lg italic md:bottom-10 md:left-10">
            A little room to breathe.
          </p>
        </div>
      </section>
      <section
        id="about"
        className="scroll-mt-20 bg-[#F5F0E8] px-6 py-16 sm:px-10 md:px-14 md:py-24 lg:px-20"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-12 lg:gap-16">
          {/* Therapist portrait */}
          <div className="mx-auto w-full max-w-sm md:max-w-none">
            <div className="overflow-hidden">
              <img
                src="/images/maya-reynolds.jpg"
                alt="Therapist portrait"
                className="block aspect-[4/5] w-full object-cover object-top"
              />
            </div>
            <p className="mt-4 text-center text-xs tracking-[0.16em] text-[#6D796B] md:text-left">
              DR. MAYA REYNOLDS, PSYD · SANTA MONICA, CA
            </p>
          </div>
          {/* About text */}
          <div className="mx-auto w-full max-w-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[#6D796B]">
              Meet your therapist
            </p>
            <h2 className="mt-4 text-4xl leading-tight text-[#29372F] sm:text-5xl lg:text-6xl">
              You deserve to feel understood.
            </h2>
            <p className="mt-6 text-base leading-7 text-[#5C625B] sm:leading-8">
              I’m Dr. Maya Reynolds, a licensed clinical psychologist based in
              Santa Monica, California. I work with adults navigating anxiety,
              panic, trauma, professional burnout, and perfectionism.
            </p>
            <p className="mt-4 text-base leading-7 text-[#5C625B] sm:leading-8">
              My approach is warm, collaborative, and grounded. I combine
              practical, evidence-based tools with space for reflection, helping
              you explore both the emotional and physical sides of what you’re
              experiencing.
            </p>
            <p className="mt-4 text-base leading-7 text-[#5C625B] sm:leading-8">
              Therapy is a process we navigate together, at a pace that respects
              your needs and emphasizes safety, understanding, and lasting
              personal growth.
            </p>
            <a
              href="#approach"
              className="mt-7 inline-block border-b border-[#42594A] pb-2 text-xs tracking-widest text-[#42594A] transition-colors hover:text-[#B97860]"
            >
              EXPLORE MY APPROACH →
            </a>
          </div>
        </div>
      </section>
      <section
        id="services"
        className="bg-[#E7E8DE] px-7 py-24 md:px-14 lg:px-24"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#6D796B]">
            Areas of support
          </p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-[#29372F] md:text-5xl">
            Therapy for what you're carrying.
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-[#5C625B]">
            You don't have to navigate anxiety, past experiences, or
            constant pressure alone. Explore a supportive approach
            tailored to your needs and pace.
          </p>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            <article className="border-t border-[#BCC4B6] pt-6">
              <p className="text-xs tracking-widest text-[#8A9586]">01</p>
              <h3 className="mt-5 font-serif text-2xl text-[#29372F]">
                Anxiety Therapy in Santa Monica
              </h3>
              <p className="mt-4 leading-7 text-[#5C625B]">
                If worry, overthinking, or constant tension leave you
                feeling exhausted, therapy can help you understand
                your patterns and develop practical ways to feel more
                grounded in daily life.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-block border-b border-[#42594A] pb-2 text-xs tracking-widest text-[#42594A]"
              >
                LEARN MORE →
              </a>
            </article>
            <article className="border-t border-[#BCC4B6] pt-6">
              <p className="text-xs tracking-widest text-[#8A9586]">02</p>
              <h3 className="mt-5 font-serif text-2xl text-[#29372F]">
                Trauma-Informed Therapy in Santa Monica
              </h3>
              <p className="mt-4 leading-7 text-[#5C625B]">
                Past experiences can continue to affect your sense
                of safety and relationships. Trauma therapy uses a
                careful, collaborative pace with attention to
                stabilization, regulation, and emotional safety.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-block border-b border-[#42594A] pb-2 text-xs tracking-widest text-[#42594A]"
              >
                LEARN MORE →
              </a>
            </article>
            <article className="border-t border-[#BCC4B6] pt-6">
              <p className="text-xs tracking-widest text-[#8A9586]">03</p>
              <h3 className="mt-5 font-serif text-2xl text-[#29372F]">
                Burnout and Perfectionism Support
              </h3>
              <p className="mt-4 leading-7 text-[#5C625B]">
                For adults who feel caught in high expectations or
                constant pressure, therapy offers space to reconnect
                with yourself, explore healthier patterns, and build
                more sustainable ways of living and working.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-block border-b border-[#42594A] pb-2 text-xs tracking-widest text-[#42594A]"
              >
                LEARN MORE →
              </a>
            </article>
          </div>
        </div>
      </section>

      <section id="approach" className="px-7 py-24 md:px-14 lg:px-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#6D796B]">
            How we work together
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
            Support that meets you where you are.
          </h2>
          <p className="mt-7 leading-8 text-[#5C625B]">
            Therapy can include cognitive-behavioral therapy (CBT), EMDR,
            mindfulness-based practices, and body-oriented techniques.
            We’ll work collaboratively, with attention to your needs, your
            pace, and what feels supportive to you.
          </p>
        </div>
      </section>
      <section
        id="contact"
        className="scroll-mt-20 bg-[#F5F0E8] px-6 py-20 sm:px-10 md:px-14 md:py-28 lg:px-20"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left: Contact information */}
          <div className="flex flex-col">
            <p className="text-xs uppercase tracking-[0.22em] text-[#6D796B]">
              LET'S CONNECT
            </p>
            <h2 className="mt-5 text-5xl leading-tight text-[#29372F] sm:text-6xl">
              Get in touch.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-[#5C625B]">
              Taking the first step can feel daunting. If you are navigating
              anxiety, trauma, burnout, or simply looking for a space to
              understand yourself better, you are welcome to reach out.
            </p>
            <p className="mt-4 max-w-lg text-base leading-8 text-[#5C625B]">
              Share a little about what you are looking for, and explore
              whether this approach to therapy may be a good fit.
            </p>
            <div className="mt-10 border-t border-[#D8D9CF] pt-7">
              <h3 className="text-2xl text-[#29372F]">
                Visit the office
              </h3>
              <p className="mt-4 leading-7 text-[#5C625B]">
                123th Street 45 W
                <br />
                Santa Monica, CA 90401
              </p>
              <p className="mt-4 text-sm leading-6 text-[#5C625B]">
                In-person therapy in Santa Monica
                <br />
                Secure telehealth for clients in California
              </p>
            </div>
          </div>
          {/* Right: Contact form */}
          <form
            className="space-y-6"
            onSubmit={(event) => {
              event.preventDefault();
              alert(
                "Thank you for your interest. This demonstration form is not connected to a submission service yet."
              );
            }}
          >
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm text-[#29372F]"
              >
                Full name *
              </label>
              <input
                id="fullName"
                name="Full name"
                type="text"
                autoComplete="name"
                required
                className="w-full border border-[#BFC4B8] bg-white/60 px-4 py-3 outline-none transition focus:border-[#42594A] focus:ring-1 focus:ring-[#42594A]"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm text-[#29372F]"
              >
                Email address *
              </label>
              <input
                id="email"
                name="Email"
                type="email"
                autoComplete="email"
                required
                className="w-full border border-[#BFC4B8] bg-white/60 px-4 py-3 outline-none transition focus:border-[#42594A] focus:ring-1 focus:ring-[#42594A]"
              />
            </div>
            <div>
              <label
                htmlFor="therapyType"
                className="mb-2 block text-sm text-[#29372F]"
              >
                Preferred session format *
              </label>
              <select
                id="therapyType"
                name="Preferred session format"
                required
                defaultValue=""
                className="w-full border border-[#BFC4B8] bg-white/60 px-4 py-3 outline-none focus:border-[#42594A]"
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="In-person">In-person therapy</option>
                <option value="Telehealth">Online therapy</option>
                <option value="Either">Either option</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm text-[#29372F]"
              >
                What would you like support with?
              </label>
              <textarea
                id="message"
                name="Message"
                rows={5}
                placeholder="Please avoid sharing sensitive personal or medical details."
                className="w-full resize-y border border-[#BFC4B8] bg-white/60 px-4 py-3 outline-none transition placeholder:text-[#858A80] focus:border-[#42594A] focus:ring-1 focus:ring-[#42594A]"
              />
            </div>
            <p className="text-xs leading-5 text-[#6D796B]">
              This demonstration form is not a secure channel for sensitive
              health information.
            </p>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center bg-[#42594A] px-7 py-4 text-sm tracking-[0.15em] text-white transition hover:bg-[#314438] sm:w-auto"
            >
              SEND INQUIRY →
            </button>
          </form>
        </div>
      </section>

      {/* OUR OFFICE SECTION */}
      <section
        id="office"
        className="bg-[#E7E8DE] px-6 py-20 md:px-14 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#42594A]">
              A space to slow down
            </p>
            <h2 className="mb-6 text-4xl leading-tight text-[#29372F] md:text-6xl">
              Our Office
            </h2>
            <p className="text-base leading-8 text-[#5C625B] md:text-lg">
              A calm, private space where you can pause, feel heard, and
              focus on yourself. Dr. Maya Reynolds offers in-person therapy
              in Santa Monica, alongside secure telehealth sessions for
              clients throughout California.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden">
              <img
                src="/images/office-1.jpg"
                alt="Comfortable therapy office with natural light and seating"
                className="h-[320px] w-full object-cover transition-transform duration-500 hover:scale-[1.02] md:h-[440px]"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src="/images/office-2.jpg"
                alt="Quiet counseling room with a sofa, bookshelves, and plants"
                className="h-[320px] w-full object-cover transition-transform duration-500 hover:scale-[1.02] md:h-[440px]"
              />
            </div>
          </div>
          
          <div className="mt-10 flex flex-col gap-5 border-t border-[#42594A]/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl text-[#29372F]">
                Your space to feel understood.
              </h3>
              <p className="mt-2 text-sm leading-7 text-[#5C625B]">
                Santa Monica, California · In-person and online therapy
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex w-fit items-center border border-[#42594A] px-6 py-3 text-sm uppercase tracking-widest text-[#42594A] transition-colors hover:bg-[#42594A] hover:text-white"
            >
              Get in touch →
            </a>

          </div>
        </div>
      </section>
      <section
        id="faqs"
        className="bg-[#F5F0E8] px-7 py-24 md:px-14 lg:px-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#6D796B]">
              A few things to know
            </p>
            <h2 className="mt-5 max-w-lg font-serif text-4xl leading-tight text-[#29372F] md:text-5xl">
              Questions about starting therapy?
            </h2>
            <p className="mt-6 max-w-md leading-8 text-[#5C625B]">
              Taking the first step can bring up questions. Here is
              some information about Dr. Maya Reynolds's approach
              and the ways she offers therapy.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-block border-b border-[#42594A] pb-2 text-xs tracking-widest text-[#42594A]"
            >
              GET IN TOUCH →
            </a>
          </div>
          <div className="divide-y divide-[#D8D9CE]">
            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl text-[#29372F]">
                What concerns does Dr. Maya work with?
                <span className="text-2xl text-[#6D796B] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 leading-7 text-[#5C625B]">
                Her work focuses on anxiety, panic, trauma, professional
                burnout, and perfectionism. She supports adults who may
                feel overwhelmed, stuck in overthinking, or affected by
                past experiences.
              </p>
            </details>
            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl text-[#29372F]">
                What therapy approaches does she use?
              <span className="text-2xl text-[#6D796B] transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 leading-7 text-[#5C625B]">
              Dr. Maya integrates cognitive-behavioral therapy (CBT),
              EMDR, mindfulness-based practices, and body-oriented
              techniques. Her approach is warm, collaborative, and
              adapted to each client's needs and pace.
            </p>
          </details>
          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl text-[#29372F]">
              Is in person therapy available?
              <span className="text-2xl text-[#6D796B] transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 leading-7 text-[#5C625B]">
              Yes. Dr. Maya offers in-person therapy at her Santa
              Monica office, a quiet and private space designed to
              feel calm and grounding.
            </p>
          </details>
          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl text-[#29372F]">
              Are online sessions available?
              <span className="text-2xl text-[#6D796B] transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 leading-7 text-[#5C625B]">
              Yes. Secure telehealth sessions are available for
              clients located in California.
            </p>
          </details>
          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl text-[#29372F]">
              What is Dr. Maya's approach to trauma therapy?
              <span className="text-2xl text-[#6D796B] transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 leading-7 text-[#5C625B]">
              Trauma work is paced carefully, with an emphasis on
              safety, stabilization, and helping clients feel more
              regulated in everyday life. Clients are treated with
              respect and actively involved in the process.
            </p>
          </details>
        </div>
      </div>
    </section>
   <footer className="bg-white px-6 py-14 text-[#29372F] sm:px-10 md:px-14 md:py-20 lg:px-20">
     <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
       {/* Practice branding */}
       <div className="lg:col-span-1">
         <a href="#" className="inline-block">
           <span className="block font-serif text-3xl">
             Maya Reynolds
           </span>
           <span className="mt-1 block text-xs tracking-[0.25em] text-[#6D796B]">
             PSYD · PSYCHOLOGY
           </span>
         </a>
         <p className="mt-6 max-w-xs text-sm leading-7 text-[#5C625B]">
           A thoughtful, collaborative space for adults navigating
           anxiety, trauma, burnout, and the pressures of everyday life.
         </p>
         <p className="mt-4 text-sm leading-6 text-[#5C625B]">
           In-person in Santa Monica
           <br />
           Telehealth across California
         </p>
       </div>
       {/* Navigation */}
       <div>
         <h3 className="text-xs tracking-[0.18em] text-[#6D796B]">
           EXPLORE
         </h3>
         <ul className="mt-5 space-y-3 text-sm">
           <li><a href="#about" className="transition hover:text-[#B97860]">About</a></li>
           <li><a href="#services" className="transition hover:text-[#B97860]">Specialties</a></li>
           <li><a href="#approach" className="transition hover:text-[#B97860]">Approach</a></li>
           <li><a href="#faqs" className="transition hover:text-[#B97860]">FAQs</a></li>
           <li><a href="#office" className="transition hover:text-[#B97860]">Our Office</a></li>
         </ul>
       </div>
       {/* Areas of support */}
       <div>
         <h3 className="text-xs tracking-[0.18em] text-[#6D796B]">
           AREAS OF SUPPORT
         </h3>
         <ul className="mt-5 space-y-3 text-sm leading-6 text-[#5C625B]">
           <li>Anxiety and overthinking</li>
           <li>Trauma and healing</li>
           <li>Burnout and perfectionism</li>
           <li>Stress and emotional well-being</li>
         </ul>
       </div>
       {/* Contact details */}
       <div>
         <h3 className="text-xs tracking-[0.18em] text-[#6D796B]">
           CONTACT
         </h3>
         <p className="mt-5 text-sm leading-7 text-[#5C625B]">
           123th Street 45 W
           <br />
           Santa Monica, CA 90401
         </p>
         <a
           href="#contact"
           className="mt-5 inline-block border-b border-[#42594A] pb-1 text-sm transition hover:text-[#B97860]"
         >
           Get in touch →
         </a>
       </div>
     </div>
     {/* Bottom bar */}
     <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#D8D9CF] pt-6 text-xs leading-5 text-[#6D796B] sm:flex-row sm:items-center sm:justify-between">
       <p>© 2026 Dr. Maya Reynolds, PsyD.</p>
       <a href="#contact" className="transition hover:text-[#B97860]">
         Contact the practice
       </a>
     </div>
    </footer>

    </main>
  );
}
