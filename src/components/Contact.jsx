import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const inputStyle =
    "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-white";

  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          Contact{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Me
          </span>
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Have a project in mind? Send me a message.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-800/50"
      >
        <div>
          <input
            type="text"
            placeholder="Your name"
            className={inputStyle}
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="Your email"
            className={inputStyle}
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <textarea
            rows="5"
            placeholder="Your message"
            className={inputStyle}
            {...register("message")}
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-medium text-white transition hover:opacity-90"
        >
          Send Message
        </button>

        {isSubmitSuccessful && (
          <p className="text-center text-sm text-green-500">
            Message sent successfully!
          </p>
        )}
      </form>
    </section>
  );
}