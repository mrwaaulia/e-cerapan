import Link from "next/link";
import { cerapanSteps } from "@/constants/navigation";

interface StepperProps {
  currentStep: number;
}

export default function Stepper({ currentStep }: StepperProps) {
  return (
    <div className="mb-8 w-full">
      <div className="flex items-start justify-center">
        {cerapanSteps.map((step, index) => {
          const isCompleted = step.id < currentStep;
          const isActive = step.id === currentStep;

          const canNavigate = step.id <= currentStep;

          return (
            <div
              key={step.id}
              className="flex flex-1 items-start last:flex-none"
            >
              <div className="flex min-w-0 flex-1 flex-col items-center">
                {canNavigate ? (
                  <Link
                    href={step.path}
                    className={[
                      "flex h-8 w-8 items-center justify-center rounded-full",
                      "border text-[11px] font-semibold",
                      "transition-colors",
                      isCompleted || isActive
                        ? "border-primary bg-white text-primary"
                        : "border-gray-300 bg-white text-neutral",
                    ].join(" ")}
                  >
                    {String(step.id).padStart(2, "0")}
                  </Link>
                ) : (
                  <div
                    className={[
                      "flex h-8 w-8 items-center justify-center rounded-full",
                      "border text-[11px] font-semibold",
                      isActive
                        ? "border-primary bg-white text-primary"
                        : "border-gray-300 bg-white text-neutral",
                    ].join(" ")}
                  >
                    {String(step.id).padStart(2, "0")}
                  </div>
                )}

                <span
                  className={[
                    "mt-2 text-center text-[10px] sm:text-xs",
                    isActive
                      ? "font-semibold text-primary"
                      : isCompleted
                        ? "text-primary"
                        : "text-neutral",
                  ].join(" ")}
                >
                  {step.label}
                </span>
              </div>

              {index < cerapanSteps.length - 1 && (
                <div
                  className={[
                    "mt-4 h-px flex-1",
                    isCompleted ? "bg-primary" : "bg-gray-300",
                  ].join(" ")}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
