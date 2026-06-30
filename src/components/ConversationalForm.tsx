"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";

export function ConversationalForm() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const t = useTranslations("Form");

  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [step]);

  const handleNext = () => {
    if (step === 1 && name.trim() === "") {
      setError(t("err_name"));
      return;
    }
    if (step === 2 && interest.trim() === "") {
      setError(t("err_opt"));
      return;
    }
    if (step === 3 && message.trim() === "") {
      setError(t("err_msg"));
      return;
    }
    
    setError("");
    setStep(step + 1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (step < 4) {
        handleNext();
      } else if (step === 4) {
        handleSubmit(e);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email.trim() === "" || !email.includes("@")) {
      setError(t("err_email"));
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          interest: interest,
          message: message,
          email: email,
          phone: phone,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setStep(5);
      } else {
        // En caso de que falle por falta de contraseña SMTP, mostramos el error
        setError(result.message || t("err_server"));
      }
    } catch (err) {
      console.error(err);
      setError(t("err_internal"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white p-8 md:p-12 lg:p-16 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-[#EBE7DD]">
      <form onSubmit={handleSubmit} className="flex flex-col relative min-h-[500px] justify-center">
        
        {/* STEP 1: NAME */}
        <div className={`transition-all duration-700 absolute inset-0 flex flex-col justify-center ${step === 1 ? 'opacity-100 z-10 translate-y-0' : 'opacity-0 z-0 -translate-y-10 pointer-events-none'}`}>
          <label htmlFor="name" className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a281d] mb-8 leading-tight" dangerouslySetInnerHTML={{ __html: t("step1_title_html") }}>
          </label>
          <div className="flex flex-col md:flex-row items-end gap-4 relative">
            <input
              ref={step === 1 ? (inputRef as React.RefObject<HTMLInputElement>) : null}
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t("step1_placeholder")}
              className="w-full bg-transparent border-b-2 border-[#EBE7DD] focus:border-[#b4843b] py-4 text-xl md:text-2xl text-[#1a281d] outline-none transition-colors placeholder:text-[#4a4a4a]/30"
              autoComplete="name"
            />
            <button 
              type="button" 
              onClick={handleNext}
              className="w-full md:w-auto mt-4 md:mt-0 flex-shrink-0 bg-[#1a281d] hover:bg-[#b4843b] text-white px-8 py-4 rounded-full font-inter font-bold transition-colors flex items-center justify-center gap-2 group"
            >
              {t("next_btn")} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          {error && step === 1 && <p className="text-red-500 mt-4 text-sm font-medium animate-pulse">{error}</p>}
        </div>

        {/* STEP 2: INTEREST */}
        <div className={`transition-all duration-700 absolute inset-0 flex flex-col justify-center ${step === 2 ? 'opacity-100 z-10 translate-y-0' : step > 2 ? 'opacity-0 z-0 -translate-y-10 pointer-events-none' : 'opacity-0 z-0 translate-y-10 pointer-events-none'}`}>
          <label className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a281d] mb-4 leading-tight">
            {t("step2_title")}
          </label>
          <p className="text-lg text-[#4a4a4a] mb-8">{t("step2_desc")}</p>
          <div className="flex flex-col gap-3 relative">
            {[
              t("opt1"),
              t("opt2"),
              t("opt3"),
              t("opt4"),
              t("opt5")
            ].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  setInterest(option);
                  setError("");
                  setStep(3);
                }}
                className={`text-left px-6 py-4 rounded-xl border-2 transition-all duration-300 font-inter text-lg md:text-xl font-medium ${interest === option ? 'border-[#b4843b] bg-[#FDFBF7] text-[#1a281d]' : 'border-[#EBE7DD] bg-transparent text-[#4a4a4a] hover:border-[#1a281d] hover:text-[#1a281d]'}`}
              >
                {option}
              </button>
            ))}
          </div>
          {error && step === 2 && <p className="text-red-500 mt-4 text-sm font-medium animate-pulse">{error}</p>}
        </div>

        {/* STEP 3: MESSAGE */}
        <div className={`transition-all duration-700 absolute inset-0 flex flex-col justify-center ${step === 3 ? 'opacity-100 z-10 translate-y-0' : step > 3 ? 'opacity-0 z-0 -translate-y-10 pointer-events-none' : 'opacity-0 z-0 translate-y-10 pointer-events-none'}`}>
          <label htmlFor="message" className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a281d] mb-4 leading-tight">
            {t("step3_title")}
          </label>
          <p className="text-lg text-[#4a4a4a] mb-8">{t("step3_desc")}</p>
          <div className="flex flex-col gap-6 relative">
            <textarea
              ref={step === 3 ? (inputRef as React.RefObject<HTMLTextAreaElement>) : null}
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t("step3_placeholder")}
              rows={4}
              className="w-full bg-transparent border-b-2 border-[#EBE7DD] focus:border-[#b4843b] py-4 text-xl md:text-2xl text-[#1a281d] outline-none transition-colors placeholder:text-[#4a4a4a]/30 resize-none"
            />
            <div className="flex justify-end">
              <button 
                type="button" 
                onClick={handleNext}
                className="w-full md:w-auto flex-shrink-0 bg-[#1a281d] hover:bg-[#b4843b] text-white px-8 py-4 rounded-full font-inter font-bold transition-colors flex items-center justify-center gap-2 group"
              >
                {t("next_btn")} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          {error && step === 3 && <p className="text-red-500 mt-4 text-sm font-medium animate-pulse">{error}</p>}
        </div>

        {/* STEP 4: CONTACT INFO */}
        <div className={`transition-all duration-700 absolute inset-0 flex flex-col justify-center ${step === 4 ? 'opacity-100 z-10 translate-y-0' : step > 4 ? 'opacity-0 z-0 -translate-y-10 pointer-events-none' : 'opacity-0 z-0 translate-y-10 pointer-events-none'}`}>
          <label className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a281d] mb-4 leading-tight">
            {t("step4_title")}
          </label>
          <p className="text-lg text-[#4a4a4a] mb-8">{t("step4_desc")}</p>
          <div className="flex flex-col gap-6 relative">
            <input
              ref={step === 4 ? (inputRef as React.RefObject<HTMLInputElement>) : null}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t("email_placeholder")}
              className="w-full bg-transparent border-b-2 border-[#EBE7DD] focus:border-[#b4843b] py-3 text-lg md:text-xl text-[#1a281d] outline-none transition-colors placeholder:text-[#4a4a4a]/50"
              autoComplete="email"
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t("phone_placeholder")}
              className="w-full bg-transparent border-b-2 border-[#EBE7DD] focus:border-[#b4843b] py-3 text-lg md:text-xl text-[#1a281d] outline-none transition-colors placeholder:text-[#4a4a4a]/50"
              autoComplete="tel"
            />
            
            <p className="text-sm text-[#4a4a4a]/70 font-inter mt-2">
              {t("privacy_note")}
            </p>

            <div className="flex justify-end mt-4">
              <button 
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full md:w-auto flex-shrink-0 bg-[#b4843b] hover:bg-[#9a6f30] text-white px-10 py-4 rounded-full font-inter font-bold transition-colors flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    {t("submitting_btn")} <Loader2 size={20} className="animate-spin" />
                  </>
                ) : (
                  <>
                    {t("submit_btn")} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </div>
          {error && step === 4 && <p className="text-red-500 mt-4 text-sm font-medium animate-pulse">{error}</p>}
        </div>

        {/* STEP 5: SUCCESS */}
        <div className={`transition-all duration-700 absolute inset-0 flex flex-col items-center justify-center text-center ${step === 5 ? 'opacity-100 z-10 translate-y-0' : 'opacity-0 z-0 translate-y-10 pointer-events-none'}`}>
          <div className="w-20 h-20 bg-[#FDFBF7] border-4 border-[#b4843b] rounded-full flex items-center justify-center mb-6">
            <Check size={40} className="text-[#b4843b]" strokeWidth={3} />
          </div>
          <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a281d] mb-4">
            {t("success_title")}
          </h2>
          <p className="font-inter text-lg text-[#4a4a4a] leading-relaxed max-w-lg">
            {t("success_desc1")}{name}{t("success_desc2")}<span className="font-semibold text-[#1a281d]">{email}</span>.
          </p>
          <button 
            type="button"
            onClick={() => {
              setStep(1);
              setName("");
              setInterest("");
              setEmail("");
              setPhone("");
              setMessage("");
            }}
            className="mt-10 font-inter text-sm font-bold uppercase tracking-widest text-[#4a4a4a] hover:text-[#b4843b] transition-colors border-b-2 border-transparent hover:border-[#b4843b] pb-1"
          >
            {t("send_another")}
          </button>
        </div>

      </form>
      
      {/* Progress indicators */}
      {step < 5 && (
        <div className="flex justify-center gap-2 mt-8 md:mt-12">
          {[1, 2, 3, 4].map((s) => (
            <div 
              key={s} 
              className={`h-1.5 rounded-full transition-all duration-500 ${s === step ? 'w-8 bg-[#b4843b]' : s < step ? 'w-4 bg-[#1a281d]' : 'w-4 bg-[#EBE7DD]'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
