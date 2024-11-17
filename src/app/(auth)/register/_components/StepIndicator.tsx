const StepIndicator = ({ currentStep }: { currentStep: number }) => {
  return (
    <div className="flex flex-col items-center">
      {/* Step 1 */}
      <div className="flex flex-col items-center">
        <div
          className={`w-[60px] h-[60px] rounded-full flex items-center justify-center text-[30px] border font-bold ${
            currentStep === 1
              ? 'bg-VioletCalido text-WhiteVariacion border-BorderColor'
              : 'bg-BlackCalido text-GrayCalido border-BorderColor'
          }`}
        >
          1
        </div>
        <div className="h-10 w-px bg-GrayCalido"></div>
      </div>

      {/* Step 2 */}
      <div className="flex flex-col items-center">
        <div
          className={`w-[60px] h-[60px] rounded-full flex items-center justify-center text-[30px] border font-bold ${
            currentStep === 2
              ? 'bg-VioletCalido text-WhiteVariacion border-BorderColor'
              : 'bg-BlackCalido text-GrayCalido border-BorderColor'
          }`}
        >
          2
        </div>
        <div className="h-10 w-px bg-GrayCalido"></div>
      </div>

      {/* Step 3 */}
      <div className="flex flex-col items-center">
        <div
          className={`w-[60px] h-[60px] rounded-full flex items-center justify-center text-[30px] border font-bold ${
            currentStep === 3
              ? 'bg-VioletCalido text-WhiteVariacion border-BorderColor'
              : 'bg-BlackCalido text-GrayCalido border-BorderColor'
          }`}
        >
          3
        </div>
      </div>
    </div>
  );
};

export default StepIndicator;
