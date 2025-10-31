const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">Dra. Viviana Goldman</h3>
          <p className="text-sm opacity-90 mb-4">Odontóloga - MN 12345</p>
          <p className="text-sm opacity-75">
            © {new Date().getFullYear()} Consultorio Odontológico Dra. Viviana Goldman. Todos los derechos reservados.
          </p>
          <p className="text-xs opacity-75 mt-2">
            Villa Crespo, Buenos Aires, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
