import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [enviado, setEnviado] = useState(false);
  const [cargando, setCargando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCargando(true);

    const formData = {
      nombre: e.target.nombre.value,
      email: e.target.email.value,
      mensaje: e.target.mensaje.value,
    };

    try {
      // Conexión con tu función de Netlify
      await axios.post('/api/contacto', formData);
      setEnviado(true);
      e.target.reset();
    } catch (error) {
      alert("Error al enviar el mensaje. Inténtalo de nuevo.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <section className="bg-[#0D1B2A] py-20 px-4 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-[#1B263B] p-8 rounded-xl border border-[#415A77] shadow-2xl">
        <h2 className="text-[#E0E1DD] text-3xl font-bold mb-2">Hablemos</h2>
        <p className="text-[#778DA9] mb-8">Juan Diego Tinoco Velasquez - tinoco7038@gmail.com</p>

        {enviado ? (
          <div className="bg-[#415A77] text-[#E0E1DD] p-4 rounded-lg text-center animate-bounce">
            ¡Mensaje enviado con éxito! Te contactaré pronto.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[#778DA9] text-sm mb-2">Nombre</label>
              <input 
                name="nombre" required
                className="w-full bg-[#0D1B2A] border border-[#415A77] rounded-lg p-3 text-[#E0E1DD] focus:outline-none focus:border-[#778DA9] transition-colors"
                placeholder="Tu nombre completo"
              />
            </div>
            <div>
              <label className="block text-[#778DA9] text-sm mb-2">Email</label>
              <input 
                name="email" type="email" required
                className="w-full bg-[#0D1B2A] border border-[#415A77] rounded-lg p-3 text-[#E0E1DD] focus:outline-none focus:border-[#778DA9] transition-colors"
                placeholder="correo@ejemplo.com"
              />
            </div>
            <div>
              <label className="block text-[#778DA9] text-sm mb-2">Mensaje</label>
              <textarea 
                name="mensaje" rows="4" required
                className="w-full bg-[#0D1B2A] border border-[#415A77] rounded-lg p-3 text-[#E0E1DD] focus:outline-none focus:border-[#778DA9] transition-colors"
                placeholder="¿En qué puedo ayudarte?"
              ></textarea>
            </div>
            <button 
              type="submit"
              disabled={cargando}
              className="w-full bg-[#415A77] hover:bg-[#778DA9] text-[#E0E1DD] font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
            >
              {cargando ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;