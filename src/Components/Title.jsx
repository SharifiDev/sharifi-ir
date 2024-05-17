function Title({ children }) {
  return (
    <>
      <header className="flex justify-between items-center w-full ">
        {children}
      </header>
    </>
  );
}

export default Title;
