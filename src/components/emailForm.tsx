"use client";

import { useForm, SubmitHandler, set } from "react-hook-form";
import { useState } from "react";
import { motion } from "framer-motion";
import { addEmail } from "@/actions/email";
import { toast } from "sonner";

type Inputs = {
  mail: string;
};
const EmailForm = () => {
  const [disabled, setDisabled] = useState(false);
  const [email, setEmail] = useState<string>("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    //console.log(data);
    setDisabled(true);
    try {
      const res = await addEmail(data.mail);
      //console.log("Email added:", res);
      toast.success("Thank you for joining the waitlist!");
      setDisabled(false);
      setEmail("");
    } catch (error) {
      console.error("Error adding email:", error);
      toast.error("We couldn't add your email. Please try again.");
      setDisabled(false);
    }
  };

  return (
    <div className="h-20 flex flex-col justify-start mt-2 3xl:mt-6 gap-2">
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-3  ">
        <input
          {...register("mail", {
            required: "Email Address is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address",
            },
          })}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          aria-invalid={errors.mail ? "true" : "false"}
          placeholder="name@email.com"
          className="px-4 py-2 w-80 rounded-lg border bg-[#f1f1f1] border-[#f1f1f1]"
        />
        <motion.button
          whileTap={{ scale: 0.98 }}
          disabled={disabled}
          className="bg-stone-900 text-white px-6 w-44 py-2 rounded-lg font-semibold hover:bg-stone-800 transition-colors duration-300 ease-in-out disabled:bg-stone-700 disabled:cursor-not-allowed disabled:hover:bg-stone-700 "
        >
          {disabled ? "Sending ..." : "Join the Waitlist"}
        </motion.button>
      </form>

      {errors.mail ? (
        <p role="alert" className="text-sm text-red-500 font-semibold">
          {errors.mail.message}
        </p>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default EmailForm;
