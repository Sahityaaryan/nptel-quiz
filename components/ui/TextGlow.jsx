export function TextGlow({ children }) {
    return (
      <h1 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-500 to-teal-500 shadow-lg shadow-cyan-500/50">
        {children}
      </h1>
    );
  }
  