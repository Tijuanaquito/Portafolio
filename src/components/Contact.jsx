import React from 'react';

const Contact = () => {
  return (
    <section className="bg-[#0D1B2A] py-20 px-4 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-[#1B263B] p-8 rounded-xl border border-[#415A77] shadow-2xl">
        <h2 className="text-[#E0E1DD] text-3xl font-bold mb-2 text-center">¡Hablemos!</h2>
        <p className="text-[#778DA9] mb-8 text-center text-sm">
          Juan Diego Tinoco Velasquez <br/> 
          <span className="text-[#415A77]">tinoco7038@gmail.com</span>
        </p>

        {/* Formulario conectado a tu ID de Formspree */}
        <form 
          action="https://formspree.io/f/mwvrqbpg" 
          method="POST"
          className="space-y-6"
        >
          <div>
            <label className="block text-[#778DA9] text-sm mb-2">Nombre</label>
            <input 
              type="text" 
              name="name" 
              required
              placeholder="Tu nombre completo"
              className="w-full bg-[#0D1B2A] border border-[#415A77] rounded-lg p-3 text-[#E0E1DD] focus:outline-none focus:border-[#778DA9]"
            />
          </div>

          <div>
            <label className="block text-[#778DA9] text-sm mb-2">Tu Email</label>
            <input 
              type="email" 
              name="email" 
              required
              placeholder="email@ejemplo.com"
              className="w-full bg-[#0D1B2A] border border-[#415A77] rounded-lg p-3 text-[#E0E1DD] focus:outline-none focus:border-[#778DA9]"
            />
          </div>

          <div>
            <label className="block text-[#778DA9] text-sm mb-2">Mensaje</label>
            <textarea 
              name="message" 
              rows="4" 
              required
              placeholder="¿En qué puedo ayudarte?"
              className="w-full bg-[#0D1B2A] border border-[#415A77] rounded-lg p-3 text-[#E0E1DD] focus:outline-none focus:border-[#778DA9]"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#415A77] hover:bg-[#778DA9] text-[#E0E1DD] font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;