const CoinLabelBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-6 flex flex-wrap gap-x-4 gap-y-2 bg-purple10">
      {children}
    </div>
  );
};

export default CoinLabelBox;
