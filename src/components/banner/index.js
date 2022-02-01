const Banner = ({ children }) => {
  return (
    <div className="bg-orange-50 rounded-md p-2 flex items-center justify-center">
      {children}
    </div>
  );
};

export default Banner;
