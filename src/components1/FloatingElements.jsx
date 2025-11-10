const FloatingElements = () => {
  return (
    <>
      <div className="absolute top-20 left-10 floating">
        <div className="w-20 h-20 bg-orange-light/20 rounded-full"></div>
      </div>
      <div
        className="absolute bottom-20 right-10 floating"
        style={{ animationDelay: "-3s" }}
      >
        <div className="w-16 h-16 bg-orange-vibrant/20 rounded-full"></div>
      </div>
    </>
  );
};

export default FloatingElements;
