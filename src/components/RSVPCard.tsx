import Button from "@/components/Button";
import InfoRow from "@/components/InfoRow";
import Input from "@/components/Input";
import Label from "@/components/Label";
import RadioOption from "@/components/RadioOption";
import Stepper from "@/components/Stepper";
import SuccessIcon from "@/components/SuccessIcon";

export type RSVPCardState = "form" | "done";

type RSVPCardProps = {
  className?: string;
  companionCount?: number;
  name?: string;
  state?: RSVPCardState;
  status?: boolean | "yes" | "no";
};

export default function RSVPCard({
  className = "",
  companionCount = 1,
  name = "김허들",
  state = "form",
  status = "yes",
}: RSVPCardProps) {
  const attending = status === true || status === "yes";

  return (
    <section
      className={`flex w-full max-w-sm flex-col items-start gap-stack-lg rounded-card bg-surface-default px-page-horizontal py-stack-lg ${className}`}
      data-name="RSVPCard"
    >
      {state === "form" ? (
        <>
          <header className="flex w-full flex-col items-center gap-inline-compact text-center">
            <h2 className="typography-heading-lg text-text-strong">
              참석 여부 알려주기
            </h2>
            <p className="typography-body-md text-text-secondary">
              이름과 참석 여부를 남겨주세요.
            </p>
          </header>

          <div className="flex w-full flex-col gap-stack-lg">
            <Input label="이름" placeholder="이름을 입력해주세요" />

            <fieldset className="flex w-full flex-col gap-inline-md">
              <legend className="mb-inline-md">
                <Label label="참석 여부" />
              </legend>
              <div className="grid w-full grid-cols-2">
                <RadioOption label="참석" required={false} state="selected" />
                <RadioOption label="불참" required={false} />
              </div>
            </fieldset>

            <div className="flex w-full flex-col items-start gap-inline-md">
              <Label label="동반 인원" />
              <Stepper value={companionCount} />
              <p className="typography-caption-md text-text-tertiary">
                본인을 제외하고 함께 오는 인원이에요.
              </p>
            </div>
          </div>

          <Button className="w-full" label="참석 여부 보내기" size="lg" />
        </>
      ) : (
        <>
          <div className="flex w-full flex-col items-center gap-stack-sm px-none py-section-lg text-center">
            <SuccessIcon />
            <h2 className="typography-title-lg text-text-strong">
              참석 여부를 보냈어요
            </h2>
            <p className="typography-body-md text-text-secondary">
              호스트에게 응답이 전달됐어요.
            </p>
          </div>
          <div className="flex w-full flex-col gap-inline-md rounded-card bg-surface-subtle p-stack-md">
            <InfoRow label="이름" type="spread" value={name} />
            <InfoRow
              label="참석 여부"
              type="spread"
              value={attending ? "참석" : "불참"}
            />
            <InfoRow
              label="동반 인원"
              type="spread"
              value={attending ? `${companionCount}명` : "0명"}
            />
          </div>
        </>
      )}
    </section>
  );
}
