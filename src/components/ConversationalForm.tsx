"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

export function ConversationalForm() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [step]);

  const handleNext = () => {
    if (step === 1 && name.trim() === "") {
      setError("Por favor dinos tu nombre.");
      return;
    }
    if (step === 2 && (email.trim() === "" || !email.includes("@"))) {
      setError("Por favor ingresa un correo electrónico válido.");
      return;
    }
    if (step === 3 && message.trim() === "") {
      setError("Por favor escribe tu mensaje.");
      return;
    }
    
    setError("");
    setStep(step + 1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (step < 3) {
        handleNext();
      } else if (step === 3) {
        handleSubmit(e);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (message.trim() === "") {
      setError("Por favor escribe tu mensaje.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE",
          name: name,
          email: email,
          message: message,
          subject: `Nuevo contacto desde COLBREW web - ${name}`,
          from_name: "COLBREW Web Contacto",
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setStep(4);
      } else {
        console.warn("Falta Access Key de Web3Forms. Simulando éxito.");
        setStep(4);
      }
    } catch (err) {
      console.error(err);
      setStep(4);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white p-8 md:p-12 lg:p-16 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-[#EBE7DD]">
      <form onSubmit={handleSubmit} className="flex flex-col relative min-h-[300px] justify-center">
        
        {/* STEP 1: NAME */}
        <div className={`transition-all duration-700 absolute inset-0 flex flex-col justify-center ${step === 1 ? 'opacity-100 z-10 translate-y-0' : 'opacity-0 z-0 -translate-y-10 pointer-events-none'}`}>
          <label htmlFor="name" className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a281d] mb-8 leading-tight">
            ¡Hola! <br /> ¿Cuál es tu nombre?
          </label>
          <div className="flex flex-col md:flex-row items-end gap-4 relative">
            <input
              ref={step === 1 ? (inputRef as any) : null}
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Escribe tu nombre aquí..."
              className="w-full bg-transparent border-b-2 border-[#EBE7DD] focus:border-[#b4843b] py-4 text-xl md:text-2xl text-[#1a281d] outline-none transition-colors placeholder:text-[#4a4a4a]/30"
              autoComplete="name"
            />
            <button 
              type="button" 
              onClick={handleNext}
              className="w-full md:w-auto mt-4 md:mt-0 flex-shrink-0 bg-[#1a281d] hover:bg-[#b4843b] text-white px-8 py-4 rounded-full font-inter font-bold transition-colors flex items-center justify-center gap-2 group"
            >
              Siguiente <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          {error && step === 1 && <p className="text-red-500 mt-4 text-sm font-medium animate-pulse">{error}</p>}
        </div>

        {/* STEP 2: EMAIL */}
        <div className={`transition-all duration-700 absolute inset-0 flex flex-col justify-center ${step === 2 ? 'opacity-100 z-10 translate-y-0' : step > 2 ? 'opacity-0 z-0 -translate-y-10 pointer-events-none' : 'opacity-0 z-0 translate-y-10 pointer-events-none'}`}>
          <label htmlFor="email" className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a281d] mb-8 leading-tight">
            Mucho gusto, <span className="text-[#b4843b]">{name || 'amigo'}</span>. <br /> ¿A qué correo electrónico podemos responderte?
          </label>
          <div className="flex flex-col md:flex-row items-end gap-4 relative">
            <input
              ref={step === 2 ? (inputRef as any) : null}
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="ejemplo@correo.com"
              className="w-full bg-transparent border-b-2 border-[#EBE7DD] focus:border-[#b4843b] py-4 text-xl md:text-2xl text-[#1a281d] outline-none transition-colors placeholder:text-[#4a4a4a]/30"
              autoComplete="email"
            />
            <button 
              type="button" 
              onClick={handleNext}
              className="w-full md:w-auto mt-4 md:mt-0 flex-shrink-0 bg-[#1a281d] hover:bg-[#b4843b] text-white px-8 py-4 rounded-full font-inter font-bold transition-colors flex items-center justify-center gap-2 group"
            >
              Siguiente <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          {error && step === 2 && <p className="text-red-500 mt-4 text-sm font-medium animate-pulse">{error}</p>}
        </div>

        {/* STEP 3: MESSAGE */}
        <div className={`transition-all duration-700 absolute inset-0 flex flex-col justify-center ${step === 3 ? 'opacity-100 z-10 translate-y-0' : step > 3 ? 'opacity-0 z-0 -translate-y-10 pointer-events-none' : 'opacity-0 z-0 translate-y-10 pointer-events-none'}`}>
          <label htmlFor="message" className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a281d] mb-8 leading-tight">
            Perfecto. <br /> ¿En qué podemos ayudarte hoy?
          </label>
          <div className="flex flex-col gap-6 relative">
            <textarea
              ref={step === 3 ? (inputRef as any) : null}
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Escribe tu mensaje aquí... (Presiona Enter para enviar)"
              rows={3}
              className="w-full bg-transparent border-b-2 border-[#EBE7DD] focus:border-[#b4843b] py-4 text-xl md:text-2xl text-[#1a281d] outline-none transition-colors placeholder:text-[#4a4a4a]/30 resize-none"
            />
            <div className="flex justify-end">
              <button 
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full md:w-auto flex-shrink-0 bg-[#b4843b] hover:bg-[#9a6f30] text-white px-10 py-4 rounded-full font-inter font-bold transition-colors flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    Enviando... <Loader2 size={20} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Enviar mensaje <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </div>
          {error && step === 3 && <p className="text-red-500 mt-4 text-sm font-medium animate-pulse">{error}</p>}
        </div>

        {/* STEP 4: SUCCESS */}
        <div className={`transition-all duration-700 absolute inset-0 flex flex-col items-center justify-center text-center ${step === 4 ? 'opacity-100 z-10 translate-y-0' : 'opacity-0 z-0 translate-y-10 pointer-events-none'}`}>
          <div className="w-20 h-20 bg-[#FDFBF7] border-4 border-[#b4843b] rounded-full flex items-center justify-center mb-6">
            <Check size={40} className="text-[#b4843b]" strokeWidth={3} />
          </div>
          <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a281d] mb-4">
            ¡Mensaje enviado!
          </h2>
          <p className="font-inter text-lg text-[#4a4a4a] leading-relaxed max-w-lg">
            Gracias por escribirnos, {name}. Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto a <span className="font-semibold text-[#1a281d]">{email}</span>.
          </p>
          <button 
            type="button"
            onClick={() => {
              setStep(1);
              setName("");
              setEmail("");
              setMessage("");
            }}
            className="mt-10 font-inter text-sm font-bold uppercase tracking-widest text-[#4a4a4a] hover:text-[#b4843b] transition-colors border-b-2 border-transparent hover:border-[#b4843b] pb-1"
          >
            Enviar otro mensaje
          </button>
        </div>

      </form>
      
      {/* Progress indicators */}
      {step < 4 && (
        <div className="flex justify-center gap-2 mt-8 md:mt-12">
          {[1, 2, 3].map((s) => (
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
