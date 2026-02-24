"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Word } from "@/types";
import { revalidateCache } from "@/utils/revalidate-cache";

import { useState } from "react";

interface AnswerAreaProps {
  question: Word;
  options: Word[];
}

function AnswerArea({ question, options }: AnswerAreaProps) {
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");

  function handleChange(value: string) {
    setStatus("idle");
    setAnswer(value);
  }

  function checkAnswer() {
    if (answer === question.definitionEng) {
      setStatus("correct");
    } else {
      setStatus("wrong");
    }
  }

  function fetchNext() {
    revalidateCache("/quiz");
    setStatus("idle");
  }

  return (
    <div className="flex flex-col gap-2 mt-8">
      <RadioGroup onValueChange={handleChange}>
        {options.map((option) => (
          <FieldLabel key={option.id} htmlFor={option.id}>
            <Field orientation="horizontal" aria-invalid={status === "wrong"}>
              <FieldContent>
                <FieldTitle>{option.definitionEng}</FieldTitle>
                <FieldDescription>
                  {status !== "idle" &&
                    answer === option.definitionEng &&
                    status}
                </FieldDescription>
              </FieldContent>
              <RadioGroupItem id={option.id} value={option.definitionEng} />
            </Field>
          </FieldLabel>
        ))}
      </RadioGroup>
      <Button
        className={status === "correct" ? "bg-green-500" : ""}
        onClick={status === "correct" ? fetchNext : checkAnswer}
      >
        {status === "correct" ? "Next" : "Check"}
      </Button>
    </div>
  );
}

export default AnswerArea;
