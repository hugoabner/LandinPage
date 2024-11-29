
export const Footer = () => {
  
  return (<footer className="bg-green-950 text-white py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Sección de información de la empresa */}
      <div>
        <h3 className="text-lg font-semibold">Nombre de la Empresa</h3>
        <p className="mt-2 text-sm">
          © 2024 Todos los derechos reservados.
        </p>
      </div>

      {/* Sección de enlaces */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
        <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors"
        >
          Política de Privacidad
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors"
        >
          Términos de Servicio
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors"
        >
          Contacto
        </a>
      </div>

      {/* Sección de redes sociales */}
      <div className="flex justify-start sm:justify-end space-x-4">
        <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors"
        >
          Facebook
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors"
        >
          Twitter
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors"
        >
          Instagram
        </a>
      </div>
    </div>
  </div>
</footer>



  )
}
