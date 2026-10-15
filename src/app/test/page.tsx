import Button, {
  type ButtonSize,
  type ButtonState,
} from "@/components/Button";

const sizes: ButtonSize[] = ["sm", "md", "lg"];
const states: ButtonState[] = ["default", "hover", "disabled"];

export default function ButtonTestPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-stack-lg p-page-horizontal">
      <header className="flex flex-col gap-inline-sm">
        <h1 className="typography-heading-lg text-text-primary">
          Button 실습 페이지
        </h1>
        <p className="typography-body-md text-text-secondary">
          크기와 상태별 버튼 모양을 확인할 수 있습니다.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-stack-md sm:grid-cols-3">
        {sizes.map((size) => (
          <section
            aria-labelledby={`button-size-${size}`}
            className="flex flex-col gap-stack-md rounded-guide-panel border border-border-default bg-surface-default p-stack-md"
            key={size}
          >
            <h2
              className="typography-label-lg text-text-primary"
              id={`button-size-${size}`}
            >
              {size.toUpperCase()}
            </h2>

            {states.map((state) => (
              <div
                className="flex flex-col gap-inline-sm"
                key={`${size}-${state}`}
              >
                <p className="typography-caption-md text-text-secondary">
                  {state}
                </p>
                <Button
                  aria-label={`${size} ${state} 버튼`}
                  label={`${size} ${state}`}
                  size={size}
                  state={state}
                />
              </div>
            ))}
          </section>
        ))}
      </div>
    </main>
  );
}
