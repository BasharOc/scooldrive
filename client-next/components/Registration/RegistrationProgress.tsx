type RegistrationProgressProps = {
  currentStep: number;
  totalSteps: number;
};

export default function RegistrationProgress({
  currentStep,
  totalSteps,
}: RegistrationProgressProps) {
  return (
    <div className="mb-8 h-2 w-full rounded-full bg-gray-200">
      <div
        className="h-2 rounded-full bg-[#F5BB00] transition-all duration-500"
        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
      />
    </div>
  );
}
