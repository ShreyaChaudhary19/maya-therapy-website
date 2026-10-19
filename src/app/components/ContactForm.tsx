
"use client";

export default function ContactForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    alert(
      "Thank you for your interest. This demonstration form is not connected to a submission service yet."
    );

    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="fullName"
          className="mb-2 block text-sm text-[#29372F]"
        >
          Full name *
        </label>
        <input
          id="fullName"
          name="fullName"
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
          name="email"
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
          name="therapyType"
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
          name="message"
          rows={5}
          placeholder="Please avoid sharing sensitive personal or medical details."
          className="w-full resize-y border border-[#BFC4B8] bg-white/60 px-4 py-3 outline-none transition placeholder:text-[#858A80] focus:border-[#42594A] focus:ring-1 focus:ring-[#42594A]"
        />
      </div>

      <p className="text-xs leading-5 text-[#6D796B]">
        This demonstration form does not send or store your information.
        Please do not enter sensitive health information.
      </p>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center bg-[#42594A] px-7 py-4 text-sm tracking-[0.15em] text-white transition hover:bg-[#314438] sm:w-auto"
      >
        SEND INQUIRY →
      </button>
    </form>
  );
}
